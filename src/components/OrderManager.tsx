import React, { useState, useEffect } from 'react';
import { Package, Truck, CheckCircle, Clock, Search, Filter, Eye, Edit, Bot } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  email: string;
  products: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  shippingAddress: string;
  trackingNumber?: string;
}

const OrderManager: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ORD-001',
      customer: 'John Doe',
      email: 'john@example.com',
      products: [
        { name: 'Interactive Smart Dog Puzzle Toy', quantity: 1, price: 49.99 },
        { name: 'Professional Dog Training Clicker Set', quantity: 1, price: 24.99 }
      ],
      total: 74.98,
      status: 'processing',
      orderDate: '2024-01-20',
      shippingAddress: '123 Pet Lane, Denver, CO 80202',
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD-002',
      customer: 'Jane Smith',
      email: 'jane@example.com',
      products: [
        { name: 'Premium Cat Scratching Post Tower', quantity: 1, price: 89.99 }
      ],
      total: 89.99,
      status: 'shipped',
      orderDate: '2024-01-19',
      shippingAddress: '456 Cat Street, Portland, OR 97201',
      trackingNumber: 'TRK987654321'
    },
    {
      id: 'ORD-003',
      customer: 'Mike Johnson',
      email: 'mike@example.com',
      products: [
        { name: 'Luxury Dog Bed with Memory Foam', quantity: 1, price: 79.99 }
      ],
      total: 79.99,
      status: 'delivered',
      orderDate: '2024-01-18',
      shippingAddress: '789 Pet Blvd, Austin, TX 78701'
    },
    {
      id: 'ORD-004',
      customer: 'Sarah Wilson',
      email: 'sarah@example.com',
      products: [
        { name: 'Automatic Pet Water Fountain', quantity: 1, price: 59.99 },
        { name: 'Catnip-Infused Feather Wand Toy', quantity: 2, price: 19.99 }
      ],
      total: 99.97,
      status: 'pending',
      orderDate: '2024-01-21',
      shippingAddress: '321 Pet St, Seattle, WA 98101'
    },
    {
      id: 'ORD-005',
      customer: 'David Chen',
      email: 'david@example.com',
      products: [
        { name: 'Self-Cleaning Cat Litter Box', quantity: 1, price: 199.99 }
      ],
      total: 199.99,
      status: 'processing',
      orderDate: '2024-01-22',
      shippingAddress: '555 Pet Care Dr, Sacramento, CA 95814',
      trackingNumber: 'TRK555666777'
    },
    {
      id: 'ORD-006',
      customer: 'Lisa Rodriguez',
      email: 'lisa@example.com',
      products: [
        { name: 'Adjustable Dog Harness with Reflective Strips', quantity: 1, price: 34.99 },
        { name: 'Professional Dog Training Clicker Set', quantity: 1, price: 24.99 }
      ],
      total: 59.98,
      status: 'shipped',
      orderDate: '2024-01-21',
      shippingAddress: '777 Pet Way, Phoenix, AZ 85001',
      trackingNumber: 'TRK888999000'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [aiOrderInsights, setAiOrderInsights] = useState({
    fraudDetectionAccuracy: 99.2,
    shippingOptimization: 23.4,
    customerSatisfactionPrediction: 91.7,
    learningDataPoints: 89456,
    processedOrders: 12456
  });
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedOrder(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled'];

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

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue: any = a[sortField as keyof Order];
    let bValue: any = b[sortField as keyof Order];
    
    // Handle special cases
    if (sortField === 'id' || sortField === 'customer' || sortField === 'email') {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    } else if (sortField === 'total') {
      aValue = Number(a.total);
      bValue = Number(b.total);
    } else if (sortField === 'orderDate') {
      aValue = new Date(a.orderDate);
      bValue = new Date(b.orderDate);
    } else if (sortField === 'productsCount') {
      aValue = a.products.length;
      bValue = b.products.length;
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'processing': return 'bg-blue-100 text-blue-700';
      case 'shipped': return 'bg-purple-100 text-purple-700';
      case 'delivered': return 'bg-emerald-100 text-emerald-700';
      case 'cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return Clock;
      case 'processing': return Package;
      case 'shipped': return Truck;
      case 'delivered': return CheckCircle;
      default: return Clock;
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus as any } : order
    ));
  };

  const orderStats = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    totalRevenue: orders.reduce((sum, order) => sum + order.total, 0)
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Order Management</h2>
          <div className="flex items-center space-x-4">
            <p className="text-stone-600">AI-powered order processing and fraud detection</p>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">
              AI Fraud Detection: {aiOrderInsights.fraudDetectionAccuracy}% accuracy
            </span>
          </div>
        </div>
      </div>

      {/* AI Order Intelligence */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-6 w-6 text-emerald-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Order Intelligence</h3>
          <span className="text-sm text-emerald-600">Learning from {aiOrderInsights.processedOrders.toLocaleString()} processed orders</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Fraud Detection</h4>
            <p className="text-2xl font-bold text-red-600">{aiOrderInsights.fraudDetectionAccuracy}%</p>
            <p className="text-sm text-stone-600">Accuracy in fraud prevention</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Shipping Optimization</h4>
            <p className="text-2xl font-bold text-blue-600">{aiOrderInsights.shippingOptimization}%</p>
            <p className="text-sm text-stone-600">Faster delivery times</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Satisfaction Prediction</h4>
            <p className="text-2xl font-bold text-emerald-600">{aiOrderInsights.customerSatisfactionPrediction}%</p>
            <p className="text-sm text-stone-600">Customer satisfaction forecast</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Learning Data</h4>
            <p className="text-2xl font-bold text-purple-600">{aiOrderInsights.learningDataPoints.toLocaleString()}</p>
            <p className="text-sm text-stone-600">Data points analyzed</p>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-stone-800">{orderStats.total}</div>
          <div className="text-stone-600 text-sm">Total Orders</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-yellow-600">{orderStats.pending}</div>
          <div className="text-stone-600 text-sm">Pending</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-blue-600">{orderStats.processing}</div>
          <div className="text-stone-600 text-sm">Processing</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-purple-600">{orderStats.shipped}</div>
          <div className="text-stone-600 text-sm">Shipped</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-emerald-600">{orderStats.delivered}</div>
          <div className="text-stone-600 text-sm">Delivered</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
          <div className="text-2xl font-bold text-stone-800">${orderStats.totalRevenue.toFixed(2)}</div>
          <div className="text-stone-600 text-sm">Revenue</div>
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
                placeholder="Search orders, customers, or emails..."
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
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('id')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Order ID</span>
                    <span className="text-xs">{getSortIcon('id')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('customer')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Customer</span>
                    <span className="text-xs">{getSortIcon('customer')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('productsCount')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Products</span>
                    <span className="text-xs">{getSortIcon('productsCount')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('total')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Total</span>
                    <span className="text-xs">{getSortIcon('total')}</span>
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
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('orderDate')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Date</span>
                    <span className="text-xs">{getSortIcon('orderDate')}</span>
                  </div>
                </th>
                <th className="text-left p-4 font-semibold text-stone-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredOrders.map((order) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <tr key={order.id} className="hover:bg-stone-50/50">
                    <td className="p-4">
                      <div className="font-medium text-stone-800">{order.id}</div>
                      {order.trackingNumber && (
                        <div className="text-sm text-stone-500">Track: {order.trackingNumber}</div>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-stone-800">{order.customer}</div>
                      <div className="text-sm text-stone-500">{order.email}</div>
                    </td>
                    <td className="p-4">
                      <div className="space-y-1">
                        {order.products.map((product, index) => (
                          <div key={index} className="text-sm text-stone-600">
                            {product.quantity}x {product.name}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="font-medium text-stone-800">${order.total.toFixed(2)}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <StatusIcon className="h-4 w-4" />
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(order.status)}`}>
                          {order.status.toUpperCase()}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-stone-600">{order.orderDate}</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-xs border border-stone-200 rounded px-2 py-1"
                        >
                          {statuses.slice(1).map(status => (
                            <option key={status} value={status}>
                              {status.charAt(0).toUpperCase() + status.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail Modal */}
      {selectedOrder && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedOrder(null);
            }
          }}
        >
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-stone-800">Order Details - {selectedOrder.id}</h3>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-stone-400 hover:text-stone-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Customer Information</h4>
                    <p className="text-stone-600">{selectedOrder.customer}</p>
                    <p className="text-stone-600">{selectedOrder.email}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Order Information</h4>
                    <p className="text-stone-600">Date: {selectedOrder.orderDate}</p>
                    <p className="text-stone-600">Status: {selectedOrder.status}</p>
                    {selectedOrder.trackingNumber && (
                      <p className="text-stone-600">Tracking: {selectedOrder.trackingNumber}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Shipping Address</h4>
                  <p className="text-stone-600">{selectedOrder.shippingAddress}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-stone-800 mb-2">Products</h4>
                  <div className="space-y-2">
                    {selectedOrder.products.map((product, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-stone-50 rounded-lg">
                        <div>
                          <p className="font-medium text-stone-800">{product.name}</p>
                          <p className="text-stone-600">Quantity: {product.quantity}</p>
                        </div>
                        <p className="font-medium text-stone-800">${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-bold text-stone-800">
                    <span>Total:</span>
                    <span>${selectedOrder.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManager;