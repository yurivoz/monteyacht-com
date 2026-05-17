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
nav_events:'Events', nav_gallery:'Gallery', nav_booking:'Book', nav_cta:'Book a Day',
hero_eyebrow:'Porto Montenegro',
hero_h1:'The Adriatic — experienced from the sea,<br>the way it was meant to be.',
hero_sub:'18 metres of comfort for up to 16 guests. A private journey through the Bay of Kotor, past timeless coastal villages, hidden coves, and the dramatic mountains. Fresh grill onboard, crystal-clear water stops, and the sunset following you back to shore.',
hero_cta:'Book a Day',
stat_1_num:'7', stat_1_label:'Years on the Adriatic',
stat_2_num:'2000+', stat_2_label:'Guests since 2019',
stat_3_num:'4.9', stat_3_label:'Guest Rating',
stat_4_num:'18 m', stat_4_label:'Private Yacht',
about_eyebrow:'Our Story',
about_h2:'7 Years on the Adriatic coastline',
about_p1:'Our yacht Marea set out on her first voyage from Porto Montenegro in 2019. Since then, she has welcomed more than 2,000 guests on board, and this season we fully renovated the interior while preserving the atmosphere of relaxed Mediterranean living.',
about_p2:'We are not a cruise operator — we know these waters personally: every hidden cove of Boka Bay, the best swimming spots, and the exact moment when the golden light settles over the bay.<br><br>Our experienced captain knows how to make every journey calm, private, and exactly the way you imagined it. Each route is planned individually the day before departure, taking into account your preferences, pace, and weather conditions at sea.<br><br>Marea comfortably accommodates up to 16 guests for day charters and up to 6 guests for overnight stays in the cabins.',
about_cta:'See the Yacht',
charters_eyebrow:'Charters',
charters_h2:'Choose Your Way of Experience',
charters_sub:'One day — to discover Boka from the sea. Several days — to truly feel its rhythm. Beautiful coastal coves, delicious food by the sound of the waves, breathtaking views, and unforgettable sunsets over the bay — each journey is created individually for you.',
charter_day_label:'Day Charter',
charter_day_title:'A Day on the Water',
charter_day_desc:'<a href="blog-boka-bay-route.html">The Bay of Kotor from Tivat to Kotor</a> — stops in coves for swimming and snorkelling, <a href="blog-bbq-anchor.html">grilled lunch at anchor</a>. For families, groups, and couples.',
charter_day_meta:'4–12 hours · Up to 16 guests',
charter_day_price:'From €2,200 · 4 hours',
charter_week_label:'With Overnight',
charter_week_title:'Several Days on the Water',
charter_week_desc:'Cabins after this year\'s refit, morning coffee on the deck, and an <a href="blog-secret-anchorages.html">anchor in a quiet cove</a> at <a href="blog-sunset-champagne.html">sunset</a>. From 2 to 5 nights, route is flexible.',
charter_week_meta:'From 2 nights · Captain & crew 24/7',
charter_week_price:'From €3,000 / night',
charter_cta:'Request Dates',
yacht_h1:'Marea · 18 metres',
yacht_sub:'One and the same yacht since 2019, fully renovated in 2026. Up to 16 guests for the day, up to 6 with overnight.',
yacht_spec_length:'Length', yacht_spec_cabins:'Cabins', yacht_spec_guests:'Guests', yacht_spec_crew:'Crew',
yacht_feat_title:'On Board',
yacht_f1_title:'Grill on the Stern', yacht_f1_desc:'Freshly caught sea bream, tiger prawns, vegetables. <a href="blog-bbq-anchor.html">We cook at anchor in a cove</a> — while you swim.',
yacht_f2_title:'Water', yacht_f2_desc:'SUP boards, snorkelling masks, inflatable loungers, and an underwater scooter. All on board, nothing to pay extra.',
yacht_f3_title:'Music', yacht_f3_desc:'Bluetooth speakers on the deck and in the cabins. Plug in your own playlist — we don\'t impose ours.',
yacht_f4_title:'Bow Deck', yacht_f4_desc:'Open platform at the bow with mattresses and pillows. The guests\' favourite spot at golden hour.',
yacht_f5_title:'One Captain', yacht_f5_desc:'Since 2019 — our captain. Knows the Bay of Kotor better than charts: where to <a href="blog-oysters-prawns.html">buy oysters in Kamenari</a> (order from the boat — they bring them out), why the <a href="blog-blue-cave.html">Blue Cave needs to be caught between 11 and 12</a>, in which cove to anchor at <a href="blog-sunset-champagne.html">sunset</a> with a north-west wind. Yacht Master Offshore, 50,000+ nautical miles across the Mediterranean.',
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
footer_desc:'Private yacht charter from Porto Montenegro. On the water since 2019.',
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
blog_sub:'Stories, routes, and tips — from a captain with 7 years on these waters.',
blog_read:'Read more',
blog_more_eyebrow:'More stories',
blog_more_h2:'From the captain\'s log',
blog_art1_meta:'Route Guide &bull; 8 min read',
blog_art1_title:'The Ultimate Boka Kotorska Bay Yacht Route',
blog_art1_excerpt:'The southernmost fjord in Europe, seven stops, eight hours. A captain\'s recommended day route through the Bay of Kotor — from Porto Montenegro to Dobrec and back at golden hour.',
blog_art1_intro:'Boka Kotorska — the Bay of Kotor — is often called the southernmost fjord in Europe. Framed by soaring limestone cliffs that plunge straight into deep blue water, dotted with medieval walled towns and tiny island churches, it is one of the most spectacular yacht cruising grounds in the entire Mediterranean. Here is our captain\'s recommended full-day route that reveals every facet of this UNESCO World Heritage site.',
blog_art1_quote:'"After 7 years of navigating these waters, the Bay of Kotor still takes my breath away every single morning. There is simply nowhere else like it." — Captain Alexey',
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
blog_art1_s4_desc:'We fire up the <a href="blog-bbq-anchor.html">onboard BBQ grill</a> for a classic Adriatic lunch — freshly caught sea bream, tiger prawns, grilled vegetables, and local cheese. If you prefer, we can arrange a stop at one of the waterside restaurants in Perast or Stoliv, where the owner rows out to take your order. Lunch on the water, surrounded by 1,000-metre mountain walls, is an experience that never gets old.',
blog_art1_s5_time:'13:30 — Exploration',
blog_art1_s5_title:'Kotor Old Town',
blog_art1_s5_desc:'We sail deep into the inner bay — the water narrows, the mountains soar higher — and anchor off the medieval walled city of Kotor. This UNESCO-listed town dates back over 2,000 years, with Venetian palaces, Romanesque churches, and labyrinthine marble streets. You have time to walk the walls, climb the fortress stairs for panoramic views, or simply wander the atmospheric piazzas and pick up artisan souvenirs.',
blog_art1_s6_time:'15:30 — Afternoon Swim',
blog_art1_s6_title:'Dobrec Beach',
blog_art1_s6_desc:'Leaving Kotor, we head toward the outer bay and stop at Dobrec — a wild pebble beach accessible only by boat. The water here turns a vivid emerald-green where mountain springs mix with the sea. This is the perfect spot for a lazy afternoon swim and some quiet time on the sun deck with a glass of champagne.',
blog_art1_s7_time:'17:00 — Golden Hour Return',
blog_art1_s7_title:'Sunset Cruise Back to Tivat',
blog_art1_s7_desc:'The return journey is timed for <a href="blog-sunset-champagne.html">golden hour</a>. As the sun drops behind the Orjen mountains, the entire bay turns pink and gold. We pour champagne, the music plays softly, and the yacht glides back toward Porto Montenegro. This final hour — with the warm light, the calm water, and the mountains reflected perfectly in the bay — is the moment every guest remembers most.',
blog_art1_tips_title:'Captain\'s Tips',
blog_art1_tip1:'The best months for this route are June and September — warm water, calm winds, and far fewer tourist boats in the bay. July and August are beautiful but busier at the main stops.',
blog_art1_tip2:'Bring swimwear and sunscreen — you\'ll be in and out of the water all day. We provide towels, snorkeling gear, and SUP boards. For Kotor Old Town, lightweight shoes are recommended for the cobblestone streets.',
blog_art1_tip3:'This route works perfectly as an 8-hour charter (from €2,600) but can be extended to 12 hours (€3,000) if you want a more relaxed pace with extra swimming stops and a sunset dinner on board.',
blog_art2_meta:'Evening Route &bull; 5 min read',
blog_art2_title:'When the Sea Turns Gold: The Most Beautiful Photos in the Bay',
blog_art2_excerpt:'There\'s a brief moment on summer evenings when the Bay of Kotor feels almost unreal. The sun disappears behind the mountains, the water turns a deep golden color, and for half an hour the entire bay seems to slow down.',
blog_art2_intro:'There\'s a brief moment on summer evenings when the Bay of Kotor feels almost unreal. The sun disappears behind the mountains, the water turns a deep golden color, and for half an hour the entire bay seems to slow down.<br><br>At that hour, the heat of the day begins to fade, the sea becomes calmer, and the light softer and deeper. Many guests choose an evening charter specifically for this moment.',
blog_art2_quote:'"I cross this bay almost every day, and I still slow the yacht down before sunset every single time. At some point people stop talking, put their phones away, and simply watch the water. It always happens the same way." — Captain Alexey',
blog_art2_s1_title:'Why the Sunset Feels Different Here',
blog_art2_s1_desc:'The mountains surrounding the bay create the effect.<br><br>The sun disappears not behind the sea, but behind the Orjen mountain range on the western side of the Bay of Kotor. Because of this, the light continues reflecting off the eastern slopes and the water for several minutes after the sun itself has already disappeared.<br><br>The result is a soft golden glow that lingers for almost an hour.<br><br>During summer, the best light usually begins:<br>in June and July — around 7:30 PM<br>in August — closer to 7:00 PM<br>in September — around 6:30 PM<br><br>In May and October, sunsets feel calmer and cooler in tone — less gold, more soft shadows and pink evening light.',
blog_art2_s2_title:'How the Sunset Route Flows',
blog_art2_s2_desc:'The day moves at an unhurried pace: swimming stops in quiet bays, lunch on the water, a slow cruise along the Luštica coastline or through the Bay of Kotor, and later in the evening, a return toward Tivat through golden light reflecting across the sea.<br><br>Our final stops are usually near Prčanj, Dobreč, or anchored along the Luštica coast — places where the water becomes almost mirror-like by sunset.<br><br>If you\'d like to combine the Blue Cave and sunset in one day, the route is usually planned as a full-day charter.',
blog_art2_s3_title:'What We Serve at Sunset',
blog_art2_s3_desc:'By golden hour, the yacht can already be prepared with chilled champagne, fruit, oysters, or light appetizers — everything arranged in advance upon request. And if you\'d rather bring your own drinks, that\'s perfectly welcome too.<br><br>And yes — beautiful glassware really does make a difference here.',
blog_art2_s4_title:'Where the Best Photos Are Taken',
blog_art2_s4_desc:'The best light is always on the bow deck, facing the sunset.<br><br>At that hour, the water turns gold, the mountains fall into soft shadow, and even phone photos begin to look almost cinematic.<br><br>If there\'s a photographer onboard, most of the shooting usually happens during golden hour.<br><br>But even without professional equipment, everything looks beautiful — especially when the yacht slows down and the water becomes almost perfectly still.',
blog_art2_s5_title:'What Plays in the Background',
blog_art2_s5_desc:'The music is always yours.<br><br>The Bluetooth system connects to any playlist, and by evening guests usually lower the volume themselves. Some put on jazz, some Lana Del Rey, and some leave only the sound of the water and the engine running softly in the background.<br><br>Before sunset, the captain usually slows the yacht down — not for the route, but for the feeling of the evening itself.',
blog_art2_s6_title:'What Most People Don\'t Mention',
blog_art2_s6_desc:'Sometimes the perfect sunset simply doesn\'t happen.<br><br>Clouds roll over Luštica, the wind lifts the water, and the sky turns silver-grey instead of gold. It happens.<br><br>But strangely, those evenings often become the coziest ones: a warm blanket, coffee from the espresso machine, champagne in the salon, and rain over the bay instead of postcard-perfect skies.<br><br>We always check the forecast in advance. If the weather looks truly disappointing, we try to suggest another day or slightly adjust the departure time.<br><br>And one more thing: the best sunset photos usually happen when the yacht is anchored or moving very slowly. If you\'d like calmer shots without motion in the water, simply ask the captain for a short photo stop.',
blog_art2_s7_title:'When to Book',
blog_art2_s7_desc:'The best months for golden light are June, July, August, and September.<br><br>In May and October, the atmosphere remains beautiful, but the light becomes softer, cooler, and less predictable.<br><br>If you\'re planning a special evening — a proposal, anniversary, or family celebration — it\'s best to book in advance, especially during peak season.',
blog_art3_meta:'Food Onboard &bull; 5 min read',
blog_art3_title:'Lunch at Anchor: BBQ in a Quiet Bay of the Bay of Kotor',
blog_art3_excerpt:'Fresh fish and seafood prepared right onboard, salty air, warm Adriatic breeze, and a peaceful bay around you — somehow, everything comes together here, and even the simplest lunch becomes something you remember long after the charter ends.',
blog_art3_intro:'There\'s a special moment in the middle of the day when the yacht is already anchored in a quiet bay, the sea becomes almost perfectly still, and the scent of the grill begins to mix with the smell of the sea.<br><br>Fresh fish and seafood prepared right onboard, salty air, warm Adriatic breeze, and a peaceful bay around you — somehow, everything comes together here, and even the simplest lunch becomes something you remember long after the charter ends.',
blog_art3_quote:'"People eat differently on the water. Not quickly between things, but slowly — with swimming, sunshine, and conversations. Sometimes lunch lasts longer than the cruise itself." — Captain Alexey',
blog_art3_s1_title:'What We Usually Prepare',
blog_art3_s1_desc:'A standard onboard BBQ for 4–8 guests usually includes:<br>fresh dorado or sea bass<br>grilled tiger prawns<br>seasonal vegetables<br>baked potatoes<br><br>We can also serve local cheeses, pršut, olives, and fresh bread from a small bakery in Tivat.<br><br>For larger groups, we usually add more fish and seafood. Vegetarian options are also available upon request — halloumi, mushrooms, and grilled vegetables work beautifully on the BBQ.',
blog_art3_s2_title:'What We Serve with Lunch',
blog_art3_s2_desc:'Upon request, we can prepare local Montenegrin wines, prosecco, champagne, fresh lemonade, mineral water, and other drinks before your departure.<br><br>Most guests usually choose light white wines that pair well with fish and seafood, but if you have a favorite champagne, wine, or specific drinks in mind, simply let us know during booking.<br><br>All drinks are purchased and chilled in advance before the yacht departs. There is no additional markup for provisioning — you only pay the actual store price.',
blog_art3_s3_title:'Where the Ingredients Come From',
blog_art3_s3_desc:'Every morning, we buy fresh fish and seafood in Tivat from the same local suppliers we\'ve worked with for years.<br><br>Vegetables, fruit, cheese, and bread come from local markets and small bakeries nearby.<br><br>If guests would like oysters, we usually arrange them near Kamenari — delivered directly to the yacht by a small boat.<br><br>Whenever possible, we work only with fresh local products and avoid frozen seafood where local catch is available.',
blog_art3_s4_title:'Who Prepares the Food',
blog_art3_s4_desc:'In most cases, lunch is prepared onboard by the steward as part of the standard service.<br><br>For larger groups or special occasions, it\'s also possible to add a private chef. In that case, the experience becomes more restaurant-style — multiple courses, wine pairing, and dedicated presentation.<br><br>But for most guests, a simple BBQ on the yacht turns out to be exactly what they want: relaxed, beautiful, and unmistakably summer.',
blog_art3_s5_title:'How Much Does Onboard BBQ Cost',
blog_art3_s5_desc:'Usually:<br>€40–60 per guest for a standard BBQ<br>additional cost for oysters or premium seafood<br>private chef available upon request<br><br>The final cost depends on the menu and number of guests. Everything is agreed in advance before the charter.',
blog_art3_s6_title:'Alternative Option — Lunch at a Waterfront Restaurant',
blog_art3_s6_desc:'If you\'d prefer to go ashore for lunch, we can plan the route around one of the waterfront restaurants in:<br>Perast<br>Stoliv<br>Bigova<br>or Ribarsko Selo on the way to the Blue Cave<br><br>That said, many guests eventually choose lunch at anchor simply because they don\'t want to leave the water.',
blog_art3_s7_title:'What Most People Don\'t Mention',
blog_art3_s7_desc:'During strong winds, using the grill on the aft deck may become unsafe. On those days, we always inform guests in advance and suggest an alternative: cold seafood platters, cheeses, pršut, fresh bread, and lighter onboard dining instead of a hot BBQ.<br><br>And one more thing — after a grill lunch, your clothes will probably smell a little like smoke and sea salt. For some guests, that\'s part of the atmosphere. But if you have dinner plans in town afterward, bringing a spare shirt or dress is a good idea.',
blog_art3_s8_title:'When to Arrange It',
blog_art3_s8_desc:'It\'s best to arrange onboard BBQ in advance — either during booking or at least one day before departure.<br><br>Usually the evening before the charter, we send photos or options of the fresh catch available that morning and build the menu together around your route.',
blog_art7_meta:'Family Charters &bull; 6 min read',
blog_art7_title:'Yacht Charters with Children: What to Bring and What to Expect on the Water',
blog_art7_excerpt:'Before their first yacht charter, most families ask the same questions: "Can we come with small children?" "What if they get seasick?" "What if they get bored?"',
blog_art7_intro:'Before their first yacht charter, most families ask the same questions: "Can we come with small children?" "What if they get seasick?" "What if they get bored?"<br><br>In reality, children usually enjoy life on the water much more than parents expect. There is always something happening around them — swimming stops, boats, mountains, water, new sounds, and endless things to explore.<br><br>Over the years, we\'ve welcomed guests of every age: from toddlers peacefully sleeping in the shade on deck to teenagers standing beside the captain asking to learn how to steer the yacht.',
blog_art7_quote:'"Parents usually worry that their child will get tired or bored. In practice, most children simply don\'t want to return to the marina." — Captain Alexey',
blog_art7_s1_title:'Which Route Works Best for Different Ages',
blog_art7_s1_desc:'<strong>Under 2 Years Old.</strong> For the youngest guests, we usually recommend shorter and calmer routes inside the Bay of Kotor. The yacht has shaded areas and a cabin where children can rest or sleep comfortably. For this age, a 4-hour charter in calm weather is usually the most comfortable option.<br><br><strong>Ages 3–6.</strong> At this age, 4- or 6-hour charters with longer swimming stops usually work best. Children get tired more quickly from the sun and excitement, so a relaxed rhythm tends to make the day much more enjoyable.<br><br><strong>Ages 7–10.</strong> Children in this age group usually enjoy full days on the water without any problem. Longer routes, stops in Kotor, or walks through the old town are often a favorite part of the trip.<br><br><strong>Ages 11+.</strong> Teenagers usually love everything connected to the water: SUP boards, underwater scooters, jumping from the yacht, and longer cruises along the coastline. Almost any route works well for them.',
blog_art7_s2_title:'What\'s Available Onboard for Children',
blog_art7_s2_desc:'The yacht is equipped with:<br>children\'s life jackets in different sizes<br>inflatable rings and water toys<br>snorkeling masks<br>SUP boards<br>an underwater scooter<br>towels<br>and a cool cabin for resting or sleeping<br><br>For younger children, we can also prepare light snacks, juices, or simple meals upon request.',
blog_art7_s3_title:'What to Bring',
blog_art7_s3_desc:'We recommend bringing:<br>SPF 50+ sunscreen<br>a hat or panama<br>light long-sleeve clothing<br>dry clothes after swimming<br>your child\'s favorite snacks<br>and anything else that helps them feel comfortable during the trip<br><br>Even in the shade, the sun feels much stronger on the water than on land.',
blog_art7_s4_title:'How the Day Usually Flows',
blog_art7_s4_desc:'When children are onboard, the route naturally becomes more relaxed and flexible.<br><br>Usually the day looks something like this:<br>morning swimming while the sun is softer<br>lunch stop in a quiet bay<br>rest time in the shade after lunch<br>another swimming stop later in the afternoon<br><br>We try to avoid long nonstop cruising and leave more time for swimming, relaxing, and enjoying the water.',
blog_art7_s5_title:'If Children Get Bored',
blog_art7_s5_desc:'It happens sometimes — especially during longer cruises between stops.<br><br>Usually these help:<br>SUP boards<br>underwater scooter<br>fishing from the yacht<br>snorkeling masks<br>watching boats and mountains<br>or simply relaxing in the cabin with cartoons and air conditioning<br><br>The steward always calmly adapts the day to the family\'s rhythm.',
blog_art7_s6_title:'What About Seasickness?',
blog_art7_s6_desc:'Inside the Bay of Kotor, the water is usually very calm, so seasickness is quite rare.<br><br>If your child is sensitive to motion, it\'s best to let us know in advance — we\'ll choose a route entirely inside the bay and avoid open sea conditions.<br><br>Usually the following helps:<br>a light breakfast before departure<br>water<br>fresh air<br>and swimming stops instead of long crossings',
blog_art7_s7_title:'What Most People Don\'t Mention',
blog_art7_s7_desc:'A yacht day with children is naturally more active and lively — and that\'s completely normal.<br><br>If you\'re traveling with a larger group where some guests don\'t have children, it\'s good to understand in advance that the atmosphere will be less "quiet sunset with champagne" and more movement, laughter, swimming, and energy throughout the day.<br><br>And one more important thing: if a child becomes tired or the day simply isn\'t going as planned, we calmly adjust the route or return earlier. On the water, flexibility matters more than strict schedules.',
blog_art7_s8_title:'When to Book',
blog_art7_s8_desc:'When booking, it\'s helpful to tell us the children\'s ages in advance so we can prepare the right route, life jackets, and a comfortable rhythm for the day.<br><br>If there are any food allergies, favorite snacks, or drinks your child prefers, it\'s always best to mention them ahead of time.<br><br>July and August tend to book out the fastest, so if you\'re planning a family celebration or holiday, we recommend reserving your date early.',
blog_art8_meta:'When to Go &bull; 6 min read',
blog_art8_title:'June or September: Which Month Is Better for a Yacht Charter in Montenegro',
blog_art8_excerpt:'Everyone says that June and September are the best months in Montenegro. That\'s true — but they are not the same at all. There\'s a 4°C difference in sea temperature, different winds, different light in the mountains, and different prices.',
blog_art8_intro:'Everyone says that June and September are the best months in Montenegro. That\'s true — but they are not the same at all. There\'s a 4°C difference in sea temperature, different winds, different light in the mountains, and different prices.<br><br>If you\'re choosing between these two months, this guide is for you. And if you\'re still considering July or August, there\'s a section about that too.',
blog_art8_quote:'"After fifteen seasons, I still can\'t choose a favorite month. In June, the bay smells different — like flowers on the hills. In September, the light changes — the sun sits lower. It\'s simply two different versions of summer." — Captain Alexey',
blog_art8_s1_title:'Water Temperature',
blog_art8_s1_desc:'<strong>June:</strong> 22°C at the beginning of the month, around 24°C by the end. Swimming is comfortable throughout June, although the first half still feels refreshing.<br><br><strong>September:</strong> around 24°C at the beginning, cooling to 22°C by the end of the month. Almost the mirror image of June. The sea stays warm well into the second half of September.<br><br>In July and August, the water reaches 26–27°C — almost like a warm bath, perfect for children.',
blog_art8_s2_title:'Air Temperature',
blog_art8_s2_desc:'<strong>June:</strong> 25–28°C during the day, 17–19°C at night. If your charter starts around 9 AM, you\'ll usually want a light jacket — mornings on the water can still feel fresh.<br><br><strong>September:</strong> 26–29°C during the day, 18–20°C at night. Slightly warmer than June. The first half still feels like full summer, while the second half begins to hint at autumn.<br><br>In July and August, temperatures often reach 30–34°C during the day. Without shade on deck, the midday sun becomes intense, and everyone ends up in the water.',
blog_art8_s3_title:'Crowds',
blog_art8_s3_desc:'<strong>June:</strong> there are tourists, but Kotor is not overcrowded yet. In Perast, you can still sit down at a waterfront restaurant without a reservation. At the Blue Cave around noon, there are usually only 3–5 boats at a time, with a short 10-minute wait.<br><br><strong>September:</strong> similar to June, but after the 20th the coast becomes noticeably quieter. Cruise ships still arrive in Kotor, but evenings feel calmer.<br><br><strong>July and August:</strong> peak season. The Blue Cave can have a 20–30 minute queue of boats, Kotor becomes crowded, and restaurants often won\'t accept walk-ins. Anchorage spots fill up early in the day.',
blog_art8_s4_title:'Prices',
blog_art8_s4_desc:'<strong>June:</strong> standard season pricing. An 8-hour charter starts from €2,600.<br><br><strong>September:</strong> standard pricing until mid-September, with occasional 10% discounts in the second half of the month.<br><br><strong>May and October:</strong> usually 10–15% lower prices. The bays are quiet and peaceful, but the sea is already — or still — cooler for long swimming stops.<br><br><strong>July and August:</strong> prices are typically 10–15% higher between July 15 and August 15. The best dates are often booked out a month in advance.<br><br>If budget matters most, October offers one of the best price-to-experience ratios. If personal comfort matters more, the second half of June and the first half of September are usually ideal.',
blog_art8_s5_title:'Wind',
blog_art8_s5_desc:'The Bay of Kotor is protected by mountains, so the sea stays relatively calm throughout most of the season.<br><br><strong>June:</strong> one of the calmest and most stable months. Mistral winds appear occasionally, usually for half a day once every week or two.<br><br><strong>September:</strong> storms become slightly more frequent, especially in the second half of the month. The eastern Bura wind can feel cold and unpleasant, but it usually passes within 2–3 days.<br><br>If guaranteed calm weather is important for your trip, June is usually the safer option. In September, there can occasionally be days when strong wind limits the route.',
blog_art8_s6_title:'Daylight and Sunsets',
blog_art8_s6_desc:'<strong>June:</strong> sunset is around 20:30. Long evenings and a golden hour that lasts from roughly 19:00 to 20:00.<br><br><strong>September:</strong> sunset shifts from around 18:30 at the beginning of the month to about 17:45 by the end. Days are shorter, but the sunset light becomes deeper and more golden because the sun sits lower.<br><br>Both months work beautifully for 12-hour sunset charters. In June, sunsets happen later, so it\'s possible to have dinner onboard after returning. In September, darkness falls much faster after sunset.',
blog_art8_s7_title:'What Blooms',
blog_art8_s7_desc:'<strong>June:</strong> wild herbs cover the hillsides, and the scent of lavender and thyme drifts down toward the water. Around Morinj, you can often smell it clearly while anchored. In Perast, pomegranate trees begin to bloom.<br><br><strong>September:</strong> fig season arrives. Markets in Tivat fill with sweet grapes, ripe figs, and the warm earthy scent of late summer instead of flowers.<br><br>It\'s a small detail, but if you care about atmosphere, June feels like late spring while September feels like the beginning of a Mediterranean autumn.',
blog_art8_s8_title:'What Happens on Bad Weather Days',
blog_art8_s8_desc:'It\'s rare — but it happens.<br><br><strong>In June:</strong> if a storm arrives, we usually switch to a shorter route inside the bay. Most weather changes pass within a day.<br><br><strong>In September:</strong> the Bura wind can last for 2–3 days. If your charter date falls on a strong wind day, we normally offer to reschedule to the next available day.<br><br><strong>In July and August:</strong> the weather is generally stable, though occasional evening thunderstorms can appear. If conditions become unsafe, we simply don\'t go out.',
blog_art8_s9_title:'What People Usually Don\'t Mention',
blog_art8_s9_desc:'In June, the bay genuinely smells like flowers from the hills. It\'s not marketing — lavender and thyme really do reach the water in the mornings.<br><br>September brings a rare combination: warm sea during the day, but cool fresh mornings where you suddenly want hot tea on deck.<br><br>And one more thing: September changes dramatically between the first and second half of the month. Early September still feels like full summer. By the end of the month, the atmosphere becomes noticeably more autumnal, even though the sea remains warm.',
blog_art8_s10_title:'If We Had to Recommend Specific Dates',
blog_art8_s10_desc:'<strong>June 5–25</strong> — the most stable period of the season. Warm water, fewer tourists, blooming hills.<br><br><strong>September 5–15</strong> — ideal if you want slightly warmer water and quieter bays.<br><br><strong>From late May or late September onward</strong> — the best prices and nearly empty coastline, though the water becomes cooler for long swims.<br><br>We usually don\'t recommend mid-July to mid-August for guests looking for peace and quiet. That period is better suited for active summer holidays and the warmest possible sea.',
blog_art9_meta:'Gastro Guide &bull; 6 min read',
blog_art9_title:'From the Sea Straight to the Table: The Best Seafood in the Bay of Kotor',
blog_art9_excerpt:'In the Bay of Kotor, seafood often reaches the table almost directly from the sea itself. No restaurant displays, no long supply chains, no waiting.',
blog_art9_intro:'In the Bay of Kotor, seafood often reaches the table almost directly from the sea itself. No restaurant displays, no long supply chains, no waiting.<br><br>Oysters here can be delivered directly to the yacht during the route — a small boat approaches the deck about twenty minutes after a phone call. Fresh prawns and fish are picked up from local fishermen in the morning, and an hour later they\'re already being grilled in a quiet bay.<br><br>That\'s exactly why everything tastes different here.',
blog_art9_quote:'"Seafood always tastes better when there\'s one hour between the sea and the plate instead of one day." — Captain Alexey',
blog_art9_s1_title:'Oysters from Kamenari',
blog_art9_s1_desc:'Small family oyster farms have been operating around Kamenari for generations.<br><br>They grow European flat oysters — more mineral, richer, and saltier in flavor than the more common supermarket varieties. Their taste pairs especially well with cold white wine.<br><br>During the charter, we can contact the farm in advance, and a small boat will deliver the oysters directly to the yacht.',
blog_art9_s2_title:'How We Serve Them',
blog_art9_s2_desc:'Usually we serve them:<br>on ice<br>with lemon<br>sometimes with a few drops of Tabasco<br>and chilled white wine<br><br>No complicated presentation or heavy sauces — everything stays simple and fresh.',
blog_art9_s3_title:'Prawns and the Catch of the Day',
blog_art9_s3_desc:'While cruising through the bay, we sometimes stop by local fishermen for fresh prawns, langoustines, or the morning catch.<br><br>Most often this includes:<br>tiger prawns<br>dorado<br>sea bass<br>mussels<br>or whatever local fishermen caught that morning<br><br>Most of the seafood is prepared directly onboard — usually grilled while anchored in a calm bay.<br><br>For many guests, this becomes one of the most memorable moments of the day: the sea around you, warm breeze, a glass of cold wine, and seafood that was still in the water earlier that morning.',
blog_art9_s4_title:'What Else Is Worth Trying',
blog_art9_s4_desc:'Besides oysters, guests often order:<br>mussels cooked in white wine<br>grilled fish<br>local cheese and pršut platters<br>seasonal fruit<br><br>The menu always stays flexible — depending on the route, the season, and the mood of the day.',
blog_art9_s5_title:'Oysters at Sunset',
blog_art9_s5_desc:'One of the most beautiful options is a sunset stop near Perast or along the Luštica coastline with oysters, wine, and calm water around the yacht.<br><br>By that time, the bay becomes quieter, the sea almost mirror-like, and the atmosphere feels much closer to a private dinner on the water than a regular yacht charter.',
blog_art9_s6_title:'What People Usually Don\'t Mention',
blog_art9_s6_desc:'In July and August, the best seafood sometimes sells out early in the morning — especially oysters and large prawns. Restaurants and yachts often reserve them in advance.<br><br>So if you\'d like oysters or specific seafood during your charter, it\'s best to mention it while booking.<br><br>And one more thing: local flat oysters taste very different from the sweeter Japanese or French varieties many guests are used to. They are saltier, more mineral, and distinctly "of the sea."',
blog_art9_s7_title:'How to Add It to Your Charter',
blog_art9_s7_desc:'If you\'d like to include oysters, prawns, or a seafood BBQ in your route, simply let us know in advance.<br><br>We\'ll contact the farms and fishermen before departure, prepare everything ahead of time, and naturally build it into your day on the water.',
blog_art10_meta:'History of the Bay &bull; 7 min read',
blog_art10_title:'Submarine Tunnels and Mamula Fortress: History on the Way to the Blue Cave',
blog_art10_excerpt:'At the entrance of the Bay of Kotor, on the way toward the open Adriatic, there are two places most yachts pass far too quickly.',
blog_art10_intro:'At the entrance of the Bay of Kotor, on the way toward the open Adriatic, there are two places most yachts pass far too quickly.<br><br>The first is a series of abandoned submarine tunnels carved directly into the cliffs of the Luštica Peninsula. The second is Mamula Fortress, standing on a small island at the entrance to the bay.<br><br>Today, both are part of the route to the Blue Cave. But only a few decades ago, this coastline was filled with military bases, fortifications, and restricted areas known mainly to soldiers and locals.',
blog_art10_quote:'"For a long time, the Bay of Kotor was not a resort destination but a strategic military zone. And when you pass these places from the water, the bay starts to feel completely different." — Captain Alexey',
blog_art10_s1_title:'The Submarine Tunnels of Luštica',
blog_art10_s1_desc:'On the southern side of the Luštica Peninsula, the old tunnels of a former Yugoslav naval base still remain hidden inside the cliffs.<br><br>They were built in the 1960s for the Yugoslav submarine fleet. The tunnels were carved directly into the mountain so submarines could disappear entirely inside the rock.<br><br>From the water, it looks almost unreal: massive dark arches opening deep into the mountain.<br><br>On the way to the Blue Cave, we usually slow down along this stretch of coastline so guests can see the tunnel entrances and take photos.<br><br>This is not a museum or a tourist attraction with guided tours. Without context, it\'s simply concrete and stone. But once you understand why these tunnels were built and how they were used, the place feels entirely different.',
blog_art10_s2_title:'Mamula Fortress',
blog_art10_s2_desc:'Mamula sits on a small island at the entrance to the Bay of Kotor.<br><br>The fortress was built by the Austro-Hungarian Empire in the 19th century to defend the entrance to the bay. Later, during World War II, the island was used as a prison and concentration camp.<br><br>After the war, the site remained abandoned and closed off for many years.<br><br>Today, the fortress has been transformed into a luxury hotel, while the historic structure itself has been carefully restored. From the sea, you can still clearly see the old stone walls, bastions, and the shape of the original fortress — now surrounded by yachts and transfer boats bringing hotel guests ashore.<br><br>That contrast is what usually leaves the strongest impression: old military walls standing in the middle of an incredibly calm and beautiful sea.',
blog_art10_s3_title:'Why It Feels Different from the Water',
blog_art10_s3_desc:'From land, these places are almost impossible to fully experience.<br><br>The submarine tunnels are hidden inside the cliffs, and Mamula is most impressive when seen from the sea — exactly as military ships once saw it while entering the bay.<br><br>That\'s why history here feels much more powerful during a yacht route than on a regular land tour.',
blog_art10_s4_title:'How It Fits into the Route',
blog_art10_s4_desc:'A typical Blue Cave route usually looks like this:<br>morning departure from Tivat<br>cruising along the Luštica coastline past the old tunnels<br>a short circle around Mamula<br>then the Blue Cave<br>a swimming or lunch stop<br>and return through the bay<br><br>These historical stops usually don\'t take much time, but they completely change the feeling of the route itself.',
blog_art10_s5_title:'What People Usually Don\'t Mention',
blog_art10_s5_desc:'Locals still have mixed feelings about Mamula.<br><br>For some, it\'s a beautifully restored historic site. For others, its history feels too heavy for a luxury hotel. That\'s why people here rarely speak about it as simply "a beautiful fortress" — the place carries another side to its story as well.<br><br>And one more thing: not every guest is interested in history. Some people come only for the sea, swimming, and quiet bays — and that\'s perfectly fine too. In that case, we simply pass these places without long stops or detailed stories.',
blog_art10_s6_title:'The Best Time to Pass Mamula',
blog_art10_s6_desc:'The best light for photographs is usually:<br>in the morning around 9:30–10:30<br>or in the evening closer to sunset<br><br>At that time, the old fortress walls become especially beautiful against the golden light and calm water.',
blog_read_also:'Read also',
blog_art4_meta:'Route Guide &bull; 7 min read',
blog_art4_title:'Blue Cave in Montenegro: Why Timing Matters More Than You Think',
blog_art4_excerpt:'The Blue Cave glows for only a few hours each day — roughly between 11:00 AM and 1:00 PM. After that, the magic fades, and the cave becomes simply a beautiful sea grotto.',
blog_art4_intro:'The Blue Cave glows for only a few hours each day — roughly between 11:00 AM and 1:00 PM. After that, the magic fades. The water loses its electric color, and the cave becomes simply a beautiful sea grotto.<br><br>Most tourist boats arrive closer to 3 PM. Their photos turn out pale blue, and many assume the vivid images online are heavily filtered. In reality, they\'re simply too late.<br><br>The glow is not marketing. It\'s physics.<br><br>At a certain angle, sunlight passes through an underwater entrance, reflects off the pale seabed, and illuminates the water from below. This natural "window of light" lasts only about one and a half to two hours a day.<br><br>Arrive at the right moment, and the cave turns almost neon blue. Miss it, and you\'ll still see a beautiful cave — just without the effect that makes it famous.',
blog_art4_quote:'"I\'ve been coming here for eight years, and I still can\'t predict which day the light will be most intense. It depends on clouds, tides, and, I suspect, the mood of the sea itself. But one thing never changes — the best time is always between 11 and 1." — Captain Alexey',
blog_art4_s1_title:'What Is the Blue Cave',
blog_art4_s1_desc:'Locally known as Plava Špilja, the Blue Cave is a natural sea grotto located on the Luštica Peninsula, near the entrance to the Bay of Kotor. It can only be reached by water.<br><br>From the outside, the entrance looks small. Inside, the cave opens into a spacious stone chamber. Beneath the surface lies a natural underwater tunnel — the passage that allows sunlight to enter and create the glowing effect.<br><br>The water inside is around three to four meters deep. Once the yacht engine is turned off, all you hear is the echo of water against the rock.',
blog_art4_s2_title:'Why 11–12 Is the Perfect Time',
blog_art4_s2_desc:'For the glowing effect to appear, the sun must be high enough for the light beam to pass through the underwater entrance and illuminate the cave from within.<br><br>Technically, the effect can be seen roughly between 10:45 AM and 1:15 PM, but the most intense color appears around midday.<br><br>During summer, the window is slightly longer. In May and October, timing becomes more precise. From November to April, the glowing effect is minimal.',
blog_art4_s3_title:'How the Route Works',
blog_art4_s3_desc:'From Porto Montenegro to the Blue Cave is about two hours of relaxed cruising. We usually depart around 9 AM to arrive at the cave during the best light conditions.<br><br>Along the way, we pass several places that cannot truly be experienced from land.<br><br>The Yugoslav submarine tunnels — former military tunnels carved directly into the cliffs of Luštica during the Yugoslav era. Today they are open from the sea, and we usually slow down so guests can explore and take photos.<br><br>Mamula Island — a 19th-century fortress standing at the entrance to the bay. The island is now home to a hotel and museum complex. Most guests prefer a photo stop from the water, though it\'s also possible to go ashore.<br><br>We usually spend around 30–40 minutes inside the Blue Cave — swimming, relaxing, and enjoying the atmosphere.',
blog_art4_s4_title:'Where to Have Lunch',
blog_art4_s4_desc:'There are two favorite lunch stops near the cave.<br><br><strong>Ribarsko Selo</strong> — a small waterfront restaurant with the atmosphere of an old fishing village. The menu depends on the morning catch — fresh sea bass, gilt-head bream, squid, and local seafood prepared simply and well.<br><br><strong>Forte Rose</strong> — a more refined restaurant setting inside a historic Austro-Hungarian fortress overlooking the strait. Ideal for a slower lunch and a scenic stop along the route.<br><br>If you prefer to stay onboard, we can also prepare lunch directly on the yacht with a grill setup on the aft deck.',
blog_art4_s5_title:'After Lunch',
blog_art4_s5_desc:'The return route usually continues through the Bay of Kotor with a swimming stop in open water before re-entering the bay.<br><br>In August, the sea temperature is around 25°C (77°F). In September, about 22°C (72°F). Even in October, sunny days are still warm enough for swimming.',
blog_art4_s6_title:'What to Bring',
blog_art4_s6_desc:'Swimwear<br>A phone or GoPro with a waterproof case<br>Light clothing for lunch stops<br>Sunscreen<br><br>Fins are not necessary — the cave is relatively shallow inside.',
blog_art4_s7_title:'What Most People Don\'t Mention',
blog_art4_s7_desc:'In July and August, the entrance to the cave can become busy with taxi boats and group excursions. Sometimes there is a short wait before entering.<br><br>If the eastern wind exceeds 15 knots on the day of your charter, entering the cave may become unsafe. In that case, we suggest an alternative route through the Bay of Kotor instead. It\'s not a backup plan — simply a different kind of beautiful day on the water.<br><br>And sometimes, the light inside the cave is softer than expected. Clouds pass over Luštica, or the sea is less clear than usual. It happens. The atmosphere remains unforgettable either way.',
blog_art4_s8_title:'When to Book',
blog_art4_s8_desc:'During peak season, Blue Cave charter dates are often reserved several weeks in advance — especially in July and August.<br><br>Available as:<br>8-hour charter — €2,600<br>12-hour charter with sunset and evening swim — €3,000',
blog_art5_meta:'Transparent Pricing &bull; 6 min read',
blog_art5_title:'4 Hours on a Yacht in Tivat for €2,200: What\'s Included, What Isn\'t, and Whether It\'s Worth It',
blog_art5_excerpt:'A 4-hour charter is the shortest experience we offer — and for many guests, it turns out to be the perfect amount of time. The charter is priced at €2,200 for up to 16 guests.',
blog_art5_intro:'A 4-hour charter is the shortest experience we offer — and for many guests, it turns out to be the perfect amount of time.<br><br>It\'s ideal if you don\'t have a full day to spend on the water, if you\'re travelling with young children, or if you simply want to see whether a yacht day in Montenegro feels right for you before booking a longer charter.<br><br>In just a few hours, you can leave Porto Montenegro, cruise through the Bay of Kotor, stop for a swim in crystal-clear water, enjoy lunch onboard, and return to the marina without the day ever feeling rushed.<br><br>The charter is priced at €2,200 for up to 16 guests. For larger groups, it often works out to little more than a long lunch by the sea — except your table happens to be floating in the middle of the bay.',
blog_art5_quote:'"Four hours is a proper time on the water. Not a rushed sightseeing trip — enough time to reach a beautiful spot, swim, slow down, and really experience the bay. If you want more than one stop, take six." — Captain Alexey',
blog_art5_s1_title:'The 4-Hour Route',
blog_art5_s1_desc:'We depart from Porto Montenegro and cruise deeper into the Bay of Kotor, passing the Kamenari ferries and the dramatic mountain slopes rising directly from the water.<br><br>Usually, we make one main stop for swimming and relaxing.<br><br>Most often, this is Our Lady of the Rocks (Gospa od Škrpjela) — a man-made island with a small baroque church that has been built stone by stone since the 15th century. The water here is exceptionally clear, with visibility often reaching ten meters.<br><br>Depending on the weather or the mood of the day, we may instead head to Morinj — a quiet bay beneath the mountains, known for its cooler water from freshwater springs and its peaceful atmosphere.<br><br>Another option is Perast — mooring for an hour, walking along the waterfront, and having coffee by the sea.<br><br>We usually spend around an hour and a half at anchor before returning to Tivat.<br><br>We do not go all the way to Kotor on a 4-hour charter. That route deserves at least six hours to feel relaxed rather than rushed.',
blog_art5_s2_title:'What\'s Included in €2,200',
blog_art5_s2_desc:'Marea yacht (18m) with captain and steward<br>Fuel within the 4-hour route<br>Welcome drink upon arrival — prosecco or a non-alcoholic cocktail<br>Water equipment: SUP boards, snorkeling masks, floating loungers, underwater scooter<br>Passenger insurance for all guests<br>Bluetooth sound system — connect your own playlist<br>Towels, ice, water, and fresh fruit onboard throughout the trip<br><br>There are no additional port fees — departure from our home marina is included.',
blog_art5_s3_title:'What\'s Not Included',
blog_art5_s3_desc:'<strong>Food.</strong> Lunch and snacks are available upon request and charged separately. There are two main options:<br><br><strong>1. Onboard grill.</strong> We prepare everything in advance and cook directly on the yacht. Usually sea bream, tiger prawns, vegetables, local cheeses, and light appetizers. Typically €40–60 per guest. Perfect if you\'d rather stay at anchor and not go ashore.<br><br><strong>2. Seafood delivered directly to the yacht.</strong> Near Kamenari, fresh oysters can be delivered by boat directly to the yacht. Around Perast and Prčanj, local restaurants can also arrange seafood platters delivered onboard.<br><br><strong>Alcohol beyond the welcome drink.</strong> The welcome glass is included. Everything else can either be brought onboard by guests or arranged in advance.<br><br><strong>Additional services.</strong> Private chef, photographer, celebration décor, DJ, or extra charter hours can all be added during booking.',
blog_art5_s4_title:'Who the 4-Hour Charter Is Best For',
blog_art5_s4_desc:'<strong>Families with young children.</strong> For children under eight, four hours is usually ideal — enough time to swim, eat, and enjoy the experience without becoming tired from the sun and wind.<br><br><strong>Guests passing through Montenegro.</strong> If you arrive in Tivat in the morning and leave later the same day, it\'s a perfect way to spend a few relaxed hours on the water.<br><br><strong>First-time yacht guests.</strong> Not sure whether you want to spend an entire day onboard? A 4-hour charter is an easy and comfortable first experience.',
blog_art5_s5_title:'When 6 or 8 Hours Makes More Sense',
blog_art5_s5_desc:'If you want to visit Kotor, we recommend at least six hours. The journey itself takes time, and the town deserves to be explored without rushing.<br><br>If you want to visit the Blue Cave, that is a separate 8-hour route (€2,600). The cave\'s famous glowing light appears between 11 AM and 1 PM, which doesn\'t fit a short charter schedule.<br><br>If you\'d like to experience sunset on the water, an 8- or 12-hour charter is the better choice. During summer, golden hour begins around 7:30–8:30 PM, while 4-hour charters usually return earlier.',
blog_art5_s6_title:'What Most Companies Don\'t Say',
blog_art5_s6_desc:'Four hours is the minimum amount of time that still feels like a real yacht day rather than just a short boat ride.<br><br>If you\'re deciding between 4 and 6 hours, we usually recommend 6. The difference in price is relatively small, but the entire day feels calmer, more flexible, and much more complete.<br><br>And one more thing: a welcome drink means exactly that — a welcome drink, not an unlimited bar. If you\'d like champagne, wine, or cocktails throughout the trip, simply let us know in advance and we\'ll prepare everything before departure.',
blog_art5_s7_title:'When to Book',
blog_art5_s7_desc:'During the season, 4-hour slots are sometimes available even a few days before departure, since shorter charters tend to fill later. In July and August, however, we recommend booking at least one week ahead.',
blog_art6_meta:'Captain\'s Favorite Spots &bull; 8 min read',
blog_art6_title:'5 Hidden Anchorages Along the Montenegro Coast That Tourist Boats Never Reach',
blog_art6_excerpt:'Over the years, we\'ve collected a few favorite anchorages that most tourist boats never visit — quiet water, hidden beaches, and the feeling that the coastline belongs only to you for a few hours.',
blog_art6_intro:'Kotor, Budva, and Sveti Stefan appear in every guidebook and on almost every group boat tour. By midday, they\'re crowded with excursion boats, busy swimming stops, and lines of people waiting for photos.<br><br>But the coastline of Montenegro changes completely once you move away from the main routes. A little farther along the shore, there are still bays where the only sounds are water, wind, and the occasional anchor chain dropping into the sea.<br><br>Over the years, we\'ve collected a few favorite anchorages that most tourist boats never visit. Not because they\'re secret — simply because they don\'t work for large groups or quick sightseeing tours. There are no beach clubs, loud music, or "must-see" photo stops here. Just quiet water, hidden beaches, and the feeling that the coastline belongs only to you for a few hours.',
blog_art6_quote:'"The best anchorages are usually the ones nobody talks about. Places where nothing happens — one yacht at anchor, clear water, silence. Most tourist boats avoid them because there\'s nothing loud enough to sell." — Captain Alexey',
blog_art6_s1_title:'1. Plavi Horizont',
blog_art6_s1_desc:'On the southern side of the Luštica Peninsula, west of the Blue Cave, lies a wide open bay facing the Adriatic Sea.<br><br>The water becomes deep almost immediately, making it perfect for anchoring, swimming, and diving straight from the yacht into crystal-clear sea. The pale sandy bottom gives the water an intense turquoise color on sunny days.<br><br>There are almost no buildings onshore — no restaurants, no beach clubs, no jet skis. Even in August, the bay often feels surprisingly empty apart from a few sailing yachts anchored nearby.<br><br>We usually stop here on the way back from the Blue Cave. It works perfectly as a calm second half of the day.',
blog_art6_s2_title:'2. Žanjice',
blog_art6_s2_desc:'A quiet bay near the Blue Cave that most tourist boats simply pass by.<br><br>Excursion boats usually stop at the cave for twenty minutes and continue on. Žanjice remains just beyond the crowds — a small bay with rocky beaches, transparent water, and cliffs rising around it.<br><br>There\'s no busy promenade or beach scene here. Just a tiny café by the water, sometimes closed outside the peak season.<br><br>It\'s one of the best places for a peaceful swim after visiting the cave.<br><br>By September, there may be only two or three yachts in the bay. In October, almost complete silence.',
blog_art6_s3_title:'3. The Hidden Beach Beyond Sveti Stefan',
blog_art6_s3_desc:'A small pebble beach south of Sveti Stefan, tucked behind a rocky cape.<br><br>From land, the only access is a narrow path through the rocks, which means most people never even notice it exists. From the water, all you see is a small staircase disappearing upward toward a private villa.<br><br>We anchor a short distance offshore, launch the sea scooter or SUP boards, and reach the beach by water.<br><br>From a drone, the place looks fairly modest. But that\'s not the point. What makes it special is the rare feeling of privacy — even in the middle of summer.',
blog_art6_s4_title:'4. Bigova',
blog_art6_s4_desc:'A small fishing village on the Luštica Peninsula with a tiny marina and one of the most authentic seafood restaurants on the coast.<br><br>Everything here is simple: a few tables by the water, the catch of the day, and absolutely no attempt to turn the place into a polished luxury destination.<br><br>We anchor in the bay and head ashore by tender. After that, lunch depends entirely on what the fishermen brought in that morning: sea bream, octopus, squid, or local fish you rarely see in restaurants around Kotor.<br><br>Bigova is not a quick stop. It\'s the kind of place where lunch slowly turns into two quiet hours by the sea.',
blog_art6_s5_title:'5. The Unnamed Anchorage Overlooking Luštica Bay',
blog_art6_s5_desc:'This bay doesn\'t even have an official name. It sits on the western side of Luštica, along the route back toward Tivat.<br><br>What makes it special is the contrast. Your yacht is anchored in a quiet natural bay, while directly across the water lies Luštica Bay — a polished modern marina filled with white yachts, waterfront apartments, and luxury hotels.<br><br>The water here is deep and calm. Children usually float beside the yacht while adults swim directly from the stern.<br><br>It\'s one of our favorite final stops before returning to the marina.',
blog_art6_s6_title:'A Few Things Worth Knowing',
blog_art6_s6_desc:'Beyond these five places, we sometimes add a few quieter stops depending on weather, season, and the mood of the day.<br><br>That might mean:<br>sunset dinner anchorages near Duraševići<br>quiet swimming stops around Rose<br>or an almost empty Perast early in the morning during spring or autumn<br><br>Outside peak season, the entire coastline feels completely different.',
blog_art6_s7_title:'What Most People Don\'t Mention',
blog_art6_s7_desc:'Not every anchorage works in every weather condition.<br><br>For example, Plavi Horizont becomes uncomfortable during strong western winds because the bay is too exposed. On those days, we simply adjust the route.<br><br>And even the quietest places become a little busier in July and August. If you want a truly peaceful yacht day, June and September are usually perfect.<br><br>One more thing: Bigova is still a real fishing village, not a curated tourist destination. During peak season, tables can fill up quickly, so we usually call ahead from the yacht to reserve one.',
blog_art6_s8_title:'How to Include These Stops in Your Route',
blog_art6_s8_desc:'Most of these anchorages are part of our 8-hour "Hidden Coast" route. Usually, two or three stops in one day feels ideal — enough time for swimming, lunch, and a relaxed pace without rushing.<br><br>Some locations can also be added to shorter routes if you prefer quiet bays over beach clubs and crowded stops.',
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
meta_desc:'Private charter aboard the 18-metre Marea in the Bay of Kotor. Up to 16 guests for the day, up to 6 with overnight. Captain with 7 years experience. Reply within 2 hours.',
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
crew_sub:'One captain since 2019, a first mate, and a steward. A small crew — everyone knows the guests by name by the end of the day.',
crew_captain_role:'Captain',
crew_captain_name:'Captain Alexey',
crew_captain_bio:'Since 2019, Alexey has been running one charter per day on this yacht. Knows the <a href="blog-boka-bay-route.html">Bay of Kotor</a> without charts: where to <a href="blog-oysters-prawns.html">buy oysters in Kamenari</a> (order from the boat — they bring them out), why the <a href="blog-blue-cave.html">Blue Cave needs to be caught between 11 and 12</a>, in which cove to anchor at <a href="blog-sunset-champagne.html">sunset</a> with a north-west wind. Yacht Master Offshore, 50,000+ nautical miles across the Mediterranean.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'STCW',
crew_cert_first_aid:'Advanced First Aid',
crew_cert_experience:'7 years on these waters',
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
crew_trust_sub:'All passengers are insured automatically. Licensed by the Maritime Administration of Montenegro. Crew certified to STCW and EU standards. Life jackets for every passenger, including child sizes.',

