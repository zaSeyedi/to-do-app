import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/home';
import Review from '../screens/review';

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: Review,
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default NavigationContainer(HomeStack);