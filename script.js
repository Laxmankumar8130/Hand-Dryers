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
    name: "Nature Hygiene Hand Dryer HD-1800 EA",
    model: "Model: HD-1800 EA",
    category: "low",
    categories: ["low", "abs", "sensor"],
    image: "images/Hand%20Dryer%20HD-1800%20EA.png",
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
    displayTitle: "SS Hand Dryer",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Nature Hygiene SS Hand Dryer",
    model: "Model: HD-SS304",
    category: "medium",
    categories: ["medium", "stainless", "highspeed"],
    image: "images/SS%20Hand%20Dryer.png",
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
    fullDesc: "The Nature Hygiene SS Hand Dryer pairs a corrosion-resistant AISI 304 stainless steel housing with high-velocity focused air jets, drying hands rapidly in 8-10 seconds while withstanding heavy commercial washroom traffic.",
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
    displayTitle: "Industrial Grade",
    usageLabel: "Above 500 usage per day",
    usageTier: "high",
    name: "Industrial Grade — AeroJet Blade",
    model: "Model: HD-IG500",
    category: "high",
    categories: ["high", "jet", "industrial", "stainless"],
    image: "images/dryer-industrial-jet.jpg",
    badge: "Above 500 usage per day",
    badgeClass: "badge-tag-orange",
    dryingTime: "7 - 9 Seconds",
    airSpeed: "105 m/s",
    power: "1200W Smart Heat",
    noiseLevel: "68 dB",
    material: "Heavy-Duty Dark Gunmetal Brushed Titanium Steel",
    motor: "Brushless DC Continuous-Duty Motor (100,000 RPM)",
    filtration: "Dual Medical-Grade HEPA H13 Filtration",
    dimensions: "685 x 300 x 220 mm",
    drainTank: "800ml Drain Tank with Anti-Overflow Sensor",
    sensorType: "Dual Infrared Optical Beam",
    warranty: "5 Years Industrial Warranty",
    shortDesc: "Heavy-duty vertical hands-in jet blade dryer built for high-traffic airports, malls, factories, and corporate hubs.",
    fullDesc: "Industrial Grade (HD-IG500) is engineered for relentless 24/7 commercial traffic exceeding 500 uses per day. Its dual high-velocity air blades strip water off hands in 7 seconds while dual HEPA filters purify 99.97% of airborne particles.",
    features: [
      "Touch-free hands-in vertical jet blade sweeps water cleanly",
      "Integrated 800ml drain reservoir keeps floors completely dry",
      "Brushless 24/7 continuous-duty motor rated for 500,000+ cycles",
      "Tamper-resistant dark gunmetal brushed metal chassis"
    ],
    svgType: "jet-dryer"
  },
  {
    id: "hd-bp300",
    displayTitle: "Balanced Power Drying",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Balanced Power Drying — TurboBlast",
    model: "Model: HD-BP300",
    category: "medium",
    categories: ["medium", "stainless", "highspeed"],
    image: "images/dryer-balanced.jpg",
    badge: "100-500 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "8 - 10 Seconds",
    airSpeed: "95 m/s",
    power: "1000W Dual Eco/Warm Mode",
    noiseLevel: "69 dB",
    material: "Heavy-Gauge Faceted AISI 304 Stainless Steel",
    motor: "High-RPM Centrifugal Cyclone Motor",
    filtration: "High-Efficiency Cleanable HEPA Filter",
    dimensions: "310 x 260 x 182 mm",
    drainTank: "Wall-Mount Drip Shield Compatible",
    sensorType: "Smart Microchip Infrared Sensor",
    warranty: "3 Years Comprehensive Warranty",
    shortDesc: "Geometric faceted brushed steel high-speed hand dryer balancing rapid 8-second airflow with low energy draw.",
    fullDesc: "Balanced Power Drying (HD-BP300) is the workhorse choice for hotels, restaurants, hospitals, and mid-to-large offices seeing 100-500 daily users. Features an internal warm/cool air switch to cut summer electricity bills in half.",
    features: [
      "Concentrated high-velocity air nozzle strips water in 8-10s",
      "Faceted brushed AISI 304 stainless steel resists fingerprints",
      "Switchable 500W unheated eco mode or 1000W heated mode",
      "Compact architectural footprint fits modern washroom walls"
    ],
    svgType: "stainless-dryer"
  },
  {
    id: "hd-sl150",
    displayTitle: "Ultra-Slim ADA Series",
    usageLabel: "0-100 usage per day",
    usageTier: "low",
    name: "Ultra-Slim ADA Wall-Mounted",
    model: "Model: HD-SL150",
    category: "abs",
    categories: ["low", "abs", "stainless", "wallmounted"],
    image: "images/dryer-slim-ada.jpg",
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
    displayTitle: "Architectural Matte Black",
    usageLabel: "100-500 usage per day",
    usageTier: "medium",
    name: "Executive Matte Black Elite",
    model: "Model: HD-EX880",
    category: "medium",
    categories: ["medium", "stainless", "commercial"],
    image: "images/dryer-matte-black.jpg",
    badge: "100-500 usage per day",
    badgeClass: "badge-tag-blue",
    dryingTime: "8 - 10 Seconds",
    airSpeed: "92 m/s",
    power: "1050W Dynamic Heat",
    noiseLevel: "66 dB",
    material: "Electro-Plated Matte Black 304 Stainless Steel",
    motor: "Brushless Magnetic Levitation Motor",
    filtration: "HEPA H13 Filter + UV-C Sterilization LED",
    dimensions: "315 x 260 x 170 mm",
    drainTank: "Hidden Airflow Guide Channels",
    sensorType: "Quad-Beam Smart Proximity Sensor",
    warranty: "3 Years Warranty",
    shortDesc: "Luxury matte black architectural hand dryer featuring built-in UV-C sanitization for premium hospitality spaces.",
    fullDesc: "Designed for 5-star hotels, VIP airport lounges, and modern architectural interiors, the Executive Matte Black Elite (HD-EX880) pairs smudge-proof anodized matte black styling with continuous internal UV-C air sanitization.",
    features: [
      "Velvet matte black electro-plated 304 steel finish",
      "Integrated UV-C LED continuously disinfects airflow chamber",
      "Quad-beam proximity sensor prevents false activations",
      "Smart dynamic heating modulates wattage automatically"
    ],
    svgType: "matte-black-dryer"
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

        <!-- Top Centered Outlined Usage Pill -->
        <div class="usage-pill-badge">${product.usageLabel}</div>

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

// 4. Product Modal Setup & Populate
function openProductModal(productId) {
  const product = handDryersData.find(item => item.id === productId);
  if (!product) return;

  const modalTitle = document.getElementById("productModalLabel");
  const modalBody = document.getElementById("productModalBody");
  const modalEnquireBtn = document.getElementById("modalEnquireBtn");

  if (modalTitle) {
    modalTitle.innerHTML = `<strong>${product.displayTitle}</strong> <span class="badge bg-light text-navy ms-2">${product.model}</span>`;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="row align-items-center">
        <div class="col-md-5 text-center mb-4 mb-md-0">
          <img src="${product.image}" alt="${product.name}" class="modal-studio-img">
          <div class="mt-3">
            <span class="badge ${product.badgeClass} px-3 py-2 fs-6 rounded-pill">${product.usageLabel}</span>
            <div class="text-muted small mt-2"><i class="bi bi-shield-check text-success me-1"></i> ${product.warranty}</div>
          </div>
        </div>
        <div class="col-md-7">
          <h5 class="text-navy mb-2">Product Overview</h5>
          <p class="text-muted">${product.fullDesc}</p>
          
          <h6 class="text-navy mt-4 mb-2">Key Engineering Features</h6>
          <ul class="list-unstyled mb-4">
            ${product.features.map(f => `<li class="d-flex align-items-center gap-2 mb-2"><i class="bi bi-check-circle-fill text-teal"></i> <span class="small">${f}</span></li>`).join("")}
          </ul>

          <h6 class="text-navy mb-2">Technical Specifications</h6>
          <div class="table-responsive">
            <table class="spec-table">
              <tbody>
                <tr><th>Drying Time</th><td>${product.dryingTime}</td></tr>
                <tr><th>Air Velocity</th><td>${product.airSpeed}</td></tr>
                <tr><th>Power Consumption</th><td>${product.power}</td></tr>
                <tr><th>Noise Level</th><td>${product.noiseLevel}</td></tr>
                <tr><th>Body Material</th><td>${product.material}</td></tr>
                <tr><th>Motor Mechanism</th><td>${product.motor}</td></tr>
                <tr><th>Air Filtration</th><td>${product.filtration}</td></tr>
                <tr><th>Sensor Technology</th><td>${product.sensorType}</td></tr>
                <tr><th>Dimensions (H x W x D)</th><td>${product.dimensions}</td></tr>
                <tr><th>Drain / Drip Control</th><td>${product.drainTank}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  if (modalEnquireBtn) {
    modalEnquireBtn.onclick = function() {
      const modalEl = document.getElementById("productModal");
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
      enquireProduct(product.id);
    };
  }

  const modal = new bootstrap.Modal(document.getElementById("productModal"));
  modal.show();
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

// 7. Interactive ROI Cost Comparison Calculator (Paper Towels vs Smart Hand Dryers)
function calculateSavings() {
  const dailyUsers = parseInt(document.getElementById("calcUsers").value) || 250;
  const daysPerYear = parseInt(document.getElementById("calcDays").value) || 300;
  
  // Paper towels calculation:
  // Avg 2.5 paper towels per hand wash @ $0.015 per towel
  const towelsPerYear = dailyUsers * 2.5 * daysPerYear;
  const paperTowelCost = towelsPerYear * 0.015;

  // Hand dryer calculation:
  // Smart Hand Dryer: 10 seconds @ 1000W = 0.0028 kWh per dry @ $0.18 per kWh
  const dryerElectricityCost = dailyUsers * daysPerYear * 0.0028 * 0.18;

  // Annual Net Savings
  const annualSavings = Math.max(0, paperTowelCost - dryerElectricityCost);
  const savingsPercent = Math.round(((paperTowelCost - dryerElectricityCost) / paperTowelCost) * 100) || 92;
  const treesSaved = (towelsPerYear / 8000).toFixed(1); // 1 tree ~ 8,000 paper towels

  // Update DOM
  const savingsDisplay = document.getElementById("calcSavingsDisplay");
  const percentDisplay = document.getElementById("calcPercentDisplay");
  const treesDisplay = document.getElementById("calcTreesDisplay");
  const paperCostDisplay = document.getElementById("calcPaperCostDisplay");
  const dryerCostDisplay = document.getElementById("calcDryerCostDisplay");

  if (savingsDisplay) savingsDisplay.textContent = "$" + Math.round(annualSavings).toLocaleString();
  if (percentDisplay) percentDisplay.textContent = savingsPercent + "%";
  if (treesDisplay) treesDisplay.textContent = treesSaved + " Trees";
  if (paperCostDisplay) paperCostDisplay.textContent = "$" + Math.round(paperTowelCost).toLocaleString() + "/yr";
  if (dryerCostDisplay) dryerCostDisplay.textContent = "$" + Math.round(dryerElectricityCost).toLocaleString() + "/yr";
}

// 8. Gallery Lightbox Modal Viewer
const galleryItems = [
  {
    title: "Dual-Blade AeroJet in Corporate Tech Park",
    category: "Corporate",
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    desc: "Seamless hands-in installation eliminating paper towel clutter and damp floors in a Fortune 500 tech office washroom."
  },
  {
    title: "TurboBlast Stainless Steel in Luxury Hotel",
    category: "Hospitality",
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    desc: "Brushed AISI 304 finish blending harmoniously with marble vanities and brass tapware."
  },
  {
    title: "Executive Matte Black Series in VIP Airport Lounge",
    category: "Airports",
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    desc: "Architectural matte black edition with UV-C air sterilization installed across international terminal restrooms."
  },
  {
    title: "TitanForce Heavy Duty in International Transit Hub",
    category: "Transit",
    src: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=1200&q=80",
    desc: "Robust vandal-proof hand dryer setup capable of servicing over 15,000 travelers per day."
  },
  {
    title: "PureTouch Contactless Dryer in Medical Facility",
    category: "Healthcare",
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    desc: "Zero-touch HEPA-purified hand drying adhering to hospital contagion control guidelines."
  },
  {
    title: "SlimLine ADA Low-Profile Dryer in University Complex",
    category: "Education",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
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
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
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
    const phoneNumber = "919205920583"; // Commercial sales helpline
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
});

