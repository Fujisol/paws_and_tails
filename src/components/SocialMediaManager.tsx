import React, { useState } from 'react';
import { 
  Twitter, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Bot, 
  Calendar, 
  TrendingUp, 
  Eye, 
  MousePointer, 
  Heart, 
  Share2, 
  Users, 
  BarChart3,
  Settings,
  Pause,
  RefreshCw,
  CheckCircle,
  Clock,
  AlertCircle,
  Zap,
  Target,
  Camera,
  AlertTriangle,
  X,
  DollarSign,
  Youtube,
  Brain,
  Globe,
  MessageSquare,
  Video,
  Play
} from 'lucide-react';

interface SocialPost {
  id: string;
  platform: 'twitter' | 'facebook' | 'instagram' | 'tiktok' | 'snapchat';
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  scheduledTime: string;
  status: 'scheduled' | 'posted' | 'failed';
  engagement: {
    views: number;
    likes: number;
    shares: number;
    comments: number;
    clicks: number;
  };
  aiGenerated: boolean;
  hashtags: string[];
  discountCode?: string;
  discountPercentage?: number;
  discountExpiry?: string;
  supplierTriggered?: boolean;
}

interface PlatformStats {
  platform: string;
  followers: number;
  totalPosts: number;
  avgEngagement: number;
  totalViews: number;
  totalClicks: number;
  growthRate: number;
  icon: React.ComponentType<any>;
  color: string;
}

interface DiscountCode {
  id: string;
  code: string;
  discount: number;
  type: 'percentage' | 'fixed';
  expiryDate: string;
  usageLimit: number;
  usedCount: number;
  active: boolean;
  supplier: string;
  product: string;
  aiGenerated: boolean;
  socialPostId: string;
  createdAt: string;
}

interface SupplierDiscount {
  id: string;
  supplier: string;
  product: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  validUntil: string;
  detectedAt: string;
  aiRecommendation: 'use' | 'compare' | 'avoid';
  competitorComparison: {
    betterOption: boolean;
    bestSupplier: string;
    bestPrice: number;
    savings: number;
  };
}

interface AICoordinationMetrics {
  discountDetectionAccuracy: number;
  supplierComparisonSpeed: number;
  socialPostGenerationTime: number;
  discountCodeConversionRate: number;
  crossAILearningRate: number;
  optimizationSavings: number;
  automatedCampaigns: number;
  supplierSwitchingAccuracy: number;
}

const SocialMediaManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiAutomationEnabled, setAiAutomationEnabled] = useState(true);
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [aiCoordinationPaused, setAiCoordinationPaused] = useState(false);
  const [discountManagementPaused, setDiscountManagementPaused] = useState(false);
  const [supplierDiscountsPaused, setSupplierDiscountsPaused] = useState(false);
  const [showAIAlerts, setShowAIAlerts] = useState(false);
  const [supplierAIIntegration, setSupplierAIIntegration] = useState({
    priceDropAlerts: 23,
    trendingProducts: 8,
    competitorCampaigns: 15,
    supplierSyncAccuracy: 96.4,
    autoContentGenerated: 156,
    discountCodesGenerated: 45,
    supplierComparisons: 89,
    automaticSwitching: 12
  });

  const [aiCoordination, setAiCoordination] = useState<AICoordinationMetrics>({
    discountDetectionAccuracy: 98.7,
    supplierComparisonSpeed: 0.3,
    socialPostGenerationTime: 1.2,
    discountCodeConversionRate: 23.4,
    crossAILearningRate: 94.8,
    optimizationSavings: 15678.90,
    automatedCampaigns: 67,
    supplierSwitchingAccuracy: 97.2
  });

  const socialMetrics = {
    followers: 97234,
    followerGrowth: 12.5,
    totalViews: 1749012,
    viewGrowth: 18.7,
    engagementRate: 6.8,
    engagementGrowth: 15.3,
    conversionRate: 3.2,
    conversionGrowth: 8.9,
    postsScheduled: 156
  };

  const aiUnresolvedIssues = [
    {
      id: 'AI-001',
      type: 'content_generation',
      platform: 'Instagram',
      title: 'Content Generation Confidence Low',
      description: 'AI generated content for THCA flower post has low confidence score. Manual review recommended.',
      priority: 'high',
      timestamp: '2024-01-24 14:30',
      aiConfidence: 45,
      postId: 'POST-156'
    },
    {
      id: 'AI-002',
      type: 'supplier_integration',
      platform: 'All Platforms',
      title: 'Supplier Price Data Inconsistency',
      description: 'Detected conflicting price information from multiple suppliers for LED grow lights.',
      priority: 'urgent',
      timestamp: '2024-01-24 13:45',
      aiConfidence: 23,
      postId: null
    },
    {
      id: 'AI-003',
      type: 'discount_optimization',
      platform: 'TikTok',
      title: 'Discount Code Performance Below Threshold',
      description: 'Generated discount code HYDRO25 showing lower than expected conversion rates.',
      priority: 'medium',
      timestamp: '2024-01-24 12:15',
      aiConfidence: 67,
      postId: 'POST-134'
    }
  ];

  const discountCodes: DiscountCode[] = [
    {
      id: 'DISC-001',
      code: 'SPIDER20',
      discount: 20,
      type: 'percentage',
      expiryDate: '2024-01-25 23:59',
      usageLimit: 100,
      usedCount: 23,
      active: true,
      supplier: 'SpiderFarmer Official',
      product: 'SpiderFarmer SF-4000 LED Grow Light',
      aiGenerated: true,
      socialPostId: 'POST-001',
      createdAt: '2024-01-24 10:00'
    },
    {
      id: 'DISC-002',
      code: 'THCA15',
      discount: 15,
      type: 'percentage',
      expiryDate: '2024-01-26 18:00',
      usageLimit: 50,
      usedCount: 8,
      active: true,
      supplier: 'Green Valley Farms',
      product: 'Premium THCA Flower - Wedding Cake',
      aiGenerated: true,
      socialPostId: 'POST-002',
      createdAt: '2024-01-24 11:30'
    },
    {
      id: 'DISC-003',
      code: 'HYDRO25',
      discount: 25,
      type: 'percentage',
      expiryDate: '2024-01-24 20:00',
      usageLimit: 30,
      usedCount: 30,
      active: false,
      supplier: 'HydroGrow Systems',
      product: 'Hydroponic Growing System - 6 Plant',
      aiGenerated: true,
      socialPostId: 'POST-003',
      createdAt: '2024-01-23 14:00'
    }
  ];

  const supplierDiscounts: SupplierDiscount[] = [
    {
      id: 'SUP-DISC-001',
      supplier: 'SpiderFarmer Official',
      product: 'SpiderFarmer SF-4000 LED Grow Light',
      originalPrice: 649.99,
      discountedPrice: 519.99,
      discountPercentage: 20,
      validUntil: '2024-01-25 23:59',
      detectedAt: '2024-01-24 09:45',
      aiRecommendation: 'use',
      competitorComparison: {
        betterOption: false,
        bestSupplier: 'SpiderFarmer Official',
        bestPrice: 519.99,
        savings: 130.00
      }
    },
    {
      id: 'SUP-DISC-002',
      supplier: 'Mars Hydro',
      product: 'Mars Hydro TS 3000 LED Grow Light',
      originalPrice: 499.99,
      discountedPrice: 374.99,
      discountPercentage: 25,
      validUntil: '2024-01-26 12:00',
      detectedAt: '2024-01-24 10:15',
      aiRecommendation: 'use',
      competitorComparison: {
        betterOption: true,
        bestSupplier: 'Mars Hydro',
        bestPrice: 374.99,
        savings: 175.00
      }
    },
    {
      id: 'SUP-DISC-003',
      supplier: 'Green Valley Farms',
      product: 'Premium THCA Flower - Wedding Cake',
      originalPrice: 89.99,
      discountedPrice: 76.49,
      discountPercentage: 15,
      validUntil: '2024-01-26 18:00',
      detectedAt: '2024-01-24 11:20',
      aiRecommendation: 'compare',
      competitorComparison: {
        betterOption: false,
        bestSupplier: 'Premium Cannabis Co.',
        bestPrice: 72.99,
        savings: 17.00
      }
    }
  ];

  const recentPosts: SocialPost[] = [
    {
      id: 'POST-001',
      platform: 'instagram',
      content: '🔥 FLASH SALE ALERT! 🔥 Get 20% OFF SpiderFarmer SF-4000 LED grow lights! Use code SPIDER20 - Limited time only! ⏰ Expires Jan 25th at midnight! 💚',
      mediaUrl: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      mediaType: 'image',
      scheduledTime: '2024-01-24 10:00',
      status: 'posted',
      engagement: {
        views: 15678,
        likes: 1234,
        shares: 345,
        comments: 189,
        clicks: 567
      },
      aiGenerated: true,
      hashtags: ['#FlashSale', '#SpiderFarmer', '#GrowLights', '#Discount', '#LimitedTime'],
      discountCode: 'SPIDER20',
      discountPercentage: 20,
      discountExpiry: '2024-01-25 23:59',
      supplierTriggered: true
    },
    {
      id: 'POST-002',
      platform: 'twitter',
      content: '🌿 THCA SPECIAL! Premium Wedding Cake strain now 15% OFF! Code: THCA15 ⏰ Hurry - expires tomorrow 6PM! Lab-tested quality 🧪✨',
      scheduledTime: '2024-01-24 11:30',
      status: 'posted',
      engagement: {
        views: 9876,
        likes: 678,
        shares: 234,
        comments: 123,
        clicks: 345
      },
      aiGenerated: true,
      hashtags: ['#THCA', '#Discount', '#WeddingCake', '#Premium', '#LimitedOffer'],
      discountCode: 'THCA15',
      discountPercentage: 15,
      discountExpiry: '2024-01-26 18:00',
      supplierTriggered: true
    }
  ];

  const getDiscountCodeStatus = (code: DiscountCode) => {
    const now = new Date();
    const expiry = new Date(code.expiryDate);
    const isExpired = now > expiry;
    const isUsedUp = code.usedCount >= code.usageLimit;
    
    if (isExpired) return { status: 'expired', color: 'bg-red-100 text-red-700' };
    if (isUsedUp) return { status: 'used up', color: 'bg-orange-100 text-orange-700' };
    if (code.active) return { status: 'active', color: 'bg-emerald-100 text-emerald-700' };
    return { status: 'inactive', color: 'bg-stone-100 text-stone-700' };
  };

  const platformStats: PlatformStats[] = [
    {
      platform: 'Twitter/X',
      followers: 12456,
      totalPosts: 234,
      avgEngagement: 4.2,
      totalViews: 145678,
      totalClicks: 8934,
      growthRate: 12.5,
      icon: Twitter,
      color: 'blue'
    },
    {
      platform: 'Facebook',
      followers: 8934,
      totalPosts: 189,
      avgEngagement: 6.8,
      totalViews: 234567,
      totalClicks: 12456,
      growthRate: 8.3,
      icon: Facebook,
      color: 'blue'
    },
    {
      platform: 'Instagram',
      followers: 23456,
      totalPosts: 345,
      avgEngagement: 8.9,
      totalViews: 456789,
      totalClicks: 23456,
      growthRate: 18.7,
      icon: Instagram,
      color: 'pink'
    },
    {
      platform: 'TikTok',
      followers: 45678,
      totalPosts: 156,
      avgEngagement: 12.4,
      totalViews: 789012,
      totalClicks: 34567,
      growthRate: 25.6,
      icon: Video,
      color: 'purple'
    },
    {
      platform: 'Snapchat',
      followers: 6789,
      totalPosts: 98,
      avgEngagement: 5.6,
      totalViews: 123456,
      totalClicks: 5678,
      growthRate: 6.4,
      icon: Camera,
      color: 'yellow'
    }
  ];

  const aiContentTemplates = [
    "🌱 New {product} just arrived! Perfect for {use_case}. Get yours today! 💚 #{hashtag1} #{hashtag2}",
    "Premium {category} now available! 🔥 {product_name} with {feature}. Free shipping nationwide! 🚚",
    "Watch how easy it is to {action}! 🌿 Perfect for {audience} 👨‍🌾 #{tutorial} #{category}",
    "{benefit} products for better {outcome} 😴 All natural, lab-tested, and federally legal! Shop now 🛒",
    "Behind the scenes: How our premium {category} are {process} 🌱➡️🏭 #{quality} #{process}"
  ];

  const totalEngagement = platformStats.reduce((sum, platform) => sum + platform.avgEngagement, 0);
  const totalViews = platformStats.reduce((sum, platform) => sum + platform.totalViews, 0);
  const totalClicks = platformStats.reduce((sum, platform) => sum + platform.totalClicks, 0);
  const totalFollowers = platformStats.reduce((sum, platform) => sum + platform.followers, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'posted': return 'bg-emerald-100 text-emerald-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return Twitter;
      case 'facebook': return Facebook;
      case 'instagram': return Instagram;
      case 'tiktok': return Video;
      case 'snapchat': return Camera;
      default: return MessageCircle;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'twitter': return 'text-blue-500';
      case 'facebook': return 'text-blue-600';
      case 'instagram': return 'text-pink-500';
      case 'tiktok': return 'text-purple-500';
      case 'snapchat': return 'text-yellow-500';
      default: return 'text-stone-500';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* AI Automation Status */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8 text-emerald-600" />
            <div>
              <h3 className="text-xl font-semibold text-stone-800">AI Coordination: Social + Supplier + Finance Intelligence</h3>
              <p className="text-stone-600">Automated discount detection, supplier switching, and social campaigns with time-limited codes</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              aiAutomationEnabled ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
            }`}>
              {aiAutomationEnabled ? 'Active' : 'Paused'}
            </span>
            <button
              onClick={() => setAiAutomationEnabled(!aiAutomationEnabled)}
              className={`p-2 rounded-lg transition-colors ${
                aiAutomationEnabled 
                  ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                  : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
              }`}
            >
              {aiAutomationEnabled ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-stone-800">Daily Posts</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">15</p>
            <p className="text-sm text-stone-600">Across all platforms</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-stone-800">Discount Codes</span>
            </div>
            <p className="text-2xl font-bold text-purple-600">{supplierAIIntegration.discountCodesGenerated}</p>
            <p className="text-sm text-stone-600">Auto-generated codes</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <BarChart3 className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-stone-800">Supplier Comparisons</span>
            </div>
            <p className="text-2xl font-bold text-emerald-600">{supplierAIIntegration.supplierComparisons}</p>
            <p className="text-sm text-stone-600">Price comparisons</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <RefreshCw className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-stone-800">Auto Switching</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">{supplierAIIntegration.automaticSwitching}</p>
            <p className="text-sm text-stone-600">Supplier switches</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-stone-800">Followers</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">{socialMetrics.followers.toLocaleString()}</p>
            <p className="text-sm text-green-600">+{socialMetrics.followerGrowth}% this month</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Eye className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-stone-800">Total Views</span>
            </div>
            <p className="text-2xl font-bold text-purple-600">{socialMetrics.totalViews.toLocaleString()}</p>
            <p className="text-sm text-green-600">+{socialMetrics.viewGrowth}% this month</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-pink-600" />
              <span className="font-medium text-stone-800">Engagement</span>
            </div>
            <p className="text-2xl font-bold text-pink-600">{socialMetrics.engagementRate}%</p>
            <p className="text-sm text-green-600">+{socialMetrics.engagementGrowth}% this month</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-stone-800">Conversion</span>
            </div>
            <p className="text-2xl font-bold text-emerald-600">{socialMetrics.conversionRate}%</p>
            <p className="text-sm text-green-600">+{socialMetrics.conversionGrowth}% this month</p>
          </div>
        </div>
      </div>

      {/* Connected Social Media Accounts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-6 flex items-center">
          <Globe className="h-5 w-5 text-blue-600 mr-2" />
          Connected Social Media Accounts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Instagram */}
          <div className="p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg border border-pink-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">Instagram</h4>
                  <p className="text-sm text-stone-500">@crazy_mofos_pets</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Followers</p>
                <p className="font-semibold text-stone-800">45.2K</p>
              </div>
              <div>
                <p className="text-stone-500">Engagement</p>
                <p className="font-semibold text-stone-800">4.8%</p>
              </div>
            </div>
          </div>

          {/* TikTok */}
          <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TT</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">TikTok</h4>
                  <p className="text-sm text-stone-500">@crazymofospets</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Followers</p>
                <p className="font-semibold text-stone-800">128.7K</p>
              </div>
              <div>
                <p className="text-stone-500">Views</p>
                <p className="font-semibold text-stone-800">2.1M</p>
              </div>
            </div>
          </div>

          {/* Facebook */}
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">Facebook</h4>
                  <p className="text-sm text-stone-500">Crazy Mofos Pet Store</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Page Likes</p>
                <p className="font-semibold text-stone-800">23.4K</p>
              </div>
              <div>
                <p className="text-stone-500">Reach</p>
                <p className="font-semibold text-stone-800">156K</p>
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <Youtube className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">YouTube</h4>
                  <p className="text-sm text-stone-500">Crazy Mofos Pets</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Needs Setup</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Subscribers</p>
                <p className="font-semibold text-stone-800">8.9K</p>
              </div>
              <div>
                <p className="text-stone-500">Watch Time</p>
                <p className="font-semibold text-stone-800">45.2K hrs</p>
              </div>
            </div>
          </div>

          {/* Twitter/X */}
          <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <Twitter className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">X (Twitter)</h4>
                  <p className="text-sm text-stone-500">@CrazyMofosPets</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Connected</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Followers</p>
                <p className="font-semibold text-stone-800">12.3K</p>
              </div>
              <div>
                <p className="text-stone-500">Impressions</p>
                <p className="font-semibold text-stone-800">234K</p>
              </div>
            </div>
          </div>

          {/* Pinterest */}
          <div className="p-4 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800">Pinterest</h4>
                  <p className="text-sm text-stone-500">@CrazyMofosPets</p>
                </div>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Needs Setup</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-stone-500">Monthly Views</p>
                <p className="font-semibold text-stone-800">67.8K</p>
              </div>
              <div>
                <p className="text-stone-500">Saves</p>
                <p className="font-semibold text-stone-800">3.4K</p>
              </div>
            </div>
          </div>
        </div>
      </div>
          

      {/* Supplier Discount Intelligence */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="h-6 w-6 text-orange-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Supplier Discount Intelligence</h3>
          <span className="text-sm text-orange-600">{aiCoordination.discountDetectionAccuracy}% detection accuracy • Auto-switching enabled</span>
        </div>
        <div className="space-y-4">
          {supplierDiscounts.map((discount) => (
            <div key={discount.id} className="p-4 bg-white/50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-stone-800">{discount.product}</h4>
                  <p className="text-sm text-stone-600">Supplier: {discount.supplier}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg line-through text-stone-500">${discount.originalPrice}</span>
                    <span className="text-2xl font-bold text-emerald-600">${discount.discountedPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{discount.discountPercentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-stone-800">{totalFollowers.toLocaleString()}</span>
          </div>
          <p className="text-stone-600">Total Followers</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Eye className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-stone-800">{totalViews.toLocaleString()}</span>
          </div>
          <p className="text-stone-600">Total Views</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <MousePointer className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-stone-800">{totalClicks.toLocaleString()}</span>
          </div>
          <p className="text-stone-600">Total Clicks</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Heart className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-stone-800">{(totalEngagement / platformStats.length).toFixed(1)}%</span>
          </div>
          <p className="text-stone-600">Avg Engagement</p>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4">Recent AI-Generated Discount Posts</h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 5).map((post) => {
            const PlatformIcon = getPlatformIcon(post.platform);
            return (
              <div key={post.id} className="p-4 bg-stone-50/50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <PlatformIcon className={`h-5 w-5 ${getPlatformColor(post.platform)}`} />
                    <div>
                      <p className="font-medium text-stone-800 capitalize">{post.platform}</p>
                      <p className="text-sm text-stone-500">{post.scheduledTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.aiGenerated && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                        AI Generated
                      </span>
                    )}
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(post.status)}`}>
                      {post.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-stone-700 mb-3">{post.content}</p>
                
                {/* Discount Code Information */}
                {post.discountCode && (
                  <div className="mb-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono font-bold text-purple-800">{post.discountCode}</span>
                        <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs">{post.discountPercentage}% OFF</span>
                      </div>
                      <div className="text-xs text-purple-600">
                        Expires: {post.discountExpiry}
                      </div>
                    </div>
                  </div>
                )}
                
                {post.status === 'posted' && (
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div className="text-center">
                      <p className="font-medium text-stone-800">{post.engagement.views.toLocaleString()}</p>
                      <p className="text-stone-500">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-stone-800">{post.engagement.likes.toLocaleString()}</p>
                      <p className="text-stone-500">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-stone-800">{post.engagement.shares.toLocaleString()}</p>
                      <p className="text-stone-500">Shares</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-stone-800">{post.engagement.comments.toLocaleString()}</p>
                      <p className="text-stone-500">Comments</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-stone-800">{post.engagement.clicks.toLocaleString()}</p>
                      <p className="text-stone-500">Clicks</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">Social Media Analytics</h3>
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
        >
          <option value="all">All Platforms</option>
          <option value="twitter">Twitter/X</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="tiktok">TikTok</option>
          <option value="snapchat">Snapchat</option>
        </select>
      </div>

      {/* Engagement Chart Placeholder */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Engagement Over Time</h4>
        <div className="h-64 bg-stone-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-500">Engagement analytics chart would be displayed here</p>
          </div>
        </div>
      </div>

      {/* Platform Performance */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Platform Performance Comparison</h4>
        <div className="space-y-4">
          {platformStats.map((platform) => {
            const Icon = platform.icon;
            const engagementWidth = (platform.avgEngagement / 15) * 100; // Max 15% for scale
            return (
              <div key={platform.platform} className="flex items-center space-x-4">
                <div className="flex items-center space-x-3 w-32">
                  <Icon className={`h-5 w-5 text-${platform.color}-500`} />
                  <span className="font-medium text-stone-800">{platform.platform}</span>
                </div>
                <div className="flex-1">
                  <div className="bg-stone-200 rounded-full h-2">
                    <div 
                      className={`bg-${platform.color}-500 h-2 rounded-full`}
                      style={{ width: `${engagementWidth}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-stone-800 w-12">
                  {platform.avgEngagement}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Top Performing Posts</h4>
        <div className="space-y-4">
          {recentPosts
            .filter(post => post.status === 'posted')
            .sort((a, b) => b.engagement.views - a.engagement.views)
            .slice(0, 3)
            .map((post, index) => {
              const PlatformIcon = getPlatformIcon(post.platform);
              return (
                <div key={post.id} className="flex items-center space-x-4 p-4 bg-stone-50/50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                    <span className="text-emerald-600 font-bold text-sm">#{index + 1}</span>
                  </div>
                  <PlatformIcon className={`h-5 w-5 ${getPlatformColor(post.platform)}`} />
                  <div className="flex-1">
                    <p className="font-medium text-stone-800 line-clamp-1">{post.content}</p>
                    <p className="text-sm text-stone-500">{post.scheduledTime}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-stone-800">{post.engagement.views.toLocaleString()}</p>
                    <p className="text-sm text-stone-500">views</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );

  const renderAICoordination = () => (
    <div className="space-y-6">
      {/* AI Coordination Control */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Brain className="h-6 w-6 text-emerald-600" />
            <h3 className="text-lg font-semibold text-stone-800">AI Coordination Control</h3>
          </div>
          <button
            onClick={() => setAiCoordinationPaused(!aiCoordinationPaused)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              aiCoordinationPaused 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            {aiCoordinationPaused ? (
              <>
                <Play className="h-4 w-4" />
                <span>Resume AI Coordination</span>
              </>
            ) : (
              <>
                <Pause className="h-4 w-4" />
                <span>Pause AI Coordination</span>
              </>
            )}
          </button>
        </div>
        
        <div className={`p-4 rounded-lg border ${
          aiCoordinationPaused 
            ? 'bg-red-50 border-red-200' 
            : 'bg-emerald-50 border-emerald-200'
        }`}>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              aiCoordinationPaused ? 'bg-red-500' : 'bg-emerald-500 animate-pulse'
            }`}></div>
            <span className={`font-medium ${
              aiCoordinationPaused ? 'text-red-700' : 'text-emerald-700'
            }`}>
              {aiCoordinationPaused ? 'AI Coordination PAUSED' : 'AI Coordination ACTIVE'}
            </span>
          </div>
          <p className={`text-sm mt-1 ${
            aiCoordinationPaused ? 'text-red-600' : 'text-emerald-600'
          }`}>
            {aiCoordinationPaused 
              ? 'Cross-AI learning and coordination is temporarily disabled'
              : 'All AI systems are coordinating and learning together'
            }
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-stone-800">AI Coordination Dashboard</h3>

      {/* AI Learning Progress */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="h-8 w-8 text-emerald-600" />
          <div>
            <h3 className="text-xl font-semibold text-stone-800">Cross-AI Learning & Coordination</h3>
            <p className="text-sm text-emerald-600">Real-time coordination between Social AI, Supplier AI, and Finance AI</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-stone-800">Learning Rate</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">{aiCoordination.crossAILearningRate}%</p>
            <p className="text-sm text-stone-600">Cross-system learning</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-stone-800">Response Time</span>
            </div>
            <p className="text-2xl font-bold text-purple-600">{aiCoordination.socialPostGenerationTime}s</p>
            <p className="text-sm text-stone-600">Post generation speed</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <RefreshCw className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-stone-800">Supplier Switching</span>
            </div>
            <p className="text-2xl font-bold text-emerald-600">{aiCoordination.supplierSwitchingAccuracy}%</p>
            <p className="text-sm text-stone-600">Switching accuracy</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <DollarSign className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-stone-800">Optimization</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">${aiCoordination.optimizationSavings.toLocaleString()}</p>
            <p className="text-sm text-stone-600">Total savings</p>
          </div>
        </div>
      </div>

      {/* Real-time Coordination Flow */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Real-time AI Coordination Flow</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <h5 className="font-medium text-blue-800">1. Supplier AI Detection</h5>
            </div>
            <ul className="space-y-2 text-sm text-blue-700">
              <li>• Monitors {supplierAIIntegration.supplierComparisons} suppliers continuously</li>
              <li>• Detects price drops in {aiCoordination.supplierComparisonSpeed}s</li>
              <li>• Compares competitor prices automatically</li>
              <li>• Triggers alerts for better deals</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <h5 className="font-medium text-purple-800">2. Social AI Response</h5>
            </div>
            <ul className="space-y-2 text-sm text-purple-700">
              <li>• Generates discount posts in {aiCoordination.socialPostGenerationTime}s</li>
              <li>• Creates time-limited discount codes</li>
              <li>• Optimizes content for each platform</li>
              <li>• Schedules posts for maximum engagement</li>
            </ul>
          </div>
          
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
              <h5 className="font-medium text-emerald-800">3. Finance AI Optimization</h5>
            </div>
            <ul className="space-y-2 text-sm text-emerald-700">
              <li>• Calculates profit margins instantly</li>
              <li>• Optimizes discount percentages</li>
              <li>• Tracks ROI on campaigns</li>
              <li>• Saves ${aiCoordination.optimizationSavings.toLocaleString()} through smart switching</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AI Learning Insights */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">AI Learning Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h5 className="font-medium text-emerald-800 mb-2">Learning Improvements This Month</h5>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li>• Pet product knowledge accuracy: +34.2%</li>
                <li>• Supplier comparison speed: +28.7%</li>
                <li>• Social engagement optimization: +31.5%</li>
                <li>• Discount timing precision: +25.3%</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">Pattern Recognition</h5>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• Best posting times: 9AM, 2PM, 7PM</li>
                <li>• Optimal discount range: 15-25%</li>
                <li>• Peak engagement: Weekend mornings</li>
                <li>• Conversion rate peaks: Friday evenings</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">Supplier Intelligence</h5>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Price Detection:</span>
                  <span className="font-medium text-purple-800">{aiCoordination.discountDetectionAccuracy}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Switching Success:</span>
                  <span className="font-medium text-purple-800">{aiCoordination.supplierSwitchingAccuracy}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Cost Optimization:</span>
                  <span className="font-medium text-purple-800">+{aiCoordination.crossAILearningRate}%</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h5 className="font-medium text-orange-800 mb-2">Campaign Performance</h5>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• {aiCoordination.automatedCampaigns} automated campaigns launched</li>
                <li>• {aiCoordination.discountCodeConversionRate}% average conversion rate</li>
                <li>• {supplierAIIntegration.discountCodesGenerated} discount codes generated</li>
                <li>• {supplierAIIntegration.automaticSwitching} supplier switches completed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDiscountManagement = () => (
    <div className="space-y-6">
      {/* Discount Management Control */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Zap className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-stone-800">Discount Management Control</h3>
          </div>
          <button
            onClick={() => setDiscountManagementPaused(!discountManagementPaused)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              discountManagementPaused 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            {discountManagementPaused ? (
              <>
                <Play className="h-4 w-4" />
                <span>Resume Discount Management</span>
              </>
            ) : (
              <>
                <Pause className="h-4 w-4" />
                <span>Pause Discount Management</span>
              </>
            )}
          </button>
        </div>
        
        <div className={`p-4 rounded-lg border ${
          discountManagementPaused 
            ? 'bg-red-50 border-red-200' 
            : 'bg-purple-50 border-purple-200'
        }`}>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              discountManagementPaused ? 'bg-red-500' : 'bg-purple-500 animate-pulse'
            }`}></div>
            <span className={`font-medium ${
              discountManagementPaused ? 'text-red-700' : 'text-purple-700'
            }`}>
              {discountManagementPaused ? 'Discount Management PAUSED' : 'Discount Management ACTIVE'}
            </span>
          </div>
          <p className={`text-sm mt-1 ${
            discountManagementPaused ? 'text-red-600' : 'text-purple-600'
          }`}>
            {discountManagementPaused 
              ? 'Automatic discount code generation and management is disabled'
              : 'AI is automatically generating and managing discount codes'
            }
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-stone-800">AI Discount Code Management</h3>

      {/* Active Discount Codes */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Zap className="h-6 w-6 text-purple-600" />
            <h3 className="text-lg font-semibold text-stone-800">Active Discount Codes</h3>
          </div>
          <div className="text-sm text-purple-600">
            {aiCoordination.discountCodeConversionRate}% average conversion rate
          </div>
        </div>
        
        <div className="space-y-4">
          {discountCodes.map((code) => {
            const status = getDiscountCodeStatus(code);
            return (
              <div key={code.id} className="p-4 bg-white/50 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="font-mono text-lg font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded">
                      {code.code}
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">
                      {code.discount}% OFF
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${status.color}`}>
                      {status.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-stone-600">Used: {code.usedCount}/{code.usageLimit}</p>
                    <p className="text-xs text-stone-500">Expires: {code.expiryDate}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-stone-600">Product: <span className="font-medium text-stone-800">{code.product}</span></p>
                    <p className="text-stone-600">Supplier: <span className="font-medium text-stone-800">{code.supplier}</span></p>
                  </div>
                  <div>
                    <p className="text-stone-600">Created: <span className="font-medium text-stone-800">{code.createdAt}</span></p>
                    <p className="text-stone-600">Social Post: <span className="font-medium text-stone-800">{code.socialPostId}</span></p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <Bot className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-600 font-medium">AI Generated</span>
                    </div>
                    <p className="text-xs text-stone-500">Auto-triggered by supplier discount</p>
                  </div>
                </div>
                
                {/* Performance Metrics */}
                <div className="mt-3 pt-3 border-t border-purple-200">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-lg font-bold text-blue-600">{Math.floor(Math.random() * 1000) + 500}</p>
                      <p className="text-xs text-stone-500">Views</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-emerald-600">{code.usedCount}</p>
                      <p className="text-xs text-stone-500">Uses</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-purple-600">{((code.usedCount / code.usageLimit) * 100).toFixed(1)}%</p>
                      <p className="text-xs text-stone-500">Usage Rate</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-orange-600">${(code.usedCount * 50 * (code.discount / 100)).toFixed(0)}</p>
                      <p className="text-xs text-stone-500">Revenue Impact</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Code Generation Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">AI Code Generation Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Default Discount Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min %"
                  defaultValue="10"
                  className="flex-1 px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max %"
                  defaultValue="30"
                  className="flex-1 px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Code Expiry Duration
              </label>
              <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>24 hours</option>
                <option>48 hours</option>
                <option>72 hours</option>
                <option>1 week</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Usage Limit Range
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min uses"
                  defaultValue="20"
                  className="flex-1 px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <input
                  type="number"
                  placeholder="Max uses"
                  defaultValue="100"
                  className="flex-1 px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Auto-generation Triggers
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-stone-600">Supplier discount detected</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-stone-600">Competitor price drop</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-stone-600">Low inventory alert</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSupplierDiscounts = () => (
    <div className="space-y-6">
      {/* Supplier Discounts Control */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-stone-800">Supplier Discounts Control</h3>
          </div>
          <button
            onClick={() => setSupplierDiscountsPaused(!supplierDiscountsPaused)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              supplierDiscountsPaused 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            {supplierDiscountsPaused ? (
              <>
                <Play className="h-4 w-4" />
                <span>Resume Supplier Monitoring</span>
              </>
            ) : (
              <>
                <Pause className="h-4 w-4" />
                <span>Pause Supplier Monitoring</span>
              </>
            )}
          </button>
        </div>
        
        <div className={`p-4 rounded-lg border ${
          supplierDiscountsPaused 
            ? 'bg-red-50 border-red-200' 
            : 'bg-orange-50 border-orange-200'
        }`}>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              supplierDiscountsPaused ? 'bg-red-500' : 'bg-orange-500 animate-pulse'
            }`}></div>
            <span className={`font-medium ${
              supplierDiscountsPaused ? 'text-red-700' : 'text-orange-700'
            }`}>
              {supplierDiscountsPaused ? 'Supplier Monitoring PAUSED' : 'Supplier Monitoring ACTIVE'}
            </span>
          </div>
          <p className={`text-sm mt-1 ${
            supplierDiscountsPaused ? 'text-red-600' : 'text-orange-600'
          }`}>
            {supplierDiscountsPaused 
              ? 'Supplier discount detection and automatic switching is disabled'
              : 'AI is monitoring supplier prices and automatically switching for better deals'
            }
          </p>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-stone-800">AI Supplier Discount Intelligence</h3>

      {/* Supplier Discount Detection */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <RefreshCw className="h-6 w-6 text-orange-600" />
            <h3 className="text-lg font-semibold text-stone-800">Real-time Supplier Monitoring</h3>
          </div>
          <div className="text-sm text-orange-600">
            {aiCoordination.discountDetectionAccuracy}% detection accuracy
          </div>
        </div>
        
        <div className="space-y-4">
          {supplierDiscounts.map((discount) => (
            <div key={discount.id} className="p-4 bg-white/50 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-stone-800">{discount.product}</h4>
                  <p className="text-sm text-stone-600">Supplier: {discount.supplier}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg line-through text-stone-500">${discount.originalPrice}</span>
                    <span className="text-2xl font-bold text-emerald-600">${discount.discountedPrice}</span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                      -{discount.discountPercentage}%
                    </span>
                  </div>
                  <p className="text-xs text-stone-500">Valid until: {discount.validUntil}</p>
                </div>
              </div>
              
              {discount.competitorComparison && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-blue-800">AI Recommendation:</p>
                      <p className="text-sm text-blue-700">
                        {discount.competitorComparison.betterOption 
                          ? `✅ SWITCH to ${discount.competitorComparison.bestSupplier} - Save $${discount.competitorComparison.savings}`
                          : `✅ USE current supplier - Best available price`
                        }
                      </p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        discount.aiRecommendation === 'use' ? 'bg-emerald-100 text-emerald-700' :
                        discount.aiRecommendation === 'compare' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {discount.aiRecommendation.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
                <span>Detected: {discount.detectedAt}</span>
                <div className="flex items-center space-x-2">
                  <Brain className="h-3 w-3" />
                  <span>AI Learning & Optimizing</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Supplier Performance Analytics */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Supplier Performance Analytics</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h5 className="font-medium text-emerald-800 mb-3">Top Performing Suppliers</h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-700">PetCo Premium</span>
                <span className="font-medium text-emerald-800">94.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-emerald-700">Furry Friends Supply</span>
                <span className="font-medium text-emerald-800">91.8%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-emerald-700">Pet Paradise</span>
                <span className="font-medium text-emerald-800">89.5%</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h5 className="font-medium text-blue-800 mb-3">Discount Frequency</h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Weekly Discounts:</span>
                <span className="font-medium text-blue-800">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Flash Sales:</span>
                <span className="font-medium text-blue-800">8</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-700">Seasonal Offers:</span>
                <span className="font-medium text-blue-800">12</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h5 className="font-medium text-purple-800 mb-3">AI Optimization Results</h5>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-purple-700">Cost Savings:</span>
                <span className="font-medium text-purple-800">${aiCoordination.optimizationSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-purple-700">Switches Made:</span>
                <span className="font-medium text-purple-800">{supplierAIIntegration.automaticSwitching}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-purple-700">Success Rate:</span>
                <span className="font-medium text-purple-800">{aiCoordination.supplierSwitchingAccuracy}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monitoring Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Supplier Monitoring Settings</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Price Check Frequency
              </label>
              <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
                <option>Every 30 minutes</option>
                <option>Every hour</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Minimum Discount Threshold
              </label>
              <input
                type="number"
                placeholder="5"
                defaultValue="5"
                className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <p className="text-xs text-stone-500 mt-1">Minimum % discount to trigger alerts</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Auto-switching Settings
              </label>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-stone-600">Enable automatic supplier switching</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-stone-600">Require manual approval for switches &gt;$100</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-stone-600">Notify via email for all switches</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-stone-800">AI Automation Settings</h3>

      {/* AI Content Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Content Generation Settings</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Posts per day per platform
            </label>
            <input
              type="number"
              min="1"
              max="10"
              defaultValue="3"
              className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Content tone
            </label>
            <select className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
              <option>Professional</option>
              <option>Casual</option>
              <option>Educational</option>
              <option>Promotional</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Focus keywords
            </label>
            <input
              type="text"
              placeholder="cannabis, growing, THCA, CBD, wellness"
              className="w-full px-3 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Platform Settings */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Platform Settings</h4>
        <div className="space-y-4">
          {platformStats.map((platform) => {
            const Icon = platform.icon;
            return (
              <div key={platform.platform} className="flex items-center justify-between p-4 bg-stone-50/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon className={`h-5 w-5 text-${platform.color}-500`} />
                  <span className="font-medium text-stone-800">{platform.platform}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-stone-600">Auto-post</span>
                  </label>
                  <select className="px-3 py-1 border border-stone-200 rounded text-sm">
                    <option>3 posts/day</option>
                    <option>2 posts/day</option>
                    <option>1 post/day</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Content Templates */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">AI Content Templates</h4>
        <div className="space-y-3">
          {aiContentTemplates.map((template, index) => (
            <div key={index} className="p-3 bg-stone-50/50 rounded-lg">
              <p className="text-stone-700 text-sm font-mono">{template}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
          Add New Template
        </button>
      </div>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'ai-coordination', label: 'AI Coordination', icon: Brain },
    { id: 'discount-management', label: 'AI Discount Management', icon: Zap },
    { id: 'supplier-discounts', label: 'AI Supplier Discounts', icon: RefreshCw },
    { id: 'settings', label: 'AI Settings', icon: Settings },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">AI Social Media Manager</h2>
        <p className="text-stone-600">Automated content creation and social media management</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' && renderOverview()}
      {activeTab === 'analytics' && renderAnalytics()}
      {activeTab === 'ai-coordination' && renderAICoordination()}
      {activeTab === 'discount-management' && renderDiscountManagement()}
      {activeTab === 'supplier-discounts' && renderSupplierDiscounts()}
      {activeTab === 'settings' && renderSettings()}

      {/* Social Media AI Issues Modal */}
      {showAIAlerts && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-grey-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">Social Media AI Issues</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                    {aiUnresolvedIssues.length} Issues Need Review
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
                            <span className="font-medium text-blue-600">{issue.platform}</span>
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
                    
                    {issue.postId && (
                      <div className="text-sm text-stone-600 dark:text-grey-400 mb-3">
                        <span className="font-medium">Affected Post:</span> {issue.postId}
                      </div>
                    )}
                    
                    <div className="flex items-center space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                        Review Content
                      </button>
                      <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm">
                        Manual Override
                      </button>
                      <button className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                        Update AI Rules
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t dark:border-grey-600">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-stone-600 dark:text-grey-300">
                    AI Success Rate: {((socialMetrics.postsScheduled - aiUnresolvedIssues.length) / socialMetrics.postsScheduled * 100).toFixed(1)}%
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

export default SocialMediaManager;