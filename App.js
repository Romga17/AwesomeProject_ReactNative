/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Button, Text } from 'react-native';
import ListHeader from './src/components/ListHeader';
import ListFooter from './src/components/ListFooter';
import FlatListSites from './src/components/FlatlistSites';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


    function App(){

      const isDarkMode = useColorScheme() === 'dark';

      const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1
      };


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ListHeader />
   

      <ScrollView>

      <View>
      <Image source={require('./analyst.png')} style={{width:200,height:150, marginHorizontal: 100, marginVertical: 15}} />
      </View>

      <View>

 
    
    </View>

      <FlatListSites />


    </ScrollView>

    <ListFooter />

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  title: {
  fontSize: 28
  }
});

export default App;
