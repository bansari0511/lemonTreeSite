//SOCIAL ICONS
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

//SPECIALS FOOD
import greekSalad from './assets/specials/greekSalad.jpg';
import bruschetta from './assets/specials/bruschetta.jpg';
import lemonDessert from './assets/specials/lemonDessert.jpg';

// TESTIMONIALS
import andrea from './assets/testimonials/andrea.jpg';
import jane from './assets/testimonials/jane.jpg';
import john from './assets/testimonials/john.jpg';
import mark from './assets/testimonials/mark.jpg';

// LINKS FOR NAVBAR
export const links = [
  {
    id: 1,
    link: 'about',
  },
  {
    id: 2,
    link: 'menu',
  },
  {
    id: 3,
    link: 'testimonials',
  },
  {
    id: 4,
    link: 'contact',
  },
];

export const specials = [
  {
    id: 1,
    image: greekSalad,
    name: 'Greek Salad',
    price: 'Rs. 600',
    description:
      'Enjoy our famous Greek salad, a crisp mix of lettuce, peppers, and olives, topped with rich Italian-style feta and crunchy garlic-rosemary croutons—a true Mediterranean delight.',
  },
  {
    id: 2,
    image: bruschetta,
    name: 'Bruschetta',
    price: 'Rs. 250',
    description:
      'Our Bruschetta features perfectly grilled bread, infused with the rich aroma of garlic and seasoned with a touch of sea salt and premium olive oil. A simple yet irresistible classic, bursting with authentic Italian flavors.',
  },
  {
    id: 3,
    image: lemonDessert,
    name: 'Lemon Dessert',
    price: 'Rs. 100',
    description:
      'This dish comes straight from Grandma’s cherished recipe book, crafted with the finest, authentically sourced ingredients to bring you a taste of tradition in every bite.',
  },
];

// TESTIMONIALS
export const testimonials = [
  {
    id: 1,
    image: andrea,
    name: 'Andrea Smith',
  },
  {
    id: 2,
    image: jane,
    name: 'Jane Marks',
  },
  {
    id: 3,
    image: john,
    name: 'John Doe',
  },

  {
    id: 4,
    image: mark,
    name: 'Mark James',
  },
];

// FOOTER CONTACT
export const contacts = [
  {
    id: 1,
    link: 'mailto:test@abc.com',
    title: 'test@abc.com',
  },
  {
    id: 2,
    link: 'tel:+912354789',
    title: '(91) 235-54789',
  },
  {
    id: 3,
    link: 'mailto:littlemon@test.com',
    title: 'littleLemon@test.com',
  },
];

// FOOTER SOCIAL LINKS
export const socials = [
  {
    id: 1,
    child: <FaFacebook size={30} />,
    link: 'https://facebook.com',
  },
  {
    id: 2,
    child: <FaInstagram size={30} />,
    link: 'https://instagram.com/',
  },
  {
    id: 4,
    child: <FaTwitter size={30} />,
    link: 'https://twitter.com/',
  },
];
