import React from 'react';
import { FlatList,StyleSheet, Platform, Button, Image, TextInput, Text, View, ScrollView } from 'react-native';

class ManageMain extends React.Component {
  constructor() {
    super();


    this.state = {
        owe: 20 ,
        owed: 30
    };
  }


    render() {
      return (

        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}}>
              <Text style={styles.welcome}>Expense Manager</Text>
              <Text style={styles.header}>You owe: {this.state.owe}$</Text>
              <Text style={styles.header}>You are owed: {this.state.owed}$</Text>
           </View>


          <View style={{flex: 4, backgroundColor: 'skyblue'}}>
              
          </View>
          <Button title='Add Expense' style={styles.button} />
        </View>
        );
      }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
  },
  header: {
    textAlign: 'left',
    fontSize: 20,
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    textAlign: 'left',
    fontSize: 20,
    justifyContent: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

export default ManageMain;
