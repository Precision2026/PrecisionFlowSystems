
export interface SubCategory {
  subName: string;
  subItems: string[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  description: string;
  image: string;
  items: (string | SubCategory)[]; // The updated type
}
export const productCategories: ProductCategory[] = [
  {
    name: "Tube Fittings",
    slug: "tube-fittings",
    description: "Double ferrule instrumentation tube fittings providing leak-proof, torque-free seals in all instrumentation and process tubing.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    items: [
      "Front Ferrule", "Back Ferrule", "Nut", "Male Connector", "Female Connector",
      "Straight Connector(Union)", "Reducing Union", "Bulkhead Male Connector",
      "Bulkhead Female Connector", "Bulkhead Union", "Bulkhead Reducing Union",
      "Tube End Closure", "Fittings End Closure", "Union Elbow", "Male Elbow",
      "Female Elbow", "Male Adopter", "Female Adopter", "Union Cross", "Union Tee",
      "Reducing Union Tee", "Bulkhead Elbow", "Male Run Tee", "Male Branch Tee",
      "Female Branch Tee", "Female Run Tee", "Reducer",
    ],
  },
    {
    name: "Pipe Fittings",
    slug: "pipe-fittings",
    description: "Precision machined pipe fittings manufactured to meet the rigorous requirements of high-pressure industrial piping systems.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    items: [
      "Hex Plug", "Hex Bushing", "Hex Nipple", "Hydraulic Hex Nipple", "Hex Cap",
      "Hex socket", "Hex Adopter", "Male Elbow", "Female Elbow", "Street Elbow",
      "Male Tee", "Female Cross", "Female Tee", "Street Tee", "Branch Tee", "Round socket",
    ],
  },
  {
    name: "Instrumentation Valves",
    slug: "instrumentation-valves",
    description: "Reliable flow control solutions including needle, ball, and check valves for instrumentation and process control applications.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
    items: [
      {
        subName: "Needle Valves",
        subItems: ["Needle Valve (Female x Female)", "Needle Valve (male x Male)", "Needle Valve (Female x Male)", "Panel Mount Needle Valve (Female x Female)", "Panel Mount Needle Valve (OD x OD)", "Angle Type Needle Valve (Male x Male)"]
      },
      {
        subName: "Ball Valves",
        subItems: ["Hex Body Ball Valve (Female x Female)", "Round Body Ball Valve (Female x Female)", "Square Body Ball Valve (Female x Female)", "High Pressure Ball Valve (Female x Female)" , "2 Way Panel Mount Ball Valve (Female x Female)", "2 Way Panel Mount Ball Valve (OD x OD)", "3 Way Panel Mount Ball Valve (Female x Female)", "3 Way Panel Mount Ball Valve (OD x OD)"]
      },
      {
        subName: "Relief Safety Valves",
        subItems: ["Check Valve (Female x Female)", "Check Valve (NPT Male x Female)", "Check Valve (Inch OD Tubes)", "Check Valve (Female x Male)"]
      },
      {
        subName: "Safety Relief Valves",
        subItems: ["Male x Female Threaded 6000 psi", "Male x Tube OD 6000 psi ", "OD x OD 6000 psi", "Check Valve (Female x Male)", "Female Threaded 6000 psi"]
      },
      {
        subName: "Monoflanges Valves",
        subItems: ["monoflange-valve-1", "monoflange-valve-2", "monoflange-valve-3"]
      },
      {
        subName: "Manifold Valves",
        subItems: ["Manifold Valve (2 Way)", "Double Block & Bleed Gauge Valves", "5 Way T Type Manifold Valve"]
      },
      "Globe Valve",
      "Gate Valve" // Individual item
    ],
  },
  {
    name: "Specialized Equipment",
    slug: "specialized-equipment",
    description: "High-quality accessories and heavy-duty industrial components including pressure gauges and condensate pots.",
    image: "https://images.unsplash.com/photo-1535813547-99c956a0d58a",
    items: [
       {
        subName: "Condesate Pots",
        subItems: ["", "", ""]
      },
      {
        subName: "Air Header",
        subItems: ["8 Way Air Header With Needle Valves", "10 Way Air Header With Ball Valves", "10 Way Air Header With Needle Valves"]
      },
      "Flanges"
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