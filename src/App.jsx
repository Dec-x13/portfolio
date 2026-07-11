import React, { useState } from 'react';
import { 
  Menu, 
  Download, 
  MapPin, 
  Check, 
  Award, 
  User, 
  Shield, 
  Globe, 
  ExternalLink, 
  CheckCircle, 
  Mail, 
  Calendar, 
  Users, 
  FileText, 
  ShoppingCart, 
  TrendingUp, 
  ChevronDown, 
  Quote, 
  Phone, 
  Clock 
} from 'lucide-react';

const Facebook = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const toolCategories = [
  {
    id: 1,
    title: "CRM & Support Systems",
    desc: "Platforms utilized for client lifecycle management, customer ticketing, and operational databases.",
    tools: [
      { name: "HubSpot CRM", logo: "hubspot" },
      { name: "Zoho CRM", logo: "zoho" },
      { name: "Salesforce", logo: "logos/salesforce.png" },
      { name: "Pipedrive", logo: "logos/png-transparent-pipedrive-app-logo-tech-companies-thumbnail.png" },
      { name: "Monday CRM", logo: "logos/monday-logo-png_seeklogo-394605.png" },
      { name: "Shopify", logo: "shopify" },
      { name: "Zendesk", logo: "zendesk" },
      { name: "Oracle", logo: "logos/png-clipart-logo-oracle-corporation-oracle-crm-bluekai-brand-erp-icon-company-text.png" },
      { name: "Notion", logo: "notion" },
      { name: "Intercom", logo: "intercom" },
      { name: "Gorgias", logo: "logos/gorglas.png" },
      { name: "Re:amaze", logo: "logos/re_amaze.png" },
      { name: "Follow Up Boss", logo: "logos/FUB Logo Mark RGB_Fub Logo Mark Main.png" },
      { name: "Connectwise", logo: "logos/connectwise.png" },
      { name: "KW Command", logo: "logos/KW Command.png" },
      { name: "GoHighLevel", logo: "logos/GoHigh Level.png" },
      { name: "Clear Feed", logo: "logos/clearfeed.png" }
    ]
  },
  {
    id: 2,
    title: "Communication Apps",
    desc: "Tools managed daily for synchronizing and aligning distributed remote teams.",
    tools: [
      { name: "Slack", logo: "logos/png-transparent-chat-slack-slack-logo-social-media-icon-thumbnail.png" },
      { name: "MS Teams", logo: "logos/Microsoft-Teams-Logo.png" },
      { name: "Zoom", logo: "zoom" },
      { name: "Google Meet", logo: "googlemeet" },
      { name: "Discord", logo: "discord" },
      { name: "WhatsApp", logo: "whatsapp" },
      { name: "Telegram", logo: "telegram" },
      { name: "RingCentral", logo: "logos/ring_central.png" },
      { name: "Twilio", logo: "logos/png-transparent-twilio-full-logo-tech-companies-thumbnail.png" },
      { name: "Phone Quo", logo: "", initials: "PQ" }
    ]
  },
  {
    id: 3,
    title: "Reporting & Automations",
    desc: "Analytical and system connectors to extract reports and automate repeating flows.",
    tools: [
      { name: "Tableau", logo: "logos/tableau-software-logo-png_seeklogo-222998.png" },
      { name: "Power BI", logo: "logos/Power-BI-Logo-2013.png" },
      { name: "Google Sheets", logo: "googlesheets" },
      { name: "MS Excel", logo: "logos/png-transparent-microsoft-excel-logo.png" },
      { name: "Zapier", logo: "zapier" },
      { name: "Shopify Analytics", logo: "shopify" }
    ]
  },
  {
    id: 4,
    title: "Shipping & Logistics Apps",
    desc: "Fulfillment and courier sync trackers for inventory control and shipment accuracy.",
    tools: [
      { name: "Shippo", logo: "logos/shippo.png" },
      { name: "AfterShip", logo: "aftership" },
      { name: "FedEx", logo: "fedex" },
      { name: "UPS", logo: "ups" },
      { name: "DHL", logo: "dhl" },
      { name: "17track", logo: "logos/17track-icon-filled-256.png" },
      { name: "ShipHero", logo: "logos/shiphero.png" },
      { name: "Logiwa", logo: "logos/logiwa.png" }
    ]
  },
  {
    id: 5,
    title: "Financial & Invoicing Tools",
    desc: "Managing general ledgers, transactions, invoices, and client collection portals.",
    tools: [
      { name: "QuickBooks", logo: "quickbooks" },
      { name: "FreshBooks", logo: "logos/freshbooks-logo-png_seeklogo-431917.png" },
      { name: "Zoho Books", logo: "zoho" },
      { name: "Stripe", logo: "stripe" },
      { name: "PayPal", logo: "paypal" },
      { name: "Payoneer", logo: "payoneer" }
    ]
  },
  {
    id: 6,
    title: "Productivity & Scheduling",
    desc: "Workspace organization frameworks and calendar automation applications.",
    tools: [
      { name: "ClickUp", logo: "clickup" },
      { name: "Asana", logo: "asana" },
      { name: "Trello", logo: "trello" },
      { name: "Todoist", logo: "todoist" },
      { name: "Workspace", logo: "logos/workspace.jpg" },
      { name: "Calendly", logo: "calendly" }
    ]
  }
];

