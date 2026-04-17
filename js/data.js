/* ═══════════════════════════════════════════════
   FARAH — Mock Data & LocalStorage Helpers
═══════════════════════════════════════════════ */

const VENDORS = [
  {
    id: 1,
    name: "Eden Events by Abdullah",
    nameAr: "إيدن إيفينتس",
    category: "Music",
    city: "Richardson, TX",
    price: 0,
    priceUnit: "event",
    rating: 5.0,
    reviews: 87,
    tags: ["Arabic DJ", "Wedding Planning", "Full Decor", "One-Stop Shop"],
    badge: "DFW Favorite",
    badgeType: "gold",
    emoji: "🎧",
    gradient: "linear-gradient(135deg,#1a1a1a22,#c9a84c33)",
    phone: "(469) 334-9946",
    email: "Info@EdenEventsbyAbdullah.com",
    instagram: "@djabdullah_dallas",
    website: "edeneventsbyabdullah.com",
    about: "DJ Abdullah (Abdullah Dahduli) is Dallas's premier Arab wedding DJ with 15+ years of experience spinning Arabic, multicultural, and fusion music at weddings across DFW and internationally. His company Eden Events by Abdullah is a true one-stop shop — DJ, full wedding planning, design, and decor all under one roof. Based in Richardson, TX.",
    services: ["Arabic Wedding DJ", "Multicultural & Fusion Music", "Full Wedding Planning", "Wedding Design & Decor", "Vendor Coordination", "Sound System & Lighting", "MC Services", "International Bookings"],
    reviewList: [
      { name: "Rania & Kareem", initial: "ر", stars: 5, date: "Mar 2025", text: "DJ Abdullah had our entire family on the dance floor all night. He knows every Arabic song and mixed in dabke seamlessly. Eden Events also handled our decor — everything was stunning." },
      { name: "Dina Haddad", initial: "د", stars: 5, date: "Nov 2025", text: "Booking Eden Events was the best decision we made. Abdullah handled the DJ, decor, and coordinated all our other vendors. So stress-free!" }
    ]
  },
  {
    id: 2,
    name: "4K Weddings — Mo Jayyousi",
    nameAr: "تصوير جيوسي",
    category: "Photography",
    city: "Dallas, TX",
    price: 0,
    priceUnit: "package",
    rating: 5.0,
    reviews: 63,
    tags: ["Wedding Films", "Engagement Sessions", "Destination Weddings", "Arab Weddings"],
    badge: "Arab-Owned",
    badgeType: "crimson",
    emoji: "📷",
    gradient: "linear-gradient(135deg,#8b1a1a22,#1a1a1a22)",
    phone: "",
    email: "mo.jayyousi@gmail.com",
    instagram: "@mo.jayyousi",
    website: "photography4k.com",
    about: "Mo Jayyousi is a Dallas-based Palestinian-American wedding photographer with a gift for capturing feeling, not just moments. His tagline says it all: 'Photography is not looking, it's feeling.' Mo covers weddings across DFW and travels nationally and internationally for destination weddings.",
    services: ["Full Day Wedding Coverage", "Wedding Videography", "Engagement Sessions", "Destination Weddings", "Portraits & Events", "Online Gallery Delivery", "Arabic-Speaking Photographer"],
    reviewList: [
      { name: "Leila Jayyousi", initial: "ل", stars: 5, date: "Jun 2025", text: "Mo captured every emotional moment of our wedding with such artistry. He understood our Palestinian family dynamics perfectly and the photos are breathtaking." },
      { name: "Omar Nassar", initial: "ع", stars: 5, date: "Sep 2025", text: "From our engagement shoot to the wedding day, Mo was professional, creative, and felt like family. Highly recommend to any Arab couple in DFW." }
    ]
  },
  {
    id: 3,
    name: "Makan Coffee Co.",
    nameAr: "مكان للقهوة",
    category: "Catering",
    city: "DFW Metroplex",
    price: 0,
    priceUnit: "event",
    rating: 4.9,
    reviews: 41,
    tags: ["Arabic Coffee Cart", "Qahwa", "Mobile Bar", "Wedding Activations"],
    badge: "Trending",
    badgeType: "gold",
    emoji: "☕",
    gradient: "linear-gradient(135deg,#c9a84c33,#007a3d11)",
    phone: "",
    email: "",
    instagram: "@makancoffeeco",
    website: "makancoffeeco.com",
    about: "Makan Coffee Co. (مكان — meaning 'place' in Arabic) is DFW's most sought-after mobile Arabic coffee cart, bringing the art of traditional qahwa service to weddings and events across the entire metroplex. Founded in 2022, Makan has become a must-have touch at Arab weddings — the coffee cart your guests will be talking about.",
    services: ["Mobile Arabic Coffee Cart", "Traditional Qahwa (Cardamom Coffee)", "Espresso & Specialty Drinks", "Wedding & Corporate Events", "Graduations & Parties", "Full Setup & Service Crew", "DFW-Wide Coverage"],
    reviewList: [
      { name: "Yasmin Abu-Ali", initial: "ي", stars: 5, date: "Apr 2025", text: "The Makan coffee cart was the highlight of our reception! Guests lined up all night for the qahwa. Such a beautiful cultural touch and the setup looked gorgeous." },
      { name: "Khalid Rimawi", initial: "خ", stars: 5, date: "Jul 2025", text: "Book them immediately — they get booked up fast. The qahwa was authentic and delicious and the whole cart setup was so aesthetic. مبروك!" }
    ]
  },
  {
    id: 4,
    name: "Mustaqbal Dallas Dabke",
    nameAr: "فرقة المستقبل للفنون",
    category: "Music",
    city: "Dallas, TX",
    price: 1500,
    priceUnit: "package",
    rating: 5.0,
    reviews: 22,
    tags: ["Dabke Troupe", "Zaffa", "Dahiya", "Live Palestinian Music"],
    badge: "New",
    badgeType: "green",
    emoji: "🪗",
    gradient: "linear-gradient(135deg,#007a3d11,#8b1a1a22)",
    phone: "",
    email: "",
    instagram: "@dallasdabke",
    website: "dallasdabke.dudaone.com",
    about: "Mustaqbal (Future) Dallas Dabke Group is a Palestinian cultural ensemble preserving the ancient art of dabke, zaffa, and dahiya for DFW weddings and events. Led by Palestinian-American artist Aladeen Alhayek — singer, songwriter, and dancer with 6+ years of performance experience — Mustaqbal brings authentic Palestinian folk tradition to your celebration.",
    services: ["Zaffa (Wedding Processional, ~5 members)", "Dabke (Palestinian Folk Dance)", "Dahiya (Call-and-Response)", "Live Folkloric Music", "Combined Packages", "DFW & Out-of-Area Bookings"],
    reviewList: [
      { name: "Sana Alhayek", initial: "س", stars: 5, date: "Jan 2026", text: "Mustaqbal performed at our wedding and brought tears to our parents' eyes. Pure Palestinian heritage, incredible energy. Aladeen's voice is stunning." },
      { name: "Rami Daher", initial: "ر", stars: 5, date: "Feb 2026", text: "The zaffa was unforgettable. Our guests went wild for the dabke. You NEED to book them for any Palestinian wedding in Dallas." }
    ]
  },
  {
    id: 5,
    name: "Nour B. Photography",
    nameAr: "نور للتصوير",
    category: "Photography",
    city: "Dallas, TX",
    price: 1500,
    priceUnit: "package",
    rating: 4.9,
    reviews: 134,
    tags: ["Arabic-Speaking", "Natural Moments", "Muslim Weddings", "250+ Couples"],
    badge: "Top Rated",
    badgeType: "gold",
    emoji: "📸",
    gradient: "linear-gradient(135deg,#c9a84c22,#8b1a1a11)",
    phone: "",
    email: "queenb@nourbphotography.com",
    instagram: "@nourbphotography",
    website: "nourbphotography.com",
    about: "Nour Bajbouj is one of DFW's most beloved Arab wedding photographers — fluent in Arabic (بحكي عربي), deeply familiar with Arab and Muslim wedding traditions, and trusted by 250+ couples. With 30K Instagram followers and a reputation for authentic, emotion-filled storytelling, Nour is the go-to photographer for Arab and Palestinian couples in DFW.",
    services: ["Full Wedding Photography", "Engagement Sessions", "Arabic-Speaking Photographer", "Muslim Wedding Specialist", "Family & Bridal Portraits", "Graduation & Events", "Weekend Minimum 3 Hours", "Online Gallery Delivery"],
    reviewList: [
      { name: "Hana Bajbouj", initial: "ح", stars: 5, date: "Aug 2025", text: "Nour speaks Arabic, she understands our culture, she knows exactly when to capture the moments that matter. She felt like a family member at our wedding." },
      { name: "Lama Khalil", initial: "ل", stars: 5, date: "Oct 2025", text: "250 couples can't be wrong. Nour is exceptional. My photos are everything I dreamed of and more." }
    ]
  },
  {
    id: 6,
    name: "Ayat Palestinian Restaurant",
    nameAr: "آيات",
    category: "Catering",
    city: "Richardson, TX",
    price: 0,
    priceUnit: "guest",
    rating: 4.9,
    reviews: 58,
    tags: ["Mansaf", "Maklouba", "Palestinian Cuisine", "Event Catering"],
    badge: "Palestinian-Owned",
    badgeType: "crimson",
    emoji: "🍽️",
    gradient: "linear-gradient(135deg,#007a3d11,#c9a84c22)",
    phone: "(214) 272-8490",
    email: "",
    instagram: "@ayat.nyc",
    website: "ayatnyc.com/location/dallas",
    about: "Ayat (آيات) brings authentic Palestinian home cooking to Richardson, TX — the first Texas location of the acclaimed Brooklyn restaurant named after owner Abdul Elenani's Palestinian wife. Their signature Mansaf (bone-in lamb over jameed yogurt sauce) and Maklouba are perfect centerpieces for any Palestinian wedding feast. Opened February 2026 on the Richardson Arab corridor.",
    services: ["Full Wedding & Event Catering", "Mansaf (Bone-in Lamb)", "Maklouba (Upside-Down Rice)", "Mezze Spreads", "Shawarma Stations", "Family-Style Platters", "Halal Certified", "Online Catering Orders"],
    reviewList: [
      { name: "Mariam Elenani", initial: "م", stars: 5, date: "Mar 2026", text: "The mansaf took me straight back to Palestine. My grandmother approved — and that is the highest compliment possible. Ayat catered our walima perfectly." },
      { name: "Faris Odeh", initial: "ف", stars: 5, date: "Feb 2026", text: "The maklouba was stunning — six layers of perfection. Ayat is the real deal. So happy they opened in Richardson." }
    ]
  },
  {
    id: 7,
    name: "Ramallah Bakery",
    nameAr: "مخبز رام الله",
    category: "Sweets",
    city: "Richardson, TX",
    price: 0,
    priceUnit: "order",
    rating: 4.8,
    reviews: 95,
    tags: ["Fresh Pita", "Baklava", "Arabic Pastries", "Manakeesh"],
    badge: "Community Staple",
    badgeType: "gold",
    emoji: "🥐",
    gradient: "linear-gradient(135deg,#c9a84c22,#007a3d11)",
    phone: "(469) 610-6243",
    email: "",
    instagram: "@ramallahbakery",
    website: "",
    about: "Ramallah Bakery (مخبز رام الله) is a beloved Richardson institution — the heart of DFW's Arab community. Known for the best fresh whole-wheat pita in Texas, handmade Arabic pastries, baklava, manakeesh, and savory pies. A natural partner for wedding sweets tables, day-of catering, and pre-wedding events. Open daily 7am–7pm on the Richardson Arab corridor.",
    services: ["Fresh Handmade Pita Bread", "Baklava & Arabic Sweets", "Manakeesh (Za'atar & Cheese)", "Meat Pies & Falafel", "Wedding Sweets Trays", "Arabic Pastry Platters", "Mini Market (Arabic Goods)", "Daily 7am–7pm"],
    reviewList: [
      { name: "Nadine Rimawi", initial: "ن", stars: 5, date: "Jan 2026", text: "This bakery is Palestine in Richardson. The pita is pillowy and perfect, the baklava is just like home. We ordered sweets trays for our entire wedding and everyone asked where they came from." },
      { name: "Tariq Salem", initial: "ط", stars: 5, date: "Nov 2025", text: "Best bakery in DFW. Period. The manakeesh alone is worth the trip and their custom sweets trays for our engagement party were a huge hit." }
    ]
  },
  {
    id: 8,
    name: "Henna by Zohra",
    nameAr: "حناء زهرة",
    category: "Henna",
    city: "Carrollton, TX",
    price: 200,
    priceUnit: "session",
    rating: 4.9,
    reviews: 112,
    tags: ["Arabic Henna", "Bridal Mehndi", "Party Packages", "16K Following"],
    badge: "DFW Favorite",
    badgeType: "gold",
    emoji: "🌿",
    gradient: "linear-gradient(135deg,#8b1a1a11,#c9a84c33)",
    phone: "(469) 226-9800",
    email: "",
    instagram: "@hennabyzohra",
    website: "ibridalhenna.com",
    about: "Henna by Zohra is one of DFW's most celebrated bridal henna artists, with 16,000+ Instagram followers and a reputation for stunning Arabic and bridal mehndi designs. Based in Carrollton, Zohra serves the entire DFW metroplex and specializes in Arabic-style henna perfect for Palestinian and Arab weddings.",
    services: ["Full Bridal Henna (Arabic Style)", "Engagement Henna", "Henna Night Party Packages", "South Asian Bridal Mehndi", "Guest Henna at Events", "Home & Venue Visits", "All-Occasion Henna", "DFW-Wide Coverage"],
    reviewList: [
      { name: "Ruba Haddad", initial: "ر", stars: 5, date: "May 2025", text: "Zohra is incredibly talented. My Arabic bridal henna was the most intricate and beautiful design I've ever seen. All my guests were in awe." },
      { name: "Sara Barghouthi", initial: "س", stars: 5, date: "Aug 2025", text: "Booked Zohra for our henna night — she did the bride and 12 guests. Every design was unique and gorgeous. She works fast and the atmosphere she creates is so festive." }
    ]
  },
  {
    id: 9,
    name: "Sababa Mediterranean Cuisine",
    nameAr: "صبابا للمطبخ المتوسطي",
    category: "Catering",
    city: "Richardson, TX",
    price: 0,
    priceUnit: "guest",
    rating: 4.7,
    reviews: 78,
    tags: ["Mediterranean", "Halal", "Event Catering", "Private Dining"],
    badge: null,
    badgeType: null,
    emoji: "🫕",
    gradient: "linear-gradient(135deg,#007a3d11,#8b1a1a11)",
    phone: "(972) 907-8200",
    email: "",
    instagram: "@sababamediterraneancuisine",
    website: "sababacuisine.com",
    about: "Sababa Mediterranean Cuisine has been serving Richardson's Arab community since 2013 with authentic halal Mediterranean food. Their private party room makes them a great option for smaller wedding receptions, engagement parties, and bridal showers. Located at the heart of Richardson's Arab corridor.",
    services: ["Wedding & Event Catering", "Private Party Room", "Halal Certified Menu", "Kufta Kabob & Shawarma", "Mezze Spreads (Hummus, Baba Ghannouj)", "Falafel & Salads", "Office & Corporate Catering", "On-Site Restaurant Dining"],
    reviewList: [
      { name: "Ahmad Sabbagh", initial: "أ", stars: 5, date: "Dec 2025", text: "We hosted our engagement party in Sababa's private room. The food was fresh, authentic, and the staff were so accommodating. Perfect spot for smaller celebrations." },
      { name: "Lina Khalil", initial: "ل", stars: 4, date: "Sep 2025", text: "Great halal Mediterranean catering for our walima. The kufta kabob and hummus were crowd favorites. Reliable and delicious." }
    ]
  },
  {
    id: 10,
    name: "Afrah Mediterranean Restaurant",
    nameAr: "مطعم أفرح المتوسطي",
    category: "Catering",
    city: "Richardson, TX",
    price: 40,
    priceUnit: "guest",
    rating: 4.8,
    reviews: 210,
    tags: ["Lebanese Cuisine", "Banquet Hall", "Baklava & Sweets", "Since 2002"],
    badge: "Richardson Icon",
    badgeType: "gold",
    emoji: "🥐",
    gradient: "linear-gradient(135deg,#c9a84c22,#8b1a1a11)",
    phone: "(972) 234-9898",
    email: "",
    instagram: "@afrah_restaurant",
    website: "afrah.com",
    about: "Afrah Mediterranean Restaurant & Pastries has been a cornerstone of Richardson's Arab community since 2002 — started as a pastry shop and grew into a beloved full restaurant. Renowned for their stunning Arabic sweets (baklava, kunafeh, homemade gelato) and private banquet packages for 25–50 guests. Located at 318 E Main St, the heart of Richardson's Arab corridor. Featured in Dallas Morning News and D Magazine.",
    services: ["Private Banquet (25–50 guests, from $40/person)", "Full Wedding Catering", "Kunafeh & Baklava Stations", "Homemade Gelato Bar", "Arabic Sweets Platters", "Mezze & Appetizers", "Mediterranean Entrées", "Halal Certified"],
    reviewList: [
      { name: "Nadia Khalil", initial: "ن", stars: 5, date: "Feb 2026", text: "Afrah catered our walima and it was perfect. The baklava tower was a showstopper and the kunafeh had guests fighting over the last piece. A Richardson institution for a reason." },
      { name: "Hani Barakat", initial: "ح", stars: 5, date: "Nov 2025", text: "We used the private banquet room for our engagement party — 45 guests. The staff were incredible, the food was fresh and authentic, and the whole setup was beautiful." }
    ]
  },
  {
    id: 11,
    name: "Fadia's Deli & Bakery",
    nameAr: "مخبز فاديا",
    category: "Sweets",
    city: "Plano, TX",
    price: 0,
    priceUnit: "order",
    rating: 4.7,
    reviews: 143,
    tags: ["Baklava", "Knafeh", "Maamoul", "Fresh Flatbread"],
    badge: "Arab-Owned",
    badgeType: "crimson",
    emoji: "🧆",
    gradient: "linear-gradient(135deg,#007a3d11,#c9a84c22)",
    phone: "(972) 918-9998",
    email: "",
    instagram: "@fadias.bakery",
    website: "fadias.com",
    about: "Fadia's Deli & Bakery is a treasured Plano institution serving DFW's Arab community with authentic Palestinian and Mediterranean baked goods. Famous for handmade baklava, maamoul, knafeh, fresh flatbread, kibbeh, and mezze. A go-to source for wedding sweets trays and pre-wedding celebration catering. Located at 910 W Parker Rd, Plano — open Mon–Fri 9am–7pm, Sat 9am–5pm.",
    services: ["Baklava & Arabic Sweets Trays", "Maamoul (Date & Walnut)", "Knafeh", "Fresh Handmade Flatbread", "Wedding Sweets Platters", "Hummus, Tabouli & Mezze", "Kibbeh & Falafel", "Custom Catering Orders"],
    reviewList: [
      { name: "Rima Haddad", initial: "ر", stars: 5, date: "Jan 2026", text: "We ordered custom sweets trays from Fadia's for our wedding — the maamoul and baklava were better than anything I've had outside of Palestine. The whole family was impressed." },
      { name: "Yousef Salem", initial: "ي", stars: 5, date: "Oct 2025", text: "This place is a hidden gem in Plano. The knafeh is incredible and the fresh flatbread is pillowy perfection. Ordered a full sweets spread for our engagement party and got so many compliments." }
    ]
  },
  {
    id: 12,
    name: "Crew7 Photography",
    nameAr: "كرو سيفن للتصوير",
    category: "Photography",
    city: "Dallas, TX",
    price: 1175,
    priceUnit: "package",
    rating: 4.9,
    reviews: 88,
    tags: ["Arabic-Speaking", "Zaffa & Dabke", "8K Multi-Camera", "Nationwide"],
    badge: "Arab Wedding Specialist",
    badgeType: "gold",
    emoji: "🎬",
    gradient: "linear-gradient(135deg,#1a1a1a22,#c9a84c22)",
    phone: "(214) 972-2798",
    email: "sales@crew7photography.com",
    instagram: "@crew7photography",
    website: "crew7photography.com",
    about: "Crew7 Photography is DFW's premier Arab and multicultural wedding photography team. Specializing in Arab, Palestinian, and Muslim weddings, their multilingual staff includes Arabic-speaking photographers who deeply understand cultural ceremony traditions. Known for cinematic 8K multi-camera setups, zaffa procession coverage, and capturing dabke with the energy it deserves. Serving DFW and available nationwide.",
    services: ["Full Wedding Photography", "Cinematic Wedding Videography", "Arabic-Speaking Photographer", "Zaffa Procession Coverage", "Dabke & Cultural Moments", "Engagement Sessions", "8K Multi-Camera Setup", "DFW & Nationwide Travel"],
    reviewList: [
      { name: "Lara Mansour", initial: "ل", stars: 5, date: "Mar 2026", text: "Crew7 captured our entire zaffa and dabke with such energy and detail. The Arabic-speaking photographer made our family so comfortable. The 8K video is breathtaking." },
      { name: "Kareem Abu-Khalil", initial: "ك", stars: 5, date: "Dec 2025", text: "We needed a team that understood Palestinian wedding traditions and Crew7 delivered beyond expectations. They knew exactly when to shoot, who to focus on, and how to preserve every moment." }
    ]
  }
];

