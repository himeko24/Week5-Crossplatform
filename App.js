import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import userData from "./data.json"
import styles from "./App.style"

export default function App() {
  // console.log(userData.users);
  return (
    <ScrollView>
      {userData.users.map((user) => {
        return (
          <View style={styles.container} key={user.name}>
            <View style={styles.card}>
              <Image
                source={{
                  uri: user.photo_url,
                }}
                style={styles.avatar} />
              <View style={styles.boldText}>
                <Text style={styles.boldText}>{user.name}</Text>
                <Text>{user.email}</Text>
              </View>
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}