const services = [
  {
    id: 1,
    title: "Email Management",
    icon: Mail,
    desc: "Tame your inbox with efficient organization, filtering, and response handling.",
    checklist: ["Inbox organization", "Priority flagging", "Template responses"]
  },
  {
    id: 2,
    title: "Calendar Management",
    icon: Calendar,
    desc: "Never miss an appointment with seamless scheduling, bookings, and notifications.",
    checklist: ["Appointment scheduling", "Meeting coordination", "Time zone management"]
  },
  {
    id: 3,
    title: "Social Media Management",
    icon: Users,
    desc: "Maintain a consistent, professional online brand presence without the hassle.",
    checklist: ["Content scheduling", "Engagement tracking", "Basic graphic design"]
  },
  {
    id: 4,
    title: "Document Preparation",
    icon: FileText,
    desc: "Professional documents, spreadsheets, and slides created to your exact specifications.",
    checklist: ["Reports & presentations", "Spreadsheets & databases", "Formatting & editing"]
  },
  {
    id: 5,
    title: "Personal Assistance",
    icon: ShoppingCart,
    desc: "Offload personal booking and coordinating tasks to free up your schedule.",
    checklist: ["Gift ordering", "Travel arrangements", "Event planning"]
  },
  {
    id: 6,
    title: "Special Projects",
    icon: TrendingUp,
    desc: "Custom analysis, research, and support for your unique business initiatives.",
    checklist: ["Research projects", "Data entry", "Process documentation"]
  }
];

const jobs = [
  {
    id: 1,
    title: "Shipping Assistant — Conturve LTD",
    dates: "Feb 2024 – Sept 2025",
    bullets: [
      "Handled accurate picking, packing, labeling, and documentation of shipments.",
      "Coordinated with couriers, tracked deliveries, and managed inventory levels.",
      "Ensured efficient logistics and maintained clean, organized operations."
    ]
  },
  {
    id: 2,
    title: "Executive Assistant — Blake Noe / ReliaBuild (Sphere Rocket)",
    dates: "Dec 2021 – Nov 2022",
    bullets: [
      "Coordinated project timelines, vendor relationships, and client communications.",
      "Maintained CRM systems, prepared proposals, and tracked materials and contracts.",
      "Provided proactive administrative support to leadership and contractors."
    ]
  },
  {
    id: 3,
    title: "Executive Assistant — OVA Virtual",
    dates: "Nov 2020 – Dec 2021",
    bullets: [
      "Supported research and documentation for community and preservation projects.",
      "Coordinated public engagement activities and maintained organized records.",
      "Handled communication between consultants, clients, and agencies."
    ]
  },
  {
    id: 4,
    title: "Team Manager — Sutherland Global Services",
    dates: "2011 – 2018",
    bullets: [
      "Supervised and motivated teams to meet KPIs and maintain service quality.",
      "Led talent development and succession planning initiatives.",
      "Planned, organized, and monitored service delivery for large operations."
    ]
  }
];

