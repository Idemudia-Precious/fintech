import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import Dropdown from "@/components/Dropdown";
import { defaultStyles } from "@/constants/Styles";
import { useBalanceStore } from "@/store/balanceStore";
import type { BalanceState } from "@/store/balanceStore";
import { Ionicons } from "@expo/vector-icons";
import WidgetList from "@/components/SortableList/WidgetList";
import { useHeaderHeight } from "@react-navigation/elements"

const Page = () => {
  const transactions = useBalanceStore((state: BalanceState) => state.transactions);
  const runTransaction = useBalanceStore((state: BalanceState) => state.runTransaction);
  const clearTransactions = useBalanceStore((state: BalanceState) => state.clearTransactions);
  const balance = useBalanceStore.getState().balance;

  const headerHeight = useHeaderHeight();

  const onAddMoney = () => {
    console.log("Adding money...");
    runTransaction({
      id: Math.random().toString(),
      //amount: 100, // or any amount you want to add
      amount: Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: 'Added money',
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.balance}>{balance()}</Text>
          <Text style={styles.currency}>€</Text>
        </View>
        <TouchableOpacity
          style={[
            defaultStyles.pillButtonSmall,
            { backgroundColor: Colors.lightGray, marginVertical: 20 },
          ]}>
          <Text style={[defaultStyles.buttonTextSmall, { color: Colors.dark }]}>Accounts</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={'add'} text={'Add money'} onPress={onAddMoney} />
        <RoundBtn icon={'refresh'} text={'Exchange'} onPress={clearTransactions} />
        <RoundBtn icon={'list'} text={'Details'} />
        <Dropdown />
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>No transactions yet</Text>
        )}
        {transactions.reverse().map((transaction) => (
          <View
            key={transaction.id}
            style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? 'add' : 'remove'}
                size={24}
                color={Colors.dark}
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '400' }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <Text>{transaction.amount}€</Text>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Page;
