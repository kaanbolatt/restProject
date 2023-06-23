import { Promotion } from './promotion';

export const PROMOTIONS: Promotion[] = [
  {
    id: 0,
    name: 'Salad',
    image: '/assets/images/f1.jpg',
    price: '24.32',
    availability: true,
    description: 'Featuring mouthwatering combinations with a choice of five different salads, ' +
      'six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. ' +
      'All for just $19.99 per person',
    contents: 'basil, olive oil, tomato, egg'
  }, {
    id: 1,
    name: 'Pizza',
    image: '/assets/images/f2.jpg',
    price: '49.64',
    availability: true,
    description: 'Introducing our mouth-watering pizza selection!  Each bite is a journey through a medley of tantalizing toppings, a perfect blend of savory and succulent goodness. Whether you prefer the classic Margherita with its harmonious combination of fresh basil, mozzarella, and ripe tomatoes, or the bold and fiery flavors of our Spicy Pepperoni, we have a pizza to satisfy every palate. Our crust is expertly crafted, achieving the ideal balance of crispy and chewy, providing the perfect foundation for the explosion of flavors that awaits you. Treat yourself to a slice of pizza perfection today!',
    contents: 'Tomato Sauce, cheese'
  }, {
    id: 2,
    name: 'Salmon',
    image: '/assets/images/f3.jpg',
    price: '89.21',
    availability: true,
    description: 'Experience the exquisite taste of our premium salmon products! Treat yourself to the luxury of our succulent salmon today!',
    contents: 'basil, olive oil'
  }, {
    id: 3,
    name: 'Fruit Toast',
    image: '/assets/images/f4.jpg',
    price: '14.99',
    availability: false,
    description: 'Indulge in the delightful flavors of our fruity toast creations!  Whether you choose our classic fruit medley or opt for a customized combination, our fruit toast is a refreshing and satisfying treat for any time of the day. Start your morning with a burst of fruity goodness or enjoy it as a light and delicious snack. Treat yourself to the delightful experience of our fruit toast today!',
    contents: 'spicy salami, black olives'
  }, {
    id: 4,
    name: 'Waste Hamburger',
    image: '/assets/images/f5.jpg',
    price: '19.99',
    availability: true,
    description: 'Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum,Lorem Ipsum',
    contents: 'tomato sauce, cheese'
  },
];
