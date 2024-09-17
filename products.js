const categories = {
  default: {
    default: "-- Categories --",
  },
  electronics: {
    default: "Electronics",
    smartphones: "Smartphones",
    laptops: "Laptops",
    tablets: "Tablets",
    headphones: "Headphones",
    smartwatches: "Smartwatches",
  },
  fashion: {
    default: "Fashion",
    menclothing: "Men's Clothing",
    womenclothing: "Women's Clothing",
    footwear: "Footwear",
    accessories: "Accessories",
  },
  homeandkitchen: {
    default: "Home & Kitchen",
    furniture: "Furniture",
    appliances: "Appliances",
    cookware: "Cookware",
    bedding: "Bedding",
  },
  beautyandhealth: {
    default: "Beauty & Health",
    skincare: "Skincare",
    makeup: "Makeup",
    haircare: "Haircare",
    healthandwellness: "Health and Wellness",
  },
};

const products = [
  {
    id: 1,
    name: "iPhone 15",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "smartphones"],
    price: 1400,
    stock: true,
  },
  {
    id: 2,
    name: "MacBook Air",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "laptops"],
    price: 2700,
    stock: true,
  },
  {
    id: 3,
    name: "Dell XPS 13",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "laptops"],
    price: 1400,
    stock: false,
  },
  {
    id: 4,
    name: "HP Spectre x360",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "laptops"],
    price: 900,
    stock: true,
  },
  {
    id: 5,
    name: "Samsung Galaxy S23",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "smartphones"],
    price: 1100,
    stock: true,
  },
  {
    id: 6,
    name: "Google Pixel 8",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "smartphones"],
    price: 790,
    stock: false,
  },
  {
    id: 7,
    name: "Sony WH-1000XM5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "headphones"],
    price: 100,
    stock: true,
  },
  {
    id: 8,
    name: "Apple Watch Series 9",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "smartwatches"],
    price: 120,
    stock: true,
  },
  {
    id: 9,
    name: "Samsung Galaxy Watch 6",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "smartwatches"],
    price: 100,
    stock: true,
  },
  {
    id: 10,
    name: "iPad Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "tablets"],
    price: 1000,
    stock: true,
  },
  {
    id: 11,
    name: "Microsoft Surface Go",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "tablets"],
    price: 900,
    stock: false,
  },
  {
    id: 12,
    name: "Samsung Galaxy Tab S8",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum corrupti voluptatum repellendus, reiciendis iste quia nisi dolorem a corporis perspiciatis! Vel tempora possimus quod alias et, magni magnam! Excepturi, quaerat.",
    category: ["electronics", "tablets"],
    price: 825,
    stock: true,
  },
];

export { categories, products };