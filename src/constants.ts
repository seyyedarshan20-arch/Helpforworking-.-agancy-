import { ServiceItem, WhyChooseItem, StepItem } from './types';

// Hidden WhatsApp internal contact configuration (never displayed on the UI text)
const WHATSAPP_PHONE = '917517961405'; 

export const openWhatsApp = (customMessage?: string) => {
  const defaultText = customMessage || "Hello Aarthi, I would like to get more information about Help for Work services.";
  const encodedText = encodeURIComponent(defaultText);
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    shortDesc: 'Assistance with mutual-fund related processes and information.',
    icon: 'TrendingUp',
    details: {
      description: 'Comprehensive assistance for individuals seeking clarity on mutual fund portfolios, systematic investment concepts, and regulatory application workflows.',
      highlights: [
        'Guidance on mutual fund document submission and KYC steps',
        'Systematic portfolio process explanations',
        'Support with statement and folio inquiries',
        'Quick resolution of onboarding procedures'
      ],
      process: ['Initial Discussion', 'Requirement Review', 'Guidance & Paperwork', 'Status Updates'],
      suitableFor: 'Individuals looking for structured guidance on mutual fund onboarding and process assistance.'
    }
  },
  {
    id: 'loan-services',
    title: 'Loan Services',
    shortDesc: 'Application, documentation and process guidance subject to eligibility.',
    icon: 'Coins',
    details: {
      description: 'End-to-end guidance navigating documentation requirements, eligibility checks, and partner bank processing pathways for personal, business, and retail loans.',
      highlights: [
        'Documentation checklist preparation',
        'Pre-application eligibility screening assistance',
        'Application tracking and follow-up support',
        'Transparent step-by-step assistance without confusing jargon'
      ],
      process: ['Eligibility Assessment', 'Document Collation', 'Application Filing Guidance', 'Disbursement Follow-up'],
      suitableFor: 'Applicants seeking hassle-free guidance through standard bank loan processing workflows.'
    }
  },
  {
    id: 'banking-process',
    title: 'Banking Process',
    shortDesc: 'Support for common banking-related applications and processes.',
    icon: 'Building2',
    details: {
      description: 'Expert guidance navigating institution-specific protocols, merchant onboarding, account verification, and routine banking process workflows.',
      highlights: [
        'Assistance with account opening document preparation',
        'Verification and compliance guideline support',
        'Reconciliation and inquiry follow-ups',
        'Liaison and query resolution guidance'
      ],
      process: ['Process Clarification', 'Document Verification Guidance', 'Bank Channel Liaison', 'Completion Confirmation'],
      suitableFor: 'Businesses and individuals requiring dedicated assistance with traditional and modern banking workflows.'
    }
  },
  {
    id: 'credit-card-services',
    title: 'Credit Card Services',
    shortDesc: 'Support with product information and application processes.',
    icon: 'CreditCard',
    details: {
      description: 'Navigational support for credit card applications, eligibility evaluations, reward tier process understanding, and billing dispute guidance.',
      highlights: [
        'Application criteria evaluation assistance',
        'Documentation submission assistance',
        'Status tracking and verification guidance',
        'Card upgrade and account management guidance'
      ],
      process: ['Card Option Review', 'Criteria Validation', 'Application Support', 'Activation Guidance'],
      suitableFor: 'Consumers looking for straightforward, reliable guidance on credit card applications and servicing.'
    }
  },
  {
    id: 'telecalling-customer-support',
    title: 'Telecalling & Customer Support',
    shortDesc: 'Professional outbound calling, customer follow-up and service support.',
    icon: 'PhoneCall',
    details: {
      description: 'High-touch customer communication solutions, structured follow-ups, inquiry handling, and retention outreach delivered with courteous professionalism.',
      highlights: [
        'Dedicated outbound and inbound calling capabilities',
        'Systematic lead follow-up and appointment setting',
        'Multilingual customer assistance with empathetic tone',
        'Transparent reporting and interaction quality assurance'
      ],
      process: ['Script & Objective Alignment', 'Calling Schedule Setup', 'Customer Engagement', 'Comprehensive Feedback Log'],
      suitableFor: 'Organizations requiring reliable, professional telecalling support to enhance their customer experience.'
    }
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    shortDesc: 'Customer-focused assistance across a range of financial-service requirements.',
    icon: 'Briefcase',
    details: {
      description: 'Broad-spectrum guidance addressing bespoke financial inquiries, operational processing needs, and customer requirement fulfillment.',
      highlights: [
        'Personalized review of customer financial requirements',
        'Clear step-by-step assistance through paperwork',
        'Coordination with partner service channels',
        'Dedicated customer assistance from start to finish'
      ],
      process: ['Requirement Intake', 'Service Strategy', 'Coordinated Execution', 'Ongoing Assistance'],
      suitableFor: 'Clients seeking an organized partner to assist with various financial services and administrative requirements.'
    }
  }
];

export const FOCUS_POINTS = [
  'Customer Support',
  'Professional Communication',
  'Banking Processes',
  'Financial Services',
  'Telecalling',
  'Customer Assistance'
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'professional-support',
    title: 'Professional Support',
    description: 'Clear and professional customer communication.',
    icon: 'ShieldCheck'
  },
  {
    id: 'multiple-services',
    title: 'Multiple Services',
    description: 'Banking, financial and customer-support related services.',
    icon: 'Layers'
  },
  {
    id: 'customer-focused',
    title: 'Customer Focused',
    description: 'Designed around simple communication and assistance.',
    icon: 'HeartHandshake'
  },
  {
    id: 'easy-communication',
    title: 'Easy Communication',
    description: 'Connect directly with our team through WhatsApp.',
    icon: 'MessageCircle'
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    step: '01',
    title: 'Explore',
    description: 'Check our available services.'
  },
  {
    step: '02',
    title: 'Get Information',
    description: 'Choose the service you are interested in.'
  },
  {
    step: '03',
    title: 'Contact Us',
    description: 'Click the WhatsApp button.'
  },
  {
    step: '04',
    title: 'Get Assistance',
    description: 'Our team provides the relevant guidance.'
  }
];
