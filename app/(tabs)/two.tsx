import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Button } from 'tamagui'
import React from 'react';
import AuthScreen from '@/components/ui/AuthScreen/AuthScreen';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <AuthScreen />
       </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
