import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const ScreenHome: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subTitle}>
          Encontre no mapa um ponto de comércio local
        </Text>
      </View>
      <MapView style={styles.map}>
        <Marker coordinate={{ latitude: 0, longitude: 0 }} />
      </MapView>
      <View>
        <FlatList
          data={[]}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.key}>
              <Image />
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    padding: 20,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "400",
    color: "#322153",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#6c6c80",
  },
  map: {
    flex: 1,
  },
});

export default ScreenHome;
