import type { Transaction } from '../types';
import { formatDate } from '../utils/formatDate';
import { 
  Apple, 
  Building2, 
  Wifi, 
  ShoppingBag, 
  ArrowLeft, 
  Music, 
  Car, 
  Coffee,
  ChevronRight 
} from 'lucide-react';

interface TransactionRowProps {
  transaction: Transaction;
  onClick: () => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  apple: Apple,
  bank: Building2,
  wifi: Wifi,
  'shopping-bag': ShoppingBag,
  'arrow-left': ArrowLeft,
  music: Music,
  car: Car,
  coffee: Coffee,
};

export default function TransactionRow({ transaction, onClick }: TransactionRowProps) {
  const IconComponent = iconMap[transaction.icon] || Building2;
  const isCredit = transaction.type === 'credit';
  const amountColor = isCredit ? 'text-emerald-600' : 'text-gray-900';
  const amountSign = isCredit ? '+' : '';

  return (
    <div 
      className="bg-white rounded-xl p-3 flex items-center shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      {/* Icon */}
      <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
        <IconComponent className="w-6 h-6 text-white" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">{transaction.name}</p>
        <p className="text-xs text-gray-500 truncate">
          {transaction.status === 'pending' && (
            <span className="text-red-500">Pending</span>
          )}
          {transaction.status === 'pending' && ' – '}
          {transaction.description}
        </p>
        <p className="text-xs text-gray-400">
          {transaction.user && `${transaction.user} – `}
          {formatDate(transaction.date)}
        </p>
      </div>

      {/* Amount */}
      <div className="text-right ml-3 flex-shrink-0">
        <p className={`text-sm font-medium ${amountColor}`}>
          {amountSign}${transaction.amount.toFixed(2)}
        </p>
        {!isCredit && transaction.cashback && (
          <p className="text-xs text-gray-400">{transaction.cashback}%</p>
        )}
      </div>
      
      {/* Arrow */}
      <ChevronRight className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
    </div>
  );
}

