# Wallet App

A mobile-first wallet application built with React, TypeScript, and Tailwind CSS.

## Features

- **Card Balance Display**: Shows current balance, available credit, and card limit
- **No Payment Due Indicator**: Displays payment status with visual confirmation
- **Daily Points Tracker**: Calculates and displays daily points based on seasonal algorithm
- **Transaction List**: Shows 10 sample transactions with detailed information
- **Transaction Details**: Click any transaction to view full details in a modal

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Inter** font from Google Fonts

## Prerequisites

- Node.js 20.19+ or 22.12+ (required for Vite 7)
- npm 9+

**Note**: If you're using Node.js 18.x, you may see compatibility warnings. For the best experience, upgrade to Node.js 20.19+ or 22.12+.

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server
npm run dev
```

Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── data.json                 # Wallet data (card info and transactions)
├── types.ts                  # TypeScript interfaces
├── components/
│   ├── CardBalance.tsx       # Card balance display component
│   ├── NoPaymentDue.tsx      # Payment status indicator
│   ├── DailyPoints.tsx       # Daily points calculator
│   ├── TransactionRow.tsx    # Individual transaction row
│   ├── TransactionList.tsx   # List of all transactions
│   └── TransactionDetail.tsx # Transaction detail modal
├── utils/
│   ├── formatDate.ts         # Date formatting utility
│   └── calculatePoints.ts    # Daily points calculation algorithm
├── App.tsx                   # Main application component
├── main.tsx                  # Application entry point
└── index.css                 # Global styles and Tailwind imports
```

## Daily Points Algorithm

The daily points calculation follows a seasonal pattern:

- **Day 1**: Starts with 2 points
- **Day 2**: Starts with 3 points
- **Day 3+**: Points = previous day's points × 1.6 (rounded)
- Points are displayed in "K" format when ≥ 1000

Seasons are defined as:
- **Spring**: March 1 - May 31
- **Summer**: June 1 - August 31
- **Fall**: September 1 - November 30
- **Winter**: December 1 - February 28/29

## Mobile-First Design

The app is optimized for mobile devices with a maximum width of 375px and scales responsively. Best viewed on:
- iPhone (all models)
- Android devices
- Mobile-sized browser windows

## Color Palette

- **Success/Credit**: `#10B981` (green)
- **Error/Payment**: `#EF4444` (red)
- **Background**: `#F9FAFB` (light gray)
- **Gray Shades**: `#6B7280`, `#9CA3AF`, `#1F2937`

## Data Format

The application loads data from `src/data.json` with the following structure:

```json
{
  "card": {
    "balance": 17.30,
    "available": 1482.70,
    "limit": 1500,
    "noPaymentDue": true,
    "points": 456
  },
  "transactions": [
    {
      "id": 1,
      "type": "payment",
      "amount": 174.00,
      "name": "Apple",
      "description": "Pending - Card Number Used",
      "date": "2025-06-26",
      "time": "12:47",
      "user": "Diana",
      "status": "pending",
      "icon": "apple",
      "paymentMethod": "RBC Bank Debit Card"
    }
  ]
}
```
