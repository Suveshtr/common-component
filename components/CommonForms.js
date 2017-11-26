import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  Switch,
  KeyboardAvoidingView  
 } from 'react-native';

export default class CommonForms extends React.Component {
   state={
    input: "suvesh",
    showInput: false,
  }

  handleToggleSwitch = () => {
    this.setState( (state) => ({
      showInput: !state.showInput,
    }))
  }

  handleTextChange = (input) => {
    this.setState(() => ({
      input: input
    }))
  }

  render() {
    const { input, showInput }  = this.state
    return (
      <View style={styles.container}>        
        <Switch
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />
        {showInput === true && (
          <TextInput 
            value={input}
            style={styles.input}
            onChangeText={this.handleTextChange}
          />
        )}
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
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: 'red',
    margin: 50,

  },
  img: {
    width: 100,
    height: 100,
    margin:50,
  }
});