const testimonials = [
  {
    id: 1,
    quote: "Darlyn is a very capable team member that has demonstrated great natural leadership qualities. She shows up on time, and is extremely reliable. Darlyn has been a leader since day one with us and has learned quickly to any challenges thrown at her. Darlyn leads by example and always makes good sound decisions. She extends herself to help out fellow teammates and clients. Darlyn handles her daily tasks but also recognizes when things need to be addressed before they could become a problem to members and clients. Darlyn truly is an asset to our team in so many ways and will be missed.",
    author: "Clayton Y.",
    role: "Small Business Owner",
    avatar: "http://static.photos/people/200x200/1"
  },
  {
    id: 2,
    quote: "I hired Dar as a Senior Customer Support Agent for my e-commerce business, and she quickly became one of the most dependable people on our team. From day one, she was responsive, proactive, and highly professional in everything she did. Dar handled customer requests with empathy and precision, often going beyond expectations to ensure every issue was resolved efficiently and kindly.",
    author: "Jort",
    role: "Entrepreneur",
    avatar: "http://static.photos/people/200x200/2"
  },
  {
    id: 3,
    quote: "I had the opportunity to work with Darlyn Ty in the home care industry, where she served as my assistant and helped coordinate communication with caregivers. Darlyn was reliable, polite, and handled daily communication efficiently. She made sure that caregivers received important updates and information on time, which helped our operations run more smoothly.",
    author: "Yvonne Wider",
    role: "Euro Asian",
    avatar: "http://static.photos/people/200x200/3"
  },
  {
    id: 4,
    quote: "I hesitated to hire a VA, but Darlyn made the transition seamless. Her documentation of my processes was so thorough that when I brought on a second assistant, training was a breeze.",
    author: "David P.",
    role: "Consultant",
    avatar: "http://static.photos/people/200x200/4"
  }
];

