export interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  badge: string | null
  color: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Chicken Shawarma Plate',
    description: 'Spiced chicken strips with golden tahini drizzle, turmeric rice, fresh tomato & cucumber salad, and creamy hummus',
    image: '/images/menu/menu_shawarma.jpg',
    badge: "Chef's Pick",
    color: 'from-amber-200/50 to-orange-200/50',
  },
  {
    id: 2,
    name: 'Falafel Plate',
    description: 'Crispy golden falafel served with aromatic turmeric rice, hummus, fresh salad and tahini sauce.',
    image: '/images/menu/menu_falafel.jpg',
    badge: 'Vegan',
    color: 'from-green-200/40 to-yellow-200/50',
  },
  {
    id: 3,
    name: 'Beach House Smash Burger',
    description: 'A freshly smashed beef patty topped with smoked cheddar and our signature Beach House sauce on a toasted bun.',
    image: '/images/menu/menu_burger.jpg',
    badge: null,
    color: 'from-orange-200/50 to-red-200/50',
  },
  {
    id: 4,
    name: 'Smoked Salmon Bagel',
    description: 'A toasted bagel layered with cream cheese, smoked salmon and fresh cucumber.',
    image: '/images/menu/menu_salmon_bagel.jpg',
    badge: null,
    color: 'from-pink-200/40 to-orange-100/50',
  },
  {
    id: 5,
    name: 'Bacon & Cheese Croissant Bun',
    description: 'Crispy bacon and melted cheese served on a warm, buttery croissant bun.',
    image: '/images/menu/menu_bacon_cheese_bagel.jpg',
    badge: null,
    color: 'from-yellow-200/50 to-amber-200/50',
  },
  {
    id: 6,
    name: 'Sea Breeze Baklava',
    description: 'Honey-glazed phyllo rolls with a rich chocolate and nut filling, scattered with whole pistachios and a dark chocolate swipe',
    image: '/images/menu/menu_baklava_chocolate.jpg',
    badge: 'New',
    color: 'from-amber-800/20 to-amber-600/30',
  },
  {
    id: 7,
    name: 'Almond Pastry',
    description: 'A light, flaky pastry filled with rich almond cream and baked until golden.',
    image: '/images/menu/menu_almond_pastry.jpg',
    badge: null,
    color: 'from-yellow-100/50 to-amber-200/40',
  },
  {
    id: 8,
    name: 'Chocolate Croissant',
    description: 'A buttery, flaky croissant filled with rich chocolate and baked until golden.',
    image: '/images/menu/menu_chocolate_pastry.jpg',
    badge: null,
    color: 'from-amber-900/20 to-amber-700/20',
  },
]
