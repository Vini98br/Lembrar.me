/* eslint-disable prettier/prettier */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AddButton from './components/AddButton';
import Home from './pages/Home';
import NewObject from './pages/NewObject';
import Settings from './pages/Settings';
import {NavigationContainerRef} from '@react-navigation/native';

const {Screen, Navigator} = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home',
  },
  Settings: {
    lib: AntDesign,
    name: 'setting',
  },
  New: {
    lib: AntDesign,
    name: 'plus',
  },
};

export interface RoutesProps {
  navigatorRef: React.MutableRefObject<NavigationContainerRef | null>;

}

const Routes: React.FC<RoutesProps> = ({navigatorRef}) => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'gray',
        inactiveTintColor: 'blue',
      }}
      screenOptions={({route, navigation}) => ({
        tabBarVisible: !(
          navigatorRef?.current?.getCurrentRoute()!.name === 'New'
        ),
        tabBarIcon: ({color, size}) => {
          if (route.name === 'New' && navigatorRef?.current?.getCurrentRoute()!.name !== 'New') {
            return <AddButton onPress={() => navigation.navigate('New')} />;
          }
          const {lib: Icon, name} = icons[route.name as keyof typeof icons];
          return <Icon name={name} color={color} size={size} />;
        },
      })}>
      <Screen name="Home" component={Home} />
      <Screen
        name="New"
        component={NewObject}
        options={{
          title: '',
        }}
      />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
};

export default Routes;
