interface FeatureSection {
  title: string;
  content: string[];
}

interface ProductSpecs {
  brand: string;
  type: string;
  productId: string;
}

export interface Product {
  id: string;
  title: string;
  availability: string;
  isInStock: boolean;
  imageUrl?: string;
  buttonText?: string;
  // Extended properties for detail page
  specs?: ProductSpecs;
  features?: FeatureSection[];
  additionalImages?: string[];
  mainImage?: string;
  leadTime?: string;
}

export const products: Product[] = [
  {
    id: 'prod-1',
    title: 'Common Area Activity Radar Sensor System',
    availability: 'Lead Time: 2–3 Months',
    isInStock: false,
    imageUrl: '/images/prod-1.png',
    buttonText: 'Learn More',
    mainImage: '/images/prod-1.png',
    specs: {
      brand: 'euflora',
      type: 'radar detectors & system',
      productId: 'rd-01'
    },
    features: [
      {
        title: 'Multi-Function Detection',
        content: [
          'Supports fall detection, inactivity alerts, activity monitoring, and posture analysis',
          'High-precision millimeter-wave radar technology, non-contact sensing, privacy-friendly'
        ]
      },
      {
        title: 'Installation',
        content: [
          'Ceiling-mounted with Type-C power connection',
          'Detection range up to approx. 6m, covering wide areas'
        ]
      },
      {
        title: 'Device Features',
        content: [
          'Operating frequency: 58GHz–63.5GHz radar band',
          'Detection angle: approx. 100° horizontal, 100° vertical',
          'Differentiates between static presence and active movement, supports multi-parameter monitoring'
        ]
      },
      {
        title: 'Connectivity Options',
        content: [
          'Wi-Fi', 'Landline', 'Zigbee', 'LoRa', 'Bluetooth'
        ]
      },
      {
        title: 'Information Required Before Order',
        content: [
          'Size of the care center and number of rooms',
          'Type of internet connection currently in use (Wi-Fi / Landline / Others)',
          'Whether an upgrade plan or a new plan design is required'
        ]
      },
      {
        title: 'Planning & Flexibility',
        content: [
          'Solutions can be tailored as upgrades to existing infrastructure or new system designs',
          'Flexible expansion for future upgrades and integration'
        ]
      },
      {
        title: 'Lead Time',
        content: [
          'Standard lead time: approx. 2–3 months'
        ]
      }
    ],
    additionalImages: ['/images/prod-1.png', '/images/prod-1.png', '/images/prod-1.png'],
    leadTime: '2–3 Months'
  },
  {
    id: 'prod-2',
    title: 'Bathroom Fall Detection Radar Sensor',
    availability: 'Lead Time: 2–3 Months',
    isInStock: false,
    imageUrl: '/images/prod-2.png',
    buttonText: 'Learn More',
    mainImage: '/images/prod-2.png',
    specs: {
      brand: 'euflora',
      type: 'radar detectors & system',
      productId: 'rd-02'
    },
    features: [
      {
        title: 'Multi-Function Detection',
        content: [
          'Supports fall detection, inactivity alerts, activity monitoring, and posture analysis',
          'High-precision millimeter-wave radar technology, non-contact sensing, privacy-friendly'
        ]
      },
      {
        title: 'Installation',
        content: [
          'Ceiling-mounted with Type-C power connection',
          'Detection range up to approx. 6m, covering wide areas'
        ]
      },
      {
        title: 'Device Features',
        content: [
          'Operating frequency: 58GHz–63.5GHz radar band',
          'Detection angle: approx. 100° horizontal, 100° vertical',
          'Differentiates between static presence and active movement, supports multi-parameter monitoring'
        ]
      },
      {
        title: 'Connectivity Options',
        content: [
          'Wi-Fi', 'Landline', 'Zigbee', 'LoRa', 'Bluetooth'
        ]
      },
      {
        title: 'Information Required Before Order',
        content: [
          'Size of the care center and number of rooms',
          'Type of internet connection currently in use (Wi-Fi / Landline / Others)',
          'Whether an upgrade plan or a new plan design is required'
        ]
      },
      {
        title: 'Planning & Flexibility',
        content: [
          'Solutions can be tailored as upgrades to existing infrastructure or new system designs',
          'Flexible expansion for future upgrades and integration'
        ]
      },
      {
        title: 'Lead Time',
        content: [
          'Standard lead time: approx. 2–3 months'
        ]
      }
    ],
    additionalImages: ['/images/prod-2.png', '/images/prod-2.png', '/images/prod-2.png'],
    leadTime: '2–3 Months'
  },
  {
    id: 'prod-3',
    title: 'Breathable Comfort Mattress',
    availability: 'Availability: In Stock',
    isInStock: true,
    imageUrl: '/images/prod-3.png',
    buttonText: 'Learn More',
    mainImage: '/images/prod-3.png',
    specs: {
      brand: 'euflora',
      type: 'caring products',
      productId: 'mt-01'
    },
    features: [
      {
        title: 'Air Permeability',
        content: [
          '3D air fiber structure allows excellent ventilation and micro‑circulation',
          'Keeps users warm in winter and cool in summer, ensuring year‑round comfort'
        ]
      },
      {
        title: 'Water Permeability & Easy Cleaning',
        content: [
          'Honeycomb texture enables water to pass through easily',
          'Dirt and residues can be washed away quickly, supporting water‑washable cleaning'
        ]
      },
      {
        title: 'Durability & Resilience',
        content: [
          'Resistant to deformation, compression, and oxidation',
          'Maintains shape and performance over long‑term use'
        ]
      },
      {
        title: 'Antibacterial & Hygiene Protection',
        content: [
          'Inhibits mites and suppresses bacterial growth',
          'Moisture‑proof, mold‑proof, and anti‑corrosion, making it easy to clean and maintain'
        ]
      },
      {
        title: 'Environmental Protection',
        content: [
          'Made with imported raw materials, free from toxic glue',
          'Safe for both the environment and human body'
        ]
      },
      {
        title: 'Material & Structure',
        content: [
          'Constructed with 4D air fiber elastic structure from polyethylene (PE) and POE polymers',
          'Thickness options: 2 cm to 10 cm (can be layered for extra thickness)',
          'Maximum width: up to 2 meters, length: unlimited'
        ]
      },
      {
        title: 'Versatility of Use',
        content: [
          'Suitable for mattress core, pillow core, sofa cushions, baby and mother care products',
          'Flexible applications across healthcare and daily living needs'
        ]
      }
    ],
    additionalImages: ['/images/prod-3.png', '/images/prod-3.png', '/images/prod-3.png']
  },
  {
    id: 'prod-4',
    title: 'Commode Shower Chair',
    availability: 'Availability: In Stock',
    isInStock: true,
    imageUrl: '/images/prod-4.png',
    buttonText: 'Learn More',
    mainImage: '/images/prod-4.png',
    specs: {
      brand: 'euflora',
      type: 'care products',
      productId: 'CC-01'
    },
    features: [
      {
        title: '3-in-1 Versatility',
        content: [
          'Functions as a bedside commode, toilet safety frame (placed over a regular toilet), or a shower chair.',
          'Designed for elderly, disabled, or mobility‑challenged users.'
        ]
      },
      {
        title: 'Premium Stainless Steel Frame',
        content: [
          'Constructed from high‑grade stainless steel, ensuring long‑lasting durability and rust resistance—even in wet bathroom environments.',
          'BPA‑free materials used for safety, making it suitable for sensitive users.',
          'Supports up to 300 lbs (136 kg) while remaining lightweight.'
        ]
      },
      {
        title: 'Tool-Free Assembly & Adjustable Height',
        content: [
          'Quick, no‑tools assembly in just minutes.',
          'Built‑in locking pins allow for customizable seat height to suit different users.'
        ]
      },
      {
        title: 'Mobility & Stability',
        content: [
          '4 silent swivel caster wheels allow smooth rolling across multiple floor surfaces.',
          'Each wheel is equipped with a foot brake for secure positioning.',
          'A foldable footrest provides extra comfort during transfers or seated use.'
        ]
      },
      {
        title: 'Easy Cleaning & Hygiene',
        content: [
          'Includes a 6.3 qt detachable commode bucket with a carry handle and protective cover.',
          'Bucket is simple to remove, empty, and clean.',
          'Compatible with HygiCare commode liners for faster, hygienic disposal.'
        ]
      },
      {
        title: 'Comfort-Oriented Design',
        content: [
          'Wide seating surface with ergonomic armrests for added support.',
          'Noise‑free operation ensures a discreet and comfortable experience.'
        ]
      },
      {
        title: 'Specifications',
        content: [
          'Material: Stainless steel frame, BPA‑free components',
          'Weight Capacity: Up to 300 lbs (136 kg)',
          'Bucket Capacity: 6.3 qt',
          'Wheels: 4 swivel casters with brakes',
          'Assembly: Tool-free',
          'Package Weight: ~16.7 lbs',
          'Dimensions (packaging): 30.55 x 21.97 x 7.4 inches'
        ]
      }
    ],
    additionalImages: ['/images/prod-4.png', '/images/prod-4.png', '/images/prod-4.png']
  }
];
