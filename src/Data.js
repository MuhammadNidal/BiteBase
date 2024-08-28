// data.js

const restaurants = [
  {
    id: 1,
    name: "Spice Haven",
    address: "123 Flavor Street, Food City",
    phone: "123-456-7890",
    menuItems: [
      {
        id: 1,
        
        name: "Plain Rice",
        description: "Steamed white rice, perfect as a side dish.",
        price: 2.99,
        category: "Rice",
        image: "plain_rice.jpg",
        ingredients: ["White Rice", "Water", "Salt"],
        nutrition: {
          calories: 200,
          protein: "4g",
          carbs: "44g",
          fat: "0g",
          sugar: "0g",
        },
        isAvailable: true,
        isVegetarian: true,
        spicyLevel: 0,
      },
      {
        id: 2,
        name: "Chicken Biryani",
        description: "Aromatic basmati rice cooked with tender chicken and spices.",
        price: 10.99,
        category: "Biryani",
        image: "chicken_biryani.jpg",
        ingredients: [
          "Basmati Rice",
          "Chicken",
          "Yogurt",
          "Onion",
          "Tomato",
          "Spices",
          "Cilantro",
          "Mint",
        ],
        nutrition: {
          calories: 350,
          protein: "25g",
          carbs: "45g",
          fat: "10g",
          sugar: "2g",
        },
        isAvailable: true,
        spicyLevel: 3, // Moderate spiciness
      },
    ],
  },
  {
    id: 2,
    name: "Curry Delight",
    address: "456 Aroma Avenue, Flavor Town",
    phone: "987-654-3210",
    menuItems: [
      {
        id: 1,
        name: "Brown Rice",
        description: "Nutty-flavored whole grain brown rice.",
        price: 3.99,
        category: "Rice",
        image: "brown_rice.jpg",
        ingredients: ["Brown Rice", "Water", "Salt"],
        nutrition: {
          calories: 216,
          protein: "5g",
          carbs: "46g",
          fat: "1g",
          sugar: "0g",
        },
        isAvailable: true,
        isVegetarian: true,
        spicyLevel: 0,
      },
      {
        id: 2,
        name: "Mutton Biryani",
        description: "Flavorful biryani with succulent mutton pieces, basmati rice, and spices.",
        price: 12.99,
        category: "Biryani",
        image: "mutton_biryani.jpg",
        ingredients: [
          "Basmati Rice",
          "Mutton",
          "Yogurt",
          "Onion",
          "Tomato",
          "Spices",
          "Cilantro",
          "Mint",
        ],
        nutrition: {
          calories: 400,
          protein: "30g",
          carbs: "50g",
          fat: "15g",
          sugar: "3g",
        },
        isAvailable: false, // Currently not available
        spicyLevel: 4, // High spiciness
      },
    ],
  },
];

export default restaurants;