/**
 * SMART AUTOMATIC HAND DRYERS - PRODUCT SHOWCASE
 * Script handling product filtering, live search, product modal, 
 * cost comparison calculator, gallery lightbox, and form validation.
 */

// 1. Hand Dryer Products Catalog Data (Studio 3-Column Usage-Tier Showcase)
const handDryersData = [
  {
    id: "hd-1800-ea",
    displayTitle: "Hand Dryer HD-1800 EA",
    usageLabel: "0-100 usage per day",
    usageTier: "low",
    name: "Automatic Hand Dryer in ABS Body",
    model: "Model: HD-1800 EA",
    category: "low",
    categories: ["low", "abs", "sensor"],
    price: "₹2,850",
    origPrice: "₹3,999",
    image: "images/Hand%20Dryer%20HD-1800%20EA.png",
    galleryImages: [
      "images/hd-1800ea-real.jpg",
      "images/hd-1800ea-washroom.jpg",
      "images/hd-1800ea-clean-hands.jpg",
      "images/hd-1800ea-touch-free.jpg",
      "images/hd-1800ea-confident-you.jpg"
    ],
    badge: "0-100 usage per day",
    badgeClass: "badge-tag-teal",
    dryingTime: "10 - 12 Seconds",
    airSpeed: "85 m/s",
    power: "1800W Smart Thermal",
    noiseLevel: "65 dB Whisper Quiet",
    material: "High-Impact Glossy Fire-Retardant ABS",
    motor: "High-Efficiency Brushless Thermal Motor",
    filtration: "Antimicrobial Dust & Hygiene Pre-Filter",
    dimensions: "260 x 240 x 165 mm",
    drainTank: "Splash-Free Curved Bottom Outlet",
    sensorType: "Touch-Free Infrared Sensor (0.2s Activation)",
    warranty: "2 Years Comprehensive Warranty",
    shortDesc: "Nature Hygiene's sleek glossy white ABS automatic hand dryer with instant touchless infrared activation.",
    fullDesc: "The Nature Hygiene Hand Dryer HD-1800 EA delivers dependable, hygienic touch-free drying for corporate offices, clinics, cafes, and modern washrooms with 0-100 daily uses. Features automatic overheat cutoff and low-noise operation.",
    features: [
      "100% touch-free infrared sensor with instant 0.2s activation",
      "Glossy fire-retardant ABS casing built for long-lasting shine",
      "Automatic thermal overload & 45-second safety cutoff",
      "Easy wall-mount installation with concealed backplate"
    ],
    svgType: "abs-dryer"
  },
  {
    id: "hd-ss-pro",
    displayTitle: "SS Hand Dryer HD-2800 SA",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Stainless Steel High-Speed Hand Dryer",
    model: "Model: HD-2800 SA",
    category: "medium",
    categories: ["medium", "stainless", "highspeed"],
    price: "₹7,500",
    origPrice: "₹9,800",
    image: "images/SS%20Hand%20Dryer.png",
    galleryImages: [
      "images/SS%20Hand%20Dryer.png",
      "images/dryer-nextgen.jpg",
      "images/gallery-2.jpg",
      "images/about-hand-dryer.jpg"
    ],
    badge: "100-500 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "8 - 10 Seconds",
    airSpeed: "95 m/s",
    power: "1400W High-Speed",
    noiseLevel: "68 dB",
    material: "Mirror-Polished AISI 304 Stainless Steel",
    motor: "High-RPM Centrifugal Turbo Motor",
    filtration: "Cleanable High-Efficiency HEPA Filter",
    dimensions: "295 x 255 x 170 mm",
    drainTank: "Focused Downward High-Speed Air Stream",
    sensorType: "Smart Microchip Optical Infrared Sensor",
    warranty: "3 Years Comprehensive Warranty",
    shortDesc: "Premium AISI 304 stainless steel high-speed hand dryer engineered for hotels, hospitals, malls, and offices.",
    fullDesc: "The Stainless Steel High-Speed Hand Dryer (HD-2800 SA) pairs a corrosion-resistant AISI 304 stainless steel housing with high-velocity focused air jets, drying hands rapidly in 8-10 seconds while withstanding heavy commercial washroom traffic.",
    features: [
      "Heavy-duty AISI 304 stainless steel resists rust and tampering",
      "High-velocity air curtain dries hands cleanly in 8-10 seconds",
      "Anti-vandal concealed mounting screws for public facilities",
      "Energy-efficient operation cuts paper towel costs by 90%"
    ],
    svgType: "stainless-dryer"
  },
  {
    id: "hd-ig500",
    displayTitle: "Industrial Grade HD-IG500",
    usageLabel: "Above 500 usage per day",
    usageTier: "high",
    name: "Industrial Grade — AeroJet Blade",
    model: "Model: HD-IG500",
    category: "high",
    categories: ["high", "jet", "industrial", "stainless"],
    price: "₹8,990",
    origPrice: "₹11,999",
    image: "images/Industrial%20Grade%20Hand%20Dryer.png",
    galleryImages: [
      "images/Industrial%20Grade%20Hand%20Dryer.png",
      "images/dryer-industrial-jet.jpg",
      "images/gallery-4.jpg"
    ],
    badge: "Above 500 usage per day",
    badgeClass: "badge-tag-orange",
    dryingTime: "8 - 10 Seconds",
    airSpeed: "105 m/s",
    power: "1800W Heavy-Duty Thermal",
    noiseLevel: "68 dB",
    material: "Heavy-Duty Mirror-Polished AISI 304 Stainless Steel / Chrome",
    motor: "Heavy-Duty Continuous-Duty Industrial Motor",
    filtration: "Dual Hygiene Air Filtration",
    dimensions: "280 x 270 x 210 mm",
    drainTank: "Focused High-Speed Downward Air Stream",
    sensorType: "Touch-Free Optical Infrared Beam",
    warranty: "5 Years Industrial Warranty",
    shortDesc: "Heavy-duty commercial hand dryer engineered for high-traffic facilities, factories, airports, and corporate hubs exceeding 500 daily uses.",
    fullDesc: "Industrial Grade (HD-IG500) is built with a heavy-duty, tamper-resistant polished stainless steel / chrome housing designed to endure rigorous 24/7 commercial traffic exceeding 500 uses per day. Features high-velocity touch-free drying and heavy-duty motor reliability.",
    features: [
      "Vandal-resistant solid stainless steel / chrome housing",
      "High-velocity focused air stream dries hands cleanly in 8-10 seconds",
      "Touch-free optical infrared sensor for instantaneous activation",
      "Heavy-duty continuous-duty motor rated for high-volume commercial traffic"
    ],
    svgType: "jet-dryer"
  },
  {
    id: "hd-bp300",
    displayTitle: "Balanced Power HD-BP300",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Nature Hygiene Balanced Power Hand Dryer",
    model: "Model: HD-BP300",
    category: "medium",
    categories: ["medium", "stainless", "highspeed"],
    price: "₹6,850",
    origPrice: "₹8,999",
    image: "images/Balanced%20Power%20Hand%20Dryer.png",
    galleryImages: [
      "images/Balanced%20Power%20Hand%20Dryer.png",
      "images/dryer-balanced.jpg",
      "images/gallery-2.jpg"
    ],
    badge: "100-500 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "8 - 10 Seconds",
    airSpeed: "95 m/s",
    power: "1200W High-Speed",
    noiseLevel: "69 dB",
    material: "Curved Mirror-Polished AISI 304 Stainless Steel / Chrome",
    motor: "High-RPM Centrifugal Commercial Motor",
    filtration: "High-Efficiency Cleanable Air Filter",
    dimensions: "280 x 240 x 170 mm",
    drainTank: "Focused Downward Air Nozzle with Safety Grille",
    sensorType: "Smart Microchip Infrared Sensor",
    warranty: "3 Years Comprehensive Warranty",
    shortDesc: "Curved polished stainless steel commercial hand dryer balancing rapid 8-10 second drying with energy-efficient operation.",
    fullDesc: "Balanced Power Drying (HD-BP300) is crafted from high-grade mirror-polished stainless steel / chrome, delivering reliable touchless performance for 100-500 daily uses in commercial offices, hotels, restaurants, and clinics.",
    features: [
      "Mirror-polished stainless steel / chrome casing built for modern washrooms",
      "High-speed focused downward air stream dries hands cleanly in 8-10 seconds",
      "Touch-free optical infrared sensor with automatic shut-off",
      "Energy-efficient commercial motor designed for 100-500 uses per day"
    ],
    svgType: "stainless-dryer"
  },
  {
    id: "hd-sl150",
    displayTitle: "Ultra-Slim ADA HD-SL150",
    usageLabel: "0-100 usage per day",
    usageTier: "low",
    name: "Ultra-Slim ADA Wall-Mounted",
    model: "Model: HD-SL150",
    category: "abs",
    categories: ["low", "abs", "stainless", "wallmounted"],
    price: "₹7,250",
    origPrice: "₹9,499",
    image: "images/Ultra-Slim%20ADA%20Hand%20Dryer.png",
    galleryImages: [
      "images/Ultra-Slim%20ADA%20Hand%20Dryer.png",
      "images/dryer-slim-ada.jpg",
      "images/gallery-6.jpg"
    ],
    badge: "0-100 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "10 - 12 Seconds",
    airSpeed: "82 m/s",
    power: "850W Low-Load",
    noiseLevel: "67 dB",
    material: "One-Piece Drawn Satin Stainless Steel",
    motor: "Flat-Form Brushless Turbine",
    filtration: "Certified HEPA H13 Filter",
    dimensions: "290 x 270 x 98 mm (ADA Compliant)",
    drainTank: "Direct Evaporation Venting",
    sensorType: "Wide-Angle Infrared Sensor",
    warranty: "3 Years Warranty",
    shortDesc: "Ultra-compact low-profile hand dryer projecting under 4 inches from the wall for full ADA accessibility.",
    fullDesc: "Designed for narrow corridors and accessible commercial washrooms, the Ultra-Slim ADA Series (HD-SL150) projects just 98mm from the wall without needing recessed wall cutting.",
    features: [
      "ADA barrier-free compliant (< 4 inches wall projection)",
      "Simple surface mounting with concealed backplate",
      "Precision linear bottom air blade minimizes wall splash",
      "Low 850W rating ideal for green LEED buildings"
    ],
    svgType: "slim-dryer"
  },
  {
    id: "hd-ex880",
    displayTitle: "Dual-Side Jet Dryer Big-Jet-L",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Dual-Side High Speed Jet Hand Dryer",
    model: "Model: Big-Jet-L",
    category: "medium",
    categories: ["medium", "jet", "commercial", "abs"],
    price: "₹16,800",
    origPrice: "₹21,999",
    image: "images/Smart%20Jet%20Hand%20Dryer.png",
    galleryImages: [
      "images/Smart%20Jet%20Hand%20Dryer.png",
      "images/dryer-matte-black.jpg",
      "images/gallery-3.jpg"
    ],
    badge: "100-500 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "7 Seconds",
    airSpeed: "100 m/s",
    power: "1200W High-Speed Thermal",
    noiseLevel: "68 dB",
    material: "High-Impact Commercial Antibacterial ABS with HEPA Filter",
    motor: "High-Speed Brushless Commercial Jet Motor",
    filtration: "Dual HEPA H13 Filtration + Particle Pre-Filter",
    dimensions: "650 x 300 x 220 mm",
    drainTank: "800ml Bottom Water Drain Tank with Anti-Overflow Sensor",
    sensorType: "Dual Infrared Optical Beam with LED Status Indicator",
    warranty: "3 Years Comprehensive Warranty",
    shortDesc: "High-speed vertical dual-blade hands-in jet hand dryer with 7-second rapid drying and dual HEPA filtration.",
    fullDesc: "The Dual-Side High Speed Jet Hand Dryer (Big-Jet-L) is built for modern commercial spaces. Featuring dual high-velocity air blades, integrated 7-second rapid timer, dual HEPA filtration, and an 800ml bottom drain reservoir to keep washroom floors clean and dry.",
    features: [
      "Ultra-fast 7-second touchless dual-blade hand drying",
      "Medical-grade HEPA filter purifies intake air before reaching hands",
      "Integrated bottom drain reservoir prevents floor puddles and slip hazards",
      "Smart LED indicator strip shows real-time operation and drying countdown"
    ],
    svgType: "jet-dryer"
  }
];

