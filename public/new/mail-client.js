(() => {
  'use strict';
  const pending = new Map();
  const state = new WeakMap();
  const config = () => window.EVERBOWL_MAIL_CONFIG || {};
  const endpoint = () => /^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(config().endpoint || '') ? config().endpoint : '';
  const googleOrigin = value => /^https:\/\/(?:script\.google\.com|(?:[a-z0-9-]+-)?script\.googleusercontent\.com)$/.test(value);
  window.addEventListener('message', event => {
    const d = event.data;
    if (!googleOrigin(event.origin) || !d || d.type !== 'everbowl-mail-result' || typeof d.requestId !== 'string' || typeof d.ok !== 'boolean') return;
    const item = pending.get(d.requestId);
    if (!item) return;
    item.finish(d.ok ? null : new Error(typeof d.message === 'string' ? d.message.slice(0, 400) : 'We could not send this. Please try again.'), d);
  });
  function prepare(form) {
    if (state.has(form)) return;
    const trap = document.createElement('label');
    trap.className = 'fs-mail-honeypot'; trap.setAttribute('aria-hidden', 'true');
    trap.innerHTML = 'Leave this field empty<input name="website" tabindex="-1" autocomplete="off">';
    form.appendChild(trap);
    state.set(form, {startedAt: Date.now(), signature: '', requestId: '', busy: null});
  }
  function send(form, formType) {
    prepare(form);
    const st = state.get(form);
    if (st.busy) return st.busy;
    const url = endpoint();
    if (!url) return Promise.reject(new Error('Online sending is not connected yet. Please use the email option below.'));
    const values = Object.fromEntries([...new FormData(form)].map(([k, v]) => [k, String(v)]));
    const signature = JSON.stringify([formType, values]);
    if (signature !== st.signature || !st.requestId) { st.signature = signature; st.requestId = crypto.randomUUID(); }
    const requestId = st.requestId;
    const payload = {...values, formType, requestId, origin: location.protocol === 'file:' ? 'null' : location.origin, startedAt: String(st.startedAt)};
    let resolvePromise, rejectPromise;
    const promise = new Promise((resolve, reject) => {resolvePromise = resolve; rejectPromise = reject;});
    st.busy = promise;
    const frame = document.createElement('iframe');
    frame.hidden = true; frame.name = 'everbowl-mail-' + requestId; frame.title = 'Form delivery receipt';
    const post = document.createElement('form');
    post.hidden = true; post.method = 'POST'; post.action = url; post.target = frame.name;
    for (const [key, value] of Object.entries(payload)) { const input = document.createElement('input'); input.type = 'hidden'; input.name = key; input.value = value; post.appendChild(input); }
    let timer;
    const finish = (error, receipt) => {
      if (!pending.has(requestId)) return;
      pending.delete(requestId); clearTimeout(timer); post.remove(); frame.remove(); st.busy = null;
      if (error) rejectPromise(error);
      else { st.requestId = ''; st.signature = ''; st.startedAt = Date.now(); resolvePromise(receipt); }
    };
    pending.set(requestId, {finish});
    timer = setTimeout(() => finish(new Error('We could not confirm sending. Please retry once; the same request is protected against duplicate sending.')), Math.max(100, Number(config().timeoutMs) || 45000));
    try { document.body.append(frame, post); HTMLFormElement.prototype.submit.call(post); }
    catch (_) { finish(new Error('We could not connect. Please try again or email queenpanda@growopfarms.com.')); }
    return promise;
  }
  window.EverbowlMail = Object.freeze({prepare, send, isConnected: () => !!endpoint()});
})();
