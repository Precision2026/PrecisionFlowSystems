export interface SubCategory {
  subName: string;
  subItems: string[];
  specs?: Record<string, string>; // Optional: { "Size": "1/8 to 2 inch", "Material": "SS316" }
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
  items: (string | SubCategory)[];
  specs?: Record<string, string>; // Category-level specs
}
export const productCategories: ProductCategory[] = [
  {
    name: "Tube Fittings",
    slug: "tube-fittings",
    specs: {
      Size: "1/16 OD to 2 OD, Od to 50mm OD",
      Materials:
        "Titanium, Monel, Nickel, Inconel, Hastelloy, Aluminum, Brass, Bronze",
      Pressure: "3000 psi (Brass) / 6000 psi (SS)",
      Threads: "NPT, BSP, JIS-PT, SAE, Metric",
    },
    description:
      "Double ferrule instrumentation tube fittings providing leak-proof, torque-free seals in all instrumentation and process tubing.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    items: [
      "Front Ferrule",
      "Back Ferrule",
      "Nut",
      "Male Connector",
      "Female Connector",
      "Straight Connector(Union)",
      "Reducing Union",
      "Bulkhead Male Connector",
      "Bulkhead Female Connector",
      "Bulkhead Union",
      "Bulkhead Reducing Union",
      "Tube End Closure",
      "Fittings End Closure",
      "Union Elbow",
      "Male Elbow",
      "Female Elbow",
      "Male Adopter",
      "Female Adopter",
      "Union Cross",
      "Union Tee",
      "Reducing Union Tee",
      "Bulkhead Elbow",
      "Male Run Tee",
      "Male Branch Tee",
      "Female Branch Tee",
      "Female Run Tee",
      "Reducer",
    ],
  },
  {
    name: "Pipe Fittings",
    slug: "pipe-fittings",
    specs: {
      Size: '1/8" to 2"',
      Materials: "SS 304, SS 316, CS, MS, Brass, Copper, PVC",
      Pressure: "Up to 10,000 psi",
      Threads: "SAE, Metric Tapered/Parallel",
    },
    description:
      "Precision machined pipe fittings manufactured to meet the rigorous requirements of high-pressure industrial piping systems.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    items: [
      "Hex Plug",
      "Hex Bushing",
      "Hex Nipple",
      "Hydraulic Hex Nipple",
      "Hex Cap",
      "Hex socket",
      "Hex Adopter",
      "Male Elbow",
      "Female Elbow",
      "Street Elbow",
      "Male Tee",
      "Female Cross",
      "Female Tee",
      "Street Tee",
      "Branch Tee",
      "Round socket",
    ],
  },
  {
    name: "Instrumentation Valves",
    slug: "instrumentation-valves",
    description:
      "Reliable flow control solutions including needle, ball, and check valves for instrumentation and process control applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    items: [
      {
        subName: "Needle Valves",
        subItems: [
          "Needle Valve (Female x Female)",
          "Needle Valve (male x Male)",
          "Needle Valve (Female x Male)",
          "Panel Mount Needle Valve (Female x Female)",
          "Panel Mount Needle Valve (OD x OD)",
          "Angle Type Needle Valve (Male x Male)",
        ],
        specs: {
          Size: '1/8" to 2"',
          Materials: "SS316 Body, Stem & Needle (SS304, CS, Brass available)",
          "Packing/Seat": "PTFE / Graphite Packing; PTFE / Metal-to-Metal Seat",
          Pressure: "6,000 psi standard (Up to 15,000 psi optional)",
          Temperature: "-40°C to +230°C (PTFE) / +450°C+ (Graphite)",
          Connections: "NPT, BSP, ISO, Weld, Flanged",
          Standards: "ASME B16.34, API 598, ASME B1.20.1",
        },
      },
      {
        subName: "Ball Valves",
        subItems: [
          "Hex Body Ball Valve (Female x Female)",
          "Round Body Ball Valve (Female x Female)",
          "Square Body Ball Valve (Female x Female)",
          "High Pressure Ball Valve (Female x Female)",
          "2 Way Panel Mount Ball Valve (Female x Female)",
          "2 Way Panel Mount Ball Valve (OD x OD)",
          "3 Way Panel Mount Ball Valve (Female x Female)",
          "3 Way Panel Mount Ball Valve (OD x OD)",
        ],
        specs: {
          Size: '1/8" to 2"',
          "Body Material":
            "SS304 / SS316 / Carbon Steel / Brass / Monel / Hastelloy",
          "Stem/Needle": "SS316",
          Packing: "PTFE / Graphite",
          Seat: "PTFE / Metal-to-Metal",
          Pressure: "Up to 6,000 psi standard (up to 15,000 psi optional)",
          Temperature: "-40 °C to +230 °C (PTFE) / +450 °C+ (graphite)",
          "End Connections": "NPT, BSP, ISO, Weld, Flanged",
          Standards: "ASME B16.34, API 598, ASME B1.20.1",
        },
      },
      {
        subName: "Relief Safety Valves",
        subItems: [
          "Check Valve (Female x Female)",
          "Check Valve (NPT Male x Male)",
          "Check Valve (Inch OD Tubes)",
          "Check Valve (Female x Male)",
        ],
        specs: {
          "Maximum Working Pressure": "Up to 10,000 psi (689 bar)",
          "Working Temperature":
            "• Up to 212°F (100°C) with Delrin Packing\n• Up to 464°F (240°C) with PTFE Packing\n• Up to 842°F (450°C) with PEEK Packing",
          "Body Material":
            "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          Size: '• 1/4" ~ 2" Pipe Thread • 3 ~ 25 mm OD • 1/8" ~ 1" OD',
          "Leak Testing":
            "Leak-tight performance tested for every valve with nitrogen / air at maximum working pressure",
          Testing: "100% Factory Tested",
          Mounting: "Panel Mountable (Optional)",
          "Operating Torque": "Low Operating Torque",
          Design:
            "• Floating Ball Design for Positive Sealing\n• Compact Design • Single Piece & Three Piece Design",
          Configuration: "2 Way / 3 Way / 5 Way",
          "Material Traceability": "Available",
        },
      },
      {
        subName: "Safety Relief Valves",
        subItems: [
          "Male x Female Threaded 6000 psi",
          "Male x Tube OD 6000 psi ",
          "OD x OD 6000 psi",
          "Check Valve (Female x Male)",
          "Female Threaded 6000 psi",
        ],
        specs: {
          "Maximum Working Pressure": "Up to 10,000 psi (689 bar)",
          "Working Temperature":
            "-10°F (-23°C) to 392°F (200°C) with Viton ‘O’ Ring",
          "Body Material":
            "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          "Thread Type": "NPT / BSPT / ISO / SAE",
          Size: "• 1/8” ~ 2” Pipe Thread • 3 ~ 25 mm OD • 1/8” ~ 1” OD",
          Operation: "Instant shut-off in upstream condition",
          Design: "Compact Design",
          Testing: "100% Factory Tested",
          "Material Traceability": "Available",
        },
      },
      {
        subName: "Monoflanges Valves",
        subItems: [
          "monoflange-valve-1",
          "monoflange-valve-2",
          "monoflange-valve-3",
        ],
        specs: {
          "Max. Working Pressure": "Up to 6,000 psi (414 bar)",
          Temperature:
            "• –65°F (–54°C) to 464°F (240°C) with PTFE Packing\n• –65°F (–54°C) to 842°F (450°C) with Graphite Packing",
          Material: "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          "Connection / Mounting":
            "• Pipe to Pipe • Pipe to Flange • Flange to Flange • Remote\n• Remote Mounting Base • Vent / Direct / Integral Mounting",
          "Design Features":
            "• Standard Non-Rotating Trim • Low Operating Torque • One-Piece High-Strength Bar",
          Testing: "100% Factory Tested",
          Traceability: "Material Traceability Available",
        },
      },
      {
        subName: "Manifold Valves",
        subItems: [
          "Manifold Valve (2 Way)",
          "Double Block & Bleed Gauge Valves",
          "5 Way T Type Manifold Valve",
        ],
        specs: {
          "Max. Working Pressure": "Up to 10,000 psi (414 bar)",
          Temperature:
            "• –65°F (–54°C) to 464°F (240°C) with PTFE Packing\n• –65°F (–54°C) to 842°F (450°C) with Graphite Packing",
          Material: "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          "Connection / Mounting":
            "• Pipe to Pipe • Pipe to Flange • Flange to Flange • Remote",
          "Design Features":
            "• Remote Mounting Base • Vent / Direct / Integral Mounting • Standard Non-Rotating Trim • Low Operating Torque • One-Piece High-Strength Bar Stock & Forged Body",
          Testing: "100% Factory Tested",
          Traceability: "Material Traceability Available",
        },
      },
      "Globe Valve",
      "Gate Valve", // Individual item
    ],
  },
  {
    name: "Specialized Equipment",
    slug: "specialized-equipment",
    description:
      "High-quality accessories and heavy-duty industrial components including pressure gauges and condensate pots.",
    image: "https://images.unsplash.com/photo-1535813547-99c956a0d58a",
    items: [
      {
        subName: "Condesate Pots",
        subItems: ["condesate-pots"],
        specs: {
          Material: "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          Design:
            "• Small, thin & lightweight design\n• Allows combination with other valves in series for safe shutoff",
          "End Connection": "NPT / SW as per ANSI B2.1 & ANSI B16.11",
          "Wall Thickness": "Schedule 40 / 80 / 160",
          "Max. Working Pressure": "Up to 10,000 psi (689 bar)",
          Size: "1/2” ~ 2”",
          "Port Configuration": "2 Port / 4 Port / 6 Port / 8 Port / 10 Port",
          Testing: "• 100% Factory Tested • 100% Radiography of Pipe Joints",
          Traceability: "Material Traceability Available",
        },
      },
      {
        subName: "Air Header",
        subItems: [
          "8 Way Air Header With Needle Valves",
          "10 Way Air Header With Ball Valves",
          "10 Way Air Header With Needle Valves",
        ],
        specs: {
          Material: "SS304L / SS316L / Monel / Hastelloy / Inconel / Duplex",
          "Fabrication Standard": "Fabrication as per ASME Sec VIII Div 1 (ED)",
          "Design Features":
            "• Small, thin & lightweight design\n• Allows combination with other valves in series for safe shutoff",
          "End Connections":
            "• Threaded • Flanged • Socket Weld\n• As per ANSI B2.1 & ANSI B16.11",
          "Wall Thickness": "Schedule 40 / 80 / 160",
          "Max. Working Pressure": "Up to 10,000 psi (689 bar)",
          "Size Range": "1/2” ~ 2”",
          "Port Configuration": "2 Port / 4 Port / 6 Port / 8 Port / 10 Port",
          Testing: "• 100% Factory Tested\n• 100% Radiography of Pipe Joints",
          Traceability: "Material Traceability Available",
        },
      },
      "Flanges",
    ],
  },
];

// // constants/products.ts
// export const productCategories = [
//   {
//     name: "Instrumentation Valves",
//     slug: "instrumentation-valves",
//     description: "Reliable flow control solutions including needle, ball, and check valves for instrumentation and process control applications.",
//     image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
//     items: [
//       "Ball Valves", "Needle Valves", "Check Valve", "Manifold Valves (2W, 3W, 5W)",
//       "Monoflanges Valves (Sbbs, Dbbs)", "Gate Valve", "Globe Valve",
//     ],
//   },
//   {
//     name: "Specialized Equipment",
//     slug: "specialized-equipment",
//     description: "High-quality accessories and heavy-duty industrial components including pressure gauges and condensate pots.",
//     image: "https://images.unsplash.com/photo-1535813547-99c956a0d58a?auto=format&fit=crop&q=80&w=800",
//     items: [
//       "Pressure Gauge Accessories", "Seamless Tube (SS, Hestoalloy, Monel, Inconel)",
//       "Pipe (MS, SS)", "Condesate Pots", "Air Header", "Flanges",
//     ],
//   },
// ];
