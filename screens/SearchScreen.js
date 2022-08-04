import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, StatusBar } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
//import filter from "lodash.filter";
import {SearchItemCard} from "../components/cards/SearchItemCard";

const DATA = require("../data/places.json");

const Item = ({ title }) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};
  
const renderItem = ({ item }) => <Item title={item.title} />;
class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: DATA,
      error: null,
      searchValue: "",
    };
    this.arrayholder = DATA;
  }
  
  searchFunction = (text) => {
    const updatedData = this.arrayholder.filter((item) => {
      const item_data = `${item.title.toUpperCase()})`;
      const text_data = text.toUpperCase();
      return item_data.indexOf(text_data) > -1;
    });
    this.setState({ data: updatedData, searchValue: text });
  };
  
  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
        />
        <FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderBottomWidth: 0.5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
