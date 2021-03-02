import * as React from 'react';

import Root from './components/Root';
import Expertise from './components/Expertise';
import ScreenStyle from './SideBar';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const headerStyle = {};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerType="back"
        drawerContent={(props) => <ScreenStyle {...props} />}
        
        initialRouteName="Home"
        
        >
        <Drawer.Screen  name="Home" component={Root} />
        <Drawer.Screen  name="Expertise" component={Expertise} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
