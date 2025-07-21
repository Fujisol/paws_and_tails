import React, { useState, useEffect } from 'react';
import { TrendingUp, Package, ShoppingCart, DollarSign, Users, AlertCircle, Eye, X, AlertTriangle, Brain } from 'lucide-react';

interface AdminDashboardProps {
  onNavigate: (tab: string) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onNavigate }) => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,847',
      change: '+12.5%',
      icon: DollarSign,
      color: 'emerald',
      navigateTo: 'bookkeeping'
    },
    {
      title: 'Orders Today',
      value: '47',
      change: '+8.2%',
      icon: ShoppingCart,
      color: 'blue',
      navigateTo: 'orders'
    },
    {
      title: 'Products in Stock',
      value: '234',
      change: '-3.1%',
      icon: Package,
      color: 'purple',
      navigateTo: 'inventory'
    },
    {
      title: 'Active Customers',
      value: '1,289',
      change: '+15.3%',
      icon: Users,
      color: 'orange',
      navigateTo: 'customer-service'
    }
  ];

  const recentOrders = [
    { 
      id: '#1234', 
      customer: 'John Doe', 
      email: 'john@example.com',
      product: 'Interactive Smart Dog Puzzle Toy', 
      amount: '$49.99', 
      status: 'Processing',
      products: [
        { name: 'Interactive Smart Dog Puzzle Toy', quantity: 1, price: 49.99 }
      ],
      total: 49.99,
      orderDate: '2024-01-20',
      shippingAddress: '123 Pet Lane, Denver, CO 80202',
      trackingNumber: 'TRK123456789'
    },
    { 
      id: '#1235', 
      customer: 'Jane Smith', 
      email: 'jane@example.com',
      product: 'Premium Cat Scratching Post Tower', 
      amount: '$89.99', 
      status: 'Shipped',
      products: [
        { name: 'Premium Cat Scratching Post Tower', quantity: 1, price: 89.99 }
      ],
      total: 89.99,
      orderDate: '2024-01-19',
      shippingAddress: '456 Cat Street, Portland, OR 97201',
      trackingNumber: 'TRK987654321'
    },
    { 
      id: '#1236', 
      customer: 'Mike Johnson', 
      email: 'mike@example.com',
      product: 'Luxury Dog Bed with Memory Foam', 
      amount: '$79.99', 
      status: 'Delivered',
      products: [
        { name: 'Luxury Dog Bed with Memory Foam', quantity: 1, price: 79.99 }
      ],
      total: 79.99,
      orderDate: '2024-01-18',
      shippingAddress: '789 Pet Blvd, Austin, TX 78701'
    },
    { 
      id: '#1237', 
      customer: 'Sarah Wilson', 
      email: 'sarah@example.com',
      product: 'Automatic Pet Water Fountain', 
      amount: '$59.99', 
      status: 'Processing',
      products: [
        { name: 'Automatic Pet Water Fountain', quantity: 1, price: 59.99 }
      ],
      total: 59.99,
      orderDate: '2024-01-21',
      shippingAddress: '321 Pet St, Seattle, WA 98101'
    },
  ];

  const lowStockAlerts = [
    { product: 'Automatic Pet Water Fountain', stock: 5, threshold: 10 },
    { product: 'Premium Cat Scratching Post Tower', stock: 8, threshold: 15 },
    { product: 'Catnip-Infused Feather Wand Toy', stock: 12, threshold: 20 },
    { product: 'Self-Cleaning Cat Litter Box', stock: 8, threshold: 10 },
    { product: 'Adjustable Dog Harness with Reflective Strips', stock: 12, threshold: 15 }
  ];

  const [selectedOrderFromDashboard, setSelectedOrderFromDashboard] = useState(null);
  const [selectedLowStockProduct, setSelectedLowStockProduct] = useState(null);
  const [showUrgentIssues, setShowUrgentIssues] = useState(false);
  const [learningFromResolution, setLearningFromResolution] = useState(null);

  // Mock urgent issues data
  const urgentIssues = [
    {
      id: 'ISS-001',
      type: 'client',
      priority: 'critical',
      title: 'Payment Processing Failed',
      description: 'Customer John Martinez unable to complete $549.99 order - payment gateway timeout',
      customer: 'John Martinez',
      orderId: 'ORD-1234',
      timestamp: '5 minutes ago',
      status: 'unresolved'
    },
    {
      id: 'ISS-002',
      type: 'site',
      priority: 'high',
      title: 'Inventory Sync Error',
      description: 'SpiderFarmer SF-4000 stock count mismatch between system and supplier',
      affectedProduct: 'SpiderFarmer SF-4000 LED',
      timestamp: '12 minutes ago',
      status: 'investigating'
    },
    {
      id: 'ISS-003',
      type: 'client',
      priority: 'urgent',
      title: 'Shipping Address Validation Failed',
      description: 'Customer Sarah Wilson - address verification failed for THCA flower shipment',
      customer: 'Sarah Wilson',
      orderId: 'ORD-1237',
      timestamp: '18 minutes ago',
      status: 'pending'
    },
    {
      id: 'ISS-004',
      type: 'site',
      priority: 'critical',
      title: 'SSL Certificate Expiring',
      description: 'SSL certificate expires in 3 days - immediate renewal required',
      timestamp: '1 hour ago',
      status: 'action_required'
    }
  ];

  const criticalIssuesCount = urgentIssues.filter(issue => 
    issue.priority === 'critical' || issue.priority === 'urgent'
  ).length;

  // AI Learning Functions
  const handleManualResolution = (issue, resolutionType, resolutionDetails) => {
    setLearningFromResolution({
      issueId: issue.id,
      issueType: issue.type,
      priority: issue.priority,
      resolutionType,
      resolutionDetails,
      timestamp: new Date().toISOString(),
      learningStatus: 'processing'
    });

    // Simulate AI learning process
    setTimeout(() => {
      setLearningFromResolution(prev => ({
        ...prev,
        learningStatus: 'completed',
        aiImprovements: [
          'Pattern recognition updated for similar issues',
          'Decision tree enhanced with new resolution path',
          'Confidence threshold adjusted for this issue type'
        ]
      }));
    }, 2000);
  };

  const handleTeachAI = (issue, teachingNotes) => {
    setLearningFromResolution({
      issueId: issue.id,
      issueType: issue.type,
      teachingNotes,
      timestamp: new Date().toISOString(),
      learningStatus: 'learning'
    });

    // Simulate AI learning from teaching
    setTimeout(() => {
      setLearningFromResolution(prev => ({
        ...prev,
        learningStatus: 'learned',
        newCapabilities: [
          'Added new resolution strategy to knowledge base',
          'Updated problem classification accuracy',
          'Enhanced context understanding for similar scenarios'
        ]
      }));
    }, 3000);
  };

  const handleOrderClick = (order) => {
    // Convert dashboard order to full order format for the modal
    const fullOrder = {
      ...order,
      status: order.status.toLowerCase()
    };
    setSelectedOrderFromDashboard(fullOrder);
  };

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedOrderFromDashboard(null);
        setSelectedLowStockProduct(null);
        setShowUrgentIssues(false);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  return (
    <div className="p-6 space-y-6 text-amber-100 dark:text-amber-100">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-2">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent">Admin Dashboard</h2>
          <button
            onClick={() => setShowUrgentIssues(true)}
            className="relative bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 animate-pulse"
            title="Urgent Issues"
          >
            <AlertTriangle className="h-5 w-5" />
            {criticalIssuesCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {criticalIssuesCount}
              </span>
            )}
          </button>
        </div>
        <p className="text-stone-600 dark:text-grey-300">Welcome back! Here's what's happening with your store today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <button 
              key={index} 
              onClick={() => onNavigate(stat.navigateTo)}
              className="bg-white/80 dark:bg-amber-900/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 dark:border-amber-700/50 hover:shadow-md hover:scale-105 transition-all duration-200 text-left group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/50 group-hover:bg-${stat.color}-200 dark:group-hover:bg-${stat.color}-800/70 transition-colors duration-200`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 dark:text-amber-100 mb-1 group-hover:text-stone-900 dark:group-hover:text-amber-50 transition-colors duration-200">{stat.value}</h3>
              <p className="text-stone-600 dark:text-amber-300 text-sm group-hover:text-stone-700 dark:group-hover:text-amber-200 transition-colors duration-200">{stat.title}</p>
              <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-xs text-stone-500 dark:text-amber-400">Click to view details →</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Recent Orders & Low Stock Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white/80 dark:bg-amber-900/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 dark:border-amber-700/50">
          <h3 className="text-xl font-semibold text-stone-800 dark:text-amber-100 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between p-4 bg-stone-50/50 dark:bg-amber-800/30 rounded-lg hover:bg-stone-100/50 dark:hover:bg-amber-800/50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <span className="font-medium text-stone-800 dark:text-amber-100">{order.id}</span>
                    <span className="text-stone-600 dark:text-amber-400">•</span>
                    <span className="text-stone-600 dark:text-amber-300">{order.customer}</span>
                  </div>
                  <p className="text-sm text-stone-500 dark:text-amber-400 mt-1">{order.product}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                  <p className="font-semibold text-stone-800 dark:text-amber-100">{order.amount}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {order.status}
                  </span>
                  </div>
                  <button
                    onClick={() => handleOrderClick(order)}
                    className="px-3 py-1 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors text-sm flex items-center space-x-1"
                  >
                    <Eye className="h-3 w-3" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="bg-white/80 dark:bg-amber-900/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 dark:border-amber-700/50">
          <h3 className="text-xl font-semibold text-stone-800 dark:text-amber-100 mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
            Low Stock Alerts
          </h3>
          <div className="space-y-4">
            {lowStockAlerts.map((alert, index) => (
              <div key={index} className="p-4 bg-orange-50/50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-stone-800 dark:text-amber-100">{alert.product}</p>
                    <p className="text-sm text-stone-600 dark:text-amber-300">
                      Current stock: {alert.stock} (Threshold: {alert.threshold})
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedLowStockProduct(alert)}
                      className="px-3 py-1 bg-blue-500 dark:bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors flex items-center space-x-1"
                    >
                      <Eye className="h-3 w-3" />
                      <span>View</span>
                    </button>
                    <button className="px-3 py-1 bg-orange-500 dark:bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 dark:bg-amber-900/30 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200 dark:border-amber-700/50">
        <h3 className="text-xl font-semibold text-stone-800 dark:text-amber-100 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => onNavigate('inventory')}
            className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors text-left"
          >
            <Package className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mb-2" />
            <p className="font-medium text-stone-800 dark:text-amber-100">Manage Inventory</p>
            <p className="text-sm text-stone-600 dark:text-amber-300">Add products to your inventory</p>
          </button>
          <button 
            onClick={() => onNavigate('analytics')}
            className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-left"
          >
            <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
            <p className="font-medium text-stone-800 dark:text-amber-100">View Analytics</p>
            <p className="text-sm text-stone-600 dark:text-amber-300">Check sales performance</p>
          </button>
          <button 
            onClick={() => onNavigate('customer-service')}
            className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-left"
          >
            <Users className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
            <p className="font-medium text-stone-800 dark:text-amber-100">Customer Service</p>
            <p className="text-sm text-stone-600 dark:text-amber-300">Manage customer support</p>
          </button>
        </div>
      </div>

      {/* Order Detail Modal from Dashboard */}
      {selectedOrderFromDashboard && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedOrderFromDashboard(null);
            }
          }}
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">Order Details - {selectedOrderFromDashboard.id}</h3>
                <button
                  onClick={() => setSelectedOrderFromDashboard(null)}
                  className="text-stone-400 dark:text-grey-400 hover:text-stone-600 dark:hover:text-grey-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Customer Information</h4>
                    <p className="text-stone-600 dark:text-grey-300">{selectedOrderFromDashboard.customer}</p>
                    <p className="text-stone-600 dark:text-grey-300">{selectedOrderFromDashboard.email}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Order Information</h4>
                    <p className="text-stone-600 dark:text-grey-300">Date: {selectedOrderFromDashboard.orderDate}</p>
                    <p className="text-stone-600 dark:text-grey-300">Status: {selectedOrderFromDashboard.status}</p>
                    {selectedOrderFromDashboard.trackingNumber && (
                      <p className="text-stone-600 dark:text-grey-300">Tracking: {selectedOrderFromDashboard.trackingNumber}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Shipping Address</h4>
                  <p className="text-stone-600 dark:text-grey-300">{selectedOrderFromDashboard.shippingAddress}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Products</h4>
                  <div className="space-y-2">
                    {selectedOrderFromDashboard.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-stone-50 dark:bg-grey-700/30 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-800 dark:text-grey-100">{product.name}</p>
                          <p className="text-stone-600 dark:text-grey-300">Quantity: {product.quantity}</p>
                        </div>
                        <p className="font-medium text-stone-800 dark:text-grey-100">${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t dark:border-grey-600 pt-4">
                  <div className="flex justify-between items-center text-lg font-bold text-stone-800 dark:text-grey-100">
                    <span>Total:</span>
                    <span>${selectedOrderFromDashboard.total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => {
                      setSelectedOrderFromDashboard(null);
                      onNavigate('orders');
                    }}
                    className="px-4 py-2 bg-primary-500 dark:bg-accent-500 text-white rounded-lg hover:bg-primary-600 dark:hover:bg-accent-600 transition-colors"
                  >
                    Go to Order Manager
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Low Stock Product Detail Modal */}
      {selectedLowStockProduct && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedLowStockProduct(null);
            }
          }}
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">Low Stock Alert - {selectedLowStockProduct.product}</h3>
                <button
                  onClick={() => setSelectedLowStockProduct(null)}
                  className="text-stone-400 dark:text-grey-400 hover:text-stone-600 dark:hover:text-grey-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg border border-orange-200 dark:border-orange-700/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                    <span className="font-medium text-orange-800 dark:text-orange-300">Stock Alert</span>
                  </div>
                  <p className="text-orange-700 dark:text-orange-400">
                    This product is running low on inventory and needs immediate attention.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Current Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-600 dark:text-grey-300">Current Stock:</span>
                        <span className="font-medium text-red-600 dark:text-red-400">{selectedLowStockProduct.stock} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600 dark:text-grey-300">Minimum Threshold:</span>
                        <span className="font-medium text-stone-800 dark:text-grey-100">{selectedLowStockProduct.threshold} units</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600 dark:text-grey-300">Units Below Threshold:</span>
                        <span className="font-medium text-orange-600 dark:text-orange-400">{selectedLowStockProduct.threshold - selectedLowStockProduct.stock} units</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-2">Recommended Actions</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-stone-600 dark:text-grey-300">Reorder immediately</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-stone-600 dark:text-grey-300">Contact supplier</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-stone-600 dark:text-grey-300">Update inventory threshold</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t dark:border-grey-600 pt-4">
                  <h4 className="font-semibold text-stone-800 dark:text-grey-100 mb-3">Quick Actions</h4>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setSelectedLowStockProduct(null);
                        onNavigate('inventory');
                      }}
                      className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                    >
                      Go to Inventory
                    </button>
                    <button
                      onClick={() => {
                        setSelectedLowStockProduct(null);
                        onNavigate('suppliers');
                      }}
                      className="px-4 py-2 bg-emerald-500 dark:bg-emerald-600 text-white rounded-lg hover:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors"
                    >
                      Contact Supplier
                    </button>
                    <button className="px-4 py-2 bg-orange-500 dark:bg-orange-600 text-white rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 transition-colors">
                      Reorder Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Urgent Issues Modal */}
      {showUrgentIssues && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowUrgentIssues(false);
            }
          }}
        >
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">Urgent Issues</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                    {urgentIssues.length} Active Issues
                  </span>
                </div>
                <button
                  onClick={() => setShowUrgentIssues(false)}
                  className="text-stone-400 dark:text-grey-400 hover:text-stone-600 dark:hover:text-grey-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                {urgentIssues.map((issue) => (
                  <div key={issue.id} className={`p-4 rounded-lg border-l-4 ${
                    issue.priority === 'critical' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                    issue.priority === 'urgent' ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20' :
                    'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          issue.priority === 'critical' ? 'bg-red-500' :
                          issue.priority === 'urgent' ? 'bg-orange-500' :
                          'bg-yellow-500'
                        }`} />
                        <div>
                          <h4 className="font-semibold text-stone-800 dark:text-grey-100">{issue.title}</h4>
                          <div className="flex items-center space-x-4 text-sm text-stone-600 dark:text-grey-300">
                            <span className="capitalize">{issue.type} Issue</span>
                            <span>•</span>
                            <span className={`font-medium ${
                              issue.priority === 'critical' ? 'text-red-600' :
                              issue.priority === 'urgent' ? 'text-orange-600' :
                              'text-yellow-600'
                            }`}>
                              {issue.priority.toUpperCase()}
                            </span>
                            <span>•</span>
                            <span>{issue.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        issue.status === 'unresolved' ? 'bg-red-100 text-red-700' :
                        issue.status === 'investigating' ? 'bg-blue-100 text-blue-700' :
                        issue.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {issue.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    
                    <p className="text-stone-700 dark:text-grey-300 mb-3">{issue.description}</p>
                    
                    {issue.customer && (
                      <div className="text-sm text-stone-600 dark:text-grey-400 mb-3">
                        <span className="font-medium">Customer:</span> {issue.customer}
                        {issue.orderId && <span className="ml-2">• Order: {issue.orderId}</span>}
                      </div>
                    )}
                    
                    {issue.affectedProduct && (
                      <div className="text-sm text-stone-600 dark:text-grey-400 mb-3">
                        <span className="font-medium">Affected Product:</span> {issue.affectedProduct}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                        Investigate
                      </button>
                      <button 
                        onClick={() => handleManualResolution(issue, 'manual_fix', 'Issue resolved manually by admin')}
                        className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
                      >
                        Resolve
                      </button>
                      <button 
                        onClick={() => handleTeachAI(issue, 'Teaching AI how to handle this type of issue in the future')}
                        className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                      >
                        Teach AI
                      </button>
                      {issue.customer && (
                        <button 
                          onClick={() => {
                            setShowUrgentIssues(false);
                            onNavigate('customer-service');
                          }}
                          className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm"
                        >
                          Contact Customer
                        </button>
                      )}
                      {issue.orderId && (
                        <button 
                          onClick={() => {
                            setShowUrgentIssues(false);
                            onNavigate('orders');
                          }}
                          className="px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm"
                        >
                          View Order
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t dark:border-grey-600">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-stone-600 dark:text-grey-300">
                    Last updated: Just now
                  </div>
                  <button
                    onClick={() => setShowUrgentIssues(false)}
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

export default AdminDashboard;