export interface Transaction {
  id: number;
  type: 'payment' | 'credit';
  amount: number;
  name: string;
  description: string;
  date: string;
  time: string;
  user?: string;
  status: 'pending' | 'completed';
  icon: string;
  paymentMethod: string;
  cashback?: number;
}

export interface Card {
  balance: number;
  available: number;
  limit: number;
  noPaymentDue: boolean;
  points: number;
}

export interface WalletData {
  card: Card;
  transactions: Transaction[];
}

