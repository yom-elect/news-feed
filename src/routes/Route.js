import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as ROUTES from '../constant/routes';
import NewsList from '../screens/NewsList';
import SingleNews from '../screens/SingleNews';
import Comments from '../screens/Comments';
import { Header } from '../components';

const Stack = createNativeStackNavigator();


const App = () => {
    return (
      <Stack.Navigator initialRouteName={ROUTES.NEWS_LIST}>
        <Stack.Screen
          component={NewsList}
          name={ROUTES.NEWS_LIST}
          options={{ 
            title: 'News Feed',
            headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}
        />
  
        <Stack.Screen
          component={SingleNews}
          name={ROUTES.NEWS_SINGLE}
          options={{ headerShown: true, headerTitle: "Single Feed" ,headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },}}
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