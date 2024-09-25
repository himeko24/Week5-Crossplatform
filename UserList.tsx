import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./App.style";
import userData from "./data.json";

const UserList = ({ navigation }) => {
    return (
        <ScrollView>
            {userData.users.map((user) => {
                return (
                    <View style={styles.container} key={user.name}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Profile", { userName: user.name, photo_url: user.photo_url, email: user.email })}>
                            <Image
                                source={{ uri: user.photo_url }}
                                style={styles.avatar} />
                            <View>
                                <Text style={styles.boldText}>{user.name}</Text>
                                <Text>{user.email}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default UserList;