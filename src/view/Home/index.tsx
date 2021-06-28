import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { categories } from "../../utils/categories";

export interface IMarker {
  category: string;
  contact: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
}

const ScreenHome: React.FC = () => {
  const [markers, setMarkers] = useState<IMarker[]>([]);
  const [filter, setFilter] = useState<string>("");
  const navigation = useNavigation();

  const filteredMarker = markers.filter((i) => i.category === filter);

  useEffect(() => {
    fetch("http://192.168.0.8:3000/store").then(async (request) => {
      const data = await request.json();

      setMarkers(data);
    });
  }, []);

  if (!markers || !markers.length) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.subTitle}>
          Encontre no mapa um ponto de comércio local
        </Text>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -3.7322379471547955,
          longitude: -38.530270101427455,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {(filter ? filteredMarker : markers).map((item: IMarker) => (
          <Marker
            key={Math.random() + item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            onPress={() => {
              navigation.navigate("Detail", item);
            }}
          />
        ))}
      </MapView>
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.key}
              style={[
                styles.categoryItem,
                filter === item.key ? styles.selectedCategory : null,
              ]}
              onPress={() => {
                setFilter(filter === item.key ? "" : item.key);
              }}
            >
              <Image style={styles.categoryImage} source={item.image} />
              <Text style={styles.categoryText}>{item.label}</Text>
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
  categoryContainer: {
    padding: 10,
  },
  categoryItem: {
    height: 110,
    backgroundColor: "#f0f0f5",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: "center",
    color: "#6c6c80",
  },
  selectedCategory: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#322153",
  },
});

export default ScreenHome;
