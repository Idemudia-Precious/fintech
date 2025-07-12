import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { Link } from "expo-router";
import { defaultStyles } from '@/constants/Styles';
import Colors from "@/constants/Colors";

const Page = () => {
  const assetId = require("@/assets/videos/intro.mp4");

  const player = useVideoPlayer(assetId, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      {assetId && <VideoView style={styles.video} player={player} />}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={'/login'}
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]}
          asChild>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]}
          asChild>
          <TouchableOpacity>
            <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  video: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
});

export default Page;