// ===== Events: catalog page =====
events_page_eyebrow:'Season 2026',
events_page_title:'Evenings on Marea',
events_page_sub:'A small season of curated evenings on the Adriatic — sunset gatherings, season openings, one-night voyages. By reservation, up to twenty guests at a time.',
events_why_eyebrow:'The format',
events_why_h2:'Why these evenings',
events_why_1_title:'Private setting',
events_why_1_text:'Up to 20 guests aboard.',
events_why_2_title:'Curated atmosphere',
events_why_2_text:'DJ, dress code, champagne — every detail planned.',
events_why_3_title:'Captain & crew',
events_why_3_text:'Seven years on these waters.',
events_fallback_h2:'Don\'t see a date that works?',
events_fallback_p:'Charter Marea privately for your own evening — birthday, anniversary, or a quiet night with friends.',
events_fallback_cta:'Plan a private charter',
events_fallback_wa:'WhatsApp us',
events_card_reserve:'Reserve →',
events_card_spots:'Limited spots',
events_card_few:'Few spots left',
events_card_sold:'Sold out',
events_card_white_sunset_meta:'Sunset party · 6 hours',
events_card_white_sunset_title:'White Sunset Party',
events_card_white_sunset_desc:'Sunset DJ set, light buffet, champagne, a swim stop in a calm bay.',

