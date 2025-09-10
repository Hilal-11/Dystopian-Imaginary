
interface PricingConfig {
  uniqueId: number; // lowercase `number` type, not `Number`
  pricingType: string; // lowercase `string`, not `String`
  features: string[]; // array of strings
  monthlyAmount: string;
  yearlyAmount: string;
}


export const pricingConfig: PricingConfig[] = [
  {
    uniqueId: 1,
    pricingType: "Fundamental",
    features: [
      "Access to core features",
      "5GB cloud storage",
      "Basic analytics dashboard",
      "Email support",
      "Community forum access",
    ],
    monthlyAmount: "19",
    yearlyAmount: "190",
  },
  {
    uniqueId: 2,
    pricingType: "Professional",
    features: [
      "Everything in Fundamental",
      "50GB cloud storage",
      "Advanced analytics & reports",
      "Priority email & chat support",
      "Customizable dashboard",
      "API access with 10,000 requests/month",
      "Team collaboration tools",
      "Automated backups",
      "Integration with Slack & Google Workspace",
      "Two-factor authentication (2FA)",
    ],
    monthlyAmount: "49",
    yearlyAmount: "490",
  },
  {
    uniqueId: 3,
    pricingType: "Enterprise",
    features: [
      "Everything in Professional",
      "Unlimited cloud storage",
      "Dedicated account manager",
      "Custom API limits & SLAs",
      "Enterprise-grade security & compliance",
      "Custom onboarding & training",
      "Integration with any third-party service",
      "White-label branding",
      "24/7 priority phone support",
      "Custom workflow automation",
      "Access to beta features first",
      "Multi-region hosting options",
    ],
    monthlyAmount: "99",
    yearlyAmount: "990",
  },
];