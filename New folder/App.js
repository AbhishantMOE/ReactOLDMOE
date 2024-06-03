/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import ReactMoE from 'react-native-moengage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MoEReactInbox from "react-native-moengage-inbox";



const App=  ()  => {


  ReactMoE.setEventListener("pushTokenGenerated", (payload) => { 
    console.log("pushTokenGenerated", payload); 
  });

  useEffect(()=>{  
  ReactMoE.initialize("OXTAVQZDWWAROL2ESF8FWE8G");
  MoEReactInbox.initialize("OXTAVQZDWWAROL2ESF8FWE8G");
  
//   ReactMoE.setUserUniqueID("abhiold@xyz.com");
    var inboxData=  MoEReactInbox.fetchAllMessages()

 console.log("This is the inbox data======>", inboxData);
  
  },[])

  return (
    <SafeAreaView >
     <View><Text>Hahahahaah</Text></View>
    </SafeAreaView>
  );
};


export default App;
