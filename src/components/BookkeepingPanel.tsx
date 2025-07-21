import React, { useState } from 'react';
import { FileText, DollarSign, Calculator, AlertTriangle, Download, Upload, Calendar, TrendingUp, Shield, Building, Receipt, CreditCard, PieChart, CheckCircle, Clock, Eye, Bot, Zap, Target, ShoppingCart, Brain, Mail, Lock, Banknote, MessageCircle, Heart, Smile } from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  type: 'income' | 'expense' | 'tax' | 'fee';
  category: string;
  description: string;
  amount: number;
  supplier?: string;
  orderId?: string;
  taxDeductible: boolean;
  status: 'pending' | 'processed' | 'reconciled';
  receiptUrl?: string;
}

interface TaxRecord {
  id: string;
  period: string;
  type: 'quarterly' | 'annual' | 'monthly';
  grossRevenue: number;
  deductions: number;
  taxableIncome: number;
  taxOwed: number;
  status: 'pending' | 'filed' | 'paid';
  dueDate: string;
  filedDate?: string;
}

interface CommissionSale {
  id: string;
  productName: string;
  salePrice: number;
  buyPrice: number;
  commission: number;
  commissionRate: number;
  saleDate: string;
  supplier: string;
  autoOrderStatus: 'pending' | 'ordered' | 'confirmed' | 'failed';
  orderId?: string;
  customerOrder: string;
}

interface AutoOrderMetrics {
  totalSales: number;
  totalCommissions: number;
  autoOrdersPlaced: number;
  autoOrderSuccess: number;
  avgCommissionRate: number;
  supplierResponseTime: number;
  profitMargin: number;
}

interface AILearningMetrics {
  totalInteractions: number;
  communicationTone: number; // 1-10 scale for politeness
  learningAccuracy: number;
  personalityDevelopment: number;
  emailsSent: number;
  supplierRelationshipScore: number;
  customerSatisfactionFromAI: number;
  continuousLearningHours: number;
  adaptationRate: number;
}

interface BankingAccess {
  accountBalance: number;
  dailyTransactionLimit: number;
  monthlyTransactionLimit: number;
  transactionsToday: number;
  transactionsThisMonth: number;
  autoDepositsEnabled: boolean;
  autoWithdrawalsEnabled: boolean;
  securityLevel: 'high' | 'maximum';
  lastBankingActivity: string;
  pendingTransactions: number;
}

interface AIEmailTemplate {
  id: string;
  type: 'supplier_order' | 'customer_service' | 'payment_confirmation' | 'shipping_update';
  subject: string;
  template: string;
  politenessScore: number;
  successRate: number;
  lastUsed: string;
}

interface LegalDocument {
  id: string;
  type: 'terms' | 'privacy' | 'return' | 'supplier-agreement' | 'tax-form' | 'business-license';
  title: string;
  lastUpdated: string;
  status: 'current' | 'needs-update' | 'expired';
  expiryDate?: string;
  description: string;
}

