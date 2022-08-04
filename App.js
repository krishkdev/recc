import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar' //Expo component
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {SettingsScreen} from "./screens/SettingsScreen"
import {HomeScreen} from "./screens/HomeScreen"
import {MapScreen} from "./screens/MapScreen"
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } 
            else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }
            else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }
            else if (route.name === 'Maps') {
              iconName = focused ? 'ios-location' : 'ios-location-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}