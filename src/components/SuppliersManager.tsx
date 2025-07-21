import React, { useState, useEffect } from 'react';
import { Building2, Mail, Phone, Globe, MapPin, Star, Package, DollarSign, Clock, AlertTriangle, Plus, Edit, Eye, ExternalLink, FileText, CreditCard, X } from 'lucide-react';

interface Supplier {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  country: string;
  rating: number;
  reviews: number;
  verified: boolean;
  status: 'active' | 'inactive' | 'pending';
  specialties: string[];
  productsCount: number;
  minOrderQuantity: number;
  paymentTerms: string;
  shippingTime: string;
  responseTime: string;
  priceRange: string;
  commission: number;
  totalOrders: number;
  totalRevenue: number;
  lastOrderDate: string;
  contractStart: string;
  contractEnd: string;
  notes: string;
  contactPerson: string;
  amazonStore?: string;
  aliexpressStore?: string;
  qualityCertifications: string[];
  returnPolicy: string;
  warrantyCoverage: string;
}

const SuppliersManager: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([
    {
      id: '1',
      name: 'PetGenius Toys',
      companyName: 'PetGenius Toys Inc.',
      email: 'sales@petgenius.com',
      phone: '+1-555-PET-TOYS',
      website: 'https://petgenius.com',
      address: '123 Pet Innovation Drive',
      country: 'USA (California)',
      rating: 4.8,
      reviews: 2456,
      verified: true,
      status: 'active',
      specialties: ['Interactive Toys', 'Puzzle Toys', 'Smart Pet Devices'],
      productsCount: 150,
      minOrderQuantity: 10,
      paymentTerms: 'Net 30',
      shippingTime: '2-4 days',
      responseTime: '< 2 hours',
      priceRange: '$15 - $150',
      commission: 25,
      totalOrders: 234,
      totalRevenue: 15678.90,
      lastOrderDate: '2024-01-22',
      contractStart: '2023-06-01',
      contractEnd: '2024-12-31',
      notes: 'Reliable pet toy supplier with excellent quality control. Specializes in interactive and puzzle toys for dogs and cats.',
      contactPerson: 'Sarah Johnson (Sales Manager)',
      amazonStore: 'petgenius-toys',
      qualityCertifications: ['Pet Safety Tested', 'Non-Toxic Materials', 'CPSIA Compliant'],
      returnPolicy: '14 days return policy - Customer pays return shipping ($25) + 20% restocking fee',
      warrantyCoverage: '1 year manufacturer warranty'
    },
    {
      id: '2',
      name: 'FelineComfort Co.',
      companyName: 'FelineComfort Company LLC',
      email: 'wholesale@felinecomfort.com',
      phone: '+1-555-CAT-TREE',
      website: 'https://felinecomfort.com',
      address: '456 Cat Furniture Lane',
      country: 'USA (Oregon)',
      rating: 4.9,
      reviews: 3456,
      verified: true,
      status: 'active',
      specialties: ['Cat Trees', 'Scratching Posts', 'Cat Furniture', 'Cat Towers'],
      productsCount: 75,
      minOrderQuantity: 5,
      paymentTerms: 'Net 15',
      shippingTime: '2-5 days',
      responseTime: '< 1 hour',
      priceRange: '$35 - $250',
      commission: 30,
      totalOrders: 156,
      totalRevenue: 45678.90,
      lastOrderDate: '2024-01-23',
      contractStart: '2023-08-15',
      contractEnd: '2025-08-14',
      notes: 'Premium cat furniture manufacturer. Specializes in high-quality scratching posts and multi-level cat trees with excellent stability.',
      contactPerson: 'Mike Johnson (Sales Director)',
      amazonStore: 'felinecomfort-co',
      qualityCertifications: ['Pet Safety Certified', 'Stable Design Tested', 'Non-Toxic Materials'],
      returnPolicy: '7 days return policy - Customer pays return shipping ($35) + 25% restocking fee. Assembly required items non-returnable once assembled',
      warrantyCoverage: '2 year structural warranty'
    },
    {
      id: '3',
      name: 'Pure Wellness Co.',
      companyName: 'Pure Wellness Company Inc.',
      email: 'orders@purewellness.com',
      phone: '+1-503-555-0456',
      website: 'https://purewellness.com',
      address: '789 Wellness Blvd, Industrial District',
      country: 'USA (Oregon)',
      rating: 4.6,
      reviews: 1834,
      verified: true,
      status: 'active',
      specialties: ['CBD Products', 'CBG Products', 'Tinctures', 'Topicals', 'Capsules'],
      productsCount: 120,
      minOrderQuantity: 25,
      paymentTerms: 'Net 30',
      shippingTime: '2-5 days',
      responseTime: '< 4 hours',
      priceRange: '$30 - $250',
      commission: 18,
      totalOrders: 89,
      totalRevenue: 23456.78,
      lastOrderDate: '2024-01-20',
      contractStart: '2023-09-01',
      contractEnd: '2024-08-31',
      notes: 'Premium CBD and wellness product manufacturer. FDA-compliant facility with excellent quality control.',
      contactPerson: 'Sarah Martinez (Account Manager)',
      amazonStore: 'pure-wellness-co',
      qualityCertifications: ['FDA Registered', 'GMP Certified', 'ISO 9001', 'Third-Party Tested'],
      returnPolicy: '10 days return policy - Customer pays return shipping ($40) + 20% restocking fee. Opened products non-returnable',
      warrantyCoverage: 'Quality guarantee on all wellness products'
    },
    {
      id: '4',
      name: 'HydroGrow Systems',
      companyName: 'HydroGrow Systems LLC',
      email: 'info@hydrogrowsystems.com',
      phone: '+1-619-555-7890',
      website: 'https://hydrogrowsystems.com',
      address: '321 Industrial Park, Tech District',
      country: 'USA (California)',
      rating: 4.7,
      reviews: 1567,
      verified: true,
      status: 'active',
      specialties: ['Hydroponic Systems', 'Growing Equipment', 'Nutrients', 'pH Testing'],
      productsCount: 200,
      minOrderQuantity: 20,
      paymentTerms: 'Net 45',
      shippingTime: '5-10 days',
      responseTime: '< 6 hours',
      priceRange: '$50 - $800',
      commission: 22,
      totalOrders: 67,
      totalRevenue: 12345.67,
      lastOrderDate: '2024-01-19',
      contractStart: '2023-07-01',
      contractEnd: '2024-06-30',
      notes: 'Professional hydroponic equipment supplier. Great for serious growers and commercial operations.',
      contactPerson: 'Tom Rodriguez (Sales Manager)',
      amazonStore: 'hydrogrow-systems',
      qualityCertifications: ['UL Listed', 'CE Certified', 'FCC Approved'],
      returnPolicy: '14 days return policy - Customer pays return shipping ($50) + 25% restocking fee. Equipment must be unused',
      warrantyCoverage: '2 year equipment warranty'
    },
    {
      id: '5',
      name: 'Delta Delights',
      companyName: 'Delta Delights Manufacturing LLC',
      email: 'hello@deltadelights.com',
      phone: '+1-512-555-9012',
      website: 'https://deltadelights.com',
      address: '555 Hemp Street, Business District',
      country: 'USA (Texas)',
      rating: 4.5,
      reviews: 1234,
      verified: true,
      status: 'active',
      specialties: ['Delta-8 Products', 'Gummies', 'Vapes', 'Edibles'],
      productsCount: 65,
      minOrderQuantity: 30,
      paymentTerms: 'Net 30',
      shippingTime: '3-6 days',
      responseTime: '< 8 hours',
      priceRange: '$25 - $150',
      commission: 28,
      totalOrders: 45,
      totalRevenue: 8765.43,
      lastOrderDate: '2024-01-18',
      contractStart: '2023-10-01',
      contractEnd: '2024-09-30',
      notes: 'Premium Delta-8 and edible manufacturer. Fully compliant with state regulations and excellent quality.',
      contactPerson: 'Jessica Williams (Business Development)',
      amazonStore: 'delta-delights',
      qualityCertifications: ['State Licensed', 'Lab Tested', 'GMP Certified'],
      returnPolicy: '7 days return policy - Customer pays return shipping ($30) + 35% restocking fee. No returns on consumables',
      warrantyCoverage: 'Quality guarantee on all edibles'
    },
    {
      id: '6',
      name: 'SpiderFarmer Official',
      companyName: 'SpiderFarmer USA Distribution',
      email: 'wholesale@spiderfarmer-usa.com',
      phone: '+1-844-555-GROW',
      website: 'https://spiderfarmer.com',
      address: '777 LED Drive, Distribution Center',
      country: 'USA (Nevada)',
      rating: 4.9,
      reviews: 4567,
      verified: true,
      status: 'active',
      specialties: ['LED Grow Lights', 'Grow Tents', 'Complete Kits', 'Ventilation'],
      productsCount: 150,
      minOrderQuantity: 5,
      paymentTerms: 'Net 15',
      shippingTime: '1-3 days',
      responseTime: '< 30 minutes',
      priceRange: '$100 - $1200',
      commission: 20,
      totalOrders: 289,
      totalRevenue: 145678.90,
      lastOrderDate: '2024-01-23',
      contractStart: '2023-06-01',
      contractEnd: '2025-05-31',
      notes: 'Premium LED grow light manufacturer with US distribution. Industry leader with excellent support and fast shipping.',
      contactPerson: 'Alex Chen (Wholesale Director)',
      amazonStore: 'spiderfarmer-official',
      qualityCertifications: ['UL Listed', 'ETL Certified', 'DLC Listed', 'FCC Approved'],
      returnPolicy: '30 days return policy - Customer pays return shipping ($60) + 15% restocking fee. Original packaging required',
      warrantyCoverage: '5 year manufacturer warranty'
    },
    {
      id: '7',
      name: 'Harvest Pro Equipment',
      companyName: 'Harvest Pro Equipment Inc.',
      email: 'sales@harvestpro.com',
      phone: '+1-303-555-4567',
      website: 'https://harvestpro.com',
      address: '888 Harvest Lane, Industrial Zone',
      country: 'USA (Colorado)',
      rating: 4.8,
      reviews: 2134,
      verified: true,
      status: 'active',
      specialties: ['Drying Equipment', 'Trimming Tools', 'Storage Solutions', 'Processing Equipment'],
      productsCount: 95,
      minOrderQuantity: 10,
      paymentTerms: 'Net 30',
      shippingTime: '2-4 days',
      responseTime: '< 2 hours',
      priceRange: '$75 - $500',
      commission: 24,
      totalOrders: 134,
      totalRevenue: 67890.12,
      lastOrderDate: '2024-01-22',
      contractStart: '2023-09-15',
      contractEnd: '2024-09-14',
      notes: 'Specialized in post-harvest equipment. Excellent for commercial growers and processing facilities.',
      contactPerson: 'Maria Gonzalez (Sales Director)',
      amazonStore: 'harvest-pro-equipment',
      qualityCertifications: ['Commercial Grade', 'Food Safe Materials', 'Quality Tested'],
      returnPolicy: '14 days return policy - Customer pays return shipping ($45) + 25% restocking fee. Used equipment non-returnable',
      warrantyCoverage: '3 year equipment warranty'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCountry, setFilterCountry] = useState('all');
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAIAlerts, setShowAIAlerts] = useState(false);

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedSupplier(null);
        setShowAddModal(false);
        setShowAIAlerts(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const aiUnresolvedIssues = [
    {
      id: '1',
      title: 'Payment Verification Failed',
      description: 'Unable to verify payment terms with PetGenius Toys. Bank details may have changed.',
      type: 'payment_verification',
      priority: 'urgent',
      supplier: 'PetGenius Toys',
      timestamp: '2024-01-23 10:30 AM',
      aiConfidence: 25
    },
    {
      id: '2',
      title: 'Quality Certification Expired',
      description: 'Pet Safety certification for FelineComfort Co. expired 3 days ago. Products may need review.',
      type: 'quality_alert',
      priority: 'high',
      supplier: 'FelineComfort Co.',
      timestamp: '2024-01-23 09:15 AM',
      aiConfidence: 45
    },
    {
      id: '3',
      title: 'Contract Terms Unclear',
      description: 'AI unable to parse new contract amendment from Delta Delights. Legal review needed.',
      type: 'contract_issue',
      priority: 'medium',
      supplier: 'Delta Delights',
      timestamp: '2024-01-22 04:20 PM',
      aiConfidence: 30
    }
  ];

  const statuses = ['all', 'active', 'inactive', 'pending'];
  const countries = ['all', 'USA', 'Colorado', 'California', 'Oregon', 'Texas', 'Nevada'];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesStatus = filterStatus === 'all' || supplier.status === filterStatus;
    const matchesCountry = filterCountry === 'all' || supplier.country.includes(filterCountry);
    return matchesSearch && matchesStatus && matchesCountry;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-emerald-100 text-emerald-700';
      case 'inactive': return 'bg-stone-100 text-stone-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const totalSuppliers = suppliers.length;
  const activeSuppliers = suppliers.filter(s => s.status === 'active').length;
  const totalRevenue = suppliers.reduce((sum, s) => sum + s.totalRevenue, 0);
  const avgCommission = suppliers.reduce((sum, s) => sum + s.commission, 0) / suppliers.length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Suppliers Management</h2>
          <p className="text-stone-600">Manage your dropshipping partners and business relationships</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Add Supplier</span>
        </button>
        
        {aiUnresolvedIssues.filter(issue => issue.priority === 'urgent' || issue.priority === 'high').length > 0 && (
          <button
            onClick={() => setShowAIAlerts(true)}
            className="relative bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2 animate-pulse"
          >
            <AlertTriangle className="h-4 w-4" />
            <span>AI Issues</span>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {aiUnresolvedIssues.filter(issue => issue.priority === 'urgent' || issue.priority === 'high').length}
            </span>
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Building2 className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-stone-800">{totalSuppliers}</span>
          </div>
          <p className="text-stone-600">Total Suppliers</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Package className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-stone-800">{activeSuppliers}</span>
          </div>
          <p className="text-stone-600">Active Suppliers</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-stone-800">${totalRevenue.toFixed(0)}</span>
          </div>
          <p className="text-stone-600">Total Revenue</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Star className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-stone-800">{avgCommission.toFixed(1)}%</span>
          </div>
          <p className="text-stone-600">Avg Commission</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search suppliers, companies, or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {statuses.map(status => (
              <option key={status} value={status}>
                {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
          
          <select
            value={filterCountry}
            onChange={(e) => setFilterCountry(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {country === 'all' ? 'All Countries' : country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Suppliers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSuppliers.map((supplier) => (
          <div key={supplier.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800">{supplier.name}</h3>
                  <p className="text-stone-600 text-sm">{supplier.companyName}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-4 w-4 text-stone-400" />
                    <span className="text-stone-600 text-sm">{supplier.country}</span>
                    {supplier.verified && (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium text-stone-800">{supplier.rating}</span>
                <span className="text-stone-500 text-sm">({supplier.reviews})</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-stone-500">Products</p>
                <p className="font-medium text-stone-800">{supplier.productsCount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Commission</p>
                <p className="font-medium text-stone-800">{supplier.commission}%</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Min Order</p>
                <p className="font-medium text-stone-800">{supplier.minOrderQuantity} units</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Revenue</p>
                <p className="font-medium text-stone-800">${supplier.totalRevenue.toFixed(0)}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-stone-500 mb-2">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {supplier.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <span className="text-stone-500">Response: </span>
                  <span className="text-stone-800">{supplier.responseTime}</span>
                </div>
                <div className="text-sm">
                  <span className="text-stone-500">Shipping: </span>
                  <span className="text-stone-800">{supplier.shippingTime}</span>
                </div>
              </div>
              <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(supplier.status)}`}>
                {supplier.status.toUpperCase()}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-stone-400" />
                <span className="text-sm text-stone-600">{supplier.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setSelectedSupplier(supplier)}
                  className="px-3 py-1 border border-stone-200 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors text-sm flex items-center space-x-1"
                >
                  <Eye className="h-3 w-3" />
                  <span>Details</span>
                </button>
                <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm flex items-center space-x-1">
                  <ExternalLink className="h-3 w-3" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Supplier Detail Modal */}
      {selectedSupplier && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedSupplier(null);
            }
          }}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-stone-800">{selectedSupplier.name}</h3>
                <button
                  onClick={() => setSelectedSupplier(null)}
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800 text-lg">Company Information</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-stone-500">Company Name</p>
                      <p className="text-stone-800">{selectedSupplier.companyName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Contact Person</p>
                      <p className="text-stone-800">{selectedSupplier.contactPerson}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Email</p>
                      <p className="text-stone-800">{selectedSupplier.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Phone</p>
                      <p className="text-stone-800">{selectedSupplier.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Website</p>
                      <a href={selectedSupplier.website} className="text-emerald-600 hover:underline">
                        {selectedSupplier.website}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Address</p>
                      <p className="text-stone-800">{selectedSupplier.address}, {selectedSupplier.country}</p>
                    </div>
                  </div>
                </div>

                {/* Business Terms */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800 text-lg">Business Terms</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-stone-500">Payment Terms</p>
                      <p className="text-stone-800">{selectedSupplier.paymentTerms}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Commission Rate</p>
                      <p className="text-stone-800">{selectedSupplier.commission}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Minimum Order Quantity</p>
                      <p className="text-stone-800">{selectedSupplier.minOrderQuantity} units</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Contract Period</p>
                      <p className="text-stone-800">{selectedSupplier.contractStart} to {selectedSupplier.contractEnd}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Return Policy</p>
                      <p className="text-stone-800">{selectedSupplier.returnPolicy}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Warranty Coverage</p>
                      <p className="text-stone-800">{selectedSupplier.warrantyCoverage}</p>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800 text-lg">Performance Metrics</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-stone-500">Total Orders</p>
                      <p className="text-stone-800">{selectedSupplier.totalOrders}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Total Revenue</p>
                      <p className="text-stone-800">${selectedSupplier.totalRevenue.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Last Order Date</p>
                      <p className="text-stone-800">{selectedSupplier.lastOrderDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Response Time</p>
                      <p className="text-stone-800">{selectedSupplier.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-sm text-stone-500">Shipping Time</p>
                      <p className="text-stone-800">{selectedSupplier.shippingTime}</p>
                    </div>
                  </div>
                </div>

                {/* Certifications & Stores */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-stone-800 text-lg">Certifications & Stores</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-stone-500 mb-2">Quality Certifications</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedSupplier.qualityCertifications.map((cert, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedSupplier.amazonStore && (
                      <div>
                        <p className="text-sm text-stone-500">Amazon Store</p>
                        <p className="text-stone-800">{selectedSupplier.amazonStore}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-stone-500">Specialties</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedSupplier.specialties.map((specialty, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="mt-6">
                <h4 className="font-semibold text-stone-800 text-lg mb-2">Notes</h4>
                <p className="text-stone-600 bg-stone-50 p-4 rounded-lg">{selectedSupplier.notes}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
                <button className="px-4 py-2 border border-stone-200 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors">
                  Edit Supplier
                </button>
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Contact Supplier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Supplier AI Issues Modal */}
      {showAIAlerts && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAIAlerts(false);
            }
          }}
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">Supplier AI Issues</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                    {aiUnresolvedIssues.length} Issues Need Attention
                  </span>
                </div>
                <button
                  onClick={() => setShowAIAlerts(false)}
                  className="text-stone-400 dark:text-grey-400 hover:text-stone-600 dark:hover:text-grey-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {aiUnresolvedIssues.map((issue) => (
                  <div key={issue.id} className={`p-4 rounded-lg border-l-4 ${
                    issue.priority === 'urgent' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                    issue.priority === 'high' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' :
                    'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          issue.priority === 'urgent' ? 'bg-red-500' :
                          issue.priority === 'high' ? 'bg-orange-500' :
                          'bg-yellow-500'
                        }`} />
                        <div>
                          <h4 className="font-semibold text-stone-800 dark:text-grey-100">{issue.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-stone-600 dark:text-grey-300">
                            <span className="capitalize">{issue.type.replace('_', ' ')}</span>
                            <span>•</span>
                            <span className={`font-medium ${
                              issue.priority === 'urgent' ? 'text-red-600' :
                              issue.priority === 'high' ? 'text-orange-600' :
                              'text-yellow-600'
                            }`}>
                              {issue.priority.toUpperCase()}
                            </span>
                            <span>•</span>
                            <span>{issue.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-stone-500 dark:text-grey-400">AI Confidence</span>
                        <div className={`text-lg font-bold ${
                          issue.aiConfidence < 30 ? 'text-red-600' :
                          issue.aiConfidence < 50 ? 'text-orange-600' :
                          'text-yellow-600'
                        }`}>
                          {issue.aiConfidence}%
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-stone-700 dark:text-grey-300 mb-3">{issue.description}</p>
                    
                    <div className="text-sm text-stone-600 dark:text-grey-400 mb-3">
                      <span className="font-medium">Supplier:</span> {issue.supplier}
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                        Review Supplier
                      </button>
                      <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm">
                        Contact Supplier
                      </button>
                      <button className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                        Update Contract
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t dark:border-grey-600">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-stone-600 dark:text-grey-300">
                    Supplier Monitoring: {((totalSuppliers - aiUnresolvedIssues.length) / totalSuppliers * 100).toFixed(1)}% healthy
                  </div>
                  <button
                    onClick={() => setShowAIAlerts(false)}
                    className="px-4 py-2 bg-stone-500 dark:bg-grey-600 text-white rounded-lg hover:bg-stone-600 dark:hover:bg-grey-500 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuppliersManager;