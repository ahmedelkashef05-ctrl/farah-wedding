/* ═══════════════════════════════════════════════
   FARAH — Mock Data & LocalStorage Helpers
═══════════════════════════════════════════════ */

const VENDORS = [
  {
    id: 1,
    name: "Majd Bishara Studio",
    nameAr: "ستوديو مجد بشارة",
    category: "Photography",
    city: "Ramallah",
    price: 1200,
    priceUnit: "day",
    rating: 5.0,
    reviews: 48,
    tags: ["Wedding Films", "Drone Shots", "Tatreez Portraits"],
    badge: "Featured",
    badgeType: "gold",
    emoji: "📸",
    gradient: "linear-gradient(135deg,#c9a84c22,#8b1a1a22)",
    phone: "+970 59 123 4567",
    email: "majd@bisharastudio.ps",
    instagram: "@majdbishara",
    website: "bisharastudio.ps",
    about: "Majd Bishara Studio has been capturing Palestinian weddings for over 12 years. We specialize in blending traditional tatreez and cultural elements with modern cinematic storytelling. Every wedding is a love letter to Palestine.",
    services: ["Full Day Coverage", "Cinematic Wedding Film", "Same-Day Edit", "Drone Aerial Shots", "Tatreez Detail Portraits", "Engagement Session", "Online Gallery", "Prints & Albums"],
    reviewList: [
      { name: "Layla Mansour", initial: "ل", stars: 5, date: "Oct 2025", text: "Majd captured our wedding in Ramallah with so much heart. The tatreez detail shots were breathtaking — our grandmothers were in tears. Highly recommend!" },
      { name: "Sara Khalil", initial: "س", stars: 5, date: "Aug 2025", text: "The cinematic film he produced was beyond our expectations. Every frame tells a story. Worth every penny." }
    ]
  },
  {
    id: 2,
    name: "Qasr Al Zaytoun",
    nameAr: "قصر الزيتون",
    category: "Venue",
    city: "Bethlehem",
    price: 3500,
    priceUnit: "event",
    rating: 4.9,
    reviews: 72,
    tags: ["Outdoor Garden", "600 Guests", "Olive Grove"],
    badge: "Popular",
    badgeType: "crimson",
    emoji: "🏛️",
    gradient: "linear-gradient(135deg,#8b1a1a22,#1a1a1a11)",
    phone: "+970 2 274 1234",
    email: "info@qasrzaytoun.ps",
    instagram: "@qasrzaytoun",
    website: "qasrzaytoun.ps",
    about: "Nestled among ancient olive groves in Beit Jala, Qasr Al Zaytoun is Bethlehem's most celebrated wedding venue. Our grounds host up to 600 guests under the stars, surrounded by the land our ancestors cultivated for generations.",
    services: ["Outdoor Garden (600 guests)", "Indoor Ballroom (300 guests)", "Bridal Suite", "Catering Coordination", "Sound System", "Lighting Setup", "Valet Parking", "On-Site Coordinator"],
    reviewList: [
      { name: "Nadia Odeh", initial: "ن", stars: 5, date: "Dec 2025", text: "There is nowhere more beautiful to get married in Palestine. The olive trees, the mountain view, the staff — everything was perfect." },
      { name: "Hana Barakat", initial: "ح", stars: 5, date: "Sep 2025", text: "Our 500-guest wedding ran seamlessly. The venue team was professional and the setting was magical." }
    ]
  },
  {
    id: 3,
    name: "Sufra Catering",
    nameAr: "سفرة كاترينج",
    category: "Catering",
    city: "Nablus",
    price: 28,
    priceUnit: "guest",
    rating: 4.8,
    reviews: 91,
    tags: ["Musakhan", "Mansaf", "Live Stations"],
    badge: null,
    badgeType: null,
    emoji: "🍽️",
    gradient: "linear-gradient(135deg,#c9a84c22,#007a3d11)",
    phone: "+970 9 238 5678",
    email: "sufra@catering.ps",
    instagram: "@sufracatering",
    website: "sufracatering.ps",
    about: "Sufra Catering brings the authentic flavors of Palestinian cuisine to your wedding table. Founded by Chef Ayman Al-Natsheh, we've fed over 50,000 wedding guests across the West Bank with our signature musakhan, mansaf, and live cooking stations.",
    services: ["Full Wedding Catering", "Musakhan Live Station", "Mansaf Ceremony Dish", "Knafeh Dessert Bar", "Qatayef Station", "Tea & Arabic Coffee Service", "Serving Staff (1:20 ratio)", "Halal Certified"],
    reviewList: [
      { name: "Hamza Odeh", initial: "ح", stars: 5, date: "Jan 2026", text: "The musakhan was out of this world. Our guests from Jordan and Germany kept saying it was the best food they'd ever had at a wedding." },
      { name: "Rania Jaber", initial: "ر", stars: 4, date: "Nov 2025", text: "Food was absolutely delicious and staff very professional. The live knafeh station was a huge hit!" }
    ]
  },
  {
    id: 4,
    name: "Henna by Reem",
    nameAr: "حناء ريم",
    category: "Henna",
    city: "Jerusalem",
    price: 180,
    priceUnit: "session",
    rating: 5.0,
    reviews: 104,
    tags: ["Traditional Palestinian", "Bridal Package", "Home Visit"],
    badge: "Top Rated",
    badgeType: "gold",
    emoji: "🌿",
    gradient: "linear-gradient(135deg,#8b1a1a11,#c9a84c33)",
    phone: "+972 52 345 6789",
    email: "reem@henna.ps",
    instagram: "@hennabyReem",
    website: "hennabyReem.com",
    about: "Reem Al-Husseini is Jerusalem's most celebrated henna artist, trained in traditional Palestinian patterns passed down through seven generations of her family. Her intricate tatreez-inspired designs transform bridal henna into living embroidery.",
    services: ["Full Bridal Henna (both arms)", "Bridal Party Package", "Traditional Palestinian Motifs", "Home & Hotel Visits", "Night-Before Henna Party", "Feet & Arms Package", "Organic Henna Paste", "Custom Design Consultation"],
    reviewList: [
      { name: "Sara Barakat", initial: "س", stars: 5, date: "Mar 2025", text: "Reem's henna was the highlight of my wedding preparations. She incorporated my grandmother's thobe pattern into the design — I cried happy tears." },
      { name: "Maya Hassan", initial: "م", stars: 5, date: "Jun 2025", text: "I've seen a lot of henna artists but Reem is truly an artist. Traditional motifs done with such precision and love." }
    ]
  },
  {
    id: 5,
    name: "Al-Andalus Band",
    nameAr: "فرقة الأندلس",
    category: "Music",
    city: "Haifa",
    price: 2000,
    priceUnit: "night",
    rating: 4.9,
    reviews: 67,
    tags: ["Dabke Troupe", "Oud & Tabla", "Full Band"],
    badge: null,
    badgeType: null,
    emoji: "🎶",
    gradient: "linear-gradient(135deg,#1a1a1a11,#8b1a1a22)",
    phone: "+972 54 456 7890",
    email: "booking@andalusband.ps",
    instagram: "@andalusband",
    website: "andalusband.ps",
    about: "Al-Andalus Band has been the heartbeat of Palestinian weddings for 18 years. Our 12-piece ensemble features traditional oud, tabla, and mijwiz alongside a full dabke troupe — bringing the joy of Palestinian folk tradition to your celebration.",
    services: ["12-Piece Live Band", "Professional Dabke Troupe (8 dancers)", "MC & Sound System", "Traditional & Modern Arabic Music", "Custom Set List", "Oud Solo Performances", "Mizmar & Tabla", "5-Hour Performance"],
    reviewList: [
      { name: "Ahmad Khalidi", initial: "أ", stars: 5, date: "Feb 2026", text: "The dabke troupe had our guests on their feet within minutes. Best wedding entertainment we could have asked for — pure Palestinian joy." },
      { name: "Dina Mustafa", initial: "د", stars: 5, date: "Dec 2025", text: "Absolutely incredible. The oud player made my parents cry with an old Palestinian song. Unforgettable." }
    ]
  },
  {
    id: 6,
    name: "Qatayef Dreams",
    nameAr: "أحلام القطايف",
    category: "Sweets",
    city: "Ramallah",
    price: 500,
    priceUnit: "event",
    rating: 4.7,
    reviews: 55,
    tags: ["Knafeh Stations", "Baklava Towers", "Custom Cakes"],
    badge: null,
    badgeType: null,
    emoji: "🍰",
    gradient: "linear-gradient(135deg,#c9a84c22,#8b1a1a11)",
    phone: "+970 59 567 8901",
    email: "hello@qatayef.ps",
    instagram: "@qatayefdreams",
    website: "qatayefdreams.ps",
    about: "Qatayef Dreams specializes in traditional Palestinian sweets for weddings and celebrations. From towering baklava displays to live knafeh stations, we bring the sweetness of Palestinian heritage to your happiest day.",
    services: ["Live Knafeh Station", "Baklava Display Tower", "Qatayef Station", "Custom Wedding Cake", "Ma'amoul Selection", "Arabic Sweets Boxes (favors)", "Chocolate Fountain", "Full Dessert Table"],
    reviewList: [
      { name: "Sana Arafat", initial: "ص", stars: 5, date: "Apr 2025", text: "The knafeh station was the talk of our wedding. Guests were lining up all night. The custom cake was also stunning." },
      { name: "Khalid Bireh", initial: "خ", stars: 4, date: "Aug 2025", text: "Amazing sweets and very professional setup. The baklava tower was gorgeous for photos." }
    ]
  },
  {
    id: 7,
    name: "Zahrat Al-Quds Florals",
    nameAr: "زهرات القدس",
    category: "Flowers",
    city: "Bethlehem",
    price: 800,
    priceUnit: "event",
    rating: 4.9,
    reviews: 38,
    tags: ["Arch Décor", "Tatreez-Inspired", "Bridal Bouquets"],
    badge: null,
    badgeType: null,
    emoji: "🌸",
    gradient: "linear-gradient(135deg,#007a3d11,#c9a84c22)",
    phone: "+970 2 274 9012",
    email: "flowers@zahratquds.ps",
    instagram: "@zahratquds",
    website: "zahratquds.ps",
    about: "Zahrat Al-Quds creates floral arrangements inspired by the gardens of Palestine — jasmine, red anemone (the national flower), sage, and olive branches woven into modern wedding designs. We infuse every arrangement with tatreez-inspired color palettes.",
    services: ["Bridal & Bridesmaids Bouquets", "Ceremony Arch (Tatreez Style)", "Table Centerpieces", "Aisle Decoration", "Flower Wall", "Boutonnières", "Palestinian Red Anemone Arrangements", "Full Venue Floral Design"],
    reviewList: [
      { name: "Ruba Nassar", initial: "ر", stars: 5, date: "May 2025", text: "The arch she designed with red anemones and olive branches was breathtaking. So distinctly Palestinian and so beautiful." },
      { name: "Lina Rimawi", initial: "ل", stars: 5, date: "Mar 2025", text: "Every arrangement was perfect. The bridal bouquet incorporated my mother's favourite Palestinian flowers." }
    ]
  },
  {
    id: 8,
    name: "Nour Tatreez Atelier",
    nameAr: "أتيليه نور للتطريز",
    category: "Tatreez",
    city: "Hebron",
    price: 350,
    priceUnit: "piece",
    rating: 5.0,
    reviews: 82,
    tags: ["Bridal Thobe", "Custom Embroidery", "Heritage Designs"],
    badge: "Heritage",
    badgeType: "gold",
    emoji: "🧵",
    gradient: "linear-gradient(135deg,#8b1a1a22,#c9a84c33)",
    phone: "+970 2 222 3456",
    email: "nour@tatreez.ps",
    instagram: "@nourtatreez",
    website: "nourtatreez.ps",
    about: "Nour Tatreez Atelier is Hebron's premier traditional embroidery house, preserving the 4,000-year-old art of Palestinian tatreez. Our master embroiderers create custom bridal thobes, veils, and ceremonial pieces that become family heirlooms.",
    services: ["Custom Bridal Thobe", "Embroidered Veil", "Groom's Kufiya with Tatreez", "Ceremonial Belt (Hizam)", "Mother-of-Bride Thobe", "Wedding Invitations (Tatreez Print)", "Custom Wall Art", "Tatreez Wedding Favors"],
    reviewList: [
      { name: "Mariam Abu Sarhan", initial: "م", stars: 5, date: "Jun 2025", text: "My thobe was the most beautiful piece of clothing I have ever worn. They used my great-grandmother's village pattern. I will wear it to my daughter's wedding one day." },
      { name: "Dalal Natsheh", initial: "د", stars: 5, date: "Sep 2025", text: "Museum-quality embroidery. Nour is a true artist and keeper of our heritage. Every stitch tells a story." }
    ]
  },
  {
    id: 9,
    name: "Bayt Al-Dhikra Films",
    nameAr: "بيت الذكرى للأفلام",
    category: "Photography",
    city: "Diaspora — Detroit",
    price: 2400,
    priceUnit: "day",
    rating: 4.9,
    reviews: 29,
    tags: ["Cinematic", "Arabic Editing", "Same-Day Edit"],
    badge: null,
    badgeType: null,
    emoji: "🎥",
    gradient: "linear-gradient(135deg,#1a1a1a11,#c9a84c22)",
    phone: "+1 313 456 7890",
    email: "film@baytdhikra.com",
    instagram: "@baytdhikra",
    website: "baytdhikra.com",
    about: "Based in Detroit's vibrant Palestinian diaspora community, Bayt Al-Dhikra (House of Memory) Films captures weddings with a deeply cultural sensibility. We specialize in bilingual Arabic-English editing and work with Palestinian families across the US.",
    services: ["Full Day Coverage", "Cinematic Feature Film", "Arabic-English Editing", "Same-Day Highlight", "Drone Coverage", "Multi-Camera Setup", "Ceremony & Reception", "Digital Delivery + USB"],
    reviewList: [
      { name: "Mohammed Dearborn", initial: "م", stars: 5, date: "Jul 2025", text: "They understood what our Palestinian wedding meant to us. The film had Arabic captions, traditional music, and made our families in Ramallah cry with joy." }
    ]
  },
  {
    id: 10,
    name: "Handal Beauty Studio",
    nameAr: "ستوديو حندل للجمال",
    category: "Makeup",
    city: "Ramallah",
    price: 250,
    priceUnit: "session",
    rating: 4.8,
    reviews: 76,
    tags: ["Bridal Glam", "Arabic Makeup", "Hair Styling"],
    badge: null,
    badgeType: null,
    emoji: "💄",
    gradient: "linear-gradient(135deg,#c9a84c11,#8b1a1a22)",
    phone: "+970 59 678 9012",
    email: "book@handelbeauty.ps",
    instagram: "@handelbeauty",
    website: "handelbeauty.ps",
    about: "Handal Beauty Studio is Ramallah's top bridal makeup and hair destination. Our team of 8 professional artists specializes in both classic Arabic bridal glam and modern international styles, ensuring every bride looks and feels her absolute best.",
    services: ["Bridal Makeup & Hair", "Bridesmaid Packages (group rates)", "Trial Session", "Airbrush Foundation", "Lash Application", "Hair Styling (Updos, Braids)", "Touch-Up Kit", "On-Location Services"],
    reviewList: [
      { name: "Yasmin Nassar", initial: "ي", stars: 5, date: "Feb 2026", text: "I've never felt more beautiful. They understood exactly the look I wanted — traditional but modern. My makeup lasted all 8 hours!" }
    ]
  },
  {
    id: 11,
    name: "Dar Al-Eid Invitations",
    nameAr: "دار العيد للبطاقات",
    category: "Invitations",
    city: "Nablus",
    price: 3,
    priceUnit: "card",
    rating: 4.7,
    reviews: 43,
    tags: ["Tatreez Print", "Arabic Calligraphy", "Custom Design"],
    badge: null,
    badgeType: null,
    emoji: "✉️",
    gradient: "linear-gradient(135deg,#007a3d11,#8b1a1a11)",
    phone: "+970 9 238 7890",
    email: "design@dareid.ps",
    instagram: "@dareid",
    website: "dareid.ps",
    about: "Dar Al-Eid creates Palestine's most distinctive wedding stationery. Every invitation is a piece of art, featuring traditional tatreez embroidery patterns, hand-written Arabic calligraphy, and Palestinian cultural motifs printed on premium papers.",
    services: ["Custom Invitation Suite", "Tatreez Pattern Design", "Arabic Calligraphy", "Save the Dates", "Menu Cards", "Table Numbers", "Thank You Cards", "Digital Invitation Templates"],
    reviewList: [
      { name: "Amal Jaber", initial: "أ", stars: 5, date: "Mar 2026", text: "Our guests said they'd never received such beautiful wedding invitations. The tatreez border print was exquisite — many kept them as keepsakes." }
    ]
  },
  {
    id: 12,
    name: "Zumrud Bridal Boutique",
    nameAr: "زمرد للأزياء العروس",
    category: "Fashion",
    city: "Jerusalem",
    price: 1800,
    priceUnit: "gown",
    rating: 4.9,
    reviews: 61,
    tags: ["Bridal Gowns", "Traditional & Modern", "Custom Tailoring"],
    badge: "New",
    badgeType: "green",
    emoji: "👗",
    gradient: "linear-gradient(135deg,#8b1a1a11,#007a3d11)",
    phone: "+972 52 789 0123",
    email: "zumrud@bridal.ps",
    instagram: "@zumrudbridal",
    website: "zumrudbridal.ps",
    about: "Zumrud Bridal Boutique in the heart of Jerusalem offers an exquisite collection of bridal gowns blending Palestinian heritage with modern elegance. Each gown can be customized with tatreez embroidery details unique to your family's region.",
    services: ["Bridal Gown Collection", "Custom Tatreez Embroidery Add-on", "Gown Alteration & Fitting", "Traditional Thobe Collection", "Bridesmaid Dresses", "Veil & Accessories", "Groom's Suit", "Rental Options Available"],
    reviewList: [
      { name: "Heba Qasim", initial: "ح", stars: 5, date: "Jan 2026", text: "My gown was everything I dreamed of. They added embroidery from my village's tatreez pattern to the hem. I felt like I was carrying Palestine with me." }
    ]
  }
];

  // ─── DFW Real Vendors ───
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