export default function App() {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-cream-100 text-charcoal min-h-screen flex flex-col justify-between selection:bg-secondary/20 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-cream-100/90 backdrop-blur-md border-b border-charcoal/5 z-50">
        <div className="w-full px-8 md:px-16 lg:px-24">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold text-charcoal tracking-wide">Darlyn Ty</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Home</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">About</a>
                <a href="#tools" onClick={(e) => handleSmoothScroll(e, 'tools')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Tools</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Services</a>
                <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Experience</a>
                <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Testimonials</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="px-1 py-2 text-base font-semibold text-charcoal hover:text-secondary transition duration-300">Contact</a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 text-charcoal hover:text-secondary focus:outline-none cursor-pointer"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-cream-100 border-b border-charcoal/10 shadow-sm py-6 px-8 z-50">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Home</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">About</a>
            <a href="#tools" onClick={(e) => handleSmoothScroll(e, 'tools')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Tools</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Services</a>
            <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Experience</a>
            <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Testimonials</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="block py-3 text-lg font-semibold text-charcoal hover:text-secondary">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-cream-100 border-b border-charcoal/5 overflow-hidden">
        
        <div className="w-full max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-20 lg:py-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Half */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-sm uppercase tracking-widest font-bold text-secondary mb-4 block">Executive Virtual Assistance</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-6 text-charcoal">Reclaim Your Time.</h1>
              <h2 className="text-3xl md:text-4xl font-serif italic mb-8 text-primary font-medium">Executive-Level Virtual Assistance for Busy Professionals.</h2>
              <p className="text-xl text-charcoal/75 mb-10 max-w-xl leading-relaxed font-sans">
                Empowering businesses with efficient support and smart solutions.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="bg-primary hover:bg-primary-dark text-cream-100 font-semibold py-4 px-8 rounded-full transition duration-300 tracking-wide text-base">Let's Work Together</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="border border-charcoal/20 hover:border-charcoal text-charcoal hover:bg-cream-200 font-semibold py-4 px-8 rounded-full transition duration-300 tracking-wide text-base">My Services</a>
              </div>
            
              <a href="https://drive.google.com/file/d/1XVmBFSN-ybgsXfTwUs1pcXoJ4pIgptUY/view?usp=sharing" download className="w-fit border-b border-ochre text-ochre hover:text-ochre-dark font-medium py-1.5 inline-flex items-center gap-2.5 mt-10 text-base transition duration-300">
                <Download className="w-4 h-4" />
                <span>Download Full Resume</span>
              </a>
            </div>
            
            {/* Right Column: Symmetrically Centered Large Circular visual frame */}
            <div className="lg:col-span-5 flex items-center justify-center relative mt-12 lg:mt-0">
              <div className="relative">
                {/* Offset Circular Golden Card Background */}
                <div className="absolute inset-0 bg-ochre-light border border-ochre/25 rounded-full translate-x-5 translate-y-5 -z-10 animate-pulse"></div>
                
                {/* Enlarged Circular image frame */}
                <div className="w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[560px] lg:h-[560px] rounded-full overflow-hidden bg-cream-100 border border-charcoal/10 shadow-lg relative p-3">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-cream-200">
                    <img 
                      src="Mama_Hero_Image.png" 
                      alt="Professional VA Mom" 
                      className="w-full h-full object-cover object-[position:84%_center] transition duration-500 hover:scale-[1.02]" 
                    />
                    {/* Color Blending Overlays */}
                    <div className="absolute inset-0 bg-ochre/12 mix-blend-color pointer-events-none"></div>
                    <div className="absolute inset-0 bg-secondary/5 mix-blend-multiply pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Experience Badge sitting at the bottom-right of the circular region */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-ochre text-cream-100 p-5 md:p-6 border border-charcoal/5 rounded-2xl shadow-xl z-20">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest font-semibold font-sans mb-0.5 text-cream-100/90">Experience</p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">15+ Years</p>
                    <p className="text-[9px] uppercase tracking-widest font-semibold font-sans text-cream-100/70">Management</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* About & Credentials (Bento Grid) */}
      <section id="about" className="py-28 px-8 md:px-16 lg:px-24 bg-cream-200 border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Background & Certification</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">About & Credentials</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-sans">A blend of executive administrative precision and deep operational leadership.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Bento Item 1: About Me Video */}
            <div className="lg:col-span-2 flat-card p-8 rounded-3xl flex flex-col justify-between bg-cream-100 border-charcoal/10">
              <div>
                <h3 className="text-3xl font-serif text-charcoal mb-6">A Message from Darlyn</h3>
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-charcoal/5">
                  <iframe src="https://www.youtube.com/embed/Rc-Kcp0DK0I" title="About Me Video" frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-base text-charcoal/60">
                <p>As a mom of four, I've mastered multitasking and organization, bringing precision to your business.</p>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Bicol, PH</span>
              </div>
            </div>

            {/* Bento Item 2: Highlight */}
            <div className="lg:col-span-1 p-8 rounded-3xl flex flex-col justify-between bg-secondary-light border border-secondary/20 text-secondary-dark font-sans">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-3 block">Enterprise Management</span>
                <h3 className="text-4xl font-serif text-secondary-dark leading-tight mb-6">15+ Years Experience & Enterprise Team Management</h3>
                <p className="text-charcoal/80 mb-8 text-base leading-relaxed">
                  Proven history supervising teams, managing operations, and assisting C-suite executives. Expert in streamlining processes and client relations.
                </p>
              </div>
              <div className="border-t border-secondary/20 pt-6">
                <h4 className="text-xs uppercase font-bold tracking-widest text-secondary-dark mb-3">Core Qualifications</h4>
                <ul className="text-sm text-charcoal/80 space-y-2.5">
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-secondary" /> Operations & Process Improvement</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-secondary" /> 6 Years People & Talent Management</li>
                  <li className="flex items-center gap-2.5"><Check className="w-4 h-4 text-secondary" /> Customer Support Leadership</li>
                </ul>
              </div>
            </div>

            {/* Bento Item 3: Assessments */}
            <div className="lg:col-span-2 p-8 rounded-3xl bg-primary-light border border-primary/20 text-primary-dark font-sans">
              <h3 className="text-3xl font-serif text-primary-dark mb-8">Workplace Personality Profiles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* DISC */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary-dark/80">DISC Profile</h4>
                    <span className="text-xs font-bold text-secondary">Steadiness & Compliance (S/C)</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">S — Steadiness (Supportive, Reliable)</span>
                        <span className="font-bold text-charcoal">88%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">C — Compliance (Precise, Analytical)</span>
                        <span className="font-bold text-charcoal">85%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">I — Influence (Collaborative, Open)</span>
                        <span className="font-bold text-charcoal">75%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">D — Dominance (Results-Oriented)</span>
                        <span className="font-bold text-charcoal">45%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 16 Personalities */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-primary-dark/80">16 Personalities</h4>
                    <span className="text-xs font-bold text-secondary">ESFJ-A (The Consul)</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">Mind: Extraverted</span>
                        <span className="font-bold text-charcoal">72%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-ochre h-full rounded-full" style={{ width: '72%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">Energy: Observant</span>
                        <span className="font-bold text-charcoal">64%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-ochre h-full rounded-full" style={{ width: '64%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">Nature: Feeling</span>
                        <span className="font-bold text-charcoal">68%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-ochre h-full rounded-full" style={{ width: '68%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium text-charcoal">Tactics: Judging</span>
                        <span className="font-bold text-charcoal">80%</span>
                      </div>
                      <div className="w-full bg-cream-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-ochre h-full rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Item 4: Verification Badges */}
            <div className="lg:col-span-1 p-8 rounded-3xl flex flex-col justify-between bg-ochre-light border border-ochre/20 text-[#8C6D3D]">
              <div>
                <h3 className="text-3xl font-serif text-[#785A2E] mb-6">Official Verification</h3>
                <p className="text-charcoal/80 text-base mb-8">Access official certificates, documentation, and verified scoring tests directly.</p>
                <div className="flex flex-wrap gap-2.5">
                  <a href="https://docs.google.com/document/d/1jbegTWhM8zoUA-V2cbzm6NE7KKv3h9Bt/edit?usp=sharing&ouid=113141532057165756669&rtpof=true&sd=true" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <FileText className="w-4 h-4" /> Cover Letter
                  </a>
                  <a href="https://drive.google.com/file/d/15ukwedW4_Emufbo5aT_RSj2S1xxJFWBy/view?usp=sharing" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <Award className="w-4 h-4" /> IQ Test
                  </a>
                  <a href="https://drive.google.com/file/d/1j3J6v6iN0UkD4xt0XwVeZq2-2RmOGD-9/view?usp=sharing" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <User className="w-4 h-4" /> DISC Result
                  </a>
                  <a href="https://drive.google.com/file/d/1OTEajTxed-7jtg_2jiJ0uDONJNbf6lpr/view?usp=sharing" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <Shield className="w-4 h-4" /> HIPAA Cert
                  </a>
                  <a href="https://drive.google.com/file/d/1875Tn2af9508vSRhRFZTdrXe0ialJiY6/view?usp=sharing" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <Globe className="w-4 h-4" /> EF Set Result
                  </a>
                  <a href="https://www.16personalities.com/profiles/ee1f324d5616f" target="_blank" className="custom-btn flex items-center gap-2 text-sm bg-cream-100/50 hover:border-ochre">
                    <ExternalLink className="w-4 h-4" /> 16 Personalities
                  </a>
                </div>
              </div>
              <div className="mt-8 border-t border-ochre/20 pt-4 flex justify-between items-center text-xs text-[#8C6D3D]/80">
                <span>Verified Credentials</span>
                <CheckCircle className="w-4 h-4 text-ochre" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Systems Section */}
      <section id="tools" className="py-28 px-8 md:px-16 lg:px-24 bg-ochre-light/40 border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-wider font-semibold text-[#8C6D3D] mb-3 block">Software Stack</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Tools & Systems</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-sans">Deep technical proficiency in industry-leading business and administrative platforms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category) => (
              <div key={category.id} className="flat-card p-8 rounded-3xl bg-cream-100 flex flex-col justify-between hover:border-ochre/40">
                <div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3 border-b border-charcoal/5 pb-3">{category.title}</h3>
                  <p className="text-sm text-charcoal/60 mb-6 font-sans leading-relaxed">{category.desc}</p>
                  
                  {/* Grid of Brand App Icons */}
                  <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4 justify-items-center mt-6">
                    {category.tools.map((tool, idx) => (
                      <div key={idx} className="group flex flex-col items-center">
                        {/* App Icon Box */}
                        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-cream-100 border border-charcoal/8 rounded-2xl hover:border-ochre hover:shadow-md transition duration-300 p-2.5 md:p-3 relative cursor-default">
                          {tool.logo ? (
                            <img 
                              src={tool.logo.includes('/') ? tool.logo : `https://cdn.simpleicons.org/${tool.logo}`} 
                              alt={tool.name} 
                              className="w-full h-full object-contain filter group-hover:scale-105 transition duration-300"
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-cream-200 rounded-lg text-charcoal/80 font-bold text-xs md:text-sm tracking-tight select-none">
                              {tool.initials}
                            </div>
                          )}
                        </div>
                        {/* Tool Caption */}
                        <span className="text-[11px] font-semibold text-charcoal/60 mt-2 text-center leading-tight max-w-[68px] truncate group-hover:text-charcoal transition duration-200">
                          {tool.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 px-8 md:px-16 lg:px-24 bg-primary-light/40 border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Sticky Left Panel */}
            <div className="lg:sticky lg:top-32 lg:col-span-1">
              <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Professional Services</span>
              <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-6 leading-tight">How I Can Help You</h2>
              <p className="text-xl text-charcoal/70 leading-relaxed font-sans mb-8">
                From email management to social media operations, I handle the administrative details so you can focus on driving key business growth.
              </p>
              <div className="hidden lg:block border-t border-charcoal/10 pt-6">
                <p className="text-sm text-charcoal/40 font-sans leading-relaxed">Click on any service to explore detailed competencies, responsibilities, and checklists.</p>
              </div>
            </div>
            
            {/* Accordion Right Panel */}
            <div className="lg:col-span-2 space-y-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isActive = activeAccordion === index;
                return (
                  <div 
                    key={service.id} 
                    className={`accordion-item bg-cream-100 border border-charcoal/5 rounded-2xl overflow-hidden transition-all duration-300 ${isActive ? 'active' : ''}`}
                  >
                    <button 
                      onClick={() => toggleAccordion(index)}
                      className="accordion-trigger w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-serif font-bold text-charcoal">{service.title}</span>
                      </div>
                      <ChevronDown className="accordion-chevron w-5 h-5 text-charcoal/50" />
                    </button>
                    <div className="accordion-content">
                      <div className="px-6 pb-6 pt-2 border-t border-charcoal/5">
                        <p className="text-charcoal/70 text-base mb-4 font-sans">{service.desc}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-charcoal/85 font-sans">
                          {service.checklist.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-secondary" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-28 px-8 md:px-16 lg:px-24 bg-cream-100 border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Career Journey</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Professional Experience</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-sans">Proven systems and operational leadership to support C-level management.</p>
          </div>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.id} className="flat-card p-8 rounded-3xl bg-cream-100/40">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <h3 className="text-2xl font-serif text-charcoal">{job.title}</h3>
                  <span className="text-base font-semibold font-sans text-secondary">{job.dates}</span>
                </div>
                <ul className="list-disc pl-6 text-charcoal/70 text-base space-y-2 font-sans">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Skills */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-8">Key Skills & Strengths</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Virtual Assistance", "Customer Support", "People Management", "Project Coordination", "Operations Leadership", "Technical Proficiency"].map((skill, index) => (
                <span key={index} className="custom-btn text-sm font-semibold uppercase tracking-wider">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 px-8 md:px-16 lg:px-24 bg-secondary-light/40 border-b border-charcoal/5">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Client Stories</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Client Love</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-sans">Direct feedback from business owners and professionals I've supported.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {testimonials.map((t) => (
              <div key={t.id} className="flex flex-col justify-between border-b border-charcoal/10 pb-12 md:border-b-0 md:pb-0">
                <div>
                  <Quote className="w-12 h-12 text-ochre/35 mb-6 transform scale-y-[-1]" />
                  <blockquote className="text-3xl md:text-4xl font-serif italic text-charcoal leading-relaxed mb-8">
                    "{t.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-charcoal/10">
                    <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm">{t.author}</h4>
                    <p className="text-sm text-charcoal/50 font-sans">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-8 md:px-16 lg:px-24 bg-cream-200">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Direct Communication</span>
            <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-4">Let's Work Together</h2>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto font-sans">Ready to reclaim your time? Get in touch to discuss how I can support your business.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Info Column */}
            <div className="flat-card p-10 rounded-3xl flex flex-col justify-between bg-cream-100">
              <div>
                <span className="text-sm uppercase tracking-wider font-semibold text-secondary mb-3 block">Work Together</span>
                <h3 className="text-3xl font-serif text-charcoal mb-6">Reclaim Operations</h3>
                <p className="text-charcoal/70 text-base leading-relaxed mb-8 font-sans">
                  Offload complex inbox flows, schedule conflicts, travel requests, and client customer support. Reach out using the adjacent channels to organize your operational framework.
                </p>
              </div>
              <div className="border-t border-charcoal/10 pt-6">
                <p className="text-sm text-charcoal/50 font-sans">Based in Bicol, Philippines. Supporting clients globally across all US and EU timezones.</p>
              </div>
            </div>
            
            {/* Details Column */}
            <div className="flat-card p-10 rounded-3xl bg-cream-100">
              <h3 className="text-2xl font-serif text-charcoal mb-8">Contact Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4 font-sans">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60">Email</h4>
                    <p className="text-charcoal font-medium text-lg">asiagrammcamsur@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4 font-sans">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60">Phone</h4>
                    <p className="text-charcoal font-medium text-lg">+63 926 036 5833</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4 font-sans">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60">Hours</h4>
                    <p className="text-charcoal font-medium text-lg">Monday-Friday: 9am-5pm EST</p>
                    <p className="text-charcoal/50 text-sm mt-0.5">Weekends: By appointment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-charcoal/10">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-charcoal/60 mb-4 font-sans">Follow Me</h4>
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/darlyn.ty" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:border-ochre hover:text-ochre text-charcoal transition duration-300">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://www.instagram.com/darlynoliveros/" className="w-10 h-10 border border-charcoal/10 rounded-full flex items-center justify-center hover:border-ochre hover:text-ochre text-charcoal transition duration-300">
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream-100 py-16 px-8 md:px-16 lg:px-24 border-t border-charcoal/10">
        <div className="w-full max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-serif font-bold text-cream-100 tracking-wide">VA Mom</span>
              <p className="text-cream-100/60 text-base mt-2 font-sans">Helping you focus on what matters most</p>
            </div>
            <div className="flex flex-col items-center md:items-end font-sans">
              <div className="flex space-x-6 mb-4">
                <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">Home</a>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">About</a>
                <a href="#tools" onClick={(e) => handleSmoothScroll(e, 'tools')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">Tools</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">Services</a>
                <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">Testimonials</a>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="text-cream-100/70 hover:text-secondary transition duration-300 text-base">Contact</a>
              </div>
              <p className="text-cream-100/50 text-sm">© 2026 VA Mom. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
