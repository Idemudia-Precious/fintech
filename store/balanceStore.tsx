import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      transactions: [],
      runTransaction: (transaction: Transaction) => {
        set((state) => ({ transactions: [...state.transactions, transaction] }));
      },
      // balance: () => {
      //   const txs = get().transactions;
      //   // If no transactions, return initial balance 1420
      //   if (!txs || txs.length === 0) return 1420;
      //   return 1420 + txs.reduce((acc, transaction) => acc + transaction.amount, 0);
      // },
      balance: () => get().transactions.reduce((acc, transaction) => acc + transaction.amount, 0),
      clearTransactions: () => {
        set({ transactions: [] });
      },
    }),
    {
      name: 'balance',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