const BookkeepingPanel: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedPeriod, setSelectedPeriod] = useState('current-month');
  const [sortField, setSortField] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [aiBookkeepingStats, setAiBookkeepingStats] = useState({
    automationAccuracy: 98.7,
    taxOptimizationSavings: 12456.78,
    complianceScore: 99.1,
    learningDataPoints: 345678,
    processedTransactions: 23456,
    commissionCalculationAccuracy: 99.8,
    autoOrderSuccessRate: 97.3,
    supplierIntegrationAccuracy: 96.5,
    aiPersonalityScore: 9.4,
    communicationEffectiveness: 98.2,
    learningEvolutionRate: 15.7
  });

  const [aiLearningMetrics, setAiLearningMetrics] = useState<AILearningMetrics>({
    totalInteractions: 45678,
    communicationTone: 9.4, // Very polite and friendly
    learningAccuracy: 97.8,
    personalityDevelopment: 94.2,
    emailsSent: 1234,
    supplierRelationshipScore: 9.6,
    customerSatisfactionFromAI: 96.8,
    continuousLearningHours: 8760, // 24/7 learning
    adaptationRate: 23.4
  });

  const [bankingAccess, setBankingAccess] = useState<BankingAccess>({
    accountBalance: 125678.90,
    dailyTransactionLimit: 50000,
    monthlyTransactionLimit: 500000,
    transactionsToday: 23,
    transactionsThisMonth: 456,
    autoDepositsEnabled: true,
    autoWithdrawalsEnabled: true,
    securityLevel: 'maximum',
    lastBankingActivity: '2024-01-24 09:45',
    pendingTransactions: 3
  });

  const aiEmailTemplates: AIEmailTemplate[] = [
    {
      id: 'TEMPLATE-001',
      type: 'supplier_order',
      subject: '🌟 New Order Request - Partnership Opportunity',
      template: 'Dear [Supplier Name],\n\nI hope this message finds you well! 😊\n\nWe have an exciting new order opportunity that I\'d love to share with you. Our customers have shown tremendous interest in your premium products, and we\'d be honored to place the following order:\n\n[Order Details]\n\nYour exceptional quality and reliable service have made you one of our most valued partners. We truly appreciate the professional relationship we\'ve built together.\n\nPlease let me know if you need any additional information. I\'m here to make this process as smooth as possible for you!\n\nWarm regards and looking forward to your response,\nCrazy Mofos AI Assistant 🤖💚\n\nP.S. Thank you for being such an amazing partner in our journey!',
      politenessScore: 9.8,
      successRate: 98.4,
      lastUsed: '2024-01-24 09:30'
    },
    {
      id: 'TEMPLATE-002',
      type: 'payment_confirmation',
      subject: '✅ Payment Processed Successfully - Thank You!',
      template: 'Hello [Supplier Name],\n\nI hope you\'re having a wonderful day! 🌞\n\nI\'m delighted to confirm that your payment of $[Amount] has been processed successfully and should appear in your account within 1-2 business hours.\n\nTransaction Details:\n- Amount: $[Amount]\n- Reference: [Reference Number]\n- Date: [Date]\n- Method: Bank Transfer\n\nThank you for your continued excellence and partnership. Your dedication to quality makes our customers incredibly happy, and we\'re grateful to work with such a professional team.\n\nIf you have any questions or need assistance with anything, please don\'t hesitate to reach out. I\'m always here to help!\n\nBest wishes and continued success,\nCrazy Mofos AI Assistant 🤖💰\n\nP.S. Your prompt service and quality products never cease to amaze us!',
      politenessScore: 9.6,
      successRate: 99.1,
      lastUsed: '2024-01-24 08:15'
    },
    {
      id: 'TEMPLATE-003',
      type: 'customer_service',
      subject: '💚 Thank You for Your Order - We\'re Here to Help!',
      template: 'Dear Valued Customer,\n\nThank you so much for choosing Crazy Mofos! 🌟\n\nI\'m thrilled to confirm that we\'ve received your order and our team is working diligently to ensure you receive the highest quality products as quickly as possible.\n\nOrder Summary:\n[Order Details]\n\nI\'ve personally coordinated with our premium suppliers to ensure your order meets our exceptional quality standards. You can expect shipping updates within 24 hours.\n\nYour satisfaction is our top priority, and I\'m here 24/7 if you need any assistance or have questions about your order.\n\nThank you for trusting us with your cannabis and growing needs. We\'re honored to be part of your journey!\n\nWarm regards,\nCrazy Mofos AI Assistant 🤖🌱\n\nP.S. We truly appreciate customers like you who make our work so rewarding!',
      politenessScore: 9.7,
      successRate: 97.8,
      lastUsed: '2024-01-24 10:20'
    }
  ];

  const recentAIActivities = [
    {
      time: '2024-01-24 10:45',
      activity: 'Sent polite order confirmation to Green Valley Farms',
      type: 'communication',
      success: true,
      politenessScore: 9.8
    },
    {
      time: '2024-01-24 10:30',
      activity: 'Processed automatic payment of $329.99 to SpiderFarmer',
      type: 'banking',
      success: true,
      amount: 329.99
    },
    {
      time: '2024-01-24 10:15',
      activity: 'Learned new supplier communication preference from Delta Delights',
      type: 'learning',
      success: true,
      improvement: 'Prefers morning communications'
    },
    {
      time: '2024-01-24 09:45',
      activity: 'Deposited customer payment $549.99 to business account',
      type: 'banking',
      success: true,
      amount: 549.99
    },
    {
      time: '2024-01-24 09:30',
      activity: 'Adapted communication style based on supplier feedback',
      type: 'learning',
      success: true,
      improvement: 'More casual tone for West Coast suppliers'
    }
  ];

  const getBankingStatusColor = (enabled: boolean) => {
    return enabled ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700';
  };

  const [autoOrderMetrics, setAutoOrderMetrics] = useState<AutoOrderMetrics>({
    totalSales: 45231.67,
    totalCommissions: 22615.84,
    autoOrdersPlaced: 234,
    autoOrderSuccess: 228,
    avgCommissionRate: 50.0,
    supplierResponseTime: 1.2, // minutes
    profitMargin: 52.3
  });

  const commissionSales: CommissionSale[] = [
    {
      id: 'SALE-001',
      productName: 'SpiderFarmer SF-4000 LED Grow Light',
      salePrice: 549.99,
      buyPrice: 329.99,
      commission: 220.00,
      commissionRate: 40.0,
      saleDate: '2024-01-23 14:30',
      supplier: 'SpiderFarmer Official',
      autoOrderStatus: 'confirmed',
      orderId: 'SUP-SF-001',
      customerOrder: 'ORD-005'
    },
    {
      id: 'SALE-002',
      productName: 'Premium THCA Flower - Wedding Cake',
      salePrice: 89.99,
      buyPrice: 54.99,
      commission: 35.00,
      commissionRate: 38.9,
      saleDate: '2024-01-23 16:15',
      supplier: 'Green Valley Farms',
      autoOrderStatus: 'confirmed',
      orderId: 'SUP-GV-002',
      customerOrder: 'ORD-006'
    },
    {
      id: 'SALE-003',
      productName: 'CBD Full Spectrum Tincture 1000mg',
      salePrice: 79.99,
      buyPrice: 39.99,
      commission: 40.00,
      commissionRate: 50.0,
      saleDate: '2024-01-23 18:45',
      supplier: 'Pure Wellness Co.',
      autoOrderStatus: 'ordered',
      orderId: 'SUP-PW-003',
      customerOrder: 'ORD-007'
    },
    {
      id: 'SALE-004',
      productName: 'Hydroponic Growing System - 6 Plant',
      salePrice: 199.99,
      buyPrice: 119.99,
      commission: 80.00,
      commissionRate: 40.0,
      saleDate: '2024-01-23 20:12',
      supplier: 'HydroGrow Systems',
      autoOrderStatus: 'pending',
      customerOrder: 'ORD-008'
    },
    {
      id: 'SALE-005',
      productName: 'Delta-8 THC Gummies - Mixed Berry',
      salePrice: 49.99,
      buyPrice: 24.99,
      commission: 25.00,
      commissionRate: 50.0,
      saleDate: '2024-01-24 09:30',
      supplier: 'Delta Delights',
      autoOrderStatus: 'confirmed',
      orderId: 'SUP-DD-004',
      customerOrder: 'ORD-009'
    }
  ];

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

  const sortedCommissionSales = [...commissionSales].sort((a, b) => {
    if (!sortField) return 0;
    
    let aValue: any = a[sortField as keyof CommissionSale];
    let bValue: any = b[sortField as keyof CommissionSale];
    
    // Handle special cases
    if (sortField === 'productName') {
      aValue = a.productName.toLowerCase();
      bValue = b.productName.toLowerCase();
    } else if (sortField === 'salePrice' || sortField === 'buyPrice' || sortField === 'commission' || sortField === 'commissionRate') {
      aValue = Number(aValue);
      bValue = Number(bValue);
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const getAutoOrderStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-emerald-100 text-emerald-700';
      case 'ordered': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const transactions: Transaction[] = [
    {
      id: 'TXN-001',
      date: '2024-01-23',
      type: 'income',
      category: 'Product Sales',
      description: 'SpiderFarmer SF-4000 LED Grow Light - Order #ORD-005',
      amount: 549.99,
      supplier: 'SpiderFarmer USA',
      orderId: 'ORD-005',
      taxDeductible: false,
      status: 'processed'
    },
    {
      id: 'TXN-002',
      date: '2024-01-23',
      type: 'expense',
      category: 'Cost of Goods Sold',
      description: 'Product cost - SpiderFarmer SF-4000 (1 unit)',
      amount: -329.99,
      supplier: 'SpiderFarmer USA',
      orderId: 'ORD-005',
      taxDeductible: true,
      status: 'processed'
    },
    {
      id: 'TXN-007',
      date: '2024-01-23',
      type: 'income',
      category: 'Commission Revenue',
      description: 'Auto-calculated commission from dropshipping sales',
      amount: 220.00,
      taxDeductible: false,
      status: 'processed'
    },
    {
      id: 'TXN-008',
      date: '2024-01-23',
      type: 'expense',
      category: 'Auto Supplier Orders',
      description: 'Automatic supplier order placement fees',
      amount: -15.50,
      taxDeductible: true,
      status: 'processed'
    },
    {
      id: 'TXN-003',
      date: '2024-01-22',
      type: 'fee',
      category: 'Platform Fees',
      description: 'Payment processing fees - January',
      amount: -67.89,
      taxDeductible: true,
      status: 'processed'
    },
    {
      id: 'TXN-004',
      date: '2024-01-22',
      type: 'expense',
      category: 'Marketing',
      description: 'Google Ads - Cannabis Equipment Campaign',
      amount: -234.56,
      taxDeductible: true,
      status: 'processed'
    },
    {
      id: 'TXN-005',
      date: '2024-01-21',
      type: 'income',
      category: 'Product Sales',
      description: 'Multiple orders - THCA & CBD Products',
      amount: 789.96,
      taxDeductible: false,
      status: 'processed'
    },
    {
      id: 'TXN-006',
      date: '2024-01-21',
      type: 'expense',
      category: 'Software Subscriptions',
      description: 'Cannabis compliance & automation tools',
      amount: -149.99,
      taxDeductible: true,
      status: 'processed'
    }
  ];

  const taxRecords: TaxRecord[] = [
    {
      id: 'TAX-Q1-2024',
      period: 'Q1 2024',
      type: 'quarterly',
      grossRevenue: 78456.89,
      deductions: 23567.34,
      taxableIncome: 54889.55,
      taxOwed: 13722.39,
      status: 'pending',
      dueDate: '2024-04-15'
    },
    {
      id: 'TAX-2023',
      period: '2023',
      type: 'annual',
      grossRevenue: 245678.90,
      deductions: 67890.12,
      taxableIncome: 177788.78,
      taxOwed: 44447.20,
      status: 'filed',
      dueDate: '2024-04-15',
      filedDate: '2024-03-15'
    }
  ];

  const legalDocuments: LegalDocument[] = [
    {
      id: 'DOC-001',
      type: 'terms',
      title: 'Terms of Service',
      lastUpdated: '2024-01-15',
      status: 'current',
      description: 'Customer terms and conditions for cannabis & growing equipment business'
    },
    {
      id: 'DOC-002',
      type: 'privacy',
      title: 'Privacy Policy',
      lastUpdated: '2024-01-15',
      status: 'current',
      description: 'GDPR, CCPA, and cannabis industry compliant privacy policy'
    },
    {
      id: 'DOC-003',
      type: 'return',
      title: 'Return & Refund Policy',
      lastUpdated: '2024-01-10',
      status: 'current',
      description: 'Customer return and refund procedures for cannabis products'
    },
    {
      id: 'DOC-004',
      type: 'business-license',
      title: 'Cannabis Business License',
      lastUpdated: '2023-06-01',
      status: 'current',
      expiryDate: '2024-06-01',
      description: 'State cannabis business registration and license'
    },
    {
      id: 'DOC-005',
      type: 'supplier-agreement',
      title: 'Green Valley Farms Supplier Agreement',
      lastUpdated: '2023-08-15',
      status: 'current',
      expiryDate: '2025-08-14',
      description: 'Dropshipping agreement with Green Valley Farms for THCA products'
    },
    {
      id: 'DOC-006',
      type: 'tax-form',
      title: 'Cannabis Excise Tax Registration',
      lastUpdated: '2023-07-01',
      status: 'current',
      expiryDate: '2024-07-01',
      description: 'State cannabis excise tax registration and compliance'
    }
  ];

  const financialSummary = {
    totalRevenue: transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: Math.abs(transactions.filter(t => t.type === 'expense' || t.type === 'fee').reduce((sum, t) => sum + t.amount, 0)),
    netProfit: 0,
    taxDeductions: Math.abs(transactions.filter(t => t.taxDeductible).reduce((sum, t) => sum + t.amount, 0)),
    pendingTaxes: taxRecords.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.taxOwed, 0)
  };
  financialSummary.netProfit = financialSummary.totalRevenue - financialSummary.totalExpenses;

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'income': return 'text-emerald-600';
      case 'expense': return 'text-red-600';
      case 'fee': return 'text-orange-600';
      case 'tax': return 'text-purple-600';
      default: return 'text-stone-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-emerald-100 text-emerald-700';
      case 'needs-update': return 'bg-yellow-100 text-yellow-700';
      case 'expired': return 'bg-red-100 text-red-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'filed': return 'bg-blue-100 text-blue-700';
      case 'paid': return 'bg-emerald-100 text-emerald-700';
      case 'processed': return 'bg-emerald-100 text-emerald-700';
      case 'reconciled': return 'bg-blue-100 text-blue-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* AI Commission & Auto-Order Intelligence */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold text-stone-800">Learning AI: Commission, Banking & Communication System</h3>
          <span className="text-sm text-green-600">24/7 Learning • {aiLearningMetrics.communicationTone}/10 Politeness • {aiBookkeepingStats.communicationEffectiveness}% Effectiveness</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center">
              <Calculator className="h-4 w-4 mr-1" />
              Commission AI
            </h4>
            <p className="text-2xl font-bold text-green-600">{aiBookkeepingStats.commissionCalculationAccuracy}%</p>
            <p className="text-sm text-stone-600">Auto-calculation precision</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center">
              <Banknote className="h-4 w-4 mr-1" />
              Banking AI
            </h4>
            <p className="text-2xl font-bold text-blue-600">${bankingAccess.accountBalance.toLocaleString()}</p>
            <p className="text-sm text-stone-600">Auto-managed balance</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              Communication AI
            </h4>
            <p className="text-2xl font-bold text-emerald-600">{aiLearningMetrics.communicationTone}/10</p>
            <p className="text-sm text-stone-600">Politeness & friendliness</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center">
              <Brain className="h-4 w-4 mr-1" />
              Learning AI
            </h4>
            <p className="text-2xl font-bold text-purple-600">{aiLearningMetrics.learningAccuracy}%</p>
            <p className="text-sm text-stone-600">Continuous improvement</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2 flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              Relationship AI
            </h4>
            <p className="text-2xl font-bold text-pink-600">{aiLearningMetrics.supplierRelationshipScore}/10</p>
            <p className="text-sm text-stone-600">Supplier satisfaction</p>
          </div>
        </div>
        
        {/* Real-time AI Learning & Processing */}
        <div className="mt-4 p-4 bg-white/30 rounded-lg border border-green-300">
          <h4 className="font-medium text-stone-800 mb-2">🧠 Live AI Learning & Processing</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-stone-700">Learning from {aiLearningMetrics.totalInteractions.toLocaleString()} interactions • Evolving personality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-stone-700">Managing ${bankingAccess.accountBalance.toLocaleString()} with {bankingAccess.pendingTransactions} pending transactions</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-stone-700">Sent {aiLearningMetrics.emailsSent} polite emails • {aiLearningMetrics.supplierRelationshipScore}/10 relationship score</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Banking Access & Security */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center space-x-3 mb-4">
          <Lock className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Banking Access & Security</h3>
          <span className="text-sm text-blue-600">Maximum Security • Limited Access • Real-time Monitoring</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Account Balance</h4>
            <p className="text-2xl font-bold text-blue-600">${bankingAccess.accountBalance.toLocaleString()}</p>
            <p className="text-sm text-stone-600">AI-managed funds</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Daily Limit</h4>
            <p className="text-2xl font-bold text-emerald-600">${bankingAccess.dailyTransactionLimit.toLocaleString()}</p>
            <p className="text-sm text-stone-600">Used: {bankingAccess.transactionsToday} transactions</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Security Level</h4>
            <p className="text-2xl font-bold text-red-600">{bankingAccess.securityLevel.toUpperCase()}</p>
            <p className="text-sm text-stone-600">Multi-factor authentication</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Auto-Transactions</h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-600">Deposits:</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getBankingStatusColor(bankingAccess.autoDepositsEnabled)}`}>
                  {bankingAccess.autoDepositsEnabled ? 'ENABLED' : 'DISABLED'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-stone-600">Withdrawals:</span>
                <span className={`px-2 py-1 text-xs rounded-full ${getBankingStatusColor(bankingAccess.autoWithdrawalsEnabled)}`}>
                  {bankingAccess.autoWithdrawalsEnabled ? 'ENABLED' : 'DISABLED'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Banking Security Features */}
        <div className="mt-4 p-4 bg-white/30 rounded-lg border border-blue-300">
          <h4 className="font-medium text-stone-800 mb-2">🔒 AI Banking Security Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-1">
              <p className="font-medium text-blue-800">Transaction Limits</p>
              <p className="text-blue-700">• Daily: ${bankingAccess.dailyTransactionLimit.toLocaleString()}</p>
              <p className="text-blue-700">• Monthly: ${bankingAccess.monthlyTransactionLimit.toLocaleString()}</p>
              <p className="text-blue-700">• Per transaction: $10,000 max</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-blue-800">Security Protocols</p>
              <p className="text-blue-700">• Multi-factor authentication</p>
              <p className="text-blue-700">• Real-time fraud detection</p>
              <p className="text-blue-700">• Encrypted API connections</p>
            </div>
            <div className="space-y-1">
              <p className="font-medium text-blue-800">AI Restrictions</p>
              <p className="text-blue-700">• Business transactions only</p>
              <p className="text-blue-700">• Supplier payments authorized</p>
              <p className="text-blue-700">• Customer deposits automated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">${autoOrderMetrics.totalSales.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Total Sales</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-600">${autoOrderMetrics.totalCommissions.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Total Commissions</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Receipt className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-red-600">${financialSummary.totalExpenses.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Total Expenses</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">{autoOrderMetrics.autoOrdersPlaced}</span>
          </div>
          <p className="text-stone-600">Auto Orders</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">${financialSummary.netProfit.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Net Profit</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Calculator className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">${financialSummary.taxDeductions.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Tax Deductions</p>
        </div>
        
      </div>

      {/* Dropshipping Compliance Status */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center">
          <Shield className="h-5 w-5 text-emerald-600 mr-2" />
          Dropshipping Compliance Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="font-medium text-emerald-800">No Physical Inventory</span>
            </div>
            <p className="text-sm text-emerald-700">All products dropshipped directly from suppliers. No warehouse needed.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-blue-800">Automated Tax Tracking</span>
            </div>
            <p className="text-sm text-blue-700">All transactions automatically categorized for tax compliance.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-purple-800">Legal Documents Current</span>
            </div>
            <p className="text-sm text-purple-700">All required business documents up to date and compliant.</p>
          </div>
        </div>
      </div>

      {/* Recent AI Activities */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center">
          <Brain className="h-5 w-5 text-purple-600 mr-2" />
          Recent AI Learning & Activities
        </h3>
        <div className="space-y-3">
          {recentAIActivities.map((activity, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'communication' ? 'bg-green-500' :
                  activity.type === 'banking' ? 'bg-blue-500' :
                  'bg-purple-500'
                }`} />
                <div>
                  <p className="font-medium text-stone-800">{activity.activity}</p>
                  <p className="text-sm text-stone-500">{activity.time}</p>
                  {activity.improvement && (
                    <p className="text-xs text-purple-600">Learning: {activity.improvement}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  {activity.success ? (
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                  )}
                  {activity.amount && (
                    <span className="font-medium text-stone-800">${activity.amount}</span>
                  )}
                  {activity.politenessScore && (
                    <span className="text-xs text-green-600">{activity.politenessScore}/10 polite</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Commission Sales & Auto-Orders */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center">
          <Zap className="h-5 w-5 text-emerald-600 mr-2" />
          Recent Commission Sales & Auto-Orders
        </h3>
        <div className="space-y-3">
          {commissionSales.slice(0, 5).map((sale) => (
            <div key={sale.id} className="flex items-center justify-between p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                <div>
                  <p className="font-medium text-stone-800">{sale.productName}</p>
                  <p className="text-sm text-stone-500">
                    Sale: ${sale.salePrice} • Buy: ${sale.buyPrice} • Commission: ${sale.commission} ({sale.commissionRate}%)
                  </p>
                  <p className="text-xs text-stone-400">
                    {sale.saleDate} • Supplier: {sale.supplier} • Order: {sale.customerOrder}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-emerald-600">${sale.commission}</p>
                <div className="flex items-center space-x-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${getAutoOrderStatusColor(sale.autoOrderStatus)}`}>
                    {sale.autoOrderStatus.toUpperCase()}
                  </span>
                  {sale.orderId && (
                    <span className="text-xs text-stone-500">{sale.orderId}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Auto-Order Summary */}
        <div className="mt-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <p className="font-bold text-emerald-600">{autoOrderMetrics.autoOrdersPlaced}</p>
              <p className="text-stone-600">Orders Placed</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-green-600">{autoOrderMetrics.autoOrderSuccess}</p>
              <p className="text-stone-600">Confirmed</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-blue-600">{aiBookkeepingStats.autoOrderSuccessRate}%</p>
              <p className="text-stone-600">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-purple-600">{autoOrderMetrics.supplierResponseTime}min</p>
              <p className="text-stone-600">Avg Response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.slice(0, 5).map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-stone-50/50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  transaction.type === 'income' ? 'bg-emerald-500' :
                  transaction.type === 'expense' ? 'bg-red-500' :
                  transaction.type === 'fee' ? 'bg-orange-500' : 'bg-purple-500'
                }`} />
                <div>
                  <p className="font-medium text-stone-800">{transaction.description}</p>
                  <p className="text-sm text-stone-500">{transaction.date} • {transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </p>
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">Transaction History</h3>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="current-month">Current Month</option>
            <option value="last-month">Last Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="text-left p-4 font-semibold text-stone-800">Date</th>
                <th className="text-left p-4 font-semibold text-stone-800">Description</th>
                <th className="text-left p-4 font-semibold text-stone-800">Category</th>
                <th className="text-left p-4 font-semibold text-stone-800">Amount</th>
                <th className="text-left p-4 font-semibold text-stone-800">Tax Deductible</th>
                <th className="text-left p-4 font-semibold text-stone-800">Status</th>
                <th className="text-left p-4 font-semibold text-stone-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-stone-50/50">
                  <td className="p-4 text-stone-600">{transaction.date}</td>
                  <td className="p-4">
                    <div className="font-medium text-stone-800">{transaction.description}</div>
                    {transaction.supplier && (
                      <div className="text-sm text-stone-500">Supplier: {transaction.supplier}</div>
                    )}
                  </td>
                  <td className="p-4 text-stone-600">{transaction.category}</td>
                  <td className="p-4">
                    <span className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </span>
                  </td>
                  <td className="p-4">
                    {transaction.taxDeductible ? (
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <span className="text-stone-400">—</span>
                    )}
                  </td>
                  <td className="p-4">
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderCommissions = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">Commission Sales & Auto-Orders</h3>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-emerald-600">
            AI Processing: {autoOrderMetrics.autoOrdersPlaced} orders • {aiBookkeepingStats.autoOrderSuccessRate}% success
          </span>
        </div>
      </div>

      {/* Commission Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <DollarSign className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">${autoOrderMetrics.totalCommissions.toFixed(2)}</span>
          </div>
          <p className="text-stone-600">Total Commissions</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Target className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">{autoOrderMetrics.avgCommissionRate}%</span>
          </div>
          <p className="text-stone-600">Avg Commission Rate</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">{autoOrderMetrics.autoOrderSuccess}</span>
          </div>
          <p className="text-stone-600">Successful Auto-Orders</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-orange-600">{autoOrderMetrics.supplierResponseTime}min</span>
          </div>
          <p className="text-stone-600">Avg Response Time</p>
        </div>
      </div>

      {/* Commission Sales Table */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('productName')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Product</span>
                    <span className="text-xs">{getSortIcon('productName')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('salePrice')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Sale Price</span>
                    <span className="text-xs">{getSortIcon('salePrice')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('buyPrice')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Buy Price</span>
                    <span className="text-xs">{getSortIcon('buyPrice')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('commission')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Commission</span>
                    <span className="text-xs">{getSortIcon('commission')}</span>
                  </div>
                </th>
                <th 
                  className="text-left p-4 font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors select-none"
                  onClick={() => handleSort('commissionRate')}
                >
                  <div className="flex items-center space-x-1">
                    <span>Rate</span>
                    <span className="text-xs">{getSortIcon('commissionRate')}</span>
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
                <th className="text-left p-4 font-semibold text-stone-800">Auto-Order</th>
                <th className="text-left p-4 font-semibold text-stone-800">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {sortedCommissionSales.map((sale) => (
                <tr key={sale.id} className="hover:bg-stone-50/50">
                  <td className="p-4">
                    <div className="font-medium text-stone-800">{sale.productName}</div>
                    <div className="text-sm text-stone-500">Order: {sale.customerOrder}</div>
                  </td>
                  <td className="p-4 font-medium text-stone-800">${sale.salePrice}</td>
                  <td className="p-4 text-stone-600">${sale.buyPrice}</td>
                  <td className="p-4">
                    <span className="font-bold text-emerald-600">${sale.commission}</span>
                  </td>
                  <td className="p-4 text-stone-600">{sale.commissionRate}%</td>
                  <td className="p-4 text-stone-600">{sale.supplier}</td>
                  <td className="p-4">
                    <div className="space-y-1">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${getAutoOrderStatusColor(sale.autoOrderStatus)}`}>
                        {sale.autoOrderStatus.toUpperCase()}
                      </span>
                      {sale.orderId && (
                        <div className="text-xs text-stone-500">{sale.orderId}</div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-stone-600">{sale.saleDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Commission Calculation Logic */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <Bot className="h-5 w-5 text-emerald-600 mr-2" />
          AI Commission Calculation Logic
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h5 className="font-medium text-emerald-800 mb-2">Automatic Commission Calculation</h5>
              <div className="text-sm text-emerald-700 space-y-1">
                <p>• <strong>Sale Price:</strong> $100.00</p>
                <p>• <strong>Buy Price:</strong> $50.00</p>
                <p>• <strong>Commission:</strong> $50.00 (50%)</p>
                <p>• <strong>Auto-Order:</strong> Placed to supplier immediately</p>
              </div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">Real-time Processing</h5>
              <ul className="space-y-1 text-sm text-blue-700">
                <li>• Commission calculated instantly on sale</li>
                <li>• Supplier order placed automatically</li>
                <li>• Profit margin optimized per product</li>
                <li>• Tax implications calculated</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">Auto-Order Workflow</h5>
              <div className="space-y-2 text-sm text-purple-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>1. Sale detected → Commission calculated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>2. Supplier API contacted automatically</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>3. Order placed with supplier</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>4. Confirmation received & tracked</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h5 className="font-medium text-orange-800 mb-2">Success Metrics</h5>
              <div className="space-y-1 text-sm text-orange-700">
                <p>• <strong>Accuracy:</strong> {aiBookkeepingStats.commissionCalculationAccuracy}%</p>
                <p>• <strong>Auto-Order Success:</strong> {aiBookkeepingStats.autoOrderSuccessRate}%</p>
                <p>• <strong>Response Time:</strong> {autoOrderMetrics.supplierResponseTime} minutes</p>
                <p>• <strong>Profit Optimization:</strong> {autoOrderMetrics.profitMargin}%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTaxes = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">Tax Management</h3>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2">
          <Calculator className="h-4 w-4" />
          <span>Calculate Taxes</span>
        </button>
      </div>

      {/* Tax Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h4 className="font-semibold text-stone-800 mb-3">Current Quarter</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-stone-600">Gross Revenue:</span>
              <span className="font-medium text-stone-800">$45,231.67</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Deductions:</span>
              <span className="font-medium text-emerald-600">$12,456.78</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold text-stone-800">Tax Owed:</span>
              <span className="font-bold text-purple-600">$8,193.72</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h4 className="font-semibold text-stone-800 mb-3">Deductible Expenses</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-stone-600">Cost of Goods:</span>
              <span className="text-stone-800">$8,234.56</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Platform Fees:</span>
              <span className="text-stone-800">$1,456.78</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Marketing:</span>
              <span className="text-stone-800">$2,345.67</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-600">Software:</span>
              <span className="text-stone-800">$419.77</span>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h4 className="font-semibold text-stone-800 mb-3">Upcoming Deadlines</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <div>
                <p className="text-sm font-medium text-stone-800">Q1 2024 Filing</p>
                <p className="text-xs text-stone-500">Due: April 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-stone-800">Monthly Sales Tax</p>
                <p className="text-xs text-stone-500">Due: February 20, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tax Records */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Tax Filing History</h4>
        <div className="space-y-4">
          {taxRecords.map((record) => (
            <div key={record.id} className="p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h5 className="font-medium text-stone-800">{record.period} - {record.type.charAt(0).toUpperCase() + record.type.slice(1)} Filing</h5>
                  <p className="text-sm text-stone-500">Due: {record.dueDate}</p>
                </div>
                <span className={`inline-block px-3 py-1 text-sm rounded-full ${getStatusColor(record.status)}`}>
                  {record.status.toUpperCase()}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-stone-500">Gross Revenue</p>
                  <p className="font-medium text-stone-800">${record.grossRevenue.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-stone-500">Deductions</p>
                  <p className="font-medium text-emerald-600">${record.deductions.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-stone-500">Taxable Income</p>
                  <p className="font-medium text-stone-800">${record.taxableIncome.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-stone-500">Tax Owed</p>
                  <p className="font-medium text-purple-600">${record.taxOwed.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLegal = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">Legal Documents & Compliance</h3>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Upload Document</span>
        </button>
      </div>

      {/* Compliance Overview */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <Shield className="h-5 w-5 text-emerald-600 mr-2" />
          Dropshipping Business Compliance
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Business Registration Complete</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Tax ID Number Obtained</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Sales Tax Registration Active</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Supplier Agreements in Place</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Customer Terms & Conditions Current</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Privacy Policy GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">Return Policy Clearly Defined</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
              <span className="text-stone-800">No Physical Inventory Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Document Management */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Document Management</h4>
        <div className="space-y-4">
          {legalDocuments.map((doc) => (
            <div key={doc.id} className="p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <h5 className="font-medium text-stone-800">{doc.title}</h5>
                    <p className="text-sm text-stone-500">Last updated: {doc.lastUpdated}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${getStatusColor(doc.status)}`}>
                    {doc.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="p-1 text-stone-600 hover:bg-stone-50 rounded">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-stone-600 mb-2">{doc.description}</p>
              {doc.expiryDate && (
                <p className="text-xs text-orange-600">Expires: {doc.expiryDate}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Legal Reminders */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
          Important Reminders
        </h4>
        <div className="space-y-3">
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong>Business License Renewal:</strong> Your business license expires on June 1, 2024. 
              Schedule renewal 30 days in advance.
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Supplier Agreement Review:</strong> SpiderFarmer agreement expires August 14, 2025. 
              Consider renegotiating terms 90 days before expiry.
            </p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Dropshipping Advantage:</strong> No physical inventory means no warehouse costs, 
              storage fees, or inventory management overhead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAICommunication = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">AI Communication & Learning System</h3>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-emerald-600">
            24/7 Learning • {aiLearningMetrics.communicationTone}/10 Politeness • {aiLearningMetrics.emailsSent} Emails Sent
          </span>
        </div>
      </div>

      {/* AI Personality & Learning Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Smile className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-600">{aiLearningMetrics.communicationTone}/10</span>
          </div>
          <p className="text-stone-600">Politeness Score</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">{aiLearningMetrics.learningAccuracy}%</span>
          </div>
          <p className="text-stone-600">Learning Accuracy</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
            <span className="text-2xl font-bold text-pink-600">{aiLearningMetrics.supplierRelationshipScore}/10</span>
          </div>
          <p className="text-stone-600">Relationship Score</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Mail className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">{aiLearningMetrics.emailsSent}</span>
          </div>
          <p className="text-stone-600">Emails Sent</p>
        </div>
      </div>

      {/* AI Email Templates */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <Mail className="h-5 w-5 text-emerald-600 mr-2" />
          AI Email Templates (Polite & Friendly)
        </h4>
        <div className="space-y-4">
          {aiEmailTemplates.map((template) => (
            <div key={template.id} className="p-4 bg-stone-50/50 rounded-lg border border-stone-200">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h5 className="font-medium text-stone-800">{template.subject}</h5>
                  <p className="text-sm text-stone-500 capitalize">{template.type.replace('_', ' ')} • Last used: {template.lastUsed}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-green-600">{template.politenessScore}/10 polite</span>
                  <span className="text-sm text-blue-600">{template.successRate}% success</span>
                </div>
              </div>
              <div className="bg-white p-3 rounded border text-sm text-stone-700 max-h-32 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-sans">{template.template}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Learning Progress */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <Brain className="h-5 w-5 text-purple-600 mr-2" />
          Continuous AI Learning & Development
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">Learning Capabilities</h5>
              <ul className="space-y-1 text-sm text-purple-700">
                <li>• Adapts communication style per supplier preference</li>
                <li>• Learns optimal timing for different suppliers</li>
                <li>• Improves politeness based on response feedback</li>
                <li>• Develops personality traits for better relationships</li>
                <li>• Remembers supplier preferences and history</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h5 className="font-medium text-green-800 mb-2">Politeness Features</h5>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• Always uses friendly greetings and closings</li>
                <li>• Includes emojis appropriately for warmth</li>
                <li>• Expresses gratitude and appreciation</li>
                <li>• Uses positive language and tone</li>
                <li>• Personalizes messages with supplier names</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">Current Learning Stats</h5>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex justify-between">
                  <span>Total Interactions:</span>
                  <span className="font-medium">{aiLearningMetrics.totalInteractions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Learning Hours:</span>
                  <span className="font-medium">{aiLearningMetrics.continuousLearningHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Adaptation Rate:</span>
                  <span className="font-medium">{aiLearningMetrics.adaptationRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Customer Satisfaction:</span>
                  <span className="font-medium">{aiLearningMetrics.customerSatisfactionFromAI}%</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h5 className="font-medium text-pink-800 mb-2">Relationship Building</h5>
              <ul className="space-y-1 text-sm text-pink-700">
                <li>• Builds long-term supplier relationships</li>
                <li>• Remembers supplier preferences and history</li>
                <li>• Celebrates supplier successes and milestones</li>
                <li>• Maintains consistent, friendly communication</li>
                <li>• Resolves issues with empathy and understanding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBanking = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-stone-800">AI Banking Access & Management</h3>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-blue-600">
            {bankingAccess.securityLevel.toUpperCase()} Security • ${bankingAccess.accountBalance.toLocaleString()} Managed
          </span>
        </div>
      </div>

      {/* Banking Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Banknote className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-emerald-600">${bankingAccess.accountBalance.toLocaleString()}</span>
          </div>
          <p className="text-stone-600">Account Balance</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">{bankingAccess.transactionsToday}</span>
          </div>
          <p className="text-stone-600">Transactions Today</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Lock className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold text-red-600">{bankingAccess.securityLevel.toUpperCase()}</span>
          </div>
          <p className="text-stone-600">Security Level</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">{bankingAccess.pendingTransactions}</span>
          </div>
          <p className="text-stone-600">Pending Transactions</p>
        </div>
      </div>

      {/* Banking Limits & Security */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4 flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2" />
          AI Banking Limits & Security Protocols
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h5 className="font-medium text-blue-800 mb-2">Transaction Limits</h5>
              <div className="space-y-2 text-sm text-blue-700">
                <div className="flex justify-between">
                  <span>Daily Limit:</span>
                  <span className="font-medium">${bankingAccess.dailyTransactionLimit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Limit:</span>
                  <span className="font-medium">${bankingAccess.monthlyTransactionLimit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Per Transaction:</span>
                  <span className="font-medium">$10,000 max</span>
                </div>
                <div className="flex justify-between">
                  <span>Used Today:</span>
                  <span className="font-medium">{bankingAccess.transactionsToday} transactions</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h5 className="font-medium text-green-800 mb-2">Automated Features</h5>
              <div className="space-y-2 text-sm text-green-700">
                <div className="flex items-center justify-between">
                  <span>Customer Deposits:</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getBankingStatusColor(bankingAccess.autoDepositsEnabled)}`}>
                    {bankingAccess.autoDepositsEnabled ? 'ENABLED' : 'DISABLED'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Supplier Payments:</span>
                  <span className={`px-2 py-1 text-xs rounded-full ${getBankingStatusColor(bankingAccess.autoWithdrawalsEnabled)}`}>
                    {bankingAccess.autoWithdrawalsEnabled ? 'ENABLED' : 'DISABLED'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Commission Calculations:</span>
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h5 className="font-medium text-red-800 mb-2">Security Protocols</h5>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• Multi-factor authentication required</li>
                <li>• Real-time fraud detection active</li>
                <li>• Encrypted API connections only</li>
                <li>• Business transactions only authorized</li>
                <li>• Daily transaction monitoring</li>
                <li>• Automatic suspicious activity alerts</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">AI Restrictions</h5>
              <ul className="space-y-1 text-sm text-purple-700">
                <li>• Cannot access personal accounts</li>
                <li>• Limited to business operations only</li>
                <li>• Supplier payments pre-authorized</li>
                <li>• Customer deposits automated</li>
                <li>• No cash withdrawals permitted</li>
                <li>• All transactions logged and monitored</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Banking Activities */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Recent AI Banking Activities</h4>
        <div className="space-y-3">
          {recentAIActivities
            .filter(activity => activity.type === 'banking')
            .map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-50/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Banknote className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-stone-800">{activity.activity}</p>
                    <p className="text-sm text-stone-500">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    {activity.amount && (
                      <span className="font-bold text-blue-600">${activity.amount}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const sections = [
    { id: 'overview', label: 'Overview', icon: PieChart },
    { id: 'transactions', label: 'Transactions', icon: Receipt },
    { id: 'commissions', label: 'Commission Sales', icon: Target },
    { id: 'ai-communication', label: 'AI Communication', icon: MessageCircle },
    { id: 'banking', label: 'AI Banking', icon: Banknote },
    { id: 'taxes', label: 'Tax Management', icon: Calculator },
    { id: 'legal', label: 'Legal & Compliance', icon: Shield },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">Bookkeeping & Legal Compliance</h2>
        <div className="flex items-center space-x-4">
          <p className="text-stone-600">AI-powered financial management and legal compliance automation</p>
          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
            AI Automation: {aiBookkeepingStats.automationAccuracy}% accuracy
          </span>
        </div>
      </div>

      {/* AI Financial Intelligence */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <Bot className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold text-stone-800">AI Financial Intelligence</h3>
          <span className="text-sm text-green-600">Processing {aiBookkeepingStats.processedTransactions.toLocaleString()} transactions</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Automation Accuracy</h4>
            <p className="text-2xl font-bold text-green-600">{aiLearningMetrics.learningAccuracy}%</p>
            <p className="text-sm text-stone-600">Continuous learning</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Communication Score</h4>
            <p className="text-2xl font-bold text-blue-600">{aiLearningMetrics.communicationTone}/10</p>
            <p className="text-sm text-stone-600">Politeness & friendliness</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Banking Security</h4>
            <p className="text-2xl font-bold text-emerald-600">{bankingAccess.securityLevel.toUpperCase()}</p>
            <p className="text-sm text-stone-600">Protection level</p>
          </div>
          <div className="bg-white/50 rounded-lg p-4">
            <h4 className="font-medium text-stone-800 mb-2">Relationship Score</h4>
            <p className="text-2xl font-bold text-purple-600">{aiLearningMetrics.supplierRelationshipScore}/10</p>
            <p className="text-sm text-stone-600">Supplier satisfaction</p>
          </div>
        </div>
      </div>
      {/* Section Navigation */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-stone-200">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-emerald-100 text-emerald-700 shadow-sm'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      {activeSection === 'overview' && renderOverview()}
      {activeSection === 'transactions' && renderTransactions()}
      {activeSection === 'commissions' && renderCommissions()}
      {activeSection === 'ai-communication' && renderAICommunication()}
      {activeSection === 'banking' && renderBanking()}
      {activeSection === 'taxes' && renderTaxes()}
      {activeSection === 'legal' && renderLegal()}
    </div>
  );
};

export default BookkeepingPanel;