import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Target, Bot } from 'lucide-react';

interface AnalyticsDashboardProps {
  onNavigate?: (tab: string) => void;
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onNavigate }) => {
  const [aiAnalytics, setAiAnalytics] = useState({
    predictiveAccuracy: 94.2,
    trendsIdentified: 23,
    optimizationsSuggested: 8,
    learningDataPoints: 234567,
    performanceImprovement: 18.7
  });

  const metrics = [
    {
      title: 'Revenue',
      value: '$45,231',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald',
      navigateTo: 'bookkeeping'
    },
    {
      title: 'Orders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'blue',
      navigateTo: 'orders'
    },
    {
      title: 'Customers',
      value: '5,678',
      change: '+15.3%',
      trend: 'up',
      icon: Users,
      color: 'purple',
      navigateTo: 'customer-service'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '-0.4%',
      trend: 'down',
      icon: Target,
      color: 'orange',
      navigateTo: 'analytics'
    }
  ];

  const additionalMetrics = [
    {
      title: 'Average Order Value',
      value: '$87.45',
      change: '+5.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'emerald',
      navigateTo: 'bookkeeping'
    },
    {
      title: 'Customer Retention',
      value: '78%',
      change: '+2.1%',
      trend: 'up',
      icon: Users,
      color: 'blue',
      navigateTo: 'customer-service'
    },
    {
      title: 'Return Rate',
      value: '2.3%',
      change: '-0.8%',
      trend: 'down',
      icon: Target,
      color: 'purple',
      navigateTo: 'orders'
    }
  ];

  const salesData = [
    { month: 'Jan', sales: 12000, orders: 145 },
    { month: 'Feb', sales: 15000, orders: 189 },
    { month: 'Mar', sales: 18000, orders: 234 },
    { month: 'Apr', sales: 22000, orders: 278 },
    { month: 'May', sales: 25000, orders: 312 },
    { month: 'Jun', sales: 28000, orders: 345 }
  ];

  const topProducts = [
    { name: 'SpiderFarmer SF-4000 LED Grow Light', sales: 234, revenue: 128726 },
    { name: 'Premium THCA Flower - Wedding Cake', sales: 189, revenue: 17011 },
    { name: 'Complete Grow Tent Kit 4x4 with LED', sales: 156, revenue: 140394 },
    { name: 'CBD Full Spectrum Tincture 1000mg', sales: 134, revenue: 10719 },
    { name: 'Hydroponic Growing System - 6 Plant', sales: 123, revenue: 24599 },
    { name: 'CBG Isolate Powder - 99% Pure', sales: 98, revenue: 15679 },
    { name: 'Delta-8 THC Gummies - Mixed Berry', sales: 87, revenue: 4349 }
  ];

  const recentActivity = [
    { action: 'New order from John Doe', time: '2 minutes ago', type: 'order' },
    { action: 'Low stock alert: Smart Watch', time: '15 minutes ago', type: 'alert' },
    { action: 'Payment received: $149.99', time: '23 minutes ago', type: 'payment' },
    { action: 'New customer registration', time: '1 hour ago', type: 'user' },
    { action: 'Product review posted', time: '2 hours ago', type: 'review' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Analytics Dashboard</h2>
        <div className="flex items-center space-x-4">
          <p className="text-stone-600">AI-powered business intelligence and predictive analytics</p>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
            AI Accuracy: {aiAnalytics.predictiveAccuracy}%
          </span>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-6">Business Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <button 
                key={index} 
                onClick={() => onNavigate?.(metric.navigateTo)}
                className="bg-stone-50/50 rounded-lg p-4 hover:bg-stone-100/70 hover:shadow-md transition-all duration-200 text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-${metric.color}-100 group-hover:bg-${metric.color}-200 transition-colors duration-200`}>
                    <Icon className={`h-5 w-5 text-${metric.color}-600 group-hover:text-${metric.color}-700 transition-colors duration-200`} />
                  </div>
                  <div className={`flex items-center space-x-1 ${metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    <TrendIcon className="h-3 w-3" />
                    <span className="text-xs font-medium">{metric.change}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200 mb-1">{metric.value}</h4>
                <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200 text-sm">{metric.title}</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs text-stone-500">Click to view details →</span>
                </div>
              </button>
            );
          })}
        </div>
        
        {/* Additional Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {additionalMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
            return (
              <button 
                key={index} 
                onClick={() => onNavigate?.(metric.navigateTo)}
                className="bg-stone-50/50 rounded-lg p-4 hover:bg-stone-100/70 hover:shadow-md transition-all duration-200 text-left group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg bg-${metric.color}-100 group-hover:bg-${metric.color}-200 transition-colors duration-200`}>
                    <Icon className={`h-5 w-5 text-${metric.color}-600 group-hover:text-${metric.color}-700 transition-colors duration-200`} />
                  </div>
                  <div className={`flex items-center space-x-1 ${metric.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    <TrendIcon className="h-3 w-3" />
                    <span className="text-xs font-medium">{metric.change}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-stone-800 group-hover:text-stone-900 transition-colors duration-200 mb-1">{metric.value}</h4>
                <p className="text-stone-600 group-hover:text-stone-700 transition-colors duration-200 text-sm">{metric.title}</p>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-xs text-stone-500">Click to view details →</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Analytics Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-6 w-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Business Intelligence</h3>
          <span className="text-sm text-purple-600">Analyzing {aiAnalytics.learningDataPoints.toLocaleString()} data points</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Predictive Accuracy</h4>
            <p className="text-2xl font-bold text-purple-600">{aiAnalytics.predictiveAccuracy}%</p>
            <p className="text-sm text-stone-600">Sales forecasting accuracy</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Trends Identified</h4>
            <p className="text-2xl font-bold text-blue-600">{aiAnalytics.trendsIdentified}</p>
            <p className="text-sm text-stone-600">Market trends discovered</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Optimizations</h4>
            <p className="text-2xl font-bold text-emerald-600">{aiAnalytics.optimizationsSuggested}</p>
            <p className="text-sm text-stone-600">AI-suggested improvements</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Performance Boost</h4>
            <p className="text-2xl font-bold text-orange-600">+{aiAnalytics.performanceImprovement}%</p>
            <p className="text-sm text-stone-600">AI-driven improvements</p>
          </div>
        </div>
      </div>

      {/* Sales Chart */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-6">Sales Overview</h3>
        <div className="h-64 flex items-end justify-between space-x-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full bg-stone-100 rounded-t-lg relative h-48 flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg"
                  style={{ height: `${(data.sales / 30000) * 100}%` }}
                />
              </div>
              <div className="text-center mt-2">
                <p className="text-sm font-medium text-stone-800">{data.month}</p>
                <p className="text-xs text-stone-500">${data.sales.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Top Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-stone-50/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800">{product.name}</p>
                    <p className="text-sm text-stone-500">{product.sales} sales</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-stone-800">${product.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h3 className="text-xl font-semibold text-stone-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'order' ? 'bg-emerald-500' :
                  activity.type === 'alert' ? 'bg-red-500' :
                  activity.type === 'payment' ? 'bg-blue-500' :
                  activity.type === 'user' ? 'bg-purple-500' :
                  'bg-orange-500'
                }`} />
                <div className="flex-1">
                  <p className="text-stone-800">{activity.action}</p>
                  <p className="text-sm text-stone-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;