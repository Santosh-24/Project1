import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Santosh",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "user1",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Chakkras",
      slug: "Diwali-Chakkaras",
      category: "fancy",
      image: "/images/Chakkras.jpg",
      countInStock: 10,
      items: 8,
      price: 80,
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: "2",
      name: "Flower pots",
      slug: "Diwali-FlowerPots",
      category: "fancy",
      image: "/images/chakkras.jpg",
      countInStock: 10,
      items: 8,
      price: 90,
      rating: 5,
      numReviews: 10,
    },
    {
      // _id: "3",
      name: "Atom Bombs",
      slug: "Diwali-AtomBombs",
      category: "Bombs",
      image: "/images/atom-bombs.png",
      countInStock: 0,
      items: 8,
      price: 60,
      rating: 3,
      numReviews: 10,
    },
    {
      // _id: "4",
      name: "Chakkkras",
      slug: "Diwali-Chakkarass",
      category: "fancy",
      image: "/images/Chakkras.jpg",
      countInStock: 10,
      items: 8,
      price: 80,
      rating: 3.5,
      numReviews: 10,
    },
  ],
};

export default data;

// {
// 	"email": "admin@example.com",
//   	"password": "123456"
// }
