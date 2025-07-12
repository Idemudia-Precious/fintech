import { useAssets } from 'expo-asset';
import { View, Text } from 'react-native'

const Page = () => {
  const [assets] = useAssets([require('@/assets/fonts/SpaceMono-Regular.ttf')]);
  return (
    <View>
      <Text>Pagess</Text>
    </View>
  )
}

export default Page