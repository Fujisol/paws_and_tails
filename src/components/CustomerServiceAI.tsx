import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Bot, 
  User, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  Heart, 
  Star, 
  Search, 
  Filter,
  Send,
  Phone,
  Mail,
  Headphones,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  Brain,
  Zap,
  Target,
  Users,
  MessageSquare,
  Smile,
  Award,
  AlertTriangle,
  X
} from 'lucide-react';

interface CustomerTicket {
  id: string;
  customer: string;
  email: string;
  subject: string;
  category: 'product-inquiry' | 'order-issue' | 'shipping' | 'technical' | 'billing' | 'general';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: string;
  lastResponse: string;
  messages: Array<{
    id: string;
    sender: 'customer' | 'ai' | 'human';
    message: string;
    timestamp: string;
    sentiment?: 'positive' | 'neutral' | 'negative';
    aiConfidence?: number;
  }>;
  satisfactionRating?: number;
  resolutionTime?: number;
  aiHandled: boolean;
}

interface AILearningMetrics {
  totalInteractions: number;
  satisfactionScore: number;
  resolutionAccuracy: number;
  responseTime: number;
  learningDataPoints: number;
  improvementRate: number;
  sentimentAnalysisAccuracy: number;
  escalationRate: number;
}

const CustomerServiceAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedTicket, setSelectedTicket] = useState<CustomerTicket | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showAIAlerts, setShowAIAlerts] = useState(false);
  const [learningFromResolution, setLearningFromResolution] = useState(null);

  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setSelectedTicket(null);
        setShowAIAlerts(false);
        setLearningFromResolution(null);
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, []);

  // Mock AI issues that can't be resolved automatically
  const aiUnresolvedIssues = [
    {
      id: 'AI-001',
      type: 'escalation_required',
      priority: 'high',
      title: 'Complex Legal Cannabis Question',
      description: 'Customer asking about specific state regulations that require human legal expertise',
      customer: 'John Martinez',
      ticketId: 'CS-001',
      timestamp: '8 minutes ago',
      aiConfidence: 45.2
    },
    {
      id: 'AI-002',
      type: 'sentiment_critical',
      priority: 'urgent',
      title: 'Highly Negative Customer Sentiment',
      description: 'Customer extremely upset about delayed THCA shipment - requires human empathy',
      customer: 'Sarah Wilson',
      ticketId: 'CS-003',
      timestamp: '15 minutes ago',
      aiConfidence: 23.8
    },
    {
      id: 'AI-003',
      type: 'knowledge_gap',
      priority: 'medium',
      title: 'Product Knowledge Gap',
      description: 'Question about new SpiderFarmer model not in AI training data',
      customer: 'Mike Rodriguez',
      ticketId: 'CS-005',
      timestamp: '22 minutes ago',
      aiConfidence: 38.5
    }
  ];

  const criticalAIIssues = aiUnresolvedIssues.filter(issue => 
    issue.priority === 'urgent' || issue.priority === 'high'
  ).length;
  const [aiMetrics, setAiMetrics] = useState<AILearningMetrics>({
    totalInteractions: 15847,
    satisfactionScore: 4.7,
    resolutionAccuracy: 94.3,
    responseTime: 0.8, // seconds
    learningDataPoints: 234567,
    improvementRate: 23.4,
    sentimentAnalysisAccuracy: 96.8,
    escalationRate: 2.1
  });

  const tickets: CustomerTicket[] = [
    {
      id: 'CS-001',
      customer: 'John Martinez',
      email: 'john.martinez@email.com',
      subject: 'Question about SpiderFarmer SF-4000 LED specifications',
      category: 'product-inquiry',
      priority: 'medium',
      status: 'resolved',
      createdAt: '2024-01-23 14:30',
      lastResponse: '2024-01-23 14:32',
      aiHandled: true,
      satisfactionRating: 5,
      resolutionTime: 2,
      messages: [
        {
          id: 'msg-1',
          sender: 'customer',
          message: 'Hi, I\'m interested in the SpiderFarmer SF-4000 LED grow light. Can you tell me about the power consumption and coverage area?',
          timestamp: '2024-01-23 14:30',
          sentiment: 'neutral'
        },
        {
          id: 'msg-2',
          sender: 'ai',
          message: 'Hello John! 😊 I\'d be happy to help you with the SpiderFarmer SF-4000 specifications! This is an excellent choice for indoor growing. The SF-4000 consumes 450W of power and provides optimal coverage for a 4x4 ft area during flowering, or up to 5x5 ft during vegetation. It features Samsung LM301B diodes and delivers exceptional PAR values. Would you like more details about any specific aspect?',
          timestamp: '2024-01-23 14:31',
          sentiment: 'positive',
          aiConfidence: 98.5
        },
        {
          id: 'msg-3',
          sender: 'customer',
          message: 'Perfect! That\'s exactly what I needed to know. Thank you so much!',
          timestamp: '2024-01-23 14:32',
          sentiment: 'positive'
        }
      ]
    },
    {
      id: 'CS-002',
      customer: 'Sarah Chen',
      email: 'sarah.chen@email.com',
      subject: 'THCA flower shipping question',
      category: 'shipping',
      priority: 'high',
      status: 'in-progress',
      createdAt: '2024-01-23 15:45',
      lastResponse: '2024-01-23 15:47',
      aiHandled: true,
      messages: [
        {
          id: 'msg-4',
          sender: 'customer',
          message: 'I ordered THCA flower yesterday but I\'m concerned about shipping to my state. Is it legal?',
          timestamp: '2024-01-23 15:45',
          sentiment: 'negative'
        },
        {
          id: 'msg-5',
          sender: 'ai',
          message: 'Hi Sarah! I completely understand your concern, and I\'m here to help ease your mind. 🌿 Our THCA products are federally legal under the 2018 Farm Bill as they contain less than 0.3% Delta-9 THC. We ship to all 50 states where hemp products are legal. Your order includes full lab testing certificates (COA) for transparency. However, I recommend checking your local state laws as they can vary. Would you like me to provide specific information about your state\'s regulations?',
          timestamp: '2024-01-23 15:47',
          sentiment: 'positive',
          aiConfidence: 96.2
        }
      ]
    },
    {
      id: 'CS-003',
      customer: 'Mike Rodriguez',
      email: 'mike.rodriguez@email.com',
      subject: 'Order #ORD-005 delivery delay',
      category: 'order-issue',
      priority: 'high',
      status: 'resolved',
      createdAt: '2024-01-23 10:15',
      lastResponse: '2024-01-23 10:45',
      aiHandled: true,
      satisfactionRating: 4,
      resolutionTime: 30,
      messages: [
        {
          id: 'msg-6',
          sender: 'customer',
          message: 'My order was supposed to arrive today but the tracking shows it\'s delayed. I need this equipment for my grow setup this weekend.',
          timestamp: '2024-01-23 10:15',
          sentiment: 'negative'
        },
        {
          id: 'msg-7',
          sender: 'ai',
          message: 'Hi Mike! I sincerely apologize for the delay with your order #ORD-005. I understand how important timing is for your grow setup, and I want to make this right. 🙏 I\'ve checked with our shipping partner and there was a weather-related delay in your area. Your SpiderFarmer equipment is now priority shipped and will arrive tomorrow by 2 PM. As an apology, I\'ve applied a 15% discount to your next order. Is there anything else I can do to help with your grow setup timing?',
          timestamp: '2024-01-23 10:18',
          sentiment: 'positive',
          aiConfidence: 94.7
        },
        {
          id: 'msg-8',
          sender: 'customer',
          message: 'Thank you for the quick response and the discount. That helps a lot!',
          timestamp: '2024-01-23 10:45',
          sentiment: 'positive'
        }
      ]
    },
    {
      id: 'CS-004',
      customer: 'Lisa Thompson',
      email: 'lisa.thompson@email.com',
      subject: 'CBD tincture dosage guidance',
      category: 'product-inquiry',
      priority: 'medium',
      status: 'resolved',
      createdAt: '2024-01-23 16:20',
      lastResponse: '2024-01-23 16:25',
      aiHandled: true,
      satisfactionRating: 5,
      resolutionTime: 5,
      messages: [
        {
          id: 'msg-9',
          sender: 'customer',
          message: 'I\'m new to CBD and just received my 1000mg tincture. What dosage should I start with?',
          timestamp: '2024-01-23 16:20',
          sentiment: 'neutral'
        },
        {
          id: 'msg-10',
          sender: 'ai',
          message: 'Hello Lisa! Welcome to the world of CBD wellness! 🌿 I\'m excited to help you start your journey safely. For beginners, I always recommend starting low and going slow. Begin with 5-10mg (about 1/4 dropper) once daily, preferably in the evening. Hold it under your tongue for 60 seconds before swallowing for best absorption. Monitor how you feel for 3-5 days, then gradually increase by 5mg if needed. Everyone\'s body responds differently, so patience is key! Remember, this is not medical advice - please consult your healthcare provider for personalized guidance. How are you feeling about starting your CBD journey?',
          timestamp: '2024-01-23 16:25',
          sentiment: 'positive',
          aiConfidence: 97.3
        }
      ]
    },
    {
      id: 'CS-005',
      customer: 'David Park',
      email: 'david.park@email.com',
      subject: 'Hydroponic system setup help',
      category: 'technical',
      priority: 'medium',
      status: 'open',
      createdAt: '2024-01-23 17:10',
      lastResponse: '2024-01-23 17:12',
      aiHandled: true,
      messages: [
        {
          id: 'msg-11',
          sender: 'customer',
          message: 'I just received my 6-plant hydroponic system but I\'m confused about the nutrient mixing ratios. Can you help?',
          timestamp: '2024-01-23 17:10',
          sentiment: 'neutral'
        },
        {
          id: 'msg-12',
          sender: 'ai',
          message: 'Hi David! Congratulations on your new hydroponic system! 🌱 I\'d love to help you get started successfully. For the 6-plant system, here\'s a beginner-friendly approach:\n\n**Seedling Stage (Week 1-2):** 200-400 PPM, pH 5.5-6.0\n**Vegetative Stage (Week 3-6):** 400-800 PPM, pH 5.5-6.0\n**Flowering Stage (Week 7+):** 800-1200 PPM, pH 6.0-6.5\n\nStart with 1/4 strength nutrients and gradually increase. Always check pH after adding nutrients! I\'m also sending you our detailed setup guide via email. Would you like me to walk you through the initial setup step by step?',
          timestamp: '2024-01-23 17:12',
          sentiment: 'positive',
          aiConfidence: 95.8
        }
      ]
    }
  ];

  const categories = ['all', 'product-inquiry', 'order-issue', 'shipping', 'technical', 'billing', 'general'];
  const statuses = ['all', 'open', 'in-progress', 'resolved', 'closed'];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || ticket.category === filterCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-700';
      case 'in-progress': return 'bg-yellow-100 text-yellow-700';
      case 'resolved': return 'bg-emerald-100 text-emerald-700';
      case 'closed': return 'bg-stone-100 text-stone-700';
      default: return 'bg-stone-100 text-stone-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-white';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-stone-500 text-white';
    }
  };

  const getSentimentColor = (sentiment?: string) => {
    switch (sentiment) {
      case 'positive': return 'text-emerald-600';
      case 'negative': return 'text-red-600';
      case 'neutral': return 'text-stone-600';
      default: return 'text-stone-600';
    }
  };

  const ticketStats = {
    total: tickets.length,
    open: tickets.filter(t => t.status === 'open').length,
    inProgress: tickets.filter(t => t.status === 'in-progress').length,
    resolved: tickets.filter(t => t.status === 'resolved').length,
    aiHandled: tickets.filter(t => t.aiHandled).length,
    avgSatisfaction: tickets.filter(t => t.satisfactionRating).reduce((sum, t) => sum + (t.satisfactionRating || 0), 0) / tickets.filter(t => t.satisfactionRating).length,
    avgResolutionTime: tickets.filter(t => t.resolutionTime).reduce((sum, t) => sum + (t.resolutionTime || 0), 0) / tickets.filter(t => t.resolutionTime).length
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* AI Learning Status */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="h-8 w-8 text-emerald-600" />
          <div>
            <h3 className="text-xl font-semibold text-stone-800">AI Customer Service Intelligence</h3>
            <p className="text-sm text-emerald-600">Learning AI • {aiMetrics.resolutionAccuracy}% accuracy • +{aiMetrics.improvementRate}% improvement this month</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <MessageCircle className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-stone-800">Total Interactions</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">{aiMetrics.totalInteractions.toLocaleString()}</p>
            <p className="text-sm text-stone-600">Customer conversations</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-pink-600" />
              <span className="font-medium text-stone-800">Satisfaction Score</span>
            </div>
            <p className="text-2xl font-bold text-pink-600">{aiMetrics.satisfactionScore}/5.0</p>
            <p className="text-sm text-stone-600">Customer happiness rating</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-stone-800">Response Time</span>
            </div>
            <p className="text-2xl font-bold text-purple-600">{aiMetrics.responseTime}s</p>
            <p className="text-sm text-stone-600">Average AI response</p>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="h-5 w-5 text-orange-600" />
              <span className="font-medium text-stone-800">Resolution Rate</span>
            </div>
            <p className="text-2xl font-bold text-orange-600">{aiMetrics.resolutionAccuracy}%</p>
            <p className="text-sm text-stone-600">Successful resolutions</p>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <MessageSquare className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-stone-800">{ticketStats.total}</span>
          </div>
          <p className="text-stone-600">Total Tickets</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Bot className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-stone-800">{ticketStats.aiHandled}</span>
          </div>
          <p className="text-stone-600">AI Handled</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Star className="h-8 w-8 text-yellow-600" />
            <span className="text-2xl font-bold text-stone-800">{ticketStats.avgSatisfaction.toFixed(1)}</span>
          </div>
          <p className="text-stone-600">Avg Satisfaction</p>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <div className="flex items-center justify-between mb-4">
            <Clock className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-stone-800">{ticketStats.avgResolutionTime.toFixed(0)}m</span>
          </div>
          <p className="text-stone-600">Avg Resolution Time</p>
        </div>
      </div>

      {/* AI Learning Insights */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center">
          <Brain className="h-5 w-5 text-emerald-600 mr-2" />
          AI Learning Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <h4 className="font-medium text-emerald-800 mb-2">Top Learning Improvements</h4>
              <ul className="space-y-2 text-sm text-emerald-700">
                <li>• Cannabis product knowledge accuracy: +34.2%</li>
                <li>• Shipping inquiry resolution: +28.7%</li>
                <li>• Technical support effectiveness: +31.5%</li>
                <li>• Customer sentiment detection: +25.3%</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Response Patterns Learned</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• THCA questions need legal compliance info</li>
                <li>• Growing equipment requires technical details</li>
                <li>• Shipping delays need proactive compensation</li>
                <li>• CBD dosage needs safety disclaimers</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-medium text-purple-800 mb-2">Sentiment Analysis Improvements</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Positive Detection:</span>
                  <span className="font-medium text-purple-800">97.2% (+12.3%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Negative Detection:</span>
                  <span className="font-medium text-purple-800">95.8% (+18.7%)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-purple-700">Escalation Prevention:</span>
                  <span className="font-medium text-purple-800">89.4% (+23.1%)</span>
                </div>
              </div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h4 className="font-medium text-orange-800 mb-2">Cannabis Industry Specialization</h4>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>• Legal compliance knowledge: Expert level</li>
                <li>• Product safety information: Comprehensive</li>
                <li>• Growing guidance: Advanced techniques</li>
                <li>• Dosage recommendations: Safety-first approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent AI Interactions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h3 className="text-xl font-semibold text-stone-800 mb-4">Recent AI Interactions</h3>
        <div className="space-y-4">
          {tickets.slice(0, 3).map((ticket) => (
            <div key={ticket.id} className="p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Bot className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium text-stone-800">{ticket.customer}</p>
                    <p className="text-sm text-stone-500">{ticket.subject}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {ticket.satisfactionRating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-stone-800">{ticket.satisfactionRating}</span>
                    </div>
                  )}
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
              </div>
              <p className="text-sm text-stone-600 line-clamp-2">
                {ticket.messages[ticket.messages.length - 1]?.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTickets = () => (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search tickets, customers, or subjects..."
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
                {status === 'all' ? 'All Statuses' : status.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category.replace('-', ' ').toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tickets List */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-stone-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-stone-50 border-b border-stone-200">
              <tr>
                <th className="text-left p-4 font-semibold text-stone-800">Customer</th>
                <th className="text-left p-4 font-semibold text-stone-800">Subject</th>
                <th className="text-left p-4 font-semibold text-stone-800">Category</th>
                <th className="text-left p-4 font-semibold text-stone-800">Priority</th>
                <th className="text-left p-4 font-semibold text-stone-800">Status</th>
                <th className="text-left p-4 font-semibold text-stone-800">AI Handled</th>
                <th className="text-left p-4 font-semibold text-stone-800">Satisfaction</th>
                <th className="text-left p-4 font-semibold text-stone-800">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-stone-50/50">
                  <td className="p-4">
                    <div className="font-medium text-stone-800">{ticket.customer}</div>
                    <div className="text-sm text-stone-500">{ticket.email}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-stone-800">{ticket.subject}</div>
                    <div className="text-sm text-stone-500">{ticket.createdAt}</div>
                  </td>
                  <td className="p-4 text-stone-600 capitalize">{ticket.category.replace('-', ' ')}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(ticket.status)}`}>
                      {ticket.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4">
                    {ticket.aiHandled ? (
                      <Bot className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <User className="h-5 w-5 text-blue-600" />
                    )}
                  </td>
                  <td className="p-4">
                    {ticket.satisfactionRating ? (
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-medium text-stone-800">{ticket.satisfactionRating}</span>
                      </div>
                    ) : (
                      <span className="text-stone-400">—</span>
                    )}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => setSelectedTicket(ticket)}
                      className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
                    >
                      View
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

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-stone-800">AI Performance Analytics</h3>

      {/* AI Learning Progress */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">AI Learning Progress Over Time</h4>
        <div className="h-64 bg-stone-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="h-12 w-12 text-stone-400 mx-auto mb-2" />
            <p className="text-stone-500">AI learning progress chart would be displayed here</p>
            <p className="text-sm text-stone-400">Showing improvement in resolution accuracy, response time, and satisfaction</p>
          </div>
        </div>
      </div>

      {/* Category Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h4 className="font-semibold text-stone-800 mb-4">Performance by Category</h4>
          <div className="space-y-4">
            {[
              { category: 'Product Inquiry', accuracy: 97.2, satisfaction: 4.8 },
              { category: 'Order Issues', accuracy: 94.5, satisfaction: 4.6 },
              { category: 'Shipping', accuracy: 96.8, satisfaction: 4.7 },
              { category: 'Technical', accuracy: 92.3, satisfaction: 4.5 },
              { category: 'Billing', accuracy: 98.1, satisfaction: 4.9 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-stone-50/50 rounded-lg">
                <span className="font-medium text-stone-800">{item.category}</span>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-emerald-600">{item.accuracy}% accuracy</span>
                  <span className="text-yellow-600">{item.satisfaction}/5.0 satisfaction</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
          <h4 className="font-semibold text-stone-800 mb-4">AI Learning Metrics</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Learning Data Points</span>
              <span className="font-bold text-purple-600">{aiMetrics.learningDataPoints.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Sentiment Analysis Accuracy</span>
              <span className="font-bold text-blue-600">{aiMetrics.sentimentAnalysisAccuracy}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Escalation Rate</span>
              <span className="font-bold text-green-600">{aiMetrics.escalationRate}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-stone-600">Monthly Improvement</span>
              <span className="font-bold text-orange-600">+{aiMetrics.improvementRate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top AI Responses */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-stone-200">
        <h4 className="font-semibold text-stone-800 mb-4">Most Effective AI Responses</h4>
        <div className="space-y-4">
          {[
            { 
              category: 'THCA Legal Questions', 
              response: 'Comprehensive legal compliance explanation with state-specific guidance',
              satisfaction: 4.9,
              usage: 234
            },
            { 
              category: 'Growing Equipment Setup', 
              response: 'Step-by-step technical guidance with safety considerations',
              satisfaction: 4.8,
              usage: 189
            },
            { 
              category: 'CBD Dosage Guidance', 
              response: 'Safe dosage recommendations with medical disclaimers',
              satisfaction: 4.7,
              usage: 156
            }
          ].map((item, index) => (
            <div key={index} className="p-4 bg-stone-50/50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h5 className="font-medium text-stone-800">{item.category}</h5>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-yellow-600">{item.satisfaction}/5.0</span>
                  <span className="text-blue-600">{item.usage} uses</span>
                </div>
              </div>
              <p className="text-sm text-stone-600">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'AI Dashboard', icon: BarChart3 },
    { id: 'tickets', label: 'Support Tickets', icon: MessageCircle },
    { id: 'analytics', label: 'AI Analytics', icon: TrendingUp },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-accent-400 dark:to-accent-300 bg-clip-text text-transparent mb-2">AI Customer Service</h2>
        <p className="text-stone-600">Intelligent, learning customer support for cannabis & growing equipment</p>
          <button
            onClick={() => setShowAIAlerts(true)}
            className="relative bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all duration-200 animate-pulse"
            title="AI Unresolved Issues"
          >
            <AlertTriangle className="h-5 w-5" />
            {criticalAIIssues > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {criticalAIIssues}
              </span>
            )}
          </button>
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
      {activeTab === 'dashboard' && renderDashboard()}
      {activeTab === 'tickets' && renderTickets()}
      {activeTab === 'analytics' && renderAnalytics()}

      {/* Ticket Detail Modal */}
      {selectedTicket && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedTicket(null);
            }
          }}
        >
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-800">{selectedTicket.subject}</h3>
                  <p className="text-stone-600">{selectedTicket.customer} • {selectedTicket.email}</p>
                </div>
                <button
                  onClick={() => setSelectedTicket(null)}
                  className="text-stone-400 hover:text-stone-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                {selectedTicket.messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'customer' ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-2xl p-4 rounded-lg ${
                      message.sender === 'customer' 
                        ? 'bg-stone-100 text-stone-800' 
                        : 'bg-emerald-500 text-white'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        {message.sender === 'customer' ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                        <span className="text-sm font-medium">
                          {message.sender === 'customer' ? 'Customer' : 'AI Assistant'}
                        </span>
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                        {message.aiConfidence && (
                          <span className="text-xs opacity-70">
                            {message.aiConfidence}% confidence
                          </span>
                        )}
                      </div>
                      <p className="whitespace-pre-wrap">{message.message}</p>
                      {message.sentiment && (
                        <div className={`text-xs mt-2 ${getSentimentColor(message.sentiment)}`}>
                          Sentiment: {message.sentiment}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedTicket.status)}`}>
                    {selectedTicket.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${getPriorityColor(selectedTicket.priority)}`}>
                    {selectedTicket.priority.toUpperCase()}
                  </span>
                  {selectedTicket.aiHandled && (
                    <span className="px-3 py-1 text-sm bg-emerald-100 text-emerald-700 rounded-full">
                      AI Handled
                    </span>
                  )}
                </div>
                {selectedTicket.satisfactionRating && (
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-medium text-stone-800">{selectedTicket.satisfactionRating}/5</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Unresolved Issues Modal */}
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
                  <h3 className="text-xl font-bold text-stone-800 dark:text-grey-100">AI Unresolved Issues</h3>
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-sm rounded-full">
                    {aiUnresolvedIssues.length} Issues Need Human Intervention
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
                      <span className="font-medium">Customer:</span> {issue.customer}
                      <span className="ml-4">• Ticket: {issue.ticketId}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button className="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                        Take Over
                      </button>
                      <button className="px-3 py-1 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm">
                        Escalate to Human
                      </button>
                      <button className="px-3 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm">
                        Train AI
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t dark:border-grey-600">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-stone-600 dark:text-grey-300">
                    AI Resolution Rate: {((aiMetrics.totalInteractions - aiUnresolvedIssues.length) / aiMetrics.totalInteractions * 100).toFixed(1)}%
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

export default CustomerServiceAI;