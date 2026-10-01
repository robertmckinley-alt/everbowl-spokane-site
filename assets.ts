// All media hosted on a public CDN (CORS-enabled) so the site deploys as a
// tiny code-only bundle. Bowl/spread photos are real Everbowl brand photography.
const B = "https://d2ol7oe51mr4n9.cloudfront.net/user_3EYPmwtztSzZFM0MKDfVfBshbpu";

export const A = {
  // 1280w scrub-optimized encode (mobile / small screens)
  heroVideo: `${B}/c5dd964d-ebdf-426d-97ec-00225814f512.mp4`,
  // 2560w AI-upscaled encode (desktop / high-DPI screens)
  heroVideoHD: `${B}/503245ab-abd6-4201-9e97-618feb0b3f04.mp4`,
  heroPoster: `${B}/aab8c7b2-a07c-42d5-8eee-1036fe64834c.jpg`,
  bowlAcai: `${B}/79c7f603-0851-449d-b318-f2180c0b2101.jpg`,
  bowlPitaya: `${B}/75433944-05fe-46c7-8c4a-a08aba6e2bc9.jpg`,
  bowlCustom: `${B}/203ecf6f-b8d8-4ad7-b35c-e38b88ec0220.jpg`,
  smoothies: `${B}/629bd73a-a3df-457b-aadd-571f6c321d1b.jpg`,
  spread: `${B}/22383a3a-c141-496c-b371-82dfb961b765.jpg`,
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