// 2. High-Tech SVG Product Illustrations Generator
function getProductSvg(svgType) {
  switch (svgType) {
    case "jet-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="jetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="60%" stop-color="#e2e8f0" />
              <stop offset="100%" stop-color="#cbd5e1" />
            </linearGradient>
            <linearGradient id="cavityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#1e293b" />
            </linearGradient>
            <linearGradient id="ledGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00b894" />
              <stop offset="100%" stop-color="#00cec9" />
            </linearGradient>
          </defs>
          <!-- Outer Casing -->
          <rect x="40" y="20" width="120" height="200" rx="20" fill="url(#jetGrad)" stroke="#94a3b8" stroke-width="2.5" />
          <!-- Inner Hands-In Drying Cavity -->
          <path d="M 55 45 C 55 35, 145 35, 145 45 L 140 160 C 140 175, 60 175, 60 160 Z" fill="url(#cavityGrad)" />
          <!-- Dual Jet Air Nozzles Lines -->
          <line x1="64" y1="70" x2="64" y2="140" stroke="#00b894" stroke-width="3" stroke-linecap="round" stroke-dasharray="4,4" />
          <line x1="136" y1="70" x2="136" y2="140" stroke="#00b894" stroke-width="3" stroke-linecap="round" stroke-dasharray="4,4" />
          <!-- Blue Airflow Waves -->
          <path d="M 75 90 Q 100 100 75 110" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.8" />
          <path d="M 125 90 Q 100 100 125 110" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.8" />
          <!-- Bottom Drain Tank -->
          <rect x="62" y="185" width="76" height="22" rx="6" fill="#0f172a" stroke="#00b894" stroke-width="1.5" />
          <text x="100" y="200" font-size="7" font-weight="700" fill="#38bdf8" text-anchor="middle" font-family="sans-serif">DRAIN TANK</text>
          <!-- Smart LED Status Strip -->
          <rect x="75" y="26" width="50" height="4" rx="2" fill="url(#ledGlow)" />
          <!-- Brand Badge -->
          <circle cx="100" cy="172" r="4" fill="#00b894" />
        </svg>
      `;

    case "stainless-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stop-color="#f8fafc" />
              <stop offset="25%" stop-color="#cbd5e1" />
              <stop offset="50%" stop-color="#f1f5f9" />
              <stop offset="75%" stop-color="#94a3b8" />
              <stop offset="100%" stop-color="#64748b" />
            </linearGradient>
            <linearGradient id="nozzleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0f172a" />
              <stop offset="100%" stop-color="#334155" />
            </linearGradient>
          </defs>
          <!-- Stainless Housing -->
          <rect x="35" y="30" width="130" height="175" rx="16" fill="url(#steelGrad)" stroke="#475569" stroke-width="2" />
          <!-- Subtle Highlights -->
          <line x1="45" y1="40" x2="45" y2="195" stroke="#ffffff" stroke-width="2" opacity="0.7" />
          <!-- Air Nozzle Bezel -->
          <ellipse cx="100" cy="165" rx="36" ry="16" fill="url(#nozzleGrad)" stroke="#1e293b" stroke-width="2" />
          <ellipse cx="100" cy="165" rx="28" ry="11" fill="#020617" />
          <!-- Infrared Sensor Eye -->
          <circle cx="100" cy="132" r="5" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />
          <circle cx="100" cy="132" r="2" fill="#fca5a5" />
          <!-- Air Jet Stream Indicator -->
          <path d="M 85 178 L 78 215 M 100 178 L 100 220 M 115 178 L 122 215" stroke="#00b894" stroke-width="2" stroke-linecap="round" stroke-dasharray="3,3" opacity="0.8" />
          <!-- Brand Plate -->
          <rect x="80" y="55" width="40" height="10" rx="3" fill="#1e293b" />
          <text x="100" y="62" font-size="5" font-weight="bold" fill="#00b894" text-anchor="middle" font-family="sans-serif">SMARTDRY</text>
        </svg>
      `;

    case "sensor-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pureWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="100%" stop-color="#e2e8f0" />
            </linearGradient>
            <linearGradient id="blueGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" />
              <stop offset="100%" stop-color="#0369a1" />
            </linearGradient>
          </defs>
          <!-- Modern Round Curved Body -->
          <rect x="42" y="32" width="116" height="170" rx="26" fill="url(#pureWhite)" stroke="#cbd5e1" stroke-width="2.5" />
          <path d="M 42 75 C 60 70, 140 70, 158 75" stroke="#94a3b8" stroke-width="1.5" fill="none" />
          <!-- Center Sensor Indicator Ring -->
          <circle cx="100" cy="115" r="22" fill="#0b1d33" />
          <circle cx="100" cy="115" r="16" fill="none" stroke="#00b894" stroke-width="2.5" stroke-dasharray="8,4" />
          <circle cx="100" cy="115" r="6" fill="#00b894" />
          <!-- Bottom Air Outlet -->
          <rect x="65" y="172" width="70" height="14" rx="7" fill="#0f172a" />
          <line x1="75" y1="179" x2="125" y2="179" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round" />
          <!-- Gentle Air stream -->
          <path d="M 80 192 C 78 205, 82 215, 80 225" stroke="#00b894" stroke-width="2" fill="none" stroke-dasharray="3,3" />
          <path d="M 100 192 C 98 205, 102 215, 100 225" stroke="#00b894" stroke-width="2" fill="none" stroke-dasharray="3,3" />
          <path d="M 120 192 C 118 205, 122 215, 120 225" stroke="#00b894" stroke-width="2" fill="none" stroke-dasharray="3,3" />
        </svg>
      `;

    case "slim-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="slimSteel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="30%" stop-color="#e2e8f0" />
              <stop offset="70%" stop-color="#cbd5e1" />
              <stop offset="100%" stop-color="#94a3b8" />
            </linearGradient>
          </defs>
          <!-- Slim Profile Shell -->
          <rect x="46" y="28" width="108" height="180" rx="12" fill="url(#slimSteel)" stroke="#64748b" stroke-width="2" />
          <!-- ADA Compliance Badge Stamp -->
          <rect x="62" y="42" width="76" height="16" rx="4" fill="#0b1d33" />
          <text x="100" y="53" font-size="6" font-weight="bold" fill="#22c55e" text-anchor="middle" font-family="sans-serif">ADA COMPLIANT &lt; 4"</text>
          <!-- Vertical Air Dispersion Grille -->
          <rect x="65" y="75" width="70" height="90" rx="8" fill="#1e293b" />
          <line x1="75" y1="88" x2="125" y2="88" stroke="#00b894" stroke-width="2" stroke-linecap="round" />
          <line x1="75" y1="102" x2="125" y2="102" stroke="#00b894" stroke-width="2" stroke-linecap="round" />
          <line x1="75" y1="116" x2="125" y2="116" stroke="#00b894" stroke-width="2" stroke-linecap="round" />
          <line x1="75" y1="130" x2="125" y2="130" stroke="#00b894" stroke-width="2" stroke-linecap="round" />
          <line x1="75" y1="144" x2="125" y2="144" stroke="#00b894" stroke-width="2" stroke-linecap="round" />
          <!-- Bottom Sensor -->
          <circle cx="100" cy="188" r="4" fill="#ef4444" />
        </svg>
      `;

    case "abs-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="absWhite" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" />
              <stop offset="70%" stop-color="#f1f5f9" />
              <stop offset="100%" stop-color="#e2e8f0" />
            </linearGradient>
          </defs>
          <!-- ABS Ergonomic Contour Body -->
          <path d="M 50 45 C 50 30, 150 30, 150 45 L 142 185 C 142 198, 58 198, 58 185 Z" fill="url(#absWhite)" stroke="#94a3b8" stroke-width="2.5" />
          <!-- Green Eco Accent Wave -->
          <path d="M 55 105 Q 100 120 145 105" stroke="#10b981" stroke-width="3" fill="none" />
          <!-- Antimicrobial Silver Ion Shield Badge -->
          <circle cx="100" cy="72" r="14" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5" />
          <text x="100" y="76" font-size="10" text-anchor="middle" fill="#059669">Ag+</text>
          <!-- Bottom Discharge Vent -->
          <rect x="70" y="160" width="60" height="16" rx="8" fill="#1e293b" />
          <line x1="82" y1="168" x2="118" y2="168" stroke="#34d399" stroke-width="2.5" stroke-linecap="round" />
          <circle cx="100" cy="144" r="3" fill="#dc2626" />
        </svg>
      `;

    case "matte-black-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="matteBlack" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155" />
              <stop offset="40%" stop-color="#1e293b" />
              <stop offset="100%" stop-color="#090d16" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <!-- Matte Black Beveled Chassis -->
          <rect x="40" y="30" width="120" height="175" rx="18" fill="url(#matteBlack)" stroke="#475569" stroke-width="2" />
          <!-- Architectural Gold/Copper Accents -->
          <line x1="50" y1="45" x2="150" y2="45" stroke="#f59e0b" stroke-width="1.5" opacity="0.8" />
          <!-- UV-C Sanitization Indicator -->
          <circle cx="100" cy="90" r="18" fill="#020617" stroke="#8b5cf6" stroke-width="2" filter="url(#goldGlow)" />
          <text x="100" y="94" font-size="7" font-weight="bold" fill="#a78bfa" text-anchor="middle" font-family="sans-serif">UV-C LED</text>
          <!-- Lower Air Slot -->
          <rect x="62" y="152" width="76" height="20" rx="10" fill="#050811" stroke="#f59e0b" stroke-width="1.5" />
          <!-- Blue / White Air Indicator -->
          <line x1="75" y1="162" x2="125" y2="162" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" />
          <circle cx="100" cy="132" r="3.5" fill="#f59e0b" />
        </svg>
      `;

    case "industrial-dryer":
      return `
        <svg viewBox="0 0 200 240" class="product-img" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="indGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#e2e8f0" />
              <stop offset="50%" stop-color="#94a3b8" />
              <stop offset="100%" stop-color="#475569" />
            </linearGradient>
          </defs>
          <!-- Rugged Cast Housing with Corner Fasteners -->
          <rect x="36" y="32" width="128" height="175" rx="8" fill="url(#indGrad)" stroke="#1e293b" stroke-width="3" />
          <!-- Heavy Duty Security Bolts -->
          <circle cx="46" cy="42" r="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
          <circle cx="154" cy="42" r="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
          <circle cx="46" cy="197" r="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
          <circle cx="154" cy="197" r="4" fill="#0f172a" stroke="#cbd5e1" stroke-width="1" />
          <!-- Chrome Heavy Revolving/Fixed Nozzle -->
          <ellipse cx="100" cy="145" rx="34" ry="24" fill="#0f172a" stroke="#f97316" stroke-width="2" />
          <ellipse cx="100" cy="145" rx="26" ry="16" fill="#020617" />
          <!-- Heavy Vandal Grille -->
          <line x1="88" y1="145" x2="112" y2="145" stroke="#f97316" stroke-width="2" stroke-linecap="round" />
          <line x1="100" y1="135" x2="100" y2="155" stroke="#f97316" stroke-width="2" stroke-linecap="round" />
          <!-- Sensor Unit -->
          <circle cx="100" cy="100" r="6" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
          <!-- Industrial Badge -->
          <rect x="68" y="58" width="64" height="15" fill="#0f172a" stroke="#f97316" stroke-width="1" />
          <text x="100" y="69" font-size="6" font-weight="bold" fill="#f97316" text-anchor="middle" font-family="sans-serif">HEAVY DUTY 24/7</text>
        </svg>
      `;

    default:
      return `<div class="p-4 text-center text-muted"><i class="bi bi-fan fs-1"></i></div>`;
  }
}

