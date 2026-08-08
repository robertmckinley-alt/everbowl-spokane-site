// All media hosted on a public CDN (CORS-enabled) so the site deploys as a
// tiny code-only bundle. Swap these for your own CDN/S3 URLs anytime.
const B = "https://d2ol7oe51mr4n9.cloudfront.net/user_3EYPmwtztSzZFM0MKDfVfBshbpu";

export const A = {
  heroVideo: `${B}/21543c3d-f191-48be-af1e-97801f65be31.mp4`,
  heroPoster: `${B}/2102700c-7b68-42f4-baf8-764f24dedd11.png`,
  bowlAcai: `${B}/9a971840-0b65-4f07-ab00-54336a4f0f74.jpg`,
  bowlPitaya: `${B}/b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg`,
  bowlNutty: `${B}/ee557844-fb66-41b2-8d32-c78a539eb48b.jpg`,
  smoothies: `${B}/b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg`,
  plate: `${B}/a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg`,
  monogram: `${B}/d786c528-0377-4f20-9f7a-05b7308b91d7.png`,
  iconLeaf: `${B}/b074d48a-f573-4f1e-90bb-7030e7f12f51.png`,
  iconMove: `${B}/534a64de-5583-4a1e-85a7-7fe60667a03c.png`,
  iconFresh: `${B}/be863c6f-e5c2-428e-82f2-e54a3eebb275.png`,
  og: `${B}/6ba26f97-d429-4d26-badf-9f5e631c7da6.png`,
};

export const HERO_CHAPTERS = [
  {
    kicker: "Everbowl · Spokane",
    title: "Fuel for movement.",
    body: "Cold-blended açaí, real fruit, and ancestral superfoods in a bowl built to get you moving.",
    tags: ["Açaí", "Pitaya", "Smoothies"],
    cta: true,
  },
  {
    kicker: "Back to basics",
    title: "We unevolve.",
    body: "Simple, ancestral superfoods. No fillers, no fuss. Just really, really good bowls and good vibes.",
    tags: ["Real fruit", "No junk"],
  },
  {
    kicker: "Made to order",
    title: "Fruit-forward, always fresh.",
    body: "Every bowl is blended and built the moment you order it: granola, banana, berries, coconut, the works.",
    tags: ["Blended fresh", "Piled high"],
  },
  {
    kicker: "Now in Spokane",
    title: "Spokane's superfood bowl bar.",
    body: "Swing by after the trail, the river, or the gym. Grab a bowl, refuel, and get back to it.",
    tags: ["Dine in", "To go", "Rewards"],
  },
];