// ===== Events: detail page (structural strings) =====
event_expect_eyebrow:'An evening designed',
event_expect_h2:'What to expect',
event_included_eyebrow:'On board',
event_included_h2:'What\'s included',
event_included_no_h3:'Not included',
event_reserve_eyebrow:'Reserve',
event_reserve_h2:'Limited spots — by reservation only',
event_reserve_sub:'Reserve via the form or send a WhatsApp message — we\'ll confirm availability and details within 2 hours.',
event_form_h3:'Reserve your spot',
event_form_name:'Your name',
event_form_phone:'Phone / WhatsApp',
event_form_guests:'Number of guests',
event_form_guests_1:'1 guest',
event_form_guests_2:'2 guests',
event_form_guests_3_5:'3–5 guests',
event_form_guests_6_10:'6–10 guests',
event_form_guests_11_15:'11–15 guests',
event_form_guests_16_20:'16–20 guests',

event_form_offer:'Couple or group reservation — I want to book 2+ spots together and would like rate details',
event_form_notes:'Anything we should know? (optional)',
event_form_submit:'Reserve spot',
event_form_sending:'Sending...',
event_form_success_h:'Reserved.',
event_form_success_p:'We\'ll confirm within 2 hours via WhatsApp.',
event_form_error:'Submission error. Try WhatsApp or call us directly.',
event_related_h2:'Other upcoming events',
event_related_all:'← All events',
event_wa_reserve:'Reserve on WhatsApp',
event_cta_reserve:'Reserve your spot',

