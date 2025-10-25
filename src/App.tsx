import { useState } from 'react';
import CardBalance from './components/CardBalance';
import NoPaymentDue from './components/NoPaymentDue';
import DailyPoints from './components/DailyPoints';
import TransactionList from './components/TransactionList';
import TransactionDetail from './components/TransactionDetail';
import type { Transaction, WalletData } from './types';
import rawData from './data.json';

const walletData = rawData as WalletData;

function App() {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile container */}
      <div className="max-w-md mx-auto bg-gray-50 min-h-screen">
        {/* Main content */}
        <div className="pb-8">
          {/* 2x2 Grid Layout */}
          <div className='grid grid-cols-2 gap-3 px-4 pt-8'>
            <div className="grid grid-cols-1 gap-3">
              <CardBalance card={walletData.card} />
             <DailyPoints />
            </div>

            {walletData.card.noPaymentDue && <NoPaymentDue />}
          </div>

          {/* Latest Transactions Block */}
          <div className="px-4 mt-6">
            <h2 className="text-base font-semibold text-gray-900 mb-3">Latest Transactions</h2>
            <TransactionList
              transactions={walletData.transactions}
              onTransactionClick={setSelectedTransaction}
            />
          </div>
        </div>
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <TransactionDetail
          transaction={selectedTransaction}
          onClose={() => setSelectedTransaction(null)}
        />
      )}
    </div>
  );
}

export default App;
