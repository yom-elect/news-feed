import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as ROUTES from '../constant/routes';

const Stack = createStackNavigator();


const App = () => {
    return (
      <Stack.Navigator headerMode="screen" initialRouteName={ROUTES.NEWS_LIST}>
        <Stack.Screen
          component={AppTab}
          name={ROUTES.NEWS_LIST}
          options={{ headerShown: false }}
        />
  
        <Stack.Screen
          component={Personalize}
          name={ROUTES.NEWS_SINGLE}
          options={{ headerShown: false }}
        />
  
  
        <Stack.Screen
          component={Comments}
          name={ROUTES.COMMENTS}
          options={{ header: Header }}
        />
      </Stack.Navigator>
    );
  };
  
  export default App;