// ===== Event #1: White Sunset Party =====
event_ws_title:'White Sunset Party',
event_ws_eyebrow:'June 14 · 2026',
event_ws_tagline:'The first evening of the season aboard Marea.',
event_ws_meta_duration:'6 hours on the water',
event_ws_meta_departure:'Departure 17:00 from Tivat',
event_ws_meta_guests:'Up to 20 guests',
event_ws_expect_1:'White dress code',
event_ws_expect_2:'Sunset over the Adriatic',
event_ws_expect_3:'DJ set',
event_ws_expect_4:'Light buffet & champagne',
event_ws_expect_5:'Swim stop in a calm bay',
event_ws_narrative_p1:'Six hours at sea, between Tivat and the open Adriatic. We leave at 17:00, when the light starts to soften. By 19:30 we\'re anchored in a calm bay south of Verige — champagne on deck, music low enough that you still hear the water.',
event_ws_narrative_p2:'A white dress code, up to twenty guests, one yacht. The whole evening built around the hour the sun goes down.',
event_ws_narrative_quote:'"This is the night we wait for all winter — the first time the season feels real." — Captain Alexei',
event_ws_narrative_promise:'Limited to twenty guests. We confirm reservations within two hours.',
event_ws_inc_1:'DJ set throughout the evening',
event_ws_inc_2:'Light buffet (canapés, seasonal mezze)',
event_ws_inc_3:'Champagne & welcome drink',
event_ws_inc_4:'Crew (captain + hostess)',
event_ws_inc_5:'Sunset swim stop in a calm bay',
event_ws_inc_6:'Fuel for the full route',
event_ws_noinc_1:'Hard alcohol bar (on request)',
event_ws_noinc_2:'Hotel pickup',
event_ws_noinc_3:'Photographer (add-on)',
},
ru: {
nav_home:'Главная', nav_about:'О нас', nav_yacht:'Яхта', nav_dest:'Маршруты',
nav_events:'События', nav_gallery:'Галерея', nav_booking:'Бронировать', nav_cta:'Забронировать день',
hero_eyebrow:'Порто Монтенегро',
hero_h1:'Настоящая Адриатика начинается там,<br>где заканчивается берег.',
hero_sub:'18 метров комфорта для компании до 16 гостей. Индивидуальное путешествие по Боко-Которскому заливу — мимо старинных прибрежных городков, скрытых бухт и величественных гор.',
hero_cta:'Забронировать день',
stat_1_num:'7', stat_1_label:'Лет на Адриатике',
stat_2_num:'2000+', stat_2_label:'Гостей с 2019 года',
stat_3_num:'4.9', stat_3_label:'Оценка гостей',
stat_4_num:'18 м', stat_4_label:'Личной яхты',
about_eyebrow:'Наша история',
about_h2:'7 лет на одном побережье',
about_p1:'Наша яхта Marea вышла в своё первое путешествие из Porto Montenegro в 2019. С тех пор она приняла на борт более 2 000 гостей, а в этом сезоне мы полностью обновили интерьер, сохранив атмосферу спокойного средиземноморского отдыха.',
about_p2:'Мы не сеть и не круизный оператор — мы лично знаем эти воды: каждую скрытую бухту Боки, лучшие места для купания и тот самый момент, когда золотой свет опускается на залив.<br><br>Наш опытный капитан знает как сделать каждую прогулку спокойной, приватной и именно такой, как вы мечтали. Каждый маршрут мы составляем индивидуально за день до выхода — учитывая ваши пожелания, ритм отдыха и погодные условия.<br><br>На борту с комфортом разместятся до 16 гостей для дневного путешествия и 6 гостей для отдыха с ночевкой в каютах.',
about_cta:'Посмотреть яхту',
charters_eyebrow:'Чартеры',
charters_h2:'Выберите свой формат отдыха',
charters_sub:'Один день — чтобы увидеть Боку с моря. Несколько дней — чтобы почувствовать её ритм. Красота прибрежных бухт, вкусная еда под шум волн и захватывающие виды, невероятные закаты над заливом — каждый маршрут создается индивидуально для вас.',
charter_day_label:'Дневной чартер',
charter_day_title:'День на воде',
charter_day_desc:'<a href="blog-boka-bay-route.html">Боко-Которский залив — от Тивата до Котора</a>. Остановки в бухтах для купания и снорклинга, <a href="blog-bbq-anchor.html">обед с гриля на якоре</a>. Для семей, компаний и пар.',
charter_day_meta:'4–12 часов · До 16 гостей',
charter_day_price:'От €2 200 · 4 часа',
charter_week_label:'С ночёвкой',
charter_week_title:'Несколько дней на воде',
charter_week_desc:'Каюты после реновации этого года, утренний кофе на палубе и <a href="blog-secret-anchorages.html">якорь в тихой бухте</a> на <a href="blog-sunset-champagne.html">закате</a>. От 2 до 5 ночей, маршрут гибкий.',
charter_week_meta:'От 2 ночей · Капитан и экипаж 24/7',
charter_week_price:'От €3 000 / сутки',
charter_cta:'Запросить даты',
yacht_h1:'Marea · 18 метров',
yacht_sub:'Одна яхта с 2019 года, полная реновация в 2026. До 16 гостей в дневном чартере, до 6 — с ночёвкой.',
yacht_spec_length:'Длина', yacht_spec_cabins:'Каюты', yacht_spec_guests:'Гостей', yacht_spec_crew:'Экипаж',
yacht_feat_title:'На борту',
yacht_f1_title:'Гриль на корме', yacht_f1_desc:'Свежевыловленный дорадо, тигровые креветки, овощи. <a href="blog-bbq-anchor.html">Готовим на якоре в бухте</a> — пока вы плаваете.',
yacht_f2_title:'Вода', yacht_f2_desc:'SUP-доски, маски для снорклинга, надувные шезлонги и подводный скутер. Всё на борту, ничего доплачивать не нужно.',
yacht_f3_title:'Музыка', yacht_f3_desc:'Bluetooth-колонки на палубе и в каютах. Подключайте свой плейлист — мы не навязываем.',
yacht_f4_title:'Носовая палуба', yacht_f4_desc:'Открытая площадка на носу с матрасами и подушками. Любимое место гостей в золотой час.',
yacht_f5_title:'Один капитан', yacht_f5_desc:'С 2019 года — наш капитан. Знает, что <a href="blog-blue-cave.html">Голубую пещеру нужно ловить в 11–12</a> — иначе нет того света; что <a href="blog-oysters-prawns.html">устриц быстрее брать в Каменари с воды</a> (привезут на лодку), а креветок — у Милоша по пути в Котор. Окна для купания, время для золотого часа, лучшая бухта по погоде дня — без карт.',
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
footer_desc:'Частный яхтенный чартер из Порто Монтенегро. На воде с 2019 года.',
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
blog_art1_quote:'"За 7 лет навигации по этим водам Которский залив до сих пор захватывает дух каждое утро. Нигде больше нет ничего подобного." — Капитан Алексей',
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
blog_art1_s4_desc:'Мы разжигаем <a href="blog-bbq-anchor.html">бортовой гриль</a> для классического адриатического обеда — свежевыловленный дорадо, тигровые креветки, овощи на гриле и местный сыр. При желании можно остановиться в одном из прибрежных ресторанов в Перасте или Столиве, где хозяин подплывает на лодке принять заказ. Обед на воде, окружённый горными стенами высотой 1000 метров — впечатление, которое не надоедает никогда.',
blog_art1_s5_time:'13:30 — Исследование',
blog_art1_s5_title:'Старый город Котор',
blog_art1_s5_desc:'Мы заплываем вглубь внутреннего залива — вода сужается, горы поднимаются ещё выше — и встаём на якорь у средневекового города-крепости Котор. Этот город из списка ЮНЕСКО существует более 2000 лет, с венецианскими дворцами, романскими церквями и лабиринтом мраморных улиц. У вас будет время пройтись по стенам, подняться к крепости ради панорамных видов или просто побродить по атмосферным площадям.',
blog_art1_s6_time:'15:30 — Послеобеденное купание',
blog_art1_s6_title:'Пляж Добреч',
blog_art1_s6_desc:'Покидая Котор, мы направляемся к внешнему заливу и останавливаемся у Добреча — дикого галечного пляжа, доступного только с воды. Вода здесь приобретает яркий изумрудно-зелёный оттенок, где горные источники смешиваются с морем. Идеальное место для неспешного послеобеденного купания и отдыха на солнечной палубе с бокалом шампанского.',
blog_art1_s7_time:'17:00 — Золотой час',
blog_art1_s7_title:'Закатный круиз обратно в Тиват',
blog_art1_s7_desc:'Обратный путь рассчитан на <a href="blog-sunset-champagne.html">золотой час</a>. Когда солнце опускается за горы Орьен, весь залив окрашивается в розовые и золотые тона. Мы наливаем шампанское, тихо играет музыка, и яхта плавно скользит обратно к Порто Монтенегро. Этот последний час — с тёплым светом, спокойной водой и горами, идеально отражёнными в заливе — момент, который запоминает каждый гость.',
blog_art1_tips_title:'Советы капитана',
blog_art1_tip1:'Лучшие месяцы для этого маршрута — июнь и сентябрь: тёплая вода, спокойный ветер и значительно меньше туристических лодок в заливе. Июль и август прекрасны, но на основных остановках многолюдно.',
blog_art1_tip2:'Берите купальники и солнцезащитный крем — вы будете купаться весь день. Мы предоставляем полотенца, снаряжение для снорклинга и SUP-доски. Для прогулки по Старому Котору рекомендуется лёгкая обувь для мощёных улиц.',
blog_art1_tip3:'Этот маршрут идеально подходит для 8-часового чартера (от €2 600), но может быть расширен до 12 часов (€3 000), если хотите более расслабленный темп с дополнительными остановками для купания и закатным ужином на борту.',
blog_art2_meta:'Вечерний маршрут &bull; 5 мин чтения',
blog_art2_title:'Когда море становится золотым: лучшие фотографии в заливе',
blog_art2_excerpt:'Есть короткий момент летним вечером, когда Боко-Которский залив становится почти нереальным. Солнце уходит за горы, вода меняет цвет на тёплое золото, а весь залив будто замедляется на полчаса.',
blog_art2_intro:'Есть короткий момент летним вечером, когда Боко-Которский залив становится почти нереальным. Солнце уходит за горы, вода меняет цвет на тёплое золото, а весь залив будто замедляется на полчаса.<br><br>В это время исчезает дневная жара, море становится спокойнее, а свет — мягче и глубже. Именно ради этого часа многие гости выбирают вечерний выход на воду.',
blog_art2_quote:'«Я прохожу этот залив почти каждый день и всё равно каждый раз перед закатом убираю скорость. В какой-то момент люди перестают разговаривать, откладывают телефоны и просто смотрят на воду. Это всегда происходит одинаково.» — Капитан Алексей',
blog_art2_s1_title:'Почему закат здесь выглядит особенно',
blog_art2_s1_desc:'Главный эффект создают горы вокруг залива.<br><br>Солнце скрывается не за линией моря, а за массивом Орьен на западной стороне Боко-Которского залива. Из-за этого свет отражается от восточных склонов и воды ещё несколько минут после того, как сама солнечная линия исчезает.<br><br>Получается мягкое золотое свечение, которое держится примерно час.<br><br>Летом лучший свет обычно начинается:<br>в июне и июле — около 19:30<br>в августе — ближе к 19:00<br>в сентябре — около 18:30<br><br>В мае и октябре закаты более спокойные и прохладные по цвету — меньше золота, больше мягких теней и розового света.',
blog_art2_s2_title:'Как проходит закатный маршрут',
blog_art2_s2_desc:'День строится спокойно и без спешки: купания в тихих бухтах, остановки на обед, медленный переход вдоль Луштицы или через Боко-Которский залив, а ближе к вечеру — возвращение в сторону Тивата через золотой свет над водой.<br><br>Чаще всего последние остановки делаем у Прчаня, Добреча или на якоре у побережья Луштицы — там, где вечером вода становится почти зеркальной.<br><br>Если хочется совместить Голубую пещеру и закат в один день, маршрут обычно строится в формате полного дня на воде.',
blog_art2_s3_title:'Что подаём на закате',
blog_art2_s3_desc:'Обычно к золотому часу на палубе вас уже могут ждать охлаждённое шампанское, фрукты, устрицы или лёгкие закуски — всё подготавливаем заранее по запросу. Если предпочитаете привезти свои напитки, это тоже полностью комфортно.<br><br>И да, красивые бокалы здесь действительно имеют значение.',
blog_art2_s4_title:'Где получаются лучшие фотографии',
blog_art2_s4_desc:'Лучший свет — на носовой палубе, лицом к закату.<br><br>В это время вода становится золотой, горы уходят в мягкую тень, а фотографии получаются почти кинематографичными даже на телефон.<br><br>Если на борту есть фотограф, большая часть съёмки обычно происходит именно в золотой час.<br><br>Но и без профессиональной камеры всё выглядит красиво — особенно когда яхта идёт медленно и вода остаётся почти зеркальной.',
blog_art2_s5_title:'Что звучит на фоне',
blog_art2_s5_desc:'Музыка всегда остаётся вашей.<br><br>Bluetooth-система подключается к любому плейлисту, и ближе к вечеру гости обычно сами убавляют громкость. Кто-то включает джаз, кто-то Lana Del Rey, кто-то вообще оставляет только звук воды и двигателя на минимальном ходу.<br><br>Перед закатом капитан обычно снижает скорость — не ради маршрута, а ради самого ощущения вечера на воде.',
blog_art2_s6_title:'Что обычно не пишут',
blog_art2_s6_desc:'Иногда идеального заката не бывает.<br><br>Над Луштицей могут появиться облака, ветер может поднять волну, а небо вместо золота станет серебристо-серым. Такое случается.<br><br>Но именно в такие вечера яхта неожиданно становится особенно уютной: тёплый плед, кофе из кофемашины, бокал шампанского в салоне и дождь над заливом вместо открытки с идеальным небом.<br><br>Прогноз мы всегда проверяем заранее. Если видим, что вечер обещает быть совсем неудачным, стараемся предложить другой день или немного изменить время выхода.<br><br>И ещё один момент: лучшие фотографии на закате получаются, когда яхта стоит на якоре или идёт очень медленно. Если хотите спокойные кадры без движения воды — достаточно просто попросить капитана сделать короткую остановку для фото.',
blog_art2_s7_title:'Когда лучше бронировать',
blog_art2_s7_desc:'Лучшее время для золотого света — июнь, июль, август и сентябрь. В мае и октябре атмосфера остаётся красивой, но свет становится менее насыщенным и более прохладным.<br><br>Если планируете особый вечер — предложение, годовщину или семейный праздник — лучше бронировать заранее, особенно в высокий сезон.',
blog_art3_meta:'Еда на борту &bull; 5 мин чтения',
blog_art3_title:'Обед на якоре: BBQ в тихой бухте Боко-Которского залива',
blog_art3_excerpt:'Свежая рыба и морепродукты, приготовленные прямо на борту, солёный воздух, тёплый ветер с Адриатики и тихая бухта вокруг — здесь всё складывается вместе, и даже самый простой обед почему-то запоминается надолго.',
blog_art3_intro:'Есть особый момент в середине дня, когда яхта уже стоит на якоре в тихой бухте, море становится почти неподвижным, а с кормы начинает пахнуть грилем и морем одновременно.<br><br>Свежая рыба и морепродукты, приготовленные прямо на борту, солёный воздух, тёплый ветер с Адриатики и тихая бухта вокруг — здесь всё складывается вместе, и даже самый простой обед почему-то запоминается надолго.',
blog_art3_quote:'«На воде люди едят по-другому. Не быстро между делами, а медленно — с купанием, солнцем и разговорами. Иногда обед длится дольше, чем сам переход на яхте.» — Капитан Алексей',
blog_art3_s1_title:'Что мы обычно готовим',
blog_art3_s1_desc:'Стандартный BBQ на борту для 4–8 гостей обычно включает:<br>свежую дорадо или сибаса<br>тигровые креветки на гриле<br>сезонные овощи<br>запечённый картофель<br><br>Также можем подать местные сыры, pršut, оливки и свежий хлеб из небольшой пекарни в Тивате.<br><br>Для больших компаний обычно добавляем больше рыбы и морепродуктов, а по запросу готовим и вегетарианские варианты — халуми, грибы и овощи на гриле.',
blog_art3_s2_title:'Что подаём к обеду',
blog_art3_s2_desc:'По запросу можем заранее подготовить местные черногорские вина, просекко, шампанское, свежие лимонады, минеральную воду и другие напитки к вашему выходу.<br><br>Чаще всего гости выбирают лёгкие белые вина, которые хорошо подходят к рыбе и морепродуктам, но если у вас есть любимое шампанское, конкретное вино или другие пожелания — просто сообщите об этом при бронировании.<br><br>Все напитки закупаем заранее и охлаждаем перед выходом яхты. Дополнительной наценки за организацию нет — оплачиваются только сами напитки по чеку.',
blog_art3_s3_title:'Откуда продукты',
blog_art3_s3_desc:'Утром закупаем свежую рыбу и морепродукты в Тивате — у тех же поставщиков, с которыми работаем уже много лет.<br><br>Овощи, фрукты, сыр и хлеб — с местных рынков и небольших пекарен.<br><br>Если гости хотят устриц, обычно заказываем их в районе Каменари — их привозят прямо к яхте на маленькой лодке.<br><br>Мы стараемся работать только со свежими продуктами и не использовать замороженные морепродукты там, где можно обойтись местным уловом.',
blog_art3_s4_title:'Кто готовит',
blog_art3_s4_desc:'В большинстве случаев обед готовит стюард прямо на борту — это часть стандартного сервиса.<br><br>Если у вас большая компания или особый повод, можно добавить личного шефа. Тогда меню становится более ресторанным: несколько подач, винное сопровождение и отдельная сервировка.<br><br>Но для большинства гостей обычный BBQ на яхте оказывается именно тем, что нужно — простым, красивым и очень «летним».',
blog_art3_s5_title:'Сколько стоит BBQ на борту',
blog_art3_s5_desc:'Обычно обед на яхте выходит:<br>€40–60 на человека — стандартный BBQ<br>дополнительно за устрицы или премиальные морепродукты<br>личный шеф — по запросу<br><br>Стоимость зависит от меню и количества гостей. Всё согласовываем заранее перед чартером.',
blog_art3_s6_title:'Альтернатива — ресторан у воды',
blog_art3_s6_desc:'Если хочется выйти на берег, можем построить маршрут с остановкой в одном из прибрежных ресторанов:<br>Perast<br>Столив<br>Бигова<br>Рыбарско Село по пути к Голубой пещере<br><br>Но многие гости в итоге выбирают именно обед на якоре — просто потому, что не хочется покидать воду.',
blog_art3_s7_title:'Что обычно не пишут',
blog_art3_s7_desc:'При сильном ветре гриль на корме может быть небезопасным. В такие дни мы заранее предупреждаем гостей и предлагаем альтернативу: холодные закуски, морепродукты, сыры и лёгкое меню без горячего BBQ.<br><br>И ещё один момент — после гриля одежда действительно пахнет дымом и морем. Для кого-то это часть атмосферы, но если вечером у вас ужин в городе, лучше взять запасную рубашку или платье.',
blog_art3_s8_title:'Когда лучше заказывать',
blog_art3_s8_desc:'BBQ на борту лучше согласовывать заранее — при бронировании или хотя бы за день до выхода.<br><br>Обычно накануне мы отправляем варианты свежего улова и вместе собираем меню под ваш маршрут.',
blog_art7_meta:'Семейные чартеры &bull; 6 мин чтения',
blog_art7_title:'С детьми на яхте: что взять с собой и как проходит день на воде',
blog_art7_excerpt:'Многие семьи перед первым чартером задают примерно одни и те же вопросы: «А можно с маленькими детьми?», «А если укачает?», «А если ребёнку станет скучно?».',
blog_art7_intro:'Многие семьи перед первым чартером задают примерно одни и те же вопросы: «А можно с маленькими детьми?», «А если укачает?», «А если ребёнку станет скучно?».<br><br>На практике дети на яхте обычно чувствуют себя гораздо лучше, чем ожидают родители. Здесь постоянно что-то происходит: купания, лодки, горы, вода, новые звуки и возможность всё трогать и исследовать.<br><br>За годы работы у нас были гости самого разного возраста — от малышей, которые спокойно спали в тени на палубе, до подростков, которые не отходили от капитана и просили научить их управлять яхтой.',
blog_art7_quote:'«Родители чаще всего переживают, что ребёнок устанет или начнёт скучать. Но обычно происходит наоборот — дети не хотят возвращаться в марину.» — Капитан Алексей',
blog_art7_s1_title:'Какой маршрут подходит для разного возраста',
blog_art7_s1_desc:'<strong>До 2 лет.</strong> Для самых маленьких лучше выбирать короткие и спокойные маршруты внутри Боко-Которского залива. На яхте есть теневая зона и каюта, где ребёнок может поспать в тишине и прохладе. Обычно для такого возраста комфортнее всего 4-часовой выход в хорошую погоду.<br><br><strong>3–6 лет.</strong> В этом возрасте лучше подходят 4- или 6-часовые чартеры с длительными остановками для купания. Детям быстро становится жарко и они устают от слишком длинного дня на солнце, поэтому спокойный ритм работает лучше всего.<br><br><strong>7–10 лет.</strong> Обычно уже хорошо выдерживают полноценный день на воде. Можно добавлять более длинные маршруты, остановку в Которе и прогулки по старому городу.<br><br><strong>11+ лет.</strong> Подростки чаще всего любят всё, что связано с водой: SUP-доски, подводный скутер, прыжки с яхты и длинные переходы вдоль побережья. Для них подходят практически любые маршруты.',
blog_art7_s2_title:'Что есть на борту для детей',
blog_art7_s2_desc:'На яхте всегда есть:<br>детские спасательные жилеты разных размеров<br>надувные круги и водные игрушки<br>маски для снорклинга<br>SUP-доски<br>подводный скутер<br>полотенца<br>прохладная каюта для отдыха или сна<br><br>Для маленьких детей можем заранее подготовить лёгкие перекусы, соки или простую еду по запросу.',
blog_art7_s3_title:'Что взять с собой',
blog_art7_s3_desc:'Лучше всего взять:<br>солнцезащитный крем SPF 50+<br>панаму или шляпу<br>лёгкую одежду с длинным рукавом<br>сухую сменную одежду после купания<br>любимые снеки ребёнка<br>всё, что помогает чувствовать себя комфортно в дороге<br><br>Даже в тени на воде солнце ощущается сильнее, чем на берегу.',
blog_art7_s4_title:'Как обычно проходит день',
blog_art7_s4_desc:'Если на борту есть дети, маршрут всегда строится более спокойно и гибко.<br><br>Обычно день выглядит так:<br>купание утром, пока солнце мягче<br>остановка на обед в тихой бухте<br>отдых в тени после обеда<br>ещё одна остановка для плавания ближе к вечеру<br><br>Мы стараемся не перегружать день длинными переходами и оставлять больше времени на воду и отдых.',
blog_art7_s5_title:'Если ребёнку станет скучно',
blog_art7_s5_desc:'Такое иногда бывает — особенно во время переходов между остановками.<br><br>Обычно помогают:<br>SUP-доски<br>подводный скутер<br>рыбалка с борта<br>маски для снорклинга<br>наблюдение за лодками и горами<br>или просто возможность полежать в каюте с мультиками и кондиционером<br><br>Стюард всегда спокойно адаптирует день под ритм семьи.',
blog_art7_s6_title:'Если укачивает',
blog_art7_s6_desc:'Внутри Боко-Которского залива вода обычно очень спокойная, поэтому морская болезнь здесь встречается редко.<br><br>Если ребёнка всё же укачивает, лучше заранее предупредить нас — мы подберём маршрут внутри залива без выхода в открытое море.<br><br>Обычно помогают:<br>лёгкий завтрак перед выходом<br>вода<br>свежий воздух<br>и остановки для купания вместо длинных переходов',
blog_art7_s7_title:'Что обычно не пишут',
blog_art7_s7_desc:'С детьми чартер всегда получается более живым и шумным — и это нормально.<br><br>Если вы путешествуете большой компанией, где часть гостей без детей, лучше заранее понимать, что день будет менее «тихим закатом с шампанским» и больше про движение, смех и постоянную активность.<br><br>И ещё один важный момент: если ребёнок устал или день пошёл не по плану, мы спокойно меняем маршрут или возвращаемся раньше. На воде гибкость важнее строгого расписания.',
blog_art7_s8_title:'Когда лучше бронировать',
blog_art7_s8_desc:'При бронировании лучше сразу указать возраст детей — так мы сможем подобрать правильный маршрут, подготовить жилеты и заранее продумать комфортный ритм дня.<br><br>Если есть особенности по еде, аллергии или любимые напитки/снеки ребёнка — тоже лучше сообщить заранее.<br><br>Июль и август бронируются быстрее всего, поэтому если у вас намечается семейное торжество — советуем поторопиться с бронированием.',
blog_art8_meta:'Когда ехать &bull; 6 мин чтения',
blog_art8_title:'Июнь или сентябрь: какой месяц лучше для чартера в Черногории',
blog_art8_excerpt:'Все говорят, что июнь и сентябрь — лучшее время для отдыха в Черногории. И это правда. Но эти два месяца ощущаются совершенно по-разному: другая температура воды, другой свет, ветер, атмосфера в бухтах и даже запах воздуха.',
blog_art8_intro:'Все говорят, что июнь и сентябрь — лучшее время для отдыха в Черногории. И это правда. Но эти два месяца ощущаются совершенно по-разному: другая температура воды, другой свет, ветер, атмосфера в бухтах и даже запах воздуха.<br><br>Если выбираете между июнем и сентябрём — этот текст для вас. А если ещё думаете про июль или август, ниже тоже есть несколько важных моментов.',
blog_art8_quote:'«За пятнадцать сезонов я так и не выбрал любимый месяц. В июне залив пахнет цветами с гор, а в сентябре свет становится мягче и ниже. Это просто два разных лета.» — Капитан Алексей',
blog_art8_s1_title:'Температура воды',
blog_art8_s1_desc:'<strong>Июнь:</strong> 22°C в начале месяца и около 24°C к концу. Купаться комфортно весь месяц, хотя в первой половине вода ещё немного освежает.<br><br><strong>Сентябрь:</strong> около 24°C в начале месяца и примерно 22°C к концу. Почти зеркальное отражение июня. Море остаётся тёплым почти до конца сентября.<br><br>В июле и августе вода прогревается до 26–27°C — почти как тёплый бассейн, особенно комфортно для детей.',
blog_art8_s2_title:'Температура воздуха',
blog_art8_s2_desc:'<strong>Июнь:</strong> 25–28°C днём и около 17–19°C вечером. Если выходите на яхте рано утром, может пригодиться лёгкая куртка — на воде ещё свежо.<br><br><strong>Сентябрь:</strong> 26–29°C днём и 18–20°C вечером. Чуть теплее июня. Первая половина месяца ощущается как полноценное лето, а во второй уже появляется осенняя атмосфера.<br><br>Июль и август — самые жаркие месяцы сезона: 30–34°C днём. В середине дня хочется либо в воду, либо в тень.',
blog_art8_s3_title:'Сколько людей вокруг',
blog_art8_s3_desc:'<strong>Июнь:</strong> туристов уже много, но Котор ещё не переполнен. В Перасте можно спокойно найти столик у воды без брони. У Голубой пещеры обычно всего несколько лодок одновременно.<br><br><strong>Сентябрь:</strong> похож на июнь, но после 20-х чисел побережье становится заметно тише. Вечерами особенно спокойно.<br><br><strong>Июль и август</strong> — пик сезона. У Голубой пещеры иногда образуются очереди из лодок, Котор становится очень оживлённым, а лучшие рестораны работают с полной посадкой.',
blog_art8_s4_title:'Цены',
blog_art8_s4_desc:'<strong>Июнь:</strong> стандартные сезонные цены. 8-часовой чартер — от €2,600.<br><br><strong>Сентябрь:</strong> до середины месяца цены обычно остаются летними, а во второй половине могут появляться более гибкие условия и скидки.<br><br><strong>Май и октябрь:</strong> обычно на 10–15% дешевле. Бухты почти пустые, атмосфера очень спокойная, но море уже прохладнее для долгих купаний.<br><br><strong>Июль и август:</strong> цены обычно выше на 10–15%, особенно в период с 15 июля по 15 августа. Лучшие даты часто бронируют за месяц вперёд.<br><br>Если важен бюджет — октябрь даёт одно из лучших соотношений цены и впечатлений. Если важен максимальный комфорт — лучше выбирать вторую половину июня или первую половину сентября.',
blog_art8_s5_title:'Ветер',
blog_art8_s5_desc:'Боко-Которский залив защищён горами, поэтому море здесь обычно спокойное большую часть сезона.<br><br><strong>Июнь</strong> — один из самых стабильных месяцев. Ветер появляется редко и обычно ненадолго.<br><br><strong>Сентябрь:</strong> погода всё ещё прекрасная, но ближе к концу месяца ветер и перемены погоды случаются чуть чаще. Иногда приходит холодный северо-восточный ветер Bura, который держится 2–3 дня.<br><br>Если для вас важно максимально стабильное море — июнь обычно надёжнее.',
blog_art8_s6_title:'Свет и закаты',
blog_art8_s6_desc:'<strong>Июнь:</strong> солнце садится около 20:30. Очень длинные вечера и красивый золотой свет примерно с 19:00 до 20:00.<br><br><strong>Сентябрь:</strong> закат становится раньше — около 18:30 в начале месяца и ближе к 17:45 к концу. Но сам свет выглядит глубже и более золотым, потому что солнце находится ниже.<br><br>Оба месяца идеально подходят для вечерних маршрутов и закатов на воде.',
blog_art8_s7_title:'Что цветёт и как пахнет воздух',
blog_art8_s7_desc:'<strong>Июнь:</strong> горы покрыты дикими травами, а воздух пахнет лавандой и тимьяном. Особенно это чувствуется утром на воде возле Мориня. В Перасте начинают цвести гранатовые деревья.<br><br><strong>Сентябрь:</strong> сезон инжира и винограда. На рынках Тивата появляются сладкие фрукты, а воздух пахнет уже не цветами, а тёплой землёй и поздним летом.<br><br>Это небольшая деталь, но июнь ощущается как поздняя весна, а сентябрь — как начало средиземноморской осени.',
blog_art8_s8_title:'Что происходит в плохую погоду',
blog_art8_s8_desc:'Такое бывает редко, но иногда случается.<br><br>В июне, если приходит шторм, мы обычно просто переключаемся на более короткий маршрут внутри залива. Чаще всего плохая погода проходит за один день.<br><br>В сентябре ветер Bura может держаться 2–3 дня. Если ваш чартер попадает на сильный ветер, мы обычно предлагаем перенести выход на следующий доступный день.<br><br>В июле и августе погода в целом очень стабильная, хотя иногда случаются вечерние грозы. Если условия небезопасны — мы не выходим в море.',
blog_art8_s9_title:'Что обычно не пишут',
blog_art8_s9_desc:'В июне залив действительно пахнет цветами с гор. Это не преувеличение — аромат лаванды и тимьяна утром доходит прямо до воды.<br><br>В сентябре появляется редкое сочетание: тёплое море днём и прохладные свежие утра, когда уже хочется горячего чая на палубе.<br><br>И ещё один момент: сентябрь очень сильно меняется между первой и второй половиной месяца. Начало сентября — это полноценное лето. Конец месяца уже ощущается почти осенним, даже несмотря на тёплую воду.',
blog_art8_s10_title:'Если выбирать конкретные даты',
blog_art8_s10_desc:'<strong>5–25 июня</strong> — один из самых комфортных периодов сезона: тёплая вода, цветущие горы и ещё не слишком много людей.<br><br><strong>5–15 сентября</strong> — идеально для тех, кто хочет более тёплое море и спокойные бухты.<br><br><strong>Конец мая и конец сентября</strong> — лучшие цены и почти пустое побережье, хотя вода уже прохладнее для долгих купаний.<br><br>Если ваша главная цель — тишина и спокойствие, середину июля и августа обычно лучше избегать.',
blog_art9_meta:'Гастро-гид &bull; 6 мин чтения',
blog_art9_title:'Из моря прямо на стол: лучшие морепродукты Боко-Которского залива',
blog_art9_excerpt:'В Боко-Которском заливе морепродукты часто попадают на стол буквально напрямую из моря. Без ресторанных витрин, без длинной логистики и без ожидания.',
blog_art9_intro:'В Боко-Которском заливе морепродукты часто попадают на стол буквально напрямую из моря. Без ресторанных витрин, без длинной логистики и без ожидания.<br><br>Устрицы здесь можно заказать прямо на яхту во время маршрута — небольшая лодка подойдёт к борту через двадцать минут после звонка. Креветки и свежую рыбу забирают утром у местных рыбаков, а через час они уже готовятся на гриле в тихой бухте.<br><br>Именно поэтому вкус здесь ощущается совсем иначе.',
blog_art9_quote:'«Морепродукты всегда вкуснее, когда между морем и тарелкой проходит не день, а один час.» — Капитан Алексей',
blog_art9_s1_title:'Устрицы из Каменари',
blog_art9_s1_desc:'В районе Каменари уже много лет работают небольшие семейные устричные фермы.<br><br>Здесь выращивают европейскую плоскую устрицу — более минеральную и насыщенную по вкусу, чем привычные магазинные варианты. У неё более морской и солоноватый вкус, который особенно хорошо раскрывается с холодным белым вином.<br><br>Во время чартера мы можем заранее связаться с фермой, и небольшая лодка доставит устрицы прямо к яхте.',
blog_art9_s2_title:'Как мы подаём',
blog_art9_s2_desc:'Обычно подаём их:<br>на льду<br>с лимоном<br>иногда с несколькими каплями tabasco<br>и охлаждённым белым вином<br><br>Без сложной подачи и лишних соусов — здесь всё остаётся очень простым.',
blog_art9_s3_title:'Креветки и свежий улов',
blog_art9_s3_desc:'По пути через залив мы иногда останавливаемся у местных рыбаков за свежими креветками, лангустинами или утренним уловом.<br><br>Чаще всего это:<br>тигровые креветки<br>дорадо<br>сибас<br>мидии<br>или улов дня от местных рыбаков<br><br>Большая часть продуктов готовится прямо на борту — обычно на гриле во время остановки в спокойной бухте.<br><br>Именно этот момент многие потом запоминают лучше всего: море вокруг, тёплый ветер, бокал холодного вина и морепродукты, которые ещё утром были в воде.',
blog_art9_s4_title:'Что ещё стоит попробовать',
blog_art9_s4_desc:'Помимо устриц, гости часто заказывают:<br>мидии в белом вине<br>рыбу на гриле<br>тарелку с местным сыром и пршутом<br>сезонные фрукты<br><br>Меню обычно собирается очень гибко — под маршрут, сезон и настроение дня.',
blog_art9_s5_title:'Устрицы на закате',
blog_art9_s5_desc:'Один из самых красивых вариантов — остановка на закате у Perast или у побережья Луштицы с устрицами, вином и спокойной водой вокруг.<br><br>К этому времени залив становится тише, вода — почти зеркальной, а сама атмосфера ощущается скорее как частный ужин на воде, чем обычный чартер.',
blog_art9_s6_title:'Что обычно не пишут',
blog_art9_s6_desc:'В июле и августе лучшие морепродукты иногда заканчиваются ещё утром — особенно устрицы и крупные креветки. Рестораны и яхты бронируют их заранее.<br><br>Поэтому если хотите именно устрицы или конкретные морепродукты во время чартера, лучше сообщить об этом заранее при бронировании.<br><br>И ещё один момент: местные плоские устрицы отличаются по вкусу от более привычных сладких японских или французских сортов. Они более солёные, минеральные и «морские».',
blog_art9_s7_title:'Как добавить к чартеру',
blog_art9_s7_desc:'Если хотите включить устрицы, креветки или BBQ из морепродуктов в маршрут, достаточно просто сообщить нам об этом заранее.<br><br>Мы свяжемся с фермами и рыбаками утром перед выходом, подготовим продукты и встроим всё в маршрут без отдельной организации со стороны гостей.',
blog_art10_meta:'История места &bull; 7 мин чтения',
blog_art10_title:'Доки подводных лодок и крепость Мамула: история на пути к Голубой пещере',
blog_art10_excerpt:'На выходе из Боко-Которского залива в сторону открытого моря есть два места, мимо которых большинство яхт проходит слишком быстро.',
blog_art10_intro:'На выходе из Боко-Которского залива в сторону открытого моря есть два места, мимо которых большинство яхт проходит слишком быстро.<br><br>Первое — заброшенные тоннели подводных лодок, вырезанные прямо в скалах полуострова Луштица. Второе — крепость Мамула, стоящая на маленьком острове у входа в залив.<br><br>Сегодня это часть маршрута к Голубой пещере. Но ещё несколько десятилетий назад здесь находились военные базы, укрепления и закрытые территории, о которых знали только местные и военные.',
blog_art10_quote:'«Боко-Которский залив долгое время был не курортом, а стратегической военной точкой. И когда проходишь мимо этих мест с воды, залив начинает ощущаться совсем по-другому.» — Капитан Алексей',
blog_art10_s1_title:'Доки подводных лодок на Луштице',
blog_art10_s1_desc:'На южной стороне полуострова Луштица до сих пор сохранились старые тоннели бывшей военно-морской базы Югославии.<br><br>Их строили в 1960-х годах для подводного флота Югославии. Тоннели вырезали прямо внутри скал — так, чтобы субмарины могли полностью скрываться внутри горы.<br><br>С воды это выглядит почти нереально: огромные тёмные арки в камне, ведущие глубоко внутрь скалы.<br><br>Во время маршрута к Голубой пещере мы обычно проходим вдоль берега на небольшой скорости, чтобы можно было рассмотреть входы в тоннели и сделать фотографии.<br><br>Это не музей и не туристический объект с экскурсиями. Без контекста это просто бетон и скалы. Но когда понимаешь, зачем всё это строилось и как использовалось, место начинает ощущаться совсем иначе.',
blog_art10_s2_title:'Крепость Мамула',
blog_art10_s2_desc:'Мамула находится на небольшом острове у входа в Боко-Которский залив.<br><br>Крепость была построена австро-венграми в XIX веке для защиты входа в залив. Позже, во время Второй мировой войны, остров использовали как тюрьму и концлагерь.<br><br>После войны объект долгое время оставался закрытым и заброшенным.<br><br>Сегодня внутри расположен люкс-отель, а сама крепость полностью реконструирована. С воды по-прежнему хорошо видны старые каменные стены, бастионы и форма исторической крепости, вокруг которой теперь стоят яхты и лодки для трансфера гостей отеля.<br><br>Именно этот контраст обычно производит самое сильное впечатление — старые военные стены посреди абсолютно спокойного и красивого моря.',
blog_art10_s3_title:'Почему это интересно именно с воды',
blog_art10_s3_desc:'С берега эти места почти не ощущаются.<br><br>Доки подводных лодок скрыты в скалах, а Мамула лучше всего выглядит именно со стороны моря — так, как её когда-то видели военные корабли, заходящие в залив.<br><br>Поэтому во время яхтенного маршрута история здесь воспринимается гораздо сильнее, чем на обычной экскурсии по суше.',
blog_art10_s4_title:'Как это выглядит в маршруте',
blog_art10_s4_desc:'Обычно маршрут к Голубой пещере выглядит так:<br>выход из Тивата утром<br>проход вдоль Луштицы и старых тоннелей<br>короткий круг вокруг Мамулы<br>затем Голубая пещера<br>остановка на обед или купание<br>и возвращение через залив<br><br>Исторические остановки обычно не занимают много времени, но сильно меняют ощущение самого маршрута.',
blog_art10_s5_title:'Что обычно не пишут',
blog_art10_s5_desc:'Местные жители до сих пор относятся к Мамуле неоднозначно.<br><br>Для кого-то это красивый восстановленный объект, для кого-то — место со слишком тяжёлой историей для люкс-отеля. Поэтому здесь редко говорят только про «красивую крепость» — у этого места есть и другая сторона.<br><br>И ещё один момент: не всем гостям интересна история. Кто-то приезжает только ради моря и купаний — и это тоже нормально. В таком случае мы просто проходим эти места без длинных остановок.',
blog_art10_s6_title:'Когда лучше проходить мимо Мамулы',
blog_art10_s6_desc:'Лучший свет для фотографий обычно:<br>утром — около 9:30–10:30<br>или вечером ближе к закату<br><br>В это время старые стены крепости становятся особенно красивыми на фоне золотого света и спокойной воды.',
blog_read_also:'Читайте также',
blog_art4_meta:'Гид по маршруту &bull; 7 мин чтения',
blog_art4_title:'Голубая пещера в Черногории: почему важно попасть сюда именно в 11–12',
blog_art4_excerpt:'Голубая пещера светится всего несколько часов в день — примерно с 11:00 до 13:00. После этого магия исчезает, и пещера становится просто красивым морским гротом.',
blog_art4_intro:'Голубая пещера светится всего несколько часов в день — примерно с 11:00 до 13:00. После этого магия исчезает: вода теряет насыщенный цвет, и пещера становится просто красивым морским гротом.<br><br>Большинство туристических катеров приходят сюда ближе к трём часам дня. На фотографиях вода выглядит тускло-голубой, и многие думают, что яркие снимки — результат фильтров. На самом деле всё проще: они приезжают слишком поздно.<br><br>Секрет свечения — не в обработке фото, а в физике света. Солнце под определённым углом проходит через подводный вход, отражается от светлого дна и подсвечивает воду изнутри. Это природное «окно света» длится всего полтора-два часа в сутки.<br><br>Если попасть вовремя — вода становится почти неоново-голубой. Если нет — вы увидите красивую, но обычную морскую пещеру.',
blog_art4_quote:'«Я хожу сюда уже восемь лет. И до сих пор не могу предсказать, в какой день свет будет особенно ярким — многое зависит от облаков, прилива и, кажется, даже от настроения моря. Но одно остаётся неизменным: лучшее время — между 11 и 13 часами.» — Капитан Алексей',
blog_art4_s1_title:'Что такое Голубая пещера',
blog_art4_s1_desc:'На местном языке — Plava Špilja. Это природный грот на полуострове Луштица, у выхода из Боко-Которского залива. Добраться сюда можно только по воде.<br><br>Снаружи вход кажется небольшим, но внутри пещера раскрывается в просторный каменный зал. Под водой находится естественный тоннель, через который и проходит солнечный свет.<br><br>Глубина внутри — около трёх-четырёх метров. Когда яхта останавливается и мотор стихает, слышно только эхо воды о камень.',
blog_art4_s2_title:'Почему именно 11–12',
blog_art4_s2_desc:'Чтобы появился эффект свечения, солнце должно находиться достаточно высоко. Только тогда луч проходит через подводный вход и освещает пещеру изнутри.<br><br>Технически эффект можно увидеть примерно с 10:45 до 13:15, но самый яркий цвет появляется ближе к полудню.<br><br>Летом окно немного шире. В мае и октябре — короче, поэтому время особенно важно. С ноября по апрель яркого свечения почти нет.',
blog_art4_s3_title:'Как проходит маршрут',
blog_art4_s3_desc:'От Porto Montenegro до Голубой пещеры — около двух часов спокойного хода. Обычно мы выходим около 9:00, чтобы подойти к пещере в идеальное время.<br><br>По пути проходим несколько мест, которые невозможно увидеть с берега.<br><br>Подводные тоннели Югославии — бывшая военная база, вырезанная прямо в скалах Луштицы. Сегодня тоннели открыты для прохода с моря, и мы обычно замедляем ход, чтобы гости могли рассмотреть их и сделать фотографии.<br><br>Остров Мамула — крепость XIX века у входа в залив. Сейчас на острове расположен отель и музейный комплекс. Обычно мы делаем фото-стоп с воды, но при желании можно высадиться на остров.<br><br>В Голубой пещере проводим около 30–40 минут: купаемся, фотографируем, отдыхаем на воде.',
blog_art4_s4_title:'Где остановиться на обед',
blog_art4_s4_desc:'Обычно выбираем один из двух вариантов неподалёку от пещеры.<br><br><strong>Рыбарско Село</strong> — небольшой ресторан у воды с атмосферой старой рыбацкой деревни. Здесь готовят свежий улов дня — без сложного меню и лишнего формализма. Часто подают дорадо, бранцина, кальмаров и местные морепродукты.<br><br><strong>Форт Роса</strong> — более камерный и ресторанный формат, внутри исторической австро-венгерской крепости с видом на пролив. Подходит для неспешного обеда и красивой остановки на маршруте.<br><br>Если хочется остаться на яхте, можем заранее подготовить обед на борту — с грилем и подачей прямо на кормовой палубе.',
blog_art4_s5_title:'После обеда',
blog_art4_s5_desc:'Обратный маршрут обычно проходит через Боко-Которский залив с остановкой для купания в открытом море.<br><br>В августе температура воды держится около 25°C, в сентябре — около 22°C. Даже в октябре в солнечные дни море остаётся комфортным для купания.',
blog_art4_s6_title:'Что взять с собой',
blog_art4_s6_desc:'Купальник<br>Телефон или GoPro в водонепроницаемом чехле<br>Лёгкую одежду для ресторана<br>Солнцезащитный крем<br><br>Ласты не нужны — внутри пещеры неглубоко.',
blog_art4_s7_title:'Что важно знать заранее',
blog_art4_s7_desc:'В июле и августе у входа в пещеру часто собираются лодки-такси и экскурсионные катера. Иногда приходится немного подождать своей очереди на вход.<br><br>Если в день чартера восточный ветер превышает 15 узлов, заход в пещеру может быть небезопасным. В этом случае мы заранее предлагаем альтернативный маршрут по Боко-Которскому заливу. Это не «запасной вариант», а просто другой красивый день на воде.<br><br>Иногда свет внутри пещеры бывает мягче обычного — из-за облаков или состояния моря. Такое случается. Но атмосфера места от этого не исчезает.',
blog_art4_s8_title:'Когда бронировать',
blog_art4_s8_desc:'В высокий сезон даты на маршрут к Голубой пещере обычно бронируют за несколько недель вперёд. Июль и август — особенно заранее.<br><br>Маршрут доступен как:<br>8-часовой чартер — €2,600<br>12-часовой чартер с закатом и вечерним купанием — €3,000',
blog_art5_meta:'Прозрачные цены &bull; 6 мин чтения',
blog_art5_title:'4 часа на яхте в Тивате за €2 200: что входит, что нет и стоит ли',
blog_art5_excerpt:'4-часовой чартер — самый короткий формат, который мы предлагаем, и для многих гостей он оказывается самым удобным. Стоимость — €2 200 за яхту для компании до 16 гостей.',
blog_art5_intro:'4-часовой чартер — самый короткий формат, который мы предлагаем, и для многих гостей он оказывается самым удобным. Такой выход подходит, если у вас немного времени в Montenegro, вы путешествуете с маленькими детьми или просто хотите сначала понять, насколько вам близок отдых на яхте, прежде чем бронировать целый день на воде.<br><br>За несколько часов успеваете выйти из Porto Montenegro, дойти до одной из красивых точек Боко-Которского залива, искупаться, пообедать на борту и спокойно вернуться обратно без ощущения спешки.<br><br>Стоимость чартера — €2 200 за яхту для компании до 16 гостей. Для большой компании это часто сопоставимо с хорошим ужином у воды, только вместо ресторана — несколько часов в море.',
blog_art5_quote:'«Четыре часа — это полноценный выход на воду. Не спешная экскурсия, а время, чтобы спокойно дойти до красивой точки, искупаться и почувствовать залив. Если хочется больше одного места — лучше брать шесть часов.» — Капитан Алексей',
blog_art5_s1_title:'Маршрут на 4 часа',
blog_art5_s1_desc:'Выходим из Porto Montenegro и идём вглубь Боко-Которского залива — мимо паромов в Каменари и горных склонов, которые поднимаются прямо из воды.<br><br>Обычно делаем одну основную остановку для купания и отдыха.<br><br>Чаще всего это остров Богородицы на Рифе — Госпа од Шкрпела, рукотворный остров с небольшой барочной церковью. Его создают камень за камнем с XV века. Вода здесь очень прозрачная — дно видно на глубине до десяти метров.<br><br>В зависимости от погоды или настроения маршрута можем пойти в Моринь — тихую бухту у подножия гор с прохладной водой из подземных источников и почти полным ощущением уединения.<br><br>Ещё один вариант — Пераст: пришвартоваться на час, пройтись по набережной и выпить кофе у воды.<br><br>Обычно проводим на стоянке около полутора часов, после чего возвращаемся в Тиват.<br><br>До Котора в рамках 4-часового чартера мы не идём — для этого маршрута комфортнее закладывать минимум шесть часов, чтобы не превращать день в спешку.',
blog_art5_s2_title:'Что входит в €2 200',
blog_art5_s2_desc:'Яхта Marea (18 м) с капитаном и стюардом<br>Топливо в рамках 4-часового маршрута<br>Welcome drink при встрече — просекко или безалкогольный коктейль<br>Оборудование для отдыха на воде: SUP-доски, маски для снорклинга, надувные лежаки, подводный скутер<br>Страховка для всех гостей<br>Bluetooth-аудиосистема — можно подключить свой плейлист<br>Полотенца, лёд, вода и свежие фрукты на борту<br><br>Дополнительных портовых сборов нет — выход из домашней марины включён в стоимость.',
blog_art5_s3_title:'Что не входит',
blog_art5_s3_desc:'<strong>Еда.</strong> Закуски или полноценный обед организуются по запросу и оплачиваются отдельно. Есть два основных варианта:<br><br><strong>1. Гриль на борту.</strong> Мы заранее закупаем продукты и готовим прямо на яхте. Обычно это дорадо, тигровые креветки, овощи, местные сыры и лёгкие закуски. В среднем — €40–60 на человека. Хороший вариант, если хочется остаться на якоре и не сходить на берег.<br><br><strong>2. Морепродукты с доставкой к яхте.</strong> В районе Каменари можно заказать свежих устриц прямо на воду. У Пераста и Прчаня рестораны иногда доставляют морепродукты прямо к борту.<br><br><strong>Алкоголь сверх welcome drink.</strong> Бокал при встрече входит в стоимость. Остальное можно привезти с собой или заказать заранее.<br><br><strong>Дополнительные услуги.</strong> Личный шеф, фотограф, праздничный декор, DJ или продление чартера добавляются отдельно при бронировании.',
blog_art5_s4_title:'Кому подходит 4-часовой чартер',
blog_art5_s4_desc:'<strong>Семьям с маленькими детьми.</strong> Для детей младше восьми лет четыре часа обычно идеальны — хватает времени искупаться, пообедать и не устать от солнца и дороги.<br><br><strong>Гостям, которые проездом в Черногории.</strong> Если вы прилетаете утром в Тиват и вечером уезжаете дальше — это хороший способ провести несколько часов на воде без ощущения спешки.<br><br><strong>Тем, кто впервые арендует яхту.</strong> Если вы не уверены, хотите ли проводить целый день на яхте, 4 часа — комфортный формат для первого опыта.',
blog_art5_s5_title:'Когда лучше брать 6 или 8 часов',
blog_art5_s5_desc:'Если хотите дойти до Котора, лучше закладывать минимум шесть часов. Дорога туда и обратно занимает время, а сам город хочется увидеть спокойно.<br><br>Если хотите попасть в Голубую пещеру, это уже отдельный маршрут на 8 часов (€2 600). Лучшее время для пещеры — с 11 до 13, и короткий чартер под этот маршрут не подходит.<br><br>Если хочется увидеть закат на воде, лучше выбирать 8 или 12 часов. Летом золотой час начинается около 19:30–20:30, а 4-часовые чартеры обычно возвращаются в марину раньше.',
blog_art5_s6_title:'Что обычно не пишут',
blog_art5_s6_desc:'Четыре часа — это минимальный формат, при котором день действительно ощущается как отдых на яхте, а не просто короткая прогулка по воде.<br><br>Если выбираете между 4 и 6 часами, мы чаще советуем 6. Разница в цене небольшая, но сам день становится гораздо спокойнее и насыщеннее.<br><br>И ещё один момент: welcome drink — это именно приветственный бокал, а не безлимитный бар. Если хотите шампанское, коктейли или вино на протяжении всего маршрута, лучше сообщить об этом заранее — мы подготовим всё к вашему выходу.',
blog_art5_s7_title:'Когда бронировать',
blog_art5_s7_desc:'В сезон 4-часовые слоты иногда доступны даже за несколько дней до выхода — короткие чартеры бронируют чуть позже. Но в июле и августе лучше писать минимум за неделю.',
blog_art6_meta:'Места от капитана &bull; 8 мин чтения',
blog_art6_title:'5 якорных стоянок у побережья Черногории, куда не доходят туристические катера',
blog_art6_excerpt:'За годы работы у нас появились несколько любимых стоянок, куда редко заходят туристические катера — тишина, скрытые пляжи и ощущение, что море на несколько часов принадлежит только вам.',
blog_art6_intro:'Kotor, Budva, Sveti Stefan — эти места есть в каждом путеводителе и почти в каждом групповом морском туре. К полудню здесь уже десятки лодок, шумные остановки и очереди на фото.<br><br>Но побережье Montenegro устроено иначе: стоит уйти чуть дальше популярных маршрутов — и появляются бухты, где по-прежнему слышно только воду и ветер.<br><br>За годы работы у нас появились несколько любимых стоянок, куда редко заходят туристические катера. Не потому что это секретные места — просто они не подходят для больших групп и коротких экскурсий. Здесь нет громкой музыки, пляжных клубов и «обязательных фото-точек». Зато есть ощущение, что море на несколько часов принадлежит только вам.',
blog_art6_quote:'«Самые красивые стоянки — обычно не те, о которых пишут в путеводителях. Это места, где ничего не происходит: одна яхта на якоре, прозрачная вода и тишина. Большинство туристических лодок туда просто не идёт — слишком спокойно.» — Капитан Алексей',
blog_art6_s1_title:'1. Плави Горизонт',
blog_art6_s1_desc:'На юге полуострова Луштица, западнее Голубой пещеры. Это большая открытая бухта с видом прямо в Адриатику.<br><br>Вода здесь глубокая уже у входа в бухту — можно встать на якорь, прыгнуть с борта и плавать в абсолютно прозрачной воде. Светлое песчаное дно делает море особенно ярким в солнечные дни.<br><br>На берегу почти ничего нет: ни ресторанов, ни музыки, ни водных аттракционов. Иногда рядом стоят несколько парусных яхт, но даже в августе место остаётся удивительно спокойным.<br><br>Обычно мы заходим сюда на обратном пути после Голубой пещеры — Плави Горизонт идеально подходит для второй половины дня.',
blog_art6_s2_title:'2. Жанице',
blog_art6_s2_desc:'Бухта рядом с Голубой пещерой, которую большинство туристических лодок просто пропускает.<br><br>Катера обычно подходят к самой пещере на короткую остановку и сразу уходят дальше. Жанице остаётся в стороне — с каменистым пляжем, прозрачной водой и высокими скалами вокруг.<br><br>Здесь нет большой набережной или шумных ресторанов. Только маленький кафе-бар у воды, который иногда даже закрыт вне сезона.<br><br>Это одно из лучших мест для спокойного купания после посещения пещеры.<br><br>В сентябре здесь может стоять всего две-три яхты. В октябре — почти полная тишина.',
blog_art6_s3_title:'3. Скрытый пляж за Свети-Стефаном',
blog_art6_s3_desc:'Небольшой галечный пляж к югу от Sveti Stefan, спрятанный за скалистым мысом.<br><br>С суши сюда ведёт только узкая тропа по камням, поэтому большинство людей о нём даже не знает. С воды видно лишь небольшую лестницу, уходящую вверх к частной вилле.<br><br>Мы становимся на якорь неподалёку от берега, спускаем скутер или SUP-доски и добираемся до пляжа по воде.<br><br>На дроне это место выглядит довольно скромно. Но главное здесь — не эффектная картинка, а редкое ощущение уединения даже в середине лета.',
blog_art6_s4_title:'4. Бигова',
blog_art6_s4_desc:'Небольшая рыбацкая деревня на полуострове Луштица с маленькой мариной и одним из самых атмосферных рыбных ресторанов на побережье.<br><br>Здесь всё очень просто: несколько столов у воды, свежий улов дня и никаких попыток сделать из места «luxury destination».<br><br>Мы становимся на якорь в бухте и подходим к берегу на тендере. Дальше всё зависит от того, что рыбаки привезли утром: дорадо, осьминог, кальмары или местная рыба, которую редко встретишь в ресторанах Котора.<br><br>Бигова — это остановка ради неспешного обеда и нескольких часов без суеты. Обычно сюда хорошо вписывается маршрут на 8 часов.',
blog_art6_s5_title:'5. Безымянная стоянка с видом на Luštica Bay',
blog_art6_s5_desc:'У этой бухты нет официального названия. Она находится на западной стороне Луштицы, по пути обратно в Тиват.<br><br>Главное здесь — контраст. Яхта стоит на якоре в тихой природной бухте, а напротив открывается вид на Luštica Bay — современную марину с белыми яхтами, отелями и идеально ровной набережной.<br><br>Вода здесь глубокая и очень спокойная. Дети обычно плавают в кругах рядом с яхтой, взрослые — ныряют прямо с борта.<br><br>Это хорошее место для последней остановки перед возвращением в марину.',
blog_art6_s6_title:'Что ещё стоит знать',
blog_art6_s6_desc:'Помимо этих мест, иногда мы добавляем в маршрут ещё несколько тихих точек — в зависимости от сезона, погоды и настроения дня.<br><br>Например:<br>бухты у Дурашевичей для ужина на закате<br>тихие остановки возле Розе<br>или почти пустой Perast ранним утром вне сезона<br><br>В мае и октябре побережье вообще ощущается иначе — многие популярные места становятся почти пустыми.',
blog_art6_s7_title:'Что обычно не пишут',
blog_art6_s7_desc:'Не каждая стоянка подходит при любой погоде.<br><br>Например, Плави Горизонт становится некомфортной при сильном западном ветре — бухта слишком открыта. В такие дни мы меняем маршрут заранее.<br><br>И даже самые тихие места в июле и августе становятся чуть оживлённее. Если хочется по-настоящему спокойного дня на воде, лучшее время — июнь или сентябрь.<br><br>Ещё один момент: Бигова остаётся обычной рыбацкой деревней, а не туристическим проектом. В разгар сезона свободных столов может не быть, поэтому мы обычно бронируем всё заранее прямо с яхты.',
blog_art6_s8_title:'Как добавить эти места в маршрут',
blog_art6_s8_desc:'Большинство этих стоянок входит в наш 8-часовой маршрут «Уединённый». Обычно за день комфортно успеть 2–3 точки с купанием, обедом и остановками без спешки.<br><br>Часть локаций также можно добавить к более коротким маршрутам — например, заменить пляжный клуб на тихую бухту и провести день полностью без толпы и громкой музыки.',
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
crew_sub:'Один капитан с 2019 года, помощник и стюард. Маленькая команда — каждый знает гостей по имени к концу дня.',
crew_captain_role:'Капитан',
crew_captain_name:'Капитан Алексей',
crew_captain_bio:'С 2019 года Алексей принимает по одному чартеру в день на этой яхте. Знает <a href="blog-boka-bay-route.html">Боко-Которский залив</a> без карт: где брать <a href="blog-oysters-prawns.html">устрицы в Каменари</a> (заказ с воды — привезут на лодку), почему <a href="blog-blue-cave.html">Голубую пещеру надо ловить в 11–12</a>, в какой бухте лучше встать на <a href="blog-sunset-champagne.html">закат</a> при северо-западном ветре. Yacht Master Offshore, 50 000+ морских миль по Средиземноморью.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'STCW',
crew_cert_first_aid:'Расширенная первая помощь',
crew_cert_experience:'7 лет на этих водах',
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
crew_trust_sub:'Все пассажиры застрахованы автоматически. Лицензия Морской администрации Черногории. Экипаж сертифицирован по STCW и нормам ЕС. Спасжилеты — на каждого, включая детские размеры.',

// ===== Events: catalog page =====
events_page_eyebrow:'Сезон 2026',
events_page_title:'Вечера на Marea',
events_page_sub:'Маленький сезон камерных вечеров на Адриатике — закаты, открытие сезона, ночные выходы. Только по брони, до двадцати гостей.',
events_why_eyebrow:'Формат',
events_why_h2:'Почему именно эти вечера',
events_why_1_title:'Камерный формат',
events_why_1_text:'До 20 гостей на борту.',
events_why_2_title:'Продуманная атмосфера',
events_why_2_text:'DJ, дресс-код, шампанское — каждая деталь спланирована.',
events_why_3_title:'Капитан и команда',
events_why_3_text:'Семь лет на этих водах.',
events_fallback_h2:'Не подходит ни одна дата?',
events_fallback_p:'Заберите Marea на свой вечер — день рождения, юбилей или тихую ночь с друзьями.',
events_fallback_cta:'Спланировать частный чартер',
events_fallback_wa:'Написать в WhatsApp',
events_card_reserve:'Забронировать →',
events_card_spots:'Ограничено мест',
events_card_few:'Осталось немного',
events_card_sold:'Места закончились',
events_card_white_sunset_meta:'Sunset party · 6 часов',
events_card_white_sunset_title:'White Sunset Party',
events_card_white_sunset_desc:'DJ-сет на закате, закуски, шампанское, остановка для купания в тихой бухте.',

// ===== Events: detail page (structural strings) =====
event_expect_eyebrow:'Вечер устроен так',
event_expect_h2:'Что вас ждёт',
event_included_eyebrow:'На борту',
event_included_h2:'Что включено',
event_included_no_h3:'Не включено',
event_reserve_eyebrow:'Бронирование',
event_reserve_h2:'Места ограничены — только по брони',
event_reserve_sub:'Оставьте заявку через форму или напишите в WhatsApp — подтвердим в течение 2 часов.',
event_form_h3:'Забронировать место',
event_form_name:'Ваше имя',
event_form_phone:'Телефон / WhatsApp',
event_form_guests:'Количество гостей',
event_form_guests_1:'1 гость',
event_form_guests_2:'2 гостя',
event_form_guests_3_5:'3–5 гостей',
event_form_guests_6_10:'6–10 гостей',
event_form_guests_11_15:'11–15 гостей',
event_form_guests_16_20:'16–20 гостей',

event_form_offer:'Бронь для пары или группы — хочу 2+ места вместе и узнать про специальные условия',
event_form_notes:'Что-то ещё, что нам важно знать? (необязательно)',
event_form_submit:'Забронировать место',
event_form_sending:'Отправка...',
event_form_success_h:'Заявка принята.',
event_form_success_p:'Подтвердим в WhatsApp в течение 2 часов.',
event_form_error:'Ошибка отправки. Напишите в WhatsApp или позвоните нам.',
event_related_h2:'Другие ближайшие события',
event_related_all:'← Все события',
event_wa_reserve:'Забронировать в WhatsApp',
event_cta_reserve:'Забронировать место',

// ===== Event #1: White Sunset Party =====
event_ws_title:'White Sunset Party',
event_ws_eyebrow:'14 июня · 2026',
event_ws_tagline:'Первый вечер сезона на Marea.',
event_ws_meta_duration:'6 часов на воде',
event_ws_meta_departure:'Выход в 17:00 из Тивата',
event_ws_meta_guests:'до 20 гостей',
event_ws_expect_1:'Белый дресс-код',
event_ws_expect_2:'Закат над Адриатикой',
event_ws_expect_3:'DJ-сет',
event_ws_expect_4:'Закуски и шампанское',
event_ws_expect_5:'Купание в тихой бухте',
event_ws_narrative_p1:'Шесть часов на воде, между Тиватом и открытой Адриатикой. Выходим в 17:00, когда свет начинает мягчеть. К 19:30 встаём на якорь в тихой бухте южнее Веригского пролива — шампанское на палубе, музыка тихая настолько, чтобы было слышно воду.',
event_ws_narrative_p2:'Белый дресс-код, до двадцати гостей, одна яхта. Весь вечер выстроен вокруг часа заката.',
event_ws_narrative_quote:'«Это та ночь, которую ждёшь всю зиму — когда сезон впервые ощущается по-настоящему». — Капитан Алексей',
event_ws_narrative_promise:'Не более двадцати гостей. Подтверждаем бронирования в течение двух часов.',
event_ws_inc_1:'DJ-сет весь вечер',
event_ws_inc_2:'Лёгкие закуски (канапе, сезонное мезе)',
event_ws_inc_3:'Шампанское и welcome drink',
event_ws_inc_4:'Команда (капитан + хостес)',
event_ws_inc_5:'Купание на закате в тихой бухте',
event_ws_inc_6:'Топливо на весь маршрут',
event_ws_noinc_1:'Крепкий бар (по запросу)',
event_ws_noinc_2:'Трансфер из отеля',
event_ws_noinc_3:'Фотограф (доп. услуга)',
}
};
const faqs = [
{q:{en:'What\'s included in the charter price?',ru:'Что включено в стоимость чартера?'},a:{en:'The yacht with captain and crew, fuel within the route, insurance for all passengers, SUP boards, snorkelling masks and an underwater scooter, bed linens and towels. Food, drinks, and port fees in Kotor — separate, at cost, no markup.',ru:'В стоимость входит яхта с капитаном и экипажем, топливо в пределах маршрута, страховка для всех пассажиров, SUP-доски, маски для снорклинга и подводный скутер, постельное бельё и полотенца. Еда, напитки и портовые сборы в Которе — отдельно, по факту, без наценки.'}},
{q:{en:'Do I need a boating license?',ru:'Нужна ли мне лицензия на управление судном?'},a:{en:'No. On every charter — our captain with 7 years on these waters. No license, no experience needed.',ru:'Нет. На каждом чартере — наш капитан с 15-летним опытом на этих водах. Вам не нужны ни лицензия, ни опыт.'}},
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
{en:'Yacht Marea with captain & steward',ru:'Яхта Marea с капитаном и стюардом'},
{en:'Fuel within the route',ru:'Топливо в пределах маршрута'},
{en:'Welcome drink — prosecco or non-alcoholic',ru:'Welcome drink — просекко или безалкогольный'},
{en:'Insurance for all passengers (automatic)',ru:'Страховка для всех пассажиров (автоматически)'},
{en:'SUP boards, snorkelling masks, underwater scooter',ru:'SUP-доски, маски для снорклинга, подводный скутер'},
{en:'Inflatable loungers & water toys',ru:'Надувные шезлонги и водные игрушки'},
{en:'Bluetooth speakers — your playlist',ru:'Bluetooth-колонки — ваш плейлист'},
{en:'Towels, ice, water, fruit',ru:'Полотенца, лёд, вода, фрукты'},
{en:'No port fees at Porto Montenegro',ru:'Без портовых сборов в Порто Монтенегро'}
];
const includedNo = [
{en:'Food (lunch or snacks — by request, at cost)',ru:'Еда (обед или закуски — по запросу, по факту)'},
{en:'Alcohol beyond the welcome drink',ru:'Алкоголь сверх welcome drink'},
{en:'Port fees in Kotor or Herceg Novi marinas',ru:'Портовые сборы в маринах Котора или Херцег-Нови'},
{en:'Private chef — add-on (+€300)',ru:'Личный шеф — добавка (+€300)'},
{en:'Professional photographer — add-on (+€200)',ru:'Профессиональный фотограф — добавка (+€200)'},
{en:'Celebration decor — add-on (+€150)',ru:'Праздничный декор — добавка (+€150)'}
];
let currentLang = 'en';
let currentReview = 0;
function setLang(lang) {
currentLang = lang;
document.body.classList.toggle('lang-ru', currentLang === 'ru');
document.body.classList.toggle('lang-en', currentLang === 'en');
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
function initReserveForm() {
const form = document.getElementById('reserveForm');
if (!form) return;
form.addEventListener('submit', async function(e) {
e.preventDefault();
const btn = this.querySelector('.btn-submit');
btn.disabled = true;
btn.textContent = T[currentLang].event_form_sending;
const fd = new FormData(this);
const data = Object.fromEntries(fd.entries());
// Honeypot: silently drop bots
if (data.website) {
this.style.display = 'none';
document.getElementById('reserveSuccess').style.display = 'block';
return;
}
const esc = s => (s||'').replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
const eventName = data.event || 'Event';
const eventSlug = data.event_slug || '';
const offerNote = data.offer ? '\n🎁 Couple/group rate requested' : '';
const msg = `🎉 New Event Reservation

🎟 Event: ${esc(eventName)}
👤 Name: ${esc(data.name)}
📞 Phone: ${esc(data.phone)}
👥 Guests: ${esc(data.guests)}${offerNote}
💬 Notes: ${esc(data.notes) || '—'}
🌐 Lang: ${esc(currentLang)}`;
try {
const crmPayload = {
client: {
name: data.name,
phone: data.phone || undefined,
language: currentLang || 'en'
},
guests_count: parseInt(data.guests, 10) || undefined,
notes: [
'Event: ' + eventName,
eventSlug ? 'Slug: ' + eventSlug : '',
data.offer ? 'Wants couple/group rate' : '',
data.notes ? 'Notes: ' + data.notes : ''
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
document.getElementById('reserveSuccess').style.display = 'block';
if (typeof gtag === 'function') {
gtag('event', 'event_reserve_submit', {
event_slug: eventSlug,
event_name: eventName,
guests: data.guests,
lang: currentLang
});
}
gtag_report_conversion();
} catch (err) {
console.error('Reserve send error:', err);
btn.disabled = false;
btn.textContent = T[currentLang].event_form_submit;
alert(T[currentLang].event_form_error);
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
initReserveForm();
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