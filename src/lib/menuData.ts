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
    description: 'Crispy deep-fried falafel balls drizzled with sesame tahini, served with saffron rice, Israeli salad, and hummus',
    image: '/images/menu/menu_falafel.jpg',
    badge: 'Vegan',
    color: 'from-green-200/40 to-yellow-200/50',
  },
  {
    id: 3,
    name: 'Beach House Burger',
    description: 'Juicy beef patty on a toasted brioche bun with crisp lettuce and smoky house sauce, served with seasoned hand-cut fries',
    image: '/images/menu/menu_burger.jpg',
    badge: null,
    color: 'from-orange-200/50 to-red-200/50',
  },
  {
    id: 4,
    name: 'Smoked Salmon Bagel',
    description: 'Toasted bagel spread with cream cheese, layered with silky smoked salmon and delicate ribbons of fresh cucumber',
    image: '/images/menu/menu_salmon_bagel.jpg',
    badge: null,
    color: 'from-pink-200/40 to-orange-100/50',
  },
  {
    id: 5,
    name: 'Bacon & Cheese Bun',
    description: 'A golden flaky spiral bun layered with crispy bacon and melted cheese - warm, savory, and deeply satisfying',
    image: '/images/menu/menu_bacon_cheese_bagel.jpg',
    badge: null,
    color: 'from-yellow-200/50 to-amber-200/50',
  },
  {
    id: 6,
    name: 'Baklava',
    description: 'Honey-soaked phyllo rolls topped with crushed pistachios, arranged on a marble serving tray - sweet and aromatic',
    image: '/images/menu/menu_baklava.jpg',
    badge: 'House Special',
    color: 'from-amber-300/50 to-yellow-200/50',
  },
  {
    id: 7,
    name: 'Chocolate Baklava',
    description: 'Honey-glazed phyllo rolls with a rich chocolate and nut filling, scattered with whole pistachios and a dark chocolate swipe',
    image: '/images/menu/menu_baklava_chocolate.jpg',
    badge: 'New',
    color: 'from-amber-800/20 to-amber-600/30',
  },
  {
    id: 8,
    name: 'Almond Pastry',
    description: 'A light golden puff pastry generously crowned with toasted almond flakes and a dusting of powdered sugar',
    image: '/images/menu/menu_almond_pastry.jpg',
    badge: null,
    color: 'from-yellow-100/50 to-amber-200/40',
  },
  {
    id: 9,
    name: 'Chocolate Croissant',
    description: 'A buttery, flaky croissant filled with dark chocolate, finished with a rich drizzle of melted chocolate sauce',
    image: '/images/menu/menu_chocolate_pastry.jpg',
    badge: null,
    color: 'from-amber-900/20 to-amber-700/20',
  },
]
