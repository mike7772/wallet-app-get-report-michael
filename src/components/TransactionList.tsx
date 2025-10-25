import type { Transaction } from '../types';
import TransactionRow from './TransactionRow';

interface TransactionListProps {
  transactions: Transaction[];
  onTransactionClick: (transaction: Transaction) => void;
}

export default function TransactionList({ transactions, onTransactionClick }: TransactionListProps) {
  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          transaction={transaction}
          onClick={() => onTransactionClick(transaction)}
        />
      ))}
    </div>
  );
}

