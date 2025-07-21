import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Upload, Eye } from 'lucide-react';

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

const AdminStorefront: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Interactive Smart Dog Puzzle Toy',
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.5,
      reviews: 128,
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Interactive Toys',
      inStock: true,
      stockLevel: 45,
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
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.3,
      reviews: 256,
      image: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cat Furniture',
      inStock: true,
      stockLevel: 87,
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
      shippingTime: '2-5 business days',
      warranty: '2 year structural warranty'
    },
    {
      id: '3',
      name: 'Hydroponic Growing System - 6 Plant',
      price: 199.99,
      rating: 4.6,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 156,
      description: 'Complete hydroponic growing system perfect for beginners and experienced growers. This 6-plant DWC (Deep Water Culture) system includes everything needed to start growing immediately.',
      features: [
        '6-plant deep water culture system',
        'Food-grade materials throughout',
        'Powerful air pump and stones included',
        'pH and nutrient testing kit',
        'Growing medium and net pots',
        'Complete setup instructions'
      ],
      specifications: {
        'Plant Capacity': '6 plants',
        'Reservoir Size': '5 gallons',
        'System Type': 'Deep Water Culture (DWC)',
        'Dimensions': '24" x 16" x 10"',
        'Air Pump': '8W dual outlet',
        'Material': 'Food-grade plastic'
      },
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'HydroGrow Systems',
      shippingTime: '5-10 business days',
      warranty: '2 year equipment warranty'
    },
    {
      id: '4',
      name: 'Cannabis Drying Rack - 8 Tier',
      price: 129.99,
      rating: 4.8,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 34,
      description: 'Professional 8-tier drying rack designed specifically for cannabis and herb drying. Features breathable mesh shelves and a sturdy frame for optimal airflow and even drying.',
      features: [
        '8 spacious drying tiers',
        'Breathable mesh shelves',
        'Collapsible for easy storage',
        'Zipper access to each tier',
        'Hanging loops for easy setup',
        'Food-safe materials'
      ],
      specifications: {
        'Tiers': '8 levels',
        'Diameter': '24 inches',
        'Height': '6 feet when hung',
        'Material': 'Polyester mesh, steel frame',
        'Weight Capacity': '10 lbs per tier',
        'Storage': 'Folds flat for storage'
      },
      images: [
        'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'Harvest Pro Equipment',
      shippingTime: '2-4 business days',
      warranty: '3 year equipment warranty'
    },
    {
      id: '5',
      name: 'Mars Hydro TS 3000 LED Grow Light',
      price: 399.99,
      originalPrice: 499.99,
      rating: 4.7,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 28,
      description: 'High-efficiency LED grow light perfect for 3x3 ft coverage. Features Samsung LM301B diodes and enhanced spectrum for all growth stages.',
      features: [
        'Samsung LM301B + Osram 660nm diodes',
        'Full spectrum white + red + far red',
        'Dimmer and timer functions',
        'Fanless silent operation',
        'High PAR output efficiency',
        'Suitable for all growth stages'
      ],
      specifications: {
        'Power Consumption': '300W',
        'Coverage Area': '3x3 ft (flowering) / 4x4 ft (vegetation)',
        'PPFD': '2.8 μmol/J',
        'Lifespan': '50,000+ hours',
        'Dimensions': '15.7" x 13.8" x 2.4"',
        'Weight': '7.7 lbs'
      },
      images: [
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'Mars Hydro Official',
      shippingTime: '2-5 business days',
      warranty: '3 year manufacturer warranty'
    },
    {
      id: '6',
      name: 'Complete Grow Tent Kit 4x4 with Ventilation',
      price: 899.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 12,
      description: 'Complete 4x4 grow tent setup with ventilation system, carbon filter, and ducting. Everything needed for a professional indoor grow operation.',
      features: [
        '4x4x6.5 ft grow tent with reflective interior',
        '6-inch inline fan and carbon filter',
        'Complete ducting and clamps',
        'Heavy-duty zippers and frame',
        'Multiple ports for equipment',
        'Tool-free assembly'
      ],
      specifications: {
        'Tent Size': '4x4x6.5 ft',
        'Frame Material': 'Steel poles with plastic connectors',
        'Fabric': '600D mylar-lined canvas',
        'Fan CFM': '440 CFM',
        'Filter Life': '12-18 months',
        'Weight Capacity': '110 lbs'
      },
      images: [
        'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'GrowTech Systems',
      shippingTime: '3-7 business days',
      warranty: '2 year tent warranty, 1 year fan warranty'
    },
    {
      id: '7',
      name: 'CBD Sleep Gummies - 25mg per Gummy',
      price: 49.99,
      rating: 4.5,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=400&q=80',
      category: 'Healthcare Products',
      inStock: true,
      stockLevel: 67,
      description: 'Premium CBD sleep gummies formulated with melatonin and natural fruit flavors. Perfect for promoting restful sleep and relaxation.',
      features: [
        '25mg CBD + 3mg melatonin per gummy',
        'Natural fruit flavors',
        'Vegan and gluten-free',
        'Third-party lab tested',
        'No artificial colors',
        '30 gummies per bottle'
      ],
      specifications: {
        'CBD per Gummy': '25mg',
        'Melatonin per Gummy': '3mg',
        'Servings per Bottle': '30',
        'Total CBD': '750mg per bottle',
        'THC Content': '<0.3%',
        'Flavor': 'Mixed Berry'
      },
      images: [
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'Pure Wellness Co.',
      shippingTime: '2-5 business days',
      warranty: '30 day satisfaction guarantee'
    },
    {
      id: '8',
      name: 'pH Testing Kit with Digital Meter',
      price: 79.99,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 45,
      description: 'Professional digital pH testing kit essential for hydroponic and soil growing. Includes calibration solutions and storage case.',
      features: [
        'Digital pH meter with LCD display',
        'Automatic temperature compensation',
        'pH 4.0 and 7.0 calibration solutions',
        'Protective storage case',
        'Replaceable electrode',
        'Easy one-button calibration'
      ],
      specifications: {
        'pH Range': '0.0 - 14.0 pH',
        'Accuracy': '±0.1 pH',
        'Resolution': '0.1 pH',
        'Temperature Range': '0-50°C',
        'Battery': '3 x 1.5V (included)',
        'Auto Shut-off': '8 minutes'
      },
      images: [
        'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'HydroGrow Systems',
      shippingTime: '2-4 business days',
      warranty: '1 year manufacturer warranty'
    },
    {
      id: '9',
      name: 'Nutrient Solution Starter Kit',
      price: 129.99,
      rating: 4.4,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 38,
      description: 'Complete nutrient solution kit for hydroponic growing. Includes grow, bloom, and micro nutrients plus pH adjustment solutions.',
      features: [
        'Three-part nutrient system',
        'Grow, Bloom, and Micro formulas',
        'pH Up and pH Down solutions',
        'Measuring cups and mixing guide',
        'Suitable for all hydroponic systems',
        'Concentrated formula for value'
      ],
      specifications: {
        'Kit Contents': 'Grow 1L, Bloom 1L, Micro 1L',
        'pH Adjusters': 'pH Up 250ml, pH Down 250ml',
        'Coverage': 'Up to 100 gallons of solution',
        'NPK Ratios': 'Varies by growth stage',
        'Shelf Life': '2 years unopened',
        'Mixing Ratio': '1-3ml per liter of water'
      },
      images: [
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'HydroGrow Systems',
      shippingTime: '2-5 business days',
      warranty: 'Quality guarantee'
    },
    {
      id: '10',
      name: 'CBD Pain Relief Topical Cream',
      price: 59.99,
      rating: 4.7,
      reviews: 298,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
      category: 'Healthcare Products',
      inStock: true,
      stockLevel: 52,
      description: 'Fast-acting CBD topical cream for targeted pain relief. Infused with menthol and arnica for enhanced therapeutic benefits.',
      features: [
        '500mg CBD per 2oz tube',
        'Enhanced with menthol and arnica',
        'Fast-absorbing, non-greasy formula',
        'Natural ingredients only',
        'Third-party lab tested',
        'Suitable for daily use'
      ],
      specifications: {
        'CBD Content': '500mg per tube',
        'Size': '2oz (60ml)',
        'Active Ingredients': 'CBD, Menthol, Arnica',
        'Base': 'Organic coconut oil and shea butter',
        'THC Content': '<0.3%',
        'Scent': 'Light menthol'
      },
      images: [
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'Pure Wellness Co.',
      shippingTime: '2-5 business days',
      warranty: '30 day satisfaction guarantee'
    },
    {
      id: '11',
      name: 'Oscillating Grow Room Fan',
      price: 89.99,
      rating: 4.3,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80',
      category: 'Growing Equipment',
      inStock: true,
      stockLevel: 23,
      description: 'Quiet oscillating fan designed for grow rooms. Provides essential air circulation to prevent mold and strengthen plant stems.',
      features: [
        '16-inch oscillating fan',
        'Whisper-quiet operation',
        'Adjustable height and tilt',
        'Heavy-duty metal construction',
        '3-speed settings',
        'Remote control included'
      ],
      specifications: {
        'Fan Size': '16 inches',
        'Oscillation': '90 degrees',
        'Height Range': '42-52 inches',
        'Noise Level': '<35 dB',
        'Power': '45W',
        'Speeds': '3 variable speeds'
      },
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'GrowTech Systems',
      shippingTime: '3-6 business days',
      warranty: '2 year manufacturer warranty'
    },
    {
      id: '12',
      name: 'CBD Oil for Pets - Chicken Flavor',
      price: 39.99,
      rating: 4.8,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=400&q=80',
      category: 'Healthcare Products',
      inStock: true,
      stockLevel: 78,
      description: 'Specially formulated CBD oil for pets with natural chicken flavor. Helps with anxiety, pain, and overall wellness for dogs and cats.',
      features: [
        '300mg CBD per 30ml bottle',
        'Natural chicken flavor',
        'Easy-to-use dropper bottle',
        'Organic hemp extract',
        'Third-party lab tested',
        'Safe for dogs and cats'
      ],
      specifications: {
        'CBD Content': '300mg (10mg per ml)',
        'Serving Size': '0.5ml for 25lb pet',
        'Servings per Bottle': '60',
        'Ingredients': 'Hemp Extract, MCT Oil, Chicken Flavor',
        'THC Content': '<0.3%',
        'Age Recommendation': '12 weeks and older'
      },
      images: [
        'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80'
      ],
      supplier: 'Pure Wellness Co.',
      shippingTime: '2-5 business days',
      warranty: '30 day satisfaction guarantee'
    }
  ]);

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setEditingProduct(null);
        setShowAddModal(false);
        setPreviewMode(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const categories = ['Growing Equipment', 'Healthcare Products'];

  const createNewProduct = (): Product => ({
    id: Date.now().toString(),
    name: '',
    price: 0,
    rating: 0,
    reviews: 0,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Growing Equipment',
    inStock: true,
    stockLevel: 0,
    description: '',
    features: [''],
    specifications: {},
    images: ['https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'],
    supplier: '',
    shippingTime: '',
    warranty: ''
  });

  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
    } else {
      setProducts([...products, product]);
    }
    setEditingProduct(null);
    setShowAddModal(false);
  };

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const ProductForm: React.FC<{ product: Product; onSave: (product: Product) => void; onCancel: () => void }> = ({
    product,
    onSave,
    onCancel
  }) => {
    const [formData, setFormData] = useState<Product>(product);

    const handleFeatureChange = (index: number, value: string) => {
      const newFeatures = [...formData.features];
      newFeatures[index] = value;
      setFormData({ ...formData, features: newFeatures });
    };

    const addFeature = () => {
      setFormData({ ...formData, features: [...formData.features, ''] });
    };

    const removeFeature = (index: number) => {
      const newFeatures = formData.features.filter((_, i) => i !== index);
      setFormData({ ...formData, features: newFeatures });
    };

    const handleSpecificationChange = (key: string, value: string) => {
      const newSpecs = { ...formData.specifications };
      if (value === '') {
        delete newSpecs[key];
      } else {
        newSpecs[key] = value;
      }
      setFormData({ ...formData, specifications: newSpecs });
    };

    const addSpecification = () => {
      const newSpecs = { ...formData.specifications };
      newSpecs['New Specification'] = '';
      setFormData({ ...formData, specifications: newSpecs });
    };

    const handleImageChange = (index: number, value: string) => {
      const newImages = [...formData.images];
      newImages[index] = value;
      setFormData({ ...formData, images: newImages });
    };

    const addImage = () => {
      setFormData({ ...formData, images: [...formData.images, ''] });
    };

    const removeImage = (index: number) => {
      const newImages = formData.images.filter((_, i) => i !== index);
      setFormData({ ...formData, images: newImages });
    };

    return (
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Product Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Original Price ($) - Optional
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.originalPrice || ''}
              onChange={(e) => setFormData({ ...formData, originalPrice: parseFloat(e.target.value) || undefined })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="0.00"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Stock Level
            </label>
            <input
              type="number"
              value={formData.stockLevel}
              onChange={(e) => setFormData({ ...formData, stockLevel: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Supplier
            </label>
            <input
              type="text"
              value={formData.supplier}
              onChange={(e) => setFormData({ ...formData, supplier: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="Supplier name"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
            placeholder="Enter product description"
          />
        </div>

        {/* Main Image */}
        <div>
          <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
            Main Image URL
          </label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
            placeholder="https://example.com/image.jpg"
          />
          {formData.image && (
            <div className="mt-2">
              <img src={formData.image} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
            </div>
          )}
        </div>

        {/* Additional Images */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300">
              Additional Images
            </label>
            <button
              type="button"
              onClick={addImage}
              className="px-3 py-1 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors text-sm"
            >
              Add Image
            </button>
          </div>
          <div className="space-y-2">
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
                  placeholder="https://example.com/image.jpg"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300">
              Features
            </label>
            <button
              type="button"
              onClick={addFeature}
              className="px-3 py-1 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors text-sm"
            >
              Add Feature
            </button>
          </div>
          <div className="space-y-2">
            {formData.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => handleFeatureChange(index, e.target.value)}
                  className="flex-1 px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
                  placeholder="Enter feature"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300">
              Specifications
            </label>
            <button
              type="button"
              onClick={addSpecification}
              className="px-3 py-1 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors text-sm"
            >
              Add Specification
            </button>
          </div>
          <div className="space-y-2">
            {Object.entries(formData.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  value={key}
                  onChange={(e) => {
                    const newSpecs = { ...formData.specifications };
                    delete newSpecs[key];
                    newSpecs[e.target.value] = value;
                    setFormData({ ...formData, specifications: newSpecs });
                  }}
                  className="px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
                  placeholder="Specification name"
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => handleSpecificationChange(key, e.target.value)}
                    className="flex-1 px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
                    placeholder="Specification value"
                  />
                  <button
                    type="button"
                    onClick={() => handleSpecificationChange(key, '')}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Shipping Time
            </label>
            <input
              type="text"
              value={formData.shippingTime}
              onChange={(e) => setFormData({ ...formData, shippingTime: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="e.g., 2-5 business days"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-grey-300 mb-2">
              Warranty
            </label>
            <input
              type="text"
              value={formData.warranty}
              onChange={(e) => setFormData({ ...formData, warranty: e.target.value })}
              className="w-full px-3 py-2 border border-stone-200 dark:border-grey-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent bg-white dark:bg-grey-800 text-stone-900 dark:text-grey-100"
              placeholder="e.g., 1 year manufacturer warranty"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-6 border-t dark:border-grey-600">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-stone-200 dark:border-grey-600 text-stone-600 dark:text-grey-300 rounded-lg hover:bg-stone-50 dark:hover:bg-grey-800 transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors flex items-center space-x-2"
          >
            <Save className="h-4 w-4" />
            <span>Save Product</span>
          </button>
        </div>
      </div>
    );
  };

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 dark:from-grey-900 dark:via-grey-800 dark:to-grey-900">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-stone-800 dark:text-grey-100">Storefront Preview</h2>
            <button
              onClick={() => setPreviewMode(false)}
              className="px-4 py-2 bg-stone-500 dark:bg-grey-600 text-white rounded-lg hover:bg-stone-600 dark:hover:bg-grey-500 transition-colors"
            >
              Exit Preview
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white/80 dark:bg-grey-800/30 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-grey-600/50">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.originalPrice && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                      Save ${(product.originalPrice - product.price).toFixed(0)}
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 dark:text-accent-400 font-medium">{product.category}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-grey-100 mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-gray-800 dark:text-grey-100">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 dark:text-grey-400 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 dark:text-grey-300">
                      {product.stockLevel} in stock
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Storefront Management</h2>
          <p className="text-stone-600 dark:text-grey-300">Manage your product catalog and storefront appearance</p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPreviewMode(true)}
            className="px-4 py-2 border border-primary-300 dark:border-accent-500 text-primary-700 dark:text-accent-300 rounded-lg hover:bg-primary-50 dark:hover:bg-grey-800 transition-colors flex items-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>Preview Storefront</span>
          </button>
          <button
            onClick={() => {
              setEditingProduct(createNewProduct());
              setShowAddModal(true);
            }}
            className="bg-primary-500 dark:bg-accent-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white/80 dark:bg-grey-800/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 dark:border-grey-600">
            <div className="flex items-start space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-stone-800 dark:text-grey-100 mb-1">{product.name}</h3>
                <p className="text-sm text-stone-600 dark:text-grey-300 mb-2">{product.category}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-stone-800 dark:text-grey-100">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-stone-500 dark:text-grey-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-stone-600 dark:text-grey-300">Stock: {product.stockLevel}</p>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setEditingProduct(product)}
                className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Add Product Modal */}
      {(editingProduct || showAddModal) && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setEditingProduct(null);
              setShowAddModal(false);
            }
          }}
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-grey-100">
                  {editingProduct?.id && editingProduct.id !== createNewProduct().id ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button
                  onClick={() => {
                    setEditingProduct(null);
                    setShowAddModal(false);
                  }}
                  className="text-stone-400 dark:text-grey-400 hover:text-stone-600 dark:hover:text-grey-200 text-2xl"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <ProductForm
                product={editingProduct || createNewProduct()}
                onSave={handleSaveProduct}
                onCancel={() => {
                  setEditingProduct(null);
                  setShowAddModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminStorefront;