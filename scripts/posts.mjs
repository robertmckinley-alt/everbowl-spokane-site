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

  {
    slug: "apple-cider-vs-whole-fruit-fiber",
    title: "Cider Press vs. Whole Fruit: The Fiber Difference Worth Knowing This Fall",
    description:
      "Green Bluff's cider presses are running and grocery shelves are stacked with fall apple juice. Here's what pressing fruit actually removes, and how to get the whole-fruit benefit back.",
    category: "Nutrition",
    date: "2026-10-05",
    readMins: 5,
    image: "/blog-img/chia-pudding-whatever-bowl.jpg",
    imageAlt: "Chia pudding Whatever Bowl, a fiber-rich alternative to pressed apple cider",
    keywords: [
      "apple cider vs apple",
      "fiber inland northwest",
      "green bluff cider",
      "fall nutrition spokane",
      "whole fruit fiber",
    ],
    body: `
      <p>Drive out to Green Bluff most October weekends and you'll hear the cider press running before you see it — that slow mechanical crunch turning crates of fresh-picked apples into jugs of cloudy, still-warm cider. It's one of the best smells of fall in the Inland Northwest, and grocery stores from Spokane Valley to Coeur d'Alene are stocking the same thing by the gallon through Halloween. Cider deserves its spot in the season. It also deserves an honest look at what the press leaves behind.</p>

      <h2>What pressing actually removes</h2>
      <p>An apple's fiber lives almost entirely in its flesh and skin — the part that gets pulped and strained out during pressing. What flows out the other side is mostly water, natural sugar, and whatever vitamins and polyphenols dissolved into the liquid. A medium apple has roughly four grams of fiber; a glass of cider from that same apple has close to none. The sugar content barely changes in the process. What changes is how fast your body handles it.</p>

      <p>Fiber is what slows sugar absorption down, so eating a whole apple produces a gentler, more gradual rise in blood sugar than drinking the juice pressed from it. That's not a reason to feel guilty about cider — it's a seasonal treat, not a daily beverage, and nobody's handing out medals for virtue at a pumpkin patch. It's just useful to know which version is which, especially if cider is showing up next to donuts, caramel apples, and whatever else is on the Green Bluff table that day.</p>

      <h2>Where whole fruit (and fiber in general) earns its keep</h2>
      <ul>
        <li><strong>Slower digestion, steadier energy.</strong> Fiber delays how quickly your stomach empties, which is part of why a whole apple keeps you fuller longer than the equivalent calories in juice.</li>
        <li><strong>Gut bacteria actually eat it.</strong> Soluble fiber — the pectin concentrated in apple skin, along with the fiber in chia, oats, and berries — feeds the bacteria living in your gut, which is a genuinely active area of nutrition research right now.</li>
        <li><strong>It's filling per calorie.</strong> Whole, fiber-intact food generally takes more chewing and more stomach volume to deliver the same calories as a liquid version, which matters if you're trying to eat enough without overdoing it.</li>
      </ul>

      <blockquote>The rule of thumb we tell people at the counter: when fruit still looks like fruit, your gut gets to do its job the way it's built to. The moment it's pressed into a liquid, that job gets skipped.</blockquote>

      <h2>Getting the fiber back without giving up the season</h2>
      <p>The good news is you don't have to choose between fall flavors and fiber — you just have to pick the right vehicle. A <a href="/#menu">Chia Pudding Bowl</a> is one of the highest-fiber things on our menu, built on a base that's doing the exact opposite of a cider press: whole chia seeds, fruit, and granola, all still intact. The <a href="/#menu">Berry Boost</a> works the same way, layering açaí and chia with real berries instead of squeezing the fiber out of them. Both deliver the kind of slow, steady fullness a glass of juice simply can't.</p>

      <p>If you're after something closer to a drink, a smoothie still beats juice on this front — blending keeps the fiber suspended in the drink instead of straining it out, so a <a href="/#smoothies">Glow Up</a> smoothie carries real fruit fiber along for the ride even though it comes through a straw.</p>

      <h2>Make the Bluff trip a full-circle day</h2>
      <p>None of this is an argument against a cup of warm cider at Green Bluff — go enjoy it, that's what October is for around here. It's just a good excuse to balance the day: pick apples, sip cider at the orchard, and then make the short drive south into Spokane Valley and stop at Everbowl, 13324 E Sprague Ave, Suite 101, for something built from whole fruit on the way home. <a href="/#order">Order ahead online</a> so it's ready when your group rolls in, apple-picking tired and ready for a bowl that puts the fiber back where the press took it out.</p>

      <h2>The bottom line</h2>
      <p>Cider and whole fruit aren't competitors — they're just different tools. One is a seasonal treat best enjoyed in a cup at the orchard. The other is the steady, fiber-forward choice your gut and your blood sugar notice on an ordinary Tuesday. Knowing the difference just means you get to enjoy both on purpose instead of by accident.</p>
    `,
  },

  {
    slug: "thanksgiving-week-without-food-guilt",
    title: "Thanksgiving Week Without the Food Guilt: A Balanced Inland NW Game Plan",
    description:
      "Thanksgiving week doesn't have to be a cycle of restriction and overindulgence. Here's a no-guilt, food-first approach for the Spokane/CdA holiday stretch.",
    category: "Health",
    date: "2026-11-03",
    readMins: 5,
    image: "/blog-img/glow-up.jpg",
    imageAlt: "Glow Up smoothie, a bright, balanced pick for busy Thanksgiving week mornings",
    keywords: [
      "thanksgiving week eating",
      "holiday food guilt",
      "balanced holiday eating",
      "spokane valley thanksgiving",
      "no restriction holiday nutrition",
    ],
    body: `
      <p>Thanksgiving week in the Inland Northwest has a rhythm all its own: office potlucks, a Friendsgiving or two, kids home from school, relatives rolling in from out of town, and then the big meal itself sitting at the end of it like a finish line. Somewhere in there, a lot of people quietly start a mental tally — skip lunch here, "save up" for dinner there, promise themselves a reset come Black Friday. It's a well-worn pattern, and it rarely works the way people hope. There's a simpler, less exhausting way to get through the week.</p>

      <h2>Why the restrict-then-indulge cycle backfires</h2>
      <p>Under-eating earlier in the day to "bank" calories for a big dinner sounds logical, but it usually just sets up intense hunger that overrides any plan to eat slowly or stop when satisfied. You show up to the table already running on empty, and normal appetite cues get drowned out. The research on appetite regulation is pretty consistent here: regular, adequately-fueled meals lead to better control around a big meal than skipping ahead of time does. In other words, the thing that feels like discipline (skipping breakfast before a feast) tends to backfire the hardest.</p>

      <h2>A food-first approach for the week</h2>
      <ul>
        <li><strong>Eat normally, especially on the big day.</strong> A real breakfast and lunch on Thanksgiving itself — not a "saving room" half-meal — keeps blood sugar steady and makes it far easier to enjoy dinner without overdoing it out of pure hunger.</li>
        <li><strong>Protein and fiber early, every day.</strong> Busy weeks with packed schedules and travel are exactly when breakfast gets skipped or turned into something sugary grabbed on the way out the door. A protein-and-fiber start keeps energy steadier through back-to-back errands, school pickups, and in-laws.</li>
        <li><strong>Don't moralize food.</strong> Stuffing, pie, and a second helping of potatoes aren't "bad" — they're once-a-year foods that are part of what makes the holiday feel like the holiday. Guilt doesn't make the meal healthier; it just makes it less enjoyable.</li>
        <li><strong>Move how you actually like to move.</strong> A walk around Liberty Lake or a loop of the Centennial Trail with family does more for how you feel than any amount of post-meal regret, and it's a nice excuse to get out of a house full of relatives for twenty minutes.</li>
      </ul>

      <p>This is also the week it helps to have an easy, no-decision-required option in the rotation. An <a href="/#menu">Everbowl</a> — açaí, banana, granola, and berries — is a genuinely balanced meal you don't have to think hard about between the potluck at work and the in-laws' arrival at the airport. It's real fruit, real fiber, and enough substance to actually hold you over, which is the whole point on a week when "I didn't have time to eat" is the norm rather than the exception.</p>

      <blockquote>The goal for Thanksgiving week isn't willpower. It's just not skipping the meals that keep you steady, so the one meal that's supposed to be special actually feels that way.</blockquote>

      <h2>Mornings when the schedule is packed</h2>
      <p>Between school half-days, travel, and holiday errands around Spokane Valley, breakfast is usually the first thing to get dropped. A <a href="/#smoothies">Glow Up</a> smoothie is built for exactly this — it travels in the cup holder, takes two minutes at the counter, and still delivers real fruit and greens before a day that's otherwise going to be mostly coffee and good intentions. Grab one on the way to the airport pickup or the grocery run for the fifth time that week, and you've covered a real meal instead of running on empty until dinner.</p>

      <h2>The week after matters more than the day itself</h2>
      <p>One meal, even a genuinely huge one, doesn't undo months of normal eating, and it doesn't need to be "corrected" with restriction the next morning. What actually shapes how you feel through the rest of the darkening Inland Northwest winter is what you do most days — not the one Thursday everyone eats more than usual on purpose. If Friday morning finds you wanting something that feels lighter and more like your normal routine, that's exactly the move, not a punishment lap.</p>

      <p>Stop by Everbowl at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley any morning this week, or <a href="/#order">order online</a> ahead of the holiday rush — we're open through the busy stretch for anyone who wants one steady, no-guilt meal in the middle of all the feasting and family logistics.</p>

      <h2>The bottom line</h2>
      <p>Thanksgiving week goes a lot smoother with real meals on the normal days and zero moral weight attached to the big one. Eat regularly, move how you like, let the feast be the feast, and keep one easy, balanced option — a bowl or a smoothie — in your back pocket for the mornings that don't leave room for anything else.</p>
    `,
  },

  {
    slug: "minnehaha-climbing-fuel-october",
    title: "Last Chance at Minnehaha: Fueling an October Climbing Day Before the Season Turns",
    description:
      "Minnehaha Rocks is still dry and climbable this month, but the window is closing. How to fuel a day of bouldering north of Spokane, and where to warm up when winter finally wins.",
    category: "Spokane & Movement",
    date: "2026-10-06",
    readMins: 5,
    image: "/blog-img/nanaberry-bliss.jpg",
    imageAlt: "Nanaberry Bliss smoothie with fresh berries and banana",
    keywords: ["minnehaha rocks", "spokane bouldering", "wild walls climbing gym", "october fitness spokane", "climbing nutrition"],
    body: `
      <p>Minnehaha Park, up on Spokane's north side along the Little Spokane River, doesn't look like much from the parking area — just a quiet neighborhood park with picnic shelters. Walk in a few hundred feet, though, and the granite boulders known locally as Minnehaha Rocks rise out of the ponderosa pines, worn smooth and chalky white at the holds from decades of local climbers working the same problems. October is prime time here: the rock is dry, the bugs are gone, and the afternoons are still warm enough to climb in a t-shirt. That window won't last. Once the fall rain moves in, the granite gets slick and the season effectively ends until spring.</p>

      <h2>Why this month is the one to use</h2>
      <p>Spokane's climbing community treats late September through mid-October as the best stretch of the year at Minnehaha — better than summer, honestly, when the rock gets hot enough to make the smaller crimps feel like sandpaper. Cooler air means better friction, and friction is most of the game in bouldering. If you've been meaning to get out there, or haven't been since last fall, this is the signal to go before the first real soaking rain puts the rock away for the winter.</p>

      <h2>Bouldering is deceptively demanding fuel-wise</h2>
      <p>It's easy to underestimate a climbing day because you're not running or riding anywhere. But a few hours of bouldering is a few hours of maximal-effort bursts on your forearms, shoulders, and core, with short rests in between — closer to interval training than a casual walk in the park. Grip endurance in particular falls off hard when blood sugar dips, which is exactly when a problem you had wired an hour ago suddenly feels impossible. Climbers who skip food "because it's just bouldering" are usually the ones blaming bad luck for a send that was actually a fueling problem.</p>

      <blockquote>Forearm endurance is one of the first things to go when blood sugar drops — long before most people notice they're hungry.</blockquote>

      <h2>Before you climb</h2>
      <p>You want something that digests fast and doesn't sit heavy while you're folding yourself around a boulder problem. A <a href="/#smoothies">Nanaberry Bliss</a> smoothie — banana, strawberry, and açaí blended smooth — covers real carbohydrate and a little potassium without the bulk of a full meal. Drink it in the car on the twenty-minute drive up from Spokane Valley and you'll be topped off by the time you're chalking up at the first boulder.</p>

      <h2>After you climb</h2>
      <p>Forearms that feel like they've been through a workout have, in fact, been through a workout, and they rebuild the same way any other muscle does: with protein and carbohydrate in the hours afterward. A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, and granola — gives you both in one sitting, and it's a far better finish to a climbing day than whatever's left in your car's cupholder. Loop back down Division, through the Valley, and the drive from Minnehaha to our door at 13324 E Sprague Ave, Suite 101 is about 25 minutes — enough time to talk through which problem you're coming back for next time.</p>

      <h2>When the rock finally goes away</h2>
      <p>Once the November rain sets in for good, outdoor climbing around Spokane mostly shuts down until spring. That's when local climbers move indoors to Wild Walls Climbing Gym downtown, which keeps grip strength and technique sharp through the gray months without needing dry rock. If you're building a climbing habit rather than just chasing one good weekend, scouting the indoor gym now — before you actually need it — means you're not starting from zero when the season flips.</p>

      <h2>One more trip, done right</h2>
      <p>Minnehaha isn't going anywhere, but this particular stretch of dry, cool, grippy conditions is temporary. If a climbing day is on the calendar this month, fuel it like the workout it actually is: something easy to digest beforehand, something with real protein and carbs after. Grab both from the Everbowl <a href="/#order">menu online</a> before you head up, or stop in on the way back through the Valley — either way, your forearms will thank you more than they'll thank one more rest day on the couch.</p>
    `,
  },

  {
    slug: "green-bluff-pumpkin-patch-day-trip-fuel",
    title: "Pumpkin Patch Day Trip: Fueling a Family Morning at Green Bluff's Corn Mazes",
    description:
      "Green Bluff's corn mazes and pumpkin patches are in full swing this October. How to fuel a half-day of hay rides and hunting for the right pumpkin without the sugar crash on the drive home.",
    category: "Spokane & Movement",
    date: "2026-10-07",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Smoothie with fresh berries, a balanced option for a family fall outing",
    keywords: ["green bluff pumpkin patch", "spokane corn maze", "fall family activities spokane", "green bluff october", "family day trip fuel"],
    body: `
      <p>Every October, the orchards up on Green Bluff — the farming plateau about 20 minutes north of Spokane — swap their apple bins for pumpkin patches, corn mazes, and hay rides. Family favorites like Siemers Family Orchard, Beck's Harvest House, and Walters' Fruit Ranch open up their fields on fall weekends, and by the second half of the month the parking lots are full of minivans and the kind of kids who will absolutely insist on carrying a pumpkin twice their size back to the car. It's one of the best family mornings the Inland Northwest has to offer this time of year — and also one of the easiest to accidentally run on nothing but cider donuts and apple cider.</p>

      <h2>The problem with the typical patch breakfast</h2>
      <p>A lot of families leave the house early to beat the crowds, skip a real breakfast "because we'll get something up there," and then the first thing everyone eats is a warm cider donut standing in line for the hay wagon. That's not a crime — cider donuts are genuinely one of the better reasons to drive up to the Bluff in October — but a maze, a hay ride, and twenty minutes of kids running flat-out through a pumpkin field on an empty stomach plus straight sugar is a rough combination. You get one good hour of energy and then a meltdown somewhere around the second corn maze attempt.</p>

      <h2>Fuel the morning before you fuel the fun</h2>
      <p>The fix isn't skipping the cider donut. It's not showing up with an empty tank in the first place.</p>
      <ul>
        <li><strong>Eat something with protein before you leave the house.</strong> A quick stop for a <a href="/#menu">Berry Boost</a> bowl — açaí, berries, banana, and granola — gives kids and adults real fuel that lasts through a maze and a hay ride, instead of the 45-minute sugar spike and crash a donut-only breakfast delivers.</li>
        <li><strong>Bring something that travels in the cup holder.</strong> A <a href="/#smoothies">Nanaberry Bliss</a> smoothie is easy for a toddler to sip in a car seat on the drive up Bruce Road, and it's a lot less messy than most on-the-go fall snacks.</li>
        <li><strong>Let the treats be treats.</strong> Once breakfast is handled, the cider donut at the patch is just dessert, not the only thing anyone's eaten since 7am. It tastes better that way too.</li>
      </ul>

      <h2>What actually wears kids (and parents) out up there</h2>
      <p>Green Bluff in October is deceptively active. A corn maze alone can be a mile or more of walking once you account for every wrong turn, on top of a hay ride, pumpkin hunting across an uneven field, and the inevitable second loop because someone insists they know the way out this time. None of that looks like "exercise" the way a trail run does, but by late morning most families have covered more ground than they planned on, often in whatever cool, damp fall weather the Bluff decides to serve up that day.</p>

      <blockquote>A patch day doesn't need sports nutrition. It needs a real breakfast before you leave and a plan for the drive home — that's most of the battle.</blockquote>

      <h2>The drive home is where it usually falls apart</h2>
      <p>By the time everyone's back in the car with pumpkins, gourds, and a bag of Green Bluff apples in the trunk, it's usually early afternoon, lunch is overdue, and patience is thin. This is exactly the window where a real meal — not more snacks from the diaper bag — resets the day. Green Bluff sits north of Spokane, and the drive back down through town toward Spokane Valley is a natural spot to stop rather than push through a hangry last twenty minutes home.</p>

      <h2>Make the Valley your stop on the way back</h2>
      <p>Everbowl is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to the route back from the Bluff to work as a real lunch stop rather than a detour. A build-your-own bowl or a smoothie for the kids is a fast, no-fuss way to turn "we're all starving and cranky" into an actual meal, and it beats scrounging through fast-food drive-through lines on a Saturday when half the Valley had the same idea you did. If the patch trip runs long and you'd rather keep moving, <a href="/#order">order ahead online</a> so it's ready when you pull up.</p>

      <h2>The bottom line</h2>
      <p>Green Bluff's pumpkin patches and corn mazes are worth the drive every October, and the cider donuts are worth eating. Just don't let them be the only thing anyone eats before a morning of hay rides and maze-wandering. A real breakfast beforehand, something easy to sip in the car, and a proper meal on the way home turn a good family morning into one that doesn't end in a parking-lot meltdown.</p>
    `,
  },
  {
    slug: "plantes-ferry-cross-country-season-fuel",
    title: "District Meet Season at Plantes Ferry: Fueling Young Cross Country Runners",
    description:
      "GSL and district cross country meets fill Plantes Ferry Park every October weekend. A practical, non-restrictive fueling guide for young runners and the parents driving them there.",
    category: "Fitness & Recovery",
    date: "2026-10-08",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Smoothie with fresh berries, an easy pre-race option for young runners",
    keywords: ["plantes ferry cross country", "spokane valley youth running", "cross country fueling", "gsl district meet", "high school xc nutrition"],
    body: `
      <p>Every October weekend, Plantes Ferry Park in Spokane Valley turns into one of the busiest spots in the Inland Northwest. Middle and high school cross country teams from across the Greater Spokane League pack the hillside above the Spokane River for district meets, families spread out camp chairs and blankets along the course, and the smell of fall — cut grass, river air, somebody's orange slices — hangs over the whole place. If you've got a kid running this season, or you're the one driving them there before 8am on a Saturday, how everyone eats around race day matters more than most families realize.</p>

      <h2>Race morning isn't the time to experiment</h2>
      <p>Cross country meets reward whatever a runner's stomach already knows and tolerates — not whatever sounds healthiest in the moment. A big, unfamiliar breakfast two hours before a gun goes off at Plantes Ferry is a good way to spend mile two regretting it. The safer pattern is something light, mostly carbohydrate, low in fat and fiber, eaten about 60-90 minutes before the race. A smoothie fits that window well because it digests fast and doesn't sit heavy. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, and açaí blended smooth — is close to the textbook pre-race snack: real sugars for quick energy, nothing greasy, nothing that lingers in the stomach while a kid is trying to hold an 8-minute pace up the first hill.</p>

      <h2>What actually happens on that course</h2>
      <p>The Plantes Ferry course isn't flat. Runners deal with rolling terrain along the river bluff, uneven turf, and whatever October weather the Inland Northwest decides to serve that morning — anything from crisp and sunny to a cold drizzle that soaks shoes by the first turn. A 5K effort at that intensity burns through glycogen stores fast, especially for younger athletes who haven't built the fueling habits older runners have. That's exactly why what happens in the thirty minutes after the finish line matters almost as much as the warm-up.</p>

      <blockquote>The window right after a race is when the body is primed to restock — protein and carbs together work better than either alone, and waiting until the drive home wastes some of that window.</blockquote>

      <h2>The post-race window, done simply</h2>
      <ul>
        <li><strong>Get protein and carbs in within the hour.</strong> A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers both without needing a cooler full of snacks in the trunk.</li>
        <li><strong>Don't skip rehydrating just because it's cool out.</strong> October mornings at Plantes Ferry can feel mild enough that kids forget they were sweating on that last hill; water or a smoothie after the race still matters.</li>
        <li><strong>Keep it low-key.</strong> This isn't about optimizing split times with sports science — it's a snack and a meal, timed reasonably, for a kid who just ran hard.</li>
      </ul>

      <h2>For the parents doing the actual driving</h2>
      <p>Anyone who's done a GSL meet morning knows the schedule: an early alarm, a cold thermos of coffee, bleacher seats or a folding chair, and a full morning before anyone's eaten a real meal. It's worth fueling yourself with the same logic you're using for your runner — something that travels well and doesn't require a sit-down breakfast nobody has time for before a 7:45 start.</p>

      <h2>Make the stop before or after part of the routine</h2>
      <p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, a short drive from Plantes Ferry and an easy stop whether you're grabbing a smoothie for the ride over or a bowl for the whole team after results are posted. Meet mornings move fast, so if you know your start time, <a href="/#order">order ahead online</a> and swing by without losing your spot in the parking scramble. A few teams have started making a post-meet bowl run a standing tradition — it's a low-effort way to celebrate a good race or shake off a rough one.</p>

      <h2>The bottom line</h2>
      <p>Cross country season at Plantes Ferry is one of the best fall traditions in Spokane Valley, and the fueling part of it doesn't need to be complicated. Something light and familiar before the gun, protein and carbs within the hour after, and real hydration throughout — that's the whole plan. Everything else is just enjoying a crisp October morning watching kids run hard on a course in your own backyard.</p>
    `,
  },
  {
    slug: "finch-arboretum-fall-color-walk",
    title: "Finch Arboretum's Fall Color Walk: A Low-Key Refuel Day for Spokane Families",
    description:
      "Finch Arboretum's flat, paved paths and quiet fall color make it Spokane's easiest family walk this October. A simple before-and-after fueling guide for the whole crew.",
    category: "Spokane & Movement",
    date: "2026-10-08",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A smoothie ready for an easy post-walk refuel in Spokane",
    keywords: ["finch arboretum", "spokane fall foliage", "west spokane family walk", "john a finch arboretum", "easy fall walks spokane"],
    body: `
      <p>Most of the fall-color advice floating around the Inland Northwest points you toward a hike — Tubbs Hill, Mineral Ridge, Dishman Hills, something with a hill and a view. All worth doing. But if you're pushing a stroller, bringing grandparents along, or just don't feel like a workout today, the John A. Finch Arboretum on the west side of Spokane is the one fall-color spot that almost nobody has to train for. Sixty-five acres along Garden Springs Creek, mostly flat, mostly paved, and in mid-to-late October it's genuinely one of the prettiest free things to do in the city.</p>

      <h2>Why this spot works when the hikes don't</h2>
      <p>Finch Arboretum isn't a hike in any real sense — it's a collection, built around one of the largest public conifer collections in the Inland Northwest, with maples, oaks, and ornamentals planted in among the evergreens specifically so the color show stands out against all that green. The paths follow Garden Springs Creek with almost no elevation change, which means it works for a toddler just learning to walk, a grandparent who isn't up for Mineral Ridge's switchbacks, or anyone who just wants fall color without sore legs the next day. It's also almost always quieter than Spokane's bigger fall-foliage names, since most people default to the lake-view hikes and never think to drive over to Woodland Boulevard.</p>

      <h2>What the walk actually feels like in October</h2>
      <p>By mid-October the Japanese maples near the creek turn a deep red that photographs better than almost anything else in the city, while the surrounding conifers stay dark green behind them — the contrast is the whole point of how the arboretum was planted decades ago, and it still works exactly as intended. The full network of paths covers a mile or two depending on how much you wander, which usually comes out to somewhere between 30 minutes and an hour for most families, benches scattered along the creek for anyone who wants to just sit and let the kids run around a flat lawn for a while.</p>

      <blockquote>A flat, unhurried walk still counts as movement — and the body doesn't know the difference between fueling for a mile at the arboretum and fueling for a steeper trail across town.</blockquote>

      <h2>Fuel for an easy walk, not a workout</h2>
      <p>This isn't a hike that demands sports nutrition, but a little planning still makes the outing better, especially with kids in tow.</p>
      <ul>
        <li><strong>Something warm before you go.</strong> An <a href="/#sips">Iced Matcha</a> — or ask for it hot, since October mornings in West Spokane can run cool along the creek — gives you a gentle, steady lift without the crash of a sugary coffee drink before a walk with little ones.</li>
        <li><strong>Something light after, not a heavy meal.</strong> A short, flat walk doesn't need a huge recovery meal. A <a href="/#menu">Chia Pudding Bowl</a> — chia, coconut, fresh fruit — is satisfying without being so much food that everyone's sluggish for the rest of the afternoon.</li>
        <li><strong>Bring water even on a mild day.</strong> It's an easy walk, but kids run around more than the pace suggests, and the creek-side shade can make it easy to forget you're still outside working up a thirst.</li>
      </ul>

      <h2>Make it a loop that ends in the Valley</h2>
      <p>Finch Arboretum sits on the west side of Spokane, so a walk there pairs naturally with a drive back east on I-90 toward home. Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to the route back that it makes sense as the stop that ends the outing rather than a special trip of its own. If you know your timing, <a href="/#order">order ahead online</a> so bowls and smoothies are ready the moment you pull in, no standing around after a walk that was supposed to be the easy part of the day.</p>

      <h2>The bottom line</h2>
      <p>Not every fall outing needs to be a trailhead and a water bottle. Finch Arboretum gives Spokane families real October color on paths flat enough for everyone in the group, and a short, simple fueling plan — something warm before, something light after — is all it takes to make the whole afternoon easy. Loop the drive home through Spokane Valley and let Everbowl close out the day.</p>
    `,
  },
  {
    slug: "kraziness-in-the-kennel-game-night-fuel",
    title: "Kraziness in the Kennel: Fueling Your Zag Game-Night Routine",
    description:
      "Gonzaga basketball's Kraziness in the Kennel kicks off October nights across Spokane. A practical fueling guide for the watch party, the walk to the Kennel, or the drive home.",
    category: "Spokane & Movement",
    date: "2026-10-09",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A Cacao Ice Blended Coffee ready for a Gonzaga game night in Spokane",
    keywords: ["kraziness in the kennel", "gonzaga basketball spokane", "mccarthey athletic center", "zag game day spokane valley", "gonzaga basketball season fuel"],
    body: `
      <p>Every October, Gonzaga basketball announces that another season has arrived with Kraziness in the Kennel — the free, student-driven scrimmage and dunk-contest night at the McCarthey Athletic Center that doubles as Spokane's unofficial start of basketball season. Students start lining up outside the Kennel hours before doors open, the student section is already in full voice before the team even scrimmages, and by the final buzzer half the city is talking about how this year's Zags look. It's one of the few nights where Spokane's college-town energy and its sports-town energy are the exact same thing, and whether you're a student in line at 4pm or a family watching the highlights from home, it's also a night that runs long — which means it's worth thinking about food before the excitement takes over.</p>

      <h2>Why a game night wears you out more than you'd think</h2>
      <p>Kraziness in the Kennel isn't a workout, but the night around it usually is: a wait in line in the October evening air, a packed, loud arena for a couple of hours, and for a lot of fans, errands and dinner squeezed in beforehand instead of planned around. Add the fact that most arena concession lines move slowly and the options skew toward salty, heavy, or sugary, and it's easy to end the night feeling more drained than the actual basketball should leave you. The fix isn't complicated — it's just rarely the first thing on anyone's mind when tip-off is the only thing they're thinking about.</p>

      <h2>Before you head to the Kennel or the watch party</h2>
      <p>If you're heading to campus, or just setting up for a watch party at home, give yourself something with real carbohydrate and protein an hour or so beforehand rather than running on excitement and whatever's in the pantry. A <a href="/#menu">Mango Majic</a> bowl — mango, pineapple, banana — is quick enough to eat before you walk out the door and gives you steady energy instead of the sugar spike-and-crash of grabbing candy on the way out. It beats showing up to a loud gym on an empty stomach and regretting it by the second scrimmage team's warm-ups.</p>

      <blockquote>A loud arena and a long line both burn through energy faster than people expect — eating something real beforehand is the difference between feeling sharp through the whole scrimmage and fading by the dunk contest.</blockquote>

      <h2>Make the watch party better than the concession stand</h2>
      <p>For the fans staying local — and there are a lot of them, since Kraziness in the Kennel streams and clips spread across Spokane the next morning either way — a watch party at home or with friends in Spokane Valley is its own kind of game night. Skip the chip bowl as the only food on the table and build the spread around something with actual substance: an <a href="/#menu">Everbowl</a> or two split a few ways covers real fruit, granola, and protein without anyone having to cook, and a round of <a href="/#sips">Cacao Ice Blended Coffee</a> works as the fun, caffeinated drink that still beats a gas-station energy drink for a night that runs past most people's usual bedtime.</p>

      <h2>After the final buzzer</h2>
      <p>Whether you're walking back to the dorms, driving home from the Kennel, or just clicking off the stream after the dunk contest, a late-night crash is common after a few hours of noise and adrenaline. Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, and it's an easy stop on the way home from campus or anywhere else around town if you time it before close. <a href="/#order">Order ahead online</a> so it's ready when you pull in — a far better way to close out a Zags night than whatever's still open on the drive-through strip.</p>

      <h2>A few ways to make game-night fueling easy</h2>
      <ul>
        <li><strong>Eat something real before tip-off.</strong> A bowl or smoothie an hour ahead beats running on arena nachos alone.</li>
        <li><strong>Build the watch party around more than chips.</strong> Split a couple of bowls so everyone's got real fuel, not just salt.</li>
        <li><strong>Plan the after-game stop before you're starving.</strong> Order ahead online if you know you're heading through the Valley once it's over.</li>
        <li><strong>Save the energy drink for emergencies.</strong> A Cacao Ice Blended Coffee gives you the caffeine without the crash halfway through overtime.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Kraziness in the Kennel is one of the best free nights on Spokane's fall calendar, and it's easy to let the excitement run the whole evening without a thought for food. A real bowl or smoothie before tip-off, a better spread for the watch party, and a stop in Spokane Valley on the way home turn a loud night into one that actually leaves you feeling good the next morning, Zags record included.</p>
    `,
  },
  {
    slug: "scarywood-nights-silverwood-fuel-guide",
    title: "Scarywood Nights at Silverwood: How to Fuel a Haunt Without the Candy Crash",
    description:
      "Silverwood's Scarywood Nights run every October weekend near Coeur d'Alene. A practical fueling guide for the drive up, the hours on your feet, and the ride home through Spokane Valley.",
    category: "Spokane & Movement",
    date: "2026-10-09",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A smoothie ready for the drive up to Silverwood's Scarywood Nights",
    keywords: ["scarywood nights", "silverwood theme park october", "coeur d'alene haunt season", "spokane valley fall fuel", "athol idaho scarywood"],
    body: `
      <p>Every Friday, Saturday, and Sunday night in October, Silverwood Theme Park in Athol, Idaho trades roller coasters for fog machines and turns into Scarywood Nights — one of the Inland Northwest's biggest haunt-season traditions. Families from Spokane and Coeur d'Alene make the drive up US-95 all month, and by the time the gates open at dusk, the parking lot is full of people bundled in jackets for a night of haunted houses, scare zones, and the handful of rides still running after dark. It's a great night out. It's also, physically, a long one: hours on your feet, cold October air, late bedtimes, and a snack stand lineup that leans hard into funnel cake and candy. None of that is a problem if you plan the actual eating part of the night a little better than most people do.</p>

      <h2>Why a haunt night is harder on the body than it looks</h2>
      <p>Scarywood Nights don't involve much running, but they're still a workout by the numbers that matter — several hours of standing in lines, walking between scare zones, and a fair amount of adrenaline spiking and dropping every time something jumps out of the fog. Add in October nighttime temperatures that routinely dip into the 40s at Silverwood's elevation, and you've got a recipe for the kind of low-grade fatigue that makes the last hour of the night feel a lot longer than the first. Most people blame the cold or the crowds. Often it's just that nobody ate anything with real substance since lunch, and the body's been running on adrenaline and parking-lot nerves for three hours.</p>

      <h2>Before you leave Spokane Valley</h2>
      <p>The drive from Spokane Valley to Silverwood is about 45 minutes, which is exactly enough time for a smoothie to settle before a night of walking. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, and açaí blended smooth — is a good call here: real carbohydrate for sustained energy, nothing heavy enough to sit badly while you're standing in a haunted house line an hour later. It beats showing up on an empty stomach and letting the first funnel cake stand you pass do all the deciding for you.</p>

      <blockquote>Adrenaline burns through blood sugar fast — a steady snack before a haunt night does more for how you feel at 9pm than anything you can grab once you're already there.</blockquote>

      <h2>Skip the all-candy strategy</h2>
      <p>There's nothing wrong with grabbing a treat once you're inside the gates — it's part of the night. The mistake is treating sugar as the entire dinner plan, which is how most people end up crashing somewhere around the third haunted house, cold and suddenly exhausted with no real fuel behind the shaking-off-the-scare adrenaline. A better pattern is simple: eat something with actual protein and carbs before you go, treat yourself to one thing once you're there, and don't let a funnel cake be the only calories between lunch and midnight.</p>

      <h2>The drive home is where it falls apart</h2>
      <p>By the time Scarywood lets out, it's late, everyone's cold, and the easiest decision in the world is drive-through food on the way back down US-95. It works, but it's also the point in the night when a better option is barely any further out of the way. Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close to the route back from Athol and open late enough on weekend nights to make it a real stop, not a detour. A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers the protein and carbs a body actually wants after hours on its feet, and it tastes a lot better at 10pm than another bag of fast food does.</p>

      <h2>A few ways to make haunt-night fueling easy</h2>
      <ul>
        <li><strong>Eat a real pre-haunt snack, not just coffee.</strong> A smoothie or light bowl before you leave beats showing up running on empty.</li>
        <li><strong>Dress for the cold and drink water anyway.</strong> It's easy to forget to hydrate when the air feels chilly instead of hot, but a night of walking still adds up.</li>
        <li><strong>Pick one treat inside the gates, not five.</strong> Enjoy the funnel cake — just don't let it be the whole meal.</li>
        <li><strong>Plan the stop on the way home before you're starving.</strong> If you know your group's heading back through the Valley, <a href="/#order">order ahead online</a> so it's ready when you pull in, tired and ready to sit down.</li>
        <li><strong>Warm up with something other than more sugar.</strong> A hot or iced <a href="/#sips">Strawberry Lemonade</a> or matcha makes a nice reset if the candy's already caught up with everyone in the car.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Scarywood Nights are one of the best reasons to make the drive up to Athol every October, and a few minutes of planning around food is the difference between a night that ends with everyone cold, cranky, and sugar-crashed versus one that ends well. Fuel up before you leave the Valley, keep the candy as a treat instead of dinner, and let Everbowl be the stop that closes out the night on the way home.</p>
    `,
  },
  {
    slug: "beacon-hill-camp-sekani-fall-mtb-fuel",
    title: "Last Dry Singletrack: Fueling a Fall Mountain Bike Day at Beacon Hill and Camp Sekani",
    description:
      "Mid-October is prime time on Spokane's Beacon Hill and Camp Sekani trails, before mud and snow shut the singletrack down. A practical fueling guide for riders based in Spokane Valley.",
    category: "Spokane & Movement",
    date: "2026-10-10",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "An acai bowl ready for refueling after a fall mountain bike ride at Beacon Hill",
    keywords: ["beacon hill mountain biking", "camp sekani spokane", "fall mountain bike fuel", "spokane valley trail fuel", "spokane river mtb trails"],
    body: `
      <p>If you ride mountain bikes in Spokane, you already know the calendar is working against you this time of year. The window between "trails are tacky and fast" and "trails are a frozen, rutted mess" is short, and right now — mid-October, before the first real cold snap turns the dirt to ice overnight — is about as good as singletrack gets. Beacon Hill and the connected Camp Sekani trail network along the Spokane River, just off Upriver Drive on the city's northeast side, are two of the busiest spots in town for exactly this reason: dry, grippy dirt, basalt rock features, river views through thinning tree cover, and a trail system built and maintained largely by the local riding community. It's a short drive from Spokane Valley, and this stretch of fall is when it's worth making the trip before the weather turns.</p>

      <h2>Why a fall MTB day asks more of you than it looks like</h2>
      <p>Technical trail riding burns through glycogen in bursts — short, hard efforts climbing or powering through a rock garden, followed by recovery on the descents, repeated for an hour or two. Add cooler October air, which blunts the thirst signal that usually reminds you to drink, and it's easy to finish a Beacon Hill loop more depleted and more dehydrated than you realized mid-ride. Riders tend to notice the forearm pump and the tired legs; they notice the low blood sugar and the dehydration a lot less, right up until the drive home feels foggier than it should.</p>

      <h2>Before you load up the bike</h2>
      <p>A ride at Beacon Hill rewards showing up with something in the tank rather than riding on coffee alone. A smoothie an hour or so before you roll out — something like a <a href="/#smoothies">PB Cacao Dream</a> — gives you real carbohydrate plus a solid hit of protein and fat, which digests easier before a technical ride than a heavy meal and holds up better than a granola bar alone. If you're an early-morning rider beating the rest of the day's traffic to the trailhead, an <a href="/#sips">Iced Matcha</a> or <a href="/#sips">Cold Brew</a> on the way over covers the caffeine without the jittery spike-and-crash that a gas-station energy drink tends to deliver halfway up the first climb.</p>

      <blockquote>Technical singletrack punishes a flat battery more than flat ground does — a rider running low on fuel loses line choice and reaction time well before they feel genuinely tired.</blockquote>

      <h2>Hydration doesn't get a season off</h2>
      <p>The biggest mistake riders make once the weather cools is treating hydration like a summer-only problem. You're still sweating under a helmet and gloves, you're still breathing harder on the climbs, and 50-degree air just makes it easier to ignore. Bring water on the bike the same way you would in August, and don't let a cool day convince you that one bottle is plenty for a two-hour loop.</p>

      <h2>After the ride: real recovery, not just a snack</h2>
      <p>Once you're back at the truck with dirt on your shins and that particular kind of good-tired that a technical ride leaves you with, the next hour matters. A bowl with real protein and carbohydrate — the <a href="/#menu">PB Everbowl</a> or the <a href="/#menu">Everbowl</a> itself, açaí with banana, granola, and a nut butter — covers glycogen refill and muscle repair a lot better than whatever's left in your jersey pocket. Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, a quick drive back from the Beacon Hill trailheads, and <a href="/#order">ordering ahead online</a> means it's ready by the time you've racked the bike and changed out of your riding shoes.</p>

      <h2>A few ways to make fall MTB fueling easy</h2>
      <ul>
        <li><strong>Eat something real before you load the bike.</strong> A smoothie or light meal an hour out beats riding on coffee and good intentions.</li>
        <li><strong>Bring water even when it's cool.</strong> The thirst cue is weaker in fall, not the actual fluid loss.</li>
        <li><strong>Plan the post-ride stop before you're starving.</strong> Order ahead if you know you're heading back through the Valley once the loop is done.</li>
        <li><strong>Don't skip the recovery window because the ride felt short.</strong> Technical riding taxes you more than the mileage suggests.</li>
        <li><strong>Watch the forecast, not just the calendar.</strong> Once the mud or the first hard freeze sets in, this window closes fast — ride it while it's here.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Beacon Hill and Camp Sekani are two of Spokane's best fall riding spots, and this stretch of dry October dirt won't last. Fuel up before you roll out, keep drinking even though it's cool, and treat the ride home through Spokane Valley as the start of recovery, not an afterthought — a real bowl or smoothie does more for how you feel that evening than anything from a vending machine at the trailhead.</p>
    `,
  },
  {
    slug: "antoine-peak-spokane-valley-fall-hike",
    title: "Antoine Peak: The Fall Hike Hiding in Spokane Valley's Backyard",
    description:
      "Antoine Peak Conservation Area sits minutes from Everbowl Spokane, with open meadow views over the Valley at their best in October. A fueling guide for the hike next door.",
    category: "Spokane & Movement",
    date: "2026-10-11",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "An acai bowl ready for a post-hike refuel after Antoine Peak",
    keywords: ["antoine peak conservation area", "spokane valley hiking", "fall hikes spokane valley", "mica peak conservation area", "spokane valley trails"],
    body: `
      <p>Every fall hiking list in the Inland Northwest points toward the same handful of names — Tubbs Hill, Mineral Ridge, Liberty Lake, Dishman Hills. They're all worth the drive. But the trail a lot of Spokane Valley residents overlook is the one closest to home: Antoine Peak Conservation Area, a Spokane County property tucked between Forker Road and the north side of the Valley, with over 1,200 acres of ponderosa pine, open bunchgrass meadow, and a summit loop that clears the trees just enough to lay out the whole Valley floor below. In October, with the grass gone gold and the air finally cool enough to climb without overheating, it's one of the best short hikes around — and one of the few that doesn't require planning a whole afternoon around the drive.</p>

      <h2>Close enough to be a Tuesday hike, not just a weekend trip</h2>
      <p>What sets Antoine Peak apart isn't dramatic scenery — it's proximity. The main trailhead off Fairview Lane and Evergreen Road is a short drive from most of Spokane Valley, which makes the 3-to-5-mile summit loop realistic after work, not just on a Saturday. That changes how you should think about fueling it. A hike you treat as a quick after-work reset doesn't need the elaborate pre-loading some all-day trips call for — but it still deserves more than showing up running on an afternoon's worth of coffee and nothing else.</p>

      <h2>What the climb actually asks of you</h2>
      <p>The loop to the summit gains a few hundred feet through open meadow and scattered timber, with enough exposed, south-facing grassland that an October afternoon can still feel warmer than the forecast suggests. It's not a grind, but it's steady enough that showing up under-fueled turns the back half of the loop into more of a slog than it needs to be — especially once the sun starts dropping and the Valley lights start coming on below the summit.</p>

      <blockquote>A short, steady climb on an empty stomach still runs on empty — the length of a hike matters less than whether you actually ate something before you started it.</blockquote>

      <h2>Before you head up Fairview</h2>
      <p>Since this is the kind of hike you can fold into a normal afternoon, the easiest fix is routing through Everbowl Spokane on the way. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, açaí — gives you real carbohydrate that digests fast and doesn't sit heavy on a climb, which beats grabbing something out of a gas station cooler on the way past Sullivan. If you're making it an evening hike and want a little lift for the last light of the day, an <a href="/#sips">Iced Matcha</a> covers steady caffeine without the crash that hits halfway up the meadow.</p>

      <h2>The payoff at the top, and the stop after</h2>
      <p>The summit view is the reason people keep coming back — a wide, open look at the Valley, the Spokane River corridor, and on a clear fall evening, the kind of light that makes the whole short trip worth it. Once you're back at the car, though, is when the hike actually gets paid for. A loop like this, done after a full day of work, leaves you more depleted than the modest mileage suggests, and a real bowl does more for how you feel that evening than whatever's left in the pantry. Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to the Antoine Peak trailhead that it's a natural stop on the way home rather than a detour, and a <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers the protein and carbohydrate your legs are asking for.</p>

      <h2>A few ways to make it an easy habit</h2>
      <ul>
        <li><strong>Treat it like the quick hike it is.</strong> A smoothie beforehand is plenty — you don't need to overthink fueling a 3-to-5-mile loop.</li>
        <li><strong>Watch the clock, not just the trail.</strong> October daylight disappears fast; start the loop with enough margin to summit and descend before dusk.</li>
        <li><strong>Bring water even on a short loop.</strong> The open meadow sections get more sun exposure than the shaded parts of the trail suggest.</li>
        <li><strong>Make the stop after part of the plan, not an afterthought.</strong> If you know you're heading back down Fairview toward Sprague, <a href="/#order">order ahead online</a> so it's ready when you pull in.</li>
        <li><strong>Use it as your go-to when you don't have time for a bigger trail.</strong> Antoine Peak is the hike you can actually fit in on a weekday, which makes it worth adding to the regular rotation.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Antoine Peak doesn't get the attention Tubbs Hill or Liberty Lake get, but for Spokane Valley residents, it might be the most useful fall hike on the list simply because it's so close. Fuel up with something real before you climb, take in the view while the fall light lasts, and let Everbowl be the easy stop that turns a weekday hike into a full reset.</p>
    `,
  },
  {
    slug: "long-weekend-columbus-day-spokane-valley-fuel",
    title: "A Long October Weekend: Fueling the Extra Day Off in Spokane Valley",
    description:
      "Indigenous Peoples' Day/Columbus Day gives much of Spokane Valley an unplanned Monday off. A practical guide to using the extra day well, instead of letting it run on coffee and snacks.",
    category: "Health",
    date: "2026-10-11",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "An acai bowl, an easy way to start an unplanned day off in Spokane Valley",
    keywords: ["columbus day spokane", "indigenous peoples day inland northwest", "three day weekend spokane valley", "fall long weekend spokane", "spokane valley day off ideas"],
    body: `
      <p>The second Monday of October sneaks up on a lot of Spokane Valley households. Banks close, many schools and government offices are out, and plenty of local employers give the day as a floating holiday — and suddenly you've got an unplanned Monday where the usual 6 a.m. routine just doesn't apply. It's a small gift of a day, but it's also an easy one to waste: no alarm, no plan, and somehow it's 1 p.m. and all you've eaten is the second half of a coffee you made four hours ago.</p>

      <h2>An unstructured day needs more of a plan than a structured one</h2>
      <p>This is the part people get backwards. On a normal workday, meals happen because the schedule more or less forces them — a lunch break, a dinner time everyone in the house agrees on. On a day off with nothing on the calendar, those anchors disappear, and it's remarkably easy to drift from coffee to "I'll eat something eventually" to a 3 p.m. crash that wrecks whatever you were planning to do with the rest of the afternoon. A long weekend is worth protecting, and that starts with treating breakfast like it still matters even though nobody's making you clock in.</p>

      <blockquote>A day with no schedule doesn't need less food structure than a workday — it needs more, because nothing else is reminding you to eat.</blockquote>

      <h2>Whatever you're doing with the day, start it the same way</h2>
      <p>Whether the plan is yard work before the first hard freeze, a slow morning catching up on sleep, or finally getting out to see the color along the Spokane River corridor, the first real meal of the day sets the tone for all of it. A <a href="/#toast">Classic Avocado Toast</a> covers fat, fiber, and enough staying power that you're not hunting for a snack by 10 a.m., and an <a href="/#sips">Iced Matcha</a> gives you steady energy without the jittery spike a second or third cup of drip coffee tends to bring on a day when you're moving at your own pace.</p>

      <h2>If the day turns into a day trip</h2>
      <p>A lot of Spokane Valley residents use this particular Monday for exactly the kind of outing a normal weekday doesn't allow — a walk along Mirabeau Point or the Centennial Trail while the leaves are still turning, a drive up to Coeur d'Alene to see Tubbs Hill before the color's gone, or just a longer loop than you'd normally have time for. If you're heading out the door for a few hours on your feet, a <a href="/#smoothies">Nanaberry Bliss</a> before you go gives you real carbohydrate that digests easily and won't sit heavy on a walk or a hike. When you're back, a bowl with actual protein and carbs — the <a href="/#menu">PB Everbowl</a> or the <a href="/#menu">Everbowl</a> itself — does more to refill the tank than whatever's left over in the pantry from the weekend.</p>

      <h2>If the day turns into chores instead</h2>
      <p>Not every extra day off is scenic. For plenty of people, the second Monday of October is the day the gutters finally get cleared, the garden beds get put to rest before winter, or the garage gets reorganized before it's too cold to want to. That kind of physical work on and off a ladder for a few hours adds up just as much as a hike does, and it's just as easy to shortchange because it doesn't feel like "exercise." Treat it the same way — real food before you start, water within reach, and a proper meal once you're done rather than finishing the day on crackers because you're too tired to cook.</p>

      <h2>Make the stop part of the day, not an afterthought</h2>
      <p>Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, easy to fold into either version of the day — a stop on the way out if you're heading toward the river or up to Coeur d'Alene, or a reward on the way home once the yard work's done. If your plans are loose enough that you don't know exactly when you'll want it, <a href="/#order">ordering ahead online</a> means you're not standing around waiting once you've decided you're hungry.</p>

      <h2>A few ways to actually use the day off</h2>
      <ul>
        <li><strong>Eat breakfast even without an alarm.</strong> A day with no schedule still needs a first meal — it just won't remind you on its own.</li>
        <li><strong>Match the fuel to the activity.</strong> A smoothie before a walk, a full bowl after physical work — don't run a chore day on coffee alone.</li>
        <li><strong>Plan the stop before you're starving.</strong> A loose schedule is exactly when it helps to order ahead.</li>
        <li><strong>Don't let "unstructured" mean "unfed."</strong> The crash from skipping meals on a day off feels the same as it does on a workday.</li>
        <li><strong>Use the extra daylight hours while October still has them.</strong> Evenings are getting shorter fast; a morning start gets more out of the day.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>However you end up spending the second Monday of October, it's worth treating like the actual day off it is rather than letting it run on fumes. Eat something real to start it, match your fuel to whatever you end up doing, and let a stop at Everbowl in Spokane Valley be the easy part of a day that otherwise has no plan.</p>
    `,
  },
  {
    slug: "treadmill-season-indoor-running-fuel",
    title: "Treadmill Season Starts Now: Keeping Your Running Base Through a Spokane Fall",
    description:
      "As Spokane Valley mornings turn dark and cold, outdoor runs start sliding indoors. How to protect your running base through the shift without losing fuel or motivation.",
    category: "Fitness & Recovery",
    date: "2026-10-12",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A smoothie ready to fuel an early, dark Spokane Valley run before work",
    keywords: ["treadmill training spokane", "indoor running fall", "spokane valley running", "fall running fuel", "running base inland northwest"],
    body: `
      <p>Mid-October is when the shift actually happens for most Spokane Valley runners. It's not the first snow that pushes people inside — that's still weeks away — it's the mornings. Sunrise keeps sliding later, the pre-dawn temperature keeps dropping into the 30s and 40s, and the easy 6 a.m. loop around the neighborhood that felt effortless in August starts needing a headlamp, a jacket, and a little more willpower than it used to. Somewhere around now, a lot of runners quietly start trading some outdoor miles for the treadmill at the gym, and the base they built all summer is genuinely at risk if the transition isn't handled on purpose.</p>

      <h2>The base doesn't disappear — but it does get neglected</h2>
      <p>Treadmill running isn't a downgrade. Mechanically it's close enough to the road that a well-run indoor plan keeps your aerobic base intact through the darkest, coldest stretch of the year. The real risk isn't the machine — it's the habit drift that comes with it. Outdoor runs have built-in accountability: you're already outside, already moving, already past the hardest part. Treadmill runs require a drive to the gym, a locker, and a decision you have to make fresh every single time. That's where fall training plans quietly fall apart, usually around week three.</p>

      <blockquote>A treadmill doesn't ruin a running base. Skipping the session because getting to the treadmill felt like too much effort does.</blockquote>

      <h2>Fuel the transition, not just the run</h2>
      <p>One thing that does change when you move indoors is timing. An outdoor sunrise run often happens on momentum — you're up, you're out the door, you figure out breakfast after. A gym session usually means more lead time: getting dressed, driving, warming up on a machine instead of just starting to jog. That gap is exactly where a lot of runners either skip fuel entirely or grab whatever's fastest, and neither serves a real training effort. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, açaí — is built for this window: real carbohydrate that digests quickly, nothing heavy sitting in your stomach for mile three on the belt.</p>

      <h2>What a treadmill session actually demands afterward</h2>
      <p>Indoor running can feel easier because there's no wind, no hills to speak of, and the pace is set for you — but a controlled, consistent pace and zero elevation change usually means a tempo run or set of intervals is more honest on a treadmill than people expect. The muscles don't know the difference between a hard effort indoors and one on the Centennial Trail; they still need to refuel the same way. A bowl with real protein and carbohydrate matters just as much after a gym session as after a trail run, even though it can feel less "earned" when you never left the building.</p>

      <h2>Make the gym-to-bowl stop part of the routine</h2>
      <p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to most of the Valley's gyms that it folds naturally into a morning routine rather than adding a detour. After a treadmill session, a <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers the protein and carbs your legs are asking for, and it's a lot more satisfying at 7 a.m. than talking yourself into a protein bar from the gym vending machine. If you're trying to get in and out before work, <a href="/#order">ordering ahead online</a> means it's ready by the time you've showered and changed.</p>

      <h2>A few ways to protect the base through the transition</h2>
      <ul>
        <li><strong>Decide the night before, not the morning of.</strong> "Treadmill or outside" is a much easier call made at 9 p.m. than at 5:45 a.m. in the dark.</li>
        <li><strong>Keep a gym bag packed and in the car.</strong> Removing one decision point removes one excuse to skip the session.</li>
        <li><strong>Fuel before, not just after.</strong> A quick smoothie beats running on empty just because the drive to the gym delayed breakfast.</li>
        <li><strong>Don't undersell the effort.</strong> A hard treadmill session deserves the same real recovery meal as a hard outdoor one.</li>
        <li><strong>Use daylight while it's still around.</strong> Weekend long runs can still happen outside for a while yet — save the treadmill for the dark weekday mornings.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>The move indoors doesn't have to cost Spokane Valley runners the base they spent all summer building. Treat the treadmill as a tool rather than a compromise, fuel the session the same way you'd fuel a run on the trail, and let a stop at Everbowl be the easy part of keeping the routine going once the mornings turn dark.</p>
    `,
  },
  {
    slug: "spokane-marathon-race-day-fuel",
    title: "Spokane Marathon Weekend: A Race-Day Fueling Plan for Mirabeau Point",
    description:
      "The Spokane Marathon's full, half, and 5K races finish near Mirabeau Point in Spokane Valley every October. A practical fueling plan for race week, race morning, and the finish line.",
    category: "Fitness & Recovery",
    date: "2026-10-12",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "An acai bowl built as recovery fuel for Spokane Marathon runners near Mirabeau Point",
    keywords: ["spokane marathon fueling", "marathon race day nutrition spokane", "mirabeau point park running", "spokane valley half marathon", "race week fuel inland northwest"],
    body: `
      <p>Every October, the Spokane Marathon brings its full marathon, half marathon, and 5K finishers into Spokane Valley, with the course finishing near Mirabeau Point Park — close enough to the Valley that a huge share of the crowd on course, and the friends and family tracking them, are practically neighbors of ours on Sprague Avenue. Whether you're tapering for 26.2, chasing a half-marathon goal, or walking the 5K with your kids, race weekend rewards a fueling plan that starts well before the starting line and doesn't stop at the finish tape.</p>

      <h2>Race week isn't the time to experiment</h2>
      <p>The biggest mistake runners make in the final days before a marathon or half isn't under-fueling — it's trying something new. A race-week dinner at a restaurant you've never been to, a "healthy" smoothie blend you've never tried, a supplement a friend swears by — none of it belongs in the 48 hours before you run. Stick to carbohydrate sources your stomach already knows: rice, bread, bananas, oats, and fruit-forward smoothies you've had before. The goal of carb-loading isn't novelty, it's topping off glycogen stores with food your gut won't question on race morning.</p>

      <blockquote>The best race-week meal is a boring one. Save the new menu item for your celebration bowl after you've crossed the finish.</blockquote>

      <h2>Race morning: light, fast-digesting, and early enough</h2>
      <p>However far you're running, race-morning fuel has one job: give you usable energy without sitting heavy for the first few miles. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, açaí — is built for exactly this window. It's mostly fruit sugar and fluid, which digests quickly and won't cramp you up on the course, and it goes down easily even with pre-race nerves that make a full breakfast unappealing. Aim to finish it 60 to 90 minutes before your wave starts, and pair it with water rather than a big cup of coffee if your stomach runs sensitive on race day.</p>

      <h2>What finishing at Mirabeau Point actually means for fueling</h2>
      <p>One underrated advantage of a Spokane Valley race finish is logistics. Runners finishing a marathon have burned through a serious amount of glycogen and broken down real muscle tissue over 26.2 miles, and the recovery window — the hour or so after you stop moving — is when refueling does the most good. Half-marathon and 5K finishers need less, but the same principle holds: carbohydrate to refill the tank, protein to start repair, and fluids with some electrolytes to replace what you sweated out. Finishing close to the Valley means you don't have to wait until you're home to take care of any of it.</p>

      <h2>Build the finish-line bowl on purpose</h2>
      <p>A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, banana, granola — covers real carbohydrate and protein in one order, which is exactly what a finish line and a drive home doesn't always offer. If you're more in the mood to sip than chew after 13 or 26 miles on your feet, a <a href="/#sips">Strawberry Lemonade</a> replaces fluid and a little sugar fast, and works well alongside a smaller bowl if you're not ready for a full meal right away. Either way, don't skip the window just because you're exhausted — a short walk and some stretching can wait a few more minutes; refueling shouldn't.</p>

      <h2>Make Everbowl part of race weekend</h2>
      <p>Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, an easy stop before the race for a calm, familiar breakfast, or after for recovery once you've got your medal and your legs back under you. If you know your schedule is going to be tight around wave starts or finish-line crowds, <a href="/#order">ordering ahead online</a> means your bowl or smoothie is ready whenever you actually get there, instead of one more line to stand in on a day that already has plenty of them.</p>

      <h2>A simple race-weekend fueling plan</h2>
      <ul>
        <li><strong>Days before:</strong> Eat familiar carb-forward meals — nothing new, nothing risky.</li>
        <li><strong>Race morning:</strong> A fast-digesting smoothie 60–90 minutes out, not a heavy breakfast.</li>
        <li><strong>On course:</strong> Stick with whatever fluids and fuel you've already trained with.</li>
        <li><strong>At the finish:</strong> Refuel within the first hour — carbs and protein together, not just water.</li>
        <li><strong>If you're spectating:</strong> Cheering on a course for hours burns energy too; don't skip your own meals while you're tracking a runner.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Whether you're running the full, the half, or walking the 5K with the family, Spokane Marathon weekend goes smoother with a plan that matches the effort — familiar fuel beforehand, something light and fast on race morning, and real recovery once you're done. Make the stop at Everbowl in Spokane Valley part of that plan, before the gun goes off or after you've earned the finish.</p>
    `,
  },
  {
    slug: "turnbull-wildlife-refuge-fall-birding-walk",
    title: "Turnbull National Wildlife Refuge: Fueling a Fall Birding Walk Near Cheney",
    description:
      "Fall waterfowl migration peaks at Turnbull National Wildlife Refuge near Cheney in October. A simple fueling plan for a slow, cold-morning walk — before and after.",
    category: "Spokane & Movement",
    date: "2026-10-13",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Two Everbowl smoothies and a bowl, the kind of pre- and post-walk fuel for a fall morning at Turnbull",
    keywords: ["turnbull national wildlife refuge", "spokane fall birding", "cheney washington hiking", "fall nature walk fuel", "spokane valley smoothie"],
    body: `
      <p>October is when Turnbull National Wildlife Refuge, just southwest of Cheney, really earns the trip. The channeled scablands fill with migrating waterfowl heading south, the aspens along the auto tour route turn gold, and the mornings carry that first real bite of fall cold before the day warms up. It's one of the quieter outdoor mornings in the Inland Northwest — more binoculars than trekking poles — but a slow, cold walk still asks something of your body, and it's easy to under-fuel something that doesn't feel like "exercise."</p>

      <h2>A refuge morning isn't a workout, but it isn't nothing</h2>
      <p>Turnbull's trails — the Pine Lakes Loop, the Bluebird Trail, the auto tour route if you're walking sections of it — are mostly flat and easy underfoot. That's exactly why people skip breakfast before heading out: it doesn't feel strenuous enough to need fuel. But you're often out for two or three hours, standing still for long stretches scanning a pond for swans or sandhill cranes, and standing still in 35-degree air burns through body heat and blood sugar in a way a brisk hike wouldn't. Showing up under-fueled on a cold morning is how a pleasant walk turns into a shivery, cranky one by the second hour.</p>

      <blockquote>The goal for a Turnbull morning isn't carb-loading — it's not getting cold and hungry before you've even seen the swans.</blockquote>

      <h2>Before you head out: something warm and fast</h2>
      <p>Cheney is a short drive from Spokane Valley, so there's time for a real pre-walk stop rather than a granola bar eaten in the car. A <a href="/#smoothies">Nanaberry Bliss</a> — banana, strawberry, açaí — is easy on a stomach that isn't fully awake yet and gives you fruit sugar your body can use within the first thirty minutes on the trail, which matters more at the refuge than it sounds, since there's no coffee stand waiting at the Pine Lakes trailhead. If the morning is genuinely cold, an <a href="/#sips">Iced Matcha</a> or hot alternative brings caffeine with a steadier lift than coffee alone, useful for an early start before sunrise light brings the birds out.</p>

      <h2>What to actually watch for in October</h2>
      <p>Turnbull's fall draw is the waterfowl — ducks, geese, and if you're lucky, migrating sandhill cranes passing through on their way south. Mornings are best: birds are more active, the light is better for spotting them across the ponds, and the parking lot isn't yet full of the midday dog-walking crowd. Bring binoculars if you have them, dress in layers you can shed as the sun climbs, and budget more time than you think — a "quick loop" at Turnbull has a way of turning into ninety minutes once you stop to watch a flock lift off a pond.</p>

      <h2>After the walk: refuel before the drive back</h2>
      <p>Two or three hours of standing and walking in cold air is a bigger ask on your body's energy stores than it feels like in the moment, and the drive back into Spokane Valley is the natural point to refuel rather than waiting until you're home and the hunger hits hard. A <a href="/#menu">Chia Pudding Bowl</a> is a good match for this specific outing — it's already made, doesn't need a spoon fight with frozen toppings, and the chia's fiber and slow-digesting carbs hold you over if lunch is still a while off. If you want something heartier, the <a href="/#menu">Everbowl</a> covers real carbohydrate and a cold-weather mood boost in one order.</p>

      <h2>Make it part of the loop, not an afterthought</h2>
      <p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to Cheney that stopping on the way out or the way back barely adds to the drive. If you're heading out before the shop opens, <a href="/#order">order ahead online</a> the night before so a smoothie's waiting the moment you're back in the car, hands still cold from holding binoculars.</p>

      <h2>A simple Turnbull fueling plan</h2>
      <ul>
        <li><strong>Before:</strong> A fast-digesting smoothie or a warm sip — something that works on a stomach that isn't fully awake.</li>
        <li><strong>On the trail:</strong> Layer up; standing still in cold air burns more than it feels like.</li>
        <li><strong>Timing:</strong> Go early for better bird activity and better light, not just a quieter parking lot.</li>
        <li><strong>After:</strong> Refuel on the drive back rather than waiting until you're home and starving.</li>
        <li><strong>Plan ahead:</strong> Order online if you're leaving before the shop opens.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Turnbull National Wildlife Refuge in October rewards patience more than effort, but cold mornings and long stretches on your feet still call for real fuel, before and after. A smoothie before you watch the first flock lift off the water, and a bowl waiting in Spokane Valley once you're back in the car, makes the whole morning better — not just the birding part.</p>
    `,
  },

  {
    slug: "friday-night-lights-high-school-football-fuel",
    title: "Friday Night Lights: Fueling Game Nights at CV, University, and West Valley",
    description:
      "October Friday nights mean high school football across Spokane Valley. A realistic plan for feeding players and families well before, during, and after kickoff.",
    category: "Spokane & Movement",
    date: "2026-10-14",
    readMins: 5,
    image: "a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg",
    imageAlt: "A spread of Everbowl bowls and toppings, ready to share before a Friday night football game",
    keywords: ["spokane valley high school football", "friday night lights fuel", "central valley bears", "university titans", "west valley eagles", "pre game nutrition"],
    body: `
      <p>October Friday nights in Spokane Valley have a rhythm to them: the sun drops behind the ridge by six, the stadium lights at Central Valley, University, and West Valley High Schools flicker on, and half the Valley seems to funnel toward one of three parking lots. Football season here isn't a backdrop — it's the plan for the evening, for players, marching band, student section, and the parents who've been rearranging dinner around a kickoff time all week. The trouble is that "rearranging dinner around a kickoff time" usually means not really eating dinner at all, just grabbing whatever's fastest on the way out the door.</p>

      <h2>Why Friday nights are a nutrition trap</h2>
      <p>Game day for a player means an early release from classes, a team meal that's often heavier on carbs than anything else, pads on by five, and adrenaline doing a lot of the work that food should be doing by kickoff. For the family in the stands, it's worse: you're standing or sitting on aluminum bleachers for two-plus hours in 40-something-degree air, and the only food options are a concession stand selling nachos and hot chocolate. Neither situation is really "eating well" — it's getting by. A little planning on the way to the stadium fixes both.</p>

      <blockquote>You don't need a perfect pre-game meal. You need something that beats "nothing until the drive home."</blockquote>

      <h2>For players: carbs now, protein after</h2>
      <p>If you've got a player heading to practice or a game, the two-to-three-hour window before kickoff calls for carbohydrate that digests easily — not a heavy, fatty meal that sits like a brick through warmups. A smoothie works better here than a big plate of food: the <a href="/#smoothies">Nanaberry Bliss</a> brings banana and strawberry for fast-digesting fuel without the stomach weight of a sit-down dinner. Save the protein push for afterward, once the adrenaline's worn off and muscles actually need the repair work. A <a href="/#menu">PB Everbowl</a> after the final whistle — peanut butter, banana, granola — covers protein and carbohydrate in one order, and it beats the gas station run most players end up making on the drive home instead.</p>

      <h2>For the stands: something that survives bleacher seating</h2>
      <p>Parents and student sections have a different problem: nothing to eat that isn't a hot dog. The fix is simple — stop by Everbowl Spokane at <a href="/#location">13324 E Sprague Ave, Suite 101</a> on the way to the stadium, not after. A <a href="/#menu">Chia Pudding Bowl</a> travels well in a car cupholder-adjacent tray and doesn't need a spoon fight once it's cold, which matters when you're eating it one-handed while cheering on third down. If you'd rather sip than eat in the stands, a hot <a href="/#sips">Iced Matcha</a> swapped for its warm version, or a <a href="/#sips">Cacao Ice Blended Coffee</a> earlier in the evening, gives you caffeine and a little steadiness through a long, cold second half without the sugar crash a hot chocolate leaves you with by the fourth quarter.</p>

      <h2>Beat the line, not just the clock</h2>
      <p>Everyone in Spokane Valley has the same idea at the same time on a Friday — leave work or school, grab something, get to the stadium before the lot fills. That means the five minutes before a CV or University kickoff are the worst possible time to be waiting on a to-go order. <a href="/#order">Order ahead online</a> earlier in the afternoon and swing by on your actual route to the game; it's the difference between rolling up to the gate with time to find parking and missing the coin toss because you were still waiting on a bowl.</p>

      <h2>It's not just the players who need fuel</h2>
      <p>It's easy to think of game-night nutrition as a players-only conversation, but the band kids marching at halftime, the siblings who tag along to every game, and the parents who've been running since 6 a.m. are all asking the same thing of their bodies that night: stay alert, stay warm, make it through four quarters without crashing. None of that requires anything elaborate — just real food eaten on purpose instead of whatever's left over once everyone's already in their seats.</p>

      <h2>A simple Friday night plan</h2>
      <ul>
        <li><strong>Players, before:</strong> Easy-digesting carbs 2–3 hours out — a smoothie beats a heavy meal.</li>
        <li><strong>Players, after:</strong> Protein and carbs together once the game's over, not whatever's fastest on the drive home.</li>
        <li><strong>Families, before:</strong> Stop on the way to the stadium, not after — the lot fills fast.</li>
        <li><strong>Families, during:</strong> Something that travels — a chia bowl or a hot sip beats concession-stand defaults.</li>
        <li><strong>Everyone:</strong> Order ahead online if you're cutting it close to kickoff.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Friday night football is one of the best fall traditions Spokane Valley has, and it doesn't have to run on nachos and whatever's left in the pantry. A quick stop at Everbowl before you head to Central Valley, University, or West Valley gives players and families real fuel for four quarters — and a reason to come back once the final whistle blows.</p>
    `,
  },

  {
    slug: "oktoberfest-weekend-spokane-coeur-dalene-fuel",
    title: "Oktoberfest Weekend: Enjoying Spokane's Beer Gardens Without Wrecking Your Week",
    description:
      "October means Oktoberfest-style releases at Spokane and Coeur d'Alene breweries. A realistic food-first plan for the beer garden and the morning after.",
    category: "Health",
    date: "2026-10-14",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "Two Everbowl smoothies, the kind of before-and-after fuel for an Oktoberfest weekend in Spokane",
    keywords: ["spokane oktoberfest", "coeur d'alene breweries fall", "beer garden food plan", "spokane valley smoothie", "fall weekend recovery"],
    body: `
      <p>October is peak brewery season in the Inland Northwest. Taprooms around Spokane and Coeur d'Alene — No-Li Brewhouse, Iron Goat Brewing, Selkirk Abbey out in Airway Heights — lean hard into Oktoberfest-style releases this time of year: malty lagers, pretzels the size of steering wheels, and beer gardens that spill outside while the weather still allows it. It's a genuinely fun fall tradition. It's also one that tends to leave people foggy, dehydrated, and regretting Saturday by the time Monday rolls around. None of that is really about the beer — it's about showing up to a beer garden on an empty stomach and letting pretzels and bratwurst be the only food in the picture all day.</p>

      <h2>Why beer-garden days hit harder than a normal night out</h2>
      <p>An Oktoberfest afternoon is a different animal than a quick happy hour. You're often outside for hours in cooling fall air, standing or walking between booths, drinking steadily over a long stretch rather than one or two rounds, and snacking on salty, starchy festival food that doesn't bring much else to the table nutritionally. Alcohol is a diuretic on its own; add cool, dry fall air and a few hours on your feet, and dehydration sneaks up faster than it would on a summer patio. The headache and low-energy slump people blame entirely on "too much beer" the next day is often just as much about under-eating and under-hydrating during the day itself.</p>

      <blockquote>You don't need to skip the beer garden to feel decent on Monday. You need something real in your stomach before you get there.</blockquote>

      <h2>Before you head out: real food, not a snack</h2>
      <p>The biggest mistake is treating the hours before an Oktoberfest outing as a time to "save room" — skipping lunch to leave space for bratwurst later. That backfires; it just means you're drinking on an empty stomach by mid-afternoon. A <a href="/#menu">PB Everbowl</a> a couple hours before you head out brings real protein, banana, and peanut butter — the kind of meal that slows how fast alcohol hits and keeps you from running on pretzels alone by hour three. If you're tight on time, a <a href="/#smoothies">Nanaberry Bliss</a> on the way out the door at least gets fruit and fiber in before the first pour.</p>

      <h2>During: water counts as much as beer</h2>
      <p>Nobody wants to be the person counting ounces at a beer garden, but a simple rule works: a glass of water between rounds, especially outdoors where the cool air hides how dehydrated you're actually getting. If the lineup includes a long walk between stops — plenty of Oktoberfest crawls around Spokane and Coeur d'Alene hop between two or three taprooms — that's extra reason to stay ahead of it rather than catching up once you're already behind.</p>

      <h2>The morning after: protein beats another coffee</h2>
      <p>The instinct the next morning is usually more caffeine and maybe a greasy breakfast. A better move is protein and real fruit sugar, which does more to settle a rough morning than caffeine alone — coffee can make dehydration headaches worse before it makes them better. A <a href="/#menu">Berry Boost</a> bowl brings antioxidant-rich berries and real carbohydrate without the grease, and a <a href="/#sips">Cold Brew</a> on the side covers the caffeine without skipping the food that should come with it. Both are a quick stop on the way into a Saturday that still has plans, rather than a wasted day on the couch.</p>

      <h2>Make Everbowl part of the plan, not an afterthought</h2>
      <p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley — close enough to fit into an Oktoberfest day whether you're fueling up before heading into town or resetting the morning after. If your weekend is already packed with taproom stops, <a href="/#order">order ahead online</a> so the pre-game bowl or the next-morning smoothie is ready the moment you want it, no waiting around while the rest of the day gets away from you.</p>

      <h2>A simple beer-garden plan</h2>
      <ul>
        <li><strong>Before:</strong> A real meal with protein, not a skipped lunch "to save room."</li>
        <li><strong>During:</strong> Water between rounds, especially in cool fall air that hides dehydration.</li>
        <li><strong>After:</strong> Protein and fruit over straight caffeine the next morning.</li>
        <li><strong>Plan ahead:</strong> Order online if the weekend's already full of taproom stops.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Oktoberfest season is one of the better excuses to get outside in Spokane before winter settles in, and enjoying it fully doesn't require skipping it or overdoing it — just eating like the day matters before, during, and after. A bowl before you go and a smoothie the morning after go a long way toward making the whole weekend better, not just the beer garden part of it.</p>
    `,
  },

  {
    slug: "lake-coeur-dalene-fall-color-cruise-fuel",
    title: "Fall Color on the Water: Fueling a Lake Coeur d'Alene Cruise Day",
    description:
      "October's fall color cruises on Lake Coeur d'Alene mean a long day outdoors on the water. Here's how to eat so you actually enjoy the ride.",
    category: "Spokane & Movement",
    date: "2026-10-15",
    readMins: 5,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "A vibrant pitaya smoothie bowl, bright fuel for a fall color cruise day on Lake Coeur d'Alene",
    keywords: ["lake coeur d'alene fall color", "coeur d'alene fall activities", "spokane valley smoothie bowl", "fall boat day food", "everbowl spokane valley"],
    body: `
      <p>Late October is prime time for watching the hillsides around Lake Coeur d'Alene turn — the tamaracks go gold along the shoreline, the cottonwoods flare yellow near Wolf Lodge Bay, and a scenic cruise out of downtown Coeur d'Alene becomes one of the better low-effort ways to see it without lacing up boots. It's an easy day to plan: drive over, grab a ticket, stand on the deck for an hour or two, maybe wander the floating boardwalk or grab coffee downtown afterward. The part people don't plan for is that a few hours on open water in October air is colder and more tiring than it looks from the dock, and showing up without real food in your stomach turns a relaxing afternoon into a shivery, cranky one.</p>

      <h2>Water days burn more than you'd think</h2>
      <p>Standing on a boat deck doesn't feel like exercise, but your body is working the whole time — bracing against wind, holding posture against the boat's motion, and generating extra heat to stay warm as the temperature drops over open water. Add the glare and dry air that come with a clear fall day, and dehydration shows up the same way it does on a hike: a dull headache, a short temper, and a sudden crash of fatigue right when you're trying to enjoy the view. None of that is really about the cruise being too long. It's about treating "a relaxing boat ride" as a reason to skip real food, when your body is quietly working the entire time.</p>

      <blockquote>A boat deck in October asks more of your body than a couch does. Feed it like that's true.</blockquote>

      <h2>Before you board: something warm and substantial</h2>
      <p>Cruises out of Coeur d'Alene often depart mid-morning or early afternoon, which lands right in the gap between breakfast and lunch — exactly when people skip eating because they're "about to do something fun" instead of something that counts as a meal. A <a href="/#menu">Full Moon</a> bowl before you head over the state line brings real carbohydrate, fruit, and a bit of staying power, so you're not running on an empty stomach by the time the boat pulls away from the dock. Short on time before the drive to Coeur d'Alene? A <a href="/#smoothies">PB Cacao Dream</a> smoothie travels well in the cupholder and still delivers protein and healthy fat instead of just sugar.</p>

      <h2>On the water: water, not just coffee</h2>
      <p>It's tempting to bring only coffee or hot cocoa on a cool-weather boat day, and there's nothing wrong with either — but plain water still matters, maybe more than usual, since cold air makes people underestimate how much they're losing to wind and dry conditions. Pack a bottle. If the cruise has a snack bar, treat it as a backup, not the plan; festival-boat food tends to be salty and short on anything that actually sustains you through a two-hour ride.</p>

      <h2>After you dock: refuel before the drive home</h2>
      <p>By the time you're back on the boardwalk in downtown Coeur d'Alene, cold air and a few hours on your feet usually mean you're hungrier than you expected — and the 45-minute drive back to Spokane Valley is a bad time to realize that. Make <a href="/#location">Everbowl Spokane at 13324 E Sprague Ave, Suite 101</a> your last stop before you're officially off duty for the day. A <a href="/#menu">Nutty Butty</a> bowl or a <a href="/#sips">Cacao Ice Blended Coffee</a> covers both the real food and the caffeine boost without needing a sit-down dinner first.</p>

      <h2>Make it easy on a busy fall Saturday</h2>
      <p>Fall weekends in the Inland Northwest fill up fast between cruise tickets, kids' sports, and everything else October throws at a calendar. If your morning is already tight, <a href="/#order">order ahead online</a> so your pre-cruise bowl is ready the second you swing through Spokane Valley on the way to Coeur d'Alene — no standing in line while the clock runs down to departure time.</p>

      <h2>A simple fall cruise day plan</h2>
      <ul>
        <li><strong>Before:</strong> A real bowl or smoothie with protein, not just coffee, before you board.</li>
        <li><strong>During:</strong> Water alongside anything warm — cold air hides how dehydrated you're getting.</li>
        <li><strong>After:</strong> Refuel before the drive home instead of white-knuckling it back to Spokane Valley hungry.</li>
        <li><strong>Plan ahead:</strong> Order online if your Saturday is already packed tight.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>A fall color cruise on Lake Coeur d'Alene is one of the easiest ways to catch the Inland Northwest at its best without a single mile of hiking — but "easy" and "low-effort on your body" aren't the same thing once you're a couple hours into open water and cooling fall air. Eating like the day counts, before and after, is what turns a chilly boat ride into a genuinely great fall afternoon.</p>
    `,
  },

  {
    slug: "what-is-pitaya-dragon-fruit-explained",
    title: "What Is Pitaya? The Dragon Fruit Behind the Pink, Explained",
    description:
      "That hot-pink base in your bowl isn't dye or flavoring — it's dragon fruit. What pitaya actually is, what's in it, and why it's one of the better things to order when Spokane's produce aisle goes gray.",
    category: "Nutrition",
    date: "2026-10-15",
    readMins: 4,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "A bright magenta pitaya smoothie bowl topped with fruit and granola",
    keywords: ["what is pitaya", "dragon fruit benefits", "pitaya bowl spokane", "pitaya paradise smoothie", "everbowl spokane valley"],
    body: `
      <p>New customers ask about it almost as often as they ask about the blue one: what exactly is the hot-pink stuff underneath the granola? It isn't food coloring, and it isn't flavored syrup. It's pitaya — better known by its market name, dragon fruit — and it's been the base of some of the menu's most popular builds, like the <a href="/#menu">Pitayum</a> bowl and the <a href="/#menu">Blue Lagoon</a>, since before most of Spokane Valley had heard the word.</p>

      <h2>What pitaya actually is</h2>
      <p>Dragon fruit grows on a climbing cactus — not a tree — mostly in Central America and Southeast Asia, where it's harvested, pureed, and frozen into the smooth pink base you see in a bowl. The fruit itself has pale, speckled flesh with tiny black seeds scattered through it, similar in texture to a kiwi. Blended, those seeds add a faint crunch and a little extra fiber without changing the flavor much. The flavor itself is mild: lightly sweet, a little floral, closer to a melon-kiwi cross than anything tropical and punchy. That's exactly why it works so well as a base — it carries whatever fruit you blend it with instead of competing for attention.</p>

      <h2>Where the pink comes from</h2>
      <p>The color is real pigment, not dye. Pitaya gets its magenta hue from betalains, the same family of pigments that make beets so deeply red. Betalains are antioxidants, meaning they help neutralize the free radicals your body generates through normal activity, exercise, and everyday stress. Research on betalains specifically is still developing, so we won't oversell it — but pitaya also brings genuine, well-established nutrition on its own: it's a source of vitamin C, magnesium, and fiber, and it's mostly water, which makes it naturally light and hydrating compared to a lot of other smoothie bases.</p>

      <blockquote>Honest version: pitaya isn't a miracle fruit, and anyone claiming otherwise is selling something. It's a genuinely nutritious, low-sugar, antioxidant-rich base that happens to look incredible in a bowl. Both things are true at once.</blockquote>

      <h2>Why it's a smart order once the weather turns</h2>
      <p>By mid-October, Spokane's farmers-market tables have mostly packed up, the trees along the Centennial Trail have dropped their color, and the produce aisle starts leaning heavily on apples, squash, and not much else. That's exactly when a pitaya bowl earns its keep — it's a way to get real fruit, fiber, and antioxidants into a gray week without needing anything that was grown locally this month. The <a href="/#smoothies">Pitaya Paradise</a> smoothie blends it with strawberry, pineapple, and coconut milk for something that tastes like a much warmer month, which is honestly half the appeal when the sky outside is the color of a parking lot.</p>

      <h2>How to actually taste it</h2>
      <p>If you've only had pitaya buried under granola, nut butter, and five toppings, you've mostly tasted the toppings. To actually notice the fruit, try it simpler: the Pitayum keeps the base fruit-forward with coco love and pineapple instead of burying it, and the Blue Lagoon pairs it with blue majik and chia for a build that leans on color and texture more than a pile of add-ons. Either way, you're tasting the fruit itself, not just what's on top of it.</p>

      <h2>Come try it in Spokane Valley</h2>
      <p>You don't need a tropical vacation to try dragon fruit — just a stop at <a href="/#location">Everbowl Spokane at 13324 E Sprague Ave, Suite 101</a>. If your week is already full, <a href="/#order">order ahead online</a> and a Pitayum or Pitaya Paradise will be ready when you swing through. It's a small, easy way to eat something genuinely good for you on a week when the rest of the produce aisle isn't offering much.</p>

      <h2>The short version</h2>
      <ul>
        <li><strong>What it is:</strong> Dragon fruit, a cactus fruit with mild, lightly sweet flavor and tiny edible seeds.</li>
        <li><strong>Why it's pink:</strong> Betalains — the same antioxidant pigment family found in beets.</li>
        <li><strong>What's in it:</strong> Vitamin C, magnesium, fiber, and a high water content that makes it naturally hydrating.</li>
        <li><strong>Where to try it:</strong> The Pitayum bowl or the Pitaya Paradise smoothie at Everbowl Spokane Valley.</li>
      </ul>
    `,
  },

  {
    slug: "leaf-raking-weekend-yard-work-fuel-spokane-valley",
    title: "Leaf-Raking Weekend: Fueling a Day of Fall Yard Work in Spokane Valley",
    description:
      "Raking, bagging, gutter-clearing, and putting the garden to bed for winter is real physical work. Here's how to eat around a long Inland Northwest yard-work Saturday.",
    category: "Health",
    date: "2026-10-16",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "A fresh acai bowl with banana, granola, and berries, fuel for a fall yard work day",
    keywords: ["fall yard work fuel", "spokane valley yard work", "leaf raking workout", "fall chores nutrition", "everbowl spokane valley"],
    body: `
      <p>By mid-October, the maples and tamaracks that made Spokane Valley look so good for photos are doing the opposite to your lawn. Between the leaves piling up along Sprague and Appleway, the last mow before the ground gets soggy, and gutters that need clearing before the first real storm, most Inland Northwest driveways have a full Saturday of yard work queued up before winter settles in. Nobody plans a nutrition strategy around raking leaves — but a full day of bagging, hauling, and ladder-climbing burns more than people expect, and skipping real food through it is exactly how a yard-work Saturday turns into a Saturday evening spent sore on the couch with a headache.</p>

      <h2>Yard work is a workout, even if it doesn't feel like one</h2>
      <p>Raking is repetitive, low-intensity cardio with a strong upper-body and core component. Hauling bagged leaves to the curb adds load-bearing carries. Up and down a ladder clearing gutters adds balance and grip demand on top of everything else. None of it spikes your heart rate like a run, so it's easy to underestimate — but strung together over three or four hours, it adds up to a real training load, especially for anyone who spent the summer mostly sitting at a desk. The soreness that shows up Sunday morning isn't random; it's your body telling you it worked harder than you gave it credit for.</p>

      <blockquote>You wouldn't skip breakfast before a long hike. A four-hour yard-work day deserves the same respect — it's just less photogenic.</blockquote>

      <h2>Before you start: don't skip the morning meal</h2>
      <p>Cool October mornings make it tempting to just grab coffee and get straight to it, but starting a physical day on an empty stomach means you're running on fumes by the second hour. A bowl of <a href="/#menu">Hot Oats</a> brings warm, slow-digesting carbohydrate that holds steadier than a pastry would, and it pairs well with a <a href="/#sips">Cold Brew</a> if you need the caffeine to get moving on a 40-degree morning. If you're headed out the door in a hurry, a <a href="/#smoothies">Nanaberry Bliss</a> smoothie travels in the truck cupholder and still delivers real fruit and a bit of protein instead of just sugar and caffeine.</p>

      <h2>Mid-morning: water matters more than you'd think</h2>
      <p>Cold air hides thirst the same way it does on a fall hike or a lake cruise — you're sweating under a jacket, breathing dry autumn air, and not noticing either one the way you would on a hot July afternoon. Keep a water bottle on the porch steps or the tailgate, not just a travel mug of coffee, and take a few sips between piles. A short ten-minute break with real water and something small to eat will do more for your energy than pushing through to "finish the front yard first."</p>

      <h2>After the last bag hits the curb: recovery food, not just dinner</h2>
      <p>By the time the leaves are bagged, the gutters are clear, and the mower is put away for the season, you've put in a legitimate day of physical labor — sore shoulders and a tired lower back included. That's worth treating like you would after any hard workout: protein and real carbohydrate within an hour or two, not just whatever's easiest to microwave once you've showered. A <a href="/#menu">PB Everbowl</a> covers both with peanut butter, banana, and granola on an açaí base, and it's a lot more satisfying after a cold afternoon outside than another bag of chips on the couch.</p>

      <h2>Make the Valley stop part of the plan</h2>
      <p>If your Saturday yard-work list runs long, build a stop at <a href="/#location">Everbowl Spokane at 13324 E Sprague Ave, Suite 101</a> into the day rather than treating it as an afterthought — grab a bowl on the way to the hardware store for more lawn bags, or make it the reward once the driveway is finally clear. Running short on time between raking and everything else the weekend holds? <a href="/#order">Order ahead online</a> so it's ready the moment you pull in, leaf bits still stuck to your jacket.</p>

      <h2>A simple fall yard-work day plan</h2>
      <ul>
        <li><strong>Before:</strong> A warm, real breakfast — Hot Oats or a smoothie, not just coffee on an empty stomach.</li>
        <li><strong>During:</strong> Water on a schedule, not just when you notice you're thirsty; cold air masks dehydration.</li>
        <li><strong>After:</strong> Protein and carbs within an hour or two — treat it like post-workout recovery, because it is.</li>
        <li><strong>Plan ahead:</strong> Order online so refueling doesn't compete with the rest of a packed Saturday.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Fall yard work in Spokane Valley doesn't look like training, but a long day of raking, hauling, and ladder work puts real demand on your body — and deserves real fuel on both ends. Eat like the day counts, and the Sunday-morning soreness will be the only reminder you worked for it.</p>
    `,
  },

  {
    slug: "spokane-chiefs-game-night-fuel",
    title: "Spokane Chiefs Game Night: Fueling a Cold Evening at the Arena",
    description:
      "WHL hockey season is in full swing downtown. A practical plan for eating well before and after a Spokane Chiefs game at the Arena, instead of running on nachos.",
    category: "Spokane & Movement",
    date: "2026-10-16",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A warm cacao drink and acai bowl, fuel for a cold night of Spokane Chiefs hockey downtown",
    keywords: ["spokane chiefs game night", "whl hockey spokane", "spokane arena fuel", "downtown spokane dinner before game", "everbowl spokane valley"],
    body: `
      <p>Mid-October means Spokane Chiefs hockey is back in full swing at the Spokane Arena, and on a game night the whole routine downtown follows a familiar shape: leave work or school with just enough time to find parking, grab something fast, and get into your seat before the puck drops. The trouble is that "something fast" near the Arena usually means a hot dog in line or nothing until intermission — and three periods of WHL hockey, cheering included, asks more of your body than most people plan for on a weeknight.</p>

      <h2>A hockey game is a longer night than it looks</h2>
      <p>Between warmups, three periods, two intermissions, and the walk from your car or the STA Plaza, a Chiefs game is easily a three-hour night out, often starting right after work with no real dinner in between. The arena itself runs cold — rink-side air is a different kind of chill than an outdoor October evening — and between the cold air and the energy of a packed crowd, it's easy to not notice you're both hungry and a little dehydrated until the drive home, when all that sounds good is whatever's closest and greasiest.</p>

      <blockquote>You don't need a pre-game feast. You need something real in your stomach before the anthem, not just whatever's left in the car console.</blockquote>

      <h2>Before puck drop: eat on the way, not after you park</h2>
      <p>The smartest move on a game night is building Everbowl into the route instead of treating dinner as an afterthought once you're already circling for parking near the Arena. A stop at <a href="/#location">Everbowl Spokane at 13324 E Sprague Ave, Suite 101</a> on your way across town gives you a real meal before the lot fills up and the lines start — a <a href="/#menu">Full Moon</a> bowl brings dark berries and granola for sustained energy through a long sit on arena seating, while a <a href="/#smoothies">PB Cacao Dream</a> smoothie is easy to drink in the car and still delivers protein and real fruit instead of just caffeine.</p>

      <h2>Beating the pre-game rush</h2>
      <p>Everyone heading to a Chiefs game has the same fifteen-minute window in mind, which means the counter gets busy right as puck drop approaches. <a href="/#order">Order ahead online</a> earlier in the afternoon and pick it up on your actual drive downtown — it's the difference between eating a real meal at a table for five minutes and eating cold fries out of a bag at your seat because the concession line never moved.</p>

      <h2>Staying warm without the sugar crash</h2>
      <p>Arena seating is cold enough that a hot drink does real work, and it doesn't have to be hot chocolate loaded with sugar that leaves you flat by the third period. A <a href="/#sips">Cacao Ice Blended Coffee</a> or a warm <a href="/#sips">Iced Matcha</a> swapped hot gives you caffeine, a little steadiness, and something to hold onto between your hands during a cold second period — closer to what you'd want on the walk back to the car than another sugary concession-stand cup.</p>

      <h2>After the final horn: don't skip the recovery meal</h2>
      <p>If you cheered through three periods of a close game, you burned more nervous energy than you'd think, and showing up home starving at 9:30 p.m. usually ends with whatever's fastest instead of what you actually need. A <a href="/#menu">PB Everbowl</a> ordered for pickup on the way home — peanut butter, banana, granola on an açaí base — covers protein and carbohydrate without requiring you to cook anything once you're finally home and ready to crash.</p>

      <h2>A simple game-night plan</h2>
      <ul>
        <li><strong>Before:</strong> Eat a real meal on the way downtown, not after you've already parked.</li>
        <li><strong>Order ahead:</strong> Beat the pre-game rush so you're not stuck in a concession line at puck drop.</li>
        <li><strong>During:</strong> A warm sip beats sugary hot chocolate for staying steady through a cold third period.</li>
        <li><strong>After:</strong> Protein and carbs on the way home, not whatever's left in the fridge at 10 p.m.</li>
      </ul>

      <h2>The bottom line</h2>
      <p>Chiefs hockey is one of the best reasons to be downtown on a cold October night, and it runs a lot better on a real meal than on concession-stand defaults. Build a stop at Everbowl into your route before or after the game, and you'll make it through three periods — and the drive home — actually fueled.</p>
    `,
  },
  {
    slug: "shoulder-season-gap-training-fuel",
    title: "The Shoulder Season: Fueling the Gap Between Fall Trails and Ski Season",
    description:
      "Fall hiking season is winding down and the lifts aren't spinning yet. A practical nutrition plan for the awkward early-November gap, built around indoor training in Spokane Valley.",
    category: "Fitness & Recovery",
    date: "2026-11-04",
    readMins: 5,
    image: "/blog-img/pb-protein-ice-blended-coffee.jpg",
    imageAlt: "PB Protein Ice Blended Coffee, a pre-gym pick-me-up from Everbowl",
    keywords: [
      "shoulder season Spokane",
      "indoor training Inland Northwest",
      "Mt Spokane ski season prep",
      "November fitness Spokane Valley",
    ],
    body: `<p>Right now the Inland Northwest is stuck in its yearly in-between. The clocks fell back last weekend, the good dirt on Iller Creek and Liberty Lake Loop is turning to mud and ice, and the lifts at Mt. Spokane, Schweitzer, Silver Mountain, and 49 Degrees North are still weeks from spinning. It's not quite hiking season and not yet ski season — just three or four gray, dark weeks that trip up a lot of otherwise consistent training plans.</p>

<p>That gap matters more than people expect. The sudden 5pm sunset strips away the easy after-work trail run or hike that carried a lot of people's fitness through September and October. Without a deliberate plan B, "I'll get back to it when the snow comes" quietly turns into three weeks of nothing, and opening day at the resort arrives with legs that have lost the conditioning October's dryland work built.</p>

<h2>Move the training indoors, on purpose</h2>
<p>Spokane Valley has more indoor options than people use. The HUB Sports Center and Plantes Ferry Fieldhouse both run open gym and indoor track time once the weather turns. The YMCA pools are a low-impact way to keep aerobic fitness up without pounding joints on icy sidewalks. Wild Walls Climbing Gym keeps the single-leg balance and grip strength that skiing and scrambling both depend on. None of it has to be fancy — the goal for this stretch is simply staying in the habit of showing up, so the jump back outside (onto snow, or back onto spring trails) doesn't start from zero.</p>

<h2>Fueling a darker, colder routine</h2>
<p>Training indoors after dark changes the fueling rhythm a little. Mornings arrive colder and less motivating, so a fast, warm breakfast matters more than it did in September — our <a href="/#menu">Hot Oats</a> bowl, with banana and a swirl of peanut butter, is built for exactly this: real carbohydrate and a little protein before a gym session, without standing over a stove at 6am. For an afternoon gap between work and a workout, a <a href="/#sips">PB Protein Ice Blended Coffee</a> does double duty as caffeine and a protein top-up, which is useful on the days daylight runs out before your to-do list does.</p>

<p>Protein consistency matters even more once training moves indoor and becomes more strength-focused than trail-mileage-focused. Spreading roughly 20 to 30 grams across each meal supports the muscle-building and -maintaining work that climbing, lifting, and pool laps all demand, and it's a lot easier to hit with a <a href="/#menu">PB Everbowl</a> after a session than to assemble from scratch on a weeknight. Granola and banana on an açaí base cover the carbohydrate side of recovery at the same time, so one stop handles both halves of the window.</p>

<blockquote>The shoulder season isn't a reason to pause — it's just a reason to change venues.</blockquote>

<h2>Don't skip the outdoor minutes you still have</h2>
<p>Even with mud and ice creeping in, clear cold mornings are still worth a loop around the Appleway Trail or a flatter walk through Mirabeau Point before the ground fully locks up. Layer up, treat it as the bonus it is, and let the indoor sessions carry the rest of the load. The point isn't choosing one or the other — it's not letting a few gray weeks erase the base that got built all fall.</p>

<h2>The bottom line</h2>
<p>The weeks between the last good hike and the first good ski day are the ones that decide whether opening day feels strong or starts from scratch. Keep moving indoors, keep the protein and carbs consistent through the darker schedule, and build a stop at 13324 E Sprague Ave, Suite 101, Spokane Valley into the routine — in person after a gym session, or ordered ahead online when daylight (and time) are both running short.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "spokane-ski-swap-weekend-fuel",
    title: "Ski Swap Weekend: Fueling a Long Morning Hunting Gear at the Fairgrounds",
    description:
      "The Inland Northwest's annual ski and snowboard swap means an early, cold morning in line and hours hauling gear through crowded aisles. Here's how to eat for it.",
    category: "Spokane & Movement",
    date: "2026-11-05",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A warm Cacao Ice Blended Coffee from Everbowl Spokane, fuel for a cold ski swap morning",
    keywords: [
      "Spokane ski swap",
      "Spokane Mountaineers ski swap",
      "winter gear Spokane Valley",
      "ski season prep Inland Northwest",
    ],
    body: `<p>Every November, the Spokane County Fair and Expo Center fills up with skis, boards, boots, and bins of winter gear for the Inland Northwest's annual ski and snowboard swap. It's become a local institution — a chance to pick up good gear for the kids who grew two sizes since last season, finally replace boots that never fit right, or sell off the pair of skis gathering dust in the garage before Mt. Spokane, Schweitzer, Silver Mountain, and 49 Degrees North open for the year. It's also, less obviously, a genuine physical event: an early, cold morning standing in line, followed by hours of digging through crowded tables and hauling gear across a parking lot.</p>

<h2>Standing in line is a workout nobody counts</h2>
<p>The good deals go early, which means a lot of people are outside the doors before sunrise in a Spokane Valley November — easily in the 30s, sometimes colder. Standing still in cold air for an hour or more burns more energy than people expect, and it's exactly the kind of morning where skipping breakfast "because I'll just grab something later" backfires. Add in weaving through packed aisles, trying on boots, and carrying an armful of gear back to the car, and swap day adds up to more steps and more standing than most people's actual workouts that week.</p>

<h2>Fuel before you leave the house</h2>
<p>If the doors open early, you want something warm and steady, not something that runs out by the time you're through the first row of tables. Our <a href="/#menu">Hot Oats</a> bowl — oats, banana, and a swirl of peanut butter — is built for exactly this kind of cold-morning errand: real carbohydrate and a little protein that holds through a long wait outside. Pair it with a <a href="/#sips">Cacao Ice Blended Coffee</a> for caffeine and warmth in one cup, something worth holding onto with both hands while you wait for the doors.</p>

<p>If mornings are tight and you're headed straight from the house, a <a href="/#smoothies">Nanaberry Bliss</a> smoothie travels well in the cup holder and still gets real fruit and carbohydrate into you before you're on your feet for the next few hours.</p>

<blockquote>Treat swap day like the long errand it is, not a race — the people who eat something real before they leave the house are the ones still having fun by the third table of boots.</blockquote>

<h2>The post-swap reset</h2>
<p>By the time you've hauled a new-to-you pair of skis or a box of boots back to the car, you've put in real work, and the recovery window matters just as much as it would after a trail day. A <a href="/#menu">PB Everbowl</a> — açaí, peanut butter, granola, and banana — covers both the protein to recover from a few hours of lifting and carrying, and the carbohydrate to replace what a cold morning standing outside actually burned. It's a better reset than the drive-through on the way home, and it tastes like a reward for scoring a deal instead of a consolation prize.</p>

<h2>The bottom line</h2>
<p>Ski swap weekend is one of the best deals in the Inland Northwest if you plan for the morning it actually is — cold, long, and more physical than people expect. Everbowl Spokane at <a href="/#location">13324 E Sprague Ave, Suite 101</a> is just minutes from the fairgrounds in Spokane Valley, so swing by for a warm bowl or sip before you get in line, or order ahead online for a <a href="/#order">pickup</a> on the way home once the gear is loaded up.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "fall-allergy-rebound-ragweed-mold-spokane",
    title: "Fall Allergy Rebound: Ragweed's Last Stand and the Rise of Leaf Mold in Spokane",
    description:
      "Ragweed season is finally fading across the Inland Northwest, but wet, decomposing leaves bring a second wave of allergens right behind it. What's happening and how to eat through it.",
    category: "Health",
    date: "2026-10-18",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "An Evergreen greens smoothie from Everbowl Spokane, a fall allergy season pick-me-up",
    keywords: [
      "fall allergies Spokane",
      "ragweed season Inland Northwest",
      "mold allergy fall",
      "seasonal allergies October",
      "Spokane Valley wellness",
    ],
    body: `<p>If your sinuses have been acting up this week, you're not imagining it, and it's not a cold. Mid-October in the Inland Northwest is a genuine allergy handoff: ragweed, which has been needling allergy sufferers since late summer, is finally dying back after the season's first hard frosts — but the wet, matted leaves piling up along the Centennial Trail, in yards across Spokane Valley, and under every maple on the South Hill are starting to grow mold as the fall rain sets in. For a lot of people, that means the sneezing doesn't actually stop when ragweed does. It just changes shape.</p>

<h2>Why your nose doesn't know the calendar says fall</h2>
<p>Ragweed pollen is typically the last big outdoor allergen of the year in our region, and a good hard frost is usually what finally shuts it down — which is exactly what's happened or is about to happen across Spokane and Coeur d'Alene over the past couple of weeks. The relief is often short-lived, though. Once leaves come down and sit wet on the ground, mold spores start colonizing the pile within days, and raking, bagging, or just walking through a deep drift of damp leaves can kick enough spores into the air to trigger the same runny nose, itchy eyes, and low-grade fatigue that ragweed caused a month ago. It's a real, well-documented pattern here — not a coincidence of bad luck.</p>

<h2>Food isn't a treatment, but it isn't nothing either</h2>
<p>To be clear: nothing in a bowl replaces an antihistamine, a saline rinse, or a conversation with your doctor if symptoms are dragging on you. But diet does play a supporting role in how your body handles seasonal inflammation, and it's one of the easiest levers to pull on a day when you already feel run down. A few things worth leaning into this time of year:</p>
<ul>
  <li><strong>Vitamin C–rich fruit</strong> — citrus, strawberry, and pitaya are commonly associated with healthy immune and respiratory function.</li>
  <li><strong>Colorful polyphenols</strong> — the anthocyanins in açaí, blueberry, and dragon fruit are the same plant compounds behind their deep purple and pink color, and a diet rich in them is generally linked to lower markers of inflammation.</li>
  <li><strong>Steady hydration</strong> — thinner mucus is easier for your body to clear than thick, dehydrated mucus, and it's easy to under-drink once summer's heat is gone.</li>
  <li><strong>Leafy greens</strong> — spinach and kale bring folate and additional antioxidants that round out an already fruit-heavy fall diet.</li>
</ul>

<blockquote>You can't out-smoothie a bad allergy season, but a body that's well-hydrated and well-fed generally has an easier time riding one out than a body running on coffee and skipped meals.</blockquote>

<h2>Building an allergy-season bowl</h2>
<p>This is a good month to lean on the menu items built around exactly the ingredients above. Our <a href="/#smoothies">Evergreen</a> smoothie blends spinach, kale, and pineapple into something genuinely drinkable — real greens without pretending to be a salad. On the bowl side, <a href="/#menu">Berry Boost</a> stacks açaí with blueberry, strawberry, and blackberry for a heavier dose of the same anthocyanins, and if pitaya's vitamin C is more your target, the <a href="/#menu">Blue Lagoon</a> bowl or a <a href="/#smoothies">Pitaya Paradise</a> smoothie both deliver it in a form that actually tastes like a treat instead of a chore.</p>

<p>If you spent the weekend raking leaves off your own lawn — or anyone else's — treat the after-effects like you would any other outdoor exposure: rinse off, change clothes if you were really in it, and don't skip rehydrating just because it wasn't technically a workout. Breathing mold spores for an hour while you bag leaves taxes your system even if your legs aren't sore afterward.</p>

<h2>Stop by the Valley on your way through the gray</h2>
<p>Everbowl Spokane is right at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, an easy stop whether you're coming from a Centennial Trail walk through the fallen leaves or just need something real after a sneezy afternoon indoors. Build a bowl around the anti-inflammatory basics above, grab a smoothie to go, or <a href="/#order">order ahead online</a> and skip the line on a day when standing around sounds like the last thing you want to do.</p>

<h2>The bottom line</h2>
<p>Ragweed's exit and mold's entrance overlap just enough in the Inland Northwest that a lot of people never get a clean break between them. You can't fix that with a bowl, but keeping hydration and antioxidant-rich food in the rotation through this transition is a genuinely useful, low-effort thing to control while everything outside is out of your hands.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "first-frost-garden-harvest-spokane-valley",
    title: "First Frost in the Inland Northwest: Fueling Your Last Garden Harvest Weekend",
    description:
      "Spokane's first hard frost usually lands right around now. Here's how to get the last of your garden in before it hits, and how to refuel after a weekend of digging and hauling.",
    category: "Spokane & Movement",
    date: "2026-10-18",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "An Everbowl açaí bowl, a post-garden-cleanup refuel in Spokane Valley",
    keywords: [
      "first frost Spokane",
      "garden harvest Inland Northwest",
      "fall gardening Spokane Valley",
      "October frost warning Spokane",
      "Coeur d'Alene gardening fall",
    ],
    body: `<p>If you grow anything in Spokane Valley, you already know the rhythm of mid-October: the nights get sharp, the morning grass goes crunchy and white, and somewhere on NOAA's forecast a frost advisory shows up for the first time since spring. The Inland Northwest's average first freeze typically lands in the first half of October for outlying areas and can hold off a bit longer in town, but by now most of us have either already lost a tomato plant to a surprise cold night or are racing to get the last of the garden in before it happens. Either way, this is the weekend a lot of Spokane Valley yards turn into a short, frantic harvest.</p>

<h2>What first frost actually does to your garden</h2>
<p>A hard frost ruptures plant cells, which is why a tomato vine that looked fine at sunset can be black mush by nine the next morning. Tender crops — tomatoes, peppers, basil, squash vines, dahlias — are the first to go. Root vegetables like carrots and beets, along with cold-hardy greens like kale and chard, actually improve after a light frost, since the plant converts starch to sugar as a kind of natural antifreeze. That's why a lot of Green Bluff and backyard Spokane gardeners treat the first frost warning less as an ending and more as a deadline: pick the tender stuff now, and let the hardy stuff ride a little longer.</p>

<h2>A weekend of real physical work</h2>
<p>Garden teardown is deceptively demanding. Hauling vine clippings to the compost pile, pulling spent tomato cages, digging the last of the potatoes, and getting raised beds covered before a freeze adds up to hours of bending, lifting, and kneeling — the kind of unglamorous labor that leaves your lower back and forearms sore the next day, even if you never broke a sweat. Treat it like the workout it actually is:</p>
<ul>
  <li><strong>Eat something substantial before you start</strong> — this isn't a quick five-minute chore, so don't go out on an empty stomach.</li>
  <li><strong>Hydrate even though it's cold</strong> — cool fall air masks how much water you're losing through exertion and breath.</li>
  <li><strong>Protein for the cleanup, afterward</strong> — your hands and forearms will thank you the next day if you refuel with real protein instead of just coffee.</li>
  <li><strong>Don't skip the carbs</strong> — digging and hauling burns through glycogen the same way a long walk does.</li>
</ul>

<blockquote>A frost deadline turns gardening into an endurance chore for an afternoon — the same fueling rules that apply to a long hike apply just as well to a long dig.</blockquote>

<h2>Refueling after the last harvest</h2>
<p>Once the beds are cleared and the tender crops are picked, pulled, or raked up off the ground, a real meal does more for you than another cup of coffee. The <a href="/#menu">PB Everbowl</a> pairs açaí with peanut butter and banana for a dense mix of carbs and protein that actually replaces what a few hours of digging and hauling takes out of you, and it tastes like dessert while doing it. If you want something warmer to hold against cold hands, the <a href="/#sips">Cacao Ice Blended Coffee</a> brings caffeine and real cacao together for a treat that still functions as an afternoon pick-me-up once the yard work is done.</p>

<p>For the root vegetables and greens you're bringing in from the garden, lean into them the same week — a diet already heavy in colorful produce only gets better with fresh carrots, beets, and kale added on top, and there's something satisfying about eating your own harvest alongside a bowl built from someone else's.</p>

<h2>Stop by the Valley shop on your way in from the yard</h2>
<p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, a quick stop whether you're coming straight from a dirt-covered garden teardown or just need a real meal after a long outdoor Saturday. Grab a bowl to eat on the patio while your hands warm back up, or <a href="/#order">order ahead online</a> so it's ready the moment you walk in, muddy boots and all.</p>

<h2>The bottom line</h2>
<p>First frost isn't a tragedy — it's just the Inland Northwest's annual reminder that outdoor season has a deadline. Get the tender crops in, let the hardy ones sweeten up a little longer, and treat the work of closing down your garden with the same fueling respect you'd give any other hard afternoon outside.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "deer-season-opener-hunting-fuel-spokane-valley",
    title: "Opening Weekend: Fueling Pre-Dawn Hunts Across the Inland Northwest",
    description:
      "Washington and Idaho's general deer season is underway. How to eat before a 4 a.m. alarm, carry real food into the field, and refuel after a long day on the mountain.",
    category: "Spokane & Movement",
    date: "2026-10-19",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A Full Moon acai bowl with cacao from Everbowl Spokane, a pre-dawn hunting season breakfast",
    keywords: [
      "deer season Spokane",
      "hunting season Inland Northwest",
      "pre-dawn breakfast fuel",
      "Spokane Valley hunting",
      "Idaho Washington deer opener",
    ],
    body: `<p>Trucks with rifle racks have been pulling out of Spokane Valley driveways well before sunrise all week, and anyone who grew up around here knows exactly why: general deer season is open across most of Washington and North Idaho, and for a lot of Inland Northwest households, mid-to-late October means alarms set for 4 a.m. and a long day somewhere up toward the Selkirks, the Palouse breaks, or the timber east of Coeur d'Alene. It's one of the most quietly consistent seasonal rhythms in this part of the state — and one of the easiest to fuel badly, because almost nobody wants to cook a real breakfast at 4 a.m.</p>

<h2>The problem with a 4 a.m. alarm</h2>
<p>A pre-dawn hunt asks more of your body than it looks like on paper. You're awake and alert hours before your normal schedule, often standing still in cold, damp air for long stretches, then hiking in and out over uneven ground carrying a pack, and doing it all on whatever you managed to choke down in the dark before you left the house. Coffee alone doesn't cut it — caffeine without fuel just means you're wired and hungry by 8 a.m., right around when you need steady focus the most.</p>

<h2>What actually works before first light</h2>
<ul>
  <li><strong>Something warm, not just something fast</strong> — a warm breakfast at 4 a.m. is a genuinely different experience than a cold granola bar, and it's easier to get down when your appetite hasn't caught up with your alarm clock yet.</li>
  <li><strong>Slow-digesting carbs</strong> — oats and whole fruit release energy over hours instead of spiking and crashing an hour into the sit.</li>
  <li><strong>Protein that travels</strong> — nut butter and cacao hold up in a pack better than eggs do, and they don't need a cooler.</li>
  <li><strong>Caffeine with food attached</strong> — black coffee on an empty stomach by itself is rough on a cold morning; pairing it with real calories smooths that out.</li>
</ul>

<blockquote>The goal isn't a fancy breakfast at 4 a.m. — it's enough warm, slow-burning fuel that you're still sharp and steady six hours later, not running on fumes and cold coffee.</blockquote>

<h2>A grab-and-go plan from the Valley</h2>
<p>This is exactly the kind of morning our menu was built for. A bowl of <a href="/#menu">Hot Oats</a> — gluten-free, warm, and loaded with slow-digesting carbs — travels well in a thermos-style container if you're eating in the truck on the drive out, and it holds you far longer than a granola bar ever will. For the caffeine side, a <a href="/#sips">Cacao Ice Blended Coffee</a> brings real cacao and coffee together into something that still feels like a treat at an hour when nothing else does. If you're loading up the night before and need something that won't take ten minutes to eat before you leave, the <a href="/#menu">Full Moon</a> bowl's cacao and banana combination is dense enough to carry you a long way into the morning.</p>

<p>Pack smart for the field, too. A second round of fuel for the stand or the glassing knob matters more than people think — a handful of whatever you're carrying that's heavy on carbs and light on mess beats a sandwich that's gone soggy by 9 a.m.</p>

<h2>Coming back down the mountain</h2>
<p>Whether the day ends with a tag filled or just a long walk back to the truck, the hours of hiking, glassing, and hauling gear add up to a real physical workload — treat the end of the day like the end of any long hike. Protein and carbs together help your body recover faster than coffee and adrenaline alone, and the <a href="/#menu">PB Everbowl</a> covers both in a form that actually tastes good after a cold day outside.</p>

<h2>Stop by the Valley before or after the hunt</h2>
<p>Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, right on the way to a lot of the routes out toward North Idaho and the Palouse. <a href="/#order">Order ahead online</a> the night before so a warm bowl is ready when you swing by before sunrise, or stop in after you're back down the mountain for a real meal instead of whatever's left in the truck.</p>

<h2>The bottom line</h2>
<p>Opening weekend and the weeks that follow are a genuine Inland Northwest tradition, and the hunters who feel sharp by mid-morning are usually the ones who ate something real before they left the house, not just the ones who got the earliest start. Fuel the 4 a.m. alarm like you would any other long day outside, and the rest of the hunt takes care of itself.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "ewu-homecoming-cheney-tailgate-fuel",
    title: "EWU Homecoming Weekend: Fueling a Cheney Tailgate Without the Stadium Food Trap",
    description:
      "Eastern Washington's Homecoming weekend fills Roos Field and the Cheney tailgate lots every October. A real pre-game breakfast and halftime plan beats running on chips and soda.",
    category: "Spokane & Movement",
    date: "2026-10-20",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A blended matcha drink and smoothie from Everbowl Spokane ready for an EWU Homecoming tailgate in Cheney",
    keywords: [
      "ewu homecoming",
      "cheney washington tailgate",
      "eastern washington university football",
      "roos field game day",
      "spokane valley game day fuel",
    ],
    body: `<p>Every October, the parking lots around Roos Field in Cheney fill up hours before kickoff for Eastern Washington University's Homecoming game — grills going, red turf waiting, alumni back in town from all over the Inland Northwest. It's a genuinely fun Spokane Valley tradition, whether you're a current EWU family, an alum making the short drive out Highway 904, or just someone who likes a reason to tailgate on a crisp fall Saturday. The catch is the same one every tailgate has: between the early start, the standing around in cool air, and the chips-and-soda spread that shows up on every tailgate table, it's easy to end the day feeling worse than when you woke up.</p>

<h2>Why tailgate days hit differently</h2>
<p>A Homecoming Saturday asks more of your body than a normal weekend day. You're up earlier than usual to beat the parking crunch, standing on asphalt or grass for hours before the game even starts, and the temperature in Cheney by late October can swing 20-plus degrees between a chilly morning setup and an afternoon kickoff. Add in grazing on whatever's within reach at the tailgate — usually salty snacks and sugary drinks — and it's a recipe for an energy crash right around the third quarter, long before the game is decided.</p>

<h2>A better pre-game plan</h2>
<ul>
  <li><strong>Eat a real breakfast before you load the car</strong> — not just coffee. Something with protein and fiber holds up far better than a donut from the gas station on the way to Cheney.</li>
  <li><strong>Hydrate before the grill fires up</strong> — tailgates run on beer and soda; building in water or a fruit-forward drink early keeps you from starting the day already behind.</li>
  <li><strong>Pack something that travels</strong> — a cooler full of ice doesn't keep a smoothie bowl intact, but a to-go cup or a toast wrapped in foil survives the drive out just fine.</li>
  <li><strong>Plan for halftime, not just pre-game</strong> — a second round of real food around the midpoint of the day keeps energy steadier than coasting on morning coffee alone.</li>
</ul>

<blockquote>The tailgates that are still having fun in the fourth quarter are usually the ones who ate something real before the first whistle, not just the ones who got there earliest.</blockquote>

<h2>Order ahead, then head out Highway 904</h2>
<p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, which makes it an easy stop on the way out to Cheney for an early kickoff. A <a href="/#toast">Bruschetta Avocado Toast</a> is substantial enough to actually hold you through pre-game setup, pairing fiber and healthy fat in a way that a bag of chips never will. For something to sip on the drive, an <a href="/#sips">Ice Blended Matcha</a> brings steady, jitter-free caffeine instead of the sugar spike of a gas-station energy drink — a real advantage when you're standing in a parking lot for three hours before kickoff. If the group is splitting up a cooler run, <a href="/#order">order ahead online</a> so your food is ready when you swing by, instead of adding a wait to an already early morning.</p>

<p>For halftime or the drive home, a <a href="/#sips">Dragon Fruit Lemonade</a> is a genuinely refreshing reset after a few hours in the sun or the cold — real fruit instead of another can from the cooler, and bright enough to feel like a treat without the crash that follows a second soda.</p>

<h2>Win or lose, refuel before the drive back</h2>
<p>Whether EWU pulls off the Homecoming win or the day ends in a tougher loss, hours on your feet in variable fall weather is still a real physical day. Stopping back through the Valley on the way home for something with actual protein and carbs beats grabbing fast food on the way to I-90 — your body will thank you on Sunday morning either way.</p>

<h2>The bottom line</h2>
<p>Homecoming weekend in Cheney is one of the best reasons to tailgate in the Inland Northwest all fall, and it's easy to fuel it right without losing any of the fun. A real breakfast before you leave the Valley, a plan for halftime, and a stop at Everbowl on either end of the drive keep the day feeling good well after the final whistle.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "trick-or-treat-week-fuel-spokane-valley",
    title: "Trick-or-Treat Week: Fueling Spokane Valley Families Before a Night of Halloween Walking",
    description:
      "Halloween is closing in across Spokane Valley. How to feed kids and parents before a few miles of trick-or-treating, plus a candy-bucket plan that doesn't end in a sugar crash.",
    category: "Spokane & Movement",
    date: "2026-10-21",
    readMins: 5,
    image: "a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg",
    imageAlt: "A spread of smoothie bowls and toast from Everbowl Spokane for a Halloween trick-or-treat night",
    keywords: [
      "halloween spokane valley",
      "trick or treat fuel",
      "spokane valley family night",
      "halloween candy kids",
      "inland northwest halloween",
    ],
    body: `<p>Costume racks are thinning out at every store along Sprague Avenue, pumpkins are showing up on porches from Liberty Lake to the South Hill, and Halloween is close enough now that Spokane Valley families are starting to plan the actual night: who's walking with the kids, which neighborhood loop you're doing, and whether anyone's handing out candy from the garage with a fire pit going. It's one of the most purely fun nights of the fall calendar — and also one of the easiest to get backwards, because almost every part of a trick-or-treat evening pushes toward sugar and nothing else, hours before anyone's actually eaten a real meal.</p>

<h2>Why Halloween night wrecks everyone's energy</h2>
<p>A trick-or-treat loop through a Spokane Valley neighborhood is a longer physical outing than people give it credit for. Kids are walking a mile or two in costumes that are often too warm or not warm enough for an Inland Northwest October evening, parents are on their feet the whole time managing crosswalks and strollers, and everyone's grazing on candy from the first house to the last. Add that most families try to squeeze trick-or-treating in after a full school and work day, on an empty stomach, and you get the two most common Halloween-night complaints: kids melting down halfway through the block, and adults dragging by house twelve.</p>

<h2>The fix is dinner before costumes, not after</h2>
<ul>
  <li><strong>Eat a real dinner before you leave the house</strong> — even a quick one. A kid who starts the walk already fed treats the candy in the bucket as a bonus, not dinner.</li>
  <li><strong>Protein and fiber beat an empty stomach plus candy</strong> — pairing real food with the sugar that's coming anyway smooths out the inevitable crash instead of amplifying it.</li>
  <li><strong>Hydrate before you bundle up</strong> — costumes and layers in brisk fall air are more dehydrating than people expect, especially for kids running block to block.</li>
  <li><strong>Let the candy bucket be dessert, not the whole night</strong> — nobody needs a ban on Halloween candy, but it lands easier on top of a real meal than on top of nothing.</li>
</ul>

<blockquote>The families still having fun by the last block are usually the ones who ate a real dinner before the first doorbell, not the ones who tried to outlast the candy on an empty stomach.</blockquote>

<h2>A Valley-friendly Halloween dinner plan</h2>
<p>Everbowl Spokane is a quick stop at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley on the way home from school or work, before costumes go on. A <a href="/#menu">PB Everbowl</a> gives kids real protein and fiber from peanut butter, granola, and banana in a bowl that still feels like a treat — an easy way to get a genuine meal into a kid who's already thinking about candy instead of dinner. For parents handing out candy from the driveway all evening or walking the whole loop, a <a href="/#smoothies">Nanaberry Bliss</a> smoothie is fast enough to drink in the car between the store and the first house, and substantial enough to actually count as dinner rather than a snack squeezed in between errands.</p>

<p>If you're organizing the family's whole pre-Halloween week — costume shopping, pumpkin carving, a Green Bluff pumpkin run before the patches close for the season — <a href="/#order">order ahead online</a> so dinner is ready the moment you walk in, instead of adding one more stop to an already packed October evening.</p>

<h2>For the adults manning the candy bowl</h2>
<p>Standing at the end of a driveway for two or three hours handing out candy is its own kind of long, slow evening, and it's tempting to just eat from the bowl you're handing out of. A real dinner beforehand — or a <a href="/#toast">Classic Avocado Toast</a> eaten standing up at the kitchen counter before the first trick-or-treaters show up — means you're not relying on fun-size candy bars to get through the night.</p>

<h2>The day after matters too</h2>
<p>However the candy bucket shakes out, the morning after Halloween tends to go better with a real breakfast instead of picking up where the candy left off. A bowl with actual fruit and protein resets the morning faster than coffee and leftover chocolate, and it's a good habit to build before the holiday stretch that follows gets even busier.</p>

<h2>The bottom line</h2>
<p>Halloween in Spokane Valley is a genuinely great night for families, and it doesn't take much to fuel it well. A real dinner before the costumes go on, water before the walk, and a quick stop at Everbowl on the way home keep the night fun from the first doorbell to the last block.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "fall-steelhead-fishing-fuel-inland-northwest",
    title: "Fall Steelhead Season: Fueling a Pre-Dawn Drive to the Clearwater",
    description:
      "Steelhead season has Inland Northwest anglers up before 4 a.m. and driving south toward the Clearwater River. How to eat for a long, cold day on the water and the drive home.",
    category: "Spokane & Movement",
    date: "2026-10-21",
    readMins: 5,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "A bright pitaya smoothie bowl from Everbowl Spokane, fuel for a fall steelhead fishing day",
    keywords: [
      "fall steelhead fishing",
      "clearwater river steelhead",
      "spokane valley anglers",
      "inland northwest fishing season",
      "everbowl spokane",
    ],
    body: `<p>Every October, a certain kind of Spokane and Coeur d'Alene local starts setting an alarm for the low 4 a.m.'s again. Boats come off blocks in driveways, waders get pulled out of garages, and trucks start pointing south toward the Clearwater River around Orofino and Kooskia for the fall steelhead run. It's one of the Inland Northwest's quieter seasonal traditions — no festival, no finish line, just cold water, gray light, and a couple hours of drive time before the fishing even starts. It's also one of the easier seasons to fuel badly, because the whole day runs on a schedule that fights against eating well.</p>

<h2>Why steelhead season is its own fueling problem</h2>
<p>A steelhead day isn't a quick outing. Add up the pre-dawn wake-up, the one-and-a-half to two-hour drive down Highway 12 along the Clearwater, several hours of wading or drift-boat fishing in genuinely cold water, and the drive home in the dark, and you're looking at a 12- to 14-hour day that starts before most grocery stores open. Standing in cold water burns through body heat and calories faster than people expect, and a lot of anglers under-eat simply because nothing's open yet and gas-station coffee feels like enough. It isn't — not for a day this long and this cold.</p>

<h2>What actually goes wrong</h2>
<ul>
  <li><strong>Skipping real food before the drive.</strong> Coffee alone doesn't carry you through two hours behind the wheel plus a full morning in the water.</li>
  <li><strong>Underestimating the cold.</strong> Standing in October river water pulls heat out of your body all day; that costs real energy, even if you're not moving much.</li>
  <li><strong>Packing snacks instead of a meal.</strong> Gas-station jerky and energy drinks get you to lunch, not through it.</li>
  <li><strong>Forgetting the drive home.</strong> A tired, cold, hungry driver on Highway 12 after dark is a worse risk than most anglers plan for.</li>
</ul>

<blockquote>The anglers who fish well into the afternoon are rarely the ones with the best gear — they're the ones who ate like the day was going to be long before it actually felt long.</blockquote>

<h2>Fuel the drive, not just the fishing</h2>
<p>Everbowl Spokane opens early enough to be the last real stop before Highway 12 takes over, right at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley. A bowl of <a href="/#menu">Hot Oats</a> is the single best pre-dawn order on the menu for this trip specifically — warm, filling, and built to hold you through a long cold morning without the sugar crash a drive-thru pastry gives you an hour south of town. Pair it with a <a href="/#sips">Cacao Ice Blended Coffee</a> for the drive itself; it's real caffeine with enough substance to actually function as part of breakfast, not just a jolt that wears off before you've even rigged a rod.</p>

<p>If you're loading a boat or packing a drift-boat cooler the night before, <a href="/#order">order ahead online</a> so breakfast is sitting ready at 4:30 a.m. instead of one more thing slowing down a departure that's already earlier than anyone wants.</p>

<h2>What to pack for streamside</h2>
<p>Whatever you bring into the boat or waders needs to survive cold hands and not require a stove. Trail mix with real nuts, a couple of pieces of fruit, and a thermos of something warm all do better than candy bars, which spike and crash exactly when you need steady energy for careful wading and casting. Water matters too — cold weather dulls thirst even though you're still losing fluid standing in a river all day, so drink on a schedule rather than waiting to feel thirsty.</p>

<h2>The drive home is part of the trip</h2>
<p>By the time most anglers are back in the truck, it's been a 12-plus-hour day, often ending in the dark on a two-lane highway. That's exactly the wrong moment to be running on gas-station coffee and whatever's left in the cooler. A real refuel before the drive north — something with protein and carbohydrate, not just sugar — keeps you alert for the drive instead of fighting to stay awake through Lewiston and up the grade.</p>

<p>Back in Spokane Valley, a <a href="/#smoothies">Pitaya Paradise</a> smoothie is a good way to close out the day: real fruit, antioxidants, and enough substance to actually count as dinner if you're too wiped out to cook after a day on the water.</p>

<h2>The bottom line</h2>
<p>Fall steelhead season asks a lot of the people who chase it — early mornings, cold water, long drives — and it rewards the ones who treat food as part of the gear list, not an afterthought. Load up at Everbowl before you point the truck south, pack real food for the water, and plan one more stop on the way home. The fish don't care how you fueled the day, but you will, somewhere around hour eleven.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "orionid-meteor-shower-stargazing-fuel-spokane",
    title: "Orionid Meteor Shower Weekend: Fueling a Late-Night Stargazing Trip Near Spokane",
    description:
      "The Orionid meteor shower peaks in late October, right as Spokane's skies turn clear and cold. How to eat and dress for a pre-dawn stargazing trip without wrecking your sleep schedule.",
    category: "Spokane & Movement",
    date: "2026-10-22",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A cacao smoothie bowl from Everbowl Spokane, warm fuel for a late-night stargazing trip",
    keywords: [
      "orionid meteor shower spokane",
      "stargazing spokane valley",
      "late night snacks spokane",
      "fall night sky inland northwest",
      "everbowl spokane",
    ],
    body: `<p>Late October brings one of the Inland Northwest's quieter annual events, and it has nothing to do with candy or costumes: the Orionid meteor shower, which peaks around October 20–22 every year as Earth passes through dust left behind by Halley's Comet. Spokane and Coeur d'Alene sit far enough from major light pollution that a short drive out of town — toward Mount Spokane State Park, the open fields near Fishtrap, or just a dark stretch past the edge of the valley — can turn into a genuinely good show, especially in the pre-dawn hours when the shower's radiant point climbs highest. It's also an easy night to fuel badly, because the whole plan runs backward from a normal day: you eat dinner at the usual time, then stay up or wake up in the coldest, darkest hours to go stand outside and do nothing but watch the sky.</p>

<h2>Why a stargazing night fights your body's clock</h2>
<p>Meteor-shower viewing is unusual as outdoor activities go: there's no hiking, no pedaling, nothing to generate body heat. You're standing or sitting still in late-October air that's already dropped into the 30s after dark, often for an hour or more, while your body's normal signals — getting sleepy, cooling down for the night — are working against you instead of for you. That combination of stillness, cold, and a disrupted sleep window is exactly when people either eat too little (because it's late and nothing sounds good) or reach for sugary gas-station snacks that spike and crash before the best meteors even show up.</p>

<h2>What actually goes wrong</h2>
<ul>
  <li><strong>Heading out on an empty stomach.</strong> A thin dinner hours earlier doesn't hold you through a cold night outside with no movement to keep you warm.</li>
  <li><strong>Relying on caffeine alone to stay awake.</strong> Coffee without food keeps you wired but doesn't keep you warm, and it can make the eventual crash worse.</li>
  <li><strong>Underdressing for "just standing around."</strong> Stillness in 30-degree air cools you faster than a hike at the same temperature.</li>
  <li><strong>Skipping water.</strong> Cold, dry fall air is dehydrating even when you're not sweating, and dehydration makes you feel the cold more.</li>
</ul>

<blockquote>The difference between a miserable 45 minutes outside and an actually enjoyable one is almost never the sky. It's whether you ate, dressed, and hydrated like the plan was real.</blockquote>

<h2>Fuel before you head out, not after you're already cold</h2>
<p>Stop at Everbowl Spokane on the way out of town, right at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, and build a dinner that actually lasts. The <a href="/#menu">Full Moon</a> bowl is the obvious — if slightly ironic — order for a meteor-shower night: a bright moon actually washes out fainter meteors, so the darkest, moonless stretches are the best viewing, and a bowl named for the one thing you're hoping stays out of the way makes for a good excuse either way. Pair it with a warm <a href="/#sips">Cacao Ice Blended Coffee</a> for the drive out; it carries real caffeine alongside enough substance to function like a second course, not just a jolt that fades before the shower peaks.</p>

<p>Headed out with a group or kids who'll want a thermos each, <a href="/#order">order ahead online</a> so everyone's bowl and drink are ready before you load the car and lose the light.</p>

<h2>Dress and pack like you're standing still</h2>
<p>Layer for stillness, not activity: a base layer, an insulated mid-layer, and a windproof shell will outperform one heavy coat once you've been standing in one spot for twenty minutes. Bring a blanket or two to sit on or wrap up in, hand warmers if you run cold, and a thermos of something warm to sip between meteors. Water still matters even in the cold — bring a bottle, and don't let the lack of thirst fool you into skipping it.</p>

<h2>The early-morning version works too</h2>
<p>If a late night isn't realistic on a school or work week, the Orionids are just as visible — arguably better — in the hour or two before dawn, when the radiant point is highest in the sky. Set an early alarm instead of staying up late, and treat it like any other early start: a real breakfast before you go, not just coffee. A bowl of <a href="/#menu">Hot Oats</a> is built exactly for this, warm and filling enough to get you through a cold, dark hour outside before the sun actually comes up.</p>

<h2>The bottom line</h2>
<p>The Orionid meteor shower is one of the Inland Northwest's best free shows, and it asks almost nothing of you except to be awake, warm, and fed at an hour when you're usually none of those things. Load up at Everbowl before you head out — or before you head out the door at 5 a.m. — dress for standing still in the cold, and let the sky do the rest.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "weeknight-rec-league-fuel-spokane-valley",
    title: "Rec League Season: Fast Fuel Before Weeknight Volleyball, Hoops, or Pickleball",
    description:
      "Fall rec league season fills gyms like the HUB Sports Center and local YMCA courts on weeknights. How Spokane Valley players can eat fast before a game without running out of gas mid-match.",
    category: "Spokane & Movement",
    date: "2026-10-22",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A bright smoothie from Everbowl Spokane, quick fuel before a weeknight rec league game",
    keywords: [
      "rec league nutrition spokane",
      "HUB sports center liberty lake",
      "pickleball fuel spokane valley",
      "volleyball league dinner fuel",
      "everbowl spokane",
    ],
    body: `<p>As daylight shrinks and the evenings turn cold, a certain kind of Spokane Valley weeknight starts repeating itself: leave work, scramble to eat something, and get to the gym before the first serve. Fall is peak season for adult rec leagues across the Inland Northwest — volleyball and basketball at the HUB Sports Center in Liberty Lake, pickleball and hoops at the YMCA, church-league and co-ed teams filling courts all over Spokane Valley. It's a great way to stay active once hiking and biking season winds down, but it creates a real fueling problem: most people only have 30 to 60 minutes between work and warm-up, and that's exactly the window where it's easiest to either skip food entirely or grab something that sits like a brick for the first two sets.</p>

<h2>Why league night is a different problem than a workout</h2>
<p>A solo run or lift lets you control the clock — you eat when it works for you. A league game doesn't. Warm-up starts at a fixed time whether or not you've eaten, and showing up either empty or stuffed both backfire. Too little food and you're flat by the second game, reaching for the bench instead of a dig. Too much, too close to tip-off, and you're playing defense against your own stomach instead of the other team. The sweet spot is a meal with real carbohydrate and a moderate amount of protein, eaten 60 to 90 minutes out — which is almost never how the actual evening unfolds.</p>

<h2>What goes wrong on a typical league night</h2>
<ul>
  <li><strong>Working until the last minute.</strong> A 5:30 end-of-day meeting becomes a 6:45 tip-off with nothing eaten in between.</li>
  <li><strong>Grabbing fast food on the drive.</strong> Heavy, greasy drive-thru food close to game time tends to sit instead of digest, especially once you start moving hard.</li>
  <li><strong>Skipping dinner and "eating after."</strong> Playing an hour-plus of volleyball or full-court basketball on an empty tank leads to cramping, poor focus late in the game, and a much worse night's sleep after.</li>
  <li><strong>Relying on an energy drink alone.</strong> Caffeine can sharpen focus, but without real carbohydrate behind it, the crash often lands right in the third set.</li>
</ul>

<blockquote>The players who are still moving well in the final game of the night usually aren't the fittest ones in the gym — they're the ones who actually ate something real on the way in.</blockquote>

<h2>The fast pre-game stop that actually works</h2>
<p>Everbowl Spokane sits right at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley — close enough to swing by on the way from work to the HUB or the Y without burning the only free half hour you have. A <a href="/#smoothies">Nanaberry Bliss</a> smoothie is built for exactly this: real banana and berries for quick-digesting carbohydrate, blended smooth so it won't sit heavy once you're sprinting the baseline or diving for a ball. If you've got a little more time before warm-up, the <a href="/#menu">Berry Boost</a> bowl adds antioxidants and a bit more substance without tipping into "too full to move."</p>

<p>Running from a meeting straight to the gym with zero minutes to spare, <a href="/#order">order ahead online</a> so your smoothie's ready to grab on the way through rather than waiting in line while your warm-up window disappears.</p>

<h2>Don't forget the second half of the night</h2>
<p>An hour of competitive volleyball, basketball, or pickleball in a warm gym is a real workout, even if it doesn't feel like "training." Bring water to sip between games — gym air is dry and it's easy to finish a match more dehydrated than you realize. Afterward, a bit of protein alongside carbohydrate helps you recover before the next league night rolls around, especially if you're playing on back-to-back evenings during a busy fall schedule.</p>

<h2>Plan the whole week, not just one night</h2>
<p>If your league runs weekly through the fall, the players who stay consistent are usually the ones who've made the Everbowl stop part of the routine rather than a scramble they figure out each time. Keep a go-to order in mind — smoothie when you're tight on time, a bowl when you've got a few extra minutes — so game night decision-making is already done before you've even left work.</p>

<h2>The bottom line</h2>
<p>Fall rec league season asks you to be fed, hydrated, and ready to move on a schedule you don't control. A quick stop at Everbowl on the way to the gym solves the actual problem — real carbohydrate, easy to eat fast, gentle on a stomach about to start moving hard — so the only thing left to worry about is whether your serve is working.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "flu-shot-season-immune-support-spokane",
    title: "Flu Shot Season in the Inland Northwest: Feeding Your Immune System While You're At It",
    description:
      "Pharmacies and clinics across Spokane and Coeur d'Alene push flu shots hard every October. What food can and can't do for your immune system around vaccination day.",
    category: "Health",
    date: "2026-10-23",
    readMins: 5,
    image: "b5c5a817-5e1e-4b3f-b7c3-61c677f0a7bb.jpg",
    imageAlt: "A pitaya smoothie bowl from Everbowl Spokane, bright fuel for flu shot season",
    keywords: [
      "flu shot season spokane",
      "immune support food spokane valley",
      "vaccine day nutrition",
      "fall health inland northwest",
      "everbowl spokane",
    ],
    body: `<p>Every October, the same reminders start stacking up around Spokane and Coeur d'Alene: Rosauers, Yoke's, Costco, and the Spokane Regional Health District all run flu shot clinics, work places set up on-site vaccination days, and most of us put it off for a week or two before finally rolling up a sleeve. It's a genuinely useful habit in a region where flu season tends to run hard from November through February, overlapping with ski season, holiday travel, and the first real cold snap. But a flu shot is only one half of a sensible fall health routine — what you're eating in the weeks around it matters too, even if it can't do what the vaccine does.</p>

<h2>What a flu shot actually does, and what food doesn't</h2>
<p>It's worth being precise here, because wellness marketing loves to blur this line: a flu shot trains your immune system to recognize specific strains of influenza ahead of time, which is a very different job than anything a smoothie or a bowl of fruit can do. No food, supplement, or "immune-boosting" drink replaces vaccination, and nothing in this article should be read as a substitute for a flu shot or your doctor's advice. What food actually supports is the broader, everyday function of your immune system — the baseline it's working from when it does eventually need to respond to something, vaccine-trained or not.</p>

<h2>Where real food genuinely helps</h2>
<ul>
  <li><strong>Vitamin C from whole fruit.</strong> Pitaya, strawberries, and citrus all carry meaningful vitamin C, which supports normal immune cell function. The research case for vitamin C preventing colds in most people is modest, but a diet consistently low in it is a real disadvantage, not just a missed bonus.</li>
  <li><strong>Antioxidants from colorful fruit.</strong> Açaí and pitaya are both dense in anthocyanins, the same pigment family found in blueberries, which help manage the oxidative stress that builds up with poor sleep, travel, and the general grind of a busy fall.</li>
  <li><strong>Sleep-supporting consistency, not any single nutrient.</strong> Immune function is closely tied to sleep and stress, more than to any one "superfood." Regular meals and decent sleep do more heavy lifting than people expect.</li>
  <li><strong>Hydration.</strong> Dry fall air plus indoor heating kicking back on dries out the nasal passages that are your first line of defense. Water and fluids matter more this time of year than most people give them credit for.</li>
</ul>

<blockquote>Think of food as supporting the system that does the work, not as a substitute for the shot that actually trains it.</blockquote>

<h2>A sensible stop before or after your appointment</h2>
<p>If your flu shot is on the calendar this week — or you're one of the many people who gets it done on a lunch break at a Spokane Valley pharmacy — Everbowl is a two-minute detour from most routes along Sprague. The shop sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a>, and a <a href="/#menu">Blue Lagoon</a> bowl, built around pitaya and butterfly pea, leans into exactly the vitamin C and antioxidant combination worth having more of this time of year. If you'd rather sip something on the way to or from the appointment, the <a href="/#smoothies">Pitaya Paradise</a> smoothie covers the same ground without needing a spoon.</p>

<p>Setting up a whole family's worth of flu shots at once — kids after school, a partner on their way home — <a href="/#order">order ahead online</a> so bowls and smoothies are ready the moment everyone regroups, rather than making a hungry crowd wait at the counter.</p>

<h2>The habits that actually move the needle this fall</h2>
<p>Beyond any single ingredient, the pattern that tends to hold up through flu season in the Inland Northwest is boring and consistent: regular meals instead of skipped ones, real fruit instead of relying on supplements, enough sleep even as evenings get shorter, and washing your hands like it's still 2020 — because the basics still work. A flu shot covers the specific threat; the rest of your habits cover the general baseline your immune system runs on all winter.</p>

<h2>The bottom line</h2>
<p>Get the flu shot — that's the part with the actual evidence behind it for preventing the flu specifically. Then treat the weeks around it as a good excuse to tighten up the basics: real fruit, real hydration, real sleep. Stop by Everbowl Spokane on the way to or from your appointment and get a head start on the second half of that plan.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "collagen-coffee-trend-explained",
    title: "Collagen in Your Coffee? What the Trend Actually Does (and Doesn't)",
    description:
      "Collagen powders are showing up in everything from gas-station coffee to Spokane coffee stands this fall. An honest look at what collagen can and can't do, and better whole-food options.",
    category: "Nutrition",
    date: "2026-10-23",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A blended protein coffee drink from Everbowl Spokane, topped and ready to go",
    keywords: [
      "collagen coffee",
      "collagen supplement nutrition",
      "protein coffee spokane",
      "fall nutrition inland northwest",
      "everbowl spokane",
    ],
    body: `<p>Walk into pretty much any coffee stand in Spokane or Coeur d'Alene this fall and you'll see it on the menu board: a scoop of collagen, offered as an add-in for a dollar or two, usually right next to the sugar-free syrups. As the weather cools and people reach for warmer, richer drinks instead of iced everything, collagen has become the trendy upgrade of the season — marketed for skin, joints, hair, and vague "wellness." Some of that is real. A lot of it is marketing doing more work than the ingredient itself.</p>

<h2>What collagen actually is</h2>
<p>Collagen is a structural protein — it's what gives skin, tendons, cartilage, and connective tissue their shape. Supplemental collagen is usually "hydrolyzed," meaning it's broken into smaller pieces (peptides) so it dissolves in a hot drink instead of turning it into gelatin. Your body does use collagen, but when you eat or drink it, your digestive system breaks those peptides down into individual amino acids, just like it does with any other protein. There's no guarantee that a collagen peptide from your coffee gets reassembled specifically into skin collagen rather than being used as generic amino acid building blocks for whatever your body needs that day.</p>

<h2>What the evidence actually supports</h2>
<ul>
  <li><strong>Skin hydration and elasticity:</strong> Some smaller clinical trials on hydrolyzed collagen show modest improvements in skin hydration after consistent daily use over several weeks. The effect size is real but modest, not dramatic.</li>
  <li><strong>Joint comfort:</strong> A few studies in athletes and older adults suggest collagen may support joint comfort over time, though the research base is still thinner than supplement marketing implies.</li>
  <li><strong>"Boosts protein":</strong> This one is mostly true, but collagen is an <strong>incomplete protein</strong> — it's missing or low in some essential amino acids your body can't make on its own. A scoop in your coffee adds grams of protein to a label, but it isn't a substitute for complete protein sources like dairy, eggs, or a well-built bowl.</li>
</ul>

<blockquote>Collagen isn't a scam, but it's also not magic. It's one modest tool in a kit that whole food already covers better for most people.</blockquote>

<h2>The whole-food case, especially this time of year</h2>
<p>Here's the part most collagen marketing skips: your body needs <strong>vitamin C</strong> to actually synthesize collagen from amino acids, whatever the source. Pitaya, strawberries, and citrus — all things that show up heavily in a real fruit bowl — carry meaningful vitamin C, which makes them arguably more useful to your skin and joints than the collagen powder itself. Pair that with a genuinely complete protein source, and you're covering more ground than a one-dollar coffee add-in ever will.</p>

<p>That's the logic behind building a fall routine around real ingredients instead of powder add-ins. A <a href="/#menu">Chia Pudding Bowl</a> brings plant protein, fiber, and omega-3s that support the same connective tissue collagen marketing targets, and it pairs well with berries for the vitamin C piece. If you want the warm, cozy, cooler-weather version of the trend without the upsell, our <a href="/#sips">PB Protein Ice Blended Coffee</a> blends real coffee with a complete protein base — no isolated peptide needed to call it a protein drink.</p>

<p>Either way, it's a quick stop on Sprague Ave: Everbowl Spokane is at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, between most routes to work or the gym. Grabbing something on the way means you're not standing at a coffee stand deciding whether a mystery scoop is worth the extra charge — you already know what's in the cup. Mornings get busier as the days get shorter, so if you want it ready when you walk in, <a href="/#order">order ahead online</a> and skip the line.</p>

<h2>So should you skip collagen add-ins entirely?</h2>
<p>Not necessarily — if you enjoy it and it fits your budget, a modest daily dose isn't harmful for most healthy adults. The point isn't to villainize the ingredient; it's to stop treating it as a shortcut that replaces the basics. Vitamin C-rich fruit, a real protein source, and consistent sleep do more for skin and joints over a season than any single scoop will, trend or not.</p>

<h2>The bottom line</h2>
<p>Collagen in your coffee is a modest, reasonable add-in — not a wellness miracle, and not a replacement for whole food. If you want the actual nutrients collagen marketing promises, a vitamin-C-rich bowl and a complete protein source do more of the real work, and they taste better than a powder.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "pumpkin-spice-decoded-latte-vs-real-pumpkin",
    title: "Pumpkin Spice, Decoded: What's Actually in That Latte vs. What's Actually in a Pumpkin",
    description:
      "Pumpkin spice is everywhere at Spokane and Coeur d'Alene coffee stands this October. Here's what's actually in the cup, what real pumpkin brings to the table, and how to get the flavor without the sugar crash.",
    category: "Nutrition",
    date: "2026-10-24",
    readMins: 5,
    image: "ee557844-fb66-41b2-8d32-c78a539eb48b.jpg",
    imageAlt: "A warm cacao Everbowl Spokane bowl with fall spices, an alternative to a sugary pumpkin spice drink",
    keywords: [
      "pumpkin spice latte nutrition",
      "pumpkin spice myth",
      "fall coffee spokane",
      "everbowl spokane",
      "healthy fall drinks inland northwest",
    ],
    body: `<p>By late October, pumpkin spice has taken over every coffee stand from Sprague Ave to Sherman Avenue in Coeur d'Alene — big orange cups, limited-time menu boards, the whole seasonal production. It's easy to assume a "pumpkin" drink is doing you some kind of favor, nutritionally, just because it shares a name with a vegetable the Green Bluff farm stands were selling by the truckload a few weeks ago. It's worth asking what's actually in the cup, because the answer surprises most people.</p>

<h2>What's actually in a pumpkin spice latte</h2>
<p>Here's the part the name doesn't tell you: most pumpkin spice drinks contain little to no actual pumpkin. What you're tasting is a syrup built from sugar and a spice blend — typically cinnamon, nutmeg, clove, and ginger — sometimes with a trace of pumpkin puree or "natural flavor" for color and scent, but rarely enough to count as a meaningful serving of the vegetable. A standard large pumpkin spice latte can carry 45-50 grams of sugar once you add whipped cream, which is more sugar than most people would choose to drink in one sitting if it weren't disguised as a fall tradition.</p>
<ul>
  <li><strong>The syrup:</strong> sugar, water, and spice extracts — flavor and color, minimal nutrition.</li>
  <li><strong>The spices:</strong> real cinnamon, nutmeg, clove, and ginger do carry trace antioxidants, but in the tiny amounts used for flavoring, not in a dose that moves the needle.</li>
  <li><strong>The dairy or cream:</strong> this is actually where most of the drink's protein and calcium come from — not the "pumpkin" part at all.</li>
</ul>

<h2>What real pumpkin brings to the table</h2>
<p>Actual pumpkin, the kind still sitting in bins at Green Bluff orchards and Spokane Valley grocery stores this month, is genuinely good food. It's low in calories, high in fiber, and loaded with beta-carotene — the orange pigment your body converts to vitamin A, important for vision and immune function heading into the gray months ahead. It also carries a solid dose of potassium, often overlooked next to banana's reputation for the same mineral. None of that shows up in a latte that never contained much pumpkin to begin with.</p>

<blockquote>The flavor of pumpkin spice is real and genuinely enjoyable. The nutrition story attached to it is almost entirely marketing — the spices are along for the ride, not doing the heavy lifting.</blockquote>

<h2>How to get the flavor without the sugar crash</h2>
<p>You don't have to give up the season's favorite flavor combination — you just have to get it from something with more substance behind it. Our <a href="/#menu">Hot Oats</a> bowl is naturally built for this: warm rolled oats, banana, and cinnamon in a base that holds up to the same nutmeg-and-clove flavor profile people are chasing in a latte, minus the syrup pump. If you want something richer, the <a href="/#menu">Full Moon</a> bowl leans into cacao's deep, warming flavor and its own antioxidant profile, which pairs naturally with fall spices without needing added sugar to taste indulgent.</p>

<p>For the coffee itself, swap the syrup-heavy seasonal special for our <a href="/#sips">Cacao Ice Blended Coffee</a> — real coffee blended with cacao for a rich, cold-weather-appropriate drink that doesn't rely on a flavor pump to taste like fall. It's proof the "cozy" flavor people want this time of year doesn't have to come with 50 grams of sugar attached.</p>

<p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, an easy stop whether you're running errands on Sprague or picking kids up from school as the afternoons get shorter. Busy week? <a href="/#order">Order ahead online</a> and grab a genuinely fall-flavored bowl or drink without waiting in a seasonal-menu line.</p>

<h2>So is pumpkin spice "bad"?</h2>
<p>Not inherently — an occasional seasonal treat is fine for most people, and nobody needs to feel guilty about enjoying a tradition that shows up once a year. The point is just knowing what you're actually drinking: a sugar-and-spice flavor experience, not a vegetable-forward health drink. If you want the actual nutrition that pumpkin itself offers — fiber, vitamin A, potassium — you're better off eating roasted pumpkin or squash from this month's harvest than looking for it in a seasonal cup.</p>

<h2>The bottom line</h2>
<p>Pumpkin spice season is genuinely fun, and the flavor combination earns its popularity. Just don't confuse it with a nutrition win. Get your real pumpkin from the produce aisle or Green Bluff, get your warming fall flavor from a bowl built on real oats and cacao, and save the seasonal latte for an occasional treat rather than a daily habit.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
  {
    slug: "steptoe-butte-palouse-harvest-drive-fuel",
    title: "Steptoe Butte in Late October: Fueling a Palouse Harvest Drive from Spokane",
    description:
      "Steptoe Butte and the Palouse's golden hills are at their best this week. A fueling guide for the drive south from Spokane Valley, with easy grab-and-go stops before you go.",
    category: "Spokane & Movement",
    date: "2026-10-24",
    readMins: 5,
    image: "9a971840-0b65-4f07-ab00-54336a4f0f74.jpg",
    imageAlt: "A fresh açaí bowl from Everbowl Spokane, ready to pack for a Palouse road trip",
    keywords: [
      "steptoe butte spokane",
      "palouse fall drive",
      "spokane valley road trip food",
      "everbowl spokane",
      "inland northwest fall drive",
    ],
    body: `<p>Late October is one of the best windows all year to make the hour-plus drive south from Spokane Valley to Steptoe Butte, where the Palouse's rolling wheat country turns gold, rust, and deep brown after harvest. The light is lower in the sky, the air is crisp instead of smoky, and the famous patchwork hills photograph better right now than almost any other week of the year. It's a long day of driving, walking the summit road, and stopping at pullouts for photos — which means it's also a day where what you eat before you leave town matters more than people expect.</p>

<h2>Why this drive is a fueling problem, not just a scenic one</h2>
<p>A Steptoe Butte day usually breaks down the same way: an early start from Spokane Valley, close to ninety minutes of driving each way, a steep but short climb up the butte's summit road, and long stretches where the nearest real food options are gas-station snacks in Colfax or Palouse. There's no quick bowl shop out there. That means your fueling decisions happen before you ever get on the highway, and a heavy, greasy breakfast that feels fine at 7 a.m. can leave you sluggish by the time you're parked at the summit overlook two hours later.</p>

<ul>
  <li><strong>Protein and fiber beat sugar for a long car day.</strong> A sugary pastry spikes energy fast and drops it faster, right around the time you're navigating gravel switchbacks. A base that digests slowly keeps you steady through the whole loop.</li>
  <li><strong>Hydrate before you're thirsty.</strong> Fall air is deceptively dry, and it's easy to forget water on a cool day the way you wouldn't in July. Start the drive already hydrated rather than catching up at a gas station.</li>
  <li><strong>Pack something that survives a cooler.</strong> Whatever you bring needs to handle a drive-and-stop day without turning into a mess on the passenger seat.</li>
</ul>

<blockquote>The Palouse doesn't have a bowl shop between Spokane Valley and the butte — so whatever you grab before you leave is what you're running on for the whole day.</blockquote>

<h2>What to grab before you head south</h2>
<p>This is exactly the kind of morning our <a href="/#menu">Everbowl</a> was built for: açaí, banana, and real fruit over a base with enough staying power to carry you through a long drive and a summit climb without a mid-morning crash. If you want something heavier on protein for the stretch of the trip, the <a href="/#menu">PB Everbowl</a> adds peanut butter to the mix, which pairs well with the slower, steadier energy a road-trip day actually needs. Both travel reasonably well in a cooler bag if you want to eat the second half at a pullout overlooking the hills instead of in the parking lot.</p>

<p>If you're driving instead of riding, a smoothie is the easier call — something you can drink one-handed on Highway 195 south of Spokane. Our <a href="/#smoothies">Nanaberry Bliss</a> smoothie covers fruit and a steady carbohydrate base without feeling heavy, and it travels in a cupholder better than almost anything else on the menu. Either way, round it out with water, not just coffee, since the drive and the walk up the butte both add up over a full day outdoors.</p>

<p>The easiest way to handle all of this is to make Everbowl Spokane your actual first stop, not an afterthought. We're at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, which sits conveniently close to the routes most people take toward Highway 195 and Colfax. If you're leaving before the shop opens its doors to a line, <a href="/#order">order ahead online</a> the night before and pick it up on your way out of town — one less stop between you and the first overlook.</p>

<h2>Timing the drive around the light</h2>
<p>Late October days are short, and the Palouse's best photo light tends to hit mid-morning and again in the hour before sunset, with harsher flat light in between. A lot of visitors make the mistake of leaving too late, fueling with something quick and sugary on the way out the door, and running out of energy right as the light gets good again in the afternoon. Eating something substantial before you leave — rather than planning to "grab something" once you're out there — is what actually lets you stay out until that second light window instead of heading home early and hungry.</p>

<h2>The bottom line</h2>
<p>Steptoe Butte and the surrounding Palouse hills are worth the drive this week, but the drive itself is the part people underestimate. Fuel like you're heading out for a full day outdoors, not just a short errand, grab something from Everbowl Spokane on your way out of the Valley, and you'll actually get to enjoy both light windows instead of running out of steam by lunch.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },

  {
    slug: "gonzaga-basketball-tipoff-watch-party-fuel",
    title: "Zag Nation Tip-Off: Fueling Up for Gonzaga Basketball Watch Parties",
    description:
      "Gonzaga hoops season is starting and Spokane is turning its attention back indoors. A grab-and-go fueling guide for watch parties, pregame dinners, and McCarthey nights.",
    category: "Spokane & Movement",
    date: "2026-10-25",
    readMins: 5,
    image: "b52051c7-b0fd-466d-a0e3-45d75298d6fa.jpg",
    imageAlt: "A smoothie and toast from Everbowl Spokane, ready for a Gonzaga basketball watch party",
    keywords: [
      "gonzaga basketball spokane",
      "zags watch party food",
      "spokane valley game day food",
      "everbowl spokane",
      "mccarthey athletic center fans",
    ],
    body: `<p>Once the Palouse wheat is in and the Steptoe Butte leaves start dropping, Spokane's attention turns indoors to the thing this city builds its winter around: Gonzaga basketball. Exhibition games and tip-off week are here, which means watch parties, pregame dinners, and the first McCarthey Athletic Center sellouts of the season are all back on the calendar. Whether you're actually in the stands downtown or packed onto a couch in Spokane Valley with the game on, how you eat beforehand decides whether you're locked in for a full forty minutes or fading by the second half.</p>

<h2>Game night is its own kind of fueling problem</h2>
<p>A typical Zags watch party runs long — pregame coverage, a full game, overtime if you're unlucky (or lucky, depending how you look at it), and plenty of standing around a kitchen island eating chips before anyone sits down for a real meal. That pattern is exactly how people end up running on salt and sugar through tip-off and crashing by the under-12 timeout in the second half. The fix isn't complicated: eat something with real substance before puck — er, tip-off — drops, instead of letting game snacks be the whole dinner.</p>

<ul>
  <li><strong>Eat before the opening whistle, not during the first timeout.</strong> Starting the game already fueled beats trying to catch up with chips at halftime.</li>
  <li><strong>Balance the salty snacks with something that actually has protein and fiber.</strong> A bowl or smoothie alongside the chips and queso keeps the whole night from being empty calories.</li>
  <li><strong>Grab-and-go matters on a weeknight tip-off.</strong> Early-season games often fall on school and work nights, so the fastest path from your car to the couch wins.</li>
</ul>

<blockquote>The goal isn't to skip the game-night snacks — it's to make sure something on the table before tip-off actually has staying power.</blockquote>

<h2>What to order before the opening tip</h2>
<p>If you're hosting or heading to a watch party straight from work, our <a href="/#toast">Classic Avocado Toast</a> or <a href="/#toast">Bruschetta Avocado Toast</a> make an easy pregame plate — real fat and fiber that holds you through a full game without weighing you down on the couch. Want something you can sip through the first half instead of a full plate? Our <a href="/#smoothies">PB Cacao Dream</a> smoothie leans into cacao and peanut butter for a dessert-adjacent flavor that still brings real protein to the table, which is more than you can say for a second bag of chips.</p>

<p>For bowl fans, the <a href="/#menu">Nutty Butty</a> and <a href="/#menu">Full Moon</a> both travel well in a to-go container if you're bringing something to a friend's watch party instead of eating at home — just ask for it packed to go and it'll hold up fine for the drive across town. And if the game's got you needing a late-night pick-me-up through a tight finish, our <a href="/#sips">Cacao Ice Blended Coffee</a> splits the difference between dessert and caffeine without the crash that a gas-station energy drink brings.</p>

<p>Make Everbowl Spokane your stop on the way to tip-off. We're at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley — close enough to swing by on your way home from work before the pregame coverage even starts. Running short on time on a weeknight? <a href="/#order">Order ahead online</a> and skip straight to pickup so you're on the couch, not in line, when the ball goes up.</p>

<h2>Building a better watch party spread</h2>
<p>If you're hosting, the easiest move is pairing your usual chips-and-dip table with a couple of bowls or smoothies people can actually treat like a meal. It turns game night from "snacks only" into something that holds people over properly, and it gives the non-chip-eaters in your group something real to reach for. Early-season games are also a good gut check on your own habits before the deep winter slate — Mt. Spokane and Schweitzer open soon too, and the same "fuel before you need it" instinct carries straight over to ski days once the snow shows up.</p>

<h2>The bottom line</h2>
<p>Zag Nation runs on more than nerves and arena noise — the nights you actually feel good through a full game are usually the ones where you ate something real before tip-off. Swing by Everbowl Spokane on your way to the couch or the arena, build your watch party spread around something with real protein and fiber, and you'll make it to the final buzzer without needing a second trip to the pantry.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },

  {
    slug: "winterizing-car-nutrition-early-snow-spokane",
    title: "Early Snow, Early Prep: Winterizing Your Car and Your Nutrition Together",
    description:
      "The first real snow usually lands in the Inland Northwest in November, sometimes sooner. A guide to tackling car winterizing day and resetting cold-weather eating at the same time.",
    category: "Health",
    date: "2026-10-25",
    readMins: 5,
    image: "a0f7344d-7ab1-4371-a11e-ba41e440b4dd.jpg",
    imageAlt: "A spread of fresh superfood bowls and toast from Everbowl Spokane, ready for a winterizing errand day",
    keywords: [
      "spokane winterizing car",
      "inland northwest first snow",
      "cold weather nutrition spokane",
      "everbowl spokane",
      "spokane valley winter prep",
    ],
    body: `<p>Somewhere between now and the first real snowfall, most Inland Northwest households run through the same mental checklist: swap the all-seasons for winter tires, top off the washer fluid with something that won't freeze, dig the ice scraper out of the garage, and maybe throw a blanket and a flashlight in the trunk. The Inland Northwest's first real snow usually shows up in November, but in Spokane Valley it isn't unusual for a cold front to drop an inch or two in late October while the leaves are still half on the trees. Winterizing day tends to get scheduled the same way every year: an open Saturday, a to-do list, and a lot of running between the auto parts store, the garage, and whatever errands got pushed off all fall.</p>

<h2>Why winterizing day wrecks your eating, too</h2>
<p>A car-prep Saturday has a specific rhythm that works against good habits. You're up early because daylight is shorter now, you're moving between cold garages and colder parking lots, and the whole day is built around quick stops rather than sit-down meals. That's exactly the kind of day where coffee and a gas-station pastry quietly become breakfast, lunch gets skipped until you're starving at 2 p.m., and by evening you're running on fumes and reaching for whatever's fastest. The problem isn't that winterizing takes effort — it's that the day has no natural break built in for eating something that actually holds up.</p>

<ul>
  <li><strong>Cold exposure burns through energy faster than people expect.</strong> Standing around a driveway checking tire tread or topping off fluids in 40-degree air takes more out of you than the same hour spent indoors, even without heavy labor.</li>
  <li><strong>Short daylight shrinks the window for "catching up."</strong> If you don't eat something real by midday, there's less daylight left to recover from a sluggish afternoon than there was in September.</li>
  <li><strong>Errand-day food defaults to whatever's fastest, not whatever's best.</strong> Drive-thru lines and gas-station shelves are the path of least resistance when you're bouncing between four stops.</li>
</ul>

<blockquote>Winterizing the car takes one Saturday. Resetting how you eat through the cold months is the habit that actually needs to outlast it.</blockquote>

<h2>Starting the day fueled, not caffeinated</h2>
<p>The easiest fix for a winterizing-day slump is treating breakfast as part of the checklist, not an afterthought squeezed in around it. Our <a href="/#menu">Hot Oats</a> bowl is built for mornings exactly like this one: warm rolled oats with banana and a swirl of peanut butter give you slow-digesting carbohydrate and a little protein that actually holds through a few hours of standing around a cold driveway, instead of the quick spike-and-crash you get from a pastry. Pair it with a <a href="/#sips">Cacao Ice Blended Coffee</a> and you've covered caffeine and a real food component in one cup — useful on a morning when you don't want to stand at a stove, but also don't want coffee to be the only thing in your stomach until noon.</p>

<p>If your winterizing list has you running between the tire shop, the hardware store, and the grocery store all before lunch, a smoothie is the better move than a sit-down meal you don't have time for. Our <a href="/#smoothies">Nanaberry Bliss</a> smoothie travels fine in a cupholder between stops and still delivers real fruit and fiber instead of just sugar and caffeine, which matters when the rest of the day is running on quick decisions.</p>

<h2>Make the stop part of the route, not a detour</h2>
<p>Everbowl Spokane sits at <a href="/#location">13324 E Sprague Ave, Suite 101</a> in Spokane Valley, close enough to most of the auto parts stores and garages along Sprague and Pines that it fits naturally into a winterizing-day loop rather than adding one more stop out of the way. If your Saturday starts earlier than you'd like, <a href="/#order">order ahead online</a> the night before so your Hot Oats or smoothie is ready the moment you walk in, rather than waiting in a line while the clock on your other errands keeps running.</p>

<h2>The habit that outlasts the checklist</h2>
<p>Winterizing the car is a one-day project with a clear finish line — once the tires are swapped and the scraper's in the glovebox, you're done until spring. Eating well through a Spokane winter doesn't work that way; it's the thing you have to keep choosing on every short, cold, low-daylight day between now and March. Using winterizing Saturday as the reset point is a decent trick: if you can get through that one errand-heavy day without defaulting to gas-station food, you've already proven the harder days ahead are manageable too.</p>

<h2>The bottom line</h2>
<p>The first snow is coming, maybe sooner than the calendar suggests, and the Saturday you spend getting the car ready is as good a day as any to get your cold-weather eating habits ready too. Build the morning around something warm and real from Everbowl Spokane, keep a smoothie in the cupholder for the in-between stops, and you'll finish winterizing day with your tires swapped and your energy intact — which is more than most people can say by the time they're done.</p>

<p><em>This article is for general information and is not medical advice. Talk to your doctor or a registered dietitian about your individual needs.</em></p>`,
  },
];
