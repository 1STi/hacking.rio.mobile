// Libs
import React from 'react';
import { 
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

// Screens
import MainScreen from './screens/mainScreen';

const AuthedStack = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: 'Main'
    }
  }
}, {
  headerMode: null,
  mode: 'card',
  initialRouteName: 'Main',
});

const MainStack = createSwitchNavigator({
  Validated: AuthedStack
},{
  initialRouteName: 'Validated',
});

export default MainStack;