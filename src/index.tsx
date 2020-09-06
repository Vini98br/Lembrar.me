import React from 'react';
import {StatusBar} from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
// import { Container } from './styles';
import {ThemeProvider} from 'styled-components';
import {myTheme} from './theme';
import Routes from './routes';

const App: React.FC = () => {
  const routeNameRef = React.useRef<NavigationContainerRef | null>(null);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer ref={routeNameRef!}>
        <ThemeProvider theme={myTheme}>
          <Routes navigatorRef={routeNameRef} />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
