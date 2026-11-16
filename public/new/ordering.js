(() => {
  'use strict';
  // Set this only when Everbowl supplies this store's own Incentivio menu URL.
  const SPOKANE_ORDER_URL = '';
  function connect() {
    if (!/^https:\/\/order\.incentivio\.com\/c\/everbowl\/locations\/[a-z0-9-]+\/menu\/?$/.test(SPOKANE_ORDER_URL)) return;
    const source = new URL(SPOKANE_ORDER_URL);
    if (/\/locations\/beverly\//.test(source.pathname)) return;
    document.querySelectorAll('.bv-order-status,.fs-status,.fs-reward-status>span:first-child').forEach(status => {
      if (!/ordering/i.test(status.textContent)) return;
      const link=document.createElement('a');link.className=status.className;link.href=source.href;
      link.target='_blank';link.rel='noopener noreferrer';link.textContent='Order online ↗';status.replaceWith(link);
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',connect,{once:true});else connect();
})();
