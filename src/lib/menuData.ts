export interface MenuItem {
  id: number
  name: string
  description: string
  image: string
  badge: string | null
  color: string
}

export const menuItems: MenuItem[] = [

  // ── Breakfast ──────────────────────────────────────────────────────────────

  {
    id: 1,
    name: 'Bacon Egg & Cheese Croissant',
    description:
      'Crispy bacon, a freshly cooked egg and melted smoked cheddar on a warm, buttery croissant. Toasted until golden.',
    image: '/images/menu/bacon-egg-croissant.jpg',
    badge: null,
    color: 'from-yellow-200/50 to-amber-200/50',
  },
  {
    id: 2,
    name: 'Sausage Egg & Cheese Croissant',
    description:
      'A warm, buttery croissant filled with savoury breakfast sausage, a fluffy egg, and melted smoked cheddar cheese. Toasted until golden.',
    image: '/images/menu/sausage-egg-cheese-croissant.jpg',
    badge: null,
    color: 'from-orange-200/50 to-yellow-200/50',
  },
  {
    id: 3,
    name: 'Egg & Cheese Croissant',
    description:
      'A warm, buttery croissant filled with a freshly cooked egg and rich, melted smoked cheddar cheese. Simple, comforting, and delicious.',
    image: '/images/menu/Flaky Croissant Egg and Cheese Sandwich.png',
    badge: null,
    color: 'from-yellow-100/50 to-amber-200/40',
  },
  {
    id: 4,
    name: 'Cream Cheese Bagel',
    description:
      'A freshly toasted bagel generously spread with smooth, creamy cream cheese. A timeless breakfast classic.',
    image: '/images/menu/Cream Cheese Bagel on White Plate.png',
    badge: null,
    color: 'from-orange-100/40 to-yellow-100/40',
  },
  {
    id: 5,
    name: 'Smoked Salmon Cream Cheese Bagel',
    description:
      'A freshly toasted bagel topped with smooth cream cheese and delicate smoked salmon. A delicious coastal breakfast favourite.',
    image: '/images/menu/menu_salmon_bagel.jpg',
    badge: null,
    color: 'from-pink-200/40 to-orange-100/50',
  },
  {
    id: 6,
    name: 'Hashbrown',
    description:
      'Crispy golden hash brown, cooked to a perfect crunch on the outside and fluffy on the inside.',
    image: '/images/menu/Golden Crispy Hash Brown on White Plate.png',
    badge: null,
    color: 'from-yellow-300/40 to-amber-300/40',
  },

  // ── Lunch ──────────────────────────────────────────────────────────────────

  {
    id: 7,
    name: 'Single Smash Burger',
    description:
      'A juicy smashed beef patty with crispy caramelized edges, melted smoked cheddar, fresh lettuce, tomato, and our signature Beach House sauce on a toasted bun.',
    image: '/images/menu/Gourmet Slider on White Plate.png',
    badge: null,
    color: 'from-orange-200/50 to-red-200/50',
  },
  {
    id: 8,
    name: 'Double Smash Burger',
    description:
      'Double the beef, double the flavour! Two juicy smashed beef patties with crispy caramelized edges, melted smoked cheddar, fresh lettuce, tomato, and our signature Beach House sauce.',
    image: '/images/menu/menu_burger.jpg',
    badge: null,
    color: 'from-red-200/50 to-orange-200/50',
  },
  {
    id: 9,
    name: 'Chicken Shawarma Bowl',
    description:
      'Spiced chicken strips with golden tahini drizzle, turmeric rice, fresh tomato & cucumber salad, and creamy hummus.',
    image: '/images/menu/menu_shawarma.jpg',
    badge: "Chef's Pick",
    color: 'from-amber-200/50 to-orange-200/50',
  },
  {
    id: 10,
    name: 'Falafel Bowl',
    description:
      'Crispy golden falafel served with aromatic turmeric rice, hummus, fresh salad and tahini sauce.',
    image: '/images/menu/menu_falafel.jpg',
    badge: 'Vegan',
    color: 'from-green-200/40 to-yellow-200/50',
  },
  {
    id: 11,
    name: 'Shawarma Fries',
    description:
      'Golden crispy fries loaded with spiced shawarma chicken, drizzled with tahini and served with dipping sauces.',
    image: '/images/menu/Golden Chicken Shawarma Fries with Sauces.png',
    badge: null,
    color: 'from-amber-300/50 to-orange-200/50',
  },
  {
    id: 12,
    name: 'Double Smash Combo',
    description:
      'Two juicy smashed beef patties topped with smoked cheddar and fresh toppings, served with golden, crispy fries. The ultimate Beach House meal.',
    image: '/images/menu/menu_burger.jpg',
    badge: null,
    color: 'from-orange-300/40 to-red-200/40',
  },
  {
    id: 13,
    name: 'Straight-Cut Fries',
    description:
      'Golden, crispy fries with a fluffy centre, cooked to perfection and served hot. Perfect as a side or enjoyed on their own.',
    image: '/images/menu/Golden Crispy Fries with Sauces.png',
    badge: null,
    color: 'from-yellow-300/50 to-amber-300/40',
  },

  // ── Pizza ──────────────────────────────────────────────────────────────────

  {
    id: 14,
    name: 'Margherita Pizza',
    description:
      'A classic wood-fired pizza with rich tomato sauce and a generous layer of golden, bubbling mozzarella on a hand-stretched crust.',
    image: '/images/menu/1000077075.jpg',
    badge: null,
    color: 'from-red-200/40 to-yellow-100/40',
  },
  {
    id: 15,
    name: 'Pepperoni Pizza',
    description:
      'Loaded with crispy, golden-edged pepperoni slices over melted mozzarella and a rich tomato base on a wood-fired crust.',
    image: '/images/menu/1000077085.jpg',
    badge: null,
    color: 'from-red-300/40 to-orange-200/40',
  },
  {
    id: 16,
    name: 'Hawaiian Pizza',
    description:
      'Smoky ham, sweet pineapple chunks and red onion over melted mozzarella and a golden wood-fired base.',
    image: '/images/menu/1000077083.jpg',
    badge: null,
    color: 'from-yellow-200/40 to-pink-100/40',
  },
  {
    id: 17,
    name: 'Meat Lovers Pizza',
    description:
      'A hearty wood-fired pizza loaded with salami, seasoned ground beef and colourful peppers over rich tomato sauce and melted mozzarella.',
    image: '/images/menu/1000077081.jpg',
    badge: null,
    color: 'from-red-300/50 to-amber-200/40',
  },
  {
    id: 18,
    name: 'Garden Veggie Pizza',
    description:
      'A vibrant wood-fired pizza piled with mushrooms, olives, bell peppers and red onion over tomato sauce and melted mozzarella.',
    image: '/images/menu/1000077077.jpg',
    badge: 'Vegan',
    color: 'from-green-200/40 to-yellow-100/40',
  },
  {
    id: 19,
    name: 'Chicken Pesto Pizza',
    description:
      'Tender chicken, cherry tomatoes and vibrant pesto drizzled over melted mozzarella on a wood-fired crust.',
    image: '/images/menu/1000077073.jpg',
    badge: null,
    color: 'from-green-200/40 to-lime-100/40',
  },

  // ── Pastries & Desserts ────────────────────────────────────────────────────

  {
    id: 20,
    name: 'Blueberry Muffin',
    description:
      'A soft, moist muffin bursting with juicy blueberries and topped with a golden, buttery crumble. A delicious treat with your morning coffee.',
    image: '/images/menu/Blueberry Muffin in Brown Tulip Wrapper.png',
    badge: null,
    color: 'from-blue-200/40 to-purple-100/40',
  },
  {
    id: 21,
    name: 'Almond Croissant',
    description:
      'A buttery, flaky croissant baked twice for an irresistible golden crunch, filled with rich almond cream and topped with sliced almonds and powdered sugar.',
    image: '/images/menu/Powdered Almond Croissant Delight.png',
    badge: null,
    color: 'from-yellow-100/50 to-amber-200/40',
  },
  {
    id: 22,
    name: 'Chocolate Croissant',
    description:
      'A buttery, flaky croissant baked twice until golden and crispy, filled with rich chocolate cream and topped with a decadent chocolate dusting.',
    image: '/images/menu/Chocolate-Dusted Flaky Pastry.png',
    badge: null,
    color: 'from-amber-900/20 to-amber-700/20',
  },
  {
    id: 23,
    name: 'Cookie',
    description:
      'A golden-baked chocolate chip cookie with rich, melty chocolate chunks, lightly crisp edges, and a delicious buttery flavour.',
    image: '/images/menu/Golden Chocolate Chip Cookie Close-Up.png',
    badge: null,
    color: 'from-amber-200/50 to-yellow-200/50',
  },
  {
    id: 24,
    name: 'Sea Breeze Baklava',
    description:
      'Layers of crispy, golden phyllo pastry filled with rich, creamy Nutella and peanut butter, baked to flaky perfection.',
    image: '/images/menu/menu_baklava_chocolate.jpg',
    badge: 'House Special',
    color: 'from-amber-800/20 to-amber-600/30',
  },
  {
    id: 25,
    name: 'Vegan Choco Espresso Banana Muffin',
    description:
      'A rich, moist vegan banana muffin infused with bold espresso and decadent chocolate. Perfectly balanced with natural banana sweetness.',
    image: '/images/menu/Rustic Blueberry Muffin in Tulip Wrapper.png',
    badge: 'Vegan',
    color: 'from-amber-900/20 to-orange-800/20',
  },
  {
    id: 26,
    name: 'Blueberry Scone',
    description:
      'A golden-baked scone bursting with juicy blueberries, with a lightly crisp exterior and a soft, tender centre.',
    image: '/images/menu/Golden Blueberry Scone Close-Up.png',
    badge: null,
    color: 'from-blue-100/40 to-purple-100/30',
  },
  {
    id: 27,
    name: 'Pistachio Croissant',
    description:
      'A buttery, flaky croissant baked twice to golden perfection, filled with rich pistachio cream and topped with a luscious pistachio glaze.',
    image: '/images/menu/Pistachio-Crusted Flaky Croissant.png',
    badge: null,
    color: 'from-green-200/40 to-lime-100/30',
  },
  {
    id: 28,
    name: 'Cinnamon Bun',
    description:
      'A soft, fluffy cinnamon bun swirled with rich cinnamon sugar, baked until golden brown and generously topped with a sweet, creamy glaze.',
    image: '/images/menu/27506.jpg',
    badge: null,
    color: 'from-amber-300/40 to-orange-200/30',
  },
  {
    id: 29,
    name: 'Croissant Flight',
    description:
      'A tasting selection of our three signature croissants — almond, chocolate, and pistachio — baked fresh and served together.',
    image: '/images/menu/Powdered Almond Croissant Delight.png',
    badge: null,
    color: 'from-yellow-200/40 to-amber-200/40',
  },
  {
    id: 30,
    name: 'Chive Cheddar Scone',
    description:
      'A savoury, golden-baked scone packed with sharp cheddar and fresh chives, with a flaky exterior and a soft, tender crumb.',
    image: '/images/menu/Savory Herb and Cheese Scone.png',
    badge: null,
    color: 'from-green-100/40 to-yellow-200/40',
  },
]
