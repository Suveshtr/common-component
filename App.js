import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
 } from 'react-native'

import CommonForms from './components/CommonForms'

export default class App extends React.Component {

  
  render() {
    
    return (
      <View style={styles.container}>        
        <CommonForms /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  }
});


