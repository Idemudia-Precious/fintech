import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'

const lifestyleItems = [
  { id: '1', title: 'Rewards', description: 'Earn points on every purchase and redeem for gifts.' },
  { id: '2', title: 'Exclusive Offers', description: 'Access special deals and discounts from our partners.' },
  { id: '3', title: 'Spending Insights', description: 'Track your spending habits and get personalized tips.' },
]

const Page = () => {

  const headerHeight = useHeaderHeight();
  return (
    <ScrollView style={styles.container}  contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text style={styles.header}>Lifestyle</Text>
      <Text style={styles.summary}>Enhance your financial life with exclusive perks and insights.</Text>
      <FlatList
        data={lifestyleItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.primary,
  },
  summary: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
  },
})

export default Page