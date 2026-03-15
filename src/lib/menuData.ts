export const categories = ['All', 'Food', 'Drinks', 'Specials']

export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  badge: string | null
  color: string
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon, lemon butter sauce, seasonal greens',
    price: '$28',
    category: 'Food',
    image: '/images/menu/salmon.jpg',
    badge: "Chef's Pick",
    color: 'from-primary/30 to-primary-dark/30',
  },
  {
    id: 2,
    name: 'Lobster Roll',
    description: 'Maine lobster, herb mayo, toasted brioche bun',
    price: '$34',
    category: 'Food',
    image: '/images/menu/lobster-roll.jpg',
    badge: null,
    color: 'from-orange-200/50 to-red-200/50',
  },
  {
    id: 3,
    name: 'Shrimp Tacos',
    description: 'Grilled shrimp, mango salsa, avocado, chipotle cream',
    price: '$22',
    category: 'Food',
    image: '/images/menu/shrimp-tacos.jpg',
    badge: null,
    color: 'from-yellow-200/50 to-orange-200/50',
  },
  {
    id: 4,
    name: 'Açaí Bowl',
    description: 'Organic açaí, tropical fruits, granola, honey drizzle',
    price: '$16',
    category: 'Food',
    image: '/images/menu/acai-bowl.jpg',
    badge: 'Vegan',
    color: 'from-purple-200/50 to-pink-200/50',
  },
  {
    id: 5,
    name: 'Sunset Cocktail',
    description: 'Passion fruit, rum, coconut milk, lime, tajín rim',
    price: '$14',
    category: 'Drinks',
    image: '/images/menu/cocktail.jpg',
    badge: 'New',
    color: 'from-orange-300/50 to-pink-300/50',
  },
  {
    id: 6,
    name: 'Cold Brew Coffee',
    description: 'Single origin cold brew, oat milk, vanilla, salted caramel',
    price: '$8',
    category: 'Drinks',
    image: '/images/menu/cold-brew.jpg',
    badge: null,
    color: 'from-amber-900/20 to-amber-700/20',
  },
  {
    id: 7,
    name: 'Seafood Pasta',
    description: 'Linguine, mixed seafood, garlic, white wine, cherry tomato',
    price: '$30',
    category: 'Specials',
    image: '/images/menu/seafood-pasta.jpg',
    badge: 'Special',
    color: 'from-primary/20 to-secondary/20',
  },
  {
    id: 8,
    name: 'Fish & Chips',
    description: 'Beer-battered cod, house tartar sauce, hand-cut fries',
    price: '$20',
    category: 'Specials',
    image: '/images/menu/fish-chips.jpg',
    badge: null,
    color: 'from-yellow-200/50 to-secondary/30',
  },
]