// 3. Render Product Cards Dynamically (Minimalist 3-Column Studio Showcase Layout)
function renderProducts(productsToRender) {
  const container = document.getElementById("productsContainer");
  if (!container) return;

  if (productsToRender.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-4 bg-white rounded-3 shadow-sm d-inline-block">
          <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
          <h4 class="mt-3 text-navy">No Hand Dryers Found</h4>
          <p class="text-muted mb-3">Try adjusting your search criteria or switch to another usage tier.</p>
          <button class="btn btn-primary-custom btn-sm" onclick="resetFilters()">View All Models</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = productsToRender.map(product => `
    <div class="col-lg-4 col-md-6 product-item" data-category="${product.category}">
      <div class="dryer-showcase-card" onclick="openProductModal('${product.id}')" role="button" tabindex="0" aria-label="View details for ${product.displayTitle}">
        <!-- Full-bleed Studio Product Photograph -->
        <img src="${product.image}" alt="${product.displayTitle} - ${product.usageLabel}" class="dryer-card-bg">

        <!-- Soft Protective Vignette -->
        <div class="dryer-card-vignette"></div>

        <!-- Bottom Left Title & Usage Subtitle + Hover Quick Actions -->
        <div class="dryer-card-footer-info">
          <div>
            <h4 class="dryer-card-heading">${product.displayTitle}</h4>
            <p class="dryer-card-sub">${product.usageLabel}</p>
          </div>
          <div class="dryer-card-actions">
            <button type="button" class="dryer-action-btn" onclick="event.stopPropagation(); openProductModal('${product.id}')" title="View Technical Specifications">
              <i class="bi bi-info-circle"></i> Specs
            </button>
            <button type="button" class="dryer-action-btn primary-action" onclick="event.stopPropagation(); enquireProduct('${product.id}')" title="Request Quote">
              <i class="bi bi-chat-dots"></i> Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// 4. Product Modal Setup & Populate (Modern E-Commerce Studio Layout matching reference)
function openProductModal(productId) {
  const product = handDryersData.find(item => item.id === productId);
  if (!product) return;

  const modalTitle = document.getElementById("productModalLabel");
  const modalBody = document.getElementById("productModalBody");

  if (modalTitle) {
    modalTitle.innerHTML = `<span class="fw-bold">Product</span>`;
  }

  // Gallery images list
  const galleryImgs = product.galleryImages || [product.image];
  const modelCode = product.model.replace("Model: ", "").trim();
  const price = product.price || "₹2,850";
  const origPrice = product.origPrice || "₹3,999";

  if (modalBody) {
    modalBody.innerHTML = `
      <!-- 1. Breadcrumb Header Section -->
      <div class="px-4 py-3 bg-light border-bottom">
        <div class="product-breadcrumb">
          <a href="#home" data-bs-dismiss="modal">Home</a>
          <span class="breadcrumb-sep">&gt;&gt;</span>
          <span class="breadcrumb-current">${product.name} (${product.material ? product.material.split(" ")[0] : ""})</span>
        </div>
      </div>

      <!-- 2. Main Two-Column Product Showcase Section -->
      <div class="p-4 p-lg-5 bg-white">
        <div class="row g-4 align-items-start">
          
          <!-- Left Column: Product Gallery -->
          <div class="col-lg-5 col-md-6">
            <div class="main-image-card" id="modalMainImgCard" style="min-height: 380px; max-height: 420px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; display: flex; align-items: center; justify-content: center; position: relative; padding: 20px;" title="Hover to zoom, click to view fullscreen">
              <span class="gallery-badge"><i class="bi bi-tag-fill"></i> ${product.usageLabel}</span>
              <button type="button" class="gallery-fullscreen-btn" onclick="openProductLightbox(document.getElementById('modalMainProductImg').src)" title="View Fullscreen"><i class="bi bi-arrows-fullscreen"></i></button>
              <img id="modalMainProductImg" src="${galleryImgs[0]}" alt="${product.name}" style="max-height: 340px; max-width: 100%; object-fit: contain;">
              <div class="zoom-indicator-badge" id="modalZoomBadge"><i class="bi bi-search"></i> Hover to zoom</div>
            </div>

            <!-- Multiple Thumbnail Images below Main Image -->
            <div class="thumbnail-strip mt-3" id="modalThumbStrip">
              ${galleryImgs.map((imgUrl, idx) => `
                <div class="thumb-item ${idx === 0 ? "active" : ""}" onclick="switchModalGalleryImg('${imgUrl}', this)" title="View ${idx + 1}">
                  <img src="${imgUrl}" alt="${product.name} view ${idx + 1}">
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Right Column: Product Information -->
          <div class="col-lg-7 col-md-6">
            <div class="product-info-wrap">
              <!-- Product Title & Model -->
              <h3 class="fw-bold text-navy mb-1" style="font-size: 1.65rem; line-height: 1.3;">${product.name}</h3>
              <p class="text-muted small fw-semibold mb-2">${product.model}</p>
              
              <!-- Price & GST Notice (Exact format as reference) -->
              <div class="my-3">
                <div class="d-flex align-items-baseline gap-2 mb-1">
                  <span class="fs-2 fw-bolder text-dark">${price}</span>
                  <del class="text-muted small">${origPrice}</del>
                </div>
                <div class="gst-notice-badge">
                  <i class="bi bi-check2-circle"></i>
                  <span>18% GST will be applicable on the price</span>
                </div>
              </div>

              <!-- Short Description -->
              <p class="text-muted mb-4" style="font-size: 0.96rem; line-height: 1.6;">
                ${product.shortDesc}
              </p>

              <!-- Trust & Delivery Highlights -->
              <div class="trust-badges-strip mt-2">
                <div class="trust-badge-item">
                  <i class="bi bi-shield-check"></i>
                  <div>
                    <strong>Warranty : 12 Months</strong>
                    <span>Comprehensive Coverage</span>
                  </div>
                </div>
                <div class="trust-badge-item">
                  <i class="bi bi-truck"></i>
                  <div>
                    <strong>Estimated Delivery : 2-4 Days</strong>
                    <span>Pan-India Fast Dispatch</span>
                  </div>
                </div>
                <div class="trust-badge-item">
                  <i class="bi bi-arrow-repeat"></i>
                  <div>
                    <strong>10 Days Return/Replacement/Refund assurance</strong>
                    <span>100% Buyer Protection</span>
                  </div>
                </div>
                <div class="trust-badge-item">
                  <i class="bi bi-patch-check"></i>
                  <div>
                    <strong>100% Original Product</strong>
                    <span>Direct Brand Genuine</span>
                  </div>
                </div>
              </div>

              <!-- Payment Options -->
              <div class="payment-options-strip">
                <span class="payment-options-label">Payment Options</span>
                <div class="payment-options-logos">
                  <img src="images/payment-options-logos@2x.png" alt="Payment Options: VISA, MasterCard, Paytm, Net Banking" height="25">
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <!-- 3. Specifications & Features Tabs Section (With Orange Accent Line) -->
      <div class="px-4 px-lg-5 pb-5 bg-white border-top pt-4">
        <!-- Tabs Navigation with Orange Underline -->
        <div class="custom-product-tabs" role="tablist">
          <button class="tab-nav-btn active" id="modalTabSpecsBtn" type="button" onclick="switchModalTab('specs')">
            Specifications
          </button>
          <button class="tab-nav-btn" id="modalTabFeaturesBtn" type="button" onclick="switchModalTab('features')">
            Features
          </button>
        </div>

        <!-- Tab 1: Specifications (Active) -->
        <div id="modalTabSpecsPane">
          <h5 class="tab-pane-heading">Model No: ${modelCode}</h5>
          <div class="spec-table-card">
            <div class="table-responsive">
              <table class="table-custom-specs">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td class="spec-name">Power Supply:</td><td class="spec-val">${product.power}</td></tr>
                  <tr><td class="spec-name">Drying Time:</td><td class="spec-val">${product.dryingTime}</td></tr>
                  <tr><td class="spec-name">Air Velocity:</td><td class="spec-val">${product.airSpeed}</td></tr>
                  <tr><td class="spec-name">Noise Level:</td><td class="spec-val">${product.noiseLevel}</td></tr>
                  <tr><td class="spec-name">Body Material:</td><td class="spec-val">${product.material}</td></tr>
                  <tr><td class="spec-name">Motor Mechanism:</td><td class="spec-val">${product.motor}</td></tr>
                  <tr><td class="spec-name">Air Filtration:</td><td class="spec-val">${product.filtration}</td></tr>
                  <tr><td class="spec-name">Sensor Technology:</td><td class="spec-val">${product.sensorType}</td></tr>
                  <tr><td class="spec-name">Dimensions (H x W x D):</td><td class="spec-val">${product.dimensions}</td></tr>
                  <tr><td class="spec-name">Drain / Drip Control:</td><td class="spec-val">${product.drainTank}</td></tr>
                  <tr><td class="spec-name">Installation Type:</td><td class="spec-val">Wall-Mounted with Concealed Heavy-Duty Backplate</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Tab 2: Features -->
        <div id="modalTabFeaturesPane" class="d-none">
          <h5 class="tab-pane-heading">Key Engineering Features</h5>
          <div class="features-grid">
            ${product.features.map(f => `
              <div class="feature-box-card">
                <div class="feature-icon-circle"><i class="bi bi-check2-circle"></i></div>
                <h5>${f}</h5>
                <p>Designed and built for continuous commercial operation, maximum user hygiene, and reliable multi-year washroom performance.</p>
              </div>
            `).join("")}
          </div>
        </div>

      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
  setupModalImageZoom();
}

// Switch main image on thumbnail click inside modal (supports all gallery images)
function switchModalGalleryImg(imgSrc, element) {
  const mainImg = document.getElementById("modalMainProductImg");
  const card = document.getElementById("modalMainImgCard");
  const badge = document.getElementById("modalZoomBadge");
  if (mainImg) {
    mainImg.style.transform = "scale(1)";
    mainImg.style.transformOrigin = "center center";
    if (card) card.classList.remove("is-zoomed");
    if (badge) {
      badge.innerHTML = '<i class="bi bi-search"></i> Hover to zoom';
      badge.classList.remove("active");
    }
    mainImg.style.opacity = "0.4";
    setTimeout(() => {
      mainImg.src = imgSrc;
      mainImg.style.opacity = "1";
    }, 120);
  }
  const thumbs = document.querySelectorAll("#modalThumbStrip .thumb-item");
  thumbs.forEach(t => t.classList.remove("active"));
  if (element) element.classList.add("active");
}

// Setup Interactive Magnifier Zoom on Product Modal Main Image (works for all images)
function setupModalImageZoom() {
  const card = document.getElementById("modalMainImgCard");
  const img = document.getElementById("modalMainProductImg");
  const badge = document.getElementById("modalZoomBadge");
  if (!card || !img) return;

  card.onmousemove = function(e) {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2.2)";
    card.classList.add("is-zoomed");
    if (badge) {
      badge.innerHTML = '<i class="bi bi-arrows-move"></i> Move to inspect';
      badge.classList.add("active");
    }
  };

  card.onmouseleave = function() {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
    card.classList.remove("is-zoomed");
    if (badge) {
      badge.innerHTML = '<i class="bi bi-search"></i> Hover to zoom';
      badge.classList.remove("active");
    }
  };

  card.onclick = function(e) {
    if (e.target.closest(".gallery-fullscreen-btn") || e.target.closest(".gallery-badge")) return;
    openProductLightbox(img.src);
  };
}

// Open Fullscreen Lightbox for any viewed image
function openProductLightbox(src) {
  const lightbox = document.getElementById("productImgLightbox");
  if (!lightbox) return;
  const lbImg = document.getElementById("productImgLightboxSrc");
  if (lbImg) lbImg.src = src;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Fullscreen Lightbox
function closeProductLightbox() {
  const lightbox = document.getElementById("productImgLightbox");
  if (lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Switch between Specifications and Features tabs inside modal
function switchModalTab(tabName) {
  const specsBtn = document.getElementById("modalTabSpecsBtn");
  const featsBtn = document.getElementById("modalTabFeaturesBtn");
  const specsPane = document.getElementById("modalTabSpecsPane");
  const featsPane = document.getElementById("modalTabFeaturesPane");

  if (tabName === "specs") {
    if (specsBtn) specsBtn.classList.add("active");
    if (featsBtn) featsBtn.classList.remove("active");
    if (specsPane) specsPane.classList.remove("d-none");
    if (featsPane) featsPane.classList.add("d-none");
  } else {
    if (featsBtn) featsBtn.classList.add("active");
    if (specsBtn) specsBtn.classList.remove("active");
    if (featsPane) featsPane.classList.remove("d-none");
    if (specsPane) specsPane.classList.add("d-none");
  }
}

// Close modal and scroll to enquiry form with pre-filled product
function closeModalAndEnquire(productId) {
  const modalEl = document.getElementById("productModal");
  const modalInstance = bootstrap.Modal.getInstance(modalEl);
  if (modalInstance) modalInstance.hide();
  enquireProduct(productId);
}

// 5. Enquire Action: Auto-fills Contact Form & Scrolls
function enquireProduct(productId) {
  const product = handDryersData.find(p => p.id === productId);
  if (!product) return;

  const productSelect = document.getElementById("enquiryProduct");
  if (productSelect) {
    productSelect.value = `${product.name} (${product.model})`;
  }

  const messageBox = document.getElementById("enquiryMessage");
  if (messageBox && messageBox.value.trim() === "") {
    messageBox.value = `Hello, I am interested in getting a quotation and bulk pricing for the ${product.name} (${product.model}). Please send specifications and delivery schedule.`;
  }

  // Smooth scroll down to enquiry section
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    const card = document.querySelector(".enquiry-card");
    if (card) {
      card.style.outline = "3px solid #00b894";
      setTimeout(() => {
        card.style.outline = "none";
      }, 2000);
    }
  }
}

// 6. Reset Category and Search Filters
function resetFilters() {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add("active");

  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) searchInput.value = "";

  renderProducts(handDryersData);
}

// 7. Interactive ROI Cost Comparison Calculator (Paper Towels vs Smart Hand Dryers in Indian INR)
function calculateSavings() {
  const calcUsersEl = document.getElementById("calcUsers");
  const calcDaysEl = document.getElementById("calcDays");
  if (!calcUsersEl || !calcDaysEl) return;

  const dailyUsers = parseInt(calcUsersEl.value) || 250;
  const daysPerYear = parseInt(calcDaysEl.value) || 300;
  
  // Paper towels calculation (INR):
  // Avg 2.5 paper towels per hand wash @ ₹1.25 per towel in India
  const towelsPerYear = dailyUsers * 2.5 * daysPerYear;
  const paperTowelCost = towelsPerYear * 1.25;

  // Hand dryer calculation (INR):
  // Commercial electric rate in India ~ ₹9.00 per kWh
  // Smart Hand Dryer: 10 seconds @ 1000W = 0.0028 kWh per dry @ ₹9.00 per kWh
  const dryerElectricityCost = dailyUsers * daysPerYear * 0.0028 * 9.0;

  // Annual Net Savings
  const annualSavings = Math.max(0, paperTowelCost - dryerElectricityCost);
  const savingsPercent = Math.round(((paperTowelCost - dryerElectricityCost) / paperTowelCost) * 100) || 99;
  const treesSaved = (towelsPerYear / 8000).toFixed(1); // 1 tree ~ 8,000 paper towels

  // Indian Rupee formatting (e.g. ₹2,32,485)
  const formatINR = (val) => "₹" + Math.round(val).toLocaleString('en-IN');

  // Update DOM
  const savingsDisplay = document.getElementById("calcSavingsDisplay");
  const percentDisplay = document.getElementById("calcPercentDisplay");
  const treesDisplay = document.getElementById("calcTreesDisplay");
  const paperCostDisplay = document.getElementById("calcPaperCostDisplay");
  const dryerCostDisplay = document.getElementById("calcDryerCostDisplay");

  if (savingsDisplay) savingsDisplay.textContent = formatINR(annualSavings);
  if (percentDisplay) percentDisplay.textContent = savingsPercent + "%";
  if (treesDisplay) treesDisplay.textContent = treesSaved + " Trees";
  if (paperCostDisplay) paperCostDisplay.textContent = formatINR(paperTowelCost) + "/yr";
  if (dryerCostDisplay) dryerCostDisplay.textContent = formatINR(dryerElectricityCost) + "/yr";
}

// 8. Gallery Lightbox Modal Viewer
const galleryItems = [
  {
    title: "Automatic Hand Dryer in Corporate Tech Park",
    category: "Corporate",
    src: "images/gallery-1.jpg",
    desc: "Touchless automatic hand dryer installation delivering rapid, hygienic, and eco-friendly drying in a corporate washroom."
  },
  {
    title: "Stainless Steel Hand Dryer in Luxury Hotel",
    category: "Hospitality",
    src: "images/gallery-2.jpg",
    desc: "Polished stainless steel finish blending harmoniously with modern marble tiles and commercial restroom vanities."
  },
  {
    title: "Executive Matte Black Series in VIP Airport Lounge",
    category: "Airports",
    src: "images/gallery-3.jpg",
    desc: "Architectural matte black edition with UV-C air sterilization installed across international terminal restrooms."
  },
  {
    title: "TitanForce Heavy Duty in International Transit Hub",
    category: "Transit",
    src: "images/gallery-4.jpg",
    desc: "Robust vandal-proof hand dryer setup capable of servicing over 15,000 travelers per day."
  },
  {
    title: "PureTouch Contactless Dryer in Medical Facility",
    category: "Healthcare",
    src: "images/gallery-5.jpg",
    desc: "Zero-touch HEPA-purified hand drying adhering to hospital contagion control guidelines."
  },
  {
    title: "SlimLine ADA Low-Profile Dryer in University Complex",
    category: "Education",
    src: "images/gallery-6.jpg",
    desc: "Ultra-compact wall mount adhering to ADA barrier-free corridor regulations."
  }
];

function openGalleryModal(index) {
  const item = galleryItems[index];
  if (!item) return;

  const modalImg = document.getElementById("galleryModalImg");
  const modalCaption = document.getElementById("galleryModalCaption");

  if (modalImg) modalImg.src = item.src;
  if (modalCaption) {
    modalCaption.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5 class="mb-1 text-white">${item.title}</h5>
          <p class="mb-0 text-light small">${item.desc}</p>
        </div>
        <span class="badge bg-teal px-3 py-2 text-dark font-weight-bold">${item.category}</span>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
  modal.show();
}

// 9. Document Ready Initialization with jQuery / Vanilla JS
document.addEventListener("DOMContentLoaded", function() {
  // Populate Product Select Dropdown in Enquiry Form
  const enquirySelect = document.getElementById("enquiryProduct");
  if (enquirySelect) {
    handDryersData.forEach(prod => {
      const option = document.createElement("option");
      option.value = `${prod.name} (${prod.model})`;
      option.textContent = `${prod.name} (${prod.model})`;
      enquirySelect.appendChild(option);
    });
  }

  // Initial Product Render
  renderProducts(handDryersData);

  // Category Filtering
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");

      const filterValue = this.getAttribute("data-filter");
      const searchVal = document.getElementById("productSearchInput").value.toLowerCase().trim();

      filterAndRender(filterValue, searchVal);
    });
  });

  // Search Input Handler
  const searchInput = document.getElementById("productSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", function() {
      const activeFilterBtn = document.querySelector(".filter-btn.active");
      const filterValue = activeFilterBtn ? activeFilterBtn.getAttribute("data-filter") : "all";
      filterAndRender(filterValue, this.value.toLowerCase().trim());
    });
  }

  function filterAndRender(category, query) {
    const filtered = handDryersData.filter(product => {
      const matchesCategory = category === "all" ||
        product.category === category ||
        (Array.isArray(product.categories) && product.categories.includes(category));
      const matchesSearch = query === "" ||
        product.displayTitle.toLowerCase().includes(query) ||
        product.name.toLowerCase().includes(query) ||
        product.model.toLowerCase().includes(query) ||
        product.usageLabel.toLowerCase().includes(query) ||
        product.shortDesc.toLowerCase().includes(query) ||
        product.material.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
  }

  // Cost Calculator Listeners
  const userSlider = document.getElementById("calcUsers");
  const daysSlider = document.getElementById("calcDays");
  if (userSlider) {
    userSlider.addEventListener("input", function() {
      document.getElementById("calcUsersVal").textContent = this.value + " People";
      calculateSavings();
    });
  }
  if (daysSlider) {
    daysSlider.addEventListener("input", function() {
      document.getElementById("calcDaysVal").textContent = this.value + " Days";
      calculateSavings();
    });
  }
  calculateSavings();

  // Sticky Navbar Scroll Listener
  const navbar = document.querySelector(".main-navbar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function() {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  // Back to Top Button Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Floating WhatsApp Dynamic Link (with prefilled message)
  const waButton = document.getElementById("floatingWhatsApp");
  if (waButton) {
    const phoneNumber = "918130817304"; // Commercial sales helpline
    const defaultMsg = encodeURIComponent("Hello! I am inquiring about Smart Automatic Hand Dryers for our commercial facility. Please share product catalogs and pricing.");
    waButton.href = `https://wa.me/${phoneNumber}?text=${defaultMsg}`;
  }

  // Enquiry Form Validation and Simulated Submission (Using jQuery/Vanilla)
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e) {
      e.preventDefault();

      let isValid = true;
      const fullName = document.getElementById("enquiryName");
      const company = document.getElementById("enquiryCompany");
      const mobile = document.getElementById("enquiryMobile");
      const email = document.getElementById("enquiryEmail");
      const product = document.getElementById("enquiryProduct");
      const quantity = document.getElementById("enquiryQuantity");
      const message = document.getElementById("enquiryMessage");

      // Reset feedback
      document.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));

      // Name validation
      if (!fullName.value.trim() || fullName.value.trim().length < 3) {
        fullName.classList.add("is-invalid");
        isValid = false;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
        email.classList.add("is-invalid");
        isValid = false;
      }

      // Mobile validation
      const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      if (!mobile.value.trim() || mobile.value.trim().length < 8) {
        mobile.classList.add("is-invalid");
        isValid = false;
      }

      // Product validation
      if (!product.value) {
        product.classList.add("is-invalid");
        isValid = false;
      }

      // Quantity validation
      if (!quantity.value || parseInt(quantity.value) < 1) {
        quantity.classList.add("is-invalid");
        isValid = false;
      }

      if (isValid) {
        // Show submission success message modal
        const submitBtn = document.getElementById("enquirySubmitBtn");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Processing...`;
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;

          // Open Success Modal
          const successModalEl = document.getElementById("enquirySuccessModal");
          const clientNameHolder = document.getElementById("successClientName");
          if (clientNameHolder) clientNameHolder.textContent = fullName.value;

          const modal = new bootstrap.Modal(successModalEl);
          modal.show();

          // Reset Form
          enquiryForm.reset();
        }, 1200);
      }
    });
  }

  // Close product image lightbox on Escape key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeProductLightbox();
    }
  });
});

