import type { Card } from '../types';

interface CardBalanceProps {
  card: Card;
}

export default function CardBalance({ card }: CardBalanceProps) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <p className="text-xs font-medium text-gray-500">Card Balance</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">${card.balance.toFixed(2)}</p>
      <p className="text-xs text-gray-500 mt-1">${card.available.toFixed(2)} Available</p>
    </div>
  );
}

