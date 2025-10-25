import type { Transaction } from '../types';

interface TransactionDetailProps {
  transaction: Transaction;
  onClose: () => void;
}

export default function TransactionDetail({ transaction, onClose }: TransactionDetailProps) {
  const statusText = transaction.status === 'completed' ? 'Approved' : 'Pending';
  
  // Format date to M/D/YY format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${day}/${year}`;
  };

  return (
    <div className="fixed inset-0 bg-gray-50 z-50">
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        {/* Back button */}
        <button 
          onClick={onClose}
          className="p-4 hover:bg-gray-100 transition-colors"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Amount */}
        <div className="text-6xl font-bold text-center text-black mb-2">
          ${transaction.amount.toFixed(2)}
        </div>

        {/* Name */}
        <div className="text-xl font-normal text-center text-black mb-2">
          {transaction.name}
        </div>

        {/* Date and time */}
        <div className="text-center text-gray-500 mb-8">
          {formatDate(transaction.date)}, {transaction.time}
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mx-4">
          <div className="space-y-4">
            <div>
              <span className="font-bold text-black">Status: </span>
              <span className="font-bold text-black">{statusText}</span>
            </div>

            <div>
              <span className="text-black">{transaction.paymentMethod}</span>
            </div>

            <div className="pt-4">
              <div className="flex justify-between items-center">
                <span className="text-black">Total</span>
                <span className="text-black">${transaction.amount.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

