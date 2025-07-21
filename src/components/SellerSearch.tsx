import React, { useState } from 'react';
import { Search, Star, TrendingUp, Globe, Package, Bot, Filter, ExternalLink, AlertTriangle } from 'lucide-react';

interface Seller {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  products: number;
  priceRange: string;
  specialties: string[];
  responseTime: string;
  minOrder: number;
  shippingTime: string;
  verified: boolean;
  amazonStore: string;
  contact: string;
  description: string;
}

const SellerSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [isSearching, setIsSearching] = useState(false);
  const [showAIAlerts, setShowAIAlerts] = useState(false);

  // Mock AI issues that can't be resolved automatically
  const aiUnresolvedIssues = [
    {
      id: 'AS-001',
      type: 'seller_verification_failed',
      priority: 'urgent',
      title: 'Seller Verification Failed',
      description: 'Unable to verify legitimacy of new cannabis supplier - requires manual background check',
      seller: 'Green Mountain Extracts',
      timestamp: '35 minutes ago',
      aiConfidence: 23.1
    },
    {
      id: 'AS-002',
      type: 'price_anomaly_detected',
      priority: 'high',
      title: 'Suspicious Pricing Detected',
      description: 'Seller offering THCA products 60% below market rate - potential quality/legal issues',
      seller: 'Budget Cannabis Co.',
      timestamp: '1 hour ago',
      aiConfidence: 78.9
    },
    {
      id: 'AS-003',
      type: 'compliance_uncertainty',
      priority: 'medium',
      title: 'Legal Compliance Uncertain',
      description: 'Cannot determine if seller meets all state cannabis regulations',
      seller: 'Rocky Mountain Hemp',
      timestamp: '2 hours ago',
      aiConfidence: 45.6
    }
  ];

  const criticalSellerIssues = aiUnresolvedIssues.filter(issue => 
    issue.priority === 'urgent' || issue.priority === 'high'
  ).length;

  const [aiLearningStats, setAiLearningStats] = useState({
    totalSearches: 23456,
    successfulMatches: 21234,
    accuracyRate: 96.8,
    learningDataPoints: 45678,
    improvementRate: 23.7,
    competitiveAnalysis: {
      sitesMonitored: 47,
      priceDropsDetected: 156,
      commercialsAnalyzed: 89,
      competitorPriceAccuracy: 98.4,
      socialMediaIntegration: 94.2
    }
  });

  const competitiveIntelligence = {
    priceComparisons: [
      { site: 'Amazon', avgPriceDiff: '-12.3%', reliability: 'High' },
      { site: 'eBay', avgPriceDiff: '+8.7%', reliability: 'Medium' },
      { site: 'Alibaba', avgPriceDiff: '-34.2%', reliability: 'Variable' },
      { site: 'DHgate', avgPriceDiff: '-28.9%', reliability: 'Low' },
      { site: 'AliExpress', avgPriceDiff: '-31.5%', reliability: 'Medium' }
    ],
    recentPriceDrops: [
      { product: 'LED Grow Lights', drop: '15%', competitor: 'Amazon', detected: '2 hours ago' },
      { product: 'CBD Tinctures', drop: '8%', competitor: 'Direct Supplier', detected: '4 hours ago' },
      { product: 'Hydroponic Systems', drop: '12%', competitor: 'eBay Store', detected: '6 hours ago' }
    ],
    commercialAnalysis: [
      { brand: 'SpiderFarmer', campaign: 'Winter Sale', discount: '20%', effectiveness: 'High' },
      { brand: 'Mars Hydro', campaign: 'New Year Promo', discount: '15%', effectiveness: 'Medium' },
      { brand: 'Green Valley', campaign: 'Premium Quality Focus', discount: '0%', effectiveness: 'High' }
    ]
  };

  const sellers: Seller[] = [
    {
      id: '1',
      name: 'Green Valley Farms',
      rating: 4.8,
      reviews: 2456,
      location: 'Denver, Colorado',
      products: 85,
      priceRange: '$25 - $300',
      specialties: ['THCA Flower', 'Hemp Products', 'Cannabis Concentrates'],
      responseTime: '< 2 hours',
      minOrder: 10,
      shippingTime: '3-7 days',
      verified: true,
      amazonStore: 'green-valley-farms',
      contact: 'sales@greenvalleyfarms.com',
      description: 'Premium THCA and hemp product supplier with full Colorado licensing and compliance. Strict quality control with 99.2% customer satisfaction rate.'
    },
    {
      id: '2',
      name: 'Pure Wellness Co.',
      rating: 4.6,
      reviews: 1834,
      location: 'Portland, Oregon',
      products: 120,
      priceRange: '$30 - $250',
      specialties: ['CBD Products', 'CBG Products', 'Tinctures', 'Topicals'],
      responseTime: '< 4 hours',
      minOrder: 25,
      shippingTime: '2-5 days',
      verified: true,
      amazonStore: 'pure-wellness-co',
      contact: 'orders@purewellness.com',
      description: 'FDA-compliant CBD and wellness product manufacturer with premium quality standards. Zero-defect policy with rigorous testing protocols.'
    },
    {
      id: '3',
      name: 'HydroGrow Systems',
      rating: 4.7,
      reviews: 1567,
      location: 'San Diego, California',
      products: 200,
      priceRange: '$50 - $800',
      specialties: ['Hydroponic Systems', 'Growing Equipment', 'Nutrients'],
      responseTime: '< 6 hours',
      minOrder: 20,
      shippingTime: '5-10 days',
      verified: true,
      amazonStore: 'hydrogrow-systems',
      contact: 'info@hydrogrowsystems.com',
      description: 'Professional hydroponic equipment supplier for serious growers and commercial operations. Premium-grade equipment with 0.3% return rate.'
    },
    {
      id: '4',
      name: 'Delta Delights',
      rating: 4.9,
      reviews: 987,
      location: 'Austin, Texas',
      products: 65,
      priceRange: '$25 - $150',
      specialties: ['Delta-8 Products', 'Gummies', 'Vapes', 'Edibles'],
      responseTime: '< 3 hours',
      minOrder: 15,
      shippingTime: '4-8 days',
      verified: true,
      amazonStore: 'delta-delights',
      contact: 'support@deltadelights.com',
      description: 'Premium Delta-8 and edible manufacturer with full state compliance and lab testing. Artisan-quality products with 99.7% satisfaction rate.'
    },
    {
      id: '5',
      name: 'Harvest Pro Equipment',
      rating: 4.5,
      reviews: 1234,
      location: 'Boulder, Colorado',
      products: 95,
      priceRange: '$75 - $500',
      specialties: ['Drying Equipment', 'Trimming Tools', 'Storage Solutions'],
      responseTime: '< 8 hours',
      minOrder: 30,
      shippingTime: '3-6 days',
      verified: true,
      amazonStore: 'harvest-pro-equipment',
      contact: 'hello@harvestpro.com',
      description: 'Specialized post-harvest equipment for commercial growers and processing facilities. Industrial-grade quality with lifetime durability guarantee.'
    },
    {
      id: '6',
      name: 'SpiderFarmer Official',
      rating: 4.9,
      reviews: 3456,
      location: 'Las Vegas, Nevada',
      products: 150,
      priceRange: '$100 - $1200',
      specialties: ['LED Grow Lights', 'Indoor Growing', 'Hydroponics', 'Agriculture'],
      responseTime: '< 1 hour',
      minOrder: 5,
      shippingTime: '1-3 days',
      verified: true,
      amazonStore: 'spiderfarmer-official',
      contact: 'wholesale@spiderfarmer-usa.com',
      description: 'Premium LED grow lights and indoor growing equipment. Official US distributor with full warranty support and fast shipping. Industry-leading 0.1% defect rate.'
    }
  ];

  const categories = ['all', 'THCA Products', 'CBD Products', 'Growing Equipment', 'LED Grow Lights', 'Hydroponic Systems', 'Delta-8 Products'];
  const locations = ['all', 'Colorado', 'California', 'Oregon', 'Texas', 'Nevada'];

  const filteredSellers = sellers.filter(seller => {
    const matchesSearch = seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         seller.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = category === 'all' || seller.specialties.includes(category);
    const matchesLocation = location === 'all' || seller.location.includes(location);
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleAISearch = async () => {
    setIsSearching(true);
    // Simulate AI search
    setTimeout(() => {
      setIsSearching(false);
    }, 3000);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">AI Seller Search</h2>
        <p className="text-stone-600">Find the perfect suppliers for your dropshipping business</p>
      </div>

      {/* AI Search Section */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-8 w-8 text-emerald-600" />
          <div>
            <h3 className="text-xl font-semibold text-stone-800">AI Competitive Intelligence & Supplier Discovery</h3>
            <p className="text-sm text-emerald-600">Monitoring {aiLearningStats.competitiveAnalysis.sitesMonitored} competitor sites • {aiLearningStats.accuracyRate}% accuracy • Social Media AI Integration: {aiLearningStats.competitiveAnalysis.socialMediaIntegration}%</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-stone-600">Sites Monitored</p>
            <p className="text-lg font-bold text-blue-600">{aiLearningStats.competitiveAnalysis.sitesMonitored}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-stone-600">Price Drops Detected</p>
            <p className="text-lg font-bold text-emerald-600">{aiLearningStats.competitiveAnalysis.priceDropsDetected}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-stone-600">Commercials Analyzed</p>
            <p className="text-lg font-bold text-purple-600">{aiLearningStats.competitiveAnalysis.commercialsAnalyzed}</p>
          </div>
          <div className="bg-white/50 rounded-lg p-3">
            <p className="text-sm text-stone-600">Price Accuracy</p>
            <p className="text-lg font-bold text-orange-600">{aiLearningStats.competitiveAnalysis.competitorPriceAccuracy}%</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="AI Search: 'Find suppliers with better prices than Amazon, low return rates, and trending products for social media campaigns'"
            className="flex-1 px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <button
            onClick={handleAISearch}
            disabled={isSearching}
            className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 flex items-center space-x-2"
          >
            <Bot className="h-4 w-4" />
            <span>{isSearching ? 'Analyzing...' : 'AI Competitive Search'}</span>
          </button>
        </div>
        {isSearching && (
          <div className="mt-4 p-4 bg-white/50 rounded-lg">
            <div className="flex items-center space-x-2 text-emerald-600">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-600"></div>
              <span>AI is analyzing competitor prices across {aiLearningStats.competitiveAnalysis.sitesMonitored} sites, detecting price drops, and coordinating with Social Media AI for trending products...</span>
            </div>
            <div className="mt-2 text-sm text-stone-600">
              Monitoring Amazon, eBay, Alibaba pricing • Analyzing competitor commercials • Coordinating with Social Media AI • Finding trending products with best margins
            </div>
          </div>
        )}
      </div>

      {/* Competitive Intelligence Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Price Comparisons */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            Competitor Price Analysis
          </h3>
          <div className="space-y-3">
            {competitiveIntelligence.priceComparisons.map((comp, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-stone-50/50 rounded-lg">
                <div>
                  <p className="font-medium text-stone-800">{comp.site}</p>
                  <p className="text-sm text-stone-500">Reliability: {comp.reliability}</p>
                </div>
                <span className={`font-bold ${comp.avgPriceDiff.startsWith('-') ? 'text-red-600' : 'text-green-600'}`}>
                  {comp.avgPriceDiff}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Price Drops */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
            Recent Price Drops Detected
          </h3>
          <div className="space-y-3">
            {competitiveIntelligence.recentPriceDrops.map((drop, index) => (
              <div key={index} className="p-3 bg-orange-50/50 rounded-lg border border-orange-200">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-stone-800">{drop.product}</p>
                  <span className="font-bold text-red-600">-{drop.drop}</span>
                </div>
                <p className="text-sm text-stone-500">{drop.competitor} • {drop.detected}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Analysis */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-lg font-semibold text-stone-800 mb-4 flex items-center">
            <Star className="h-5 w-5 text-purple-600 mr-2" />
            Competitor Commercial Analysis
          </h3>
          <div className="space-y-3">
            {competitiveIntelligence.commercialAnalysis.map((campaign, index) => (
              <div key={index} className="p-3 bg-purple-50/50 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-stone-800">{campaign.brand}</p>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    campaign.effectiveness === 'High' ? 'bg-green-100 text-green-700' :
                    campaign.effectiveness === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {campaign.effectiveness}
                  </span>
                </div>
                <p className="text-sm text-stone-600">{campaign.campaign}</p>
                <p className="text-sm text-stone-500">Discount: {campaign.discount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Integration Status */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Integration with Social Media Manager</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Trending Product Detection</h4>
            <p className="text-sm text-stone-600">AI identifies products gaining social media traction and finds competitive suppliers</p>
            <div className="mt-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">Active Learning</span>
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Price Drop Social Alerts</h4>
            <p className="text-sm text-stone-600">When competitors drop prices, Social Media AI creates promotional content automatically</p>
            <div className="mt-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-blue-600">Real-time Sync</span>
            </div>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Campaign Optimization</h4>
            <p className="text-sm text-stone-600">Analyzes competitor campaigns and suggests better supplier partnerships for social content</p>
            <div className="mt-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-purple-600">Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search sellers or specialties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
          
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {locations.map(loc => (
              <option key={loc} value={loc}>
                {loc === 'all' ? 'All Locations' : loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Sellers Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSellers.map((seller) => (
          <div key={seller.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Package className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-800">{seller.name}</h3>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4 text-stone-400" />
                    <span className="text-stone-600 text-sm">{seller.location}</span>
                    {seller.verified && (
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium text-stone-800">{seller.rating}</span>
                <span className="text-stone-500 text-sm">({seller.reviews})</span>
              </div>
            </div>
            
            <p className="text-stone-600 mb-4">{seller.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-stone-500">Products</p>
                <p className="font-medium text-stone-800">{seller.products.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Price Range</p>
                <p className="font-medium text-stone-800">{seller.priceRange}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Response Time</p>
                <p className="font-medium text-stone-800">{seller.responseTime}</p>
              </div>
              <div>
                <p className="text-sm text-stone-500">Shipping</p>
                <p className="font-medium text-stone-800">{seller.shippingTime}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-stone-500 mb-2">Specialties</p>
              <div className="flex flex-wrap gap-2">
                {seller.specialties.map((specialty, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-stone-500">
                Min Order: {seller.minOrder} units
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-stone-200 text-stone-600 rounded-lg hover:bg-stone-50 transition-colors text-sm">
                  Contact
                </button>
                <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm flex items-center space-x-1">
                  <ExternalLink className="h-3 w-3" />
                  <span>View Store</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerSearch;