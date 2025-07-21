import React, { useState } from 'react';
import { Package, AlertTriangle, TrendingUp, Search, Filter, Plus, Edit, Trash2, Bot } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
  lowStockThreshold: number;
  supplier: string;
  lastRestocked: string;
  status: 'active' | 'inactive' | 'out-of-stock';
}

const InventoryManager: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Interactive Smart Dog Puzzle Toy',
      sku: 'DOG-PUZZLE-001',
      category: 'Interactive Toys',
      price: 49.99,
      cost: 29.99,
      stock: 45,
      lowStockThreshold: 10,
      supplier: 'PetGenius Toys',
      lastRestocked: '2024-01-15',
      status: 'active'
    },
    {
      id: '2',
      name: 'Premium Cat Scratching Post Tower',
      sku: 'CAT-TOWER-001',
      category: 'Cat Furniture',
      price: 89.99,
      cost: 54.99,
      stock: 8,
      lowStockThreshold: 15,
      supplier: 'FelineComfort Co.',
      lastRestocked: '2024-01-10',
      status: 'active'
    },
    {
      id: '3',
      name: 'Luxury Dog Bed with Memory Foam',
      sku: 'DOG-BED-001',
      category: 'Dog Accessories',
      price: 79.99,
      cost: 39.99,
      stock: 87,
      lowStockThreshold: 20,
      supplier: 'ComfortPaws',
      lastRestocked: '2024-01-20',
      status: 'active'
    },
    {
      id: '4',
      name: 'Automatic Pet Water Fountain',
      sku: 'WATER-FOUNTAIN-001',
      category: 'Pet Care',
      price: 59.99,
      cost: 35.99,
      stock: 5,
      lowStockThreshold: 10,
      supplier: 'AquaPaws Tech',
      lastRestocked: '2024-01-05',
      status: 'active'
    },
    {
      id: '5',
      name: 'Professional Dog Training Clicker Set',
      sku: 'CLICKER-SET-001',
      category: 'Training Aids',
      price: 24.99,
      cost: 24.99,
      stock: 28,
      lowStockThreshold: 15,
      supplier: 'TrainSmart Pro',
      lastRestocked: '2024-01-22',
      status: 'active'
    },
    {
      id: '6',
      name: 'Catnip-Infused Feather Wand Toy',
      sku: 'FEATHER-WAND-001',
      category: 'Interactive Toys',
      price: 19.99,
      cost: 12.99,
      stock: 15,
      lowStockThreshold: 20,
      supplier: 'WildPlay Toys',
      lastRestocked: '2024-01-21',
      status: 'active'
    },
    {
      id: '7',
      name: 'Adjustable Dog Harness with Reflective Strips',
      sku: 'DOG-HARNESS-001',
      category: 'Dog Accessories',
      price: 34.99,
      cost: 19.99,
      stock: 12,
      lowStockThreshold: 10,
      supplier: 'SafeWalk Gear',
      lastRestocked: '2024-01-20',
      status: 'active'
    },
    {
      id: '8',
      name: 'Self-Cleaning Cat Litter Box',
      sku: 'LITTER-BOX-001',
      category: 'Pet Care',
      price: 199.99,
      cost: 129.99,
      stock: 8,
      lowStockThreshold: 5,
      supplier: 'CleanPaws Automation',
      lastRestocked: '2024-01-18',
      status: 'active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [aiInsights, setAiInsights] = useState({
    predictedDemand: 'High demand expected for interactive dog toys next week',
    restockSuggestions: 3,
    priceOptimizations: 2,
    learningAccuracy: 87.3,
    dataPoints: 156789
  });

  const categories = ['all', 'Interactive Toys', 'Cat Furniture', 'Dog Accessories', 'Pet Care', 'Training Aids'];
  const statuses = ['all', 'active', 'inactive', 'out-of-stock'];

  const handleSort = (field: string) => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, start with ascending
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: string) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? '↑' : '↓';
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  }).sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue: any = a[sortField as keyof Product];
    let bValue: any = b[sortField as keyof Product];
    
    // Handle special cases
    if (sortField === 'name') {
      aValue = a.name.toLowerCase();
      bValue = b.name.toLowerCase();
    } else if (sortField === 'price' || sortField === 'cost') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    } else if (sortField === 'stock') {
      aValue = Number(a.stock);
      bValue = Number(b.stock);
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const lowStockProducts = products.filter(product => product.stock <= product.lowStockThreshold);
  const totalValue = products.reduce((sum, product) => sum + (product.stock * product.cost), 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-100 text-emerald-700';
      case 'inactive': return 'bg-stone-100 text-stone-700';
      case 'out-of-stock': return 'bg-red-100 text-red-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const isLowStock = (product: Product) => product.stock <= product.lowStockThreshold;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Inventory Management</h2>
          <div className="flex items-center space-x-4">
            <p className="text-stone-600">AI-powered inventory optimization</p>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              AI Learning: {aiInsights.learningAccuracy}% accuracy
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Inventory Insights</h3>
          <span className="text-sm text-blue-600">Learning from {aiInsights.dataPoints.toLocaleString()} data points</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Demand Prediction</h4>
            <p className="text-sm text-stone-600">{aiInsights.predictedDemand}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Smart Restocking</h4>
            <p className="text-sm text-stone-600">{aiInsights.restockSuggestions} products need restocking based on AI analysis</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Price Optimization</h4>
            <p className="text-sm text-stone-600">{aiInsights.priceOptimizations} products could benefit from price adjustments</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <button 
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:scale-105 transition-all duration-200 text-left group cursor-pointer relative"
          title="View all products in your inventory catalog"
        >
          <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Package className="h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-200" />
              <span className="text-2xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200">{products.length}</span>
            </div>
            <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200">Total Products</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-xs text-blue-600">Click to view product catalog →</span>
            </div>
          </div>
        </button>
        
        <button 
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:scale-105 transition-all duration-200 text-left group cursor-pointer relative"
          title={`${lowStockProducts.length} products need restocking: ${lowStockProducts.map(p => p.name).slice(0, 3).join(', ')}${lowStockProducts.length > 3 ? '...' : ''}`}
        >
          <div className="absolute inset-0 bg-orange-50 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-orange-600 group-hover:text-orange-700 transition-colors duration-200" />
              <span className="text-2xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200">{lowStockProducts.length}</span>
            </div>
            <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200">Low Stock Items</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-xs text-orange-600">Click to view low stock products →</span>
            </div>
          </div>
        </button>
        
        <button 
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:scale-105 transition-all duration-200 text-left group cursor-pointer relative"
          title={`Total inventory value: $${totalValue.toFixed(2)} across ${products.length} products`}
        >
          <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-200" />
              <span className="text-2xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200">${totalValue.toFixed(2)}</span>
            </div>
            <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200">Total Inventory Value</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-xs text-emerald-600">Click to view value breakdown →</span>
            </div>
          </div>
        </button>
        
        <button 
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md hover:scale-105 transition-all duration-200 text-left group cursor-pointer relative"
          title={`${products.reduce((sum, p) => sum + p.stock, 0)} total units across all products in inventory`}
        >
          <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-200"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <Package className="h-8 w-8 text-purple-600 group-hover:text-purple-700 transition-colors duration-200" />
              <span className="text-2xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200">
                {products.reduce((sum, p) => sum + p.stock, 0)}
              </span>
            </div>
            <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200">Total Units in Stock</p>
            <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <span className="text-xs text-purple-600">Click to view stock details →</span>
            </div>
          </div>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search products or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Product</span>
                    <span className="text-xs">{getSortIcon('name')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('sku')}
                >
                  <div className="flex items-center space-x-1">
                    <span>SKU</span>
                    <span className="text-xs">{getSortIcon('sku')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('category')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Category</span>
                    <span className="text-xs">{getSortIcon('category')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('stock')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Stock</span>
                    <span className="text-xs">{getSortIcon('stock')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('price')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Price</span>
                    <span className="text-xs">{getSortIcon('price')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('supplier')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Supplier</span>
                    <span className="text-xs">{getSortIcon('supplier')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('status')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <span className="text-xs">{getSortIcon('status')}</span>
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-stone-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-stone-50/50">
                  <td className="p-4">
                    <div className="font-medium text-stone-800">{product.name}</div>
                    <div className="text-sm text-stone-500">Last restocked: {product.lastRestocked}</div>
                  </td>
                  <td className="p-4 text-stone-600">{product.sku}</td>
                  <td className="p-4 text-stone-600">{product.category}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <span className={`font-medium ${isLowStock(product) ? 'text-red-600' : 'text-stone-800'}`}>
                        {product.stock}
                      </span>
                      {isLowStock(product) && (
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                    <div className="text-xs text-stone-500">Min: {product.lowStockThreshold}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-stone-800">${product.price}</div>
                    <div className="text-sm text-stone-500">Cost: ${product.cost}</div>
                  </td>
                  <td className="p-4 text-stone-600">{product.supplier}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(product.status)}`}>
                      {product.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManager;