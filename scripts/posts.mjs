// Everbowl Spokane — blog content source.
// Each entry renders to /public/blog/<slug>.html via generate-blog.mjs.
// To add a post: append an object here (or use scripts/new-post.mjs) and rebuild.
export const SITE = "https://everbowlspokane.com";
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
    image: "/blog-img/pb-everbowl.jpg",
    imageAlt: "PB Everbowl with açaí, peanut butter, granola, banana, strawberry, and blueberry",
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
    image: "1e2cd827-18ce-4c1b-adf2-c08bcd354e00.jpg",
    imageAlt: "Five Everbowl bowls with fresh fruit toppings, seen from above",
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
    image: "e122709c-fabe-47e1-bc9d-194eedcf464d.jpg",
    imageAlt: "Two colorful Everbowl creations topped with granola and fresh strawberries",
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
    image: "/blog-img/everbowl.jpg",
    imageAlt: "The signature Everbowl: açaí base with granola, banana, strawberry, and blueberry",
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
    image: "0d0d3e7a-efe2-4f1d-abfd-646e86bfb3aa.jpg",
    imageAlt: "Pitaya and chia Everbowl in a branded cup, held up outdoors",
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
    image: "1a7c4832-72e3-40d2-9ad6-ff4c0fe1c4c8.jpg",
    imageAlt: "Layered Everbowl with pitaya, açaí, kiwi, pineapple, and banana",
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
    image: "/blog-img/berry-boost.jpg",
    imageAlt: "Berry Boost bowl with açaí, chia pudding, banana, berries, and goji",
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
    image: "/blog-img/blue-lagoon.jpg",
    imageAlt: "Blue Lagoon bowl with blue majik, pitaya, chia pudding, and fresh fruit",
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
    image: "22383a3a-c141-496c-b371-82dfb961b765.jpg",
    imageAlt: "Spread of Everbowl bowls, smoothies, and avocado toast",
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
    image: "/blog-img/kids-bowl.jpg",
    imageAlt: "The Everbowl Kids Bowl with fruit toppings",
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

  {
    slug: "green-bluff-harvest-season-superfood-bowls",
    title: "Green Bluff to the Bowl: Making the Most of Harvest Season",
    description:
      "Green Bluff's u-pick season is ramping up. Here's how to turn a day of peaches and early apples into a genuinely nourishing routine — bowl included.",
    category: "Nutrition",
    date: "2026-08-11",
    readMins: 5,
    image: "4a41ab95-ab59-468a-a662-65a9c7cd98f7.jpg",
    imageAlt: "Top-down view of an Everbowl topped with kiwi, blueberries, banana, and hemp seeds",
    keywords: ["green bluff", "harvest season spokane", "u-pick", "seasonal eating inland northwest"],
    body: `
      <p>Up on Green Bluff, just northeast of Spokane, harvest season is getting underway. Late summer brings peaches, huckleberries, and the first early apples; the orchards and farm stands fill up with families, and it becomes one of the best weekend traditions the Inland Northwest has to offer. It's also a perfect excuse to talk about eating with the seasons — something we're a little obsessed with.</p>

      <h2>Why a Green Bluff haul is good for you</h2>
      <p>Freshly picked, in-season fruit tends to be higher in flavor and nutrients than produce that's traveled across the country. Peaches bring vitamin C and fiber; apples add gut-friendly pectin; huckleberries are packed with the same antioxidant pigments that make our açaí bowls so deeply purple. Filling a bag straight from the tree is about as close to the source as food gets.</p>

      <h2>Balance the day out</h2>
      <p>A day at the Bluff often ends with cider donuts and a caramel apple — and that's part of the fun, no guilt here. The trick is balance: pair the treats with real, fiber-and-protein-forward food so your blood sugar isn't on a roller coaster all afternoon. That's where a bowl fits perfectly on the drive up or the way home.</p>
      <ul>
        <li><strong>Before you go:</strong> a fruit-forward, easy-to-digest smoothie keeps energy steady while you're walking rows of trees.</li>
        <li><strong>On the way home:</strong> a protein-topped bowl balances out the day's sweeter snacks.</li>
      </ul>

      <h2>What to order</h2>
      <p>To lean into the season's flavors, our <a href="/#menu">Full Moon</a> bowl (vanilla, cacao wow, granola, banana, strawberry, peanut butter, cacao nibs) brings a rich, harvest-y depth with far less sugar than a caramel apple — plus real protein from the peanut butter. For the ride up, a bright <a href="/#smoothies">Glow Up</a> smoothie (mango, pineapple, apple juice) is all fruit, all energy. Prefer to build your own around what's in season? The <a href="/#menu">Whatever Bowl</a> lets you stack exactly the fruit you love.</p>

      <blockquote>Green Bluff and a superfood bowl are the same idea from two directions: real, seasonal fruit, close to the source. Make a day of both.</blockquote>

      <h2>Keep the season going at home</h2>
      <p>You'll inevitably come home with more peaches and apples than you can eat before they turn. Freeze the extras for smoothies, slice apples with nut butter for a snack that mirrors what we do on our <a href="/#toast">PB Crunch Toast</a>, and lean on whole fruit over anything processed while the picking's this good. Late-summer produce this fresh only lasts a few weeks.</p>

      <h2>Refuel on the way back through the Valley</h2>
      <p>Green Bluff makes for a full day, and everyone's ready for something real by the time you're heading home. We're an easy stop at <strong>13324 E Sprague Ave, Suite 101 in Spokane Valley</strong> — <a href="/#order">order ahead online</a> and grab it cold and ready. Enjoy the harvest; it's one of the best things about living here. (General wellness info, not medical or dietary advice.)</p>
    `,
  },
  {
    slug: "antioxidants-explained-colors-in-your-bowl",
    title: "Antioxidants, Explained: What the Colors in Your Bowl Actually Do",
    description:
      "Smoke season has everyone asking about antioxidants. Here's a plain-English look at what they do, why the colors matter, and what's fair to claim.",
    category: "Nutrition",
    date: "2026-08-20",
    readMins: 5,
    image: "/blog-img/pitayum.jpg",
    imageAlt: "Pitayum bowl layering açaí, pitaya, and coco love with pineapple and kiwi",
    keywords: ["antioxidants", "anthocyanins", "acai nutrition", "spokane valley acai", "wildfire smoke season"],
    body: `
      <p>Late August in the Inland Northwest has a particular look to it: hazy afternoons, a sun that turns orange by dinnertime, and that faint campfire smell that isn't a campfire. Smoke season and the tail end of real heat tend to overlap here, and both of them send people searching for the word "antioxidant." It's one of the most used and least understood terms in nutrition, so here's the plain-English version — what these compounds actually do, why the colors in a bowl matter, and what's honest to claim about them.</p>

      <h2>What an antioxidant actually is</h2>
      <p>Normal metabolism — breathing, digesting, training hard — produces reactive molecules called free radicals. Environmental exposures like smoke, pollution, and UV light add more on top. In excess, these molecules can damage cells through a process called oxidative stress. Antioxidants are compounds that neutralize them, and your body runs on a mix of the ones it makes itself and the ones you eat.</p>
      <p>Now the honest framing, because this is where marketing usually runs off the rails: eating antioxidant-rich food is a sensible part of a good diet. It is <strong>not</strong> a shield against wildfire smoke, and it is not a treatment for anything. On genuinely bad air-quality days in Spokane, what actually protects you is staying indoors, running a decent filter, and moving the workout inside. Food plays a supporting role here, not a starring one.</p>

      <h2>The colors are the point</h2>
      <p>Here's the genuinely useful part. The pigments that make plant foods vividly colored are, in many cases, the antioxidant compounds themselves. Color isn't decoration — it's a rough readout of what's in there.</p>
      <ul>
        <li><strong>Deep purple and blue</strong> — anthocyanins, the pigments in açaí, blueberries, blackberries, and elderberry.</li>
        <li><strong>Hot pink and magenta</strong> — betalains, which give pitaya (dragon fruit) and beets their color.</li>
        <li><strong>Orange and red</strong> — carotenoids, found in mango, papaya, and sweet potato.</li>
        <li><strong>Deep green</strong> — chlorophyll alongside lutein and vitamin C, in spinach, kale, and matcha.</li>
        <li><strong>Dark and bitter</strong> — flavanols, concentrated in cacao.</li>
      </ul>
      <p>Different pigment families behave differently in the body, which is the real argument for variety. "Eat the rainbow" sounds like a poster in a school cafeteria, but the reasoning holds up: no single compound covers everything, so range beats intensity.</p>

      <h2>Whole fruit beats an extract</h2>
      <p>You'll see antioxidant capsules and mega-dose powders marketed hard in August, right when everyone is thinking about smoke. Be skeptical. Isolated high-dose antioxidant supplements have a mixed research record, while whole foods deliver these compounds alongside fiber, water, and a long list of others that appear to work in concert. Food-first is the defensible position.</p>
      <p>Be equally skeptical of ORAC-score marketing. That lab measure was used for years to rank foods by antioxidant capacity, and the USDA eventually withdrew its ORAC database because the values didn't reliably predict what happens inside a human being. Anyone still leading with an ORAC number is selling you something.</p>

      <h2>Building a bowl worth eating</h2>
      <p>This is where a superfood bowl earns its keep — it's a practical way to get several different pigment families into one sitting. Our <a href="/#menu">Everbowl</a> is built on an açaí base, which puts anthocyanins front and center, and the berry and banana toppings stack more on top. For the pink end of the spectrum, <a href="/#menu">Blue Lagoon</a> and <a href="/#menu">Pitayum</a> bring pitaya's betalains into the mix — a genuinely different family of compounds, not just a different flavor.</p>
      <p>Want to cover more ground in one stop? Add cacao nibs for flavanols, or pair a bowl with an <a href="/#sips">Iced Matcha</a> for the green side. A <a href="/#smoothies">Pitaya Paradise</a> smoothie does something similar in a form you can drink on the way to work.</p>

      <h2>What to actually do this week</h2>
      <ol>
        <li>Aim for several different colors across the day rather than a lot of one.</li>
        <li>Choose whole fruit over juice or extract when you have the choice — the fiber matters.</li>
        <li>On smoke days, sort out air quality first. Treat food as maintenance, not defense.</li>
        <li>Keep hydrating. Heat and dry smoke both raise what you lose without noticing.</li>
      </ol>

      <blockquote>The simplest antioxidant strategy is also the oldest one: eat a variety of real, colorful plants, most days, in ordinary amounts.</blockquote>

      <h2>Come find the colorful version</h2>
      <p>If your late-summer eating has drifted beige, a bowl is an easy reset. We're at <strong>13324 E Sprague Ave, Suite 101 in Spokane Valley</strong> — <a href="/#order">order ahead online</a> and pick it up cold, or come in and build something with every color on it. (General wellness info, not medical or dietary advice.)</p>
    `,
  },

  {
    slug: "fall-foliage-tubbs-hill-mineral-ridge",
    title: "Fall Foliage at Tubbs Hill and Mineral Ridge: A Post-Trail Refuel Guide",
    description:
      "October is the Inland Northwest's best-kept hiking secret. Here's how to time the color at Tubbs Hill and Mineral Ridge, what to pack, and how to refuel on the drive back through Spokane Valley.",
    category: "Spokane & Movement",
    date: "2026-10-01",
    readMins: 5,
    image: "/blog-img/nutty-butty.jpg",
    imageAlt: "Nutty Butty bowl with banana, strawberry, peanut and almond butter, and cinnamon",
    keywords: ["tubbs hill fall", "mineral ridge hike", "coeur d'alene hiking", "fall hikes spokane", "post hike food"],
    body: `
      <p>Summer crowds are gone, the smoke has cleared, and the larch and aspen around Lake Coeur d'Alene are starting to turn. If you only hike one month a year in the Inland Northwest, make it October — and make it these two trails.</p>

      <h2>Tubbs Hill: the lunch-break classic</h2>
      <p>Right off downtown Coeur d'Alene, the main loop around Tubbs Hill runs a little over two miles of lake views, basalt outcrops, and quiet coves. In October the maples and shrubs along the east side light up, and on a calm morning the lake doubles every color. It's an easy walk by mountain-town standards, but the rolling grade still earns you an appetite — especially if you take the spur trails up toward the summit.</p>

      <h2>Mineral Ridge: the view that's worth the switchbacks</h2>
      <p>Twenty minutes further around the lake, the Mineral Ridge Scenic Loop climbs about 700 feet in a bit over three miles above Beauty Bay. This is the one to save for a clear afternoon: the overlooks frame Wolf Lodge Bay, where bald eagles start gathering as the kokanee run picks up in late fall. Bring layers — the breeze off the lake has teeth once the sun drops behind the ridge.</p>

      <blockquote>Trail math worth knowing: a brisk two-hour fall hike can burn 500 to 800 calories. If you drive home on an empty tank, the gas station snack aisle usually wins. Have a plan instead.</blockquote>

      <h2>What to eat before you go</h2>
      <p>These are morning-friendly hikes, so eat like it. A couple hours ahead, you want slow carbs, a little protein, and nothing heavy. A <a href="/#menu">Hot Oats</a> bowl with banana does the job on a cold morning; so does a <a href="/#toast">PB Crunch Toast</a> if you're grabbing something on the way out of Spokane Valley — we're right on E Sprague, basically on your route to I-90.</p>

      <h2>The refuel on the way home</h2>
      <p>The drive back from Mineral Ridge to Spokane Valley is about 35 minutes, which is roughly how long your muscles stay most eager to restock glycogen. That's good timing. Swing into Everbowl at 13324 E Sprague Ave, Suite 101 and build the recovery plate:</p>
      <ul>
        <li><strong>Carbs to restock:</strong> an açaí or pitaya base with banana and granola — the <a href="/#menu">Pitayum</a> covers all of it in one bowl.</li>
        <li><strong>Protein to repair:</strong> peanut or almond butter, or go straight to the <a href="/#menu">PB Everbowl</a>.</li>
        <li><strong>Fluids you'll actually drink:</strong> cold-blended fruit carries water with it. A <a href="/#smoothies">Nanaberry Bliss</a> on the side finishes the job.</li>
      </ul>

      <h2>October logistics, quickly</h2>
      <p>Days are shortening fast — sunset lands around 6:15 by mid-month, so start Mineral Ridge by 3 at the latest. Trails are damp in the mornings; shoes with real tread beat sneakers. And the Tubbs Hill lot fills on sunny Saturdays even in fall, so early is still the move. Hike the color, earn the bowl, and get back before the dark does.</p>
    `,
  },

  {
    slug: "hot-oats-fall-routine-spokane",
    title: "Cooler Mornings, Warmer Fuel: Why Hot Oats Belong in Your Fall Routine",
    description:
      "When Spokane mornings drop into the 30s, breakfast strategy changes. The case for hot oats: slow carbs, real staying power, and a warm start that still counts as superfood fuel.",
    category: "Nutrition",
    date: "2026-10-02",
    readMins: 5,
    image: "/blog-img/oats-whatever-bowl.jpg",
    imageAlt: "Warm oats Whatever Bowl ready for fall toppings",
    keywords: ["hot oats", "oatmeal benefits", "fall breakfast spokane", "slow carbs", "beta glucan"],
    body: `
      <p>There's a specific morning every fall in Spokane when you walk outside, see your breath for the first time, and your usual breakfast suddenly feels wrong. It usually lands in early October. That's the morning hot oats start making sense again.</p>

      <h2>What oats actually do well</h2>
      <p>Oats are one of the least flashy and most proven foods in the building. The headline is a soluble fiber called <strong>beta-glucan</strong>, which forms a gel as it digests. That gel slows everything down — which is exactly what you want from breakfast:</p>
      <ul>
        <li><strong>Steadier energy:</strong> slower digestion means a flatter glucose curve and fewer 10 a.m. crashes.</li>
        <li><strong>Real fullness:</strong> oats consistently rank near the top of satiety research among common breakfast foods.</li>
        <li><strong>Heart support:</strong> beta-glucan is one of the few food components with an FDA-recognized claim for helping maintain healthy cholesterol levels as part of an overall healthy diet.</li>
      </ul>

      <h2>Warm fuel, cold morning, same superfoods</h2>
      <p>A hot bowl doesn't mean giving up everything that makes a superfood bowl work. Our <a href="/#menu">Hot Oats</a> are certified gluten free and built like everything else here: you pick the flavor infusions, protein, and toppings. Banana and cinnamon make it taste like fall; chia and peanut butter make it hold you until lunch; berries keep the antioxidant story going even when it's 37 degrees in the parking lot.</p>

      <blockquote>The quiet trick with oats is protein. Plain oatmeal is mostly carbs — satisfying for an hour, then gone. Adding peanut butter or a protein boost turns the same bowl into an actual meal.</blockquote>

      <h2>Hot oats vs. overnight oats vs. açaí</h2>
      <p>Nobody has to pick a single team, but here's the honest matchup. Overnight-style oats (our <a href="/#menu">Oats Bowl</a>) are cold, convenient, and great after a workout. Açaí bowls bring the biggest antioxidant load and the most fruit per spoonful. Hot oats win mornings when the car windshield is frosted, you've got a long day ahead, and warm-and-slow beats cold-and-bright. Through a Spokane fall and winter, that's a lot of mornings.</p>

      <h2>Make it a routine, not a decision</h2>
      <p>Food habits stick when you remove the morning negotiation. If your commute runs anywhere near E Sprague in Spokane Valley, the play is simple: <a href="/#order">order ahead</a>, grab the warm bowl at 13324 E Sprague Ave, Suite 101, and eat something that respects both the season and your afternoon. Decision made once, benefits daily.</p>
    `,
  },

  {
    slug: "green-bluff-apple-season-guide",
    title: "Apple Season at Green Bluff: U-Pick Weekends, Done Right",
    description:
      "October at Green Bluff means apples, pumpkins, and parking chaos. A local's playbook for picking season — plus how a morning on the Bluff pairs with a bowl on the way home.",
    category: "Spokane & Movement",
    date: "2026-10-03",
    readMins: 5,
    image: "79c7f603-0851-449d-b318-f2180c0b2101.jpg",
    imageAlt: "Açaí bowl topped with fresh berries and granola",
    keywords: ["green bluff apple festival", "u-pick apples spokane", "green bluff october", "fall activities spokane"],
    body: `
      <p>Green Bluff in October is peak Spokane: a loop of family farms twenty-five minutes north of town, orchard rows heavy with apples, pumpkin fields open for wandering, and half the county showing up for it on Saturday afternoon. It's worth the trip every single year. It's also worth doing smart.</p>

      <h2>The October playbook</h2>
      <ul>
        <li><strong>Go early or go weekday.</strong> The festival-weekend crowds hit hardest from late morning on. Gates at most farms open by 9 or 10 — the first two hours are a different, calmer experience.</li>
        <li><strong>Pick varieties on purpose.</strong> Early October is Honeycrisp and Gala territory; later in the month brings Fuji and Granny Smith. Ask the farm what came ripe that week — that's the whole point of u-pick.</li>
        <li><strong>Layer up.</strong> The Bluff sits higher than town. A sunny 58 in Spokane Valley is a breezy 50 up there.</li>
        <li><strong>Cash in on the walking.</strong> Between orchard rows, pumpkin fields, and the inevitable corn maze, a Green Bluff morning quietly covers three or four miles. It counts.</li>
      </ul>

      <h2>An honest word about apples</h2>
      <p>Apples get taken for granted in a world of exotic superfruits, and they shouldn't be. A medium apple carries around four grams of fiber — much of it pectin, a soluble fiber your gut bacteria love — plus quercetin and other polyphenols concentrated in the skin. Eat the skin. The fresher the apple, the better it all holds up, and nothing beats one picked an hour ago.</p>

      <blockquote>Seasonal eating isn't a trend here; it's just what the Inland Northwest serves up. August was berries. October is apples. Your bowl can follow the same calendar.</blockquote>

      <h2>Where the bowl comes in</h2>
      <p>Green Bluff runs on cider and donuts, and we would never argue with one warm donut. But if the crew is hungry-hungry on the drive home, the route south drops you near Spokane Valley fast. Stop at Everbowl, 13324 E Sprague Ave, Suite 101, and keep the harvest theme going: a <a href="/#menu">Whatever Bowl</a> lets the kids build their own (apples pair absurdly well with peanut butter and granola over a vanilla base), the <a href="/#menu">Nutty Butty</a> is basically autumn in a cup, and a warm <a href="/#menu">Hot Oats</a> with cinnamon tastes like the orchard you just left. Picking apples all morning, then eating something built from real fruit — that's a consistent day.</p>

      <h2>Make it a season, not a day</h2>
      <p>The Bluff turns over week by week through October — apples early, pumpkins and squash as Halloween closes in, and the tasting rooms and cideries humming all month. One visit is tradition. Two is a habit we endorse.</p>
    `,
  },

  {
    slug: "smoothie-vs-bowl-workout",
    title: "Smoothie or Bowl? What to Order Before and After a Workout",
    description:
      "Same ingredients, different jobs. When a drinkable smoothie beats a spoonable bowl around training, when it's the other way around, and what to order for each.",
    category: "Fitness & Recovery",
    date: "2026-10-04",
    readMins: 5,
    image: "629bd73a-a3df-457b-aadd-571f6c321d1b.jpg",
    imageAlt: "Fresh smoothies lined up on the counter at Everbowl",
    keywords: ["smoothie vs bowl", "pre workout food", "post workout smoothie", "training nutrition spokane"],
    body: `
      <p>It's a real question we hear at the counter: "I just worked out — smoothie or bowl?" They're built from the same bases and fruit, so the nutrition labels look like cousins. But texture changes how food behaves, and that makes each one better at a different job.</p>

      <h2>Before training: lean liquid</h2>
      <p>The closer you are to a workout, the more a <strong>smoothie</strong> makes sense. Liquids clear the stomach faster than solids, so a smoothie 45 to 60 minutes before a run or a lift gives you usable carbohydrate without that sloshing, too-full feeling. Keep it simpler than you think: fruit, a light base, not too much fat or fiber right before hard efforts. A <a href="/#smoothies">Glow Up</a> — mango, pineapple, apple juice — is about as clean a pre-workout as we pour. Caffeine folks can pair it with a <a href="/#sips">cold brew</a> about 30 minutes out.</p>

      <h2>After training: the bowl earns its spoon</h2>
      <p>Post-workout, the priorities flip. You're not racing the clock on digestion anymore — you're trying to land carbs to refill glycogen, protein to repair, and enough satisfaction that you don't raid the pantry at 9 p.m. Bowls win here for a sneaky reason: <strong>chewing</strong>. Eating with a spoon, with granola crunch and toppings, registers as a meal in a way a straw never quite does. Research on eating rate backs the intuition — slower eating and more chewing track with better fullness signals.</p>
      <ul>
        <li><strong>Strength day:</strong> <a href="/#menu">PB Everbowl</a> — açaí, granola, peanut butter, banana. Add a protein boost.</li>
        <li><strong>Long cardio:</strong> <a href="/#menu">Pitayum</a> — double-fruit base and plenty of carbs to restock.</li>
        <li><strong>Light session:</strong> <a href="/#menu">Berry Boost</a> — chia pudding and goji keep it lighter but useful.</li>
      </ul>

      <blockquote>Rule of thumb: drink your fuel when the workout is ahead of you, chew your fuel when it's behind you.</blockquote>

      <h2>The in-between cases</h2>
      <p>Early-morning training on an empty stomach? Half a smoothie before, bowl after. Two-a-days? Smoothie between sessions, real meal at night. Just here because it's Saturday? Order whatever sounds good — that's allowed too. We're at 13324 E Sprague Ave, Suite 101 in Spokane Valley, with <a href="/#order">online ordering</a> timed well for the post-gym window. Either way it's the same real fruit — the only question is whether today calls for a straw or a spoon.</p>
    `,
  },

  {
    slug: "appleway-trail-spokane-valley-guide",
    title: "The Appleway Trail: Spokane Valley's Everyday Mile-Maker",
    description:
      "No trailhead drive, no gear list — the paved Appleway Trail runs straight through Spokane Valley and makes daily movement almost too easy. A guide to using it well, plus the refuel right off the path.",
    category: "Spokane & Movement",
    date: "2026-10-05",
    readMins: 4,
    image: "75433944-05fe-46c7-8c4a-a08aba6e2bc9.jpg",
    imageAlt: "Vibrant pitaya bowl with tropical fruit toppings",
    keywords: ["appleway trail", "spokane valley walking", "paved trails spokane", "daily steps", "walk after eating"],
    body: `
      <p>The flashy trails get the Instagram posts, but the trail that actually changes your health is the one you can reach in five minutes on a Tuesday. In Spokane Valley, that's the Appleway Trail — a flat, paved path running along the old rail corridor just south of Sprague, block after block of easy miles through the middle of town.</p>

      <h2>Why boring trails win</h2>
      <p>Research on exercise adherence is almost comically consistent: convenience beats inspiration. People keep habits that remove friction. The Appleway asks nothing of you — no drive, no parking strategy, no weather-proof ambition. Just out the door and walk. University to Evergreen, Evergreen onward toward Liberty Lake; string segments together and you can bank five flat miles without crossing a mountain or a calendar conflict.</p>

      <h2>The 15-minute trick that's backed by actual science</h2>
      <p>Here's the one habit worth stealing this fall: a short walk after meals. Studies on post-meal walking show that even 10 to 15 minutes of easy movement after eating meaningfully blunts the blood-sugar rise that follows a meal, because working muscles pull in glucose without needing much insulin to do it. It's one of the highest-return, lowest-effort habits in all of health — and it requires exactly the kind of flat, nearby path the Appleway is.</p>

      <blockquote>You don't need a training plan. You need a loop you can do without thinking, close enough to use daily. Everything else is bonus.</blockquote>

      <h2>Our favorite loop (biased, but correct)</h2>
      <p>Everbowl sits at 13324 E Sprague Ave, Suite 101 — a few minutes from the trail corridor. Which sets up what we'd argue is the ideal Spokane Valley lunch hour: pick up a bowl, walk a mile of the Appleway while the food settles, loop back. You get sunshine (or at least daylight — this is October), a couple thousand steps, and the post-meal walk your glucose curve wanted anyway. A <a href="/#menu">Berry Boost</a> or a <a href="/#toast">Classic Avocado Toast</a> travels well; a <a href="/#smoothies">Pitaya Paradise</a> walks even better, one hand free.</p>

      <h2>October is the trail's best month</h2>
      <p>Summer bakes this corridor and January ices it, but right now the Appleway is in its prime — crisp air, turning trees along the path, and enough daylight at lunch to use it. The fancy hikes can have your weekends. Give the boring trail your weekdays, and it'll quietly out-perform everything else you do this fall.</p>
    `,
  },
  {
    slug: "how-much-protein-active-adults",
    title: "How Much Protein Do You Actually Need?",
    description:
      "Gym lore says more, your uncle says less, and the science sits in the middle. A plain-English protein guide for active Inland Northwest people — with realistic numbers and where a bowl fits.",
    category: "Nutrition",
    date: "2026-10-06",
    readMins: 6,
    image: "/blog-img/pb-protein-ice-blended-coffee.jpg",
    imageAlt: "Peanut Butter Protein Ice Blended Coffee from Everbowl",
    keywords: ["how much protein", "protein per day", "protein active adults", "muscle protein synthesis"],
    body: `
      <p>Protein might be the most argued-about number in nutrition, which is funny, because the research is actually pretty settled. Here's the honest version, without a supplement to sell you.</p>

      <h2>The numbers that matter</h2>
      <p>The official minimum — 0.8 grams per kilogram of bodyweight per day — is just that: a minimum, set to prevent deficiency in sedentary adults. If you train, hike, ski, or simply want to keep muscle as you age, sports nutrition bodies consistently land higher:</p>
      <ul>
        <li><strong>Generally active people:</strong> roughly 1.2 to 1.6 g/kg per day — for a 170-pound adult, that's about 90 to 125 grams.</li>
        <li><strong>Regular strength training:</strong> 1.6 to 2.2 g/kg, toward the higher end in a fat-loss phase, when protein also protects muscle.</li>
        <li><strong>Over 50?</strong> Aim higher rather than lower. Aging muscle responds less eagerly to protein, so each meal needs to clear a bigger threshold.</li>
      </ul>

      <h2>Distribution beats heroics</h2>
      <p>Your muscles don't tally protein weekly; they respond meal by meal. Most research points to 25 to 40 grams per meal, three to four times a day, beating one giant dinner. The most commonly skipped slot? Morning. A pastry-and-coffee breakfast is a zero-protein start that leaves you chasing the target all day.</p>

      <blockquote>If you fix only one thing, fix breakfast. Getting 25+ grams before noon makes the rest of the day's math easy.</blockquote>

      <h2>Where a bowl honestly fits</h2>
      <p>Straight talk: fruit and açaí alone are not a protein meal. That's exactly why the build matters. Start from the <a href="/#menu">Nutty Butty</a> — peanut butter, almond butter, almonds, and everoats stack up real grams — or take a <a href="/#menu">PB Everbowl</a> and ask about the protein add-in. On the drinkable side, a <a href="/#smoothies">PB Cacao Dream</a> with a protein boost turns a smoothie into a legitimate 25-gram stop. Chia, granola, and oats each chip in a few more grams than people expect.</p>

      <h2>Food first, powder second</h2>
      <p>Whole-food protein brings passengers — fiber, minerals, healthy fats — that scoops don't. Powders are a fine tool for hitting targets on busy days, not a foundation. And no, within sane intakes, higher protein does not damage healthy kidneys; that myth has been studied to death.</p>

      <h2>The Spokane Valley version of the plan</h2>
      <p>Figure your daily target once (bodyweight in pounds × 0.7 is a decent middle-ground shortcut in grams). Then build repeatable slots: eggs or oats-plus-nut-butter at home, a protein-boosted bowl from 13324 E Sprague Ave, Suite 101 after the gym, normal dinner. Consistency with a decent number beats perfection with an ambitious one — every single week.</p>
    `,
  },

  {
    slug: "vitamin-d-gray-season-inland-northwest",
    title: "Vitamin D and the Gray Season: An Inland Northwest Survival Guide",
    description:
      "From October to March, Spokane's sun is too low to make vitamin D in your skin. What that actually means, what the research supports, and the food-first ways to head into the gray smart.",
    category: "Health",
    date: "2026-10-07",
    readMins: 5,
    image: "/blog-img/glow-up.jpg",
    imageAlt: "Glow Up smoothie in a branded Everbowl cup",
    keywords: ["vitamin d winter", "spokane gray season", "vitamin d foods", "seasonal wellness"],
    body: `
      <p>Spokane sits at about 47.7 degrees north — roughly the same latitude as northern Maine. From mid-October through early March, the sun never climbs high enough here for your skin to make meaningful vitamin D, no matter how many crisp bluebird days you spend outside. Welcome to the gray season. Let's plan for it instead of just enduring it.</p>

      <h2>What vitamin D actually does</h2>
      <p>It's less a vitamin than a hormone precursor: it regulates calcium absorption for bone health, and receptors for it show up in immune cells, muscle, and the brain. Solid evidence ties adequate vitamin D to bone strength and healthy immune function; the links to mood and energy are suggestive but messier. What's not debated: a large share of northern-latitude adults run low by late winter.</p>

      <h2>The honest hierarchy</h2>
      <ol>
        <li><strong>Know your baseline.</strong> A simple blood test at your annual physical answers in one number what no blog can.</li>
        <li><strong>Food helps, modestly.</strong> Fatty fish is the heavyweight; eggs, fortified milks, and UV-exposed mushrooms contribute. Most dairy-free milks — including the almond and coconut milk we blend with — are fortified with D, which quietly adds up if a <a href="/#smoothies">smoothie</a> is part of your routine.</li>
        <li><strong>Supplements are cheap and well-studied.</strong> Many clinicians suggest a daily D3 through northern winters — the dose is a conversation for your own doctor, not our counter.</li>
        <li><strong>Daylight still matters.</strong> Even D-free winter sun drives your circadian rhythm, sleep, and mood. Outside time keeps paying either way.</li>
      </ol>

      <blockquote>You can't photosynthesize your way through a Spokane January. You can test, eat well, and keep going outside anyway.</blockquote>

      <h2>The bigger gray-season picture</h2>
      <p>Vitamin D is one piece of a pattern that works against you from October on: less light, less movement, heavier food, worse sleep. The counter-pattern is boring and effective — morning daylight on your face, movement most days, and colorful plants on purpose when the landscape stops providing color. That last one is where we're useful: a <a href="/#menu">Berry Boost</a> or <a href="/#menu">Blue Lagoon</a> in October delivers the same anthocyanin-dense fruit as it did in July, no sunshine required.</p>

      <h2>Set the habit before the dark lands</h2>
      <p>The clocks fall back in early November and the real gray settles in after that. Build the routine now — light, movement, fruit, maybe that doctor's appointment — and swing by 13324 E Sprague Ave, Suite 101 when the routine needs to taste like summer. The season is coming either way; arriving prepared is the whole game.</p>
    `,
  },

  {
    slug: "caffeine-performance-cold-brew-matcha",
    title: "Caffeine and Performance: Cold Brew, Matcha, and Timing Done Right",
    description:
      "Caffeine is the most-studied performance aid on earth. How much helps, when to take it, why matcha feels different from coffee, and how to caffeinate without wrecking your sleep.",
    category: "Fitness & Recovery",
    date: "2026-10-08",
    readMins: 5,
    image: "/blog-img/cold-brew.jpg",
    imageAlt: "Everbowl cold brew coffee over ice",
    keywords: ["caffeine performance", "cold brew workout", "matcha vs coffee", "caffeine timing sleep"],
    body: `
      <p>Caffeine is the rare supplement with decades of consistent evidence behind it: it reliably improves endurance, power output, and perceived effort. It's also the easiest good thing to use badly. Here's the field guide.</p>

      <h2>What the research supports</h2>
      <p>Performance studies cluster around 3 to 6 mg per kilogram of bodyweight taken 30 to 60 minutes before exercise — but honest reviews show meaningful benefit at lower, friendlier doses too. For most people, 100 to 200 mg before a workout is plenty: that's one strong cold brew. More isn't better; past your tolerance you just buy jitters and a faster heart rate without extra watts.</p>

      <h2>Cold brew vs. matcha: same drug, different ride</h2>
      <p>Our <a href="/#sips">cold brew</a> is the classic hit — fast up, strong peak, great before a lift or a morning run. Matcha carries less caffeine per cup plus <strong>L-theanine</strong>, an amino acid that studies show smooths caffeine's edge: alert but calm, fewer jitters. That's why an <a href="/#sips">Iced Matcha</a> suits a long study session or an easy trail day, while cold brew suits the squat rack. Neither is "healthier" — they're different tools.</p>

      <blockquote>Caffeine doesn't create energy; it borrows it by blocking the sleepiness signal. The loan comes due at bedtime if you time it wrong.</blockquote>

      <h2>The timing rules that actually matter</h2>
      <ul>
        <li><strong>Cutoff:</strong> caffeine's half-life is 5 to 6 hours. A 3 p.m. cold brew leaves half its caffeine in you at 8 or 9 p.m. Most people sleep better with a noon-to-2 p.m. last call.</li>
        <li><strong>Delay the first cup</strong> if you crash mid-morning — having it with breakfast instead of on an empty stomach smooths the curve for a lot of people.</li>
        <li><strong>Pair it with carbs before training.</strong> Caffeine plus fuel outperforms caffeine alone — a cold brew next to a <a href="/#smoothies">Glow Up</a> smoothie is a legitimate pre-workout stack.</li>
        <li><strong>Don't chase sleep debt with dose.</strong> Past ~400 mg/day, side effects compound and benefits don't.</li>
      </ul>

      <h2>Our counter, your protocol</h2>
      <p>At 13324 E Sprague Ave, Suite 101 the caffeine menu runs from straight cold brew to cinnamon or cacao cold-foam versions to matcha, iced or blended. Pick the tool, time it like you mean it, and let the fruit side of the menu handle the actual fuel.</p>
    `,
  },

  {
    slug: "dishman-hills-iller-creek-fall-hikes",
    title: "Dishman Hills to Rocks of Sharon: Spokane Valley's Backyard Fall Hikes",
    description:
      "You don't need to leave the Valley for a real hike. October routes through the Dishman Hills and up Iller Creek to the Rocks of Sharon — granite views, turning larch, and a bowl ten minutes after the trailhead.",
    category: "Spokane & Movement",
    date: "2026-10-09",
    readMins: 5,
    image: "203ecf6f-b8d8-4ad7-b35c-e38b88ec0220.jpg",
    imageAlt: "Custom-built Everbowl with fruit and granola toppings",
    keywords: ["dishman hills", "iller creek trail", "rocks of sharon", "spokane valley hikes", "fall hiking"],
    body: `
      <p>Ask someone in Spokane Valley where they hike and half will name somewhere forty minutes away — while the Dishman Hills sit right there, a wild green wedge rising straight out of the neighborhood grid. October is when this backyard range shows off.</p>

      <h2>Dishman Hills Natural Area: the after-work option</h2>
      <p>The northern pocket off Appleway holds a web of short, rolling trails through ponderosa, aspen groves, and little granite knobs — easy to string into a one-hour loop and even easier to bail out of when the light goes. In October the aspens turn first, and the low-angle evening sun through them is the best free show in the Valley. Trails here are forgiving, family-ready, and busy with dogs on weekends.</p>

      <h2>Iller Creek and the Rocks of Sharon: the weekend earner</h2>
      <p>South of the Valley floor, the Iller Creek Conservation Area climbs a forested draw to the ridgeline, where the Rocks of Sharon — massive granite monoliths — look out over the Palouse rolling away south. The full loop runs about five miles with roughly 1,000 feet of climbing: a real workout with a real payoff. Go clockwise for a gentler climb, bring a layer for the exposed ridge, and expect mud in the shaded draw after any October rain.</p>

      <blockquote>A five-mile loop with a thousand feet of gain burns on the order of 600 to 900 calories. That is not a problem. That is an opportunity.</blockquote>

      <h2>Fueling the backyard epic</h2>
      <p>Short local hikes trick people into fueling badly — no snacks, no water, "it's just the Dishman Hills." Two hours of climbing is two hours of climbing. Eat something real beforehand (a <a href="/#toast">PB Crunch Toast</a> holds up), carry water even in cool weather, and plan the refuel like you would for a mountain. The Iller Creek trailhead to our door at 13324 E Sprague Ave, Suite 101 is about ten minutes — the <a href="/#menu">Everbowl</a> with its granola-banana-berry build is the classic closer, and a <a href="/#menu">Mango Majic</a> tastes very good indeed with trail dust still on your shoes.</p>

      <h2>Why this month</h2>
      <p>The larch on the high ground go gold mid-month, the rattlesnakes have called it a season, and the summer dust has settled into perfect tread. The Dishman Hills wait all year to look like this. They're a five-minute drive from most of the Valley — the only excuse left is the couch.</p>
    `,
  },

  {
    slug: "gut-health-fiber-prebiotics",
    title: "Gut Health 101: Fiber, Prebiotics, and Everyday Superfoods",
    description:
      "Behind the trendy word 'microbiome' is a simple, boring truth: fiber runs the show. What prebiotics actually are, why variety beats any single product, and how a bowl stacks the deck.",
    category: "Health",
    date: "2026-10-10",
    readMins: 5,
    image: "/blog-img/chia-pudding-whatever-bowl.jpg",
    imageAlt: "Chia pudding Whatever Bowl, a fiber-rich base ready for toppings",
    keywords: ["gut health", "prebiotic foods", "fiber benefits", "microbiome diet"],
    body: `
      <p>The gut-health aisle would love to sell you something complicated. The research keeps saying something simple: the trillions of bacteria in your gut mostly eat one thing — fiber — and most Americans feed them about half of what they need. The average intake hovers around 15 grams a day against a 25-to-38-gram recommendation. That gap explains a lot.</p>

      <h2>Prebiotic vs. probiotic, in one breath</h2>
      <p><strong>Probiotics</strong> are the bacteria (yogurt, kefir, fermented things). <strong>Prebiotics</strong> are the food those bacteria eat — mostly fibers your own digestion can't break down, which travel to the colon and get fermented there. When gut microbes ferment fiber, they produce short-chain fatty acids like butyrate, which feed the gut lining itself and are linked in a growing body of research to healthy inflammation balance and metabolic health. No capsule required: it's mostly plants, every day.</p>

      <h2>Variety is the actual superfood</h2>
      <p>The large American Gut Project found one of the strongest predictors of a diverse microbiome wasn't any single food — it was eating <strong>30+ different plant types per week</strong>. Different fibers feed different species. Which, conveniently, is what a loaded bowl is: açaí, banana, strawberry, blueberry, granola oats, chia, coconut, cacao nibs — that's eight plant species before you've tried.</p>

      <blockquote>Count plants, not just grams. A bowl with eight kinds of plants does something a fiber supplement with one kind can't.</blockquote>

      <h2>The gut all-stars already on the menu</h2>
      <ul>
        <li><strong>Chia:</strong> around 10 g of mostly soluble fiber per ounce — the gel it forms is prime fermentation material. The <a href="/#menu">Chia Pudding Bowl</a> and <a href="/#menu">Berry Boost</a> lean on it.</li>
        <li><strong>Oats:</strong> beta-glucan, a famously friendly prebiotic fiber — in everoats, granola, and <a href="/#menu">Hot Oats</a>.</li>
        <li><strong>Slightly green-tipped bananas:</strong> resistant starch, another favorite microbe meal.</li>
        <li><strong>Berries and açaí:</strong> their polyphenols are increasingly understood to act like prebiotics too, shaping which species thrive.</li>
      </ul>

      <h2>Go gently if you're starting low</h2>
      <p>Jumping from 15 to 35 grams overnight ends badly for everyone in the room. Add a serving every few days, drink water, and let your gut hire staff for the new workload. A bowl from 13324 E Sprague Ave, Suite 101 a few times a week is a genuinely pleasant way to run the ramp — your microbes cannot tell the difference between wellness and dessert, and honestly, neither should you.</p>
    `,
  },
  {
    slug: "bowl-and-pitcher-riverside-october",
    title: "October at Bowl and Pitcher: Riverside State Park's Best Month",
    description:
      "The suspension bridge, the basalt, the gold cottonwoods along the Spokane River — Riverside State Park peaks in October. Routes for an easy hour or a long morning, and the refuel math after.",
    category: "Spokane & Movement",
    date: "2026-10-11",
    readMins: 5,
    image: "/blog-img/regular-whatever-bowl.jpg",
    imageAlt: "A regular Whatever Bowl built with fruit and granola",
    keywords: ["bowl and pitcher", "riverside state park", "spokane river trails", "october hiking spokane"],
    body: `
      <p>Every Spokane landmark has its month, and for Bowl and Pitcher it's October. The crowds thin, the rattlesnake-season heat is gone, and the cottonwoods along the Spokane River turn a gold that makes the dark basalt formations look staged for a postcard. If you've been saving a Riverside State Park trip, stop saving it.</p>

      <h2>The classic: swinging bridge loop</h2>
      <p>Park at the Bowl and Pitcher area off Aubrey L. White Parkway, cross the famous suspension bridge (built by the CCC in the 1930s and still delightfully wobbly), and follow the river-left trails downstream. An easy 2-to-3-mile out-and-back gets you the full postcard; linking into Trail 25 stretches it toward five miles of pine forest and river overlooks. Footing is good, grades are moderate, and October mornings bring fog off the river that burns away by ten.</p>

      <h2>Make it bigger</h2>
      <p>Riverside is Washington's second-largest state park — trail runners and mountain bikers can chain 10+ miles without repeating themselves, and the Centennial Trail threads the whole corridor if pavement is your pace. A Discover Pass covers parking; dogs on leash are everywhere and delighted about it.</p>

      <blockquote>Cold-weather exercise quietly burns more than people expect — your body spends extra energy just holding temperature. The appetite that shows up an hour later is real biology, not weak will.</blockquote>

      <h2>Plan the hunger, don't ambush yourself</h2>
      <p>The classic Riverside mistake: a crisp two-hour morning on the trails, then a drive home through fast-food corridor with zero plan. Beat the ambush by deciding before you park. From Bowl and Pitcher back to Spokane Valley is about twenty minutes — right in the post-exercise window where carbs restock best. At 13324 E Sprague Ave, Suite 101, the <a href="/#menu">Blue Lagoon</a> does hydration and carbs in one cold bowl, and the <a href="/#menu">Perfect Date</a> — cacao, peanut butter, dates — eats like a reward while still being made of actual food. Kids who survived the swinging bridge get a <a href="/#menu">Kids Bowl</a>; that's the rule.</p>

      <h2>The season won't hold</h2>
      <p>The cottonwood gold runs roughly two to three weeks, usually peaking mid-month before a windstorm ends the show overnight. November at Bowl and Pitcher is beautiful in a grayer, lonelier way — but this exact version, gold on black rock over green water, is an October-only screening. Catch it.</p>
    `,
  },

  {
    slug: "avocado-toast-reconsidered",
    title: "Avocado Toast, Reconsidered: A Genuinely Balanced Breakfast",
    description:
      "It became a punchline, but the nutrition never stopped being good. Monounsaturated fats, fiber, and how to build avocado toast into a complete meal instead of a pretty snack.",
    category: "Nutrition",
    date: "2026-10-12",
    readMins: 4,
    image: "/blog-img/classic-avocado-toast.jpg",
    imageAlt: "Classic Avocado Toast with everything seasoning and chili flakes",
    keywords: ["avocado toast healthy", "avocado nutrition", "balanced breakfast", "monounsaturated fat"],
    body: `
      <p>Somewhere around 2017, avocado toast stopped being food and became a generational argument. Let's rescue it, because underneath the memes is one of the more defensible breakfasts you can order.</p>

      <h2>The case for the avocado</h2>
      <p>An avocado is botanically a berry that behaves nutritionally like olive oil. Most of its fat is <strong>monounsaturated</strong> — the kind consistently associated with healthy cholesterol profiles in decades of research. Alongside: around 10 grams of fiber per fruit, more potassium per gram than a banana, folate, vitamin E, and lutein for eye health. Fat plus fiber is also the satiety combination — it slows digestion, which is why avocado toast holds you until lunch in a way plain toast never will.</p>

      <h2>The honest critique</h2>
      <p>Where avocado toast earns criticism is what it's missing: protein. Avocado has about 3 grams; bread adds a few more. Call it 8 to 10 grams total — a good start, not a complete meal if it's all you eat before a long morning. The fix isn't abandoning the toast; it's building around it.</p>

      <blockquote>Think of avocado toast as the fats-and-fiber half of breakfast. Pair it with a protein half, and the whole thing suddenly works like a meal.</blockquote>

      <h2>How we build ours</h2>
      <p>Our <a href="/#toast">Classic Avocado Toast</a> is artisan rustic bread, house-made avocado spread, everything seasoning, chili flakes, and honey — sweet-heat on cool mornings is correct. The <a href="/#toast">Bruschetta Avocado Toast</a> swaps in marinated tomatoes, basil, and balsamic for the savory crowd. For the complete-breakfast move, pair either with a <a href="/#smoothies">PB Cacao Dream</a> or a protein-boosted <a href="/#smoothies">Whatever Smoothie</a> — toast for fat and fiber, smoothie for protein and fruit. That pairing covers every macro and still gets you out the door of 13324 E Sprague Ave, Suite 101 in five minutes.</p>

      <h2>Permission granted</h2>
      <p>Eat the toast. It was never the reason anyone couldn't buy a house, and it remains one of the easiest ways to put real fats, real fiber, and real pleasure on the same plate before 9 a.m. Some punchlines age into good advice.</p>
    `,
  },

  {
    slug: "immune-supporting-foods-cold-snap",
    title: "Immune-Supporting Foods for the First Cold Snap",
    description:
      "The first hard frost hits Spokane and the group chat fills with sniffles. What nutrition honestly can and can't do for immunity, and the foods with real evidence behind them.",
    category: "Health",
    date: "2026-10-13",
    readMins: 5,
    image: "/blog-img/strawberry-lemonade.jpg",
    imageAlt: "Everbowl Strawberry Lemonade, a vitamin C-packed sip",
    keywords: ["immune support foods", "vitamin c", "cold season nutrition", "zinc immune"],
    body: `
      <p>Spokane's first real cold snap usually lands in mid-to-late October — frost on the windshield, furnace smell in the house, and the season's first round of colds making the office rounds. No food makes you immune to any of it. But your immune system is a metabolically expensive machine, and what you eat genuinely affects how well it runs. Here's the evidence-respecting version.</p>

      <h2>What actually has data</h2>
      <ul>
        <li><strong>Vitamin C:</strong> won't stop a cold from starting, but regular adequate intake modestly shortens colds in several reviews. Strawberries, kiwi, pineapple, and mango are all strong sources — kiwi gram-for-gram beats oranges.</li>
        <li><strong>Zinc:</strong> one of the few nutrients with solid trial evidence for shorter colds when started early. Seeds, nuts, oats, and cacao all contribute — real food beats lozenge-roulette for daily upkeep.</li>
        <li><strong>Fiber and the gut:</strong> an estimated 70 percent of immune tissue lives along the gut. The fiber-fed short-chain fatty acids we covered in our <a href="/blog/gut-health-fiber-prebiotics.html">gut health guide</a> help regulate immune balance.</li>
        <li><strong>Polyphenols:</strong> the deep pigments in berries and açaí support healthy inflammation response — supportive crew, not a cure.</li>
        <li><strong>Overall calories and protein:</strong> under-eating, crash dieting, and skipping protein all measurably blunt immune function. Being well-fed is itself an immune strategy.</li>
      </ul>

      <h2>What doesn't</h2>
      <p>Mega-dosing anything once symptoms start, "detoxes," and most things with the word boost in neon. The honest frame is support, not armor: sleep, stress, handwashing, and whatever your doctor recommends for the season do the heavy lifting. Food sets the baseline.</p>

      <blockquote>Immunity isn't boosted; it's maintained. The maintenance diet looks suspiciously like just eating well, every day, especially when you're busy and cold.</blockquote>

      <h2>The cold-snap order</h2>
      <p>Build for C, zinc, and fiber at once: a <a href="/#menu">Mango Majic</a> stacks mango, pineapple, strawberry, and kiwi — a legitimate vitamin C parade. The <a href="/#menu">Nutty Butty</a> brings zinc-carrying nuts, seeds, and oats, and if the morning is genuinely bitter, warm <a href="/#menu">Hot Oats</a> with berries splits the difference. We're at 13324 E Sprague Ave, Suite 101, and yes — <a href="/#order">ordering ahead</a> so you're not standing in the cold is a wellness practice too.</p>

      <h2>Play the long season</h2>
      <p>This is week one of a five-month indoor season. The habits you set during the first cold snap — fruit daily, protein steady, sleep defended — are the ones that are still protecting you in February. Start now; February you says thanks.</p>
    `,
  },

  {
    slug: "fall-running-spokane-fueling-cold-runs",
    title: "Fall Running in Spokane: Fueling 40-Degree Miles",
    description:
      "Crisp air, empty trails, PR weather — fall running in Spokane is elite. How cold changes your fueling and hydration, what to eat before and after, and why this is base-building season.",
    category: "Fitness & Recovery",
    date: "2026-10-14",
    readMins: 5,
    image: "/blog-img/nanaberry-bliss.jpg",
    imageAlt: "Nanaberry Bliss smoothie, a pre-run favorite",
    keywords: ["fall running", "cold weather running nutrition", "running fuel", "spokane running"],
    body: `
      <p>Ask Spokane runners their favorite month and October wins in a landslide: 40-degree mornings, firm trails, no smoke, no ice. It's also the month the spring-race people quietly start building their base — Bloomsday is seven months out, and seven months is exactly how long a good base takes. Cold-weather running has its own fueling logic. Here it is.</p>

      <h2>Cold changes the math (a little)</h2>
      <p>Running in the cold burns slightly more energy — your body pays a thermoregulation tax, especially before you warm up. More deceptive: <strong>you still sweat, you just don't notice</strong>. Cool dry air evaporates sweat instantly and suppresses thirst, so fall runners routinely under-drink. The classic signs show up later as a headache and a nap you didn't plan.</p>

      <h2>Before the run</h2>
      <p>For anything under an hour, you don't need much — coffee and a banana is a time-honored protocol. For long weekend runs, eat 200 to 300 calories of mostly carbs 60 to 90 minutes out: oats, toast with honey, or half a <a href="/#smoothies">Glow Up</a> smoothie. Cold-morning bonus: something warm beforehand (<a href="/#menu">Hot Oats</a> exists for this) makes the first dark mile substantially less insulting.</p>

      <blockquote>Base season rule: most miles easy, fueled enough to recover, consistent enough to compound. Heroic depleted runs in October buy you nothing in May.</blockquote>

      <h2>After the run</h2>
      <p>The recovery formula doesn't change with the thermometer — carbs to restock, protein to repair, fluid to replace what the dry air stole. What changes is the craving: cold-weather runners want substance. A <a href="/#menu">PB Everbowl</a> with a protein add covers all three jobs; runners coming off long efforts do well with the <a href="/#menu">Pitayum</a>, where the double fruit base piles up carbs fast. We're at 13324 E Sprague Ave, Suite 101 — close enough to the Appleway and Centennial corridors to be a legitimate finish line.</p>

      <h2>Where to run this month</h2>
      <p>The Centennial Trail along the river is prime at sunrise; the Appleway Trail is the flat, lit, plowed-sidewalk-adjacent weekday option; Riverside State Park is the weekend treat. Rotate all three, keep four runs a week through the fall, and spring-you arrives at the Bloomsday start line already fit instead of starting from the couch in March. October is where good Mays are made.</p>
    `,
  },

  {
    slug: "meal-prep-base-pints-busy-weeks",
    title: "Freezer-Friendly Fuel: Meal-Prepping Busy Fall Weeks",
    description:
      "October calendars are brutal — school, practices, dark evenings. A realistic meal-prep approach for fall, including the take-home trick most Everbowl regulars don't know about.",
    category: "Nutrition",
    date: "2026-10-15",
    readMins: 4,
    image: "/blog-img/acai-base-pint.jpg",
    imageAlt: "Everbowl açaí base pint for take-home meal prep",
    keywords: ["meal prep fall", "healthy freezer meals", "base pints", "busy family nutrition"],
    body: `
      <p>Nobody's nutrition falls apart in a vacuum. It falls apart on a Wednesday in October — practice at 5:30, homework after, dark by 6:30, and suddenly the drive-through is making the family's decisions. Meal prep is the boring superpower against that Wednesday. Here's a version that survives real life.</p>

      <h2>Prep components, not casseroles</h2>
      <p>The meal-prep that fails is six identical containers of chicken and rice that everyone hates by Tuesday. The version that works is components: a grain, a protein, washed fruit, and grab-able extras that mix and match all week. Twenty minutes on Sunday — a pot of oats, hard-boiled eggs, cut fruit — covers most breakfast and snack emergencies before they start.</p>

      <h2>The freezer trick: base pints</h2>
      <p>Here's the one regulars ask about after seeing them in the case: Everbowl sells its superfood bases as <strong>take-home pints</strong> — açaí, pitaya, cacao wow, vanilla, blue majic, coco love, mango, and whatever limited flavor is running. They live in your freezer and scoop like sorbet, which means a five-minute homemade bowl any night: scoop the base, top from the fruit you prepped Sunday, raid the granola jar. It's the weeknight version of what we build at the counter — ask about them in store at 13324 E Sprague Ave, Suite 101, or grab a couple with your next <a href="/#order">online order</a> pickup.</p>

      <blockquote>The honest goal of meal prep isn't perfect eating. It's making the good option take five minutes so the 6:45 p.m. decision stops being a negotiation.</blockquote>

      <h2>Build the fall rotation</h2>
      <ul>
        <li><strong>Rushed school mornings:</strong> overnight oats at home, or a <a href="/#menu">Kids Bowl</a> and <a href="/#toast">Whatever Toast</a> on carpool-friendly timing.</li>
        <li><strong>Practice nights:</strong> base-pint bowls at home — fast, cold, and weirdly effective at ending the "what's for snack" chorus.</li>
        <li><strong>Your own lunch:</strong> order ahead, eat something with actual fruit in it, take the ten-minute walk. The <a href="/#menu">Berry Boost</a> holds well through a short drive.</li>
      </ul>

      <h2>One decision, made once</h2>
      <p>Every system here works the same way: decide once, on a calm Sunday, so busy-Wednesday-you inherits good defaults instead of open questions. Stock the freezer, prep the components, save the menu as a favorite — and let October be busy without being a nutritional write-off.</p>
    `,
  },
  {
    slug: "blue-majik-spirulina-explained",
    title: "What Is Blue Majik? Spirulina, Explained",
    description:
      "The electric-blue swirl in your bowl isn't dye — it's a pigment from spirulina, one of the oldest foods on earth. What blue majik actually is, what the research says, and what it tastes like (barely anything).",
    category: "Nutrition",
    date: "2026-10-16",
    readMins: 4,
    image: "/blog-img/blue-majic-base-pint.jpg",
    imageAlt: "Blue Majik base pint, Everbowl spirulina blend to take home",
    keywords: ["blue majik", "spirulina benefits", "phycocyanin", "blue spirulina bowl"],
    body: `
      <p>First-timers always ask about the blue. Fair — nothing in nature seems like it should be that color, and the assumption is usually food coloring. It isn't. The electric blue in bowls like our <a href="/#menu">Blue Lagoon</a> comes from one of the oldest organisms still being eaten on this planet.</p>

      <h2>Meet spirulina</h2>
      <p>Spirulina is a blue-green algae — technically a cyanobacterium — that's been harvested as food for centuries, famously by the Aztecs from Lake Texcoco. Dried, it's startlingly dense: roughly 60 percent protein by weight, with iron, B vitamins, and a collection of antioxidant pigments. NASA studied it as potential astronaut food, which remains the best fun fact on this menu.</p>

      <h2>So what's "blue majik"?</h2>
      <p>Blue majik is a branded extract of spirulina's star pigment, <strong>phycocyanin</strong> — the molecule responsible for that impossible blue. Extracting it leaves behind spirulina's seaweedy, pond-adjacent flavor (nobody misses it) and keeps the pigment, which happens to be the part researchers find most interesting: phycocyanin has been studied in labs for its antioxidant activity and its role in supporting a healthy inflammatory response. Human evidence is still early-stage — we'd call it promising, not proven, and anyone claiming more is selling something.</p>

      <blockquote>Honest summary: blue majik is a real pigment from a real superfood with genuinely interesting early research — and it also just makes a bowl look incredible. Both things are allowed to be true.</blockquote>

      <h2>What it tastes like</h2>
      <p>Almost nothing — faintly sweet, faintly mineral. In practice it takes on whatever it's blended with, which is why it plays so well under pineapple and coconut in the <a href="/#menu">Pina Coolada</a>-style builds and alongside mango in the <a href="/#smoothies">Evergreen</a> smoothie. You're there for the color and the pigment; the fruit does the flavor.</p>

      <h2>Try the blue</h2>
      <p>If you've been ordering the same açaí build since summer (respect), October's a fine month to try the other end of the color spectrum — the <a href="/#menu">Blue Lagoon</a> with pitaya, coco love, chia, and that phycocyanin blue is the menu's best-looking argument. We're at 13324 E Sprague Ave, Suite 101 in Spokane Valley. Bring sunglasses; the bowl doesn't dim.</p>
    `,
  },

  {
    slug: "youth-sports-sideline-fuel-spokane-valley",
    title: "Sideline Season: Feeding Young Athletes from Mirabeau to the HUB",
    description:
      "Fall youth sports run Spokane Valley family calendars — soccer at Mirabeau Point, tournaments at the HUB. A practical guide to what young athletes need before practice, at halftime, and after the whistle.",
    category: "Spokane & Movement",
    date: "2026-10-17",
    readMins: 5,
    image: "/blog-img/whatever-smoothie.jpg",
    imageAlt: "A build-your-own Whatever Smoothie from Everbowl",
    keywords: ["youth sports nutrition", "kids athlete food", "spokane valley youth sports", "post practice snacks"],
    body: `
      <p>If you're a Spokane Valley parent in October, your minivan already knows the route: soccer fields at Mirabeau Point and Plante's Ferry, volleyball and basketball tournaments at the HUB in Liberty Lake, flag football somewhere with exactly one working porta-potty. Sideline season is wonderful and completely unhinged, and somewhere in it, kids need to actually eat. Here's the realistic version.</p>

      <h2>Kids aren't small adults, but close enough</h2>
      <p>Youth sports nutrition isn't complicated: kids need carbs for energy (they burn them fast), some protein across the day for growth, and more water than they'll voluntarily drink. What they don't need is the neon sports-drink-and-chip economy that's grown up around sidelines. For games under an hour, water and real food win every time.</p>

      <h2>Timing the chaos</h2>
      <ul>
        <li><strong>2-3 hours before:</strong> a normal meal. Pasta-level complicated is not required.</li>
        <li><strong>30-60 minutes before:</strong> something small and carby — banana, applesauce, half a granola bar. Big protein or fat this close just sits there at kickoff.</li>
        <li><strong>Halftime:</strong> water first. Orange slices remain undefeated technology.</li>
        <li><strong>Within an hour after:</strong> carbs plus some protein — this is the window where a real snack beats a vending machine, especially with a second game coming.</li>
      </ul>

      <blockquote>The best post-game food is the one a tired kid will actually eat. Cold, fruity, and slightly fun beats nutritionally perfect and refused.</blockquote>

      <h2>The post-game move</h2>
      <p>This is where we admit our bias and earn it: a bowl is close to ideal post-game food — cold, hydrating, carb-forward, with fruit sugars that restock young legs and toppings that make it feel like a treat instead of a protocol. The <a href="/#menu">Kids Bowl</a> exists precisely for this (two bases, two fruits, right-sized), big siblings graduate to the <a href="/#menu">Everbowl</a>, and a <a href="/#smoothies">Nanaberry Bliss</a> handles the kid who's "not hungry" but will absolutely drink a smoothie. Tournament Saturdays at the HUB, we're ten minutes down the road at 13324 E Sprague Ave, Suite 101 — <a href="/#order">order ahead</a> between brackets and the team snack is solved.</p>

      <h2>The long game</h2>
      <p>What young athletes mostly need is what they always needed: consistent meals, real food around activity, water, and sleep. Model it casually, keep the good options easy, and skip the pressure — the kid who learns that eating well feels good plays better in November and eats better at 30.</p>
    `,
  },

  {
    slug: "superfood-marketing-vs-science",
    title: "Superfood Marketing vs. Science: Reading Health Claims Honestly",
    description:
      "'Superfood' sells smoothies — including ours. A superfood shop's honest guide to reading nutrition claims: what the word means, what it doesn't, and five questions that cut through the hype.",
    category: "Nutrition",
    date: "2026-10-18",
    readMins: 5,
    image: "/blog-img/mango-majic.jpg",
    imageAlt: "Mango Majic bowl with mango, blue majik, pineapple, strawberry, and kiwi",
    keywords: ["superfood myths", "nutrition claims", "health marketing", "evidence based nutrition"],
    body: `
      <p>Let's do something slightly dangerous for a superfood shop: tell you the truth about the word superfood. It has no scientific or regulatory definition. None. It's a marketing term — one we use too, because it communicates "nutrient-dense plant" in one word. But since the word sells everything from açaí to gummy vitamins, you deserve a filter for separating dense foods from dense claims.</p>

      <h2>Five questions that cut through hype</h2>
      <ol>
        <li><strong>Was the study in humans?</strong> "Antioxidant activity in a petri dish" is where research starts, not where advice should. Cell and mouse findings are leads, not conclusions.</li>
        <li><strong>How much did they use?</strong> Plenty of findings involve concentrated extracts at doses no bowl of anything delivers. If the effective dose is 40 cups, it's a chemistry fact, not a food benefit.</li>
        <li><strong>Who paid?</strong> Industry-funded research isn't automatically wrong, but a blueberry council finding blueberries miraculous deserves one raised eyebrow.</li>
        <li><strong>Does it promise one food fixes one disease?</strong> Nutrition almost never works that way. Patterns matter; single foods mostly don't.</li>
        <li><strong>Would it still be worth eating if the claim vanished?</strong> The best test. Berries pass — fiber, vitamins, polyphenols, delicious. Exotic powder #47 usually doesn't.</li>
      </ol>

      <blockquote>The strongest nutrition finding of the past fifty years stays boring: people who eat lots of varied, minimally processed plants do better. Everything else is a footnote to that.</blockquote>

      <h2>So what do we stand behind?</h2>
      <p>The claims that survive the filter: açaí and berries genuinely are among the most polyphenol-dense common fruits. Chia and oats genuinely deliver meaningful fiber. Nuts and seeds genuinely carry healthy fats and minerals. A <a href="/#menu">Berry Boost</a> is genuinely eight-plus plant species in a cup. What we won't tell you: that any bowl detoxes, cures, or boosts anything into the stratosphere. A bowl from 13324 E Sprague Ave, Suite 101 is a dense, convenient serving of real plants that tastes like a milkshake's responsible cousin. That's the whole honest pitch — and honestly, it's enough.</p>

      <h2>Eat the pattern</h2>
      <p>Spend your skepticism on labels and your appetite on plants — a <a href="/#menu">Whatever Bowl</a> with maximum variety is a better bet than any single miracle ingredient, here or anywhere. The super part was never one food. It's the habit.</p>
    `,
  },

  {
    slug: "sleep-darkness-recovery-nutrition",
    title: "Earlier Sunsets, Better Sleep: Recovery When the Light Leaves",
    description:
      "Spokane loses almost 3 minutes of daylight a day in October. Instead of fighting it, use it — how light, meal timing, and a few foods set up the best sleep season of the year.",
    category: "Health",
    date: "2026-10-19",
    readMins: 5,
    image: "/blog-img/vanilla-base-pint.jpg",
    imageAlt: "Everbowl vanilla base pint, an evening-friendly take-home treat",
    keywords: ["sleep and recovery", "circadian rhythm fall", "meal timing sleep", "spokane daylight"],
    body: `
      <p>Every October, Spokane sheds daylight at an almost alarming rate — close to three minutes a day, sunsets sliding from 6:30 toward 4:30 by Thanksgiving. You can mourn it, or you can notice that human sleep biology was built for exactly this and cash the check. Sleep is where training adapts, immunity consolidates, and appetite hormones reset. Fall is the sleep season. Here's how to claim it.</p>

      <h2>Light is the lever</h2>
      <p>Your circadian clock sets itself by light exposure, and the fall prescription is simple: <strong>bright mornings, dim evenings</strong>. Get outside within an hour of waking — even an overcast Spokane sky delivers vastly more light than your kitchen. Then respect the early darkness instead of flood-lighting your way through it: warm, low light after 8 p.m. lets melatonin rise on schedule. The season is literally doing the wind-down for you.</p>

      <h2>Meal timing is the co-pilot</h2>
      <p>Digestion runs on the same clock. Big meals within two hours of bed fragment sleep for most people; finishing dinner earlier — easier when it's dark at 5:30 anyway — tracks with deeper sleep in time-restricted-eating research. Caffeine's 5-to-6-hour half-life means the <a href="/#sips">cold brew</a> cutoff sits around early afternoon; we covered the full math in our <a href="/blog/caffeine-performance-cold-brew-matcha.html">caffeine guide</a>.</p>

      <blockquote>Recovery isn't what happens at the gym; it's what happens between 10 p.m. and 6 a.m. Fall gives you the easiest setup of the year — dark early, cool nights, no 9 p.m. sunlight arguing with your melatonin.</blockquote>

      <h2>Foods with sleep-adjacent evidence</h2>
      <ul>
        <li><strong>Tart cherries and kiwi</strong> are the two whole foods with repeated (small) trials showing sleep improvements — kiwi shows up in our <a href="/#menu">Pitayum</a> and Mango Majic.</li>
        <li><strong>Magnesium-carrying foods</strong> — cacao, almonds, oats, banana — support the relaxation side of the ledger. A <a href="/#menu">Full Moon</a> is incidentally a magnesium delivery vehicle.</li>
        <li><strong>Steady daytime protein and fiber</strong> prevent the 10 p.m. snack spiral that wrecks more sleep than any single food helps.</li>
      </ul>

      <h2>The October protocol</h2>
      <p>Morning light outside, movement during daylight, last caffeine by early afternoon, dinner on the early side, screens dim after. Swing by 13324 E Sprague Ave, Suite 101 for the daytime fuel half of the equation — then let Spokane's longest nights of the year do what they were always going to do: put you to bed early, finally, gloriously, on time.</p>
    `,
  },

  {
    slug: "pumpkin-spice-honest-fall-nutrition",
    title: "Pumpkin Spice, Honestly: Which Fall Flavors Earn Their Keep",
    description:
      "Fall flavor season is here, and most of it is sugar wearing a sweater. An honest ranking of autumn's icons — pumpkin, cinnamon, apple, maple — and how to get the cozy without the crash.",
    category: "Nutrition",
    date: "2026-10-20",
    readMins: 4,
    image: "/blog-img/cinnamon-ice-blended-coffee.jpg",
    imageAlt: "Cinnamon Ice Blended Coffee, Everbowl fall sip",
    keywords: ["pumpkin spice nutrition", "fall flavors healthy", "cinnamon benefits", "seasonal eating fall"],
    body: `
      <p>Every September, fall flavors descend on America like weather, and by October they're inescapable. Here's the fun secret: several of autumn's icons are genuinely good for you. The problem is they usually arrive buried in 50 grams of sugar. Let's sort the flavors from the vehicles.</p>

      <h2>The rankings, honestly</h2>
      <ul>
        <li><strong>Cinnamon: underrated champion.</strong> Real research interest (modest effects on post-meal blood sugar in some studies), zero calories, maximum cozy. Sprinkle freely — it's standard in our <a href="/#menu">Nutty Butty</a> and all over the <a href="/#menu">Hot Oats</a> builds, and the cinnamon cold foam on our <a href="/#sips">cold brew</a> is the season's most efficient cozy-per-calorie trade.</li>
        <li><strong>Apple: legitimate.</strong> Whole apples bring fiber and polyphenols, as every Green Bluff trip reminds us. Apple-flavored syrup brings neither. The distance between fruit and flavoring is the whole story this month.</li>
        <li><strong>Pumpkin: innocent bystander.</strong> Actual pumpkin is a vegetable — vitamin A, fiber, 50 calories a cup. Most pumpkin spice products contain spice, sugar, and vibes, but no gourd. We respect the squash; we're suspicious of its fan club.</li>
        <li><strong>Maple: delicious, still sugar.</strong> Trace minerals don't change the arithmetic. Treat tier, drizzle quantities.</li>
      </ul>

      <blockquote>Nothing is wrong with a treat. The trap is the daily 500-calorie sugar-delivery drink that identifies as a coffee. Know which one you're holding.</blockquote>

      <h2>Cozy without the crash</h2>
      <p>The fall feeling is mostly warmth plus spice plus sweetness — and you can assemble it from real parts. Warm <a href="/#menu">Hot Oats</a> with banana, cinnamon, and peanut butter is the complete autumn experience with actual staying power. A <a href="/#smoothies">PB Cacao Dream</a> covers the dessert-adjacent craving with real food macros. And fruit-forward sweetness — dates, banana, honey in sane amounts — reads as indulgent while still bringing fiber to the party.</p>

      <h2>Season responsibly</h2>
      <p>Enjoy the lattes you truly love, skip the ones you drink on autopilot, and let the daily default be something that earns its coziness — we'll be at 13324 E Sprague Ave, Suite 101 with the cinnamon ready. Fall flavors are a two-month residency. Make the rotation count.</p>
    `,
  },
  {
    slug: "centennial-trail-fall-rides",
    title: "The Centennial Trail in October: Last Great Rides of the Season",
    description:
      "Where to ride the Spokane River Centennial Trail this fall, what the cold does to your fueling, and how to refuel after a long spin.",
    category: "Sports & Movement",
    date: "2026-10-21",
    readMins: 5,
    image: "/blog-img/pitaya-paradise.jpg",
    imageAlt: "Pitaya Paradise smoothie in a branded Everbowl cup",
    keywords: [
      "Centennial Trail Spokane",
      "fall cycling Spokane",
      "cycling nutrition",
      "post ride recovery",
    ],
    body: `<p>The Spokane River Centennial Trail is nearly 40 miles of paved path running from the Idaho state line through downtown Spokane and out to Nine Mile Falls, and October might be its best month. The summer crowds are gone, the cottonwoods along the river turn gold, and the temperatures sit in that sweet spot where a long ride feels effortless instead of punishing. If you have been meaning to get out before the snow flies, this is your window.</p>

<p>A few sections worth prioritizing before the season closes out. The stretch from Mirabeau Point through the Spokane Valley corridor hugs the river and puts you close to our neighborhood — Mirabeau Point Park makes a natural staging area with parking and restrooms. Further west, the run through Riverfront Park and down toward Kendall Yards gives you the urban version: waterfalls, bridges, coffee stops. And if you want quiet, the far western miles toward Nine Mile Falls feel like a different country entirely, with basalt cliffs and almost no foot traffic on a weekday morning.</p>

<p>Cold-weather riding changes your fueling math more than most people expect. Your body burns extra energy maintaining core temperature, and because cool air blunts your thirst signal, riders routinely under-drink in October even while losing meaningful fluid through breath and sweat trapped under layers. The practical fixes are simple: drink on a schedule rather than waiting for thirst, and do not stretch your between-meal gaps longer just because you feel less hungry in the cold. A ride over 90 minutes still deserves carbohydrate during, not just after.</p>

<p>The after matters most, though. The classic recovery window advice — some protein and carbohydrate within an hour or two of finishing — holds up well for longer endurance efforts. Something like our <a href="/#smoothies">smoothies</a> covers both at once: fruit for glycogen replacement, and options with protein if you want the rebuild covered too. If you finished a longer ride and want to actually chew your recovery, an acai or pitaya bowl from the <a href="/#menu">bowl menu</a> with granola, banana, and peanut butter is carbohydrate, protein, and fat in roughly the proportions a depleted rider wants.</p>

<p>We are at 13324 E Sprague Ave, Suite 101, Spokane Valley — about a five-minute pedal south of the trail corridor near Mirabeau, which makes us a reasonable final waypoint before you load the bike back on the rack. Riders in cleats welcome; the floor has survived worse.</p>

<p>One last October note: daylight is shrinking fast. By late month, sunset lands before 6pm, so afternoon rides need lights and a realistic turnaround time. Front and rear lights, something reflective, and a vest layer you can peel off mid-ride will carry you comfortably to the end of the season.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "anti-inflammatory-eating-basics",
    title: "Anti-Inflammatory Eating, Minus the Hype",
    description:
      "What the research actually says about food and inflammation, which everyday ingredients matter most, and how to build an anti-inflammatory plate without buying anything exotic.",
    category: "Health",
    date: "2026-10-22",
    readMins: 6,
    image: "1b4287ce-c312-4b57-b34d-43e13a35a10b.jpg",
    imageAlt: "Everbowl topped with banana, blueberries, strawberries, and almond-butter drizzle",
    keywords: [
      "anti-inflammatory diet",
      "berries antioxidants",
      "omega-3 foods",
      "chronic inflammation diet",
    ],
    body: `<p>"Anti-inflammatory" might be the most abused phrase in wellness marketing, which is a shame, because underneath the hype sits a legitimately useful body of research. Chronic low-grade inflammation is associated with a long list of conditions, and dietary pattern is one of the levers researchers consistently point to. The trick is separating what the evidence supports from what a supplement label wants you to believe.</p>

<p>Here is the honest version: no single food is a fire extinguisher. What the research supports is a pattern — eating styles like the Mediterranean diet, built heavily on plants, fish, olive oil, nuts, and whole grains, are associated with lower levels of inflammatory markers in large observational studies. The flip side is also consistent: diets heavy in refined carbohydrates, added sugar, and heavily processed meat tend to associate with higher markers. Pattern beats ingredient, always.</p>

<p>That said, some ingredients earn their reputation. Berries — blueberries especially — carry anthocyanins, polyphenol compounds that have shown anti-inflammatory activity in both lab and human studies. Fatty fish brings omega-3s, which your body uses to produce compounds involved in resolving inflammation. Leafy greens, nuts, seeds, olive oil, and colorful produce generally round out the list. Nothing exotic, nothing you need a discount code for.</p>

<p>If you want to see what an anti-inflammatory-leaning meal looks like in practice, our <a href="/#menu">bowls</a> are a reasonable template: an acai or pitaya base (both berries, both polyphenol-dense), topped with more berries, banana, granola, and seeds like chia or hemp that contribute plant omega-3s. It is essentially the produce-and-seeds corner of the Mediterranean pattern in bowl form. The <a href="/#smoothies">smoothies</a> with greens, ginger, and fruit hit a similar profile in drinkable format.</p>

<p>A few honest caveats, because this topic attracts overstatement. First, the inflammation-lowering effects seen in studies are modest and gradual — think months of consistent pattern, not a three-day reset. Second, food is one input among several: sleep, activity, stress, and body composition all move inflammatory markers, some more strongly than diet does. Third, if you have an actual inflammatory condition — arthritis, IBD, anything diagnosed — diet is a complement to treatment, never a replacement for it.</p>

<p>The good news hiding in all of this: anti-inflammatory eating is not a restrictive protocol. It is mostly additive. More berries, more greens, more nuts and seeds, more fish if you eat it, more olive oil. You crowd out the pro-inflammatory stuff by filling up on the good stuff first — which is a far more sustainable psychology than a list of forbidden foods.</p>

<p>We keep the berry-forward end of that pattern stocked daily at 13324 E Sprague Ave, Suite 101, Spokane Valley. Come build a bowl that your inflammatory markers — and more importantly, your taste buds — will approve of.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "peanut-butter-workhorse-topping",
    title: "In Defense of Peanut Butter: The Workhorse Topping",
    description:
      "Why peanut butter remains one of the best values in nutrition — protein, healthy fats, satiety — and how to use it on a bowl without turning dessert into an accident.",
    category: "Nutrition",
    date: "2026-10-23",
    readMins: 5,
    image: "/blog-img/pb-cacao-dream.jpg",
    imageAlt: "PB Cacao Dream smoothie with peanut butter and cacao",
    keywords: [
      "peanut butter nutrition",
      "healthy fats",
      "nut butter benefits",
      "bowl toppings",
    ],
    body: `<p>Peanut butter does not trend. It has no founder story, no adaptogenic claims, no pastel rebrand. It just sits there in the topping lineup, outperforming almost everything around it, nutritionally and financially, the way it has for a hundred years. Today we give the workhorse its due.</p>

<p>Start with the numbers. Two tablespoons of peanut butter deliver roughly 7 to 8 grams of protein, about 16 grams of fat — the majority of it monounsaturated and polyunsaturated, the kinds associated with better cardiovascular outcomes — plus fiber, vitamin E, magnesium, and niacin. Per dollar, that protein-and-healthy-fat package embarrasses most of the products marketed specifically as protein-and-healthy-fat packages.</p>

<p>The satiety story is where peanut butter earns its place on a fruit bowl specifically. An acai or pitaya base with fruit toppings is carbohydrate-forward — great for quick energy, less great for staying full through a long morning. Fat and protein slow gastric emptying, which is the physiological way of saying they make the meal last. A spoonful of peanut butter turns a 45-minute bowl into a three-hour bowl. Research on nuts and nut butters consistently shows strong satiety effects relative to their calories, which is part of why regular nut eaters in large cohort studies tend not to show the weight gain you might naively predict.</p>

<p>There are also the pairing merits, which matter at least as much. Peanut butter and banana is one of the all-time food partnerships, and both live on our <a href="/#menu">bowl menu</a>. Add granola and you have texture contrast; add cacao nibs and you are flirting with dessert while still eating something defensible. It also blends beautifully — several of our <a href="/#smoothies">smoothies</a> use nut butter for exactly this body-and-staying-power reason.</p>

<p>Two honest footnotes. First, calories: peanut butter is energy-dense, around 190 calories per two-tablespoon serving, so a heavy hand can double a bowl's total without changing how it looks. If you are managing intake, treat it as a measured topping rather than a pour. Second, allergies are real and serious — our team takes cross-contact questions seriously, so ask us at the counter if that affects you, and almond butter or seed-based options can fill the same role on most builds.</p>

<p>The broader lesson peanut butter teaches is a good one for navigating nutrition generally: boring and proven beats novel and marketed, most of the time. The foods that have quietly fed athletes and schoolkids for generations usually have the track record the new stuff is still trying to earn.</p>

<p>Come pay your respects at 13324 E Sprague Ave, Suite 101, Spokane Valley — the drizzle is waiting.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "liberty-lake-loop-fall-hike",
    title: "Liberty Lake Loop: The Valley's Backyard Fall Hike",
    description:
      "Trail notes for the Liberty Lake Regional Park loop in late October — cedar groves, waterfall, larches — plus how to fuel a three-hour hike properly.",
    category: "Sports & Movement",
    date: "2026-10-24",
    readMins: 5,
    image: "/blog-img/full-moon.jpg",
    imageAlt: "Full Moon bowl with vanilla, cacao wow, granola, banana, strawberry, and cacao nibs",
    keywords: [
      "Liberty Lake hike",
      "Liberty Lake Regional Park",
      "fall hiking Spokane Valley",
      "hiking nutrition",
    ],
    body: `<p>Ask Spokane Valley hikers for their home trail and a lot of them will point east to Liberty Lake Regional Park. The main loop — roughly 8 miles if you do the full circuit up the creek drainage and over the saddle — packs more variety per mile than almost anything else this close to town: open ponderosa slopes, a genuine old-growth cedar grove, a waterfall tucked into the upper canyon, and views back across the lake toward the Selkirks.</p>

<p>Late October is a particularly good time for it. The aspens and larches scattered through the upper drainage turn gold, the creek is quiet, and the trail crowd thins to the faithful. Two practical notes for this time of year: the upper loop holds mud and early ice in shaded corners once overnight temperatures drop, so footwear with real tread matters, and the park's seasonal hours tighten as daylight shrinks — check the posted times and work backward from sunset, which lands before 6pm by month's end.</p>

<p>An 8-mile loop with around 1,300 feet of climbing is a solid three-to-four-hour effort for most hikers, and that duration is exactly where fueling starts to matter. Under 90 minutes, your stored glycogen covers you fine. Past two hours, hikers who did not eat beforehand start feeling the flat, heavy-legged fade that gets misread as being out of shape when it is really just being out of fuel. The fix is a carbohydrate-forward meal an hour or two before the trailhead — enough to top off stores without sitting heavy on the climb.</p>

<p>That pre-hike slot is where something from our <a href="/#menu">bowl menu</a> fits naturally: fruit and granola over an acai or pitaya base digests easily and delivers exactly the quick-access carbohydrate the first climb will ask for. Bring water and a snack for the saddle, then handle recovery on the way home — a protein-inclusive <a href="/#smoothies">smoothie</a> covers the rebuild without requiring you to cook while tired, which nobody does well.</p>

<p>We are at 13324 E Sprague Ave, Suite 101, Spokane Valley — about twelve minutes from the Liberty Lake trailhead, which makes us either the staging breakfast or the finish line, depending on which direction your day runs.</p>

<p>If the full loop sounds like too much, the lower out-and-back to the cedar grove is a gentle 3 miles round trip and genuinely lovely in fall light — a good option for kids or visiting relatives who want the postcard without the saddle climb. Either version, October is the month to go. The larches will not wait.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "cold-bowls-cold-weather",
    title: "Yes, We Eat Cold Bowls in Cold Weather. Here's Why It Works",
    description:
      "The case for acai bowls year-round — what actually drives body temperature, why nutrient needs don't change with the forecast, and cold-weather ordering strategies.",
    category: "Nutrition",
    date: "2026-10-25",
    readMins: 5,
    image: "/blog-img/perfect-date.jpg",
    imageAlt: "Perfect Date bowl with cacao wow, coco love, peanut butter, and dates",
    keywords: [
      "acai bowl winter",
      "cold food cold weather",
      "year round nutrition",
      "Everbowl Spokane Valley",
    ],
    body: `<p>Every October, somebody asks us the question: "Isn't it weird to eat a frozen bowl when it's forty degrees out?" It is a fair question. It also has a satisfying answer, which is that your body does not really care what the weather app says — and the things a bowl is good at in July are the same things it is good at in January.</p>

<p>First, the thermodynamics, since that is usually the real objection. A cold meal does lower the heat your body has to deal with by a small amount, but the effect on core temperature is brief and tiny — your body is a furnace that holds itself near 98.6°F regardless, and the energy cost of warming a chilled meal to body temperature is a rounding error compared to what you burn just existing. People in the coldest places on earth eat plenty of cold food. The shiver you feel walking to the car does vastly more to your comfort than anything in your cup.</p>

<p>Second, and more importantly, the reasons to eat fruit-dense meals do not hibernate. If anything, they get stronger in the gray months. Vitamin C intake matters year-round. Fiber matters year-round. The polyphenols in berries matter year-round. And as we have written before, the Inland Northwest's long stretch of short, overcast days is exactly when produce intake tends to quietly collapse into beige comfort food — making a deliberately colorful meal more valuable in October than it was in July, not less.</p>

<p>That said, we are not purists, and cold-weather ordering has its own strategies. Pairing a bowl with something warm — your own coffee or tea works beautifully alongside anything on the <a href="/#menu">menu</a> — covers the comfort factor while the bowl covers the nutrition. Our <a href="/#toast">avocado toast</a> is a room-temperature option if you want the warm-adjacent route. And toppings like peanut butter, granola, and cacao push a bowl's flavor profile toward cozy rather than tropical, which is the move once the larches drop.</p>

<p>There is also the practical angle: your training does not stop in winter, so your recovery nutrition should not either. Gym sessions, ski conditioning, winter running — all of it still ends with the same muscles asking for the same carbohydrate and protein, and a <a href="/#smoothies">smoothie</a> delivers that regardless of what the parking lot thermometer claims.</p>

<p>So no — not weird. Come see us at 13324 E Sprague Ave, Suite 101, Spokane Valley, where the bowls stay cold, the welcome stays warm, and nobody will judge you for wearing a parka while eating one. Several of us do it too.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "ski-season-prep-dryland-training",
    title: "Dryland October: Getting Ski-Ready for Mt. Spokane, Silver, and Schweitzer",
    description:
      "A practical pre-season conditioning and nutrition plan for Inland Northwest skiers — legs, lungs, and the fueling habits that make opening day hurt less.",
    category: "Fitness & Recovery",
    date: "2026-10-26",
    readMins: 6,
    image: "/blog-img/cacao-ice-blended-coffee.jpg",
    imageAlt: "Cacao Ice Blended Coffee, cold-weather fuel from Everbowl",
    keywords: [
      "ski conditioning",
      "Mt Spokane ski season",
      "Schweitzer preseason",
      "dryland training nutrition",
    ],
    body: `<p>If you ski or ride in the Inland Northwest, you already know the countdown has started. Mt. Spokane, Silver Mountain, 49 Degrees North, Lookout Pass, and Schweitzer all typically spin lifts between late November and early December, which means October is the month that decides whether your first day is glorious or whether your quads file a formal complaint by the third run.</p>

<p>Skiing punishes a specific kind of fitness: repeated eccentric loading. Every turn, your quads and glutes lengthen under load to absorb terrain — the muscular equivalent of walking downhill for four hours. Eccentric work is precisely what causes the worst soreness in the unprepared, and it is also highly trainable. Four to six weeks of targeted work is enough to transform opening day.</p>

<p>The dryland basics, no gym membership required: squats and lunges for base strength, with slow lowering phases to rehearse the eccentric pattern. Wall sits for the isometric endurance a long groomer demands — work toward accumulating two to three minutes. Lateral bounds or skater hops for the side-to-side power skiing actually uses, which forward-only training like running misses. Single-leg balance work, because moguls and crud do not ask both legs politely at the same time. Two or three sessions a week between now and Thanksgiving is plenty. Hiking the hills we have covered on this Journal — Iller Creek, Liberty Lake, Tubbs Hill — doubles as beautiful dryland cardio with built-in descent training.</p>

<p>The fueling side has two chapters. In training, the rules are the ordinary ones: protein spread through the day to support the muscle you are building — the sports-nutrition literature converges on roughly 1.4 to 2 grams per kilogram of body weight for people training hard — and carbohydrate around sessions so the work feels like work rather than survival. A post-session stop at our <a href="/#smoothies">smoothie</a> lineup covers the protein-plus-carb recovery slot; a build from the <a href="/#menu">bowl menu</a> with granola, banana, and peanut butter does the same in spoon form.</p>

<p>Come ski season, the fueling chapter changes: cold blunts appetite and thirst while altitude and exertion raise your actual needs, so the skiers who feel strong at 3pm are the ones who ate and drank on a schedule, not a feeling. Build the habit now, during dryland, and it will be automatic by the time the chairs start loading.</p>

<p>We are at 13324 E Sprague Ave, Suite 101, Spokane Valley — conveniently on the way home from basically every trailhead you will dryland on, and directly on the route to Silver and Lookout when the snow finally arrives. Pre-season legs are built in October. Come fuel the building.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "midterm-study-fuel-spokane-students",
    title: "Midterm Brain Fuel: An Eating Guide for Spokane Students",
    description:
      "What the research says about food, focus, and exam performance — practical fueling for students at Gonzaga, Whitworth, EWU, SCC, and SFCC during midterm season.",
    category: "Health",
    date: "2026-10-27",
    readMins: 5,
    image: "/blog-img/iced-matcha.jpg",
    imageAlt: "Everbowl iced matcha, steady study-session caffeine",
    keywords: [
      "study food focus",
      "brain food students",
      "Gonzaga Whitworth EWU",
      "exam nutrition",
    ],
    body: `<p>Late October means midterm season across Spokane's campuses — Gonzaga, Whitworth, Eastern, SCC, SFCC, and every high schooler staring down first-quarter finals. And midterm season has a characteristic diet: vending machine runs, energy drinks at midnight, and whatever delivery app is fastest. We would like to make a brief, evidence-based case for doing slightly better, because the research on food and cognition is clearer than most students think.</p>

<p>The brain is an energy hog — roughly 20 percent of your resting calorie burn goes to the organ doing the studying — and it runs overwhelmingly on glucose. But the relationship between eating and thinking is not "more sugar, more thoughts." Blood sugar stability is what shows up in cognitive studies: steep spikes followed by crashes correlate with dips in attention and working memory. That is the science behind the 3pm fog after a lunch of refined carbs, and it is the argument for meals built on fiber, protein, and fat alongside carbohydrate — they flatten the curve and keep the glucose supply steady across a three-hour study block.</p>

<p>A few specifics with decent evidence behind them. Breakfast on exam day genuinely matters: studies of students consistently associate eating breakfast with better attention and memory performance that morning. Berries keep showing up in cognition research — flavonoid intake has been linked with better performance on memory tasks in both young and older adults. Omega-3s from seeds and fish support the structural side of brain health. Hydration is quietly huge: even mild dehydration measurably degrades concentration, and students mainlining caffeine while forgetting water are running that experiment on themselves daily.</p>

<p>Caffeine deserves its own sentence, since midterm week runs on it: it works — alertness and vigilance reliably improve — but late-night doses steal the deep sleep that consolidates what you studied. A cutoff around early afternoon protects the memory formation you are staying up to achieve. Sleep, not heroics, is where learning actually sticks.</p>

<p>If you are studying in Spokane Valley or commuting past us on Sprague, we make a reasonable study stop: an acai bowl from the <a href="/#menu">menu</a> is fruit, fiber, granola, and steady energy without the crash; the <a href="/#toast">avocado toast</a> adds fat and fiber for the long-haul sessions; and a <a href="/#smoothies">smoothie</a> travels well to the library. Flash cards welcome at our tables — we have hosted plenty.</p>

<p>Good luck out there. Eat like your GPA depends on it, because the evidence says it is at least a little true. Find us at 13324 E Sprague Ave, Suite 101, Spokane Valley.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "rest-day-nutrition",
    title: "Rest Day Nutrition: You Still Have to Eat Like an Athlete",
    description:
      "Why rest days are when adaptation actually happens, what to eat when you're not training, and the most common rest-day mistakes active people make.",
    category: "Fitness & Recovery",
    date: "2026-10-28",
    readMins: 5,
    image: "/blog-img/large-whatever-bowl.jpg",
    imageAlt: "A large Whatever Bowl stacked with fruit and granola",
    keywords: [
      "rest day nutrition",
      "recovery day eating",
      "muscle recovery food",
      "training adaptation",
    ],
    body: `<p>Here is a sentence that reorganizes how a lot of people think about training: you do not get stronger during workouts. Workouts create the stimulus — controlled damage and depletion — and the actual adaptation happens afterward, during recovery, when your body repairs muscle tissue, restocks glycogen, and rebuilds slightly more capable than before. Which means rest days are not days off from your progress. They are the days your progress happens.</p>

<p>And yet rest-day eating is where active people most reliably sabotage themselves, usually in one of two opposite directions. The first mistake is the "I didn't earn food today" cut — slashing intake because no workout happened. But muscle protein synthesis runs elevated for 24 to 48 hours after resistance training, and that construction project needs materials on the days between sessions. Under-eating on rest days effectively defunds the repair work your hard sessions commissioned.</p>

<p>The second mistake is the opposite: treating rest days as cheat days and swinging from disciplined fueling to a full send. The occasional celebration is fine and arguably good for the soul, but a weekly pattern of massive rest-day surpluses can outweigh an entire week of careful training nutrition — and tends to come packaged with the sluggish, inflamed feeling that makes the next session worse.</p>

<p>The boring, correct answer: rest-day eating should look a lot like training-day eating, with modest adjustments. Keep protein steady — the repair crew does not take weekends. Spread it across the day; roughly 25 to 40 grams per meal keeps synthesis humming. Carbohydrate can come down somewhat since you are not refilling a drained tank, but do not crater it, especially the day before a hard session — tomorrow's workout is fueled by today's glycogen. Keep fruits and vegetables high, because the micronutrients and polyphenols involved in managing exercise-induced inflammation are exactly what repair wants. And hydrate like it matters, because it does.</p>

<p>In practice, a rest day meal from our <a href="/#menu">menu</a> does the job neatly: a bowl with a protein-forward topping build, or a <a href="/#smoothies">smoothie</a> with protein alongside whatever else your day includes. Same nutrients as a training day, just pointed at construction instead of exertion. Our <a href="/#toast">avocado toast</a> earns its place here too — fat and fiber for a day that runs at a lower burn.</p>

<p>Rest well, eat normally, and let the adaptation you already paid for actually get built. We are at 13324 E Sprague Ave, Suite 101, Spokane Valley, seven days a week — because recovery does not check your training calendar.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "eating-color-gray-landscape",
    title: "Eating in Color When the Landscape Goes Gray",
    description:
      "The science of colorful produce — what phytonutrient variety actually does — and why a deliberately colorful plate matters most during the Inland Northwest's gray season.",
    category: "Nutrition",
    date: "2026-10-29",
    readMins: 5,
    image: "/blog-img/dragon-fruit-lemonade.jpg",
    imageAlt: "Vivid pink Dragon Fruit Lemonade from Everbowl",
    keywords: [
      "eat the rainbow",
      "phytonutrients",
      "colorful produce benefits",
      "winter nutrition Spokane",
    ],
    body: `<p>Sometime in the next few weeks, the Inland Northwest will complete its annual costume change: larch gold and maple red giving way to the long gray — overcast skies, bare branches, and a landscape palette that runs from slate to taupe until April. You cannot do much about the sky. Your plate, however, is fully within your control, and there is real science behind keeping it colorful precisely when everything else is not.</p>

<p>"Eat the rainbow" sounds like something printed on a kindergarten poster, but it compresses a legitimate principle: the pigments that color plants are themselves bioactive compounds, and different colors signal different ones. The deep purple-red of acai and blueberries comes from anthocyanins, studied for vascular and cognitive benefits. The hot pink of pitaya is betalains, with antioxidant activity of their own. Orange means carotenoids like beta-carotene; greens carry lutein, folate, and vitamin K; even white produce like banana brings potassium and prebiotic fiber. No single color covers the set — variety is the mechanism, not a slogan.</p>

<p>Large cohort studies back the general picture: higher variety of fruit and vegetable intake, not just quantity, associates with better outcomes on multiple fronts. The researchers' plainest translation: eat more kinds of plants, in more colors, more often.</p>

<p>The gray season is when this quietly falls apart for most of us. Appetite drifts toward beige — bread, pasta, potatoes, the carbohydrate comfort file — and the produce drawer becomes a place where good intentions go soft. The fix is not willpower; it is making the colorful option the convenient one. Frozen berries count fully (flash-freezing preserves the pigments nicely). Pre-cut produce counts. And yes, a bowl someone else builds for you counts completely.</p>

<p>This is, admittedly, the part where we note that color is our entire aesthetic. A pitaya base with mango, kiwi, and blueberries from our <a href="/#menu">menu</a> covers four color families before you have added a topping, and the <a href="/#smoothies">smoothie</a> lineup drinks the same spectrum. We did not design the menu around the phytonutrient-variety literature, but it worked out that way, and in late October the brightest-colored thing in Spokane Valley may well be sitting in our serving window at 13324 E Sprague Ave, Suite 101.</p>

<p>Consider it seasonal counterprogramming. The sky can do what it wants; your bowl does not have to match.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "halloween-sugar-game-plan",
    title: "The Halloween Sugar Game Plan (That Isn't 'Just Say No')",
    description:
      "A realistic, guilt-free approach to Halloween candy for families — what sugar actually does, why restriction backfires, and how to frame the week without food fear.",
    category: "Health",
    date: "2026-10-30",
    readMins: 5,
    image: "/blog-img/vanilla-everwich.jpg",
    imageAlt: "Vanilla Everwich, the Everbowl frozen sandwich treat",
    keywords: [
      "Halloween candy kids",
      "sugar and kids",
      "balanced approach sugar",
      "family nutrition Halloween",
    ],
    body: `<p>Tomorrow night, Spokane Valley's streets fill with tiny ghosts hauling pillowcases of candy, and sometime around November 2nd, every parent faces the same strategic question: what do we actually do with all this sugar? As a business that sells fruit for a living, you might expect us to deliver a stern lecture here. We are not going to, because the evidence suggests the stern lecture is the worst available option.</p>

<p>First, the honest science. The famous "sugar high" — hyperactivity caused by candy — has been studied repeatedly, and controlled trials consistently fail to find it; the wildness of Halloween night is the costumes, the dark, and the friends, not the glucose. Sugar's real costs are quieter and longer-term: dental cavities, displaced nutrition when sweets crowd out real food, and the general pattern problem when daily intake stays high year-round. Note the words daily and year-round. One candy-dense week in October is not what any of that research is describing.</p>

<p>Meanwhile, the restriction literature offers a genuine caution in the other direction. Studies of feeding practices repeatedly find that heavy parental restriction of palatable foods tends to increase children's preoccupation with them and their eating of them when access finally comes. Forbidden fruit dynamics are real, and candy confiscation regimes teach sneaking more reliably than they teach moderation. The healthiest long-term relationship with sweets, the research suggests, looks like neutrality: candy as an ordinary, enjoyable, non-forbidden food that simply exists alongside meals, rather than a charged substance requiring either bingeing or contraband status.</p>

<p>A practical Halloween week, then: let the night be the night — the fun matters, and one evening is nutritionally trivial. Keep normal meals running on schedule so candy supplements rather than replaces breakfast, lunch, and dinner; kids with full tanks self-regulate noticeably better than kids negotiating candy on an empty stomach. A dentist-approved footnote: eating candy in a sitting or two and brushing after is kinder to teeth than grazing it across six weeks of car rides.</p>

<p>And when the family is ready for something bright that is not fun-sized, that is rather our department. A trip to the <a href="/#menu">bowl menu</a> makes a nice November 1st reset — fruit still delivers sweetness, just packaged with the fiber and nutrients candy skips — and the <a href="/#smoothies">smoothies</a> are an easy sell to kids still riding the sugar-neutral philosophy. No lecture included, we promise.</p>

<p>Happy Halloween from the crew at 13324 E Sprague Ave, Suite 101, Spokane Valley. May your porch pumpkins survive and your candy negotiations stay peaceful.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "daylight-saving-time-ends-reset",
    title: "Daylight Saving Time Ends: A November 1st Reset for Spokane Valley",
    description:
      "Clocks fall back and evenings go dark by 5pm across the Inland Northwest. Here's how to use food, light, and a little intention to protect your energy and mood.",
    category: "Health",
    date: "2026-11-01",
    readMins: 5,
    image: "/blog-img/evergreen.jpg",
    imageAlt: "Evergreen green smoothie with spinach, pineapple, and banana in a cup",
    keywords: [
      "daylight saving time ends",
      "early darkness fall",
      "spokane valley winter mood",
      "fall nutrition reset",
      "seasonal energy",
    ],
    body: `
      <p>Somewhere around 2am last night, clocks across Spokane Valley and Coeur d'Alene fell back an hour, and daylight saving time quietly ended for another year. The extra hour of sleep is nice. What follows it is less nice: by this week, the sun will be down before 5pm, commutes both ways happen in the dark, and the Inland Northwest settles into its long, gray stretch toward the solstice. After a month of Halloween candy and Green Bluff cider, today is a genuinely useful day to reset.</p>

      <h2>Why the Inland Northwest feels this one hard</h2>
      <p>Spokane sits far enough north that the seasonal daylight swing is dramatic — roughly nine hours of daylight in early November versus nearly sixteen in June. That's a real shift in light exposure, and light exposure helps regulate circadian rhythm, alertness, and mood. Add in clouds and the first hard frosts, and it's no surprise this stretch of the calendar is when a lot of people notice their energy and motivation quietly dipping.</p>

      <h2>What actually helps (food-first, not medical advice)</h2>
      <ul>
        <li><strong>Get outside early, even briefly.</strong> Morning light exposure — a walk along the Appleway Trail or just coffee on the porch — helps anchor your body clock when the sun is doing less of the work on its own.</li>
        <li><strong>Keep meals regular.</strong> Skipping meals and then catching up at night is an easy habit to fall into as schedules shift with the time change. Steady meals support steadier energy.</li>
        <li><strong>Lean on color when produce gets quieter.</strong> Local farm stands are winding down, so this is a good month to let a bowl do some of that work — açaí, pitaya, and berries carry the same antioxidant pigments year-round, frozen or fresh.</li>
        <li><strong>Don't skip protein at breakfast.</strong> A protein-forward morning is one of the simplest levers for steady energy through a dark afternoon.</li>
      </ul>

      <p>Our <a href="/#smoothies">Evergreen smoothie</a> — spinach, pineapple, and banana blended thick — is built for exactly this stretch: it sneaks in a serving of greens without tasting like one, and it travels well if your schedule just got reshuffled by the time change. On a colder, darker morning, <a href="/#menu">Hot Oats</a> is the other move — warm, filling, and a steadier release of energy than something sugary grabbed on the way out the door.</p>

      <blockquote>You can't negotiate with the sun. But you can control what's in your bowl, when you eat it, and whether you get outside before it disappears.</blockquote>

      <p>None of this is about forcing positivity through a gray Tuesday — some mornings in November just feel heavier here, and that's normal. But small, repeatable habits (regular meals, a little morning light, real food with color in it) genuinely help more than people expect, and they're a lot easier to keep up than a resolution.</p>

      <p>If today's extra hour went straight into snoozing the alarm, that's a fair trade. Swing by <a href="/#location">13324 E Sprague Ave, Suite 101</a> on the way into the new schedule, or place an <a href="/#order">order online</a> before you lose the light — either way, consider it the first small win of the dark half of the year.</p>
    `,
  },

  {
    slug: "spokane-turkey-trot-fuel",
    title: "Spokane Turkey Trot Fuel: What to Eat Before and After the Thanksgiving 5K",
    description:
      "Running a Turkey Trot in Spokane or Coeur d'Alene this Thanksgiving? Here's how to fuel the cold morning 5K and refuel before the big meal, with real menu picks.",
    category: "Fitness & Recovery",
    date: "2026-11-02",
    readMins: 5,
    image: "/blog-img/nanaberry-bliss.jpg",
    imageAlt: "Nanaberry Bliss smoothie, a cold-morning pre-race favorite",
    keywords: [
      "turkey trot fuel",
      "thanksgiving 5k nutrition",
      "spokane turkey trot",
      "race day breakfast",
      "post race recovery",
    ],
    body: `
      <p>Thanksgiving morning in the Inland Northwest has its own ritual: a few thousand people in costumes and ugly sweaters lining up for a Turkey Trot before anyone touches a dinner plate. Whether you're doing the community 5K that winds through Spokane neighborhoods or the Coeur d'Alene version along the lake, running a race before a feast creates a genuinely odd fueling puzzle — you need enough in the tank for 3.1 cold miles, without sitting down to stuffing and pie on a stomach that's still working through breakfast. Here's how to handle both ends of the morning.</p>

      <h2>The cold-morning start line problem</h2>
      <p>Turkey Trots start early and start cold — often in the 20s and 30s here in late November — which means two things working against you: your body burns a little more fuel fighting the chill, and cold, dry air blunts your thirst signal even though you're still losing fluid. Add pre-race nerves and a kitchen full of relatives asking if you've eaten yet, and it's easy to either skip fuel entirely or overdo it on something heavy twenty minutes before the gun.</p>

      <h2>Before you trot</h2>
      <ul>
        <li><strong>60–90 minutes out:</strong> keep it light and mostly carbs. A smoothie sits easier pre-run than solid food — our <a href="/#smoothies">Nanaberry Bliss</a> is banana, berries, and a little natural sweetness blended thin enough to go down fast without weighing you down at mile two.</li>
        <li><strong>Skip the heavy fats and fiber overload</strong> right before the start — the granola-and-nut-butter combo that's perfect most mornings can sit like a rock when you're about to run.</li>
        <li><strong>Hydrate deliberately.</strong> Cold air hides how much you're sweating, so drink water with breakfast even if you don't feel thirsty. If you want caffeine, our <a href="/#sips">Cold Brew</a> is a gentler option than a second cup of drip coffee on a stomach that's already a little keyed up about race time.</li>
      </ul>

      <h2>Dress for 30 degrees, not for the costume contest</h2>
      <p>Turkey Trots are famous for the costumes — turkey hats, pilgrim buckles, inflatable drumsticks — and that's half the fun. But underneath the costume, dress like you're running, not like you're standing at the start line. You'll warm up fast once the gun goes, and the biggest mistake is layering for how cold it feels at 8am instead of how warm you'll be at minute ten. A thin base layer under the costume, gloves you can stuff in a pocket, and shoes that have already seen a few miles (not brand-new ones) will matter more to how you feel than the fuel itself.</p>

      <h2>Crossing the finish line (and facing the feast)</h2>
      <p>This is the part most Turkey Trot guides skip: what you eat in the hour after the race directly affects how the rest of your day feels, including dinner. A 5K at an easy-to-moderate effort isn't a marathon, but it still burns through glycogen and leaves you dehydrated enough that showing up to Thanksgiving dinner depleted is a real way to end up overeating out of genuine hunger rather than tradition.</p>

      <blockquote>Refuel properly after the race and you walk into dinner satisfied and social instead of starving and inhaling the rolls before grace is even said.</blockquote>

      <p>A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers the three things your body is asking for right after a race: carbohydrate to restock glycogen, protein and healthy fat to start repair, and real fruit to replace some of what the cold air pulled out of you. It's also just genuinely satisfying in a way that takes the edge off "I could eat an entire turkey by myself" before you've even gotten home to carve one.</p>

      <h2>Make it a Turkey Trot tradition</h2>
      <p>Plenty of Inland Northwest families already treat the trot as the unofficial start of Thanksgiving — pile the kids and grandparents into costumes, do the 5K (or the fun walk, no shame in that distance), and then regroup. Make the stop at Everbowl part of that tradition: we're at 13324 E Sprague Ave, Suite 101 in Spokane Valley, open and ready for the post-race rush, or <a href="/#order">order ahead online</a> so your bowl is ready the second your group crosses the finish line and makes the short drive over.</p>

      <h2>The bottom line</h2>
      <p>A Turkey Trot is a genuinely great way to earn the day's indulgence instead of dreading it. Fuel light and fast before the start, rehydrate deliberately in the cold, and give your body a real recovery bowl afterward — then go eat the turkey with a clear conscience and an actual appetite instead of a stomach already full of stress-eaten bagel.</p>
    `,
  },
];
