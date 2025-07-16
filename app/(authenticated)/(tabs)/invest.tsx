import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useHeaderHeight } from '@react-navigation/elements'

const investments = [
  { id: '1', name: 'Tech Growth Fund', returns: '12.5%', risk: 'Medium' },
  { id: '2', name: 'Green Energy ETF', returns: '8.2%', risk: 'Low' },
  { id: '3', name: 'Emerging Markets', returns: '15.1%', risk: 'High' },
]

const Page = () => {

  const headerHeight = useHeaderHeight();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{
        paddingTop: headerHeight,
      }}>
      <Text style={styles.header}>Investments</Text>
      <Text style={styles.summary}>Grow your wealth with curated investment options.</Text>
      <FlatList
        data={investments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Returns: {item.returns}</Text>
            <Text style={styles.detail}>Risk: {item.risk}</Text>
          </TouchableOpacity>
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
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: Colors.gray,
  },
})

export default Page