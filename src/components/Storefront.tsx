import React, { useState, useEffect } from 'react';
import { ShoppingCart, Star, Heart, Search, Filter, X, Plus, Minus, Truck, Shield, Award, CheckCircle, Clock, Globe } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  inStock: boolean;
  stockLevel: number;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  images: string[];
  supplier: string;
  shippingTime: string;
  warranty: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface Translation {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translation = {
  en: {
    title: "Premium Pet Toys & Accessories",
    subtitle: "Your one-stop shop for premium pet toys, furniture, and accessories. High-quality, safe, and durable products to keep your furry friends happy and healthy.",
    searchPlaceholder: "Search pet products...",
    allCategories: "All Categories",
    addToCart: "Add to Cart",
    viewDetails: "View Details",
    inStock: "in stock",
    reviews: "reviews",
    fastShipping: "Fast & Free Shipping",
    fastShippingDesc: "Free shipping on orders over $50. All packages shipped quickly and safely.",
    safetyTested: "Pet Safety Tested",
    safetyTestedDesc: "All products are tested for safety, non-toxicity, and durability for pets.",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "Sourced from trusted pet product manufacturers with the highest quality standards.",
    shoppingCart: "Shopping Cart",
    cartEmpty: "Your cart is empty",
    total: "Total",
    checkout: "Proceed to Checkout",
    completeOrder: "Complete Demo Order",
    demoMode: "Demo Mode",
    demoModeDesc: "This is a demonstration. No actual payment will be processed.",
    orderSummary: "Order Summary",
    description: "Description",
    keyFeatures: "Key Features",
    specifications: "Specifications",
    supplierInfo: "Supplier Information",
    supplier: "Supplier",
    shipping: "Shipping",
    warranty: "Warranty",
    relatedProducts: "Related Products"
  },
  fr: {
    title: "Jouets et Accessoires Premium pour Animaux",
    subtitle: "Votre boutique unique pour jouets, meubles et accessoires premium pour animaux. Produits de haute qualité, sûrs et durables pour garder vos amis à fourrure heureux et en bonne santé.",
    searchPlaceholder: "Rechercher des produits pour animaux...",
    allCategories: "Toutes les Catégories",
    addToCart: "Ajouter au Panier",
    viewDetails: "Voir les Détails",
    inStock: "en stock",
    reviews: "avis",
    fastShipping: "Expédition Rapide & Gratuite",
    fastShippingDesc: "Livraison gratuite sur les commandes de plus de 50$. Tous les colis expédiés rapidement et en sécurité.",
    safetyTested: "Testé pour la Sécurité des Animaux",
    safetyTestedDesc: "Tous les produits sont testés pour la sécurité, la non-toxicité et la durabilité pour les animaux.",
    premiumQuality: "Qualité Premium",
    premiumQualityDesc: "Provenant de fabricants de confiance avec les plus hauts standards de qualité.",
    shoppingCart: "Panier d'Achat",
    cartEmpty: "Votre panier est vide",
    total: "Total",
    checkout: "Procéder au Paiement",
    completeOrder: "Finaliser la Commande Démo",
    demoMode: "Mode Démo",
    demoModeDesc: "Ceci est une démonstration. Aucun paiement réel ne sera traité.",
    orderSummary: "Résumé de Commande",
    description: "Description",
    keyFeatures: "Caractéristiques Principales",
    specifications: "Spécifications",
    supplierInfo: "Informations Fournisseur",
    supplier: "Fournisseur",
    shipping: "Expédition",
    warranty: "Garantie",
    relatedProducts: "Produits Connexes"
  },
  de: {
    title: "Premium Haustierspielzeug & Zubehör",
    subtitle: "Ihr One-Stop-Shop für Premium-Haustierspielzeug, Möbel und Zubehör. Hochwertige, sichere und langlebige Produkte, um Ihre pelzigen Freunde glücklich und gesund zu halten.",
    searchPlaceholder: "Haustierprodukte suchen...",
    allCategories: "Alle Kategorien",
    addToCart: "In den Warenkorb",
    viewDetails: "Details Anzeigen",
    inStock: "auf Lager",
    reviews: "Bewertungen",
    fastShipping: "Schneller & Kostenloser Versand",
    fastShippingDesc: "Kostenloser Versand bei Bestellungen über 50$. Alle Pakete werden schnell und sicher versandt.",
    safetyTested: "Haustiersicherheit Getestet",
    safetyTestedDesc: "Alle Produkte werden auf Sicherheit, Ungiftigkeit und Haltbarkeit für Haustiere getestet.",
    premiumQuality: "Premium Qualität",
    premiumQualityDesc: "Bezogen von vertrauenswürdigen Haustierprodukt-Herstellern mit höchsten Qualitätsstandards.",
    shoppingCart: "Warenkorb",
    cartEmpty: "Ihr Warenkorb ist leer",
    total: "Gesamt",
    checkout: "Zur Kasse Gehen",
    completeOrder: "Demo-Bestellung Abschließen",
    demoMode: "Demo-Modus",
    demoModeDesc: "Dies ist eine Demonstration. Es wird keine tatsächliche Zahlung verarbeitet.",
    orderSummary: "Bestellübersicht",
    description: "Beschreibung",
    keyFeatures: "Hauptmerkmale",
    specifications: "Spezifikationen",
    supplierInfo: "Lieferanteninformationen",
    supplier: "Lieferant",
    shipping: "Versand",
    warranty: "Garantie",
    relatedProducts: "Verwandte Produkte"
  },
  nl: {
    title: "Premium Huisdierspeelgoed & Accessoires",
    subtitle: "Uw one-stop-shop voor premium huisdierspeelgoed, meubels en accessoires. Hoogwaardige, veilige en duurzame producten om uw harige vrienden gelukkig en gezond te houden.",
    searchPlaceholder: "Huisdierproducten zoeken...",
    allCategories: "Alle Categorieën",
    addToCart: "Toevoegen aan Winkelwagen",
    viewDetails: "Details Bekijken",
    inStock: "op voorraad",
    reviews: "beoordelingen",
    fastShipping: "Snelle & Gratis Verzending",
    fastShippingDesc: "Gratis verzending bij bestellingen boven $50. Alle pakketten worden snel en veilig verzonden.",
    safetyTested: "Huisdierveiligheid Getest",
    safetyTestedDesc: "Alle producten worden getest op veiligheid, niet-toxiciteit en duurzaamheid voor huisdieren.",
    premiumQuality: "Premium Kwaliteit",
    premiumQualityDesc: "Afkomstig van vertrouwde huisdierproduct fabrikanten met de hoogste kwaliteitsnormen.",
    shoppingCart: "Winkelwagen",
    cartEmpty: "Uw winkelwagen is leeg",
    total: "Totaal",
    checkout: "Doorgaan naar Afrekenen",
    completeOrder: "Demo Bestelling Voltooien",
    demoMode: "Demo Modus",
    demoModeDesc: "Dit is een demonstratie. Er wordt geen werkelijke betaling verwerkt.",
    orderSummary: "Besteloverzicht",
    description: "Beschrijving",
    keyFeatures: "Belangrijkste Kenmerken",
    specifications: "Specificaties",
    supplierInfo: "Leveranciersinformatie",
    supplier: "Leverancier",
    shipping: "Verzending",
    warranty: "Garantie",
    relatedProducts: "Gerelateerde Producten"
  }
};

const languageNames = {
  en: "English",
  fr: "Français",
  de: "Deutsch",
  nl: "Nederlands"
};

const languageFlags = {
  en: "🇺🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  nl: "🇳🇱"
};

const Storefront: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showCart, setShowCart] = useState(false);

  // ESC key handler to close modals
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);
  const [showCheckout, setShowCheckout] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');
  const [exchangeRate] = useState(0.92); // 1 USD = 0.92 EUR (approximate)

  const products: Product[] = [
    {
      id: '1',
      name: 'Interactive Smart Dog Puzzle Toy',
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.8,
      reviews: 342,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Interactive Toys',
      inStock: true,
      stockLevel: 156,
      description: 'Challenge your dog\'s mind with this interactive puzzle toy featuring multiple difficulty levels. Designed to slow down eating, reduce boredom, and provide mental stimulation for dogs of all sizes.',
      features: [
        'Multiple difficulty levels for progressive learning',
        'Non-slip base for stable play',
        'Food-grade, non-toxic materials',
        'Easy to clean - dishwasher safe',
        'Suitable for dogs 10lbs and up',
        'Helps reduce destructive behavior'
      ],
      specifications: {
        'Material': 'Food-grade PP plastic',
        'Dimensions': '12" x 12" x 2.5"',
        'Weight': '1.2 lbs',
        'Suitable for': 'Dogs 10lbs+',
        'Difficulty Levels': '3 adjustable levels',
        'Cleaning': 'Dishwasher safe'
      },
      images: [
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'PetGenius Toys',
      shippingTime: '2-4 business days',
      warranty: '1 year manufacturer warranty'
    },
    {
      id: '2',
      name: 'Premium Cat Scratching Post Tower',
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.6,
      reviews: 278,
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cat Furniture',
      inStock: true,
      stockLevel: 89,
      description: 'A 52-inch tall multi-level cat tower with sisal rope scratching posts, plush perches, and hanging toys. Perfect for cats who love to climb, scratch, and observe their territory from above.',
      features: [
        '52-inch tall multi-level design',
        'Natural sisal rope scratching surfaces',
        'Plush carpeted perches and hideaway',
        'Hanging feather toys included',
        'Stable wide base for safety',
        'Easy assembly with included tools'
      ],
      specifications: {
        'Height': '52 inches',
        'Base Dimensions': '24" x 16"',
        'Weight Capacity': '30 lbs per level',
        'Material': 'Engineered wood, sisal rope, plush carpet',
        'Assembly Time': '30-45 minutes',
        'Suitable for': 'Cats of all ages'
      },
      images: [
        'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'FelineComfort Co.',
      shippingTime: '3-7 business days',
      warranty: '2 year structural warranty'
    },
    {
      id: '3',
      name: 'Luxury Dog Bed with Memory Foam',
      price: 79.99,
      rating: 4.7,
      reviews: 195,
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Dog Accessories',
      inStock: true,
      stockLevel: 67,
      description: 'Premium orthopedic dog bed with memory foam support and waterproof liner. Features a removable, machine-washable cover and non-slip bottom for ultimate comfort and convenience.',
      features: [
        'High-density memory foam for joint support',
        'Waterproof inner liner protection',
        'Removable, machine-washable cover',
        'Non-slip bottom for stability',
        'Available in multiple sizes',
        'Hypoallergenic materials'
      ],
      specifications: {
        'Foam Type': 'High-density memory foam',
        'Cover Material': '100% polyester microfiber',
        'Sizes Available': 'Small (24"x18"), Medium (30"x20"), Large (36"x24")',
        'Thickness': '4 inches',
        'Care': 'Machine washable cover',
        'Weight Limit': 'Up to 80 lbs (Large size)'
      },
      images: [
        'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'ComfortPaws',
      shippingTime: '2-5 business days',
      warranty: '3 year foam warranty'
    },
    {
      id: '4',
      name: 'Automatic Pet Water Fountain',
      price: 59.99,
      rating: 4.5,
      reviews: 423,
      image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pet Care',
      inStock: true,
      stockLevel: 134,
      description: 'Keep your pets hydrated with this automatic water fountain featuring a triple filtration system, ultra-quiet pump, and 2.5L capacity. Perfect for cats and small to medium dogs.',
      features: [
        '2.5L large capacity for multiple pets',
        'Triple filtration system (activated carbon, ion exchange resin, cotton)',
        'Ultra-quiet pump (<40dB)',
        'LED water level indicator',
        'BPA-free food-grade materials',
        'Easy disassembly for cleaning'
      ],
      specifications: {
        'Capacity': '2.5 Liters (84 oz)',
        'Power': '5V USB powered',
        'Noise Level': 'Less than 40dB',
        'Material': 'BPA-free ABS plastic',
        'Filter Life': '2-4 weeks per filter',
        'Dimensions': '8.7" x 8.7" x 6.3"'
      },
      images: [
        'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'AquaPaws Tech',
      shippingTime: '1-3 business days',
      warranty: '1 year manufacturer warranty'
    },
    {
      id: '5',
      name: 'Professional Dog Training Clicker Set',
      price: 24.99,
      rating: 4.9,
      reviews: 567,
      image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Training Aids',
      inStock: true,
      stockLevel: 289,
      description: 'Professional-grade training clicker set with ergonomic design and consistent sound. Includes training guide, treat pouch, and wrist strap for effective positive reinforcement training.',
      features: [
        'Consistent, clear clicking sound',
        'Ergonomic design for comfortable grip',
        'Includes comprehensive training guide',
        'Detachable treat pouch included',
        'Adjustable wrist strap',
        'Set of 2 clickers (different colors)'
      ],
      specifications: {
        'Material': 'Durable ABS plastic and metal',
        'Sound Level': '65dB consistent click',
        'Dimensions': '2.4" x 1.6" x 0.8"',
        'Weight': '0.5 oz per clicker',
        'Colors': 'Blue and red',
        'Age Recommendation': 'Puppies 8 weeks and older'
      },
      images: [
        'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'TrainSmart Pro',
      shippingTime: '1-2 business days',
      warranty: '6 month replacement guarantee'
    },
    {
      id: '6',
      name: 'Catnip-Infused Feather Wand Toy',
      price: 19.99,
      originalPrice: 29.99,
      rating: 4.4,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Interactive Toys',
      inStock: true,
      stockLevel: 234,
      description: 'Interactive feather wand toy infused with premium catnip to drive cats wild with excitement. Features natural feathers, crinkle sounds, and an extendable wand for safe play.',
      features: [
        'Premium North American catnip infusion',
        'Natural feathers with crinkle sounds',
        'Extendable wand (16" to 32")',
        'Replaceable feather attachments',
        'Safe distance play design',
        'Stimulates natural hunting instincts'
      ],
      specifications: {
        'Wand Length': 'Extends from 16" to 32"',
        'Feather Type': 'Natural rooster feathers',
        'Catnip Source': 'North American grown',
        'Material': 'Bamboo wand, natural feathers',
        'Suitable for': 'Cats 6 months and older',
        'Replacement Parts': 'Available separately'
      },
      images: [
        'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'WildPlay Toys',
      shippingTime: '1-3 business days',
      warranty: '30 day satisfaction guarantee'
    },
    {
      id: '7',
      name: 'Adjustable Dog Harness with Reflective Strips',
      price: 34.99,
      rating: 4.6,
      reviews: 298,
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Dog Accessories',
      inStock: true,
      stockLevel: 178,
      description: 'No-pull dog harness with padded chest plate and reflective strips for nighttime visibility. Fully adjustable with quick-release buckles for comfort and safety during walks.',
      features: [
        'No-pull front clip design',
        'Padded chest plate for comfort',
        '360-degree reflective strips',
        'Fully adjustable straps',
        'Quick-release buckles',
        'Available in 5 sizes'
      ],
      specifications: {
        'Sizes': 'XS, S, M, L, XL',
        'Weight Range': '5-120 lbs (depending on size)',
        'Material': 'Breathable mesh and nylon',
        'Buckle Type': 'Quick-release plastic',
        'Reflective Material': '3M Scotchlite',
        'Care': 'Machine washable'
      },
      images: [
        'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'SafeWalk Gear',
      shippingTime: '2-4 business days',
      warranty: '1 year manufacturer warranty'
    },
    {
      id: '8',
      name: 'Self-Cleaning Cat Litter Box',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.3,
      reviews: 89,
      image: 'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pet Care',
      inStock: true,
      stockLevel: 45,
      description: 'Revolutionary self-cleaning litter box with automatic waste removal and odor control. Features a quiet motor, large capacity, and works with most clumping litters.',
      features: [
        'Automatic waste removal after each use',
        'Quiet motor operation (<45dB)',
        'Large capacity waste drawer',
        'Compatible with clumping litters',
        'Safety sensors for cat detection',
        'Easy-clean removable components'
      ],
      specifications: {
        'Dimensions': '24" x 19" x 17"',
        'Litter Capacity': '15 lbs',
        'Waste Drawer': '7-day capacity for 1 cat',
        'Power': '110V AC adapter',
        'Noise Level': 'Less than 45dB',
        'Suitable for': 'Cats 5-20 lbs'
      },
      images: [
        'https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      supplier: 'CleanPaws Automation',
      shippingTime: '5-7 business days',
      warranty: '2 year manufacturer warranty'
    }
  ];

  const categories = ['all', 'Interactive Toys', 'Cat Furniture', 'Dog Accessories', 'Pet Care', 'Training Aids'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      }]);
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const convertPrice = (usdPrice: number): number => {
    return currency === 'EUR' ? usdPrice * exchangeRate : usdPrice;
  };

  const formatPrice = (usdPrice: number): string => {
    const price = convertPrice(usdPrice);
    const symbol = currency === 'EUR' ? '€' : '$';
    return `${symbol}${price.toFixed(2)}`;
  };

  const getCurrencySymbol = () => currency === 'EUR' ? '€' : '$';

  const t = (key: string) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const getRelatedProducts = (currentProduct: Product) => {
    return products
      .filter(product => 
        product.id !== currentProduct.id && 
        product.category === currentProduct.category
      )
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900 relative">
      {/* Shopping Cart Button */}
      <div className="fixed top-20 right-6 z-40 flex flex-col space-y-3">
        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="bg-primary-50/95 dark:bg-grey-800/90 backdrop-blur-sm hover:bg-primary-100 dark:hover:bg-grey-800 text-primary-800 dark:text-grey-200 p-3 rounded-full shadow-lg transition-all duration-200 flex items-center space-x-2 border border-primary-200 dark:border-grey-600"
          >
            <Globe className="h-5 w-5" />
            <span className="text-lg">{languageFlags[currentLanguage as keyof typeof languageFlags]}</span>
          </button>
          
          {showLanguageDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-primary-50 dark:bg-grey-800 rounded-xl shadow-xl border border-primary-200 dark:border-grey-600 overflow-hidden min-w-[160px]">
              {Object.entries(languageNames).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    setCurrentLanguage(code);
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-primary-100 dark:hover:bg-grey-700 transition-colors flex items-center space-x-3 ${
                    currentLanguage === code ? 'bg-primary-100 dark:bg-accent-900/20 text-primary-700 dark:text-accent-300' : 'text-primary-700 dark:text-grey-200'
                  }`}
                >
                  <span className="text-lg">{languageFlags[code as keyof typeof languageFlags]}</span>
                  <span className="font-medium">{name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Currency Selector */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrency('EUR')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currency === 'EUR'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-white/80 text-stone-600 hover:bg-white border border-stone-200'
            }`}
          >
            EUR €
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              currency === 'USD'
                ? 'bg-primary-500 text-white shadow-sm'
                : 'bg-white/80 text-stone-600 hover:bg-white border border-stone-200'
            }`}
          >
            USD $
          </button>
        </div>
        
        {/* Shopping Cart Button */}
        <button
          onClick={() => setShowCart(true)}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white p-4 rounded-full shadow-lg transition-all duration-200 relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Floating Paw Prints Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-5">
          <div className="absolute top-10 left-10 text-4xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>🐾</div>
          <div className="absolute top-20 right-20 text-3xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>🐾</div>
          <div className="absolute top-40 left-1/4 text-2xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>🐾</div>
          <div className="absolute top-60 right-1/3 text-3xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}>🐾</div>
          <div className="absolute bottom-40 left-16 text-4xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}>🐾</div>
          <div className="absolute bottom-20 right-16 text-2xl animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '3.8s' }}>🐾</div>
          <div className="absolute top-32 left-1/2 text-3xl animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '4.2s' }}>🐾</div>
          <div className="absolute bottom-60 right-1/4 text-2xl animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '3.2s' }}>🐾</div>
          <div className="absolute top-16 left-3/4 text-4xl animate-bounce" style={{ animationDelay: '2.2s', animationDuration: '4.8s' }}>🐾</div>
          <div className="absolute bottom-32 left-1/3 text-3xl animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '3.6s' }}>🐾</div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-grey-300 mb-8 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          
          {/* Search and Filters */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400 dark:text-grey-400" />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-primary-200 dark:border-grey-600 rounded-xl focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-primary-50/80 dark:bg-grey-800/50 backdrop-blur-sm text-primary-900 dark:text-grey-100 placeholder-primary-600 dark:placeholder-grey-400"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-primary-200 dark:border-grey-600 rounded-xl focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-primary-50/80 dark:bg-grey-800/50 backdrop-blur-sm text-primary-900 dark:text-grey-100"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? t('allCategories') : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-primary-50/90 dark:bg-grey-800/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-primary-200/50 dark:border-grey-600/50 group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Save {getCurrencySymbol()}{convertPrice(product.originalPrice - product.price).toFixed(0)}
                    </div>
                  )}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    <div className="bg-primary-50/95 dark:bg-grey-800/90 backdrop-blur-sm px-4 py-2 rounded-full text-primary-800 dark:text-grey-100 font-medium">
                      Quick View
                    </div>
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 dark:text-accent-400 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-primary-600 dark:text-grey-300">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-primary-800 dark:text-grey-100 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-primary-800 dark:text-grey-100">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-primary-500 dark:text-grey-400 line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-primary-600 dark:text-grey-300">
                      {product.stockLevel} {t('inStock')}
                    </span>
                    <span className="text-sm text-primary-500 dark:text-grey-400">
                      {product.reviews} {t('reviews')}
                    </span>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 group"
                  >
                    <ShoppingCart className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span>{t('addToCart')}</span>
                  </button>
                  
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full mt-2 border border-primary-300 dark:border-accent-500 text-primary-700 dark:text-accent-300 hover:bg-primary-100 dark:hover:bg-grey-800/30 font-medium py-2 px-4 rounded-xl transition-all duration-200"
                  >
                    {t('viewDetails')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50/60 dark:bg-grey-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent-500 dark:to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-grey-100 mb-2">{t('fastShipping')}</h3>
              <p className="text-primary-600 dark:text-grey-300">{t('fastShippingDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent-500 dark:to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-grey-100 mb-2">{t('safetyTested')}</h3>
              <p className="text-primary-600 dark:text-grey-300">{t('safetyTestedDesc')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-accent-500 dark:to-accent-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 dark:text-grey-100 mb-2">{t('premiumQuality')}</h3>
              <p className="text-primary-600 dark:text-grey-300">{t('premiumQualityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProduct(null);
            }
          }}
        >
          <div className="bg-primary-50 dark:bg-grey-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-primary-200 dark:border-grey-600">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-primary-800 dark:text-grey-100">{selectedProduct.name}</h3>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-primary-400 dark:text-grey-400 hover:text-primary-600 dark:hover:text-grey-200 text-2xl"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProduct.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProduct.name} ${index + 1}`}
                        className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-800 dark:text-grey-100">{formatPrice(selectedProduct.price)}</span>
                      {selectedProduct.originalPrice && (
                        <span className="text-xl text-gray-500 dark:text-grey-400 line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="font-medium text-gray-800 dark:text-grey-100">{selectedProduct.rating}</span>
                        <span className="text-gray-600 dark:text-grey-300">({selectedProduct.reviews} reviews)</span>
                      </div>
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                        {selectedProduct.stockLevel} in stock
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-grey-100 mb-2">{t('description')}</h4>
                    <p className="text-gray-600 dark:text-grey-300 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-grey-100 mb-3">{t('keyFeatures')}</h4>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-grey-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Specifications */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-grey-100 mb-3">{t('specifications')}</h4>
                    <div className="bg-gray-50 dark:bg-grey-700/30 rounded-lg p-4 space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 dark:text-grey-300">{key}:</span>
                          <span className="font-medium text-gray-800 dark:text-grey-100">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Supplier Info */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 dark:text-accent-300 mb-2">{t('supplierInfo')}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center space-x-2">
                        <Truck className="h-4 w-4 text-blue-600 dark:text-accent-400" />
                        <span className="text-blue-700 dark:text-accent-300">{t('supplier')}: {selectedProduct.supplier}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-600 dark:text-accent-400" />
                        <span className="text-blue-700 dark:text-accent-300">{t('shipping')}: {selectedProduct.shippingTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-600 dark:text-accent-400" />
                        <span className="text-blue-700 dark:text-accent-300">{t('warranty')}: {selectedProduct.warranty}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-6 w-6" />
                    <span>{t('addToCart')} - {formatPrice(selectedProduct.price)}</span>
                  </button>
                </div>
              </div>
              
              {/* Related Products */}
              {getRelatedProducts(selectedProduct).length > 0 && (
                <div className="mt-8 pt-8 border-t dark:border-grey-600">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-grey-100 mb-6">{t('relatedProducts')}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {getRelatedProducts(selectedProduct).map((relatedProduct) => (
                      <div key={relatedProduct.id} className="bg-gray-50 dark:bg-grey-700/30 rounded-xl p-4 hover:bg-gray-100 dark:hover:bg-grey-700/50 transition-colors cursor-pointer"
                        onClick={() => setSelectedProduct(relatedProduct)}
                      >
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h5 className="font-medium text-gray-800 dark:text-grey-100 mb-2 line-clamp-2">
                          {relatedProduct.name}
                        </h5>
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-bold text-gray-800 dark:text-grey-100">{formatPrice(relatedProduct.price)}</span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600 dark:text-grey-300">{relatedProduct.rating}</span>
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(relatedProduct);
                          }}
                          className="w-full mt-3 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          <span>{t('addToCart')}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {showCart && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-grey-100">{t('shoppingCart')}</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 dark:text-grey-400 hover:text-gray-600 dark:hover:text-grey-200 text-2xl"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-16 w-16 text-gray-400 dark:text-grey-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-grey-300">{t('cartEmpty')}</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-grey-700/30 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800 dark:text-grey-100">{item.name}</h4>
                          <p className="text-gray-600 dark:text-grey-300">{formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-grey-600 rounded"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium text-gray-800 dark:text-grey-100">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-200 dark:hover:bg-grey-600 rounded"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t dark:border-grey-600 pt-4">
                    <div className="flex justify-between items-center text-xl font-bold text-gray-800 dark:text-grey-100 mb-4">
                      <span>{t('total')}: {formatPrice(getCartTotal())}</span>
                    </div>
                    <button
                      onClick={() => {
                        setShowCart(false);
                        setShowCheckout(true);
                      }}
                      className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200"
                    >
                      {t('checkout')}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-grey-100">{t('checkout')}</h3>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-400 dark:text-grey-400 hover:text-gray-600 dark:hover:text-grey-200 text-2xl"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-grey-100 mb-4">{t('orderSummary')}</h4>
                  <div className="space-y-2">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between text-gray-600 dark:text-grey-300">
                        <span>{item.name} x {item.quantity}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t dark:border-grey-600 mt-4 pt-4">
                    <div className="flex justify-between font-bold text-gray-800 dark:text-grey-100">
                      <span>{t('total')}: {formatPrice(getCartTotal())}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-700">
                  <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">{t('demoMode')}</span>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm mt-1">
                    {t('demoModeDesc')}
                  </p>
                </div>
                
                <button
                  onClick={() => {
                    alert('Demo order completed! Thank you for trying our pet store.');
                    setCart([]);
                    setShowCheckout(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-500 dark:to-accent-400 hover:from-primary-700 hover:to-secondary-700 dark:hover:from-accent-600 dark:hover:to-accent-500 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200"
                >
                  {t('completeOrder')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Storefront;