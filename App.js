import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider} from 'react-redux';
import {ThemeProvider} from '@shopify/restyle';
import { StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import store from './src/store';
import {primaryTheme} from './src/styles/theme';
import AppNavigator from './src/routes/Route';

export default function App() {
  const{ dispatch } = store;

  useEffect(() => {
    // TODO added netinfo
    const netInfoUnsubscribe = NetInfo.addEventListener(({isConnected}) => {
      dispatch.settings.updateNetInfo(isConnected);
    });

    return () => {
      netInfoUnsubscribe();
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={primaryTheme}>
        <NavigationContainer>
          <View style={styles.container}>
            <AppNavigator/>
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
