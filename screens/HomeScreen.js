import { View, Text } from 'react-native'
import { SecondaryCard } from '../components/cards/SecondaryCard';
import { PrimaryCard } from '../components/cards/PrimaryCard';
const DATA = require('../data/places.json');

export function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center',  }}>
        {/* <PrimaryCard data = {DATA[0]} /> */}
        <SecondaryCard data = {DATA} />
      </View>
    );
  }