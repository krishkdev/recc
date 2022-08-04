import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  FlatList,
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Rating from "../utilities/Rating";


export const PrimaryCard = (item) => {
//   const [selectedId, setSelectedId] = useState(null);
//   const backgroundColor = item.id === selectedId ? "#121212" : "#dddddd";
//     const color = item.id === selectedId ? "white" : "black";
//     const iconSahde = item.id === selectedId ? item.ico + "-outline" : item.ico; // Props coming from parent function
//     const iconColor = item.id === selectedId ? "#ffffff" : "#000000";

    return (
        <TouchableOpacity onPress={() => setSelectedId(item.id)} style={[styles.item, ]}>
        <View style={styles.SecondaryLeft}>
          <Ionicons
            name={item.ico}
            color={"#000"}
            size={20}
            style={styles.ico}
          />
        </View>
        <View style={styles.SecondaryRight}>
          <Text style={[styles.title, textColor]}>{item.title}</Text>
          <Text style={[styles.subtitle, textColor]}>
            {item.category + "  "}<Ionicons name="ios-location" /> {item.distance + "mi"}
          </Text>
          <Rating rate={item.rating} color={iconColor} />
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  heading: {
    fontSize: 20,
  },
  ico: {
    paddingRight: 15,
  },
});