const CHECKLIST_ITEMS = [
  { id: "c1",  section: "12+ Months Before",  text: "Set your wedding date",             done: false },
  { id: "c2",  section: "12+ Months Before",  text: "Set your overall budget",           done: false },
  { id: "c3",  section: "12+ Months Before",  text: "Create your guest list",            done: false },
  { id: "c4",  section: "12+ Months Before",  text: "Book your venue",                   done: false },
  { id: "c5",  section: "9–12 Months Before", text: "Book photographer & videographer", done: false },
  { id: "c6",  section: "9–12 Months Before", text: "Book your music / dabke band",      done: false },
  { id: "c7",  section: "9–12 Months Before", text: "Choose your catering",              done: false },
  { id: "c8",  section: "9–12 Months Before", text: "Start bridal thobe / gown search",  done: false },
  { id: "c9",  section: "6–9 Months Before",  text: "Send save-the-dates",              done: false },
  { id: "c10", section: "6–9 Months Before",  text: "Book henna artist",                done: false },
  { id: "c11", section: "6–9 Months Before",  text: "Book hair & makeup artist",        done: false },
  { id: "c12", section: "6–9 Months Before",  text: "Plan honeymoon travel",            done: false },
  { id: "c13", section: "3–6 Months Before",  text: "Order wedding invitations",        done: false },
  { id: "c14", section: "3–6 Months Before",  text: "Book floral / décor vendor",       done: false },
  { id: "c15", section: "3–6 Months Before",  text: "Book sweets / cake vendor",        done: false },
  { id: "c16", section: "3–6 Months Before",  text: "Arrange transportation",           done: false },
  { id: "c17", section: "1–3 Months Before",  text: "Send wedding invitations",         done: false },
  { id: "c18", section: "1–3 Months Before",  text: "Confirm all vendor bookings",      done: false },
  { id: "c19", section: "1–3 Months Before",  text: "Final dress / thobe fittings",     done: false },
  { id: "c20", section: "1–3 Months Before",  text: "Create wedding day timeline",      done: false },
  { id: "c21", section: "Final Week",         text: "Confirm headcount with caterer",   done: false },
  { id: "c22", section: "Final Week",         text: "Prepare payments for vendors",     done: false },
  { id: "c23", section: "Final Week",         text: "Henna night preparations",         done: false },
  { id: "c24", section: "Final Week",         text: "Rest, breathe, enjoy — مبروك!",   done: false },
];

