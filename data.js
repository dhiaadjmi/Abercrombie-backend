import bcrypt from 'bcryptjs';

const data = {
 
  users: [
    {
      name: 'admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('adminadmin'),
      isAdmin: true,
    },
    {
      name: 'dhia',
      email: 'dhia@gmail.com',
      password: bcrypt.hashSync('dhiadhia'),
      isAdmin: false,
    },
  ],

    products: [
      {
        //_id: '1',
        name: 'hoodie',
        slug: 'hoodie',
        category: 'Shirts',
        image: '/images/aber1.webp', 
        price: 120,
        countInStock: 10,
        brand: 'Nike',
        rating: 4,
        numReviews: 10,
        description: 'high quality shirt',
      },

  /** 
      {
        //_id: '2',
        name: 'Adidas Fit Shirt',
        slug: 'adidas-fit-shirt',
        category: 'Shirts',
        image: '/images/aber1.webp',
        price: 250,
        countInStock: 0,
        brand: 'Adidas',
        rating: 4,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '3',
        name: 'Nike Slim Pant',
        slug: 'nike-slim-pant',
        category: 'Pants',
        image: '/images/aber1.webp',
        price: 25,
        countInStock: 15,
        brand: 'Nike',
        rating: 4,
        numReviews: 14,
        description: 'high quality product',
      },
      {
        //_id: '4',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/aber1.webp',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 3,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '5',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/aber1.webp',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 4,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        //_id: '6',
        name: 'Adidas Fit Pant',
        slug: 'adidas-fit-pant',
        category: 'Pants',
        image: '/images/aber1.webp',
        price: 65,
        countInStock: 5,
        brand: 'Puma',
        rating: 5,
        numReviews: 10,
        description: 'high quality product',
      },
    */
    ],
  };
  export default data;