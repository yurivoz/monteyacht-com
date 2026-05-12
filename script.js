const BOT_TOKEN = '7621515873:AAE4JDcrzlcQ7aSaFJv3hGbb10IOTnQSRpI';
const CHAT_IDS = ['294237889', '-1003430785637'];
const CRM_URL = 'https://dashboard.myyacht.info/api/leads';
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      'send_to': 'AW-18156075003/XeumCIqxmqscEPvvvtFD',
      'value': 1.0,
      'currency': 'USD',
      'event_callback': callback
    });
  } else {
    callback();
  }
  return false;
}
const T = {
en: {
nav_home:'Home', nav_about:'About', nav_yacht:'The Yacht', nav_dest:'Routes',
nav_gallery:'Gallery', nav_booking:'Book', nav_cta:'Book a Day',
hero_eyebrow:'Porto Montenegro · since 2010',
hero_h1:'The Adriatic from the water —<br>the way the captain knows it',
hero_sub:'18 metres. Up to 16 guests. One route — designed around your group. From Kotor to hidden coves under Mt. Orjen, with the grill on board and the sunset on the way back.',
hero_cta:'Book a Day',
stat_1_num:'15', stat_1_label:'Years on the Adriatic',
stat_2_num:'2000+', stat_2_label:'Guests since 2010',
stat_3_num:'4.9', stat_3_label:'Guest Rating',
stat_4_num:'18 m', stat_4_label:'Private Yacht',
about_eyebrow:'Our Story',
about_h2:'15 years on the same coastline',
about_p1:'MonteYacht set out on its first voyage in 2010 — from Porto Montenegro. Since then: over 2,000 guests and the same yacht, fully renovated this season. We\'re not a chain, a franchise, or a cruise operator. We know these waters personally — every cove between Tivat and Kotor, every window for swimming, every time for the golden hour.',
about_p2:'Our captain takes one charter per day. Up to 16 guests for the day, up to 6 with overnight in the renovated cabins. The route is agreed with you the day before departure — at your pace, your preferences, and the weather on the water.',
about_cta:'See the Yacht',
charters_eyebrow:'Charters',
charters_h2:'Choose the length of your day',
charters_sub:'One day — for the cove, lunch, and the sunset. Several days — to fall asleep on the water and wake up in a new bay. We\'ll plan the route around you.',
charter_day_label:'Day Charter',
charter_day_title:'A Day on the Water',
charter_day_desc:'The Bay of Kotor from Tivat to Kotor — stops in coves for swimming and snorkelling, grilled lunch at anchor. For families, groups, and couples.',
charter_day_meta:'4–12 hours · Up to 16 guests',
charter_day_price:'From €2,200 · 4 hours',
charter_week_label:'With Overnight',
charter_week_title:'Several Days on the Water',
charter_week_desc:'Cabins after this year\'s refit, morning coffee on the deck, and an anchor in a quiet cove at sunset. From 2 to 5 nights, route is flexible.',
charter_week_meta:'From 2 nights · Captain & crew 24/7',
charter_week_price:'From €3,000 / night',
charter_cta:'Request Dates',
yacht_h1:'Marea · 18 metres',
yacht_sub:'One and the same yacht since 2010, fully renovated in 2026. Up to 16 guests for the day, up to 6 with overnight.',
yacht_spec_length:'Length', yacht_spec_cabins:'Cabins', yacht_spec_guests:'Guests', yacht_spec_crew:'Crew',
yacht_feat_title:'On Board',
yacht_f1_title:'Grill on the Stern', yacht_f1_desc:'Freshly caught sea bream, tiger prawns, vegetables. We cook at anchor in a cove — while you swim.',
yacht_f2_title:'Water', yacht_f2_desc:'SUP boards, snorkelling masks, inflatable loungers, and an underwater scooter. All on board, nothing to pay extra.',
yacht_f3_title:'Music', yacht_f3_desc:'Bluetooth speakers on the deck and in the cabins. Plug in your own playlist — we don\'t impose ours.',
yacht_f4_title:'Bow Deck', yacht_f4_desc:'Open platform at the bow with mattresses and pillows. The guests\' favourite spot at golden hour.',
yacht_f5_title:'One Captain', yacht_f5_desc:'Since 2010 — our captain. Knows the Bay of Kotor better than charts: where to buy oysters in Kamenari (order from the boat — they bring them out), why the Blue Cave needs to be caught between 11 and 12, in which cove to anchor at sunset with a north-west wind. Yacht Master Offshore, 50,000+ nautical miles across the Mediterranean.',
yacht_f6_title:'Steward on Board', yacht_f6_desc:'Meets you at the dock, sets breakfast, mans the grill, serves drinks. Quietly by your side — never intrusive, always reachable.',
dest_eyebrow:'Routes',
dest_h2:'Four directions — choose your day',
dest_sub:'All four routes start from Porto Montenegro. The captain adapts the timing to the weather and to your group — where to linger, where to sail on, where to stop for a swim.',
dest_places_eyebrow:'What you\'ll see along the way',
dest_places_h2:'Key Spots',
dest_places_sub:'The main places along the coast — Kotor, Perast, Our Lady of the Rocks, the Blue Cave, Luštica. All within a single day charter from Porto Montenegro.',
premium_eyebrow:'Charter Add-ons',
premium_h2:'What you can order',
premium_sub:'Private chef, professional photographer, celebration decor, and underwater scooter — add them one by one, or take the pack of four and save €150.',
multiday_eyebrow:'Overnights on board',
multiday_h2:'Several days on the water',
multiday_sub:'Fall asleep in a quiet cove, wake up to coffee on the deck. Cabins after the full refit — 2, 3, or 5 nights, route is built around you.',
multiday_includes_title:'Overnight rate includes',
multiday_includes:'Everything from the day charter, plus: cabins after the refit · linens and towels · morning coffee service · captain and crew 24/7 · route agreed with you in advance.',
gallery_eyebrow:'Photo Stories',
gallery_h2:'Gallery',
gallery_sub:'Shots from on board Marea and along the Adriatic coast — real days from our guests.',
reviews_eyebrow:'4.9 / 5 · 2,000+ guests',
reviews_h2:'Reviews',
booking_eyebrow:'Get in Touch',
booking_h2:'Write us — we\'ll reply within 2 hours',
booking_p:'No auto-responders, no forms with red asterisks. The route is agreed with you personally — usually within 2 hours during the season (May–October), faster off-season.',
form_name:'Name', form_phone:'Phone or WhatsApp', form_email:'Email',
form_type:'Length', form_type_day:'A Day on the Water', form_type_week:'With Overnight',
form_guests:'Guests', form_dates:'Dates',
form_comments:'Wishes (optional)', form_submit:'Send — we\'ll reply within 2 hours',
form_success_h:'Request Received',
form_success_p:'We\'ll be in touch within 2 hours. If you don\'t see our reply — check the Promotions or Spam folder, emails sometimes end up there.',
faq_eyebrow:'Questions', faq_h2:'What people usually ask',
opt_4h:'4h — €2,200', opt_6h:'6h — €2,400', opt_8h:'8h — €2,600',
opt_12h:'12h — €3,000', opt_24h:'24h — €3,500', opt_multi:'2+ days — €3,000/day',
footer_desc:'Private yacht charter from Porto Montenegro. On the water since 2010.',
footer_nav:'Navigation', footer_dest:'Routes', footer_contact:'Contact',
footer_rights:'All rights reserved.',
nav_blog:'Blog',
promo_text:'10% off dates in May and June — when booked by end of week.',
promo_cta:'See Dates',
badge_insurance:'Insurance for Every Guest',
badge_insurance_desc:'All passengers are insured automatically — no extra fees, no forms. Policy included in the charter price.',
badge_license:'Official Operator',
badge_license_desc:'Licensed by the Maritime Administration of Montenegro. Registry number available on request.',
badge_safety:'Safety to EU Standards',
badge_safety_desc:'Compliant with SOLAS (Safety of Life at Sea Convention) and EU regulations. Life jackets for every passenger, including child sizes.',
reno_eyebrow:'2026 Refit',
reno_h2:'Full refit of the yacht',
reno_sub:'Winter 2025–2026 — we rebuilt both interior and exterior. New sofa upholstery and cabin beds, updated galley and salon, restitched curtains, new coffee machine and Bluetooth speakers. Outside — polished hull and new navigation on the bridge.',
included_eyebrow:'Transparent Pricing',
included_h2:'What\'s Included and What\'s Not',
included_sub:'No hidden fees, no asterisks. Everything included — on the left, everything extra — on the right.',
included_yes:'Included in price',
included_no:'Not included',
blog_eyebrow:'Captain\'s Log',
blog_h2:'Blog',
blog_sub:'Stories, routes, and tips — from a captain with 15 years on these waters.',
blog_read:'Read more',
blog_more_eyebrow:'More stories',
blog_more_h2:'From the captain\'s log',
blog_art1_meta:'Route Guide &bull; 8 min read',
blog_art1_title:'The Ultimate Boka Kotorska Bay Yacht Route',
blog_art1_excerpt:'The southernmost fjord in Europe, seven stops, eight hours. A captain\'s recommended day route through the Bay of Kotor — from Porto Montenegro to Dobrec and back at golden hour.',
blog_art1_intro:'Boka Kotorska — the Bay of Kotor — is often called the southernmost fjord in Europe. Framed by soaring limestone cliffs that plunge straight into deep blue water, dotted with medieval walled towns and tiny island churches, it is one of the most spectacular yacht cruising grounds in the entire Mediterranean. Here is our captain\'s recommended full-day route that reveals every facet of this UNESCO World Heritage site.',
blog_art1_quote:'"After 15 years of navigating these waters, the Bay of Kotor still takes my breath away every single morning. There is simply nowhere else like it." — Captain Alexey',
blog_art1_route_title:'The Route: 8-Hour Day Charter',
blog_art1_s1_time:'09:00 — Departure',
blog_art1_s1_title:'Porto Montenegro, Tivat',
blog_art1_s1_desc:'We depart from Porto Montenegro — one of the Mediterranean\'s most prestigious superyacht marinas. As we leave the harbour, you\'ll see the first glimpse of the bay\'s dramatic mountains rising on either side. Coffee and fresh pastries await you on the sun deck as we set course toward the narrows.',
blog_art1_s2_time:'09:45 — First Stop',
blog_art1_s2_title:'Our Lady of the Rocks',
blog_art1_s2_desc:'We anchor near the iconic islet of Gospa od Skrpjela — a man-made island that local sailors have been building stone by stone since the 15th century. The tiny church houses priceless Renaissance paintings and hundreds of silver votive tablets. The island seems to float in the middle of the bay, framed by mountains on every side — the main photo spot on the route.',
blog_art1_s3_time:'10:30 — Swimming Break',
blog_art1_s3_title:'Perast & the Blue Grotto Cove',
blog_art1_s3_desc:'We cruise past Perast — the most photogenic Baroque village on the coast — its bell towers and stone palaces hugging the waterfront. Just past Perast, we drop anchor in a sheltered turquoise cove where the water is so clear you can see the seabed at 15 metres. Time for the first swim, snorkeling, and water sports — SUP boards, masks, and the underwater scooter are all ready on the swim platform.',
blog_art1_s4_time:'12:00 — Lunch',
blog_art1_s4_title:'BBQ Lunch in the Bay',
blog_art1_s4_desc:'We fire up the onboard BBQ grill for a classic Adriatic lunch — freshly caught sea bream, tiger prawns, grilled vegetables, and local cheese. If you prefer, we can arrange a stop at one of the waterside restaurants in Perast or Stoliv, where the owner rows out to take your order. Lunch on the water, surrounded by 1,000-metre mountain walls, is an experience that never gets old.',
blog_art1_s5_time:'13:30 — Exploration',
blog_art1_s5_title:'Kotor Old Town',
blog_art1_s5_desc:'We sail deep into the inner bay — the water narrows, the mountains soar higher — and anchor off the medieval walled city of Kotor. This UNESCO-listed town dates back over 2,000 years, with Venetian palaces, Romanesque churches, and labyrinthine marble streets. You have time to walk the walls, climb the fortress stairs for panoramic views, or simply wander the atmospheric piazzas and pick up artisan souvenirs.',
blog_art1_s6_time:'15:30 — Afternoon Swim',
blog_art1_s6_title:'Dobrec Beach',
blog_art1_s6_desc:'Leaving Kotor, we head toward the outer bay and stop at Dobrec — a wild pebble beach accessible only by boat. The water here turns a vivid emerald-green where mountain springs mix with the sea. This is the perfect spot for a lazy afternoon swim and some quiet time on the sun deck with a glass of champagne.',
blog_art1_s7_time:'17:00 — Golden Hour Return',
blog_art1_s7_title:'Sunset Cruise Back to Tivat',
blog_art1_s7_desc:'The return journey is timed for golden hour. As the sun drops behind the Orjen mountains, the entire bay turns pink and gold. We pour champagne, the music plays softly, and the yacht glides back toward Porto Montenegro. This final hour — with the warm light, the calm water, and the mountains reflected perfectly in the bay — is the moment every guest remembers most.',
blog_art1_tips_title:'Captain\'s Tips',
blog_art1_tip1:'The best months for this route are June and September — warm water, calm winds, and far fewer tourist boats in the bay. July and August are beautiful but busier at the main stops.',
blog_art1_tip2:'Bring swimwear and sunscreen — you\'ll be in and out of the water all day. We provide towels, snorkeling gear, and SUP boards. For Kotor Old Town, lightweight shoes are recommended for the cobblestone streets.',
blog_art1_tip3:'This route works perfectly as an 8-hour charter (from €2,600) but can be extended to 12 hours (€3,000) if you want a more relaxed pace with extra swimming stops and a sunset dinner on board.',
blog_art2_meta:'Experience &bull; 5 min read',
blog_art2_title:'Sunset Champagne: Why Golden Hour on the Bay Is the Defining Moment of the Charter',
blog_art2_excerpt:'There\'s a moment — around 7pm in late June — when the Orjen mountains cast a warm amber glow across the entire Bay of Kotor. The water turns to liquid gold, and time seems to slow down. Guests often say the return journey is the highlight of the day.',
blog_art2_intro:'There\'s a moment — around 7pm in late June — when the Orjen mountains cast a warm amber glow across the entire Bay of Kotor. The water turns to liquid gold. Time more or less stops for half an hour. If your charter is 8 or 12 hours, this hour is built into the route. We come back to Tivat through the sunset on purpose. On a short 4-hour outing you can\'t catch it — we\'ll be at the dock by 13:00 or 17:00, well before the golden hour.',
blog_art2_quote:'"I\'ve crossed this bay for fifteen years. Thousands of sunsets. And I still cut the engine every time and watch. Guests do the same — they drink champagne and stay quiet for twenty minutes. It\'s the quietest part of the charter." — Captain Alexey',
blog_art2_s1_title:'Why this exact hour',
blog_art2_s1_desc:'Technically — the sun drops behind the Orjen mountains, on the western side of the bay. The mountains are about 1,900 metres high, so the sun hides behind them earlier than it would at the sea horizon. That gives you a double golden light: the sun still hits the eastern mountains, which reflect into the water, while the western side is already in shadow. In June and early July this works between 19:30 and 20:30. In August it shifts to 19:00–20:00. In September — 18:30–19:30. In October sunset is around 17:30 and the light has more red, less gold. In May and October the light is different — low sun, long shadows, but the "warm amber" doesn\'t happen every day. It depends on clouds. The best days are after light rain, when the air is clear.',
blog_art2_s2_title:'How we plan the route around sunset',
blog_art2_s2_desc:'For an 8-hour charter with sunset: depart at 13:00, last stop is Dobrec (after Kotor), leaving there at 17:30. An hour and a half of slow cruising across the bay puts us in Tivat at 19:00. For 12 hours: leave at 10:00, do morning swims plus Kotor plus lunch, then a long stop at Dobrec or Prčanj with dinner on deck. Back by 22:00. The 8-hour Blue Cave route doesn\'t fit the sunset — we\'re back at 17:00. If you want both the cave and the sunset, you need 12 hours or multi-day.',
blog_art2_s3_title:'What we serve',
blog_art2_s3_desc:'Champagne — Veuve Clicquot or Bollinger, on request. A cold glass, ice in the bucket, a small platter of starters: pršut, hard cheese, grapes, sometimes oysters from Kamenari if we managed to order them in the morning. If you don\'t drink — cold sparkling cider or a non-alcoholic cocktail. We don\'t make separate "adult" and "kid" trays — it\'s all on deck, you pick. Standard champagne flutes, no plastic. A small detail, but it matters.',
blog_art2_s4_title:'Who takes the photo',
blog_art2_s4_desc:'The best shot is from the bow, facing the sunset. We bring you or your guests to the bow — mountains behind, golden water below. Shooting into the sun gives silhouettes, the kind people frame later. If you\'ve added the photographer (€200 add-on), this is exactly the hour they work. Most of their shots are this golden hour. iPhone in 18:30 with "Night portrait" mode beats most DSLRs at sunset, so a phone works too.',
blog_art2_s5_title:'What plays',
blog_art2_s5_desc:'Bluetooth speakers on, playlist is yours. We don\'t impose "yacht music". Guests usually pick something slow — Lana Del Rey, jazz, sometimes Russian rock. Once it was Chopin. That worked too. The captain shifts the engine to a quieter mode, speed drops to 7–8 knots. On purpose — so the yacht doesn\'t push noise into the sea and the music.',
blog_art2_s6_title:'What\'s not usually written',
blog_art2_s6_desc:'Sometimes the sunset doesn\'t happen. A cloud over the west, rain over Luštica, mistral pushing the water. Then there\'s no liquid gold — just grey sky and chop. We still open the champagne, just not on deck under the sunset, in the salon with the coffee machine running and a warm blanket. It works too — different scene. We check the forecast a day before the charter. If sunset looks rained out, we offer to move the trip by a day. Not always possible, but we try. And: long-exposure sunset shots from a moving yacht come out slightly blurred. If you want a clean DSLR shot, ask the captain to anchor at Dobrec for ten minutes specifically for the photo. Free, we do it for anyone who asks.',
blog_art2_s7_title:'When to write',
blog_art2_s7_desc:'The sunset route is 8 or 12 hours in season. The best months for the golden hour are June, July, August, September. May and October work but the colour is less consistent. If it\'s a special occasion (proposal, anniversary) — write us two or three weeks ahead and add the photographer (€200). It becomes a day you keep in photos.',
blog_art3_meta:'Food &bull; 5 min read',
blog_art3_title:'From Sea to Grill: BBQ at Anchor in a Cove',
blog_art3_excerpt:'Nothing tastes better than freshly grilled fish with the salt air on your face and the mountains of the Bay of Kotor as the backdrop. The onboard grill is the heart of every charter — where food, laughter, and the open sea come together.',
blog_art3_intro:'Tiger prawns on the grill, the yacht at anchor in a warm cove in the Bay of Kotor, mountains all around. It works. Not because of the recipe — the recipe is ordinary. Because of the salt air and because lunch lasts as long as you want, not the forty minutes a restaurant gives you. The stern grill is an add-on to the charter. You can come without it, but almost everyone with kids or a special occasion orders. It\'s not a "feature" — it\'s a normal lunch, just on the water.',
blog_art3_quote:'"Fish on the grill tastes better when it was caught that morning. And when you can eat it in swimwear with your feet in the water. In a restaurant no one does that — you have to dress up, order, wait. We don\'t have that part." — Captain Alexey',
blog_art3_s1_title:'What we cook',
blog_art3_s1_desc:'The standard set for 4–8 guests: sea bream or sea bass — fresh, that morning, a kilo for two; tiger prawns — large, on the grill in their shells; vegetables — zucchini, peppers, aubergine, sometimes mushrooms; potatoes baked in the embers, plain; local hard cheese on a board; bread — flatbread from a village bakery; pršut, the Montenegrin prosciutto, sliced; olives, mangala style, in oil. That\'s the base. For larger groups we add more fish or octopus. On request we do a vegetarian set — the grill works well with halloumi, mushrooms, zucchini.',
blog_art3_s2_title:'Where we get the food',
blog_art3_s2_desc:'In the morning, in Tivat — the fish market. Sea bream and sea bass from the same fisherman who has given us his morning catch for fifteen years. Prawns from there too. Vegetables — at the market next door, from a woman who knows our steward by name. In Kamenari on the way — oysters. We order them from the yacht, they arrive on a small boat in about twenty minutes. That\'s a separate gastro moment, not lunch: the oysters get opened on deck, we eat them with lemon and a drop of tabasco. Everything is local, same-day. Nothing imported, nothing thawed.',
blog_art3_s3_title:'Who cooks',
blog_art3_s3_desc:'Standard — the steward. Trained on board. He handles the grill, cleans the fish, cuts the vegetables, plates everything. That\'s the standard service, no extra charge. For a special occasion or a larger group (10+ guests) — a private chef as an add-on (€300). Then it\'s an extended menu: 4 courses with wine pairing, agreed two days before the charter. The chef comes on board with the ingredients, cooks on the spot, serves. The difference is simple: the steward is "a good lunch on a yacht". The chef is "restaurant-level on a yacht". Most guests are fine with the first.',
blog_art3_s4_title:'Where we eat',
blog_art3_s4_desc:'Not while cruising. We drop anchor in a quiet cove and have lunch for forty minutes to an hour. Favourite spots for an anchored lunch: a cove near Perast — sheltered, shallow, view of Our Lady of the Rocks; Žanjic — near the Blue Cave on the western Luštica, good for a cave-day route; Morinj — by the mountain springs, water slightly colder but very quiet; Duraševići — across from Stradioti, with a pontoon if you want to step ashore after. The captain picks the spot based on the day\'s weather — where there\'s no wind, where the chop won\'t bother lunch.',
blog_art3_s5_title:'What we pour',
blog_art3_s5_desc:'Standard — white wine, Vranac Beli or Krstač, local Montenegrin. €15–25 a bottle, we bring it. A few bottles in the fridge on board. Prosecco if you want it — there. Champagne on request (Veuve Clicquot, Bollinger — add-on). Non-alcoholic always: lemonade with fresh lemons, sparkling water, mineral water. Tell us at booking what you like — we bring those specific bottles. No markup for delivery, you pay by what you actually drink.',
blog_art3_s6_title:'Prices',
blog_art3_s6_desc:'Standard lunch — €40–60 per person depending on the dishes and group. That includes: fish, prawns, vegetables, bread, olives, cheese, pršut, standard wine. With oysters from Kamenari — add €15–20 per person. With a private chef — €300 flat for the charter, plus ingredients by what\'s used. Paid at the end of the charter — cash or card. No pre-payments for food.',
blog_art3_s7_title:'Alternative — lunch ashore',
blog_art3_s7_desc:'Don\'t want to cook on board? We pull into a coastal restaurant: Perast — several restaurants on the waterfront, the owners know our yacht, you can book a table from the water; Stoliv — a small village between Perast and Kotor, the Conte restaurant has a terrace; Bigova — a fishing village on Luštica, one real fish restaurant with no menu; Rybarsko Selo — if we\'re heading to the Blue Cave, lunch on the dock. Prices roughly the same (€30–50 per person). But we spend an hour and a half on shore — that eats into your time on the water.',
blog_art3_s8_title:'What\'s not usually written',
blog_art3_s8_desc:'In strong wind (mistral, easterly 15+ knots) the stern grill doesn\'t work — smoke and flame can\'t be controlled, fire safety. On those days we switch to cold dishes: cheese, pršut, bread, vegetables, cold seafood — also good, just a different scene. If we plan a grill and the day\'s weather is like that, we warn you in advance. You can either switch to a cold menu or pull into a restaurant ashore. And: the smell of fish and smoke from the grill stays on clothes. Normal for an outdoor BBQ, but if you have dinner in Kotor afterwards — bring a spare T-shirt. There\'s laundry on board but it takes time.',
blog_art3_s9_title:'When to order',
blog_art3_s9_desc:'The grill lunch is added at booking or at most a day before the charter. We agree the menu over WhatsApp the night before — we send photos of the morning catch and you choose. In peak July–August — sometimes we can\'t get top langoustine or octopus (the restaurants take them). Then we switch to prawns or sea bream.',
blog_art7_meta:'Family Charters &bull; 6 min read',
blog_art7_title:'Yachting with kids in Montenegro: what to bring, what to expect, what not to worry about',
blog_art7_excerpt:'Which age fits which charter length, what\'s on board for kids, how we plan the day around their rhythm. Plus what we do when seasickness hits.',
blog_art7_intro:'Half of our family bookings come with worry: "can we bring a three-year-old?", "what if she gets seasick?", "what if he gets bored?". You can. He won\'t get seasick if we plan the day right. He won\'t get bored if we have the underwater scooter, SUP boards, and a steward who knows how to keep children busy. We\'ve had kids of every age. From a one-year-old who slept in her pram on the deck the whole trip, to a 14-year-old boy who asked the captain for a steering lesson and then stood at the helm for half an hour. It all works, with different preparation.',
blog_art7_quote:'"The most common fear parents have is that the child will whine and the day will be ruined. In practice, kids whine in restaurants and hotels. On a yacht — not so much. Too many new things around." — Captain Alexey',
blog_art7_s1_title:'Which age fits which charter',
blog_art7_s1_desc:'Under 2 — we take them carefully. There\'s a shaded area in the cockpit and a cabin with a bed. 4 hours in calm weather, no more. Route: Our Lady of the Rocks plus a swim in Morinj. Ages 3–6: 4 or 6 hours maximum. Children this age tire from sun and novelty. Better short outings with one long swim. Ages 7–10: 6 or 8 hours. They can handle a full day. Can include Kotor with a walk on the walls — kids usually enjoy it. Ages 11+: any charter. Teens behave like adults on the water, just more active. The scooter and SUP boards are their favourite. We don\'t take the Blue Cave route with children under five — that\'s 8 hours, open sea, the run past Luštica can be rough. Not for small kids.',
blog_art7_s2_title:'What\'s on board for kids',
blog_art7_s2_desc:'Child-sized life jackets — two sizes, 10–25 kg and 25–50 kg. Certified, checked. Inflatable loungers for the water — lie on the water without drifting off. Good for kids who can\'t swim yet. Toys — a few inflatable rings, a ball, a bucket and spade (works on pebble beaches), a pair of water guns. Children\'s snorkelling masks — several small sizes. Books — three or four in English, two in Russian, in a box on the deck. Picture books, for preschoolers. A clean cabin with a bed — if the child is tired and wants to sleep, we put them in the cabin. Cool, quiet.',
blog_art7_s3_title:'What to bring with you',
blog_art7_s3_desc:'SPF 50+ sunscreen — kids burn fast. On the water, UV reflects off the surface, double effect. A wide-brimmed hat or sun hat — non-negotiable. We have a couple on board, but adult sizes. Light long-sleeved clothes — for the peak sun hours. On board it doesn\'t get cooler — the sun heats even under the awning. A change of clothes — after swimming kids are wet, the deck is breezy, easy to chill. Dry T-shirt and shorts are a must. A snack your child likes — we have banana, grapes, biscuits on board, but if your kid only eats specific things — bring them. Children may not touch anything from the general spread. Diapers, wet wipes — for younger kids. There\'s a bathroom on board, but it\'s standard, not baby-sized.',
blog_art7_s4_title:'How we plan the day around children',
blog_art7_s4_desc:'If there are kids in the group — the day runs by their rhythm, not by the route map. That means: early swim at 11:00 — while the sun is still soft. Half an hour in the water, then back on deck under shade. Lunch at 12:30 — earlier than for adults. Kids are hungry and cranky by 13:00. Quiet hour 13:30–15:00 — after lunch into the cabin or on deck with a book. The water is hot in this hour, better not swim. Second swim at 15:30 — active games with scooter and SUP. The high point of fun. Return at 17:00 — kids have five active hours in them. After that — fatigue, whining, risk. For an 8-hour charter with kids I recommend leaving at 9:30, back by 17:30. Not longer.',
blog_art7_s5_title:'What to do if a child gets bored',
blog_art7_s5_desc:'It happens. Especially during the hour of cruising between stops, when there\'s not much to look at — mountains and mountains. What we offer: underwater scooter — even an 8-year-old handles it in shallow water, supervised. SUP board with a paddle attachment — kid paddles themselves, parent swims alongside. Fishing from the deck — simple rod, small fish near the dock. Doesn\'t catch every time, but interesting. Binoculars — we give them to kids, they look at the mountains, boats, dolphins (rare, but they happen). Cabin with a TV — if completely worn out, you can put cartoons on in the cabin. The steward is trained to keep kids busy — that\'s his job when parents want to nap or read.',
blog_art7_s6_title:'If seasickness hits',
blog_art7_s6_desc:'In the Bay of Kotor it usually doesn\'t happen — closed waters, minimal swell. Seasickness starts at the exit from the bay into open sea (the Blue Cave route, for example). If you know your child gets seasick: tell us at booking, we\'ll plan the route inside the bay only. Ginger sweets — we have them on board, but bring your own usual ones. Don\'t feed them heavy food before the trip — light breakfast, nothing greasy. If it starts — lay them down in the cabin, looking at the horizon, sometimes stopping at shore for ten minutes helps.',
blog_art7_s7_title:'What\'s not usually written',
blog_art7_s7_desc:'Kids change the tone of the charter. With them you can\'t "have champagne quietly at sunset" — there will be shouting and running around. It\'s fine, but adult guests sometimes don\'t expect it. If you have a mixed group (your couple plus friends without kids) — warn the others, the day will be more active, less "relax". And: sometimes children just don\'t last. Once a year: tired, cold, asked "when do we go home" and nothing else works. In that case we return early — no penalties, no discussion. Charter time is flexible both ways.',
blog_art7_s8_title:'When to write',
blog_art7_s8_desc:'At booking, give us the ages of the children — it matters for picking the route, size of life jackets, menu. If a child needs something specific (no gluten, no dairy, favourite toy instead of ours) — tell us too. We prepare a day in advance. In season, family slots fill up fastest — write at least a week ahead, two weeks in July and August.',
blog_art8_meta:'When to Visit &bull; 6 min read',
blog_art8_title:'June or September: which month is best for a Montenegro yacht charter',
blog_art8_excerpt:'Water temperature, crowds, wind, prices, sunsets — eight parameters comparing June and September. With a note about July and August at the end.',
blog_art8_intro:'Everyone says "June and September are the best time in Montenegro". That\'s true — but it doesn\'t mean they\'re the same. There\'s 4°C of water-temperature difference between them, different wind patterns, different views on the mountains, and different prices. If you\'re choosing between these two months — this is for you. If you\'re still deciding about July-August — there\'s a note about that at the end too.',
blog_art8_quote:'"In fifteen seasons I can\'t pick a favourite month. In June the bay smells different — those are wildflowers on the mountains. In September the light is different — the sun is lower. They\'re just two different summers." — Captain Alexey',
blog_art8_s1_title:'Water temperature',
blog_art8_s1_desc:'June: 22°C at the start of the month, 24°C by the end. Swimming is comfortable all month, but in the first half it\'s bracing. September: 24°C at the start, 22°C by the end. The mirror of June. Warm water holds until around the 20th. In July-August water is 26-27°C — almost like a bath, ideal for kids.',
blog_art8_s2_title:'Air temperature',
blog_art8_s2_desc:'June: 25-28°C in the day, 17-19°C at night. If your charter leaves at 9 in the morning, you\'ll want a light jacket — it\'s still cool on the water. September: 26-29°C in the day, 18-20°C at night. Slightly warmer than June. First half is still summer, second half is already autumn. In July-August it\'s 30-34°C in the day. On the deck under the sun without shade — unbearable. Everyone wants to be in the water.',
blog_art8_s3_title:'Crowds',
blog_art8_s3_desc:'June: tourists are there, but Kotor isn\'t packed. On the Perast waterfront you can sit down at a restaurant without a booking. At the Blue Cave at noon — 3 to 5 boats at once, a 10-minute wait. September: similar to June, but by the 20th it\'s almost empty. Cruise ships come to Kotor with older tourists (not families), evenings are quieter. July-August: peak. The cave queue is 20-30 minutes, Kotor is crowded, restaurants need bookings. Anchorages full by 10am.',
blog_art8_s4_title:'Prices',
blog_art8_s4_desc:'June: standard. 8-hour charter — €2,600. September: standard until the 15th, 10% off in the second half. May, October: 10-15% off. Coves are empty, prices are friendly, but the water is too cool / cooling for long swims. July-August: 10-15% premium on peak dates (15 July — 15 August). Slots fill a month ahead. If budget matters — October gives the best price-to-experience ratio. If your own comfort matters — first half of June and first half of September.',
blog_art8_s5_title:'Wind',
blog_art8_s5_desc:'In the Bay of Kotor the wind is mild all year — the mountains protect. But some days it picks up. June: a calm month. Steady. The mistral kicks in maybe once every week or two, blows for half a day. September: storms are more frequent, especially in the second half. The easterly bura is cold and unpleasant. Passes in 2-3 days. If you need guaranteed daily outings — June. In September you can get a day when the wind doesn\'t let us do the full route (we switch to a short loop inside the bay).',
blog_art8_s6_title:'Daylight and sunset',
blog_art8_s6_desc:'June: the sun sets at 20:30. Long evenings, golden hour 19:00-20:00. September: sunset is 18:30 (start) — 17:45 (end). Days are shorter, but the light in the sunset is more "gold" — because the sun is lower. For a 12-hour charter with a sunset — both months work. But in June the sunset is later, you can have dinner on deck after returning. In September it gets dark faster after sunset.',
blog_art8_s7_title:'What\'s in season',
blog_art8_s7_desc:'June: wild herbs on the mountains, the smell of lavender and thyme. From anchor at Morinj you can smell them from the water. Pomegranate trees bloom in Perast. September: figs are ripe. At the Tivat market — wet, sweet, €3-4 per kilo. Grapes in the valleys. Smells of earth, not flowers. It\'s a small thing, but if you like specific scenes — June is "spring with flowers", September is "early autumn with harvest".',
blog_art8_s8_title:'What to do on a bad day',
blog_art8_s8_desc:'Happens rarely, but it happens. In June: if there\'s a storm — we switch to a short route inside the bay (Perast, Our Lady of the Rocks). The storm lasts a day, the next is normal again. In September: bura can blow for 2-3 days. If your day catches it — we offer to move to the next available date, free. In July-August: weather is stable, but sometimes a thunderstorm rolls through in the evening. We skip the evening outing if the forecast is serious.',
blog_art8_s9_title:'What\'s not usually written',
blog_art8_s9_desc:'In June the bay smells of mountain flowers. That\'s not marketing — it\'s a specific scent of lavender and thyme that drifts down to the water in the morning. By July it\'s gone. In September there\'s a moment in the second half — day is still summer, morning is already crisp autumn. You can swim in the day and have hot tea on deck in the morning. A rare combination. And: September is very different from first half to second. 1-15 September is summer. 16-30 is already autumn in the mountains and in the air, even though the water is still warm. If you want guaranteed summer — first half.',
blog_art8_s10_title:'If picking a specific window',
blog_art8_s10_desc:'5-25 June — the most stable days of the season. Warm water, few tourists, flowers. 5-15 September — ideal if you want water slightly warmer than June and the same empty coves. 20-30 May or 20-30 October — great pricing, empty coves, but water is on the edge (18-20°C). Not recommended: mid-July to mid-August for anyone who wants quiet. Only if you\'re here for active beach time or with older kids who want warm sea.',
blog_art9_meta:'Gastro Guide &bull; 6 min read',
blog_art9_title:'Oysters and Prawns in the Bay of Kotor: where to buy and why from a yacht',
blog_art9_excerpt:'In Kamenari oysters come to your yacht. At Miloš you grab live prawns from the pier. Local farms, prices, seasons — a captain\'s gastro guide.',
blog_art9_intro:'In Kamenari you can order oysters directly to your yacht. A dozen arrives by small boat in about twenty minutes — no fuss, no packaging, the way the locals eat them. Restaurants in Kotor don\'t do this, guidebooks don\'t mention it, but oyster farms have lived in the bay for two hundred years. If you\'re booking a charter and you love seafood — this is what to order, from whom, and why from the water.',
blog_art9_quote:'"For a long time I didn\'t understand why our oysters tasted better than the ones in French restaurants. Then I got it — it\'s not about the mollusks, it\'s about how they get eaten. Ten minutes from sea to deck is a different product." — Captain Alexey',
blog_art9_s1_title:'Oysters from Kamenari',
blog_art9_s1_desc:'Kamenari is a village on the south side of the bay, by the ferry crossing. Family oyster farms work here — four or five, mostly from the Radović family. What they grow: Ostrea edulis — the European flat oyster. Not the round Pacific kind sold in supermarkets. The European has a more mineral taste, less of the "ocean sweetness", and a clearer note of iodine and metal. The French call it plate, the Italians piatta. How to order from a yacht: along the way to Kotor or Perast, passing Kamenari, we call the farm. Fifteen to twenty minutes later a small motorboat brings the order. On deck — opened oysters on ice, or closed with a knife and glove (in case you want to do it yourself). Pay cash directly to the boat. The price is €12-18 per dozen depending on size. Best season: September to March. Summer — they\'re there, but smaller and less deep in flavour. Winter is peak.',
blog_art9_s2_title:'How we serve them',
blog_art9_s2_desc:'Standard — on ice, with lemon wedges, sometimes a drop of tabasco or a teaspoon of mignonette (wine vinegar with shallot). Bread and butter on the side. No over-engineered sauces. The local tradition is simple: oyster, lemon, dry white wine. With oysters we open Krstač — a Montenegrin dry white. Produced on the slopes near Skadar Lake. Mineral, not sweet, good with shellfish. A bottle is €18-25, we usually have two on board.',
blog_art9_s3_title:'Prawns from Miloš',
blog_art9_s3_desc:'Miloš is a fisherman from Prčanj, with a spot at the dock halfway to Kotor. Not a shop, not a restaurant — just a pier where he sorts his morning catch. We pull in here on the way to Kotor — it\'s the midpoint. Tender to the pier, pick from what\'s there. What\'s usually available: tiger prawns — €25-35 per kg; blue langoustines — €40-60 per kg (when in season); pink scampi — €18-25 per kg; sometimes lobster (€80+, rare). Best season: May to October. In winter Miloš isn\'t on the water. We take the prawns alive and grill them in the same cove within an hour of buying. That "from sea to plate in an hour" only works on the water.',
blog_art9_s4_title:'What else worth trying',
blog_art9_s4_desc:'Black mussels — dagnji in Montenegrin. In season (August-October) — €8-12 per kg. We cook them with white wine, garlic, parsley. Eat from the common pot, dipping bread in the broth. Sea urchin — jež, in Bigova. Served fresh, you eat it with a spoon straight from the shell. Locals consider it a delicacy, tourists often don\'t understand. Season — summer. Sea bream or sea bass — standard grill fish. Morning catch from Tivat, a kilo for two. €18-25 per kg.',
blog_art9_s5_title:'A specific moment — oysters on the water at sunset',
blog_art9_s5_desc:'This is a scenario we suggest for romantic dinners: 12-hour charter, last stop near Perast or Prčanj, we order a dozen oysters + a bottle of Krstač + sunset. Guests pay separately for oysters and wine (about €40-50 per couple), but the effect is a different day. Not "lunch with seafood", a scene.',
blog_art9_s6_title:'What\'s not usually written',
blog_art9_s6_desc:'In peak season (July-August) Kamenari may not have oysters in the quantity you want. Tourist restaurants in Kotor and Budva buy them in the morning from the farm. We call the day before and reserve. If you have an 8-hour charter with oysters — better to mention at booking. The prawns at Miloš sometimes sell out early too — by 11am on the pier there may be nothing left, especially Saturday. If breakfast on the boat is planned with prawns, we WhatsApp him the day before. And: not all tourists like the local flat oysters. They\'re used to sweeter Pacific ones, and the European plate has a more metallic taste. That\'s not "bad" — it\'s a different flavour. Try one before ordering a dozen.',
blog_art9_s7_title:'How to add it to your charter',
blog_art9_s7_desc:'At booking, say: "we want oysters from Kamenari" or "drop by Miloš for prawns". We plan the route around it, call the farms in the morning, pick up along the way. Not a separate premium add-on — it\'s part of the route. You pay for the food directly (€30-80 for the group, usually). We charge nothing for the organising.',
blog_art10_meta:'History on the Route &bull; 7 min read',
blog_art10_title:'Submarine Docks and Mamula Fortress: history on the Blue Cave route',
blog_art10_excerpt:'Yugoslav submarine tunnels and a 19th-century Austro-Hungarian fortress that became an Italian camp, then a luxury hotel. The history most boats pass without telling.',
blog_art10_intro:'At the exit from the Bay of Kotor into the open sea — two sites that few people understand from the water. Tunnels cut into the rocks under Luštica, where Yugoslav submarines once docked. And the Mamula fortress in the strait — an Austro-Hungarian structure from 1853 that became an Italian concentration camp in WWII and a luxury hotel in 2023. Both are part of the route to the Blue Cave. Most tourist boats pass without comment. Guests interested in history usually ask us to slow down.',
blog_art10_quote:'"These walls aren\'t a tourist attraction — they\'re a reminder that the bay wasn\'t always just a beach. Military bases stood here, prisons, and you can still see the marks. If you want to understand Montenegro on a deeper level — it\'s worth a stop." — Captain Alexey',
blog_art10_s1_title:'Lora submarine docks',
blog_art10_s1_desc:'On the southern side of the Luštica peninsula, in an area called Lora. This was a former naval base of Yugoslavia — built in the 1960s, in use until 1992. What was there: the base served the submarine fleet of the Yugoslav People\'s Army. The tunnels were cut straight into the rock — you enter on a small boat and have 50 metres of mountain over you. That protected the subs from a nuclear strike. The tunnels are wide enough to turn around inside. What\'s there now: abandoned since 1992, after Yugoslavia\'s collapse. The tunnels are open from the sea, you can approach close. You can\'t go inside — it\'s a restricted area (private or military, not entirely clear). From the water you see the entrances — four large arches in the rock, about 15 metres tall each. How we view it: we cruise along the shore at 50-100 metres, slow the speed. The captain narrates. For photos — a couple of points, takes about five minutes. It\'s not a "stop", it\'s a moment on the route to the cave. Abandoned military engineering in the rocks is a rare sight on standard tourist routes.',
blog_art10_s2_title:'Mamula fortress',
blog_art10_s2_desc:'A small island in the strait between Luštica (Montenegro) and Prevlaka (Croatia), right at the exit to the open sea. What it was: 1853 — built by Austro-Hungarians, used to defend the entrance to the bay. Seventy cannons. 1942-1943 — Italian-occupied, used as a concentration camp for Montenegrin and Croatian partisans. Estimates range from 100 to 130 prisoners died there. 1945-1990s — Yugoslav military facility. 2000s — abandoned. 2023 — opens as Mamula Island Resort, €15 million reconstruction. What\'s there now: a luxury hotel, minimum €1,500 per night. Inside — the reconstructed fortress with modern interiors. Pier for guests, restaurant, spa. Can you go ashore: only if you\'re a hotel guest. From the yacht, photo-stop, circle around (about 15-20 minutes for a full loop), view the bastions from the sea. What you see from the water: old stone walls, bastions, dark window cavities, now with the white umbrellas of the hotel over them. The contrast between medieval defence and modern luxury is photogenic. Locals don\'t love it.',
blog_art10_s3_title:'What guidebooks write vs what locals say',
blog_art10_s3_desc:'Guidebooks write "Austro-Hungarian fortress" and sometimes mention the Italian camp as a footnote. In the villages around — a different memory. Luštica families remember the names of those who died there. The 2023 hotel opening was met with protests — locals feel a place with this history shouldn\'t become entertainment for the wealthy. It\'s a complicated point. We don\'t comment on politics, but if guests are interested — we tell both sides. The history matters more than the photo.',
blog_art10_s4_title:'How it fits into the route',
blog_art10_s4_desc:'All three sites (docks + Mamula + Blue Cave) are on the same trajectory — southwest of Tivat. Standard cave route: 9:00 — depart Porto Montenegro; 9:45 — pass along Luštica, by the submarine docks (5-7 minutes slowing down for photos); 10:30 — photo stop at Mamula (15-20 minutes around); 11:00-12:30 — Blue Cave in the light window; 13:00 — lunch in Rybarsko Selo or Fort Rose; 14:30+ — back. If your 8-hour charter includes the cave — the docks and Mamula are built in. If you want a deeper history focus — that\'s a 6-hour charter without the cave, focused on the fortress and the fjord with historical stops.',
blog_art10_s5_title:'What\'s not usually written',
blog_art10_s5_desc:'The submarine docks are an empty base. Not an "open museum", not a "historical site for tourists". They\'re abandoned tunnels in the mountains. Without a captain who knows how to narrate, you just see black arches in the rock. With a captain — you hear the context: how Tito\'s navy used the bay, why here, what it defended. Mamula in 2026 is a contested place. When the hotel was being built, there were protests in Luštica and Herceg Novi. They\'ve quieted, but if you talk to a local — don\'t be too enthusiastic about the "beautiful hotel". It\'s a sore subject. And: not all our guests care about history. Some came to swim, not for lectures. In that case we pass the docks and Mamula without commentary — just cruise by. Tell us at booking what level you\'re comfortable with.',
blog_art10_s6_title:'When the Mamula stop works best',
blog_art10_s6_desc:'For photos — morning 9:30-10:30 or sunset 18:00-19:00. Morning light from the east hits the bastions well. Evening — golden glow on the old walls. To avoid crossing paths with hotel guests and their tenders — better a weekday, not the weekend.',
blog_read_also:'Read also',
blog_art4_meta:'Route Guide &bull; 7 min read',
blog_art4_title:'The Blue Cave in Montenegro: why timing it for 11–12 matters',
blog_art4_excerpt:'The Blue Cave lights up for two hours a day. From 11 to 13. After — it\'s a grey grotto. Why tourist boats arrive at three, and why we always leave at 9.',
blog_art4_intro:'The Blue Cave lights up for two hours a day. From 11 to 13. After that — it\'s a grey grotto, like any other. Most tourist boats bring guests in at three in the afternoon. Their photos come out a dull blue, and on Instagram it gets blamed on filters. They were simply late. The light in the cave isn\'t marketing. It\'s physics: when the sun is at the right angle, a beam passes through the underwater entrance, hits the white sandy floor, and lights the water from below. The window is about ninety minutes a day.',
blog_art4_quote:'"I\'ve been coming here for eight years. I still can\'t predict which day will be brighter — it depends on clouds, the tide, and, I suspect, the mood of the sea. But the 11-to-13 window is steady." — Captain Alexey',
blog_art4_s1_title:'What is the Blue Cave',
blog_art4_s1_desc:'Plava Špilja, locally. A natural cave on the Luštica peninsula, on the western side where Kotor Bay opens to the sea. There\'s no access by land — only by boat. The entrance from the sea is narrow; inside, the cave widens into a chamber the size of a training pool. Under the water, a short submerged corridor lets the light through. The water inside is three to four metres deep. You can sail in, cut the engine, and hear only the echo of water against rock.',
blog_art4_s2_title:'Why exactly 11–12',
blog_art4_s2_desc:'Technically — the sun needs to be high enough for the beam to pass through the underwater entrance. And high enough that the beam doesn\'t fade through the water column. The angle works between 10:45 and 13:15, but the strongest glow is around noon. In June and September the window is slightly wider — the sun is nearly overhead. In May and October it\'s shorter, you have to time it precisely. From November to April there\'s barely any light — the cave goes grey.',
blog_art4_s3_title:'How we plan the trip',
blog_art4_s3_desc:'From Porto Montenegro to the cave it\'s two hours of steady cruising. So we leave at 9:00, and at 11:00 we\'re at the entrance. Two places along the way you don\'t pass by. The submarine docks under Luštica — a former Yugoslav military base, tunnels cut straight into the rock, the boats are gone but the tunnels are open from the sea. And Mamula island with its 19th-century Austro-Hungarian fortress. We spend thirty to forty minutes in the cave: we enter, cut the engine, swim, take photos.',
blog_art4_s4_title:'Where to have lunch',
blog_art4_s4_desc:'We usually head to Rybarsko Selo — a fishing village just east of the cave. A small restaurant right on the dock. We eat what was caught that morning. No menu — you ask what they have and you order. If you\'re lucky, it\'s sea bream or sea bass, a kilo for two. The alternative is Fort Rose on the Herceg Novi side, inside the walls of a former Austro-Hungarian fortress. More expensive, more of a "restaurant" feel. If you\'d rather not go ashore — let us know in advance, we fire up the stern grill at 13:30.',
blog_art4_s5_title:'What\'s next after lunch',
blog_art4_s5_desc:'We head back across the bay with a stop at Stradioti island. A swim in the open sea before the enclosed waters of the bay — your last chance before the run back to Tivat. In August the water is still 25°C, in September 22°C, in October about 19°C, but on a sunny day you can still get in.',
blog_art4_s6_title:'What to bring',
blog_art4_s6_desc:'Swimwear — you\'ll be in the water for at least an hour during the day. A GoPro or phone in a waterproof case — there are a few shots inside the cave that no land-based photographer can catch. Light clothes — Rybarsko Selo doesn\'t mind shorts. Sunscreen — you\'ll be on the sun deck for three hours on the way back. You don\'t need fins: the cave is shallow inside.',
blog_art4_s7_title:'What\'s not usually written',
blog_art4_s7_desc:'In July and August there\'s a queue at the entrance — water taxis from Herceg Novi bring tourists in batches. We wait ten or fifteen minutes for the window. While we wait, we open champagne on the deck, no one complains. If on the day of the charter the easterly wind is stronger than 15 knots — the cave is unsafe to enter. We decide ahead of time and switch to the Kotor Bay route. That\'s not a backup — it\'s a different day, also a good one, just different. And: sometimes the light in the cave isn\'t what it could be — a cloud sits over Luštica, or there\'s chop. The photos still come out — just not "liquid neon", more like "muted blue".',
blog_art4_s8_title:'When to write',
blog_art4_s8_desc:'Slots for the Blue Cave during high season fill up two to three weeks in advance. In July and August — a month ahead. If you have a specific date — write to us right away, we\'ll check the forecast and lock it in. The route runs as an 8-hour charter — €2,600. It can be stretched to 12 hours (€3,000) if you\'d like to add an evening swim and sunset on the deck.',
blog_art5_meta:'Transparent Pricing &bull; 6 min read',
blog_art5_title:'4 hours on a yacht from Tivat for €2,200: what\'s in, what\'s not, and is it worth it',
blog_art5_excerpt:'€2,200 for 4 hours means €550 per hour for the whole yacht (up to 16 guests). What\'s included, what\'s not, and when 6 hours is the better call.',
blog_art5_intro:'€2,200 for 4 hours is €550 per hour for a yacht for up to 16 guests. For a group of ten that\'s €220 per person for half a day in the Bay of Kotor. Less than dinner with wine at an average Kotor restaurant. This is the shortest charter we run. Half of guests take it because they\'re in Montenegro for a single day — between a cruise and a bus. The other half are families with kids under eight, who don\'t last more than four hours on the water.',
blog_art5_quote:'"Four hours is one outing. Not a tourist route — literally one spot where it\'s nice to swim and see the bay. Want more? Take six." — Captain Alexey',
blog_art5_s1_title:'The 4-hour route',
blog_art5_s1_desc:'We leave Porto Montenegro. Half an hour into the Bay of Kotor — past the Kamenari ferries, between the mountain walls on either side. We stop at one spot for a swim. Most often it\'s Our Lady of the Rocks — Gospa od Škrpjela, a man-made island with a small Baroque church, built stone by stone since 1452. Anchor nearby, swim in water clear enough to see the seabed at ten metres. Alternative — by weather or by request — is Morinj, a quiet cove at the foot of the mountains. The water there is slightly colder from mountain springs, but no one\'s around. Or Perast — moor for an hour, walk the waterfront. An hour and a half on the stop. Then back to Tivat. We don\'t reach Kotor: that needs at least six hours to be done properly, not "rush and run".',
blog_art5_s2_title:'What\'s included in €2,200',
blog_art5_s2_desc:'The yacht Marea (18 metres) with captain and steward. Fuel within the 4-hour route. A welcome drink when you arrive — a glass of prosecco or a non-alcoholic cocktail. Swim gear: SUP boards, snorkelling masks, inflatable loungers, an underwater scooter. Insurance for all passengers — automatic, no extra line on the bill. Bluetooth speakers — plug in your own playlist. Towels, ice, water, fruit — the steward brings them without being asked. No port fees. We\'re based at Porto Montenegro, so leaving from our home marina costs nothing extra.',
blog_art5_s3_title:'What\'s not included',
blog_art5_s3_desc:'Food. Lunch or snacks — on request, paid separately. Two ways: (1) Grill on the stern — we buy ingredients beforehand and cook on the water. Sea bream, tiger prawns, vegetables, local cheese — usually €40–60 per person. Good if you want to stay at anchor and not go ashore. (2) Buy from the water — oysters can be ordered directly from the yacht in Kamenari (delivered to the boat in about twenty minutes), or a seafood platter from a waterside restaurant near Prčanj or Perast. Alcohol beyond the welcome drink — bring your own or order through us. The welcome glass is included, anything more is by the bottle. Premium add-ons — chef, photographer, celebration decor, extra hours — added at booking. Prices on the routes page.',
blog_art5_s4_title:'Who 4 hours is for',
blog_art5_s4_desc:'Families with kids under eight — kids don\'t last longer on the water: sun, wind, new place. Four hours is a good first yacht for a child. Guests passing through — arrived in Tivat in the morning, flying out to Dubrovnik in the evening. Between morning and evening, four hours on the water. People who aren\'t sure — not certain you\'ll enjoy a day on a yacht? Take four hours. If you like it, book eight next time.',
blog_art5_s5_title:'When to take 6 or 8 hours instead',
blog_art5_s5_desc:'If you want to reach Kotor — you need six hours minimum. An hour and a half there, an hour and a half back, at least an hour at Kotor itself. Four hours won\'t do it. If you want the Blue Cave — that\'s an 8-hour route (€2,600). The light in the cave works between 11 and 13 — a short charter doesn\'t fit the window. If you want a sunset on the water — go 8 or 12 hours. The golden hour in summer is 19:30–20:30. A 4-hour charter ends back at the marina by 13:00 or 17:00, nowhere near sunset.',
blog_art5_s6_title:'What\'s not usually written',
blog_art5_s6_desc:'Four hours is the minimum that makes sense. Less than that is just a boat ride. We\'re happy to do four hours when there\'s no other option (one day in Montenegro, a small child). But if you have a choice between 4 and 6 — take 6. €200 difference (€2,400) buys you Prčanj and the cathedral, or half an hour in Kotor. It changes the day. And: the welcome drink is one glass, not an open bar. If you plan to drink more — tell us at booking, we\'ll have a bottle in the fridge on board.',
blog_art5_s7_title:'When to write',
blog_art5_s7_desc:'In season, 4-hour slots are sometimes available the same week — short outings fill up last. In July and August, write at least a week ahead.',
blog_art6_meta:'Captain\'s Spots &bull; 8 min read',
blog_art6_title:'5 anchorages on the Montenegrin coast where tourist boats don\'t go',
blog_art6_excerpt:'Plavi Horizont, Žanjic, a secret beach past Sveti Stefan, Bigova — five anchorages a captain finds when he\'s tired of crowds.',
blog_art6_intro:'Kotor, Budva, Sveti Stefan. Every guidebook and every tourist boat knows these three. By 1 pm they\'re full — boats, crowds, parking three rows deep. If you want quiet, there are five spots along a half-day route where tourist boats don\'t come. All of them are reachable only by boat. On some, we\'re still anchored alone in August.',
blog_art6_quote:'"In fifteen years I\'ve found places even the local water taxis don\'t go. Not because they\'re secret — because they\'re not worth the trip in groups. Too quiet, nothing to show on camera." — Captain Alexey',
blog_art6_s1_title:'1. Plavi Horizont',
blog_art6_s1_desc:'On the southern side of Luštica, west of the Blue Cave. Plavi Horizont means "blue horizon". This isn\'t a beach — it\'s a large open bay facing the Adriatic. The water is deep right at the entrance — we anchor and swim. The seabed is white sand, water in August is 25–26 °C. No restaurants on shore, no crowds. Sometimes two or three sailing yachts at anchor, that\'s it. The convenient part: it\'s on the way back from the Blue Cave. If you have an 8-hour charter with the cave, Plavi Horizont fits naturally into the afternoon.',
blog_art6_s2_title:'2. Žanjic',
blog_art6_s2_desc:'Right next to the Blue Cave, but technically a different cove — to the west. Most tourist boats stop at the cave entrance for twenty minutes and move on. They skip Žanjic. Here — a pebble beach at the foot of the cliffs, crystal water 4–6 metres deep, no buildings on shore. One small café-bar over the water, often closed. A good spot for a second swim after the cave. In July, 5–7 yachts at anchor; in September, two or three; in October — silence and an empty beach.',
blog_art6_s3_title:'3. Secret beach past Sveti Stefan',
blog_art6_s3_desc:'South of Sveti Stefan, before reaching Budva. A small pebble beach hidden behind a cape. From land — only a footpath through the rocks that no one uses. From the water you can see a staircase running up to someone\'s private villa. The beach itself is public, but you can only reach it if you know the spot. We anchor twenty metres off, drop the scooter, and ride to the beach — fifteen minutes. Filmed from above by a drone — nothing special. On the beach itself, in July: five people, not five hundred.',
blog_art6_s4_title:'4. Bigova',
blog_art6_s4_desc:'A fishing village on the Luštica peninsula with a small marina. Fifty families live here, and there\'s one real fish restaurant — no menu, no sign, just chairs on the dock. We drop anchor in the bay and take the tender ashore. We ask what they caught that day. We order without discussion — what\'s there, we eat. Usually sea bream, sometimes octopus, sometimes something you haven\'t tried in Kotor. Bigova is a 1.5-hour lunch stop, not a quick visit. It fits well into the 8-hour "Secluded" route (#4). Pay at the table, prices €30–50 per person with wine.',
blog_art6_s5_title:'5. Anchorage on the way back, with a view of Luštica Bay',
blog_art6_s5_desc:'No official name. Just a cove on the western side of Luštica, between the headland and the entrance to the Bay of Kotor. Good for an hour-long stop before the run back to Tivat. What sets it apart: from anchor you have a direct view of the Luštica Bay marina — modern resort, new buildings, white yachts at the docks. The contrast: you\'re sitting in a wild cove, looking at a polished resort that goes for €10,000 a night. The water is deep — about six metres. Kids swim in rings off the steward, adults jump straight from the deck.',
blog_art6_s6_title:'What else worth knowing',
blog_art6_s6_desc:'Beyond these five, we offer two more spots on request: Duraševići — a restaurant across from Stradioti with a dock for yachts. A beautiful view of the bay, very calm. Good for dinner around sunset. Rose — on the eastern Luštica shore, near the Adriatic exit. A quiet pebble beach, usually one or two yachts. On the way to the Blue Cave. In low season (May, October) we add spots that aren\'t reachable in summer because of crowds — for example, Perast empty at 10 am in May. That\'s a different conversation.',
blog_art6_s7_title:'What\'s not usually written',
blog_art6_s7_desc:'Not all of these work in any weather. Plavi Horizont is unsafe in a strong westerly wind — it\'s an open bay. On those days we skip it. In July and August even the "secret" spots get less quiet. Sailing yachts are regulars at Plavi Horizont in high season. If you want real silence — go June or September. And: Bigova is a village, not a tourist brand. If you arrive on a Saturday lunch in August, there may not be a free table. We call ahead from the boat, usually they hold one for us.',
blog_art6_s8_title:'How to fit these into a route',
blog_art6_s8_desc:'All five fit into Route #4 "Secluded Escape" (8 hours, €2,600). On request we build any combination — usually 2–3 spots per day, with lunch and swimming. Some of them can also be added to Route #3 "Luštica Bay" (6 hours, €2,400) — for example, swap Almara Beach Club for Žanjic + Plavi Horizont if you want no music and no cocktails.',
pricing_eyebrow:'Transparent Pricing',
pricing_h2:'Charter Rates',
pricing_sub:'Choose the length. We\'ll plan the route around you.',
pricing_4h:'4 Hours', pricing_6h:'6 Hours', pricing_8h:'8 Hours',
pricing_12h:'12 Hours', pricing_24h:'24 Hours', pricing_multi:'2+ Days',
pricing_perday:'per night',
ig_eyebrow:'Instagram',
ig_h2:'@yacht.mne',
ig_sub:'Every week — shots from the water: routes, sunsets, the grill on board.',
ig_cta:'Open on Instagram',
sub_eyebrow:'Newsletter',
sub_h2:'Discounts and open dates — once a month',
sub_p:'One email per month: open windows in the schedule, seasonal discounts, and the captain\'s notes on the best routes for the current month.',
sub_cta:'Get emails',
sub_note:'No spam. Unsubscribe in one click.',
sub_success:'Done. The next email arrives at the start of next month.',
sub_sending:'Sending...',
sub_error:'Something went wrong. Please try again.',
meta_title:'MonteYacht — Private Yacht Charter from Porto Montenegro',
meta_desc:'Private charter aboard the 18-metre Marea in the Bay of Kotor. Up to 16 guests for the day, up to 6 with overnight. Captain with 15 years experience. Reply within 2 hours.',
nav_gift:'Certificate',
gift_eyebrow:'Gift',
gift_h1:'Gift a day on the water',
gift_sub:'A certificate for a private charter on the Montenegrin coast. We send a beautiful PDF within 2 hours of ordering — forward it to the recipient or print it out.',
gift_how_eyebrow:'Simple',
gift_how_h2:'How It Works',
gift_step1_h:'Choose Your Gift',
gift_step1_p:'Pick an amount or a route below.',
gift_step2_h:'Fill in the Details',
gift_step2_p:'Tell us the recipient\'s name and add a personal message.',
gift_step3_h:'Receive the Certificate',
gift_step3_p:'The PDF arrives in your inbox within 2 hours.',
gift_options_eyebrow:'Amount or route',
gift_options_h2:'Options',
gift_tab_amount:'By Amount',
gift_tab_package:'By Route',
gift_amt_500:'A taste of the Adriatic',
gift_amt_1000:'Half a day on the water',
gift_amt_2000:'A full day on the water',
gift_amt_3000:'A day with overnight',
gift_popular:'Popular choice',
gift_preview_eyebrow:'What the certificate looks like',
gift_preview_h2:'Your Certificate',
gift_preview_sub:'Type the recipient\'s name to see how the certificate will look.',
gift_cert_placeholder:'Recipient\'s name',
gift_cert_title:'Gift Certificate',
gift_cert_for:'Presented to',
gift_cert_desc:'Private yacht charter on the Adriatic coast of Montenegro',
gift_cert_validity:'Valid for 12 months',
gift_form_h2:'Order Certificate',
gift_form_info:'The PDF arrives in your inbox within 2 hours. Forward it to the recipient or print it out — the design is beautiful.',
gift_b1:'Valid for 12 months',
gift_b2:'Can be transferred',
gift_b3:'Any route',
gift_b4:'PDF in 2 hours',
gift_f_buyer:'Your Name',
gift_f_type:'What you\'re giving',
gift_f_value:'Amount or route',
gift_f_recipient:'Recipient\'s Name',
gift_f_message:'Personal Message (optional)',
gift_f_delivery:'Delivery Format',
gift_f_email_pdf:'Email PDF',
gift_f_print_pdf:'Print-ready PDF',
gift_f_submit:'Order — delivered in 2 hours',
gift_success_h:'Request Received',
gift_success_p:'The certificate arrives in your inbox within 2 hours. If you don\'t see it — check the Promotions or Spam folder.',
gift_faq_h2:'Questions about certificates',
gift_faq1_q:'How long is the certificate valid?',
gift_faq1_a:'12 months from the date of purchase. If you need it longer — write to us, we\'ll extend it.',
gift_faq2_q:'How does the recipient book?',
gift_faq2_a:'They write to us with the certificate code (it\'s in the PDF). After that — it\'s like any regular booking: we agree on the date, the route, and the wishes the day before departure.',
gift_faq3_q:'Can a specific date be chosen?',
gift_faq3_a:'Yes. The recipient picks a date that suits them, within the 12-month validity of the certificate.',
gift_faq4_q:'What\'s the refund policy?',
gift_faq4_a:'No cash refunds, but the certificate can be transferred to another person without restrictions — just share the code with the recipient.',
nav_crew:'Crew',
crew_eyebrow:'Who\'s on the water with you',
crew_h1:'Crew',
crew_sub:'One captain since 2010, a first mate, and a steward. A small crew — everyone knows the guests by name by the end of the day.',
crew_captain_role:'Captain',
crew_captain_name:'Captain Alexey',
crew_captain_bio:'Since 2010, Alexey has been running one charter per day on this yacht. Knows the Bay of Kotor without charts: where to buy oysters in Kamenari (order from the boat — they bring them out), why the Blue Cave needs to be caught between 11 and 12, in which cove to anchor at sunset with a north-west wind. Yacht Master Offshore, 50,000+ nautical miles across the Mediterranean.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'STCW',
crew_cert_first_aid:'Advanced First Aid',
crew_cert_experience:'15 years on these waters',
crew_captain_quote:'"After all these years, the Bay of Kotor still takes my breath away every single morning. Sharing that feeling with our guests is what makes this the best job in the world."',
crew_team_eyebrow:'Our Team',
crew_team_h2:'The Crew',
crew_member1_name:'First Mate',
crew_member1_role:'Navigation and water sports',
crew_member1_bio:'Responsible for safety on the water, snorkelling and SUP gear, and water games. Certified diving instructor — knows the best underwater snorkelling spots along the coast.',
crew_member2_name:'Steward on Board',
crew_member2_role:'Service and kitchen',
crew_member2_bio:'Meets you at the dock, sets breakfast, mans the grill, serves drinks. Knows the guests by name by the third stop of the route.',
crew_trust_eyebrow:'Safety',
crew_trust_h2:'Certifications, insurance, license',
crew_trust_sub:'All passengers are insured automatically. Licensed by the Maritime Administration of Montenegro. Crew certified to STCW and EU standards. Life jackets for every passenger, including child sizes.'
},
ru: {
nav_home:'Главная', nav_about:'О нас', nav_yacht:'Яхта', nav_dest:'Маршруты',
nav_gallery:'Галерея', nav_booking:'Бронировать', nav_cta:'Забронировать день',
hero_eyebrow:'Порто Монтенегро · с 2010 года',
hero_h1:'Адриатика с воды —<br>как её знает капитан',
hero_sub:'18 метров. До 16 гостей. Один маршрут — спроектированный под вашу компанию. От Котора до закрытых бухт под Орьеном, с гриля на борту и закатом обратно.',
hero_cta:'Забронировать день',
stat_1_num:'15', stat_1_label:'Лет на Адриатике',
stat_2_num:'2000+', stat_2_label:'Гостей с 2010 года',
stat_3_num:'4.9', stat_3_label:'Оценка гостей',
stat_4_num:'18 м', stat_4_label:'Личной яхты',
about_eyebrow:'Наша история',
about_h2:'15 лет на одном побережье',
about_p1:'MonteYacht вышел в первый рейс в 2010 году — из Порто Монтенегро. С тех пор — больше 2000 гостей и одна и та же яхта, обновлённая полностью в этом сезоне. Мы не сеть, не франшиза и не круизный оператор. Мы знаем эти воды лично — каждую бухту между Тиватом и Котором, каждое окно для купания, каждое время для золотого часа.',
about_p2:'Наш капитан принимает по одному чартеру в день. До 16 гостей дневной выход, до 6 — с ночёвкой в каютах после реновации. Маршрут согласуем за день до выхода — под ваш темп, ваши предпочтения и погоду на воде.',
about_cta:'Посмотреть яхту',
charters_eyebrow:'Чартеры',
charters_h2:'Выберите длину дня',
charters_sub:'Один день — для бухты, обеда и заката. Несколько дней — чтобы засыпать на воде и просыпаться в новом заливе. Маршрут спланируем под вас.',
charter_day_label:'Дневной чартер',
charter_day_title:'День на воде',
charter_day_desc:'Боко-Которский залив — от Тивата до Котора. Остановки в бухтах для купания и снорклинга, обед с гриля на якоре. Для семей, компаний и пар.',
charter_day_meta:'4–12 часов · До 16 гостей',
charter_day_price:'От €2 200 · 4 часа',
charter_week_label:'С ночёвкой',
charter_week_title:'Несколько дней на воде',
charter_week_desc:'Каюты после реновации этого года, утренний кофе на палубе и якорь в тихой бухте на закате. От 2 до 5 ночей, маршрут гибкий.',
charter_week_meta:'От 2 ночей · Капитан и экипаж 24/7',
charter_week_price:'От €3 000 / сутки',
charter_cta:'Запросить даты',
yacht_h1:'Marea · 18 метров',
yacht_sub:'Одна яхта с 2010 года, полная реновация в 2026. До 16 гостей в дневном чартере, до 6 — с ночёвкой.',
yacht_spec_length:'Длина', yacht_spec_cabins:'Каюты', yacht_spec_guests:'Гостей', yacht_spec_crew:'Экипаж',
yacht_feat_title:'На борту',
yacht_f1_title:'Гриль на корме', yacht_f1_desc:'Свежевыловленный дорадо, тигровые креветки, овощи. Готовим на якоре в бухте — пока вы плаваете.',
yacht_f2_title:'Вода', yacht_f2_desc:'SUP-доски, маски для снорклинга, надувные шезлонги и подводный скутер. Всё на борту, ничего доплачивать не нужно.',
yacht_f3_title:'Музыка', yacht_f3_desc:'Bluetooth-колонки на палубе и в каютах. Подключайте свой плейлист — мы не навязываем.',
yacht_f4_title:'Носовая палуба', yacht_f4_desc:'Открытая площадка на носу с матрасами и подушками. Любимое место гостей в золотой час.',
yacht_f5_title:'Один капитан', yacht_f5_desc:'С 2010 года — наш капитан. Знает, что Голубую пещеру нужно ловить в 11–12 — иначе нет того света; что устриц быстрее брать в Каменари с воды (привезут на лодку), а креветок — у Милоша по пути в Котор. Окна для купания, время для золотого часа, лучшая бухта по погоде дня — без карт.',
yacht_f6_title:'Стюард на борту', yacht_f6_desc:'Встретит на причале, накроет завтрак, разнесёт напитки, поможет с детьми. Тихо рядом — не мешает, но всё под рукой.',
dest_eyebrow:'Маршруты',
dest_h2:'Четыре направления — выберите день',
dest_sub:'Все четыре маршрута стартуют из Порто Монтенегро. Капитан адаптирует тайминг под погоду и под вашу компанию — где задержаться, где плыть быстрее, где остановиться на купание.',
dest_places_eyebrow:'Что увидите по пути',
dest_places_h2:'Ключевые точки',
dest_places_sub:'Главные места побережья — Котор, Пераст, остров Богородицы на Рифе, Голубая пещера, Луштица. Всё в пределах одного дневного выхода из Порто Монтенегро.',
premium_eyebrow:'Добавки к чартеру',
premium_h2:'Что можно заказать',
premium_sub:'Шеф-повар, профессиональный фотограф, праздничный декор и подводный скутер — добавляйте по одной или возьмите пакет из четырёх и сэкономьте €150.',
multiday_eyebrow:'Ночёвки на борту',
multiday_h2:'Несколько дней на воде',
multiday_sub:'Засыпайте в тихой бухте, просыпайтесь под кофе на палубе. Каюты после полной реновации — 2, 3 или 5 ночей, маршрут собираем под вас.',
multiday_includes_title:'В ночной тариф входит',
multiday_includes:'Всё из дневного чартера, плюс: каюты после реновации · постельное бельё и полотенца · утренний кофе-сервис · капитан и экипаж 24/7 · маршрут, согласованный с вами заранее.',
gallery_eyebrow:'Фотоистории',
gallery_h2:'Галерея',
gallery_sub:'Кадры с борта Marea и вдоль побережья Адриатики — реальные дни наших гостей.',
reviews_eyebrow:'4.9 / 5 · 2000+ гостей',
reviews_h2:'Отзывы',
booking_eyebrow:'Свяжитесь с нами',
booking_h2:'Напишите — ответим за 2 часа',
booking_p:'Без автоответов и форм со звёздочками. Маршрут согласуем с вами лично — обычно за 2 часа в сезон (май–октябрь), быстрее в межсезонье.',
form_name:'Имя', form_phone:'Телефон или WhatsApp', form_email:'Email',
form_type:'Длительность', form_type_day:'День на воде', form_type_week:'С ночёвкой',
form_guests:'Гостей', form_dates:'Даты',
form_comments:'Пожелания (необязательно)', form_submit:'Отправить — ответим за 2 часа',
form_success_h:'Запрос принят',
form_success_p:'Свяжемся с вами в течение 2 часов. Если ответа нет — проверьте папку «Промо» или «Спам», иногда письма уходят туда.',
faq_eyebrow:'Вопросы', faq_h2:'Что обычно спрашивают',
opt_4h:'4 часа — €2 200', opt_6h:'6 часов — €2 400', opt_8h:'8 часов — €2 600',
opt_12h:'12 часов — €3 000', opt_24h:'24 часа — €3 500', opt_multi:'2+ суток — €3 000 / сутки',
footer_desc:'Частный яхтенный чартер из Порто Монтенегро. На воде с 2010 года.',
footer_nav:'Навигация', footer_dest:'Маршруты', footer_contact:'Контакты',
footer_rights:'Все права защищены.',
nav_blog:'Блог',
promo_text:'Скидка 10% на даты в мае и июне — при бронировании до конца недели.',
promo_cta:'Узнать даты',
badge_insurance:'Страховка на каждого',
badge_insurance_desc:'Все пассажиры застрахованы автоматически — никаких доплат и форм. Полис включён в стоимость чартера.',
badge_license:'Официальный оператор',
badge_license_desc:'Лицензия Морской администрации Черногории. По запросу — номер для проверки в реестре.',
badge_safety:'Безопасность по стандартам ЕС',
badge_safety_desc:'Соответствуем SOLAS (Конвенция охраны человеческой жизни на море) и нормам ЕС. Спасжилеты — на каждого, включая детские размеры.',
reno_eyebrow:'Реновация 2026',
reno_h2:'Полная реновация яхты',
reno_sub:'Зимой 2025–2026 — пересобрали и интерьер, и внешний вид. Новая обивка и кровати в каютах, обновлённая кухня и салон, перешитые шторы, новая кофемашина и Bluetooth-колонки. Снаружи — отполированный корпус и новая навигация на капитанском мостике.',
included_eyebrow:'Прозрачные цены',
included_h2:'Что входит и что нет',
included_sub:'Без скрытых платежей и звёздочек. Всё включённое — слева, всё дополнительное — справа.',
included_yes:'Входит в стоимость',
included_no:'Не входит',
blog_eyebrow:'Журнал капитана',
blog_h2:'Блог',
blog_sub:'Истории, маршруты и советы — от капитана с 15 годами на этих водах.',
blog_read:'Читать далее',
blog_more_eyebrow:'Ещё истории',
blog_more_h2:'Из журнала капитана',
blog_art1_meta:'Гид по маршруту &bull; 8 мин чтения',
blog_art1_title:'Идеальный яхтенный маршрут по Боко-Которскому заливу',
blog_art1_excerpt:'Самый южный фьорд Европы, семь остановок, восемь часов. Маршрут от капитана по Боко-Которскому заливу — от Порто Монтенегро до Добреча и обратно в золотой час.',
blog_art1_intro:'Боко-Которский залив часто называют самым южным фьордом Европы. Обрамлённый отвесными известняковыми скалами, уходящими прямо в тёмно-синюю воду, украшенный средневековыми городами-крепостями и крошечными островными церквями, он является одним из самых впечатляющих яхтенных маршрутов всего Средиземноморья. Вот рекомендованный нашим капитаном маршрут на полный день, раскрывающий каждую грань этого объекта Всемирного наследия ЮНЕСКО.',
blog_art1_quote:'"За 15 лет навигации по этим водам Которский залив до сих пор захватывает дух каждое утро. Нигде больше нет ничего подобного." — Капитан Алексей',
blog_art1_route_title:'Маршрут: 8-часовой дневной чартер',
blog_art1_s1_time:'09:00 — Отправление',
blog_art1_s1_title:'Порто Монтенегро, Тиват',
blog_art1_s1_desc:'Мы отправляемся из Порто Монтенегро — одной из самых престижных суперяхтенных марин Средиземноморья. Покидая гавань, вы увидите первые впечатляющие горы залива, поднимающиеся по обе стороны. Кофе и свежая выпечка ждут вас на солнечной палубе, пока мы берём курс к узкому проходу.',
blog_art1_s2_time:'09:45 — Первая остановка',
blog_art1_s2_title:'Остров Богородицы на Рифе',
blog_art1_s2_desc:'Мы встаём на якорь у знаменитого островка Госпа од Шкрпела — рукотворного острова, который местные моряки строят камень за камнем с XV века. Крошечная церковь хранит бесценные картины эпохи Возрождения и сотни серебряных вотивных табличек. Остров словно парит посреди залива, обрамлённый горами со всех сторон — главное место для фото на маршруте.',
blog_art1_s3_time:'10:30 — Купание',
blog_art1_s3_title:'Пераст и бухта Голубого грота',
blog_art1_s3_desc:'Мы проплываем мимо Пераста — самой фотогеничной барочной деревни на побережье — с колокольнями и каменными дворцами у самой воды. Сразу за Перастом мы бросаем якорь в защищённой бирюзовой бухте, где вода настолько прозрачна, что дно видно на глубине 15 метров. Время для первого купания, снорклинга и водных развлечений — SUP-доски, маски и подводный скутер готовы на купальной платформе.',
blog_art1_s4_time:'12:00 — Обед',
blog_art1_s4_title:'Обед-барбекю в заливе',
blog_art1_s4_desc:'Мы разжигаем бортовой гриль для классического адриатического обеда — свежевыловленный дорадо, тигровые креветки, овощи на гриле и местный сыр. При желании можно остановиться в одном из прибрежных ресторанов в Перасте или Столиве, где хозяин подплывает на лодке принять заказ. Обед на воде, окружённый горными стенами высотой 1000 метров — впечатление, которое не надоедает никогда.',
blog_art1_s5_time:'13:30 — Исследование',
blog_art1_s5_title:'Старый город Котор',
blog_art1_s5_desc:'Мы заплываем вглубь внутреннего залива — вода сужается, горы поднимаются ещё выше — и встаём на якорь у средневекового города-крепости Котор. Этот город из списка ЮНЕСКО существует более 2000 лет, с венецианскими дворцами, романскими церквями и лабиринтом мраморных улиц. У вас будет время пройтись по стенам, подняться к крепости ради панорамных видов или просто побродить по атмосферным площадям.',
blog_art1_s6_time:'15:30 — Послеобеденное купание',
blog_art1_s6_title:'Пляж Добреч',
blog_art1_s6_desc:'Покидая Котор, мы направляемся к внешнему заливу и останавливаемся у Добреча — дикого галечного пляжа, доступного только с воды. Вода здесь приобретает яркий изумрудно-зелёный оттенок, где горные источники смешиваются с морем. Идеальное место для неспешного послеобеденного купания и отдыха на солнечной палубе с бокалом шампанского.',
blog_art1_s7_time:'17:00 — Золотой час',
blog_art1_s7_title:'Закатный круиз обратно в Тиват',
blog_art1_s7_desc:'Обратный путь рассчитан на золотой час. Когда солнце опускается за горы Орьен, весь залив окрашивается в розовые и золотые тона. Мы наливаем шампанское, тихо играет музыка, и яхта плавно скользит обратно к Порто Монтенегро. Этот последний час — с тёплым светом, спокойной водой и горами, идеально отражёнными в заливе — момент, который запоминает каждый гость.',
blog_art1_tips_title:'Советы капитана',
blog_art1_tip1:'Лучшие месяцы для этого маршрута — июнь и сентябрь: тёплая вода, спокойный ветер и значительно меньше туристических лодок в заливе. Июль и август прекрасны, но на основных остановках многолюдно.',
blog_art1_tip2:'Берите купальники и солнцезащитный крем — вы будете купаться весь день. Мы предоставляем полотенца, снаряжение для снорклинга и SUP-доски. Для прогулки по Старому Котору рекомендуется лёгкая обувь для мощёных улиц.',
blog_art1_tip3:'Этот маршрут идеально подходит для 8-часового чартера (от €2 600), но может быть расширен до 12 часов (€3 000), если хотите более расслабленный темп с дополнительными остановками для купания и закатным ужином на борту.',
blog_art2_meta:'Впечатления &bull; 5 мин чтения',
blog_art2_title:'Закатное шампанское: почему золотой час на заливе — главный кадр чартера',
blog_art2_excerpt:'Есть момент — около 19:00 в конце июня — когда горы Орьен отбрасывают тёплое янтарное сияние на весь Боко-Которский залив. Вода превращается в жидкое золото, и время словно замирает. Гости часто говорят, что обратный путь — лучший момент дня.',
blog_art2_intro:'Есть момент — около 19:00 в конце июня — когда горы Орьен отбрасывают тёплое янтарное сияние на весь Боко-Которский залив. Вода превращается в жидкое золото. Времени как будто на полчаса перестаёт быть. Если у вас в чартере 8 или 12 часов — этот час встроен в маршрут. Мы возвращаемся в Тиват специально через закат. В короткие 4-часовые выходы поймать его нельзя — мы успеем встать у причала к 13:00 или 17:00, далеко от золотого часа.',
blog_art2_quote:'«Я хожу через этот залив пятнадцать лет. Тысячи закатов. И всё равно каждый раз глушу мотор и смотрю. Гости делают то же самое — пьют шампанское и молчат двадцать минут. Это самое тихое место на чартере.» — Капитан Алексей',
blog_art2_s1_title:'Почему именно этот час',
blog_art2_s1_desc:'Технически — солнце опускается за горы Орьен, на западном краю залива. Высота гор около 1900 метров, поэтому солнце скрывается за ними рано — не на горизонте моря, а раньше. Это даёт двойное золотое освещение: солнце ещё светит на восточные горы, которые отражаются в воде, пока западные уже в тени. В июне–начале июля это работает с 19:30 до 20:30. В августе сдвигается на 19:00–20:00. В сентябре — 18:30–19:30. В октябре закат в 17:30 — и в нём уже больше красного, меньше золотого. В мае и октябре свет другой — низкое солнце, длинные тени, но «тёплый янтарный» работает не каждый день. Зависит от облаков. Идеальные дни — после небольшого дождя, когда воздух прозрачный.',
blog_art2_s2_title:'Как мы строим маршрут под закат',
blog_art2_s2_desc:'Для 8-часового чартера с закатом: выход в 13:00, последняя стоянка — Добреч (после Котора), оттуда отплываем в 17:30. Полтора часа неспешного хода через залив — попадаем в Тиват в 19:00. Для 12-часового: выходим в 10:00, успеваем сделать утренние купания + Котор + обед, затем долгая стоянка у Добреча или Прчаня с ужином на палубе. Возвращение к 22:00. Маршрут с Голубой пещерой и заходом 8 часов не выходит на закат — мы успеваем вернуться к 17:00. Если хотите и пещеру, и закат — нужно 12 часов или multi-day.',
blog_art2_s3_title:'Что подаём',
blog_art2_s3_desc:'Шампанское — Veuve Clicquot или Bollinger, по запросу. Прохладный бокал, лёд в ведёрке, маленький поднос с закусками: pršut, твёрдый сыр, виноград, иногда — устрицы из Каменари если успели заказать утром. Если вы не пьёте — холодный игристый сидр или безалкогольный коктейль. Не делаем «взрослый» и «детский» подносы отдельно — всё на палубе, выбираете сами. Стаканы стандартные шампанские, не пластик. Это маленькая деталь, но она работает.',
blog_art2_s4_title:'Кто фотографирует',
blog_art2_s4_desc:'Лучший кадр получается с носовой палубы, лицом к закату. Мы подходим к носу, ставим вас или ваших гостей — горы за спиной, золотая вода под ногами. Снимать против солнца — да, контр-свет даёт силуэты, которые потом печатают в рамку. Если у вас фотограф на борту (добавка €200) — он работает именно в этом часе. Большая часть его кадров — золотой час. Из телефона тоже выходит хорошо. iPhone в 18:30 с режимом «Ночной портрет» — снимает закат лучше большинства зеркалок.',
blog_art2_s5_title:'Что играет',
blog_art2_s5_desc:'Bluetooth-колонки включены, плейлист — ваш. Мы не навязываем «морскую» музыку. Чаще всего гости включают что-то медленное — Лана Дель Рей, какой-то джаз, иногда русский рок. Один раз был Шопен. Тоже хорошо. Капитан переключает мотор в режим тише, ход замедляется до 7-8 узлов. Это специально — чтобы яхта не давила звуком море и музыку.',
blog_art2_s6_title:'Что обычно не пишут',
blog_art2_s6_desc:'Иногда закат не получается. Облако на западе, дождь над Луштицей, mistral раздувает воду. Тогда нет жидкого золота — есть серое небо и волны. В таких случаях мы открываем шампанское всё равно, но не на палубе под закат, а в салоне с включённой кофемашиной и тёплым пледом. Это тоже работает — просто другая сцена. Прогноз погоды смотрим за день до чартера. Если на закат точно дождь — предлагаем сдвинуть выход на следующий день. Не всегда возможно, но пробуем. И ещё. Закатные кадры не получаются с длинной экспозицией с борта движущейся яхты — лёгкое размытие. Если хотите идеальный кадр с зеркалки — попросите капитана встать на якорь у Добреча на 10 минут специально для фото. Это бесплатно, мы это делаем для всех, кто просит.',
blog_art2_s7_title:'Когда писать',
blog_art2_s7_desc:'Закат-маршрут — это 8 или 12 часов в сезон. Лучшие месяцы для золотого часа — июнь, июль, август, сентябрь. В мае или октябре можно попробовать, но цвет менее устойчивый. Если у вас особый случай (предложение, годовщина) — пишите за 2-3 недели и просите фотографа в добавке (€200). Получится день, который останется в фото.',
blog_art3_meta:'Еда &bull; 5 мин чтения',
blog_art3_title:'Из моря на гриль: BBQ на якоре в бухте',
blog_art3_excerpt:'Ничто не сравнится со вкусом свежевыловленной рыбы на гриле, когда солёный ветер обдувает лицо, а горы Боко-Которского залива — фоном. Бортовой гриль — сердце каждого чартера, где сходятся еда, смех и открытое море.',
blog_art3_intro:'Тигровые креветки на гриле, когда яхта стоит на якоре в тёплой бухте Боко-Которского залива, а вокруг — горы. Это работает. Не из-за рецепта — рецепт обычный. Из-за солёного ветра и того, что обед длится не сорок минут в ресторане, а столько, сколько вам хочется. Гриль на корме — добавка к чартеру. Можно прийти и без неё, но почти все, кто приходит со звёздочками или семьёй, заказывают. Это не «фишка», это нормальный обед, просто на воде.',
blog_art3_quote:'«Рыба на гриле вкуснее, когда её ловили утром. И когда есть её можно прямо в купальнике, ногами в воде. В ресторане столько никто не выдержит — приходится одеваться, заказывать, ждать. У нас этого нет.» — Капитан Алексей',
blog_art3_s1_title:'Что мы готовим',
blog_art3_s1_desc:'Стандартный набор на 4–8 гостей: дорадо или бранцин — свежий, утренний, килограмм на двоих; тигровые креветки — крупные, на гриле в скорлупе; овощи — цукини, перец, баклажан, иногда грибы; картофель, запечённый в углях, простой; местный сыр — твёрдый, на доске; хлеб — лепёшка из деревенской пекарни; pršut — черногорский хамон, ломтиками; оливки — мангала, в масле. Это база. На большие компании добавляем больше рыбы или октопода. На запросы готовим вегетарианский набор — на грильке отлично идут халуми, грибы, кабачки.',
blog_art3_s2_title:'Где берём продукты',
blog_art3_s2_desc:'Утром в Тивате — рыбный рынок. Дорадо и бранцин у одного и того же рыбака, который пятнадцать лет даёт нам утренний улов. Креветки — оттуда же. Овощи — на соседнем рынке, у бабушки которая узнаёт нашего стюарда по имени. В Каменари по пути — устрицы. Их заказывают с яхты, привозят на лодке за двадцать минут. Это отдельный гастро-момент, не обед: устрицы открывают на палубе, едим с лимоном и каплей tabasco. Всё — местное, дневное. Ничего привозного, ничего размороженного.',
blog_art3_s3_title:'Кто готовит',
blog_art3_s3_desc:'Стандартно — стюард. На борту обучен. Гриль умеет, рыбу чистит, овощи режет, всё подаёт. Это стандартный сервис, без доплат. Если у вас особый случай или большая компания (10+ гостей) — личный шеф как добавка к чартеру (€300). Тогда меню расширенное: 4 курса с винной парой, согласуем за два дня до выхода. Шеф приходит на борт с продуктами, готовит на месте, подаёт. Разница простая: стюард — это «хороший обед на яхте». Шеф — это «ресторан-уровень на яхте». Большинству хватает первого.',
blog_art3_s4_title:'Где едим',
blog_art3_s4_desc:'Не на ходу. Мы становимся на якорь в тихой бухте — и обедаем минут сорок-час. Любимые места для якоря с обедом: бухта у Перастa — защищённая, мелкая, вид на остров Богородицы на Рифе; Жанница — рядом с Голубой пещерой, западная Луштица, хорошо для маршрута с пещерой; Моринь — у горных источников, вода чуть холоднее, но очень тихо; Дурашевичи — напротив Страдиоти, с понтоном если хотите выйти на берег после. Капитан сам предлагает место по погоде дня — где не будет ветра и где волна не помешает.',
blog_art3_s5_title:'Что пьём',
blog_art3_s5_desc:'Стандартно — белое вино Vranac Beli или Krstač, местное, черногорское. €15–25 за бутылку, мы привозим. Несколько бутылок в холодильнике на борту. Просекко если хочется — есть. Шампанское по запросу (Veuve Clicquot, Bollinger — добавка). Безалкогольное всегда есть: лимонад на свежих лимонах, газировка, минеральная вода. Скажете при бронировании, что любите — привезём конкретные бутылки. Без наценки за поставку, просто оплачиваете по факту.',
blog_art3_s6_title:'Цены',
blog_art3_s6_desc:'Стандартный обед — €40–60 на человека в зависимости от блюд и компании. Это включает: рыбу, креветки, овощи, хлеб, оливки, сыр, pršut, стандартное вино. С устрицами из Каменари — плюс €15–20 на человека. С личным шефом — €300 фиксированно за чартер, плюс продукты по факту. Платим по факту чартера — наличными или картой. Никаких предоплат за еду.',
blog_art3_s7_title:'Альтернатива — обед в ресторане',
blog_art3_s7_desc:'Не хочется готовить на борту? Заходим в один из береговых ресторанов: Перast — несколько ресторанов на набережной, владельцы знают нашу яхту, можно зарезервировать стол с воды; Стоблив — небольшое поселение между Перастом и Котором, ресторан Conte с террасой; Бигова — рыбацкая деревня на Луштице, один настоящий рыбный ресторан без меню; Рыбарско Село — если идём к Голубой пещере, обед на причале. Цены примерно те же (€30–50 на человека). Но мы тратим час-полтора на берегу — это съедает время с воды.',
blog_art3_s8_title:'Что обычно не пишут',
blog_art3_s8_desc:'При сильном ветре (mistral, восточный 15+ узлов) — гриль на корме не работает. Дым и огонь не контролируются, пожарная безопасность. В такие дни переключаемся на холодные закуски: сыр, pršut, хлеб, овощи, морепродукты comida fría — это тоже хорошо, но не та сцена. Если планируем гриль и в день чартера такая погода — предупреждаем заранее. Можно либо переключиться на холодное меню, либо зайти в ресторан на берегу. И ещё. Запах рыбы и дыма от гриля остаётся на одежде. Это нормально для уличного BBQ, но если у вас потом ужин в Котор — возьмите запасную футболку. Стирка одежды на борту есть, но она занимает время.',
blog_art3_s9_title:'Когда заказывать',
blog_art3_s9_desc:'Гриль-обед добавляется при бронировании или максимум за день до чартера. Меню согласуем по WhatsApp накануне — присылаем фото утреннего улова, выбираете. В сезон июль-август — иногда не получается достать топовых лангустин или октопод (разбирают рестораны). Тогда меняем на креветки или дорадо.',
blog_art7_meta:'Семейные чартеры &bull; 6 мин чтения',
blog_art7_title:'С детьми на яхте: что взять, чего ждать, чего не бояться',
blog_art7_excerpt:'Какой возраст для какого чартера, что есть на борту для детей, как мы строим день под их ритм. И что делать, если началась морская болезнь.',
blog_art7_intro:'Половина наших семейных бронирований приходит с тревогой: «а можно с трёхлеткой?», «а если укачает?», «а если ему скучно станет?». Можно. Не укачает, если правильно построить день. Не скучно, если есть скутер, SUP и стюард, который умеет занимать. Дети у нас были разные. От годовалой девочки, которая всю прогулку спала в коляске на палубе, до 14-летнего мальчика, который попросил у капитана урок управления и потом полчаса стоял у штурвала. Всё работает, просто разная подготовка.',
blog_art7_quote:'«Самый частый страх родителей — что ребёнок будет ныть и день пропадёт. На практике дети ноют в ресторанах и в отелях. На яхте — нет. Слишком много нового вокруг.» — Капитан Алексей',
blog_art7_s1_title:'Какой возраст для какого чартера',
blog_art7_s1_desc:'До 2 лет — берём с осторожностью. На яхте есть тенистая зона в кокпите и каюта с кроватью. Подойдёт 4 часа в спокойную погоду, не больше. Маршрут — Госпа од Шкрпела + купание в Морень. Дети 3–6 лет — 4 или 6 часов максимум. В этом возрасте устают от солнца и новизны. Лучше короткие выходы с одним длительным купанием. 7–10 лет — 6 или 8 часов. Уже выдерживают полный день. Можно включить Котор с прогулкой по стенам — детям обычно нравится. 11+ — любой чартер. Подростки на воде ведут себя как взрослые, только активнее. Скутер и SUP-доска — их любимое. С детьми младше 5 лет не берём маршрут с Голубой пещерой — там 8 часов, открытое море, проход у Луштицы может качать. Это не для малышей.',
blog_art7_s2_title:'Что есть на борту',
blog_art7_s2_desc:'Детские спасжилеты — два размера: 10–25 кг и 25–50 кг. Сертифицированные, проверенные. Надувные шезлонги для воды — лежать на воде, не уплывая. Хорошо для тех, кто плавать ещё не умеет. Игрушки — несколько надувных кругов, мяч, ведёрко с лопаткой для песка (на каменистых пляжах сойдёт), пара водных пистолетов. Подводная маска для детей — есть несколько маленьких размеров для снорклинга. Книги — три-четыре на английском, две на русском, на палубе в ящике. Иллюстрированные, для дошкольников. Чистая каюта с кроватью — если ребёнок устал и хочет поспать, отводим в каюту. Прохладно, тихо.',
blog_art7_s3_title:'Что взять с собой',
blog_art7_s3_desc:'Солнцезащитный крем SPF 50+ — детская кожа сгорает быстро. На воде УФ отражается от поверхности, эффект двойной. Шляпа с широкими полями или панама — обязательно. У нас на борту есть пара, но размеры взрослые. Лёгкая одежда с длинным рукавом — для часов в пик солнца. На борту прохладнее не становится — солнце греет даже под навесом. Переодевание — после купания дети мокрые, на палубе ветрено, легко замёрзнуть. Сухая футболка и шорты — обязательно. Перекус, который ребёнок любит — наши банан, виноград, печенье на борту есть, но если ваш ребёнок ест только конкретное — берите. Дети с непривычки могут ничего из общего не съесть. Памперсы, влажные салфетки — если ребёнок маленький. На борту есть санузел, но он стандартный, не детский.',
blog_art7_s4_title:'Как мы строим день под детей',
blog_art7_s4_desc:'Если в группе есть дети — день идёт по их ритму, не по карте. Это значит: раннее купание в 11:00 — пока солнце ещё мягкое. Полчаса в воде, дальше — на палубу под навес. Обед в 12:30 — раньше, чем у взрослых. Дети к 13:00 уже голодные и капризные. Тихий час 13:30–15:00 — после обеда в каюту или на палубе с книжкой. На воде в это время горячее, лучше не плавать. Второе купание в 15:30 — в воду, активные игры со скутером и SUP. Это пик веселья. Возвращение в 17:00 — детей хватает до пяти часов активного дня. Дальше — усталость, нытьё, риск. Если у нас 8-часовой чартер с детьми, рекомендую выход в 9:30, возвращение в 17:30. Не дольше.',
blog_art7_s5_title:'Что делать, если ребёнок заскучал',
blog_art7_s5_desc:'Бывает. Особенно в час хода между остановками, когда смотреть особо некуда — горы и горы. Что предлагаем: подводный скутер — даже 8-летний справляется на мелководье, под присмотром. SUP-доска с весельным аттачем — ребёнок гребёт сам, родитель плывёт рядом. Рыбалка с борта — простая удочка, мелкая рыба у причала. Не каждый раз ловится, но интересно. Бинокль — даём детям, они смотрят на горы, лодки, дельфинов (бывают редко, но бывают). Каюта с TV — если совсем устал, можно посадить мультики в каюте. Стюард обучен занимать детей — это его работа в момент когда родители хотят поспать или почитать.',
blog_art7_s6_title:'Если морская болезнь',
blog_art7_s6_desc:'В Боко-Которском заливе обычно её нет — это закрытые воды, волна минимальная. Морская болезнь начинается на выходе из залива в открытое море (маршрут к Голубой пещере, например). Если знаете, что ребёнка укачивает: скажите при бронировании, возьмём только маршрут внутри залива. Имбирные пастилки — у нас на борту есть, но возьмите свои привычные. Не давайте есть тяжёлое перед выходом — лёгкий завтрак, без жирного. Если началось — кладём в каюту, на горизонт смотреть, иногда помогает остановиться у берега на 10 минут.',
blog_art7_s7_title:'Что обычно не пишут',
blog_art7_s7_desc:'Дети меняют тон чартера. С ними нельзя «выпить шампанского молча на закате» — будет крик и беготня. Это нормально, но взрослые гости иногда не ожидают. Если у вас смешанная группа (своя пара + друзья без детей) — предупредите остальных, день будет более активный и менее «релакс». И ещё. Иногда дети не выдерживают. Бывает раз в год: устал, замёрз, спросил «когда домой» и больше ничего не работает. В таком случае мы возвращаемся раньше — без штрафов, без обсуждения. Время чартера — гибкое в обе стороны.',
blog_art7_s8_title:'Когда писать',
blog_art7_s8_desc:'При бронировании укажите возраст детей — это важно для подбора маршрута, размера спасжилетов, меню. Если ребёнку нужно что-то специфическое (без глютена, без молочки, любимая игрушка вместо нашей) — тоже скажите. Мы готовимся за день до выхода. В сезон семейные слоты заполняются быстрее всего — пишите за неделю минимум, в июле-августе за две.',
blog_art8_meta:'Когда ехать &bull; 6 мин чтения',
blog_art8_title:'Июнь или сентябрь: какой месяц лучше для чартера в Черногории',
blog_art8_excerpt:'Температура воды, толпы, ветер, цены, закаты — восемь параметров, чтобы сравнить июнь и сентябрь. С заметкой про июль-август в конце.',
blog_art8_intro:'Все говорят «июнь и сентябрь — лучшее время в Черногории». Это правда, но не значит, что они одинаковые. Между ними 4 градуса разницы в воде, разный ветер, разные виды в горах и разные цены. Если вы выбираете один из этих двух месяцев — этот текст для вас. Если ещё думаете между июлем-августом — в конце есть про это тоже.',
blog_art8_quote:'«За пятнадцать сезонов я не могу выбрать любимый месяц. В июне залив пахнет иначе — это цветы на горах. В сентябре свет другой — ниже солнце. Это просто два разных лета.» — Капитан Алексей',
blog_art8_s1_title:'Температура воды',
blog_art8_s1_desc:'Июнь: 22°C в начале месяца, 24°C к концу. Купаться комфортно весь месяц, но в первой половине — освежающе. Сентябрь: 24°C в начале, 22°C к концу. Зеркально июню. Тёплая вода держится до 20-х чисел. В июле-августе вода 26-27°C — почти как ванна, для детей идеально.',
blog_art8_s2_title:'Температура воздуха',
blog_art8_s2_desc:'Июнь: 25-28°C днём, 17-19°C ночью. Если выходите в чартер в 9 утра, нужна лёгкая куртка — на воде ещё свежо. Сентябрь: 26-29°C днём, 18-20°C ночью. Чуть теплее, чем в июне. В первой половине ещё лето, во второй — уже осень. В июле-августе 30-34°C днём. На палубе под солнцем — невыносимо без навеса. Все хотят в воду.',
blog_art8_s3_title:'Толпы',
blog_art8_s3_desc:'Июнь: туристы есть, но Котор не забит. На набережной Перастa можно сесть в ресторан без брони. У Голубой пещеры в 12:00 — 3-5 лодок одновременно, очередь на 10 минут. Сентябрь: похоже на июнь, но к 20-м числам — почти пусто. В Котор приходят круизные лайнеры с пожилыми туристами (не семьями), вечером тише. Июль-август: пик. У пещеры очередь 20-30 минут, Котор переполнен, рестораны без брони не возьмут. Якорные стоянки забиты с 10 утра.',
blog_art8_s4_title:'Цены',
blog_art8_s4_desc:'Июнь: стандарт. 8-часовой чартер — €2,600. Сентябрь: стандарт до 15 числа, скидка 10% во второй половине. Май, октябрь: скидка 10-15%. Бухты пустые, цены приятные, но вода уже / ещё прохладная для долгого купания. Июль-август: премия 10-15% на пиковые даты (15 июля — 15 августа). Слоты раскупаются за месяц. Если бюджет важен — октябрь даёт лучшее соотношение цены и опыта. Если важен ваш собственный комфорт — первая половина июня и первая половина сентября.',
blog_art8_s5_title:'Ветер',
blog_art8_s5_desc:'В Боко-Которском заливе ветер слабый круглый год — горы защищают. Но в отдельные дни бывает. Июнь: спокойный месяц. Стабильно. Mistral случается раз в неделю-две, дует пол-дня. Сентябрь: бури чаще, особенно во второй половине. Восточный bura — холодный, неприятный. Через 2-3 дня проходит. Если важно гарантированно выходить каждый день — июнь. В сентябре можно получить день когда ветер не даёт сделать маршрут (мы переключаем на короткий внутри залива).',
blog_art8_s6_title:'Длина светлого дня и закат',
blog_art8_s6_desc:'Июнь: солнце садится в 20:30. Длинные вечера, золотой час 19:00-20:00. Сентябрь: закат в 18:30 (начало) — 17:45 (конец). Дни короче, но свет в закате более «золотой» — потому что солнце ниже. Для 12-часового чартера с закатом — оба месяца работают. Но в июне закат позже, можно поужинать на палубе после возвращения. В сентябре после заката быстрее темнеет.',
blog_art8_s7_title:'Что цветёт',
blog_art8_s7_desc:'Июнь: дикие травы на горах, запах лаванды и тимьяна. На якоре в Морень с воды слышно. В Перasте цветут гранатовые деревья. Сентябрь: инжир созревает. На рынке в Тивате — мокрый, сладкий, по €3-4 за кг. Виноград в долинах. Запахи земли, не цветов. Это мелочь, но если вы любите конкретные сцены — июнь это «весна с цветами», сентябрь — «начало осени с урожаем».',
blog_art8_s8_title:'Что делать в плохой день',
blog_art8_s8_desc:'Бывает редко, но бывает. В июне: если шторм — переключаемся на короткий маршрут внутри залива (Перast, Госпа од Шкрпела). Шторм длится день, на следующий — уже норма. В сентябре: bura может дуть 2-3 дня. Если ваш день попал — предлагаем перенести бесплатно на следующий доступный. В июле-августе: погода стабильная, но иногда — попутная гроза вечером. Не ездим в вечер если прогноз серьёзный.',
blog_art8_s9_title:'Что обычно не пишут',
blog_art8_s9_desc:'В июне залив пахнет цветами с гор. Это не маркетинг — это конкретный запах лаванды и тимьяна, который доходит до воды утром. К июлю он исчезает. В сентябре есть момент во второй половине — днём ещё лето, утром уже свежая осень. Можно купаться днём и пить горячий чай на палубе утром. Это редкое сочетание. И ещё. Сентябрь сильно отличается от первой к второй половине. 1-15 сентября — это лето. 16-30 — уже осень в горах и в воздухе, хотя вода ещё тёплая. Если хотите гарантированное лето — первая половина.',
blog_art8_s10_title:'Если выбирать конкретный диапазон',
blog_art8_s10_desc:'5-25 июня — самые стабильные дни сезона. Тёплая вода, мало туристов, цветы. 5-15 сентября — идеально, если хотите чуть теплее воды чем в июне и таких же пустых бухт. 20-30 мая или 20-30 октября — отличная цена, бухты пусты, но температура воды на грани (18-20°C). Не рекомендую: середина июля — середина августа для тех, кто хочет тишины. Только если едете ради активного пляжного отдыха или с детьми постарше, которым важно тёплое море.',
blog_art9_meta:'Гастро-гид &bull; 6 мин чтения',
blog_art9_title:'Устрицы и креветки в Боко-Которском заливе: где брать и почему с яхты',
blog_art9_excerpt:'В Каменари устриц привозят прямо на яхту. У Милоша берут живых креветок с причала. Местные фермы, цены, сезоны — гастро-гид от капитана.',
blog_art9_intro:'В Каменари устрицы можно заказать прямо с яхты. Дюжина приезжает на лодке за двадцать минут, без капусты и упаковок, как местные едят. Этого не делают рестораны в Котор, об этом не пишут в путеводителях, но в заливе живут устричные фермы уже двести лет. Если вы едете на чартер и любите морепродукты — этот текст про то, что заказывать, у кого, и почему именно с воды.',
blog_art9_quote:'«Я долго не понимал, почему наши устрицы вкуснее, чем во французских ресторанах. Потом понял: дело не в самих моллюсках, а в том, как их едят. Десять минут от моря до палубы — это другой продукт.» — Капитан Алексей',
blog_art9_s1_title:'Устрицы в Каменари',
blog_art9_s1_desc:'Каменари — деревня на южной стороне залива, у паромной переправы. Здесь работают семейные устричные фермы — четыре или пять, в основном одной семьи Радовичей. Что они выращивают: Ostrea edulis — европейская плоская устрица. Не та круглая «тихоокеанская», которую продают в супермаркетах. У европейской — более минеральный вкус, меньше «океанской» сладости, и более выраженная нота «йода и металла». Французы её называют plate, итальянцы — piatta. Как заказать с яхты: по пути к Котор или к Перasту, проходя Каменари, мы созваниваемся с фермой. Через 15-20 минут на яхту привозит маленькая моторная лодка. На борту — открытые устрицы со льдом, или закрытые с ножом и перчаткой (на случай если хотите сами). Платим наличными прямо лодке. Цена — €12-18 за дюжину в зависимости от размера. Лучший сезон: сентябрь — март. Лето — устрицы есть, но мельче и не такие глубокие по вкусу. Зимой — пик.',
blog_art9_s2_title:'Как мы подаём',
blog_art9_s2_desc:'Стандартно — на льду, с дольками лимона, иногда с капелькой tabasco или каплей mignonette (винный уксус с луком-шалотом). Хлеб с маслом — отдельно. Никаких надмудрённых соусов. Местная традиция простая: устрица, лимон, белое сухое вино. К устрицам мы открываем Krstač — местное черногорское белое сухое. Производят на склонах гор у Скадарского озера. Минеральное, не сладкое, хорошо к моллюскам. Бутылка — €18-25, у нас на борту обычно две.',
blog_art9_s3_title:'Креветки у Милоша',
blog_art9_s3_desc:'Милош — рыбак из Прчаня, держит точку у причала на полпути к Котор. Не магазин, не ресторан — просто пирс, где он каждое утро разбирает улов. Сюда мы заходим на маршруте в Котор — это полпути. Подходим тендером к пирсу, выбираем что есть. Что обычно есть: тигровые креветки — €25-35 за кг; голубые лангустины — €40-60 за кг (когда сезон); розовые скампи — €18-25 за кг; иногда — лангуст (€80+ за кг, но редко). Лучший сезон: май — октябрь. Зимой Милош не работает. Креветки берём живыми, готовим на гриле в той же бухте через час после покупки. Это тот самый «от моря до тарелки за час», который только на воде и возможен.',
blog_art9_s4_title:'Что ещё стоит попробовать',
blog_art9_s4_desc:'Чёрные ракушки (мидии) — dagnji по-черногорски. В сезон (август-октябрь) — €8-12 за кг. Готовим с белым вином, чесноком, петрушкой. Едим из общей миски, макая хлеб в бульон. Морской ёж — jež в Биговой. Подаётся свежим, едите ложкой прямо из раковины. Местные считают деликатесом, туристы часто не понимают. Сезон — лето. Дорадо или бранцин — стандартная рыба для гриля. Утренний улов из Тивата, килограмм на двоих. €18-25 за кг.',
blog_art9_s5_title:'Особый момент — устрицы с воды на закате',
blog_art9_s5_desc:'Это сценарий, который мы рекомендуем для романтических ужинов: 12-часовой чартер, последняя остановка у Перастa или Прчаня, заказываем дюжину устриц + бутылку Krstač + закат. Гости платят за устрицы и вино отдельно (около €40-50 на пару), но эффект — другой день целиком. Не «обед с морепродуктами», а сцена.',
blog_art9_s6_title:'Что обычно не пишут',
blog_art9_s6_desc:'В пик сезона (июль-август) устриц в Каменари может не быть в нужном количестве. Туристические рестораны Котора и Будвы выкупают их утром у фермы. Мы звоним накануне и резервируем. Если у вас 8-часовой чартер с устрицами — лучше упомянуть при бронировании. Креветки у Милоша иногда тоже разбирают рано — к 11 утра на причале может ничего не остаться, особенно в субботу. Если завтрак на лодке планируем с креветками — заказываем у него через WhatsApp накануне. И ещё. Не все туристы любят местные плоские устрицы. Привыкли к более сладким японским — а европейская plate имеет более металлический привкус. Это не «плохо», это другой вкус. Попробуйте одну, прежде чем заказывать дюжину.',
blog_art9_s7_title:'Как добавить к чартеру',
blog_art9_s7_desc:'При бронировании скажите: «хотим устрицы из Каменари» или «зайти к Милошу за креветками». Мы согласуем маршрут под это, позвоним фермам утром, заберём по пути. Не считается отдельной премиум-добавкой — это часть маршрута. Платите за продукты по факту (€30-80 за компанию, обычно), мы — за организацию ничего не берём.',
blog_art10_meta:'История места &bull; 7 мин чтения',
blog_art10_title:'Доки подводных лодок и крепость Мамула: история заброшенных стен на маршруте к Голубой пещере',
blog_art10_excerpt:'Тоннели для подводных лодок Югославии и австро-венгерская крепость 1853 года, которая стала итальянским лагерем, а потом отелем класса люкс. История, мимо которой проходят туристические катера.',
blog_art10_intro:'На выходе из Боко-Которского залива в открытое море — два места, которые мало кто понимает с воды. Тоннели в скалах под Луштицей, в которые когда-то заходили подводные лодки Югославии. И крепость Мамула в проливе — австро-венгерское сооружение 1853 года, которое во Вторую мировую было итальянским концлагерем, а с 2023-го — отель класса люкс. Оба места — часть маршрута к Голубой пещере. Большинство туристических катеров проходит мимо. Гости, которым интересна история, обычно просят остановиться.',
blog_art10_quote:'«Эти стены — не туристический объект, а напоминание, что залив не всегда был только пляжем. Здесь стояли военные базы, тюрьмы, и до сих пор кое-где видны следы. Если хотите понять Черногорию глубже — стоит остановиться.» — Капитан Алексей',
blog_art10_s1_title:'Доки подводных лодок Лора',
blog_art10_s1_desc:'На южной стороне полуострова Луштица, в районе, который называется Лора. Это бывшая военно-морская база Югославии — построена в 1960-х, действовала до 1992 года. Что было: база обслуживала подводный флот Югославской народной армии. Тоннели вырезаны прямо в скалах — заходишь на лодке внутрь, и над тобой 50 метров горной породы. Это защищало субмарины от ядерного удара. Тоннели достаточно широкие, чтобы внутри развернуться. Что сейчас: база заброшена с 1992 года, после развала Югославии. Тоннели открыты с моря, можно подойти близко. Внутрь зайти нельзя — это охраняемая территория (частная или военная, не до конца понятно). С воды видно входы — четыре больших арки в скале, около 15 метров высотой каждая. Как смотрим: проходим вдоль берега на расстоянии 50-100 метров, замедляем ход. Капитан рассказывает что и где. Если хочется фото — снимаем с пары точек, на это уходит минут пять. Это не «достопримечательность для остановки», а момент на маршруте к пещере. Заброшенная советская военная инженерия в скалах — это редкий вид, такого нет в большинстве туристических маршрутов.',
blog_art10_s2_title:'Крепость Мамула',
blog_art10_s2_desc:'Островок в проливе между Луштицей (Черногория) и Превлакой (Хорватия), на самом выходе в открытое море. Что было: 1853 — крепость построена австро-венграми, использовалась для защиты входа в залив. Артиллерия на 70 пушек. 1942-1943 — итальянцы использовали как концлагерь для черногорских и хорватских партизан. По разным данным — от 100 до 130 заключённых умерло. 1945-1990-е — югославский военный объект. 2000-е — заброшен. 2023 — открыт отель Mamula Island Resort, реконструкция за €15 млн. Что сейчас: отель класса люкс, минимум €1,500 за ночь. Внутри — реконструированная крепость с современным интерьером. Есть пирс для гостей, ресторан, спа. Можно ли зайти: только если вы — гость отеля. С яхты можно сделать фото-стоп, проплыть вокруг (около 15-20 минут на полный круг), посмотреть на бастионы с моря. Что видно с воды: старые каменные стены, бастионы, темнеющие провалы окон, теперь — с белыми зонтиками отеля над ними. Контраст средневековой обороны и современного люкса — фотогеничный, но местные не любят.',
blog_art10_s3_title:'Что пишут историки vs что говорят местные',
blog_art10_s3_desc:'В путеводителях про Мамулу пишут «австро-венгерская крепость» и иногда упоминают итальянский лагерь как примечание. В деревнях вокруг — другая память. Семьи Луштицы помнят имена тех, кто там умер. Открытие отеля в 2023 году было встречено протестами — местные считают, что место с такой историей не должно стать развлечением для богатых. Это сложная точка. Мы не комментируем политику, но если гостям интересно — рассказываем обе стороны. История важнее, чем красивый кадр.',
blog_art10_s4_title:'Как это вписывается в маршрут',
blog_art10_s4_desc:'Все три объекта (доки + Мамула + Голубая пещера) на одной траектории — на юго-западе от Тивата. Стандартный маршрут к пещере: 9:00 — выход из Порто Монтенегро; 9:45 — проход вдоль Луштицы, мимо доков (5-7 минут с замедлением и фото); 10:30 — фото-стоп у Мамулы (15-20 минут вокруг); 11:00-12:30 — Голубая пещера в окне света; 13:00 — обед в Рыбарско Село или Форт Роса; 14:30+ — обратно. Если у вас 8-часовой чартер с пещерой — доки и Мамула уже встроены. Если хотите более глубокое погружение в историю — это 6 часов без пещеры, фокусом на крепости и фьорде с историческими остановками.',
blog_art10_s5_title:'Что обычно не пишут',
blog_art10_s5_desc:'Доки подводных лодок — это пустая база. Не «открытый музей», не «исторический объект для туристов». Это заброшенные тоннели в горах. Без капитана, который умеет рассказать — вы просто видите чёрные арки в скалах. С капитаном — слышите контекст: как военный флот Тито использовал залив, почему именно здесь, что они защищали. Мамула в 2026 — это спорное место. Когда строили отель, в Луштице и Херцег-Нови были протесты. Сейчас протесты стихли, но если разговор зайдёт с местным — лучше не быть восторженным про «красивый отель». Это болезненная точка. И ещё. Не все наши гости интересуются историей. Кто-то приехал поплавать и не хочет лекций. В таком случае мы проходим мимо доков и Мамулы без комментариев — просто проходим. Скажете при бронировании, как вам комфортно.',
blog_art10_s6_title:'Когда лучше остановиться у Мамулы',
blog_art10_s6_desc:'Для фото — утро 9:30-10:30 или закат 18:00-19:00. Утром свет с востока хорошо ложится на бастионы. Вечером — золотое свечение на старых стенах. Чтобы не пересекаться с гостями отеля и их тендерами — лучше будний день, не выходные.',
blog_read_also:'Читайте также',
blog_art4_meta:'Гид по маршруту &bull; 7 мин чтения',
blog_art4_title:'Голубая пещера в Черногории: почему важно попасть ровно в 11–12',
blog_art4_excerpt:'Голубая пещера светится два часа в день. С 11 до 13. После — это серый грот. Почему туристические катера приезжают в три и почему наш выход всегда в 9:00.',
blog_art4_intro:'Голубая пещера светится два часа в день. С 11 до 13. После — это серый грот, как любой другой. Большинство туристических катеров привозят гостей в три часа дня. Их фото получаются мутно-голубыми, в Instagram это списывают на «фильтры». На самом деле они просто опоздали. Свет в пещере — это не реклама. Это физика: солнце под определённым углом проходит через подводный вход, ударяется о белый песчаный дно и подсвечивает воду снизу. Окно работает ровно полтора-два часа в сутки.',
blog_art4_quote:'«Я хожу сюда восемь лет. До сих пор не могу предсказать, какой день будет ярче — зависит от облаков, прилива и, я подозреваю, от настроения моря. Но окно с 11 до 13 — стабильное.» — Капитан Алексей',
blog_art4_s1_title:'Что такое Голубая пещера',
blog_art4_s1_desc:'На местном — Plava Špilja. Природный грот на полуострове Луштица, на западной стороне выхода из Боко-Которского залива. С земли к нему не подойти — только с воды. Вход с моря узкий, внутри пещера расширяется до зала размером с тренировочный бассейн. Под водой — небольшой подводный коридор, через который и проходит свет. Глубина внутри метра три-четыре. Можно зайти на яхте, выключить мотор, и слышно только эхо воды о камень.',
blog_art4_s2_title:'Почему именно 11–12',
blog_art4_s2_desc:'Технически — солнце должно быть достаточно высоко, чтобы луч прошёл через подводный вход. И достаточно высоко, чтобы луч не угасал в толще воды. Угол работает между 10:45 и 13:15, но самое сильное свечение — около полудня. В июне и сентябре окно немного шире — солнце светит почти прямо. В мае и октябре — окно короче, ловить надо точно в полдень. С ноября по апрель — света практически нет, пещера серая.',
blog_art4_s3_title:'Как мы планируем выход',
blog_art4_s3_desc:'Из Порто Монтенегро до пещеры — два часа спокойного хода. Значит выход в 9:00, в 11:00 мы у входа. По дороге — два места, мимо которых не пройти. Доки подводных лодок под Луштицей, бывшая военная база Югославии — тоннели вырезаны прямо в скалах, лодки уже не используются, открыты с моря. И остров Мамула с австро-венгерской крепостью XIX века. В пещере проводим минут тридцать-сорок: заходим, выключаем мотор, плаваем, фотографируем.',
blog_art4_s4_title:'Где обедать',
blog_art4_s4_desc:'Обычно идём в Рыбарско Село — рыбацкое поселение чуть восточнее. Маленький ресторан прямо на причале. Едим то, что поймали утром. Без меню — спрашиваешь, что есть, и заказываешь. Если повезёт — будет дорадо или бранцин, килограмм на двоих. Альтернатива — Форт Роса на стороне Херцег-Нови, в стенах бывшей австро-венгерской крепости. Дороже, более «ресторан». Если хочется поесть на воде, не сходя на берег — даём знать заранее, гриль на корме готовим к 13:30.',
blog_art4_s5_title:'Что после обеда',
blog_art4_s5_desc:'Идём обратно через залив, с остановкой у острова Страдиоти. Купание в открытом море перед закрытыми водами залива — последний шанс перед маршем обратно в Тиват. В августе вода ещё 25°C, в сентябре — 22°C, в октябре — около 19°C, но если день солнечный, заходить можно.',
blog_art4_s6_title:'Что взять с собой',
blog_art4_s6_desc:'Купальник — будете в воде минимум час за день. GoPro или телефон в водонепроницаемом чехле — внутри пещеры есть несколько кадров, которые ни один фотограф с берега не снимет. Лёгкая одежда — в Рыбарско Село можно прийти в шортах. Солнцезащитный крем — на обратном пути будете на солнечной палубе три часа. Ласты не нужны: внутри пещеры мелко.',
blog_art4_s7_title:'Что обычно не пишут',
blog_art4_s7_desc:'В июле и августе у входа в пещеру очередь — лодки-такси из Херцег-Нови привозят туристов партиями. Стоим минут десять-пятнадцать, ждём окно. В это время мы открываем шампанское на палубе, никто не жалуется. Если в день чартера восточный ветер сильнее 15 узлов — пещера небезопасна для захода. Решаем заранее, в этом случае переключаемся на маршрут по Боко-Которскому заливу. Это не запасной вариант — это другой день, тоже хороший, просто другой. И ещё: иногда свет в пещере не такой, как мог бы быть — облако стоит над Луштицей или волна мутная. Фото всё равно получаются, просто не «жидкий неон», а «приглушённый синий».',
blog_art4_s8_title:'Когда писать',
blog_art4_s8_desc:'Окна на Голубую пещеру в сезон забиваются за две-три недели. В июле и августе — за месяц. Если есть конкретная дата — пишите сразу, мы посмотрим прогноз и забронируем. Маршрут идёт как 8-часовой чартер — €2,600. Можно растянуть до 12 часов (€3,000), если хочется добавить вечернее купание и закат на палубе.',
blog_art5_meta:'Прозрачные цены &bull; 6 мин чтения',
blog_art5_title:'4 часа на яхте в Тивате за €2 200: что входит, что нет и стоит ли',
blog_art5_excerpt:'€2 200 за 4 часа — это €550 в час за всю яхту (до 16 гостей). Что входит, что нет и когда лучше брать 6 часов.',
blog_art5_intro:'€2 200 за 4 часа — это €550 в час за яхту до 16 гостей. На компанию из десяти выходит €220 на человека за полдня в Боко-Которском заливе. Меньше, чем стоит ужин с вином в среднем ресторане Котора. Это самый короткий чартер, который мы делаем. Половина гостей берёт его, потому что они в Черногории один день — между круизом и автобусом. Другая половина — семьи с детьми младше восьми лет, которые на воде дольше четырёх часов не выдерживают.',
blog_art5_quote:'«Четыре часа — это один выход на воду. Не туристический маршрут, а буквально одно место, где удобно поплавать и посмотреть на залив. Хочется больше — берите шесть.» — Капитан Алексей',
blog_art5_s1_title:'Маршрут на 4 часа',
blog_art5_s1_desc:'Выходим из Порто Монтенегро. Полчаса идём вглубь Боко-Которского залива — мимо паромов в Каменари, мимо горных стен по обе стороны. Останавливаемся в одной точке для купания. Чаще всего это остров Богородицы на Рифе — Госпа од Шкрпела, рукотворный остров с маленькой барочной церковью, его строят камень за камнем с 1452 года. Якорь рядом, купание в воде, в которой видно дно на десять метров. Альтернатива по погоде или по запросу — Моринь, тихая бухта у подножия гор. Там вода чуть холоднее из-за горных источников, зато никого. Или Пераст — пришвартоваться на час, пройти по набережной. Полтора часа на стоянке. Потом — обратно в Тиват. До Котора не доходим: туда нужно минимум шесть часов, чтобы было нормально, а не «успеть и убежать».',
blog_art5_s2_title:'Что входит в €2 200',
blog_art5_s2_desc:'Яхта Marea (18 метров) с капитаном и стюардом. Топливо на маршруте в пределах 4 часов. Welcome drink при встрече — бокал просекко или безалкогольный коктейль. Снаряжение для купания: SUP-доски, маски для снорклинга, надувные шезлонги, подводный скутер. Страховка на всех пассажиров — оформляется автоматически, без отдельной строки в чеке. Bluetooth-колонки — подключайте свой плейлист. Полотенца, лёд, вода, фрукты — стюард приносит без напоминания. Портовых сборов нет. Мы базируемся в Порто Монтенегро, выход из родной марины — без отдельной оплаты.',
blog_art5_s3_title:'Что не входит',
blog_art5_s3_desc:'Еда. Обед или закуски — по запросу, оплачивается отдельно. Два варианта: (1) Гриль на корме — покупаем продукты заранее, готовим на воде. Дорадо, тигровые креветки, овощи, местный сыр — обычно €40–60 на человека. Хорошо, если хотите остаться на якоре и не сходить на берег. (2) Покупка с воды — в Каменари устриц можно заказать прямо с яхты (лодка привозит дюжину минут за двадцать), или поднос морепродуктов из прибрежного ресторана у Прчаня или Перастa. Алкоголь сверх welcome drink — можно привезти своё или взять у нас по запросу. Бокал на встрече входит, остальное — по факту. Премиум-добавки: личный шеф, фотограф, праздничный декор, дополнительные часы — добавляются при бронировании. Цены на странице с маршрутами.',
blog_art5_s4_title:'Кому подходит 4 часа',
blog_art5_s4_desc:'Семьи с детьми младше восьми лет — дольше дети не выдерживают: солнце, ветер, новое место. Четыре часа — хорошая первая яхта в жизни ребёнка. Гости проездом — прилетели в Тиват утром, к вечеру улетаете в Дубровник. Между утром и вечером — четыре часа на воде. Те, кто сомневается — не уверены, понравится ли провести день на яхте? Возьмите 4 часа. Понравится — следующий раз берите 8.',
blog_art5_s5_title:'Когда лучше брать 6 или 8',
blog_art5_s5_desc:'Если хотите дойти до Котора — нужно шесть часов минимум. Туда полтора часа, обратно полтора, на сам Котор — ещё хотя бы час. В 4 часа не успеть. Если хотите попасть в Голубую пещеру — это отдельный маршрут на 8 часов (€2 600). Свет в пещере ловится с 11 до 13 — короткий чартер сюда не вписывается. Если хотите закат на воде — берите 8 или 12 часов. Золотой час летом в 19:30–20:30. В 4-часовом чартере мы возвращаемся в марину к 13:00 или 17:00, не во время заката.',
blog_art5_s6_title:'Что обычно не пишут',
blog_art5_s6_desc:'Четыре часа — это минимум, который имеет смысл. Меньше — это просто покататься. На четыре часа мы соглашаемся охотно, когда у гостя нет другого варианта (один день в Черногории, маленький ребёнок). Но если есть выбор между 4 и 6 — берите 6. €200 разницы (€2 400) дают возможность дойти до Прчаня и собора, или зайти в Котор на полчаса. Это меняет день целиком. И ещё: welcome drink — это бокал, не неограниченный бар. Если планируете дольше пить — скажите при бронировании, мы привезём бутылку и поставим в холодильник на борту.',
blog_art5_s7_title:'Когда писать',
blog_art5_s7_desc:'В сезон 4-часовые слоты иногда есть в той же неделе — короткие выходы заполняются последними. В июле и августе — пишите минимум за неделю.',
blog_art6_meta:'Места от капитана &bull; 8 мин чтения',
blog_art6_title:'5 якорных стоянок у побережья Черногории, куда не возят туристов',
blog_art6_excerpt:'Плави Горизонт, Жанница, секретный пляж после Святого Стефана, Бигова — пять стоянок, которые капитан находит, когда устаёт от толп.',
blog_art6_intro:'Котор, Будва, Свети-Стефан. Эти три точки знает каждый путеводитель и каждый туристический катер. К часу дня там — толпа, лодки, парковка в три ряда. Если хотите тишину — на маршруте полдня есть пять мест, куда не приходят туристические катера. Все доступны только с воды. На некоторых из них в августе мы по-прежнему стоим одни.',
blog_art6_quote:'«За пятнадцать лет я нашёл места, куда не идут даже местные катера-такси. Не потому что секретные — просто туда не выгодно возить группами. Слишком тихо, нечего показать на камеру.» — Капитан Алексей',
blog_art6_s1_title:'1. Плави Горизонт',
blog_art6_s1_desc:'На юге Луштицы, западнее Голубой пещеры. С греческого Plavi Horizont — «голубой горизонт». Это не пляж, а большая открытая бухта с видом в Адриатику. Вода глубокая прямо у входа — заходим, бросаем якорь, плаваем. Дно белое, песчаное, вода в августе 25–26 °C. Никаких прибрежных ресторанов, никаких толп. Иногда стоят две-три парусные яхты на якоре, и всё. Удобно тем, что находится по пути обратно от Голубой пещеры. Если у вас 8-часовой чартер с пещерой — Плави Горизонт логично встроить во вторую половину дня.',
blog_art6_s2_title:'2. Жанница',
blog_art6_s2_desc:'Рядом с Голубой пещерой, но технически — другая бухта, западнее. Большинство туристических катеров останавливается у самой пещеры на двадцать минут и идёт дальше. Жанницу пропускают. Здесь — каменистый пляж у подножия скал, кристальная вода глубиной 4–6 метров, никаких построек на берегу. Один маленький кафе-бар на воде, но он часто закрыт. Идеально для второго купания после пещеры. В июле здесь иногда стоят 5–7 яхт, в сентябре — две-три. В октябре — тишина и пустой берег.',
blog_art6_s3_title:'3. Секретный пляж после Святого Стефана',
blog_art6_s3_desc:'К югу от Святого Стефана, не доходя до Будвы. Маленький галечный пляж, спрятанный за мысом. С земли — только тропа по скалам, по которой никто не ходит. С воды видно лестницу, которая ведёт наверх к чьей-то частной вилле. Сам пляж — общий, но добраться до него можно только если знаете точку. Якорь в двадцати метрах от берега. Заходим на яхте, ставим скутер, плывём к пляжу — пятнадцать минут хода. Снимать видно сверху, с дрона, ничего особенного. Зато на самом пляже в июле — пять человек, не пятьсот.',
blog_art6_s4_title:'4. Бигова',
blog_art6_s4_desc:'Рыбацкая деревня на полуострове Луштица, с маленькой марины. Здесь живут пятьдесят семей и работает один настоящий рыбный ресторан — без меню, без вывески, просто стулья на причале. Бросаем якорь в бухте, доходим до берега на тендере. Спрашиваем, что сегодня поймали. Заказываем без обсуждения — что есть, то и едим. Обычно дорадо, иногда осьминог, иногда то, чего вы не пробовали в Котор. Бигова — это обед на 1.5 часа, не быстрая остановка. Хорошо вписывается в 8-часовой маршрут «Уединённый» (Маршрут #4). Платите за столом, цены — €30–50 на человека с вином.',
blog_art6_s5_title:'5. Якорная стоянка на обратном пути с видом на Luštica Bay',
blog_art6_s5_desc:'Без официального имени. Это просто бухта на западной стороне Луштицы, между мысом и заходом в Боко-Которский залив. Подходит для остановки на час перед возвращением в Тиват. Что её отличает: с якоря открывается вид прямо на марину Luštica Bay — современный курорт, новые здания, белые яхты у причалов. Это контраст: вы стоите в дикой бухте, перед вами — глянцевый курорт за €10 000 за ночь. Купание глубокое — метров шесть. Дети плавают в кругах от стюарда, взрослые с борта.',
blog_art6_s6_title:'Что ещё стоит знать',
blog_art6_s6_desc:'Помимо этих пяти, есть две точки, которые мы предлагаем по запросу: Дурашевичи — ресторан напротив Страдиоти с понтоном для яхт. Красивый вид на залив, очень спокойное место. Подходит для ужина с заходом солнца. Розе — на восточном берегу Луштицы, у выхода в Адриатику. Тихий каменистый пляж, обычно ставится одна-две яхты. По пути к Голубой пещере. В межсезонье (май, октябрь) добавляются точки, куда летом не пройти из-за толп — например, Перast в полную пустоту в 10 утра в мае. Это уже другой разговор.',
blog_art6_s7_title:'Что обычно не пишут',
blog_art6_s7_desc:'Не все эти места работают при любой погоде. Плави Горизонт небезопасна при сильном западном ветре — открытая бухта. В такие дни мы её пропускаем. В июле и августе даже «секретные» места становятся менее тихими. Парусные яхты — постоянные клиенты Плави Горизонта в высокий сезон. Если хочется реальной тишины — июнь или сентябрь. И ещё. Бигова — деревня, а не туристический бренд. Если приехать в августовскую субботу в обед, может не быть свободного стола. Звоним заранее с борта, обычно держат столик для нас.',
blog_art6_s8_title:'Как добавить эти места в маршрут',
blog_art6_s8_desc:'Все пять стоянок входят в Маршрут #4 «Уединённый» (8 часов, €2 600). По запросу мы строим из них любую комбинацию — обычно 2–3 точки за день, с обедом и купанием. Также часть из них можно добавить к Маршруту #3 «Луштица Бей» (6 часов, €2 400) — например, заменить Almara Beach Club на Жанницу + Плави Горизонт, если хочется без музыки и коктейлей.',
pricing_eyebrow:'Прозрачные цены',
pricing_h2:'Стоимость чартера',
pricing_sub:'Выберите длительность. Маршрут спланируем под вас.',
pricing_4h:'4 часа', pricing_6h:'6 часов', pricing_8h:'8 часов',
pricing_12h:'12 часов', pricing_24h:'24 часа', pricing_multi:'2+ дня',
pricing_perday:'в сутки',
ig_eyebrow:'Instagram',
ig_h2:'@yacht.mne',
ig_sub:'Каждую неделю — кадры с воды: маршруты, закаты, гриль на борту.',
ig_cta:'Открыть в Instagram',
sub_eyebrow:'Рассылка',
sub_h2:'Скидки и свободные даты — раз в месяц',
sub_p:'Одно письмо в месяц: открытые окна в расписании, сезонные скидки и заметки капитана о лучших маршрутах в текущем месяце.',
sub_cta:'Получать письма',
sub_note:'Никакого спама. Отписаться — в один клик.',
sub_success:'Готово. Ближайшее письмо придёт в начале следующего месяца.',
sub_sending:'Отправка...',
sub_error:'Что-то пошло не так. Попробуйте ещё раз.',
meta_title:'MonteYacht — Частный яхтенный чартер из Порто Монтенегро',
meta_desc:'Частный чартер на 18-метровой яхте Marea в Боко-Которском заливе. До 16 гостей днём, до 6 с ночёвкой. Капитан с 15-летним опытом. Ответ за 2 часа.',
nav_gift:'Сертификат',
gift_eyebrow:'Подарок',
gift_h1:'Подарите день на воде',
gift_sub:'Сертификат на частный чартер у побережья Черногории. Высылаем красивый PDF в течение 2 часов после заказа — можно переслать получателю или распечатать.',
gift_how_eyebrow:'Просто',
gift_how_h2:'Как это работает',
gift_step1_h:'Выберите подарок',
gift_step1_p:'Выберите сумму или маршрут ниже.',
gift_step2_h:'Заполните детали',
gift_step2_p:'Укажите имя получателя и добавьте личное сообщение.',
gift_step3_h:'Получите сертификат',
gift_step3_p:'PDF придёт на вашу почту в течение 2 часов.',
gift_options_eyebrow:'Сумма или маршрут',
gift_options_h2:'Варианты',
gift_tab_amount:'По сумме',
gift_tab_package:'По маршруту',
gift_amt_500:'Вкус Адриатики',
gift_amt_1000:'Полдня на воде',
gift_amt_2000:'Полный день на воде',
gift_amt_3000:'День с ночёвкой',
gift_popular:'Популярный выбор',
gift_preview_eyebrow:'Как выглядит сертификат',
gift_preview_h2:'Ваш сертификат',
gift_preview_sub:'Введите имя получателя, чтобы увидеть, как будет выглядеть сертификат.',
gift_cert_placeholder:'Имя получателя',
gift_cert_title:'Подарочный сертификат',
gift_cert_for:'Вручается',
gift_cert_desc:'Частный яхтенный чартер у побережья Черногории',
gift_cert_validity:'Действителен 12 месяцев',
gift_form_h2:'Заказать сертификат',
gift_form_info:'PDF придёт вам на почту за 2 часа. Перешлите получателю или распечатайте — оформление красивое.',
gift_b1:'Действителен 12 месяцев',
gift_b2:'Можно передать',
gift_b3:'Любой маршрут на выбор',
gift_b4:'PDF за 2 часа',
gift_f_buyer:'Ваше имя',
gift_f_type:'Что дарите',
gift_f_value:'Сумма или маршрут',
gift_f_recipient:'Имя получателя',
gift_f_message:'Личное сообщение (необязательно)',
gift_f_delivery:'Формат доставки',
gift_f_email_pdf:'PDF на email',
gift_f_print_pdf:'PDF для печати',
gift_f_submit:'Заказать — пришлём за 2 часа',
gift_success_h:'Запрос принят',
gift_success_p:'Сертификат придёт на вашу почту в течение 2 часов. Если письма нет — проверьте папку «Промо» или «Спам».',
gift_faq_h2:'Вопросы про сертификаты',
gift_faq1_q:'Какой срок действия сертификата?',
gift_faq1_a:'12 месяцев с даты покупки. Если нужно дольше — напишите, продлим.',
gift_faq2_q:'Как получатель бронирует?',
gift_faq2_a:'Напишет нам с кодом сертификата (он в PDF). Дальше — как с обычным бронированием: согласуем дату, маршрут и пожелания за день до выхода.',
gift_faq3_q:'Можно ли выбрать конкретную дату?',
gift_faq3_a:'Да. Получатель сам выбирает удобную дату в течение 12 месяцев действия сертификата.',
gift_faq4_q:'Какова политика возврата?',
gift_faq4_a:'Возврат денег не делаем, но сертификат можно передать другому человеку без ограничений — просто скажите получателю код.',
nav_crew:'Экипаж',
crew_eyebrow:'Кто будет с вами на воде',
crew_h1:'Экипаж',
crew_sub:'Один капитан с 2010 года, помощник и стюард. Маленькая команда — каждый знает гостей по имени к концу дня.',
crew_captain_role:'Капитан',
crew_captain_name:'Капитан Алексей',
crew_captain_bio:'С 2010 года Алексей принимает по одному чартеру в день на этой яхте. Знает Боко-Которский залив без карт: где брать устрицы в Каменари (заказ с воды — привезут на лодку), почему Голубую пещеру надо ловить в 11–12, в какой бухте лучше встать на закат при северо-западном ветре. Yacht Master Offshore, 50 000+ морских миль по Средиземноморью.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'STCW',
crew_cert_first_aid:'Расширенная первая помощь',
crew_cert_experience:'15 лет на этих водах',
crew_captain_quote:'«Спустя все эти годы Которский залив по-прежнему завораживает меня каждое утро. Делиться этим ощущением с гостями — лучшая работа в мире.»',
crew_team_eyebrow:'Наша команда',
crew_team_h2:'Экипаж',
crew_member1_name:'Помощник капитана',
crew_member1_role:'Навигация и водные виды спорта',
crew_member1_bio:'Отвечает за безопасность на воде, оборудование для снорклинга и SUP, водные игры. Сертифицированный инструктор по дайвингу — знает лучшие точки для подводного снорклинга вдоль побережья.',
crew_member2_name:'Стюард на борту',
crew_member2_role:'Сервис и кухня',
crew_member2_bio:'Встречает на причале, накрывает завтрак, стоит у гриля, разносит напитки. Знает гостей по имени к третьей остановке маршрута.',
crew_trust_eyebrow:'Безопасность',
crew_trust_h2:'Сертификаты, страховка, лицензия',
crew_trust_sub:'Все пассажиры застрахованы автоматически. Лицензия Морской администрации Черногории. Экипаж сертифицирован по STCW и нормам ЕС. Спасжилеты — на каждого, включая детские размеры.'
}
};
const faqs = [
{q:{en:'What\'s included in the charter price?',ru:'Что включено в стоимость чартера?'},a:{en:'The yacht with captain and crew, fuel within the route, insurance for all passengers, SUP boards, snorkelling masks and an underwater scooter, bed linens and towels. Food, drinks, and port fees in Kotor — separate, at cost, no markup.',ru:'В стоимость входит яхта с капитаном и экипажем, топливо в пределах маршрута, страховка для всех пассажиров, SUP-доски, маски для снорклинга и подводный скутер, постельное бельё и полотенца. Еда, напитки и портовые сборы в Которе — отдельно, по факту, без наценки.'}},
{q:{en:'Do I need a boating license?',ru:'Нужна ли мне лицензия на управление судном?'},a:{en:'No. On every charter — our captain with 15 years on these waters. No license, no experience needed.',ru:'Нет. На каждом чартере — наш капитан с 15-летним опытом на этих водах. Вам не нужны ни лицензия, ни опыт.'}},
{q:{en:'What\'s the cancellation policy?',ru:'Какова политика отмены?'},a:{en:'14+ days before departure — free cancellation, full refund. 14–7 days — 50% refund. Less than 7 days — no refund. Rescheduling to other dates — always free, if they\'re available.',ru:'За 14+ дней до выхода — отмена бесплатная, полный возврат. За 14–7 дней — возврат 50%. Менее 7 дней — без возврата. Перенос на другие даты — всегда бесплатно, если они свободны.'}},
{q:{en:'Can we customize the itinerary?',ru:'Можно ли настроить маршрут?'},a:{en:'Of course — that\'s the point of a private charter. We agree on the route with you the day before departure based on weather, wind, and what you want to see. We also adjust on the day — where to linger, where to move on.',ru:'Конечно — это и есть смысл частного чартера. Маршрут согласуем с вами за день до выхода с учётом погоды, ветра и того, что хотите увидеть. По ходу дня тоже корректируем — где задержаться, где плыть быстрее.'}},
{q:{en:'What\'s the best season for chartering?',ru:'Какое лучшее время для чартера?'},a:{en:'The season runs May through October. June and September are our favourite: warm water, calm winds, few tourist boats in the bay. July and August are peak — beautiful but busy at the main stops. May and October — the friendliest prices and empty coves.',ru:'Сезон — с мая по октябрь. Июнь и сентябрь — наш фаворит: тёплая вода, спокойный ветер, мало туристических катеров в заливе. Июль и август — пик, всё прекрасно, но на основных остановках многолюдно. В мае и октябре — самые приятные цены и пустые бухты.'}},
{q:{en:'How many guests can join?',ru:'Сколько гостей может быть на борту?'},a:{en:'Up to 16 guests for day charters, up to 6 with overnight (4 cabins). For larger groups we do a day charter — lunch on the water, swimming, and back by evening.',ru:'До 16 гостей в дневном чартере, до 6 — с ночёвкой (4 каюты). Для больших компаний делаем дневной выход — обедаем на воде, плаваем и возвращаемся вечером.'}},
{q:{en:'Is there a bathroom and shower on board?',ru:'Есть ли туалет и душ на борту?'},a:{en:'Yes. 2 bathrooms on board with hot-water showers. Fresh water is replenished every morning.',ru:'Да, на борту 2 санузла с душем и горячей водой. Пресная вода пополняется каждое утро.'}},
{q:{en:'Can we bring children?',ru:'Можно ли с детьми?'},a:{en:'Of course. We have child-sized life jackets, inflatable loungers and toys on board, and a kid-friendly menu on request. Just tell us the children\'s ages at booking so we can prepare.',ru:'Конечно. На борту детские спасжилеты, надувные шезлонги и игрушки, детское меню — по запросу. Скажите возраст детей при бронировании, чтобы мы подготовились.'}},
{q:{en:'Can we bring a dog?',ru:'Можно ли с собакой?'},a:{en:'Small and medium dogs are welcome — we have a designated area on the sundeck and freshwater bowls on board. Mention your dog when booking so we can prepare.',ru:'Маленьких и средних собак берём — есть зона на солнечной палубе и миски с пресной водой. Скажите при бронировании, чтобы подготовиться.'}},
{q:{en:'Where do I park at Porto Montenegro?',ru:'Где парковаться в Порто Монтенегро?'},a:{en:'The marina has paid covered parking right at the entrance — about €5 per day. We send the exact location pin via WhatsApp the day before your charter.',ru:'У марины есть крытая платная парковка прямо у входа — около €5 в сутки. Точную геолокацию пришлём в WhatsApp за день до выхода.'}},
{q:{en:'What if there\'s a storm on the day?',ru:'Что если в день чартера шторм?'},a:{en:'The captain decides. If the weather is unsafe — we reschedule to any available date for free, no cancellation fees, no questions asked. We watch the forecast 48 hours ahead and reach out if there\'s any risk.',ru:'Решение принимает капитан. Если погода небезопасна — переносим на любую свободную дату бесплатно, без штрафов. Прогноз смотрим за 48 часов и связываемся, если есть риск.'}}
];
const reviews = [
{
text:{en:'We took the Boka Bay route for our family vacation — 6 hours that felt like a dream. Our kids couldn\'t stop jumping off the yacht into the crystal-clear water near Perast. The captain anchored us in a cove where we were completely alone. Lunch at a seafood restaurant in Kotor was the cherry on top. The crew kept our toddler safe the entire time — real professionals.',ru:'Мы выбрали маршрут по Боке Которской для семейного отдыха — 6 часов, пролетевших как сон. Дети не могли остановиться, прыгая с яхты в кристально чистую воду у Пераста. Капитан встал на якорь в бухте, где мы были совершенно одни. Обед в рыбном ресторане Котора стал вишенкой на торте. Экипаж следил за нашим малышом всё время — настоящие профессионалы.'},
route:'classic-boka',
name:'James & Sarah', loc:{en:'London, UK',ru:'Лондон, Великобритания'}, stars:5,
avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
},
{
text:{en:'Came for the Blue Cave and got so much more. The light inside is unreal — my iPhone photos look like they were taken on another planet. Then Mamula Island completely blew us away: swimming around a 19th-century fortress feels surreal. Captain Alexey timed everything perfectly so we hit the cave at peak light. We did the 8-hour charter and every minute was worth it.',ru:'Приехали ради Голубой пещеры и получили гораздо больше. Свет внутри нереальный — фото на iPhone выглядят как с другой планеты. Потом остров Мамула полностью поразил: плавать вокруг крепости XIX века — это сюрреально. Капитан Алексей рассчитал всё идеально — мы попали в пещеру на пике освещения. Взяли 8-часовой чартер и каждая минута того стоила.'},
route:'blue-cave',
name:{en:'Michael',ru:'Михаил'}, loc:{en:'Moscow, Russia',ru:'Москва, Россия'}, stars:5,
avatar:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
},
{
text:{en:'We celebrated our anniversary aboard — chose the Secluded Escape and it was the best decision. Dobrec beach is paradise: no roads, no crowds, just us and the turquoise water. The restaurant there served fish that was literally caught an hour before. In the evening we sailed to Bigova for sunset dinner — grilled octopus with local wine while the sun set behind the mountains. Pure romance.',ru:'Мы праздновали годовщину на борту — выбрали уединённый маршрут, и это было лучшим решением. Пляж Добреч — рай: ни дорог, ни толп, только мы и бирюзовая вода. Ресторан там подал рыбу, буквально пойманную час назад. Вечером приплыли в Бигову на ужин — жареный осьминог с местным вином, пока солнце садилось за горы. Чистая романтика.'},
route:'secluded',
name:'Sophie & Marc', loc:{en:'Paris, France',ru:'Париж, Франция'}, stars:5,
avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
},
{
text:{en:'Third summer chartering with MonteYacht — this time we did the Luštica Bay route with friends. Blue Horizon beach has the best sand in Montenegro, hands down. Then Almara Beach Club was absolutely our scene — cocktails, great DJ, yacht people everywhere. We upgraded to The Pack of Four this time: the champagne and fruit platter on arrival really set the tone. Already booked for August.',ru:'Третье лето с MonteYacht — на этот раз прошли маршрут Луштица Бей с друзьями. Пляж Blue Horizon — лучший песок в Черногории, без вариантов. Потом бич-клуб Almara — это абсолютно наша атмосфера: коктейли, отличный DJ, яхтенная публика повсюду. В этот раз взяли пакет «Все четыре»: шампанское и фруктовая тарелка при встрече задали тон всему дню. Уже забронировали на август.'},
route:'lustica',
name:{en:'Alexander',ru:'Александр'}, loc:{en:'Berlin, Germany',ru:'Берлин, Германия'}, stars:5,
avatar:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
},
{
text:{en:'Booked MonteYacht for a corporate event — 12 people, full-day charter. The crew handled everything: the BBQ was incredible (they grilled fresh prawns and sea bass right on deck), the sound system kept the energy up, and the captain found us a private swimming spot that felt like our own island. Several colleagues have already booked their own charters since. That says it all.',ru:'Забронировали MonteYacht для корпоратива — 12 человек, чартер на весь день. Экипаж взял всё на себя: барбекю было невероятным (креветки и сибас прямо на палубе), аудиосистема держала настроение, а капитан нашёл приватное место для купания — как собственный остров. Несколько коллег уже забронировали свои чартеры. Это говорит само за себя.'},
route:'classic-boka',
name:{en:'Elena',ru:'Елена'}, loc:{en:'Dubai, UAE',ru:'Дубай, ОАЭ'}, stars:5,
avatar:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
},
{
text:{en:'We spent two nights aboard for our honeymoon — the cabins are being completely renovated and even now they\'re cozy and private. Waking up anchored in Kotor Bay with mountains all around you... there\'s nothing like it. The crew prepared a candlelit dinner on the deck our first evening. Worth every euro of the multi-day rate.',ru:'Мы провели две ночи на борту в медовый месяц — каюты полностью обновляются, и даже сейчас они уютные и приватные. Просыпаться на якоре в Которском заливе с горами вокруг... ничего подобного нет. Экипаж устроил ужин при свечах на палубе в первый вечер. Стоит каждого евро мульти-дневного тарифа.'},
route:'multiday',
name:{en:'Takeshi & Yuki',ru:'Такеши и Юки'}, loc:{en:'Tokyo, Japan',ru:'Токио, Япония'}, stars:5,
avatar:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
}
];
const routes = [
{
  id:'classic-boka',
  name:{en:'Boka Bay',ru:'Боко-Которский залив'},
  dur:{en:'6 hours',ru:'6 часов'},
  price:'€2,400',
  badge:{en:'Most Popular',ru:'Популярный'},
  img:'images/16-cheers-kotor.jpg',
  alt:{en:'Champagne toast with Our Lady of the Rocks in Kotor Bay',ru:'Тост шампанским на фоне Богородицы на Рифе в Которском заливе'},
  desc:{en:'The main route of the bay — past ferries, islands, and medieval towns. On the way we order oysters in Kamenari (delivered to the boat from the water), dock in Perast, or stop at the museum on Our Lady of the Rocks. On to Kotor and back — with a swim at Stradioti island.',ru:'Основной маршрут залива — мимо паромов, островов и средневековых городов. По пути закажем устриц в Каменари (привезут прямо на лодку с воды), пришвартуемся в Перасте или заглянем в музей на Госпа од Шкрпела. К Котору и обратно — с купанием у острова Страдиоти.'},
  audience:{en:'Families · Couples · First-time visitors',ru:'Семьи · Пары · Первый визит'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Departure from the superyacht marina',ru:'Отправление от марины суперяхт'}},
    {name:{en:'Our Lady of the Rocks',ru:'Остров Богородицы на Рифе'},note:{en:'Photo stop from the water — the island built stone by stone since 1452',ru:'Фотостоп с воды — остров, построенный камень за камнем с 1452 года'}},
    {name:{en:'Perast',ru:'Пераст'},note:{en:'Baroque waterfront town with 16 palaces — photo stop & swimming',ru:'Барочный город с 16 дворцами — фотостоп и купание'}},
    {name:{en:'Kotor Old Town',ru:'Старый город Котор'},note:{en:'UNESCO-protected medieval city — seafood restaurants & swimming in the bay',ru:'Средневековый город UNESCO — рыбные рестораны и купание в заливе'}},
    {name:{en:'Stradioti swim stop',ru:'Купание у Страдиоти'},note:{en:'Swim at Stradioti island on the way back to Tivat',ru:'Купание у острова Страдиоти на обратном пути в Тиват'}},
    {name:{en:'Return to Porto Montenegro',ru:'Возвращение в Порто Монтенегро'},note:{en:'Sunset views over the bay on the way back',ru:'Виды заката над заливом по пути назад'}}
  ]
},
{
  id:'blue-cave',
  name:{en:'Blue Cave Adventure',ru:'Приключение к Голубой пещере'},
  dur:{en:'8 hours',ru:'8 часов'},
  price:'€2,600',
  badge:{en:'Adventure',ru:'Приключение'},
  img:'images/19-damjane-sunset.jpg',
  alt:{en:'Our yacht cruising at sunset — Blue Cave Adventure',ru:'Наша яхта на закате — приключение к Голубой пещере'},
  desc:{en:'To the Blue Cave — you need to be there between 11 and 12, otherwise there\'s no blue glow. Straight there: along the Luštica peninsula, past the submarine docks and Mamula fortress. On the way back — lunch at Rybarsko Selo or Fort Rose, swim at Stradioti.',ru:'К Голубой пещере — туда нужно успеть в 11–12, иначе нет того синего света. Сразу идём туда: вдоль Луштицы, мимо доков подводных лодок и крепости Мамула. На обратном пути — обед в Рыбарско Село или Форт Роса, купание у острова Страдиоти.'},
  audience:{en:'Adventurers · Photographers · Groups',ru:'Искатели приключений · Фотографы · Группы'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Morning departure along the coast',ru:'Ранний выход — чтобы успеть к Голубой пещере к 11–12'}},
    {name:{en:'Submarine docks',ru:'Доки подводных лодок'},note:{en:'Short pass by the former military base — tunnels in cliffs, off the tourist track',ru:'Короткий проход мимо бывшей военной базы — тоннели в скалах, мало кто знает'}},
    {name:{en:'Mamula Island',ru:'Остров Мамула'},note:{en:'19th-century Austro-Hungarian fortress — swimming & snorkeling',ru:'Австро-венгерская крепость XIX века — фото с моря по пути к пещере'}},
    {name:{en:'Blue Cave (Plava Špilja)',ru:'Голубая пещера (Плава Шпиля)'},note:{en:'Magical blue light effect — best between 11:00 and 14:00',ru:'Заходим в 11–12 — иначе нет того голубого света'}},
    {name:{en:'Rybarsko Selo or Fort Rose',ru:'Рыбарско Село или Форт Роса'},note:{en:'Lunch on water or on shore — your choice',ru:'Обед на воде или на берегу — два варианта на ваш выбор'}},
    {name:{en:'Return to Porto Montenegro',ru:'Возвращение в Порто Монтенегро'},note:{en:'Swim stop at Stradioti island on the way back',ru:'Купание у острова Страдиоти на обратном пути'}}
  ]
},
{
  id:'lustica',
  name:{en:'Luštica Bay',ru:'Луштица Бей'},
  dur:{en:'6 hours',ru:'6 часов'},
  price:'€2,400',
  badge:{en:'Beach & Lounge',ru:'Пляж и лаунж'},
  img:'images/03-bow-party.jpg',
  alt:{en:'Friends enjoying the sun on the bow deck — Luštica Explorer',ru:'Друзья на носовой палубе — маршрут Лустица'},
  desc:{en:'A beach day along Luštica. Golden sand and turquoise shallows at Blue Horizon, a quick stop at the Blue Cave, then cocktails and DJ sets at Almara — a known beach club on the coast. Weather permitting, we drop anchor at Plavi Horizont on the way back.',ru:'Пляжный день вдоль Луштицы. Золотой песок и бирюзовое мелководье Blue Horizon, заход в Голубую пещеру, потом коктейли и DJ-сеты в Almara — известный бич-клуб побережья. По погоде на обратном пути — якорь у Плави Горизонт.'},
  audience:{en:'Friends · Young groups · Beach lovers',ru:'Друзья · Молодые компании · Любители пляжей'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Departure towards Luštica peninsula',ru:'Выход к полуострову Лустица'}},
    {name:{en:'Blue Horizon Beach',ru:'Пляж Blue Horizon'},note:{en:'Golden sand, shallow water — one of Montenegro\'s few sandy beaches',ru:'Золотой песок, мелководье — один из немногих песчаных пляжей Черногории'}},
    {name:{en:'Blue Cave',ru:'Голубая пещера'},note:{en:'Quick detour for the famous blue glow',ru:'Заезд к знаменитому голубому сиянию'}},
    {name:{en:'Almara Beach Club',ru:'Бич-клуб Almara'},note:{en:'Cocktails, Mediterranean lunch, DJ — the yacht-crowd\'s favourite',ru:'Коктейли, средиземноморский обед, DJ — любимое место яхтсменов'}},
    {name:{en:'Return to Porto Montenegro',ru:'Возвращение в Порто Монтенегро'},note:{en:'Short scenic cruise home',ru:'Короткий живописный путь домой'}}
  ]
},
{
  id:'secluded',
  name:{en:'Secluded Escape',ru:'Уединённый маршрут'},
  dur:{en:'8 hours',ru:'8 часов'},
  price:'€2,600',
  badge:{en:'Gourmet & Relax',ru:'Гурман и релакс'},
  img:'images/02-sundeck-bay.jpg',
  alt:{en:'Peaceful sundeck view over Kotor Bay mountains — Secluded Escape',ru:'Спокойный вид с палубы на горы Которского залива — Уединённый маршрут'},
  desc:{en:'For those who seek silence. Anchorages where there are no tourist boats: Plavi Horizont, the secret beach past Sveti Stefan, a quiet anchorage on the way back with a view of Luštica Bay. Lunch in Bigova from the day\'s catch, sunset at anchor.',ru:'Для тех, кто ищет тишину. Стоянки, где нет туристических катеров: Плави Горизонт, секретный пляж после Святого Стефана, тихая бухта на обратном пути с видом на Luštica Bay. Обед в Биговой из улова дня, закат на якоре.'},
  audience:{en:'Couples · Privacy seekers · Foodies',ru:'Пары · Ценители уединения · Гурманы'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Relaxed late-morning departure',ru:'Спокойный выход поздним утром'}},
    {name:{en:'Plavi Horizont',ru:'Плави Горизонт'},note:{en:'Quiet anchorage — swimming in full privacy, only yachts at anchor',ru:'Тихая бухта — купание в полной приватности, только лодки на якоре'}},
    {name:{en:'Bigova Village',ru:'Деревня Бигова'},note:{en:'Traditional fishing hamlet — lunch or sunset dinner of the day\'s catch',ru:'Рыбацкая деревня — обед или ужин из улова дня'}},
    {name:{en:'Anchorage on return',ru:'Якорная стоянка на обратном пути'},note:{en:'Quiet spot with a view of Luštica Bay',ru:'Тихое место с видом на Luštica Bay'}},
    {name:{en:'Sunset return',ru:'Возвращение на закате'},note:{en:'Golden hour cruise through the bay',ru:'Круиз через залив в золотой час'}}
  ]
}
];
const destinations = [
{name:'Kotor Bay',desc:{en:'Europe\'s southernmost fjord. UNESCO World Heritage mountains plunge into emerald waters, hiding medieval towns and centuries of maritime history.',ru:'Самый южный фьорд Европы. Горы из списка UNESCO спускаются к изумрудным водам, скрывая средневековые города и века морской истории.'},img:'images/18-damjane-stern.jpg',alt:{en:'Our yacht in Kotor Bay',ru:'Наша яхта в Которском заливе'}},
{name:{en:'Perast & Our Lady of the Rocks',ru:'Пераст и Богородица на Рифе'},desc:{en:'A tiny baroque town of 16 palaces and a man-made island — built stone by stone by sailors since 1452. One of the most photographed spots in the Adriatic.',ru:'Крошечный барочный город с 16 дворцами и рукотворный остров — камень за камнем с 1452 года. Одно из самых фотографируемых мест Адриатики.'},img:'images/17-champagne-coupes.jpg',alt:{en:'Champagne coupes at sunset near Perast',ru:'Бокалы шампанского на закате у Пераста'}},
{name:{en:'Porto Montenegro, Tivat',ru:'Порто Монтенегро, Тиват'},desc:{en:'Your journey starts here. One of the Mediterranean\'s most prestigious superyacht marinas — boutiques, restaurants, and our home port.',ru:'Ваше путешествие начинается здесь. Одна из самых престижных марин суперяхт Средиземноморья — бутики, рестораны и наш домашний порт.'},img:'images/20-damjane-profile.jpg',alt:{en:'Our yacht at Porto Montenegro marina',ru:'Наша яхта в марине Порто Монтенегро'}}
];
const galleryImages = [
{src:'images/19-damjane-sunset.jpg',alt:{en:'Our yacht at golden hour in Kotor Bay',ru:'Наша яхта на закате в Которском заливе'}},
{src:'images/01-sundeck-reading.jpg',alt:{en:'Guests relaxing with magazines on the sun deck',ru:'Гости отдыхают с журналами на солнечной палубе'}},
{src:'images/02-sundeck-bay.jpg',alt:{en:'Reading on the sun deck with Kotor Bay mountains behind',ru:'Чтение на палубе с видом на горы Которского залива'}},
{src:'images/10-jump-champagne.jpg',alt:{en:'Guest jumping off the yacht while friends pop champagne',ru:'Гость прыгает с яхты, друзья открывают шампанское'}},
{src:'images/03-bow-party.jpg',alt:{en:'Group of guests enjoying the sun on the bow deck',ru:'Группа гостей наслаждается солнцем на носовой палубе'}},
{src:'images/04-bow-party-wide.jpg',alt:{en:'Party on the bow deck — wide angle view',ru:'Вечеринка на носовой палубе — широкий ракурс'}},
{src:'images/14-bbq-seafood.jpg',alt:{en:'Fresh Adriatic shrimp and fish on the onboard BBQ grill',ru:'Свежие адриатические креветки и рыба на гриле яхты'}},
{src:'images/16-cheers-kotor.jpg',alt:{en:'Champagne glasses raised with Our Lady of the Rocks, Kotor Bay',ru:'Бокалы шампанского на фоне острова Богородицы на Рифе'}},
{src:'images/07-cheers-canopy.jpg',alt:{en:'Friends toasting drinks under the yacht canopy',ru:'Друзья поднимают бокалы под навесом яхты'}},
{src:'images/17-champagne-coupes.jpg',alt:{en:'Crystal champagne coupes clinking at sunset',ru:'Хрустальные бокалы для шампанского на закате'}},
{src:'images/11-swim-ladder.jpg',alt:{en:'Guest climbing the swim ladder from crystal-clear Adriatic waters',ru:'Гость поднимается по трапу из кристально чистых вод Адриатики'}},
{src:'images/12-float-rings.jpg',alt:{en:'Guests floating on inflatable rings in the Adriatic',ru:'Гости на надувных кругах в Адриатическом море'}},
{src:'images/08-sundeck-sunbathing.jpg',alt:{en:'Friends sunbathing on the spacious bow sun deck',ru:'Подруги загорают на просторной носовой палубе'}},
{src:'images/05-bow-guys.jpg',alt:{en:'Four friends relaxing with drinks on the yacht bow',ru:'Четверо друзей отдыхают с напитками на носу яхты'}},
{src:'images/06-sundeck-group.jpg',alt:{en:'Mixed group relaxing on the sun deck',ru:'Смешанная компания отдыхает на солнечной палубе'}},
{src:'images/09-bow-girls.jpg',alt:{en:'Group photo on the bow with a superyacht anchored behind',ru:'Групповое фото на носу с суперяхтой на фоне'}},

{src:'images/reno-owner-suite.jpg',alt:{en:'2026 renovation — owner\'s suite',ru:'Реновация 2026 — каюта владельца'}},
{src:'images/reno-salon-dining.jpg',alt:{en:'2026 renovation — salon & dining',ru:'Реновация 2026 — салон и столовая'}},
{src:'images/reno-wheelhouse.jpg',alt:{en:'2026 renovation — wheelhouse',ru:'Реновация 2026 — рулевая рубка'}},
{src:'images/13-bbq-fish.jpg',alt:{en:'Fresh fish grilling on the onboard BBQ',ru:'Свежая рыба на гриле яхты'}},
{src:'images/18-damjane-stern.jpg',alt:{en:'Our yacht stern view at golden hour',ru:'Наша яхта — вид с кормы на закате'}},
{src:'images/20-damjane-profile.jpg',alt:{en:'Our yacht sailing at sunset along the Montenegrin coast',ru:'Наша яхта на закате у побережья Черногории'}}
];
const galleryVideoURL = '';
const renoImages = [
{src:'images/reno-owner-suite.jpg',alt:{en:'Owner\'s suite with king bed and lounge area',ru:'Каюта владельца с большой кроватью и зоной отдыха'}},
{src:'images/reno-master-suite.jpg',alt:{en:'Master suite with navy sofa and elegant decor',ru:'Мастер-каюта с диваном и элегантным декором'}},
{src:'images/reno-salon-dining.jpg',alt:{en:'Salon with TV lounge and dining area',ru:'Салон с ТВ-зоной и обеденной зоной'}},
{src:'images/reno-vip-cabin.jpg',alt:{en:'VIP cabin with ambient lighting',ru:'VIP каюта с мягким освещением'}},
{src:'images/reno-vip-lounge.jpg',alt:{en:'VIP cabin lounge with navy sofa',ru:'Зона отдыха VIP каюты с диваном'}},
{src:'images/reno-galley.jpg',alt:{en:'Modern galley with sea view',ru:'Современная кухня с видом на море'}},
{src:'images/reno-wheelhouse.jpg',alt:{en:'Wheelhouse with digital navigation displays',ru:'Рулевая рубка с цифровой навигацией'}},
{src:'images/reno-guest-cabin.jpg',alt:{en:'Guest cabin with twin beds',ru:'Гостевая каюта с двумя кроватями'}},
{src:'images/reno-master-layout.jpg',alt:{en:'Master cabin — top-down layout view',ru:'Мастер-каюта — вид сверху'}},
{src:'images/reno-vip-layout.jpg',alt:{en:'VIP cabin — top-down layout view',ru:'VIP каюта — вид сверху'}},
{src:'images/reno-lounge-detail.jpg',alt:{en:'Lounge sofa with designer cushions',ru:'Диван с дизайнерскими подушками'}}
];
const premiumAddons = [
{id:'chef',icon:'🍽️',name:{en:'Private Chef',ru:'Личный шеф-повар'},desc:{en:'Chef comes on board with ingredients and cooks on the spot. 4 courses of Mediterranean cuisine with wine pairing. Menu agreed 2 days ahead.',ru:'Шеф приходит на борт с продуктами, готовит на месте. 4 курса средиземноморской кухни с винным пейрингом. Меню согласуем за 2 дня.'},price:'+€300'},
{id:'photo',icon:'📸',name:{en:'Photography Package',ru:'Фотосъёмка'},desc:{en:'Photographer on board with you for the whole day. 50+ edited shots delivered to the cloud within 48 hours after the charter.',ru:'Фотограф на борту с вами весь день. 50+ обработанных кадров приходят в облако за 48 часов после чартера.'},price:'+€200'},
{id:'decor',icon:'🥂',name:{en:'Celebration Decor',ru:'Праздничный декор'},desc:{en:'Balloons, flowers, cake, a bottle of champagne, and a personalised banner. We set up before you arrive — birthday, proposal, or anniversary.',ru:'Шары, цветы, торт, бутылка шампанского и именной баннер. Готовим к вашему приходу — день рождения, предложение или годовщина.'},price:'+€150'},
{id:'scooter',icon:'🤿',name:{en:'Underwater Scooter',ru:'Подводный скутер'},desc:{en:'Electric scooter pulls you underwater — no need to swim yourself. Masks, fins, and snorkels are already on board.',ru:'Электрический скутер тянет вас под водой — не нужно плыть самому. Маски, ласты и трубки уже на борту.'},price:'+€100'}
];
const premiumBundle = {
name:{en:'The Pack of Four',ru:'Пакет «Все четыре»'},
desc:{en:'All four add-ons together — €600 instead of €750, save €150.',ru:'Все четыре опции вместе — €600 вместо €750, экономия €150.'},
fullPrice:'€750',
bundlePrice:'€600',
save:{en:'Save €150',ru:'Экономия €150'}
};
const multiDayVoyages = [
{
id:'weekend-2d',
name:{en:'Weekend Getaway',ru:'Выходные на яхте'},
days:2, nights:1,
price:'€6,000',
perDay:'€3,000/day',
badge:{en:'Popular',ru:'Популярный'},
desc:{en:'Two full days through the Bay of Kotor and the open coast — one night anchored under the stars. Wake up to mountains, coffee on the deck, and a full second day.',ru:'Два полных дня по Боко-Которскому заливу и открытому побережью — ночь под звёздами. Просыпайтесь среди гор, кофе на палубе и полный второй день.'},
itinerary:[
{day:1,title:{en:'Boka Bay & Perast',ru:'Боко-Которский залив и Пераст'},desc:{en:'Depart Porto Montenegro → Our Lady of the Rocks → Perast → Kotor Old Town → anchor for overnight in a secluded bay',ru:'Отправление из Порто Монтенегро → Богородица на Рифе → Пераст → Старый Котор → якорь на ночь в уединённой бухте'}},
{day:2,title:{en:'Blue Cave & Luštica',ru:'Голубая пещера и Лустица'},desc:{en:'Blue Cave at peak light → Mamula Island → Blue Horizon Beach → Almara Beach Club → return to Porto Montenegro',ru:'Голубая пещера на пике света → остров Мамула → пляж Blue Horizon → бич-клуб Almara → возвращение в Порто Монтенегро'}}
]
},
{
id:'explorer-3d',
name:{en:'Coastal Explorer',ru:'Исследователь побережья'},
days:3, nights:2,
price:'€9,000',
perDay:'€3,000/day',
badge:{en:'Best Value',ru:'Лучшая цена'},
desc:{en:'The full coast by sea. Three days, two nights aboard — from the fjord to the Blue Cave, hidden beaches, fishing villages, and beach clubs.',ru:'Полное побережье с моря. Три дня, две ночи на борту — от фьорда до Голубой пещеры, скрытые пляжи, рыбацкие деревни и бич-клубы.'},
itinerary:[
{day:1,title:{en:'The Fjord',ru:'Фьорд'},desc:{en:'Porto Montenegro → Perast & Our Lady of the Rocks → Kotor → evening anchored in Kotor Bay with dinner on the deck',ru:'Порто Монтенегро → Пераст и Богородица на Рифе → Котор → вечер на якоре в Которском заливе, ужин на палубе'}},
{day:2,title:{en:'Adventure Day',ru:'День приключений'},desc:{en:'Blue Cave at midday → Mamula Island → Dobrec Beach hammocks & seafood → Bigova sunset dinner → overnight anchored',ru:'Голубая пещера в полдень → остров Мамула → пляж Добреч, гамаки и морепродукты → ужин на закате в Бигове → ночь на якоре'}},
{day:3,title:{en:'Beach & Return',ru:'Пляж и возвращение'},desc:{en:'Blue Horizon sandy beach → Almara Beach Club cocktails → leisurely return to Porto Montenegro',ru:'Песчаный пляж Blue Horizon → коктейли в Almara Beach Club → неспешное возвращение в Порто Монтенегро'}}
]
},
{
id:'grand-5d',
name:{en:'Grand Adriatic Voyage',ru:'Гранд Адриатическое путешествие'},
days:5, nights:4,
price:'€15,000',
perDay:'€3,000/day',
badge:{en:'Ultimate',ru:'Максимум'},
desc:{en:'Five days at your own pace. The full Montenegrin coast — every route, returns to favourite spots, a day in Croatia\'s Prevlaka, four nights on the water.',ru:'Пять дней в вашем ритме. Всё побережье Черногории — все маршруты, возврат к любимым местам, день в хорватской Превлаке, четыре ночи на воде.'},
itinerary:[
{day:1,title:{en:'Boka Bay',ru:'Боко-Которский залив'},desc:{en:'Porto Montenegro → Perast → Kotor → overnight in the fjord',ru:'Порто Монтенегро → Пераст → Котор → ночь во фьорде'}},
{day:2,title:{en:'Blue Cave & Islands',ru:'Голубая пещера и острова'},desc:{en:'Blue Cave → Mamula fortress → swimming stops → Herceg Novi promenade dinner',ru:'Голубая пещера → крепость Мамула → купание → ужин на набережной Херцег-Нови'}},
{day:3,title:{en:'Hidden Beaches',ru:'Скрытые пляжи'},desc:{en:'Dobrec wild beach → Bigova fishing village → secret coves chosen by the captain',ru:'Дикий пляж Добреч → рыбацкая деревня Бигова → секретные бухты от капитана'}},
{day:4,title:{en:'Luštica & Croatia',ru:'Лустица и Хорватия'},desc:{en:'Blue Horizon Beach → Almara Beach Club → cross to Prevlaka (Croatia) → return for sunset',ru:'Пляж Blue Horizon → бич-клуб Almara → переход к Превлаке (Хорватия) → возвращение на закат'}},
{day:5,title:{en:'Your Choice',ru:'Ваш выбор'},desc:{en:'Revisit your favourite spot or explore somewhere new — it\'s your day. Return to Porto Montenegro by sunset.',ru:'Вернитесь к любимому месту или откройте новое — это ваш день. Возвращение в Порто Монтенегро к закату.'}}
]
}
];
function renderMultiDay() {
const grid = document.getElementById('multiDayGrid');
if (!grid) return;
const lang = currentLang;
grid.innerHTML = multiDayVoyages.map(v => {
const itHtml = v.itinerary.map(d => `<div class="voyage-day"><div class="voyage-day-num">${lang==='ru'?'День':'Day'} ${d.day}</div><div class="voyage-day-content"><strong>${d.title[lang]}</strong><span>${d.desc[lang]}</span></div></div>`).join('');
return `<article class="voyage-card reveal">
<div class="voyage-card-header">
<span class="voyage-card-badge">${v.badge[lang]}</span>
<h3>${v.name[lang]}</h3>
<div class="voyage-card-meta">${v.days} ${lang==='ru'?'дней':'days'} / ${v.nights} ${lang==='ru'?(v.nights===1?'ночь':'ночей'):(v.nights===1?'night':'nights')}</div>
</div>
<p class="voyage-card-desc">${v.desc[lang]}</p>
<div class="voyage-itinerary">${itHtml}</div>
<div class="voyage-card-footer">
<div class="voyage-pricing"><span class="voyage-total">${v.price}</span><span class="voyage-perday">${v.perDay}</span></div>
<div class="voyage-card-actions">
<a href="booking.html" class="btn btn-gold btn-sm">${T[lang].charter_cta || 'Book'} <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
<a href="https://wa.me/38268758345?text=${encodeURIComponent(lang==='ru'?'Здравствуйте! Интересует «'+v.name.ru+'» ('+v.days+' дней, '+v.price+')':'Hi! I\'m interested in the '+v.name.en+' ('+v.days+' days, '+v.price+')')}" class="btn btn-wa btn-sm" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a>
</div>
</div>
</article>`;
}).join('');
initReveal();
}
function renderPremium() {
const grid = document.getElementById('premiumGrid');
if (!grid) return;
const lang = currentLang;
let html = premiumAddons.map(a => `<div class="premium-card reveal">
<div class="premium-icon">${a.icon}</div>
<h3>${a.name[lang]}</h3>
<p>${a.desc[lang]}</p>
<div class="premium-price">${a.price}</div>
</div>`).join('');
html += `<div class="premium-bundle reveal">
<div class="premium-bundle-badge">${premiumBundle.save[lang]}</div>
<h3>${premiumBundle.name[lang]}</h3>
<p>${premiumBundle.desc[lang]}</p>
<div class="premium-bundle-pricing">
<span class="premium-old-price">${premiumBundle.fullPrice}</span>
<span class="premium-bundle-price">${premiumBundle.bundlePrice}</span>
</div>
<a href="https://wa.me/38268758345?text=${encodeURIComponent(lang==='ru'?'Здравствуйте! Хочу заказать пакет «Все четыре»':'Hi! I\'d like to book The Pack of Four')}" class="btn btn-gold btn-sm" target="_blank" rel="noopener">WhatsApp <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
</div>`;
grid.innerHTML = html;
initReveal();
}
function renderReno() {
const grid = document.getElementById('renoGrid');
if (!grid) return;
grid.innerHTML = renoImages.map(g => `
<div class="gallery-item" onclick="openLightbox('${g.src}')">
<picture><source srcset="${g.src.replace('.jpg','.webp')}" type="image/webp"><img src="${g.src}" alt="${g.alt[currentLang]}" loading="lazy"></picture>
</div>
`).join('');
}
const includedYes = [
{en:'Professional captain & crew',ru:'Профессиональный капитан и экипаж'},
{en:'Fuel for standard routes',ru:'Топливо для стандартных маршрутов'},
{en:'Bed linens & towels',ru:'Постельное бельё и полотенца'},
{en:'Snorkeling gear & masks',ru:'Снаряжение для снорклинга и маски'},
{en:'SUP boards & water toys',ru:'SUP-доски и водные игрушки'},
{en:'Bluetooth sound system',ru:'Bluetooth аудиосистема'},
{en:'Basic maritime insurance',ru:'Базовое морское страхование'},
{en:'Sun lounger cushions & shade',ru:'Шезлонги и тент от солнца'}
];
const includedNo = [
{en:'Food & beverages (BYO or we arrange catering)',ru:'Еда и напитки (свои или организуем кейтеринг)'},
{en:'Port & marina fees',ru:'Портовые и марина-сборы'},
{en:'Underwater scooter rental',ru:'Аренда подводного скутера'},
{en:'Special occasion decorations',ru:'Декор для особых случаев'},
{en:'Professional photography',ru:'Профессиональная фотосъёмка'},
{en:'Custom catering & chef service',ru:'Индивидуальный кейтеринг и шеф-повар'}
];
let currentLang = 'en';
let currentReview = 0;
function setLang(lang) {
currentLang = lang;
try { localStorage.setItem('monteyacht_lang', lang); } catch(e) {}
document.documentElement.lang = lang;
document.title = T[lang].meta_title || document.title;
const metaDesc = document.querySelector('meta[name="description"]');
if (metaDesc) metaDesc.content = T[lang].meta_desc || '';
document.querySelectorAll('[data-i18n]').forEach(el => {
const key = el.getAttribute('data-i18n');
if (T[lang][key]) el.innerHTML = T[lang][key];
});
document.querySelectorAll('.lang-btn').forEach(b =>
b.classList.toggle('active', b.dataset.lang === lang)
);
if (document.getElementById('faqList')) renderFAQ();
if (document.getElementById('reviewsSlider')) renderReviews();
if (document.getElementById('destGrid')) renderDestinations();
if (document.getElementById('galleryGrid')) renderGallery();
if (document.getElementById('includedYes')) renderIncluded();
if (document.getElementById('pricingGrid')) renderPricing();
if (document.getElementById('renoGrid')) renderReno();
if (document.getElementById('routesGrid')) renderRoutes();
if (document.getElementById('premiumGrid')) renderPremium();
if (document.getElementById('multiDayGrid')) renderMultiDay();
}
function initNav() {
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (!nav) return;
window.addEventListener('scroll', () => {
nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });
if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('open');
navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
hamburger.classList.remove('open');
navLinks.classList.remove('open');
}));
}
document.querySelectorAll('.lang-btn').forEach(b =>
b.addEventListener('click', () => setLang(b.dataset.lang))
);
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks?.querySelectorAll('a').forEach(a => {
const href = a.getAttribute('href');
if (href === currentPage || (currentPage === 'index.html' && href === 'index.html')) {
a.classList.add('active');
}
});
}
function initReveal() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
});
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
function renderFAQ() {
const list = document.getElementById('faqList');
if (!list) return;
list.innerHTML = faqs.map(f => `
<div class="faq-item">
<div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
<span>${f.q[currentLang]}</span>
<span class="faq-toggle">+</span>
</div>
<div class="faq-a"><p>${f.a[currentLang]}</p></div>
</div>
`).join('');
}
function renderReviews() {
const slider = document.getElementById('reviewsSlider');
const dots = document.getElementById('reviewDots');
if (!slider) return;
slider.innerHTML = reviews.map(r => {
const nm = typeof r.name === 'object' ? r.name[currentLang] : r.name;
return `<div class="review-card">
<div class="review-stars">${'★'.repeat(r.stars)}</div>
<p class="review-text">"${r.text[currentLang]}"</p>
<div class="review-author">
<img class="review-avatar" src="${r.avatar}" alt="${nm}" loading="lazy" width="48" height="48">
<div><div class="review-name">${nm}</div><div class="review-loc">${r.loc[currentLang]}</div></div>
</div>
</div>`;
}).join('');
if (dots) {
dots.innerHTML = reviews.map((_, i) =>
`<span class="review-dot${i===0?' active':''}" onclick="goToReview(${i})"></span>`
).join('');
}
currentReview = 0;
updateReviewSlider();
}
function goToReview(i) { currentReview = i; updateReviewSlider(); }
function updateReviewSlider() {
const slider = document.getElementById('reviewsSlider');
if (!slider) return;
slider.style.transform = `translateX(-${currentReview * 100}%)`;
document.querySelectorAll('.review-dot').forEach((d, i) =>
d.classList.toggle('active', i === currentReview)
);
}
function renderRoutes() {
const grid = document.getElementById('routesGrid');
if (!grid) return;
grid.innerHTML = routes.map(r => {
const stopsHtml = r.stops.map((s,i) => `<div class="route-card-stop"><span class="route-card-dot">${i===0?'⬤':'○'}</span><span>${s.name[currentLang]}</span></div>`).join('');
return `<article class="route-card reveal">
<div class="route-card-img"><picture><source srcset="${r.img.replace('.jpg','.webp')}" type="image/webp"><img src="${r.img}" alt="${r.alt[currentLang]}" loading="lazy"></picture><span class="route-card-badge">${r.badge[currentLang]}</span></div>
<div class="route-card-body">
<div class="route-card-meta"><span>${r.dur[currentLang]}</span><span class="route-card-price">${r.price}</span></div>
<h3>${r.name[currentLang]}</h3>
<p>${r.desc[currentLang]}</p>
<div class="route-card-stops">${stopsHtml}</div>
<div class="route-card-audience">${r.audience[currentLang]}</div>
<div class="route-card-actions"><a href="booking.html" class="btn btn-gold btn-sm">${T[currentLang].charter_cta || 'Request Booking'} <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a><a href="https://wa.me/38268758345?text=${encodeURIComponent((currentLang==='ru'?'Здравствуйте! Интересует маршрут «'+r.name.ru+'» ('+r.dur.ru+', '+r.price+')':'Hi! I\'m interested in the '+r.name.en+' route ('+r.dur.en+', '+r.price+')'))} " class="btn btn-wa btn-sm" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" class="wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> WhatsApp</a></div>
</div>
</article>`;
}).join('');
initReveal();
}
function renderDestinations() {
const grid = document.getElementById('destGrid');
if (!grid) return;
grid.innerHTML = destinations.map(d => {
const name = typeof d.name === 'object' ? d.name[currentLang] : d.name;
const desc = d.desc ? d.desc[currentLang] : '';
return `<article class="dest-card reveal">
<picture><source srcset="${d.img.replace('.jpg','.webp')}" type="image/webp"><img src="${d.img}" alt="${d.alt[currentLang]}" loading="lazy"></picture>
<div class="dest-card-overlay">
<h3>${name}</h3>
${desc ? '<p class="dest-desc">'+desc+'</p>' : ''}
</div>
</article>`;
}).join('');
initReveal();
}
function renderGallery() {
const grid = document.getElementById('galleryGrid');
if (!grid) return;
let html = galleryImages.map(g => `
<div class="gallery-item" onclick="openLightbox('${g.src.replace('w=600','w=1200')}')">
<picture><source srcset="${g.src.replace('.jpg','.webp')}" type="image/webp"><img src="${g.src}" alt="${g.alt[currentLang]}" loading="lazy"></picture>
</div>
`).join('');
if (galleryVideoURL) {
html += `<div class="gallery-video"><iframe src="${galleryVideoURL}" title="MonteYacht video" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
}
grid.innerHTML = html;
}
function openLightbox(src) {
const lb = document.getElementById('lightbox');
if (!lb) return;
lb.querySelector('img').src = src;
lb.classList.add('active');
document.body.style.overflow = 'hidden';
}
function closeLightbox() {
const lb = document.getElementById('lightbox');
if (!lb) return;
lb.classList.remove('active');
document.body.style.overflow = '';
}
function initForm() {
const form = document.getElementById('charterForm');
if (!form) return;
form.addEventListener('submit', async function(e) {
e.preventDefault();
const btn = this.querySelector('.btn-submit');
btn.disabled = true;
btn.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
const fd = new FormData(this);
const data = Object.fromEntries(fd.entries());
const esc = s => (s||'').replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
const typeLabels = {'4h':'4h €2,200','6h':'6h €2,400','8h':'8h €2,600','12h':'12h €3,000','24h':'24h €3,500','multi':'2+ days €3,000/day'};
const typeLabel = typeLabels[data.charter_type] || data.charter_type;
const msg = `🛥 New Charter Request

👤 Name: ${esc(data.name)}
📞 Phone: ${esc(data.phone)}
📧 Email: ${esc(data.email)}
⛵ Type: ${esc(typeLabel)}
📅 Dates: ${esc(data.dates)}
👥 Guests: ${esc(data.guests)}
💬 Comments: ${esc(data.comments) || '—'}`;
try {
const typeLabelsClean = {'4h':'4 hours','6h':'6 hours','8h':'8 hours','12h':'12 hours','24h':'24 hours','multi':'2+ days'};
const crmPayload = {
client: {
name: data.name,
phone: data.phone || undefined,
email: data.email || undefined,
language: currentLang || 'en'
},
guests_count: parseInt(data.guests, 10) || undefined,
notes: [
'Charter: ' + (typeLabels[data.charter_type] || data.charter_type),
'Dates: ' + (data.dates || '—'),
data.comments ? 'Comments: ' + data.comments : ''
].filter(Boolean).join('\n')
};
const telegramReqs = CHAT_IDS.map(id => fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ chat_id: id, text: msg })
}));
const crmReq = fetch(CRM_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(crmPayload)
}).catch(err => console.warn('CRM send error (non-blocking):', err));
const [telegramRes] = await Promise.all([...telegramReqs, crmReq]);
const result = await telegramRes.json();
if (!result.ok) throw new Error(result.description || 'Telegram error');
this.style.display = 'none';
document.getElementById('formSuccess').style.display = 'block';
gtag_report_conversion();
} catch (err) {
console.error('Telegram send error:', err);
btn.disabled = false;
btn.textContent = T[currentLang].form_submit;
alert(currentLang === 'ru' ? 'Ошибка отправки. Попробуйте WhatsApp или позвоните нам.' : 'Submission error. Try WhatsApp or call us directly.');
}
});
}
function initSubscribeForm() {
const form = document.getElementById('subscribeForm');
if (!form) return;
const SUBSCRIBE_URL = 'https://dashboard.myyacht.info/api/subscribe';
form.addEventListener('submit', async function(e) {
e.preventDefault();
const btn = this.querySelector('.subscribe-btn');
const emailInput = this.querySelector('.subscribe-input');
const email = emailInput.value.trim();
if (!email) return;
btn.disabled = true;
btn.textContent = T[currentLang].sub_sending;
try {
const res = await fetch(SUBSCRIBE_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, language: currentLang })
});
const data = await res.json();
if (!res.ok) throw new Error(data.error || 'Server error');
this.style.display = 'none';
document.getElementById('subscribeSuccess').style.display = 'block';
} catch (err) {
console.error('Subscribe error:', err);
btn.disabled = false;
btn.textContent = T[currentLang].sub_cta;
alert(T[currentLang].sub_error);
}
});
}
function initReviewAutoplay() {
const slider = document.getElementById('reviewsSlider');
if (!slider) return;
setInterval(() => {
currentReview = (currentReview + 1) % reviews.length;
updateReviewSlider();
}, 6000);
const prev = document.getElementById('reviewPrev');
const next = document.getElementById('reviewNext');
if (prev) prev.addEventListener('click', () => { currentReview = (currentReview - 1 + reviews.length) % reviews.length; updateReviewSlider(); });
if (next) next.addEventListener('click', () => { currentReview = (currentReview + 1) % reviews.length; updateReviewSlider(); });
}
function renderIncluded() {
const yesEl = document.getElementById('includedYes');
const noEl = document.getElementById('includedNo');
if (!yesEl || !noEl) return;
yesEl.innerHTML = includedYes.map(i => `<li><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg><span>${i[currentLang]}</span></li>`).join('');
noEl.innerHTML = includedNo.map(i => `<li><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg><span>${i[currentLang]}</span></li>`).join('');
}
function initPromoBanner() {
const banner = document.getElementById('promoBanner');
const closeBtn = document.getElementById('promoClose');
if (!banner) return;
if (sessionStorage.getItem('promoDismissed')) {
banner.classList.add('hidden');
return;
}
document.body.classList.add('promo-active');
closeBtn?.addEventListener('click', () => {
banner.classList.add('hidden');
document.body.classList.remove('promo-active');
document.body.classList.add('promo-dismissed');
sessionStorage.setItem('promoDismissed', '1');
});
}
function renderPricing() {
const el = document.getElementById('pricingGrid');
if (!el) return;
const prices = [
{dur:{en:'4 Hours',ru:'4 часа'}, price:'€2,200'},
{dur:{en:'6 Hours',ru:'6 часов'}, price:'€2,400'},
{dur:{en:'8 Hours',ru:'8 часов'}, price:'€2,600'},
{dur:{en:'12 Hours',ru:'12 часов'}, price:'€3,000'},
{dur:{en:'24 Hours',ru:'24 часа'}, price:'€3,500'},
{dur:{en:'2+ Days',ru:'2+ дня'}, price:'€3,000', note:{en:'per day',ru:'в день'}}
];
el.innerHTML = prices.map(p => {
const note = p.note ? `<span class="pricing-note">${p.note[currentLang]}</span>` : '';
return `<div class="pricing-row"><span class="pricing-dur">${p.dur[currentLang]}</span><span class="pricing-val">${p.price} ${note}</span></div>`;
}).join('');
}
function getInitialLang() {
try {
const saved = localStorage.getItem('monteyacht_lang');
if (saved && T[saved]) return saved;
} catch(e) {}
const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
if (browserLang.startsWith('ru')) return 'ru';
return 'en';
}
function initGiftPage() {
const toggle = document.getElementById('giftToggle');
if (!toggle) return;
const amountTab = document.getElementById('giftAmountTab');
const packageTab = document.getElementById('giftPackageTab');
toggle.addEventListener('click', function(e) {
const btn = e.target.closest('.gift-toggle-btn');
if (!btn) return;
toggle.querySelectorAll('.gift-toggle-btn').forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const tab = btn.dataset.tab;
amountTab.style.display = tab === 'amount' ? '' : 'none';
packageTab.style.display = tab === 'package' ? '' : 'none';
});
renderGiftPackages();
initCertPreview();
initGiftForm();
renderGiftFaq();
}
function renderGiftPackages() {
const grid = document.getElementById('giftPackageGrid');
if (!grid) return;
grid.innerHTML = routes.map(r => {
const name = typeof r.name === 'object' ? r.name[currentLang] : r.name;
const dur = typeof r.dur === 'object' ? r.dur[currentLang] : r.dur;
return `<div class="gift-package-card" data-package="${name} (${dur}, ${r.price})" onclick="selectGiftPackage(this)">
<h4>${name}</h4>
<div class="gift-package-meta">${dur}</div>
<div class="gift-package-price">${r.price}</div>
</div>`;
}).join('');
}
function selectGiftAmount(el) {
document.querySelectorAll('.gift-amount-card').forEach(c => c.classList.remove('selected'));
el.classList.add('selected');
const amount = '€' + Number(el.dataset.amount).toLocaleString();
const valueField = document.getElementById('gf_value');
const typeField = document.getElementById('gf_type');
if (valueField) valueField.value = amount;
if (typeField) typeField.value = 'amount';
const certValue = document.getElementById('certValue');
if (certValue) certValue.textContent = amount;
document.getElementById('giftFormSection').scrollIntoView({behavior:'smooth',block:'start'});
}
function selectGiftPackage(el) {
document.querySelectorAll('.gift-package-card').forEach(c => c.classList.remove('selected'));
el.classList.add('selected');
const pkg = el.dataset.package;
const valueField = document.getElementById('gf_value');
const typeField = document.getElementById('gf_type');
if (valueField) valueField.value = pkg;
if (typeField) typeField.value = 'package';
const certValue = document.getElementById('certValue');
if (certValue) certValue.textContent = el.querySelector('.gift-package-price').textContent;
document.getElementById('giftFormSection').scrollIntoView({behavior:'smooth',block:'start'});
}
function initCertPreview() {
const input = document.getElementById('certNameInput');
const nameEl = document.getElementById('certName');
if (!input || !nameEl) return;
input.addEventListener('input', function() {
nameEl.textContent = this.value.trim() || '———';
});
const recipientField = document.getElementById('gf_recipient');
if (recipientField) {
input.addEventListener('input', function() {
recipientField.value = this.value;
});
}
}
const giftFaqs = [
{q:'gift_faq1_q',a:'gift_faq1_a'},
{q:'gift_faq2_q',a:'gift_faq2_a'},
{q:'gift_faq3_q',a:'gift_faq3_a'},
{q:'gift_faq4_q',a:'gift_faq4_a'}
];
function renderGiftFaq() {
const list = document.getElementById('giftFaqList');
if (!list) return;
list.innerHTML = giftFaqs.map(f => `<div class="faq-item reveal">
<div class="faq-q" onclick="this.parentElement.classList.toggle('open')">
<span data-i18n="${f.q}">${T[currentLang][f.q]||''}</span>
<span class="faq-toggle">+</span>
</div>
<div class="faq-a"><p data-i18n="${f.a}">${T[currentLang][f.a]||''}</p></div>
</div>`).join('');
initReveal();
}
function initGiftForm() {
const form = document.getElementById('giftForm');
if (!form) return;
form.addEventListener('submit', async function(e) {
e.preventDefault();
const btn = this.querySelector('.btn-submit');
btn.disabled = true;
btn.textContent = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
const fd = new FormData(this);
const data = Object.fromEntries(fd.entries());
const esc = s => (s||'').replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
const msg = `🎁 Gift Certificate Request

👤 Buyer: ${esc(data.buyer_name)}
📞 Phone: ${esc(data.phone)}
📧 Email: ${esc(data.email)}
🎯 Type: ${esc(data.gift_type)}
💰 Value: ${esc(data.gift_value)}
🎀 Recipient: ${esc(data.recipient_name)}
💬 Message: ${esc(data.message) || '—'}
📄 Delivery: ${esc(data.delivery)}`;
try {
const crmPayload = {
client: {
name: data.buyer_name,
phone: data.phone || undefined,
email: data.email || undefined,
language: currentLang || 'en'
},
notes: [
'GIFT CERTIFICATE',
'Type: ' + data.gift_type,
'Value: ' + data.gift_value,
'Recipient: ' + data.recipient_name,
data.message ? 'Message: ' + data.message : '',
'Delivery: ' + data.delivery
].filter(Boolean).join('\n')
};
const telegramReqs = CHAT_IDS.map(id => fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ chat_id: id, text: msg })
}));
const crmReq = fetch(CRM_URL, {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(crmPayload)
}).catch(err => console.warn('CRM send error (non-blocking):', err));
const [telegramRes] = await Promise.all([...telegramReqs, crmReq]);
const result = await telegramRes.json();
if (!result.ok) throw new Error(result.description || 'Telegram error');
this.style.display = 'none';
document.getElementById('giftFormSuccess').style.display = 'block';
gtag_report_conversion();
} catch (err) {
console.error('Gift form send error:', err);
btn.disabled = false;
btn.textContent = T[currentLang].gift_f_submit;
alert(currentLang === 'ru' ? 'Ошибка отправки. Попробуйте WhatsApp или позвоните нам.' : 'Submission error. Try WhatsApp or call us directly.');
}
});
}
function initHideElfsightBadge() {
function hide() {
document.querySelectorAll('.ig-widget a[href*="elfsight"], .ig-widget a[href*="elf.sight"]').forEach(el => { el.style.display = 'none'; });
document.querySelectorAll('.ig-widget [class*="elfsight"], .ig-widget [class*="eapps"]').forEach(host => {
const shadow = host.shadowRoot;
if (shadow) {
shadow.querySelectorAll('a[href*="elfsight"], a[href*="elf.sight"], [class*="eapps-link"], [class*="eapps-toolbar"], [class*="eapps-widget-toolbar"]').forEach(el => { el.style.display = 'none'; });
}
});
}
hide();
new MutationObserver(hide).observe(document.body, { childList: true, subtree: true });
setInterval(hide, 2000);
}
document.addEventListener('DOMContentLoaded', () => {
initNav();
setLang(getInitialLang());
initReveal();
initForm();
initSubscribeForm();
initReviewAutoplay();
initPromoBanner();
renderIncluded();
renderPricing();
renderReno();
renderRoutes();
initGiftPage();
initHideElfsightBadge();
const lb = document.getElementById('lightbox');
if (lb) lb.addEventListener('click', closeLightbox);
});