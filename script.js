const BOT_TOKEN = '7621515873:AAE4JDcrzlcQ7aSaFJv3hGbb10IOTnQSRpI';
const CHAT_IDS = ['294237889', '-1003430785637'];
const CRM_URL = 'https://dashboard.myyacht.info/api/leads';
const T = {
en: {
nav_home:'Home', nav_about:'About', nav_yacht:'The Yacht', nav_dest:'Destinations',
nav_gallery:'Gallery', nav_booking:'Booking', nav_cta:'Book Now',
hero_eyebrow:'Private Yacht Charter',
hero_h1:'Discover Montenegro<br>by Sea',
hero_sub:'Explore the Adriatic\'s most breathtaking coastline aboard our luxury yacht. From the emerald waters of Kotor Bay to the ancient walls of the old towns — your voyage begins here.',
hero_cta:'Book a Charter',
stat_1_num:'15+', stat_1_label:'Years at Sea',
stat_2_num:'2000+', stat_2_label:'Happy Guests',
stat_3_num:'4.9', stat_3_label:'Rating',
stat_4_num:'18m', stat_4_label:'Yacht Length',
about_eyebrow:'Our Story',
about_h2:'Luxury Defined by the Sea',
about_p1:'MonteYacht has been crafting unforgettable maritime experiences along the Adriatic coast since 2010. Based in Porto Montenegro — one of the Mediterranean\'s most prestigious superyacht marinas — we offer curated day charters and week-long voyages along the Montenegrin coastline.',
about_p2:'With an 18-metre yacht, an experienced captain, and a commitment to bespoke service, every charter is designed around you. Whether it\'s a sun-filled afternoon in Kotor Bay or a week exploring hidden coves and coastal villages, we handle every detail.',
about_cta:'Meet the Yacht',
charters_eyebrow:'Experiences',
charters_h2:'Choose Your Voyage',
charters_sub:'From a half-day escape to a full week of coastal exploration — select the experience that matches your dream.',
charter_day_label:'Day Charter',
charter_day_title:'A Day on the Adriatic',
charter_day_desc:'Cruise hidden coves, swim in crystal waters, and dine on fresh seafood — all in a single unforgettable day. Perfect for families, couples, and groups of friends.',
charter_day_meta:'4–12 hours · Up to 16 guests',
charter_day_price:'From €2,200',
charter_week_label:'Multi-Day Charter',
charter_week_title:'Extended Voyages',
charter_week_desc:'Wake up in a new bay each morning. Explore ancient coastal towns, secluded beaches, and live aboard your private floating retreat for multiple days.',
charter_week_meta:'24h+ · Fully crewed',
charter_week_price:'From €3,000/day',
charter_cta:'Request Booking',
yacht_h1:'The Yacht',
yacht_sub:'18 metres of refined comfort on the Adriatic',
yacht_spec_length:'Length', yacht_spec_cabins:'Cabins', yacht_spec_guests:'Guests', yacht_spec_crew:'Crew',
yacht_feat_title:'What\'s On Board',
yacht_f1_title:'BBQ Grill', yacht_f1_desc:'Fresh-caught seafood and Mediterranean cuisine prepared on the open deck.',
yacht_f2_title:'Water Sports', yacht_f2_desc:'Paddle boards, snorkeling gear, and towable inflatables for all ages.',
yacht_f3_title:'Premium Sound', yacht_f3_desc:'Bluetooth audio system throughout the yacht for the perfect soundtrack.',
yacht_f4_title:'Sun Deck', yacht_f4_desc:'Spacious forward deck with comfortable loungers for sunbathing.',
yacht_f5_title:'Expert Captain', yacht_f5_desc:'Our captain knows every hidden cove and the best swimming spots along the coast.',
yacht_f6_title:'First-Class Service', yacht_f6_desc:'Attentive crew ensuring your comfort from embarkation to return.',
dest_eyebrow:'Choose Your Route',
dest_h2:'Yacht Routes',
dest_sub:'Four curated itineraries along the Adriatic — each one designed by our captain to show you the best of Montenegro.',
dest_places_eyebrow:'Where We Sail',
dest_places_h2:'Destinations',
dest_places_sub:'The highlights of the Montenegrin coastline — all within reach of a day charter from Porto Montenegro.',
premium_eyebrow:'Upgrade Your Day',
premium_h2:'Premium Experience',
premium_sub:'Make it unforgettable. Add any of these options when you book — or bundle all four and save.',
multiday_eyebrow:'Stay Overnight',
multiday_h2:'Multi-Day Voyages',
multiday_sub:'Sleep on the water, wake up in paradise. Our cabins are freshly renovated — choose 2, 3, or 5 days and we\'ll craft your perfect itinerary.',
multiday_includes_title:'Overnight rate includes',
multiday_includes:'All day-charter amenities, plus: freshly renovated private cabins · bed linens & towels · morning coffee service · captain & crew 24/7 · flexible itinerary planned with you.',
gallery_eyebrow:'Visual Stories',
gallery_h2:'Gallery',
gallery_sub:'Moments captured aboard our yacht and along the Adriatic coast.',
reviews_eyebrow:'Guest Experiences',
reviews_h2:'What Our Guests Say',
booking_eyebrow:'Get in Touch',
booking_h2:'Book Your Charter',
booking_p:'Tell us about your dream voyage and we\'ll craft the perfect itinerary. Our team responds within 2 hours during the season.',
form_name:'Full Name', form_phone:'Phone', form_email:'Email',
form_type:'Charter Type', form_type_day:'Day Charter', form_type_week:'Weekly Charter',
form_guests:'Number of Guests', form_dates:'Preferred Dates',
form_comments:'Comments (optional)', form_submit:'Send Request',
form_success_h:'Request Sent!',
form_success_p:'We\'ll get back to you within 2 hours. Check your email for a confirmation.',
faq_eyebrow:'Common Questions', faq_h2:'Frequently Asked Questions',
footer_desc:'Premium yacht charter along the Adriatic coast of Montenegro. Luxury day trips and weekly voyages since 2010.',
footer_nav:'Navigation', footer_dest:'Destinations', footer_contact:'Contact',
footer_rights:'All rights reserved.',
nav_blog:'Blog',
promo_text:'Early Booking: 10% off all charters booked in April & May',
promo_cta:'Book Now',
badge_insurance:'Full Insurance Coverage',
badge_insurance_desc:'Comprehensive maritime insurance for all passengers',
badge_license:'Licensed Charter Operator',
badge_license_desc:'Certified by Montenegro Maritime Authority',
badge_safety:'Safety Certified',
badge_safety_desc:'Meets all SOLAS & EU safety regulations',
reno_eyebrow:'2026 Renovation',
reno_h2:'A New Level of Luxury',
reno_sub:'This season our yacht unveils a complete interior transformation — reimagined cabins, a modern galley, and an elegant salon designed for comfort at sea.',
included_eyebrow:'Charter Details',
included_h2:'What\'s Included',
included_sub:'Everything you need for a perfect day — and what to plan separately.',
included_yes:'Included in Price',
included_no:'Available for Extra',
blog_eyebrow:'Captain\'s Journal',
blog_h2:'Blog',
blog_sub:'Stories, routes, and insider tips from our years on the Adriatic.',
blog_read:'Read More',
blog_more_eyebrow:'More Stories',
blog_more_h2:'From the Captain\'s Log',
blog_art1_meta:'Route Guide &bull; 8 min read',
blog_art1_title:'The Ultimate Boka Kotorska Bay Yacht Route',
blog_art1_intro:'Boka Kotorska — the Bay of Kotor — is often called the southernmost fjord in Europe. Framed by soaring limestone cliffs that plunge straight into deep blue water, dotted with medieval walled towns and tiny island churches, it is one of the most spectacular yacht cruising grounds in the entire Mediterranean. Here is our captain\'s recommended full-day route that reveals every facet of this UNESCO World Heritage site.',
blog_art1_quote:'"After 15 years of navigating these waters, the Bay of Kotor still takes my breath away every single morning. There is simply nowhere else like it." — Captain Marko',
blog_art1_route_title:'The Route: 8-Hour Day Charter',
blog_art1_s1_time:'09:00 — Departure',
blog_art1_s1_title:'Porto Montenegro, Tivat',
blog_art1_s1_desc:'We depart from Porto Montenegro — one of the Mediterranean\'s most prestigious superyacht marinas. As we leave the harbour, you\'ll see the first glimpse of the bay\'s dramatic mountains rising on either side. Coffee and fresh pastries await you on the sun deck as we set course toward the narrows.',
blog_art1_s2_time:'09:45 — First Stop',
blog_art1_s2_title:'Our Lady of the Rocks',
blog_art1_s2_desc:'We anchor near the iconic islet of Gospa od Skrpjela — a man-made island that local sailors have been building stone by stone since the 15th century. The tiny church houses priceless Renaissance paintings and hundreds of silver votive tablets. The island seems to float in the middle of the bay, framed by mountains on every side — an unforgettable photo spot and a moment of genuine wonder.',
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
blog_art2_title:'Sunset Champagne: Why Golden Hour on the Bay Is Unforgettable',
blog_art2_excerpt:'There\'s a moment — around 7pm in late June — when the Orjen mountains cast a warm amber glow across the entire Bay of Kotor. The water turns to liquid gold, and time seems to slow down. Here\'s why our guests say the return journey is the highlight of every charter.',
blog_art3_meta:'Food &bull; 4 min read',
blog_art3_title:'From Sea to Grill: The Adriatic BBQ Experience',
blog_art3_excerpt:'Nothing tastes better than freshly grilled Mediterranean fish with the salt air on your face and the mountains of Boka Bay in the background. Our onboard BBQ is the heart of every charter — where great food, laughter, and the open sea come together.',
pricing_eyebrow:'Transparent Pricing',
pricing_h2:'Charter Rates',
pricing_sub:'Choose the duration that suits your adventure.',
pricing_4h:'4 Hours', pricing_6h:'6 Hours', pricing_8h:'8 Hours',
pricing_12h:'12 Hours', pricing_24h:'24 Hours', pricing_multi:'2+ Days',
pricing_perday:'per day',
ig_eyebrow:'Follow Us',
ig_h2:'@yacht.mne',
ig_sub:'See our latest moments on the Adriatic',
ig_cta:'Follow on Instagram',
sub_eyebrow:'Stay in the Loop',
sub_h2:'Get Exclusive Offers',
sub_p:'Be the first to know about special charters, seasonal discounts, and new routes along the Adriatic coast.',
sub_cta:'Subscribe',
sub_note:'No spam. Unsubscribe anytime.',
sub_success:'You\'re in! We\'ll keep you posted on the best offers.',
sub_sending:'Sending...',
sub_error:'Something went wrong. Please try again.',
meta_title:'MonteYacht — Premium Yacht Charter Montenegro',
meta_desc:'Luxury yacht charter along the Adriatic coast of Montenegro. Day trips and weekly voyages aboard an 18-metre premium yacht. Book your charter today.',
nav_gift:'Gift',
gift_eyebrow:'The Perfect Gift',
gift_h1:'Gift an Unforgettable Day at Sea',
gift_sub:'Give someone special a luxury yacht experience along the Montenegrin coast. We\'ll deliver a beautiful certificate within 2 hours.',
gift_how_eyebrow:'Simple & Elegant',
gift_how_h2:'How It Works',
gift_step1_h:'Choose Your Gift',
gift_step1_p:'Pick an amount or a specific route package below.',
gift_step2_h:'Fill in the Details',
gift_step2_p:'Tell us the recipient\'s name and add a personal message.',
gift_step3_h:'Receive the Certificate',
gift_step3_p:'We\'ll send a stunning PDF certificate within 2 hours.',
gift_options_eyebrow:'Choose Your Gift',
gift_options_h2:'Gift Options',
gift_tab_amount:'By Amount',
gift_tab_package:'By Package',
gift_amt_500:'A taste of the Adriatic',
gift_amt_1000:'Half a day on the water',
gift_amt_2000:'A full day of luxury',
gift_amt_3000:'The ultimate experience',
gift_popular:'Most Popular',
gift_preview_eyebrow:'Preview',
gift_preview_h2:'Your Certificate',
gift_preview_sub:'Type the recipient\'s name to see how the certificate will look.',
gift_cert_placeholder:'Recipient\'s name',
gift_cert_title:'Gift Certificate',
gift_cert_for:'Presented to',
gift_cert_desc:'Luxury yacht charter along the Adriatic coast of Montenegro',
gift_cert_validity:'Valid for 12 months',
gift_form_h2:'Request Your Certificate',
gift_form_info:'Fill in the form and we\'ll prepare a beautiful PDF certificate and send it to your email within 2 hours. You can forward it to the recipient or print it out.',
gift_b1:'Valid for 12 months',
gift_b2:'Fully transferable',
gift_b3:'Any route or package',
gift_b4:'Delivered within 2 hours',
gift_f_buyer:'Your Name',
gift_f_type:'Gift Type',
gift_f_value:'Amount / Package',
gift_f_recipient:'Recipient\'s Name',
gift_f_message:'Personal Message (optional)',
gift_f_delivery:'Delivery Format',
gift_f_email_pdf:'Email PDF',
gift_f_print_pdf:'Print-ready PDF',
gift_f_submit:'Send Gift Request',
gift_success_h:'Gift Request Sent!',
gift_success_p:'We\'ll prepare your beautiful certificate and deliver it within 2 hours. Check your email!',
gift_faq_h2:'Gift Certificate FAQ',
gift_faq1_q:'How long is the certificate valid?',
gift_faq1_a:'The certificate is valid for 12 months from the date of purchase.',
gift_faq2_q:'How does the recipient book?',
gift_faq2_a:'They simply contact us with the certificate code and we\'ll arrange everything — preferred dates, route, and any special requests.',
gift_faq3_q:'Can I choose a specific date for the charter?',
gift_faq3_a:'The recipient picks their preferred date when booking. This gives them maximum flexibility.',
gift_faq4_q:'What\'s the refund policy?',
gift_faq4_a:'Gift certificates are non-refundable but fully transferable to another person.',
nav_crew:'Crew',
crew_eyebrow:'The People Behind Your Voyage',
crew_h1:'Meet the Crew',
crew_sub:'Licensed professionals with 15+ years on the Adriatic. Your safety and comfort are our top priority.',
crew_captain_role:'Captain',
crew_captain_name:'Captain Marko',
crew_captain_bio:'With over 15 years navigating the Montenegrin coastline, Captain Marko knows every hidden cove, the best swimming spots, and exactly when to catch the golden hour light in Kotor Bay. He holds an international yacht master certificate and has logged over 50,000 nautical miles across the Mediterranean.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'STCW Safety Certificate',
crew_cert_first_aid:'Advanced First Aid',
crew_cert_experience:'15+ Years Experience',
crew_captain_quote:'"After all these years, the Bay of Kotor still takes my breath away every single morning. Sharing that feeling with our guests is what makes this the best job in the world."',
crew_team_eyebrow:'Our Team',
crew_team_h2:'The Crew',
crew_member1_name:'First Mate Name',
crew_member1_role:'First Mate',
crew_member1_bio:'Responsible for navigation, guest safety, and water sports equipment. Certified diving instructor with a passion for marine life and the best snorkeling spots along the coast.',
crew_member2_name:'Steward Name',
crew_member2_role:'Steward',
crew_member2_bio:'Your onboard host — handling food service, BBQ grill, drinks, and every detail of your comfort. Known for making guests feel at home from the moment they step aboard.',
crew_trust_eyebrow:'Your Safety First',
crew_trust_h2:'Certifications & Safety',
crew_trust_sub:'Every voyage is backed by full insurance, licensed operations, and a crew trained to the highest maritime safety standards.'
},
ru: {
nav_home:'Главная', nav_about:'О нас', nav_yacht:'Яхта', nav_dest:'Направления',
nav_gallery:'Галерея', nav_booking:'Бронирование', nav_cta:'Забронировать',
hero_eyebrow:'Частный яхтенный чартер',
hero_h1:'Откройте Черногорию<br>с моря',
hero_sub:'Исследуйте самое захватывающее побережье Адриатики на борту нашей люксовой яхты. От изумрудных вод Которского залива до древних стен старинных городов — ваше путешествие начинается здесь.',
hero_cta:'Забронировать',
stat_1_num:'15+', stat_1_label:'Лет в море',
stat_2_num:'2000+', stat_2_label:'Довольных гостей',
stat_3_num:'4.9', stat_3_label:'Рейтинг',
stat_4_num:'18м', stat_4_label:'Длина яхты',
about_eyebrow:'Наша история',
about_h2:'Роскошь, определённая морем',
about_p1:'MonteYacht создаёт незабываемые морские впечатления на побережье Адриатики с 2010 года. Мы базируемся в Порто Монтенегро — одной из самых престижных марин Средиземноморья — и предлагаем эксклюзивные дневные и недельные чартеры вдоль побережья Черногории.',
about_p2:'С 18-метровой яхтой, опытным капитаном и приверженностью индивидуальному сервису каждый чартер создаётся вокруг вас. Будь то солнечный день в Которском заливе или неделя исследования скрытых бухт и прибрежных деревень — мы позаботимся о каждой детали.',
about_cta:'Познакомиться с яхтой',
charters_eyebrow:'Услуги',
charters_h2:'Выберите ваше путешествие',
charters_sub:'От дневного отдыха до полной недели исследования побережья — выберите впечатление, которое соответствует вашей мечте.',
charter_day_label:'Дневной чартер',
charter_day_title:'День на Адриатике',
charter_day_desc:'Круиз по скрытым бухтам, купание в кристальных водах и обед из свежих морепродуктов — всё за один незабываемый день. Идеально для семей, пар и компаний друзей.',
charter_day_meta:'4–12 часов · До 16 гостей',
charter_day_price:'От €2 200',
charter_week_label:'Многодневный чартер',
charter_week_title:'Расширенные путешествия',
charter_week_desc:'Просыпайтесь в новой бухте каждое утро. Исследуйте древние прибрежные города, уединённые пляжи и живите на борту вашей частной плавучей резиденции.',
charter_week_meta:'24ч+ · Полный экипаж',
charter_week_price:'От €3 000/день',
charter_cta:'Запросить бронирование',
yacht_h1:'Яхта',
yacht_sub:'18 метров утончённого комфорта на Адриатике',
yacht_spec_length:'Длина', yacht_spec_cabins:'Каюты', yacht_spec_guests:'Гости', yacht_spec_crew:'Экипаж',
yacht_feat_title:'На борту',
yacht_f1_title:'Гриль', yacht_f1_desc:'Свежие морепродукты и средиземноморская кухня, приготовленные на открытой палубе.',
yacht_f2_title:'Водные развлечения', yacht_f2_desc:'Сап-доски, снаряжение для снорклинга и надувные аттракционы для всех возрастов.',
yacht_f3_title:'Премиум звук', yacht_f3_desc:'Bluetooth аудиосистема по всей яхте для идеального саундтрека.',
yacht_f4_title:'Солнечная палуба', yacht_f4_desc:'Просторная носовая палуба с комфортными шезлонгами для загара.',
yacht_f5_title:'Опытный капитан', yacht_f5_desc:'Наш капитан знает каждую скрытую бухту и лучшие места для купания вдоль побережья.',
yacht_f6_title:'Первоклассный сервис', yacht_f6_desc:'Внимательный экипаж обеспечит ваш комфорт от посадки до возвращения.',
dest_eyebrow:'Выберите маршрут',
dest_h2:'Яхтенные маршруты',
dest_sub:'Четыре продуманных маршрута вдоль Адриатики — каждый спланирован нашим капитаном, чтобы показать вам лучшее в Черногории.',
dest_places_eyebrow:'Куда мы плаваем',
dest_places_h2:'Направления',
dest_places_sub:'Жемчужины черногорского побережья — все в пределах дневного чартера из Порто Монтенегро.',
premium_eyebrow:'Улучшите ваш день',
premium_h2:'Премиум впечатление',
premium_sub:'Сделайте день незабываемым. Добавьте любую опцию при бронировании — или возьмите пакет из четырёх со скидкой.',
multiday_eyebrow:'Ночёвка на борту',
multiday_h2:'Мульти-дневные круизы',
multiday_sub:'Засыпайте на воде, просыпайтесь в раю. Каюты полностью обновлены — выберите 2, 3 или 5 дней, и мы составим идеальный маршрут.',
multiday_includes_title:'Ночной тариф включает',
multiday_includes:'Все удобства дневного чартера, плюс: обновлённые приватные каюты · постельное бельё и полотенца · утренний кофе-сервис · капитан и экипаж 24/7 · гибкий маршрут, спланированный с вами.',
gallery_eyebrow:'Фотоистории',
gallery_h2:'Галерея',
gallery_sub:'Моменты, запечатлённые на борту нашей яхты и вдоль побережья Адриатики.',
reviews_eyebrow:'Впечатления гостей',
reviews_h2:'Что говорят наши гости',
booking_eyebrow:'Свяжитесь с нами',
booking_h2:'Забронируйте чартер',
booking_p:'Расскажите нам о вашем идеальном путешествии, и мы составим идеальный маршрут. Наша команда отвечает в течение 2 часов в сезон.',
form_name:'Полное имя', form_phone:'Телефон', form_email:'Email',
form_type:'Тип чартера', form_type_day:'Дневной чартер', form_type_week:'Недельный чартер',
form_guests:'Количество гостей', form_dates:'Желаемые даты',
form_comments:'Комментарии (необязательно)', form_submit:'Отправить запрос',
form_success_h:'Запрос отправлен!',
form_success_p:'Мы свяжемся с вами в течение 2 часов. Проверьте почту для подтверждения.',
faq_eyebrow:'Частые вопросы', faq_h2:'Часто задаваемые вопросы',
footer_desc:'Премиальный яхтенный чартер вдоль побережья Адриатики Черногории. Дневные и недельные люксовые путешествия с 2010 года.',
footer_nav:'Навигация', footer_dest:'Направления', footer_contact:'Контакты',
footer_rights:'Все права защищены.',
nav_blog:'Блог',
promo_text:'Раннее бронирование: скидка 10% на все чартеры в апреле и мае',
promo_cta:'Забронировать',
badge_insurance:'Полное страхование',
badge_insurance_desc:'Комплексное морское страхование для всех пассажиров',
badge_license:'Лицензированный оператор',
badge_license_desc:'Сертифицирован Морской администрацией Черногории',
badge_safety:'Сертификат безопасности',
badge_safety_desc:'Соответствует всем стандартам SOLAS и ЕС',
reno_eyebrow:'Реновация 2026',
reno_h2:'Новый уровень роскоши',
reno_sub:'В этом сезоне наша яхта представляет полную трансформацию интерьера — обновлённые каюты, современная кухня и элегантный салон, созданные для комфорта в море.',
included_eyebrow:'Детали чартера',
included_h2:'Что включено',
included_sub:'Всё необходимое для идеального дня — и что планировать отдельно.',
included_yes:'Включено в стоимость',
included_no:'Дополнительно',
blog_eyebrow:'Журнал капитана',
blog_h2:'Блог',
blog_sub:'Истории, маршруты и советы за годы на Адриатике.',
blog_read:'Читать далее',
blog_more_eyebrow:'Ещё истории',
blog_more_h2:'Из журнала капитана',
blog_art1_meta:'Гид по маршруту &bull; 8 мин чтения',
blog_art1_title:'Идеальный яхтенный маршрут по Бококоторскому заливу',
blog_art1_intro:'Бока Которска — Которский залив — часто называют самым южным фьордом Европы. Обрамлённый отвесными известняковыми скалами, уходящими прямо в тёмно-синюю воду, украшенный средневековыми городами-крепостями и крошечными островными церквями, он является одним из самых впечатляющих яхтенных маршрутов всего Средиземноморья. Вот рекомендованный нашим капитаном маршрут на полный день, раскрывающий каждую грань этого объекта Всемирного наследия ЮНЕСКО.',
blog_art1_quote:'"За 15 лет навигации по этим водам Которский залив до сих пор захватывает дух каждое утро. Нигде больше нет ничего подобного." — Капитан Марко',
blog_art1_route_title:'Маршрут: 8-часовой дневной чартер',
blog_art1_s1_time:'09:00 — Отправление',
blog_art1_s1_title:'Порто Монтенегро, Тиват',
blog_art1_s1_desc:'Мы отправляемся из Порто Монтенегро — одной из самых престижных суперяхтенных марин Средиземноморья. Покидая гавань, вы увидите первые впечатляющие горы залива, поднимающиеся по обе стороны. Кофе и свежая выпечка ждут вас на солнечной палубе, пока мы берём курс к узкому проходу.',
blog_art1_s2_time:'09:45 — Первая остановка',
blog_art1_s2_title:'Остров Богородицы на Рифе',
blog_art1_s2_desc:'Мы встаём на якорь у знаменитого островка Госпа од Шкрпела — рукотворного острова, который местные моряки строят камень за камнем с XV века. Крошечная церковь хранит бесценные картины эпохи Возрождения и сотни серебряных вотивных табличек. Остров словно парит посреди залива, обрамлённый горами со всех сторон — незабываемое место для фотографий и момент подлинного восхищения.',
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
blog_art2_title:'Закатное шампанское: почему золотой час на заливе незабываем',
blog_art2_excerpt:'Есть момент — около 19:00 в конце июня — когда горы Орьен отбрасывают тёплое янтарное сияние на весь Которский залив. Вода превращается в жидкое золото, и время словно замирает. Вот почему наши гости говорят, что обратный путь — лучший момент каждого чартера.',
blog_art3_meta:'Еда &bull; 4 мин чтения',
blog_art3_title:'Из моря на гриль: адриатический BBQ-опыт',
blog_art3_excerpt:'Ничто не сравнится со вкусом свежей средиземноморской рыбы на гриле, когда солёный ветер обдувает лицо, а горы Бока-Которского залива служат фоном. Наш бортовой гриль — сердце каждого чартера, где сходятся отличная еда, смех и открытое море.',
pricing_eyebrow:'Прозрачные цены',
pricing_h2:'Стоимость чартера',
pricing_sub:'Выберите продолжительность для вашего приключения.',
pricing_4h:'4 часа', pricing_6h:'6 часов', pricing_8h:'8 часов',
pricing_12h:'12 часов', pricing_24h:'24 часа', pricing_multi:'2+ дня',
pricing_perday:'в день',
ig_eyebrow:'Подписывайтесь',
ig_h2:'@yacht.mne',
ig_sub:'Наши последние моменты на Адриатике',
ig_cta:'Подписаться в Instagram',
sub_eyebrow:'Будьте в курсе',
sub_h2:'Эксклюзивные предложения',
sub_p:'Узнавайте первыми о специальных чартерах, сезонных скидках и новых маршрутах вдоль побережья Адриатики.',
sub_cta:'Подписаться',
sub_note:'Никакого спама. Отписаться можно в любой момент.',
sub_success:'Готово! Мы будем держать вас в курсе лучших предложений.',
sub_sending:'Отправка...',
sub_error:'Что-то пошло не так. Попробуйте ещё раз.',
meta_title:'MonteYacht — Премиум яхтенный чартер Черногория',
meta_desc:'Люксовый яхтенный чартер по Адриатическому побережью Черногории. Дневные и недельные путешествия на 18-метровой премиальной яхте.',
nav_gift:'Подарок',
gift_eyebrow:'Идеальный подарок',
gift_h1:'Подарите незабываемый день на море',
gift_sub:'Подарите близкому человеку роскошный яхтенный опыт у побережья Черногории. Мы доставим красивый сертификат в течение 2 часов.',
gift_how_eyebrow:'Просто и элегантно',
gift_how_h2:'Как это работает',
gift_step1_h:'Выберите подарок',
gift_step1_p:'Выберите сумму или конкретный маршрут ниже.',
gift_step2_h:'Заполните детали',
gift_step2_p:'Укажите имя получателя и добавьте личное сообщение.',
gift_step3_h:'Получите сертификат',
gift_step3_p:'Мы отправим красивый PDF-сертификат в течение 2 часов.',
gift_options_eyebrow:'Выберите подарок',
gift_options_h2:'Варианты подарков',
gift_tab_amount:'По сумме',
gift_tab_package:'По пакету',
gift_amt_500:'Вкус Адриатики',
gift_amt_1000:'Полдня на воде',
gift_amt_2000:'Полный день роскоши',
gift_amt_3000:'Незабываемый опыт',
gift_popular:'Популярный',
gift_preview_eyebrow:'Превью',
gift_preview_h2:'Ваш сертификат',
gift_preview_sub:'Введите имя получателя, чтобы увидеть, как будет выглядеть сертификат.',
gift_cert_placeholder:'Имя получателя',
gift_cert_title:'Подарочный сертификат',
gift_cert_for:'Вручается',
gift_cert_desc:'Люксовый яхтенный чартер по Адриатическому побережью Черногории',
gift_cert_validity:'Действителен 12 месяцев',
gift_form_h2:'Запросить сертификат',
gift_form_info:'Заполните форму, и мы подготовим красивый PDF-сертификат и отправим его на вашу почту в течение 2 часов. Вы можете переслать его получателю или распечатать.',
gift_b1:'Действителен 12 месяцев',
gift_b2:'Полностью передаваемый',
gift_b3:'Любой маршрут или пакет',
gift_b4:'Доставка в течение 2 часов',
gift_f_buyer:'Ваше имя',
gift_f_type:'Тип подарка',
gift_f_value:'Сумма / Пакет',
gift_f_recipient:'Имя получателя',
gift_f_message:'Личное сообщение (необязательно)',
gift_f_delivery:'Формат доставки',
gift_f_email_pdf:'PDF на email',
gift_f_print_pdf:'PDF для печати',
gift_f_submit:'Отправить запрос',
gift_success_h:'Запрос отправлен!',
gift_success_p:'Мы подготовим красивый сертификат и доставим его в течение 2 часов. Проверьте почту!',
gift_faq_h2:'FAQ по подарочным сертификатам',
gift_faq1_q:'Какой срок действия сертификата?',
gift_faq1_a:'Сертификат действителен 12 месяцев с даты покупки.',
gift_faq2_q:'Как получатель бронирует?',
gift_faq2_a:'Достаточно связаться с нами с кодом сертификата — мы организуем всё: даты, маршрут и особые пожелания.',
gift_faq3_q:'Можно ли выбрать конкретную дату?',
gift_faq3_a:'Получатель сам выбирает удобную дату при бронировании. Это даёт максимальную гибкость.',
gift_faq4_q:'Какова политика возврата?',
gift_faq4_a:'Подарочные сертификаты не подлежат возврату, но их можно передать другому человеку.',
nav_crew:'Экипаж',
crew_eyebrow:'Люди за вашим путешествием',
crew_h1:'Наш экипаж',
crew_sub:'Лицензированные профессионалы с 15+ годами опыта на Адриатике. Ваша безопасность и комфорт — наш приоритет.',
crew_captain_role:'Капитан',
crew_captain_name:'Капитан Марко',
crew_captain_bio:'Более 15 лет капитан Марко бороздит побережье Черногории и знает каждую бухту, лучшие места для купания и точное время для золотого часа в Которском заливе. Он имеет международный сертификат яхтенного мастера и прошёл более 50 000 морских миль по Средиземноморью.',
crew_cert_master:'Yacht Master Offshore',
crew_cert_safety:'Сертификат безопасности STCW',
crew_cert_first_aid:'Продвинутая первая помощь',
crew_cert_experience:'15+ лет опыта',
crew_captain_quote:'«Спустя все эти годы Которский залив по-прежнему завораживает меня каждое утро. Делиться этим ощущением с гостями — лучшая работа в мире.»',
crew_team_eyebrow:'Наша команда',
crew_team_h2:'Экипаж',
crew_member1_name:'Имя помощника',
crew_member1_role:'Помощник капитана',
crew_member1_bio:'Отвечает за навигацию, безопасность гостей и оборудование для водных видов спорта. Сертифицированный инструктор по дайвингу с любовью к морской жизни.',
crew_member2_name:'Имя стюарда',
crew_member2_role:'Стюард',
crew_member2_bio:'Ваш хозяин на борту — обслуживание, гриль, напитки и каждая деталь вашего комфорта. Гости чувствуют себя как дома с первого шага на борт.',
crew_trust_eyebrow:'Безопасность прежде всего',
crew_trust_h2:'Сертификаты и безопасность',
crew_trust_sub:'Каждый рейс обеспечен полной страховкой, лицензированными операциями и экипажем, обученным по высшим стандартам морской безопасности.'
}
};
const faqs = [
{q:{en:'What is included in the charter price?',ru:'Что включено в стоимость чартера?'},a:{en:'The charter price includes the yacht, captain, fuel for standard routes, bed linens, towels, snorkeling gear, and basic insurance. Food, drinks, port fees, and special requests are billed separately.',ru:'В стоимость входит яхта, капитан, топливо для стандартных маршрутов, постельное бельё, полотенца, снаряжение для снорклинга и базовая страховка. Еда, напитки, портовые сборы и спецзапросы оплачиваются отдельно.'}},
{q:{en:'Do I need a boating license?',ru:'Нужна ли мне лицензия на управление судном?'},a:{en:'No license is required. Our yacht comes with a professional captain who knows every hidden bay and the best swimming spots along the coast.',ru:'Лицензия не требуется. Наша яхта предоставляется с профессиональным капитаном, который знает каждую бухту и лучшие места для купания вдоль побережья.'}},
{q:{en:'What is the cancellation policy?',ru:'Какова политика отмены?'},a:{en:'Free cancellation up to 14 days before departure. Cancellations within 14–7 days receive a 50% refund. Within 7 days, the booking is non-refundable. Rescheduling is always free if dates are available.',ru:'Бесплатная отмена за 14 и более дней до отправления. При отмене за 14–7 дней — возврат 50%. Менее чем за 7 дней — бронирование не возвращается. Перенос дат всегда бесплатный при наличии свободных дат.'}},
{q:{en:'Can we customize the itinerary?',ru:'Можно ли настроить маршрут?'},a:{en:'Absolutely. Every charter is tailored to your preferences. The captain will work with you to plan the perfect route based on weather, your interests, and the time of year.',ru:'Безусловно. Каждый чартер адаптирован под ваши предпочтения. Капитан составит идеальный маршрут с учётом погоды, ваших интересов и времени года.'}},
{q:{en:'What is the best season for chartering?',ru:'Какое лучшее время для чартера?'},a:{en:'The Adriatic season runs from May to October. June and September offer the best balance of warm weather, calm seas, and fewer crowds. July and August are peak season.',ru:'Сезон на Адриатике длится с мая по октябрь. Июнь и сентябрь — лучший баланс тёплой погоды, спокойного моря и меньше туристов. Июль и август — пик сезона.'}},
{q:{en:'How many guests can join?',ru:'Сколько гостей может быть на борту?'},a:{en:'Our yacht comfortably accommodates up to 16 guests for day charters. For weekly charters with overnight stays, the 4 cabins accommodate up to 8 guests.',ru:'Наша яхта комфортно вмещает до 16 гостей для дневных чартеров. Для недельных чартеров с ночёвкой 4 каюты вмещают до 8 гостей.'}}
];
const reviews = [
{
text:{en:'We took the Boka Bay route for our family vacation — 6 hours that felt like a dream. Our kids couldn\'t stop jumping off the yacht into the crystal-clear water near Perast. The captain anchored us in a cove where we were completely alone. Lunch at a seafood restaurant in Kotor was the cherry on top. The crew kept our toddler safe the entire time — real professionals.',ru:'Мы выбрали маршрут по Боке Которской для семейного отдыха — 6 часов, пролетевших как сон. Дети не могли остановиться, прыгая с яхты в кристально чистую воду у Пераста. Капитан встал на якорь в бухте, где мы были совершенно одни. Обед в рыбном ресторане Котора стал вишенкой на торте. Экипаж следил за нашим малышом всё время — настоящие профессионалы.'},
route:'classic-boka',
name:'James & Sarah', loc:{en:'London, UK',ru:'Лондон, Великобритания'}, stars:5,
avatar:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
},
{
text:{en:'Came for the Blue Cave and got so much more. The light inside is unreal — my iPhone photos look like they were taken on another planet. Then Mamula Island completely blew us away: swimming around a 19th-century fortress feels surreal. Captain Marko timed everything perfectly so we hit the cave at peak light. We did the 8-hour charter and every minute was worth it.',ru:'Приехали ради Голубой пещеры и получили гораздо больше. Свет внутри нереальный — фото на iPhone выглядят как с другой планеты. Потом остров Мамула полностью поразил: плавать вокруг крепости XIX века — это сюрреально. Капитан Марко рассчитал всё идеально — мы попали в пещеру на пике освещения. Взяли 8-часовой чартер и каждая минута того стоила.'},
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
text:{en:'Third summer chartering with MonteYacht — this time we did the Luštica Bay route with friends. Blue Horizon beach has the best sand in Montenegro, hands down. Then Almara Beach Club was absolutely our scene — cocktails, great DJ, yacht people everywhere. We upgraded to Premium Experience this time: the champagne and fruit platter on arrival really set the tone. Already booked for August.',ru:'Третье лето с MonteYacht — на этот раз прошли маршрут Луштица Бей с друзьями. Пляж Blue Horizon — лучший песок в Черногории, без вариантов. Потом бич-клуб Almara — это абсолютно наша атмосфера: коктейли, отличный DJ, яхтенная публика повсюду. В этот раз взяли Premium Experience: шампанское и фруктовая тарелка при встрече задали тон всему дню. Уже забронировали на август.'},
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
  name:{en:'Boka Bay',ru:'Бока Которская'},
  dur:{en:'6 hours',ru:'6 часов'},
  price:'€2,400',
  badge:{en:'Most Popular',ru:'Популярный'},
  img:'images/16-cheers-kotor.jpg',
  alt:{en:'Champagne toast with Our Lady of the Rocks in Kotor Bay',ru:'Тост шампанским на фоне Богородицы на Рифе в Которском заливе'},
  desc:{en:'The essential Montenegro experience. Cruise through Europe\'s southernmost fjord past baroque palaces, an island built by sailors over centuries, and a medieval walled city — with swimming stops in crystal-clear waters along the way.',ru:'Главный маршрут Черногории. Круиз по самому южному фьорду Европы мимо барочных дворцов, острова, созданного моряками за столетия, и средневекового города — с купанием в кристально чистых водах.'},
  audience:{en:'Families · Couples · First-time visitors',ru:'Семьи · Пары · Первый визит'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Departure from the superyacht marina',ru:'Отправление от марины суперяхт'}},
    {name:{en:'Our Lady of the Rocks',ru:'Остров Богородицы на Рифе'},note:{en:'Photo stop from the water — the island built stone by stone since 1452',ru:'Фотостоп с воды — остров, построенный камень за камнем с 1452 года'}},
    {name:{en:'Perast',ru:'Пераст'},note:{en:'Baroque waterfront town with 16 palaces — photo stop & swimming',ru:'Барочный город с 16 дворцами — фотостоп и купание'}},
    {name:{en:'Kotor Old Town',ru:'Старый город Котор'},note:{en:'UNESCO-protected medieval city — seafood restaurants & swimming in the bay',ru:'Средневековый город UNESCO — рыбные рестораны и купание в заливе'}},
    {name:{en:'Swimming stop',ru:'Купание'},note:{en:'Crystal-clear water in a secluded spot chosen by the captain',ru:'Кристально чистая вода в укромном месте, выбранном капитаном'}},
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
  desc:{en:'Chase the legendary blue glow. Time your visit for the magical midday light inside the cave, explore a 19th-century island fortress, and swim in some of the Adriatic\'s clearest waters. A full day of discovery along Montenegro\'s dramatic coastline.',ru:'За легендарным голубым сиянием. Посетите пещеру в магическое полуденное время, исследуйте островную крепость XIX века и купайтесь в чистейших водах Адриатики. Полный день открытий вдоль побережья.'},
  audience:{en:'Adventurers · Photographers · Groups',ru:'Искатели приключений · Фотографы · Группы'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Morning departure along the coast',ru:'Утренний выход вдоль побережья'}},
    {name:{en:'Blue Cave (Plava Špilja)',ru:'Голубая пещера (Плава Шпиля)'},note:{en:'Magical blue light effect — best between 11:00 and 14:00',ru:'Магический голубой свет — лучшее время с 11:00 до 14:00'}},
    {name:{en:'Mamula Island',ru:'Остров Мамула'},note:{en:'19th-century Austro-Hungarian fortress — swimming & snorkeling',ru:'Австро-венгерская крепость XIX века — купание и снорклинг'}},
    {name:{en:'Swimming & lunch stop',ru:'Купание и обед'},note:{en:'Anchor in a pristine bay — BBQ on board or restaurant ashore',ru:'Якорь в живописной бухте — BBQ на борту или ресторан на берегу'}},
    {name:{en:'Return to Porto Montenegro',ru:'Возвращение в Порто Монтенегро'},note:{en:'Relaxed cruise back along the coast',ru:'Спокойное возвращение вдоль побережья'}}
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
  desc:{en:'The perfect beach day. Start with golden sand and turquoise shallows at Blue Horizon, chase the blue glow inside the cave, then finish with cocktails and DJ sets at Almara — Montenegro\'s most exclusive beach club, popular with the superyacht crowd.',ru:'Идеальный пляжный день. Золотой песок и бирюзовое мелководье Blue Horizon, голубое сияние пещеры, а затем коктейли и DJ-сеты в Almara — самом эксклюзивном бич-клубе Черногории, любимом месте владельцев суперяхт.'},
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
  desc:{en:'For those who seek silence. Anchor at a hidden beach reachable only by boat, swim in waters so clear you can count the pebbles, then cruise to an authentic fishing village for a sunset dinner of the freshest catch — straight from the fisherman\'s net to your plate.',ru:'Для тех, кто ищет тишину. Якорь у скрытого пляжа, доступного только с воды, купание в воде настолько чистой, что видно каждый камешек, а затем — рыбацкая деревня и ужин из свежайшего улова прямо из сетей рыбака.'},
  audience:{en:'Couples · Privacy seekers · Foodies',ru:'Пары · Ценители уединения · Гурманы'},
  stops:[
    {name:{en:'Porto Montenegro',ru:'Порто Монтенегро'},note:{en:'Relaxed late-morning departure',ru:'Спокойный выход поздним утром'}},
    {name:{en:'Dobrec Beach',ru:'Пляж Добреч'},note:{en:'Wild beach reachable only by boat — hammocks, swimming, seafood restaurant',ru:'Дикий пляж, доступный только с воды — гамаки, купание, рыбный ресторан'}},
    {name:{en:'Bigova Village',ru:'Деревня Бигова'},note:{en:'Traditional fishing hamlet — sunset dinner of the day\'s catch',ru:'Рыбацкая деревня — ужин на закате из улова дня'}},
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
{id:'chef',icon:'🍽️',name:{en:'Private Chef',ru:'Личный шеф-повар'},desc:{en:'Mediterranean tasting menu prepared on board by a professional chef — 4 courses with wine pairing.',ru:'Средиземноморское дегустационное меню на борту от профессионального шеф-повара — 4 подачи с винной парой.'},price:'+€300'},
{id:'photo',icon:'📸',name:{en:'Photography Package',ru:'Фотосъёмка'},desc:{en:'Professional photographer captures your day — 50+ edited photos delivered within 48 hours.',ru:'Профессиональный фотограф — 50+ обработанных фотографий в течение 48 часов.'},price:'+€200'},
{id:'decor',icon:'🥂',name:{en:'Celebration Decor',ru:'Праздничный декор'},desc:{en:'Balloons, flowers, cake, champagne & custom banner — birthdays, proposals, anniversaries.',ru:'Шары, цветы, торт, шампанское и баннер — дни рождения, предложения, годовщины.'},price:'+€150'},
{id:'scooter',icon:'🤿',name:{en:'Underwater Scooter',ru:'Подводный скутер'},desc:{en:'Explore beneath the surface — electric underwater scooter for effortless diving adventures.',ru:'Исследуйте подводный мир — электрический подводный скутер для лёгкого дайвинга.'},price:'+€100'}
];
const premiumBundle = {
name:{en:'Premium Experience',ru:'Премиум впечатление'},
desc:{en:'Chef + Photography + Celebration Decor + Underwater Scooter — all four at a special rate.',ru:'Шеф-повар + Фотосъёмка + Праздничный декор + Подводный скутер — всё четыре по специальной цене.'},
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
desc:{en:'Two full days exploring Boka Bay and the open coast — one night anchored under the stars. Wake up to mountains, coffee on the deck, and a full second day of discovery.',ru:'Два полных дня по Боке Которской и открытому побережью — ночь под звёздами. Просыпайтесь среди гор, кофе на палубе и полный второй день открытий.'},
itinerary:[
{day:1,title:{en:'Boka Bay & Perast',ru:'Бока Которская и Пераст'},desc:{en:'Depart Porto Montenegro → Our Lady of the Rocks → Perast → Kotor Old Town → anchor for overnight in a secluded bay',ru:'Отправление из Порто Монтенегро → Богородица на Рифе → Пераст → Старый Котор → якорь на ночь в уединённой бухте'}},
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
desc:{en:'The complete Montenegro by sea. Three days, two nights aboard — every highlight from the fjord to the Blue Cave, hidden beaches, fishing villages, and beach clubs.',ru:'Полная Черногория с моря. Три дня, две ночи на борту — все жемчужины от фьорда до Голубой пещеры, скрытые пляжи, рыбацкие деревни и бич-клубы.'},
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
desc:{en:'Five days of pure freedom. The full Montenegrin coast at your pace — combine every route, revisit favourite spots, add a day in Croatia\'s Prevlaka, and enjoy four nights sleeping on the water.',ru:'Пять дней полной свободы. Всё побережье Черногории в вашем ритме — все маршруты, возврат к любимым местам, день в хорватской Превлаке и четыре ночи на воде.'},
itinerary:[
{day:1,title:{en:'Boka Bay',ru:'Бока Которская'},desc:{en:'Porto Montenegro → Perast → Kotor → overnight in the fjord',ru:'Порто Монтенегро → Пераст → Котор → ночь во фьорде'}},
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
<a href="https://wa.me/38268758345?text=${encodeURIComponent(lang==='ru'?'Здравствуйте! Хочу заказать пакет Премиум впечатление':'Hi! I\'d like to book the Premium Experience package')}" class="btn btn-gold btn-sm" target="_blank" rel="noopener">WhatsApp <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
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
} catch (err) {
console.error('Gift form send error:', err);
btn.disabled = false;
btn.textContent = T[currentLang].gift_f_submit;
alert(currentLang === 'ru' ? 'Ошибка отправки. Попробуйте WhatsApp или позвоните нам.' : 'Submission error. Try WhatsApp or call us directly.');
}
});
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
const lb = document.getElementById('lightbox');
if (lb) lb.addEventListener('click', closeLightbox);
});