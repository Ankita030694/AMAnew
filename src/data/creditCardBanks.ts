export type BankTier = 1 | 2 | 3;

export interface CreditCardBank {
  name: string;
  slug: string;
  tier: BankTier;
}

export const creditCardBanks: CreditCardBank[] = [
  { name: 'HDFC', slug: 'hdfc', tier: 1 },
  { name: 'SBI', slug: 'sbi', tier: 1 },
  { name: 'ICICI', slug: 'icici', tier: 1 },
  { name: 'Axis', slug: 'axis', tier: 1 },
  { name: 'Kotak', slug: 'kotak', tier: 1 },
  { name: 'IndusInd', slug: 'indusind', tier: 1 },
  { name: 'Yes Bank', slug: 'yes-bank', tier: 1 },
  { name: 'IDFC First', slug: 'idfc-first', tier: 1 },
  { name: 'RBL', slug: 'rbl', tier: 1 },
  { name: 'Amex', slug: 'amex', tier: 1 },
  { name: 'HSBC', slug: 'hsbc', tier: 1 },
  { name: 'Standard Chartered', slug: 'standard-chartered', tier: 1 },
  { name: 'DBS', slug: 'dbs', tier: 1 },
  { name: 'AU Bank', slug: 'au-bank', tier: 1 },
  { name: 'Bandhan', slug: 'bandhan', tier: 1 },
  { name: 'Bank of Baroda', slug: 'bank-of-baroda', tier: 2 },
  { name: 'PNB', slug: 'pnb', tier: 2 },
  { name: 'Canara', slug: 'canara', tier: 2 },
  { name: 'Union Bank', slug: 'union-bank', tier: 2 },
  { name: 'Federal Bank', slug: 'federal-bank', tier: 2 },
  { name: 'Karnataka Bank', slug: 'karnataka-bank', tier: 2 },
  { name: 'KVB', slug: 'kvb', tier: 2 },
  { name: 'South Indian Bank', slug: 'south-indian-bank', tier: 2 },
  { name: 'Indian Bank', slug: 'indian-bank', tier: 2 },
  { name: 'Bank of India', slug: 'bank-of-india', tier: 2 },
  { name: 'IDBI', slug: 'idbi', tier: 2 },
  { name: 'TMB', slug: 'tmb', tier: 3 },
  { name: 'City Union Bank', slug: 'city-union-bank', tier: 3 },
  { name: 'DCB', slug: 'dcb', tier: 3 },
  { name: 'Central Bank', slug: 'central-bank', tier: 3 },
  { name: 'IOB', slug: 'iob', tier: 3 },
  { name: 'UCO Bank', slug: 'uco-bank', tier: 3 },
  { name: 'Bank of Maharashtra', slug: 'bank-of-maharashtra', tier: 3 },
  { name: 'CSB', slug: 'csb', tier: 3 },
  { name: 'Punjab & Sind', slug: 'punjab-and-sind', tier: 3 },
  { name: 'Dhanlaxmi', slug: 'dhanlaxmi', tier: 3 },
  { name: 'J&K Bank', slug: 'jandk-bank', tier: 3 },
  { name: 'LIC Cards', slug: 'lic-cards', tier: 3 },
  { name: 'NESFB', slug: 'nesfb', tier: 3 },
];