const BUDGET_CATEGORIES = [
  { id: "b_venue",    icon: "🏛️", name: "Venue",          amount: 0 },
  { id: "b_catering", icon: "🍽️", name: "Catering",       amount: 0 },
  { id: "b_photo",    icon: "📸", name: "Photography",    amount: 0 },
  { id: "b_music",    icon: "🎶", name: "Music & Dabke",  amount: 0 },
  { id: "b_flowers",  icon: "🌸", name: "Flowers",        amount: 0 },
  { id: "b_fashion",  icon: "👗", name: "Fashion",        amount: 0 },
  { id: "b_henna",    icon: "🌿", name: "Henna",          amount: 0 },
  { id: "b_other",    icon: "✨", name: "Other",          amount: 0 },
];

/* ─────────────────────────────────────
   STORAGE HELPERS
───────────────────────────────────── */
const Storage = {
  get: (key, fallback = null) => {
    try { const v = localStorage.getItem('farah_' + key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (key, value) => {
    try { localStorage.setItem('farah_' + key, JSON.stringify(value)); } catch {}
  },
  remove: (key) => { localStorage.removeItem('farah_' + key); }
};

/* ─────────────────────────────────────
   AUTH HELPERS
───────────────────────────────────── */
const Auth = {
  getUsers: ()        => Storage.get('users', []),
  getCurrentUser: ()  => Storage.get('current_user', null),
  isLoggedIn: ()      => !!Auth.getCurrentUser(),

  register(name, email, password, type) {
    const users = Auth.getUsers();
    if (users.find(u => u.email === email)) return { ok: false, msg: 'Email already registered.' };
    const user = { id: Date.now(), name, email, password, type, createdAt: new Date().toISOString() };
    users.push(user);
    Storage.set('users', users);
    Storage.set('current_user', user);
    return { ok: true, user };
  },

  login(email, password) {
    const users = Auth.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, msg: 'Incorrect email or password.' };
    Storage.set('current_user', user);
    return { ok: true, user };
  },

  logout() {
    Storage.remove('current_user');
    window.location.href = 'index.html';
  },

  requireLogin(redirectBack) {
    if (!Auth.isLoggedIn()) {
      const rb = redirectBack || window.location.href;
      window.location.href = 'auth.html?redirect=' + encodeURIComponent(rb);
      return false;
    }
    return true;
  }
};

/* ─────────────────────────────────────
   WISHLIST
───────────────────────────────────── */
const Wishlist = {
  _key() { const u = Auth.getCurrentUser(); return u ? `wishlist_${u.id}` : 'wishlist_guest'; },
  get()       { return Storage.get(this._key(), []); },
  has(id)     { return this.get().includes(id); },
  toggle(id)  {
    const list = this.get();
    const idx = list.indexOf(id);
    if (idx >= 0) list.splice(idx, 1); else list.push(id);
    Storage.set(this._key(), list);
    return idx < 0; // true = added
  },
  getVendors() { return this.get().map(id => VENDORS.find(v => v.id === id)).filter(Boolean); }
};

/* ─────────────────────────────────────
   INQUIRIES / BOOKINGS
───────────────────────────────────── */
const Inquiries = {
  getAll()    { return Storage.get('inquiries', []); },
  getForUser(userId) { return this.getAll().filter(i => i.userId === userId); },
  getForVendor(vendorId) { return this.getAll().filter(i => i.vendorId === vendorId); },
  add(vendorId, message, date, userId, userName) {
    const all = this.getAll();
    const inq = { id: Date.now(), vendorId, userId, userName, message, date, status: 'pending', createdAt: new Date().toISOString() };
    all.push(inq);
    Storage.set('inquiries', all);
    return inq;
  }
};

/* ─────────────────────────────────────
   CHECKLIST
───────────────────────────────────── */
const Checklist = {
  _key() { const u = Auth.getCurrentUser(); return u ? `checklist_${u.id}` : 'checklist_guest'; },
  get() {
    const saved = Storage.get(this._key(), null);
    if (saved) return saved;
    return JSON.parse(JSON.stringify(CHECKLIST_ITEMS));
  },
  save(items) { Storage.set(this._key(), items); },
  toggle(id) {
    const items = this.get();
    const item = items.find(i => i.id === id);
    if (item) { item.done = !item.done; this.save(items); }
    return items;
  }
};

/* ─────────────────────────────────────
   BUDGET
───────────────────────────────────── */
const Budget = {
  _key() { const u = Auth.getCurrentUser(); return u ? `budget_${u.id}` : 'budget_guest'; },
  get() {
    return Storage.get(this._key(), {
      total: 10000,
      categories: JSON.parse(JSON.stringify(BUDGET_CATEGORIES))
    });
  },
  save(data) { Storage.set(this._key(), data); },
  setTotal(amount) {
    const b = this.get(); b.total = amount; this.save(b);
  },
  updateCategory(id, amount) {
    const b = this.get();
    const cat = b.categories.find(c => c.id === id);
    if (cat) { cat.amount = amount; this.save(b); }
  },
  getSpent() { return this.get().categories.reduce((sum, c) => sum + (c.amount || 0), 0); }
};

/* ─────────────────────────────────────
   WEDDING DATE
───────────────────────────────────── */
const WeddingDate = {
  _key() { const u = Auth.getCurrentUser(); return u ? `wdate_${u.id}` : 'wdate_guest'; },
  get()  { return Storage.get(this._key(), ''); },
  set(d) { Storage.set(this._key(), d); },
  daysUntil() {
    const d = this.get(); if (!d) return null;
    const diff = new Date(d) - new Date();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }
};

/* ─────────────────────────────────────
   UTILITIES
───────────────────────────────────── */
function formatCurrency(n) { return '$' + Number(n).toLocaleString(); }

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return s || '☆';
}

function showToast(msg, type = 'info') {
  const container = document.getElementById('toast-container') || (() => {
    const el = document.createElement('div');
    el.id = 'toast-container'; el.className = 'toast-container';
    document.body.appendChild(el); return el;
  })();
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  const icons = { success: '✔', error: '✖', info: 'ℹ' };
  t.innerHTML = `<span>${icons[type] || 'ℹ'}</span><span>${msg}</span>`;
  container.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 260); }, 3200);
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
