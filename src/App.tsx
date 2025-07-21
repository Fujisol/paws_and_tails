import React, { useState } from 'react';
import { ShoppingCart, Users, BarChart3, Search, Package, TrendingUp, Home, Settings, Moon, Sun, MessageCircle } from 'lucide-react';
import Storefront from './components/Storefront';
import AdminStorefront from './components/AdminStorefront';
import AdminDashboard from './components/AdminDashboard';
import InventoryManager from './components/InventoryManager';
import OrderManager from './components/OrderManager';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import SellerSearch from './components/SellerSearch';
import SuppliersManager from './components/SuppliersManager';
import BookkeepingPanel from './components/BookkeepingPanel';
import SocialMediaManager from './components/SocialMediaManager';
import CustomerServiceAI from './components/CustomerServiceAI';

function App() {
  const [activeTab, setActiveTab] = useState('storefront');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const renderContent = () => {
    if (!isAdmin) {
      return <Storefront />;
    }

    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard onNavigate={setActiveTab} />;
      case 'storefront':
        return <AdminStorefront />;
      case 'inventory':
        return <InventoryManager />;
      case 'orders':
        return <OrderManager />;
      case 'analytics':
        return <AnalyticsDashboard onNavigate={setActiveTab} />;
      case 'seller-search':
        return <SellerSearch />;
      case 'suppliers':
        return <SuppliersManager />;
      case 'bookkeeping':
        return <BookkeepingPanel />;
      case 'social-media':
        return <SocialMediaManager />;
      case 'customer-service':
        return <CustomerServiceAI />;
      default:
        return <AdminStorefront />;
    }
  };

  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'storefront', label: 'Storefront', icon: Home },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'seller-search', label: 'AI Seller Search', icon: Search },
    { id: 'suppliers', label: 'Suppliers', icon: Users },
    { id: 'bookkeeping', label: 'Bookkeeping', icon: Settings },
    { id: 'social-media', label: 'Social Media AI', icon: TrendingUp },
    { id: 'customer-service', label: 'Customer Service AI', icon: MessageCircle },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 relative ${
      isDarkMode 
        ? 'bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900' 
        : 'bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-100'
    }`}>
      {/* Paw Print Background for Light Mode */}
      {!isDarkMode && <div className="paw-background" />}
      
      {/* Header */}
      <header className={`backdrop-blur-sm border-b sticky top-0 z-50 transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-grey-800/90 border-grey-600' 
          : 'bg-amber-100/90 border-amber-300'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🐕</span>
                <h1 className={`text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                isDarkMode 
                  ? 'from-accent-400 to-accent-300' 
                  : 'from-primary-600 to-secondary-600'
              }`}>
                  Paws & Tails
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-grey-800 text-accent-400 hover:bg-grey-700' 
                    : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsAdmin(!isAdmin)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                  isAdmin 
                    ? (isDarkMode 
                        ? 'bg-grey-800 text-accent-300 hover:bg-grey-700' 
                        : 'bg-primary-100 text-primary-700 hover:bg-primary-200')
                    : (isDarkMode 
                        ? 'bg-grey-700 text-grey-300 hover:bg-grey-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                }`}
              >
                {isAdmin ? 'Admin Mode' : 'Customer View'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Admin Sidebar */}
        {isAdmin && (
          <aside className={`w-64 backdrop-blur-sm border-r h-[calc(100vh-4rem)] transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-grey-800/90 border-grey-600' 
              : 'bg-white/80 border-primary-200'
          }`}>
            <nav className="p-4 space-y-2">
              {adminNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                      activeTab === item.id
                        ? (isDarkMode 
                            ? 'bg-grey-800 text-accent-300 shadow-sm' 
                            : 'bg-primary-100 text-primary-700 shadow-sm')
                        : (isDarkMode 
                            ? 'text-grey-300 hover:bg-grey-800/50' 
                            : 'text-gray-600 hover:bg-gray-100')
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        )}

        {/* Main Content */}
        <main className={`flex-1 ${isAdmin ? 'ml-0' : ''} ${
          isDarkMode ? 'text-grey-100' : 'text-gray-900'
        }`}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;