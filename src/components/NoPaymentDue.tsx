export default function NoPaymentDue() {
  return (
    <div className="h-full bg-white rounded-2xl p-4 shadow-sm flex flex-col items-end justify-between">
      <div>
        <p className="text-sm font-bold text-gray-800">No Payment Due</p>
        <p className="text-xs text-gray-500 mt-1">You've paid your September balance.</p>
      </div>
      <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center shrink-0 ml-2">
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
    </div>
  );
}

