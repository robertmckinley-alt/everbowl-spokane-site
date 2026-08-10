// Everbowl Spokane — blog content source.
// Each entry renders to /public/blog/<slug>.html via generate-blog.mjs.
// To add a post: append an object here (or use scripts/new-post.mjs) and rebuild.
export const SITE = "https://everbowl-spokane-site.vercel.app";
export const CDN = "https://d2ol7oe51mr4n9.cloudfront.net/user_3EYPmwtztSzZFM0MKDfVfBshbpu";

export const POSTS = [
  {
    slug: "acai-bowls-workout-recovery",
    title: "Do Açaí Bowls Actually Help Workout Recovery?",
    description:
      "The science on carbs, antioxidants, and protein after training — and how to build an açaí bowl that genuinely supports recovery instead of just tasting good.",
    category: "Fitness & Recovery",
    date: "2026-08-09",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "Açaí bowl topped with granola, banana, and fresh berries",
    keywords: ["acai bowl recovery", "post workout nutrition", "spokane acai", "workout fuel"],
    body: `
      <p>You just finished a lift, a long run along the Centennial Trail, or a climbing session — and a cold, thick açaí bowl sounds perfect. Good news: it's not just a treat. Built the right way, an açaí bowl hits most of the boxes sports nutrition research cares about after exercise. Built the wrong way, it's basically dessert. Here's the difference.</p>

      <h2>What your body actually needs after a workout</h2>
      <p>The post-exercise window comes down to three jobs: <strong>refill glycogen</strong> (the carbohydrate your muscles burned), <strong>repair muscle tissue</strong> (protein and its amino acids), and <strong>rehydrate and reduce oxidative stress</strong> (fluids, electrolytes, and antioxidants). A well-built bowl can contribute to all three.</p>
      <ul>
        <li><strong>Carbohydrate:</strong> Fruit, granola, and honey restock glycogen. General guidance for most people is roughly 0.5–0.7 g of carbs per pound of bodyweight in the hours after hard training.</li>
        <li><strong>Protein:</strong> Aim for about 20–40 g of protein around your session to support muscle repair. Açaí and fruit alone are low in protein — this is the piece most bowls miss.</li>
        <li><strong>Antioxidants:</strong> Açaí, berries, and pitaya are dense in polyphenols and anthocyanins, the pigments that give them that deep purple and pink color.</li>
      </ul>

      <h2>Why açaí earns its "superfood" reputation here</h2>
      <p>Açaí is a palm berry from the Amazon that's naturally low in sugar and high in the plant compounds called anthocyanins — the same antioxidants found in blueberries and blackberries. Hard exercise temporarily raises oxidative stress and inflammation (that's normal and part of adaptation), and a diet rich in colorful, antioxidant-heavy fruit is associated with better overall recovery and cardiovascular health. You won't out-supplement a bad training plan, but real fruit is a genuinely smart base.</p>

      <blockquote>The move isn't "eat açaí and recover faster." It's "make your recovery snack one that also happens to be nutrient-dense." A bowl does both.</blockquote>

      <h2>How to build a recovery-focused bowl</h2>
      <p>Next time you order, think in layers:</p>
      <ol>
        <li><strong>Base:</strong> Açaí or pitaya for antioxidants without a sugar spike.</li>
        <li><strong>Carbs:</strong> Banana, granola, and berries to refill the tank.</li>
        <li><strong>Protein + fats:</strong> Peanut or almond butter, and ask about a protein add-in. Our <a href="/#menu">PB Everbowl</a> and <a href="/#menu">Nutty Butty</a> lean this direction with peanut and almond butter plus everoats.</li>
        <li><strong>Bonus:</strong> Chia and cacao nibs add fiber, minerals, and a little more staying power.</li>
      </ol>

      <h2>Timing: how soon is soon enough?</h2>
      <p>The old "30-minute anabolic window" is less strict than people once thought. What matters more is total protein and carbs across the day. That said, eating within an hour or two of a hard session is a practical, easy habit — and if you're training again the same day, sooner is better. If a bowl is what gets you to actually refuel instead of skipping it, that's a win on its own.</p>

      <h2>The bottom line</h2>
      <p>An açaí bowl is a legitimately good recovery option when you add protein and lean on real fruit rather than piling on syrupy toppings. Cold, hydrating, antioxidant-rich, and easy to digest after a hard effort — it checks the boxes. Just remember the protein.</p>
    `,
  },

  {
    slug: "superfoods-in-your-everbowl",
    title: "7 Superfoods in Your Everbowl (and What They Do)",
    description:
      "Açaí, pitaya, chia, cacao, and more — a plain-English guide to the superfoods in your bowl and the real nutrition behind the buzzword.",
    category: "Nutrition",
    date: "2026-08-08",
    readMins: 6,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "Bright pink pitaya bowl with fresh fruit toppings",
    keywords: ["superfoods", "acai nutrition", "pitaya benefits", "chia seeds", "cacao"],
    body: `
      <p>"Superfood" isn't a scientific category — it's a marketing word. But some foods really do pack an outsized amount of nutrition per bite, and several of them live in your bowl. Here's what each one actually brings to the table, minus the hype.</p>

      <h2>1. Açaí</h2>
      <p>The deep-purple base of our signature bowls. Açaí is naturally low in sugar and rich in <strong>anthocyanins</strong>, the antioxidant pigments linked to heart and brain health. It also carries healthy fats, which is unusual for a fruit and part of why it blends so thick and creamy.</p>

      <h2>2. Pitaya (dragon fruit)</h2>
      <p>The hot-pink base in bowls like our <a href="/#menu">Blue Lagoon</a> and drinks like the Pitaya Paradise smoothie. Pitaya is hydrating, high in fiber, and a source of vitamin C and magnesium. Those tiny black seeds add a little extra fiber and a satisfying crunch.</p>

      <h2>3. Chia seeds</h2>
      <p>Small but mighty. Chia is one of the best plant sources of <strong>omega-3 fatty acids</strong> and delivers a big dose of soluble fiber — about 10 grams per ounce. That fiber absorbs liquid and expands, which is why a chia pudding bowl keeps you full for hours.</p>

      <h2>4. Cacao</h2>
      <p>Raw cacao (the stuff before it becomes candy) is loaded with flavanols and minerals like magnesium and iron. In our <a href="/#menu">Full Moon</a> and Perfect Date bowls it brings a rich, brownie-like flavor with a fraction of the sugar of chocolate.</p>

      <h2>5. Goji berries</h2>
      <p>A traditional ingredient in East Asian food and medicine, goji berries are a source of vitamin A and antioxidants, with a slightly tart, chewy bite. You'll find them in our Berry Boost bowl.</p>

      <h2>6. Coconut</h2>
      <p>"Coco love," shredded coconut, and coconut milk show up across the menu. Coconut adds texture, a dose of healthy fats, and that tropical flavor — and the fats help you absorb the fat-soluble vitamins in the fruit alongside it.</p>

      <h2>7. Spinach &amp; greens</h2>
      <p>Blended into green smoothies like the <a href="/#menu">Evergreen</a>, spinach disappears into the flavor while adding folate, vitamin K, and iron. It's the easiest way to get a serving of greens without tasting a salad.</p>

      <blockquote>The real "super" power isn't any single berry — it's eating a wide variety of colorful, whole plant foods. A bowl makes that genuinely easy (and delicious).</blockquote>

      <h2>How to think about it</h2>
      <p>No single ingredient is magic, and a bowl won't undo an otherwise rough diet. But layering açaí, berries, seeds, and greens in one dish gives you fiber, antioxidants, healthy fats, and micronutrients in a form that's cold, fresh, and easy to eat. That's a strong foundation — the buzzword is optional.</p>
    `,
  },

  {
    slug: "pre-vs-post-workout-fuel-spokane",
    title: "Pre- vs. Post-Workout Fuel: What to Eat Around Exercise",
    description:
      "A simple Spokane-friendly guide to eating before and after training — what to eat, how much, and how far ahead, whether you're hitting the gym or the river.",
    category: "Fitness & Recovery",
    date: "2026-08-07",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Everbowl smoothies lined up and ready to go",
    keywords: ["pre workout food", "post workout meal", "smoothie before workout", "spokane fitness"],
    body: `
      <p>What you eat around a workout can be the difference between a session that flies by and one where you run out of gas halfway through. The rules are simpler than most fitness content makes them sound. Here's the practical version.</p>

      <h2>Before you train: easy energy</h2>
      <p>The goal before exercise is <strong>accessible carbohydrate</strong> without a heavy, slow-digesting meal sitting in your stomach. How far ahead you eat drives what you eat:</p>
      <ul>
        <li><strong>2–3 hours out:</strong> A normal balanced meal is fine — carbs, some protein, a little fat.</li>
        <li><strong>30–60 minutes out:</strong> Go lighter and carb-forward. A smoothie is close to ideal here: liquid, quick to digest, and easy on the gut. A <a href="/#smoothies">Nanaberry Bliss</a> or Glow Up gives you fruit sugar for fast fuel.</li>
        <li><strong>Right before:</strong> Keep it tiny — a banana or a few sips of juice. Fat and heavy fiber slow digestion, so save the big loaded bowl for after.</li>
      </ul>

      <h2>After you train: refill and repair</h2>
      <p>Post-workout is where a bowl shines. Now you want a combination of carbs to restock glycogen and <strong>protein to repair muscle</strong> — roughly 20–40 g of protein for most people, plus carbs scaled to how hard you went.</p>
      <ul>
        <li><strong>Carbs:</strong> Açaí or pitaya base, banana, granola, berries.</li>
        <li><strong>Protein:</strong> Nut butters and oats help; add a protein boost if you can. Our <a href="/#menu">PB Everbowl</a> is a solid template.</li>
        <li><strong>Fluids:</strong> You sweat more than you think in a Spokane summer. Blended fruit and coconut help you rehydrate on top of water.</li>
      </ul>

      <blockquote>Pre-workout = fast, light, carb-forward. Post-workout = bigger, with protein. That's 90% of it.</blockquote>

      <h2>Special cases</h2>
      <p><strong>Early-morning training:</strong> If you can't stomach food at 5 a.m., a small smoothie or even half a banana beforehand beats going in on empty. Refuel properly afterward.</p>
      <p><strong>Long endurance efforts</strong> (a big hike, a long ride): you'll want carbs <em>during</em> as well — aim for something every 45–60 minutes once you pass the 90-minute mark.</p>
      <p><strong>Trying to lose fat:</strong> You still benefit from fueling around training. Adjust total daily intake, not the smart habit of eating around your hardest sessions.</p>

      <h2>The Spokane version</h2>
      <p>Grab a smoothie on the way to the gym or the trailhead, put in the work, then swing by for a protein-topped bowl on the way home. Simple, repeatable, and it tastes a lot better than a chalky shake. Find us at <a href="/#location">13324 E Sprague Ave in Spokane Valley</a>.</p>
    `,
  },

  {
    slug: "are-acai-bowls-healthy",
    title: "Are Açaí Bowls Healthy? An Honest Breakdown",
    description:
      "Sugar, fiber, calories, and antioxidants — a straight-talking look at whether açaí bowls are actually good for you, and how to order a healthier one.",
    category: "Nutrition",
    date: "2026-08-06",
    readMins: 6,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "Cacao and peanut butter açaí bowl with banana and cacao nibs",
    keywords: ["are acai bowls healthy", "acai bowl calories", "acai bowl sugar", "healthy acai bowl"],
    body: `
      <p>Açaí bowls have a bit of a split reputation: health food to some, sugar bomb to others. The honest answer is that <strong>it depends entirely on how the bowl is built</strong>. Let's look at the real numbers and how to order well.</p>

      <h2>The good</h2>
      <ul>
        <li><strong>Antioxidants:</strong> Açaí, berries, and pitaya are genuinely rich in anthocyanins and polyphenols linked to heart and brain health.</li>
        <li><strong>Fiber:</strong> Whole fruit, granola, chia, and oats add fiber that supports digestion and keeps you full.</li>
        <li><strong>Whole-food fats:</strong> Açaí, coconut, and nut butters provide fats that help you absorb fat-soluble vitamins and stay satisfied.</li>
        <li><strong>Micronutrients:</strong> A single bowl can cover several servings of fruit — something most of us fall short on.</li>
      </ul>

      <h2>The catch</h2>
      <p>The pure açaí base is low in sugar. The sugar and calories climb with what goes <em>on top</em>: honey drizzles, sweetened granola, chocolate chips, and jumbo portions. A large bowl loaded with sweet toppings can easily reach 500–700+ calories. That's fine as a meal or post-workout refuel — less ideal as an afternoon snack on top of three full meals.</p>

      <blockquote>Açaí itself isn't the problem. Portion size and sugary toppings are what tip a bowl from "nutritious meal" to "dessert."</blockquote>

      <h2>How to order a healthier bowl</h2>
      <ol>
        <li><strong>Right-size it.</strong> A regular is a snack or light meal; a large is a full meal. Match it to your day.</li>
        <li><strong>Keep the base unsweetened.</strong> Açaí and pitaya bring flavor without needing extra sugar.</li>
        <li><strong>Add protein.</strong> Nut butter, oats, or a protein boost turn fruit into a more balanced, satisfying meal that won't spike and crash.</li>
        <li><strong>Go easy on the drizzles.</strong> A little honey is great; three sauces plus candy is where it adds up.</li>
        <li><strong>Load the whole fruit and seeds.</strong> Berries, banana, chia, and coconut add nutrition and fullness.</li>
      </ol>

      <h2>Who should be a little careful</h2>
      <p>If you're managing blood sugar, treat a bowl like the carb-containing meal it is — pair it with protein, watch the portion, and be mindful of added sweeteners. For most active people, a sensibly built bowl is a great choice.</p>

      <h2>Verdict</h2>
      <p>Yes — açaí bowls can absolutely be healthy. Built with a whole-fruit base, real toppings, and a source of protein, a bowl is one of the more nutrient-dense fast options you can grab. The healthiest bowl is the one you order with a little intention. Browse our <a href="/#menu">signature lineup</a> or build your own <a href="/#menu">Whatever Bowl</a> exactly how you want it.</p>
    `,
  },

  {
    slug: "spokane-trails-post-hike-bowl",
    title: "5 Spokane Trails to Pair With a Post-Hike Bowl",
    description:
      "From Riverside State Park to the Dishman Hills, here are five Spokane-area trails and why a cold superfood bowl is the perfect way to refuel after.",
    category: "Spokane & Movement",
    date: "2026-08-05",
    readMins: 5,
    image: "a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg",
    imageAlt: "Fresh fruit and superfood spread",
    keywords: ["spokane trails", "spokane hikes", "post hike food", "spokane valley acai"],
    body: `
      <p>Spokane is spoiled for places to move. Basalt cliffs, pine forest, river trails, and lakes are all within a short drive. Here are five favorites — and why a cold, hydrating bowl is the ideal reward when you're done. (Always check current trail conditions and bring water; a Spokane summer is no joke.)</p>

      <h2>1. Riverside State Park — Bowl &amp; Pitcher</h2>
      <p>The suspension bridge over the Spokane River is the postcard shot, and the loops here range from flat and family-friendly to genuinely rugged. Miles of options along the water make it easy to dial the effort up or down.</p>

      <h2>2. Dishman Hills Natural Area</h2>
      <p>Right in Spokane Valley, Dishman Hills packs shady forest, rocky outcrops, and pond loops into an accessible network of trails. It's the perfect "I've got 90 minutes" option — and it's minutes from our shop.</p>

      <h2>3. Iller Creek &amp; the Rocks of Sharon</h2>
      <p>A local classic. The loop climbs steadily to the Rocks of Sharon (Big Rock), where the views over the Palouse are worth every switchback. This one earns you a large bowl.</p>

      <h2>4. Liberty Lake Loop</h2>
      <p>A longer forested loop with a waterfall payoff in the wetter months. Bigger elevation and distance make it a proper half-day effort — pack snacks for the trail and plan the refuel for after.</p>

      <h2>5. Centennial Trail</h2>
      <p>Not a hike so much as a ribbon of paved trail running for miles along the river — ideal for a run, ride, or long walk. Flat, fast, and easy to access from all over town.</p>

      <div class="callout" style="background:var(--eb-plum)">
        <h3>Why a bowl after?</h3>
        <p>Hiking in the heat leaves you low on fluids, electrolytes, and glycogen. A cold açaí or pitaya bowl rehydrates, refills your carb stores, and — with a scoop of nut butter or a protein boost — helps your legs recover for the next one.</p>
        <a class="btn" href="/#location">Find us in Spokane Valley →</a>
      </div>

      <h2>Make it a routine</h2>
      <p>The best training plan is the one you look forward to. Pairing your favorite trail with a stop for something genuinely good to eat is a simple way to keep showing up. Hit the trail, then come refuel at <a href="/#menu">Everbowl Spokane</a> — we're built for exactly this.</p>
    `,
  },

  {
    slug: "late-summer-heat-hydrating-bowls-spokane",
    title: "Beat the Late-Summer Heat: Hydrating Bowls for Spokane's Hottest Weeks",
    description:
      "When Spokane Valley hits the 90s, a cold superfood bowl does double duty — fuel and hydration. Here's how to eat (and order) smart through the last hot stretch of summer.",
    category: "Spokane & Movement",
    date: "2026-08-09",
    readMins: 5,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "Bright pink pitaya bowl with fresh fruit, cold and hydrating",
    keywords: ["spokane summer heat", "hydrating bowl", "pitaya bowl spokane", "summer nutrition"],
    body: `
      <p>Late July and August are when the Inland Northwest really turns up the thermostat. Spokane Valley regularly pushes into the 90s, the pavement radiates heat off Sprague well into the evening, and anyone training outside — or just running errands — is losing more water than they realize. The good news: a cold, blended superfood bowl is one of the most pleasant ways to rehydrate and refuel at the same time.</p>

      <h2>Why hydration is really about food, too</h2>
      <p>We tend to think of hydration as "drink more water," but roughly 20% of most people's daily fluid comes from food. Water-rich fruit — pitaya, pineapple, strawberry, coconut — carries fluid <em>plus</em> the electrolytes and natural sugars that help your body actually hold onto it. On a hot day, a bowl or smoothie can do more for you than a bottle of water alone.</p>
      <ul>
        <li><strong>Pitaya (dragon fruit)</strong> is especially hydrating and light — perfect when the heat kills your appetite for anything heavy.</li>
        <li><strong>Coconut</strong> adds a little natural electrolyte content and healthy fat so the energy lasts.</li>
        <li><strong>Cold temperature</strong> itself helps — a chilled bowl lowers your core temp a touch and is far easier to get down than a hot meal when it's 95 out.</li>
      </ul>

      <h2>What to order when it's roasting</h2>
      <p>Lean pink and fruit-forward. Our <a href="/#smoothies">Pitaya Paradise smoothie</a> (pitaya, coco love, strawberry, pineapple, coconut milk) is basically hydration in a cup. If you want something to spoon, the <a href="/#menu">Blue Lagoon</a> bowl layers pitaya and coco love with chia, strawberry, pineapple, and coconut — cooling, light, and loaded with real fruit. Both are easy on a hot-weather stomach and won't sit heavy the way a burger and fries would.</p>

      <blockquote>Rule of thumb for a Spokane heat wave: the hotter it is, the more fruit-forward and cold you want your fuel. Save the peanut-butter-heavy bowls for cooler mornings.</blockquote>

      <h2>Timing it around the heat</h2>
      <p>If you exercise in summer, shift the hard stuff to early morning or after the sun drops behind the hills — and hydrate <em>before</em> you feel thirsty. A light smoothie an hour beforehand tops off your tank; a bigger bowl afterward replaces what you sweated out. Watching kids at a park all afternoon or working outside counts too: those are exactly the days a mid-afternoon cold bowl keeps everyone from wilting.</p>

      <h2>Skip the line, skip the heat</h2>
      <p>On the worst days, you don't even have to stand outside. <a href="/#order">Order ahead online</a>, park for two minutes, and grab it cold. We're at <strong>13324 E Sprague Ave, Suite 101 in Spokane Valley</strong> — an easy stop on the way home from the river, the gym, or the office. Stay cool, stay fueled, and let the fruit do the work.</p>
    `,
  },

  {
    slug: "wildfire-smoke-recovery-nutrition-inland-northwest",
    title: "Wildfire Smoke Days: Eating Well When You Can't Train Outside",
    description:
      "Smoke season is part of Inland Northwest summers. Here's how antioxidant-rich, hydrating food supports you when the air quality keeps you indoors.",
    category: "Health",
    date: "2026-08-09",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "Deep purple açaí bowl rich in antioxidants",
    keywords: ["wildfire smoke spokane", "air quality nutrition", "antioxidants", "smoke season"],
    body: `
      <p>If you've lived through a few Spokane and Coeur d'Alene summers, you know the drill: a stretch of blue-sky perfection, and then the smoke rolls in and the mountains disappear behind a beige haze. When the AQI climbs, the smart move is to take training indoors and be a little kinder to your body — and what you eat is part of that.</p>

      <h2>What smoke does, briefly</h2>
      <p>Wildfire smoke carries fine particulate that irritates airways and adds temporary oxidative stress. This isn't a call for panic or magic cures — the real protection is limiting exposure (stay in, filter your air, mask up outside on the worst days). But a diet heavy in colorful, antioxidant-rich whole foods is a sensible, food-first way to support your body during a rough-air week.</p>

      <h2>Eat the colors</h2>
      <p>The pigments that make superfoods look incredible are the same compounds associated with fighting oxidative stress:</p>
      <ul>
        <li><strong>Açaí and blueberries</strong> — deep purple anthocyanins.</li>
        <li><strong>Pitaya and strawberry</strong> — pink and red antioxidants plus vitamin C.</li>
        <li><strong>Leafy greens</strong> — folate and vitamins blended right in where you won't taste them.</li>
      </ul>
      <p>Our <a href="/#menu">Everbowl</a> (açaí, granola, banana, strawberry, blueberry) is a straightforward antioxidant hit, and the <a href="/#smoothies">Evergreen smoothie</a> sneaks blue majic, mango, pineapple, and spinach into something that actually tastes like a treat — an easy way to get greens on a day you don't feel like cooking.</p>

      <blockquote>You can't out-eat bad air, but a colorful, hydrating diet is a genuinely good habit to lean on during smoke season — and it beats reaching for chips on the couch.</blockquote>

      <h2>Hydration matters more than usual</h2>
      <p>Smoky, dry air pulls moisture from you fast. Blended fruit and coconut help you stay hydrated when plain water gets boring, and staying hydrated keeps airways more comfortable. A cold bowl or smoothie is an easy win on a day the workout got cancelled.</p>

      <h2>An indoor-day routine</h2>
      <p>Move your session indoors, keep it moderate, then refuel with something antioxidant-dense and cold. If you'd rather not be out in it at all, <a href="/#order">order online</a> and make it a quick grab at <strong>13324 E Sprague Ave in Spokane Valley</strong>. When the smoke finally clears — and it always does — you'll be ready to get back after it. Reminder: this is general wellness info, not medical advice; if smoke aggravates a health condition, follow your doctor's and local air-quality guidance.</p>
    `,
  },

  {
    slug: "coeur-dalene-lake-day-fuel",
    title: "A Coeur d'Alene Lake Day, Fueled: What to Eat Before and After the Water",
    description:
      "Paddleboarding, swimming, or floating on Lake CdA burns more than you'd think. Here's a simple before-and-after fueling plan built around real superfood bowls.",
    category: "Spokane & Movement",
    date: "2026-08-09",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Everbowl smoothies lined up and ready to go for a lake day",
    keywords: ["coeur dalene lake", "lake day food", "paddleboard fuel", "summer smoothie"],
    body: `
      <p>A day on Coeur d'Alene Lake looks relaxing from the shore, but anyone who's paddled from Tubbs Hill or spent hours swimming and hauling gear knows the truth: sun, water, and constant low-grade activity quietly drain your tank. Fuel it right and you'll feel great at sunset instead of fried.</p>

      <h2>Before the water: light and quick</h2>
      <p>You don't want a heavy meal sloshing around before you paddle out or jump in. Aim for easy-to-digest carbs that give you steady energy without weighing you down. A smoothie is close to perfect here — liquid, fast, and gentle on the stomach. Our <a href="/#smoothies">Nanaberry Bliss</a> (vanilla, banana, strawberry, almond milk) or a bright <a href="/#smoothies">Glow Up</a> (mango, pineapple, apple juice) gets you going without the mid-morning crash.</p>

      <h2>Hydrate before you're thirsty</h2>
      <p>Sun plus water activity is sneaky — you sweat even while you're wet, and the reflected sun off the lake dehydrates you faster than a normal day. Start the morning topped off with something water-rich, keep a bottle going all day, and plan a real refuel for the drive home.</p>

      <h2>After: refill and rebuild</h2>
      <p>Once you're back on dry land, your body wants carbohydrate to restock what you burned and a little protein to help you recover for tomorrow. This is bowl territory. The <a href="/#menu">PB Everbowl</a> (açaí, granola, peanut butter, banana, strawberry, blueberry) hits the carb-plus-protein sweet spot, while the fruit and coconut help you rehydrate on top of water.</p>
      <ul>
        <li><strong>Carbs:</strong> banana, granola, berries to refill the tank.</li>
        <li><strong>Protein:</strong> peanut butter, oats, or an added protein boost.</li>
        <li><strong>Fluids:</strong> blended fruit and coconut for extra hydration.</li>
      </ul>

      <blockquote>The lake takes more out of you than it feels like. A light smoothie going out, a protein-topped bowl coming back — that's the whole plan.</blockquote>

      <h2>Right on the way home</h2>
      <p>Coming back toward Spokane from CdA, we're an easy pull-off in the Valley at <strong>13324 E Sprague Ave, Suite 101</strong>. <a href="/#order">Order ahead</a> from the beach and it'll be waiting cold when you roll through. Sun-tired but well-fed beats sun-tired and hangry every time.</p>
    `,
  },

  {
    slug: "inland-northwest-farmers-market-berries",
    title: "Inland Northwest Farmers Market Season Meets the Everbowl",
    description:
      "Late-summer is peak market season across Spokane and Kootenai County. Here's how local berries and our superfood bowls make the perfect weekend pairing.",
    category: "Nutrition",
    date: "2026-08-09",
    readMins: 4,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "Açaí bowl piled with fresh berries and granola",
    keywords: ["spokane farmers market", "local berries", "kootenai county market", "seasonal eating"],
    body: `
      <p>Few things say Inland Northwest late summer like a Saturday at the farmers market. Whether you're at the Spokane Farmers' Market, the Kootenai County Farmers' Market in Hayden, or a neighborhood stand, this is the stretch when the berries are at their absolute best — and it's a great reminder of why we build our bowls the way we do.</p>

      <h2>Why local and seasonal actually matters</h2>
      <p>Fruit picked in season and eaten soon after tends to be higher in flavor and nutrients than out-of-season produce that traveled thousands of miles. It's also just better — a ripe August strawberry doesn't need any help. Eating with the seasons is one of the simplest upgrades you can make to how you eat, and late summer makes it easy.</p>

      <h2>From the market stand to the bowl</h2>
      <p>Our whole philosophy is real fruit and ancestral superfoods, nothing fake — the same instinct that draws you to a market stand. When you're not stocking your own kitchen, we do the layering for you. The <a href="/#menu">Berry Boost</a> (açaí, chia pudding, banana, strawberry, blueberry, goji berry) is basically a market haul in a bowl, and the classic <a href="/#menu">Everbowl</a> keeps it simple with açaí, granola, banana, and berries.</p>

      <blockquote>Make it a ritual: market in the morning, a bowl to cap it off. Local produce and a superfood bowl are the same idea from two directions.</blockquote>

      <h2>What the superfoods add</h2>
      <p>On top of great fruit, a bowl layers in things that are harder to grab at a stand — açaí's antioxidants, chia's fiber and omega-3s, goji berries' vitamin A. It's a nutrient-dense way to enjoy the season without any work.</p>

      <h2>Make a morning of it</h2>
      <p>Hit your market, then swing by <strong>13324 E Sprague Ave, Suite 101 in Spokane Valley</strong> to round out the morning — or <a href="/#order">order ahead</a> so it's ready when you're done browsing. Peak berry season doesn't last long around here. Enjoy it while it's this good.</p>
    `,
  },

  {
    slug: "back-to-school-breakfast-spokane",
    title: "Back-to-School Breakfast: Fast, Balanced Mornings for Spokane Families",
    description:
      "The school-year rush is back. Here's how to build a quick breakfast that keeps kids (and parents) steady until lunch — no sugar crash required.",
    category: "Nutrition",
    date: "2026-08-09",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "Peanut butter and cacao bowl with banana, a balanced breakfast",
    keywords: ["back to school breakfast", "spokane valley breakfast", "kids nutrition", "balanced breakfast"],
    body: `
      <p>School is back in session across Spokane Valley, and with it comes the great morning scramble — permission slips, missing shoes, and the eternal question of what to feed everyone before the bus. Breakfast is where a lot of families lose the nutrition battle, usually to something sugary and beige. It doesn't have to be that way, and it doesn't have to be slow.</p>

      <h2>Why breakfast composition matters</h2>
      <p>A breakfast that's mostly refined sugar spikes blood sugar and then drops it, which is exactly the wrong setup for a kid trying to focus through second period — or a parent powering through a morning of meetings. The fix is simple: pair carbohydrate with <strong>fiber, protein, and a little fat</strong> so energy releases slowly and steadily.</p>
      <ul>
        <li><strong>Fiber</strong> from whole fruit, oats, and chia slows the sugar rush.</li>
        <li><strong>Protein and fat</strong> from nut butter or oats keep everyone full to lunch.</li>
        <li><strong>Real fruit</strong> beats fruit-flavored anything, every time.</li>
      </ul>

      <h2>Kid-friendly, parent-approved</h2>
      <p>Our <a href="/#menu">Kids Bowl</a> is a right-sized way to get real fruit and superfoods into a picky eater without a fight, and a <a href="/#toast">Classic Avocado Toast</a> gives older kids and parents healthy fats and fiber with a little honey to make it fun. For a grab-and-run option, a <a href="/#smoothies">Nanaberry Bliss</a> smoothie is breakfast you can drink in the car line.</p>

      <blockquote>The best breakfast is the one that actually gets eaten. Something balanced and portable beats a perfect meal nobody has time for.</blockquote>

      <h2>Beat the morning rush</h2>
      <p>On the mornings that go sideways, let us handle it. <a href="/#order">Order online</a> on the drive and grab it on the way to school — we're at <strong>13324 E Sprague Ave, Suite 101 in Spokane Valley</strong>, minutes from Valley schools. A steady, real-food breakfast is one of the easiest wins of the school year. (General wellness info, not medical or dietary advice — every kid is different.)</p>
    `,
  },
];
