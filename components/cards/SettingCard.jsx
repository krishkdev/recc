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

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  iconShade,
  iconColor,
}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Ionicons name={iconShade} color={iconColor} size={25} style={styles.ico} />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Ionicons name= "chevron-forward-outline" color={iconColor} size={20} style={[{marginTop: 2, paddingLeft: 5}]} />
  </TouchableOpacity>
);

export const SettingsCard = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#121212" : "#ccc";
    const color = item.id === selectedId ? "white" : "black";
    const iconShade = item.id === selectedId ? "settings-outline" : "settings"; // Props coming from parent function
    const iconColor = item.id === selectedId ? "#ffffff" : "#000000";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        iconShade={iconShade}
        iconColor={iconColor}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
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
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
  },
  ico: {
    paddingRight: 10,
  },
});
