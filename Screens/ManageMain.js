import React from 'react';
import {Alert,FlatList,StyleSheet, Platform, Button, Image, TextInput, Text, View, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';
//import AddFriend from './Screens/AddFriend'

class ManageMain extends React.Component {
  constructor(props){
    super(props);


    this.state = {
        owe: 20 ,
        owed: 30,
        Friends:[
                  {
                    id: "1",
                    name: "John",
                    mobile:"+1",
                    email:"test@mail.com"
                  },
                ]
    }
  }

  willFocusAction = (payload) => {
    let params = payload.state.params;
    console.log(this.state.Friends);
    if (params) {
            let screen_id = payload.state.params.screen_id;
            if(screen_id == 'AddFriend'){
                let new_friend = payload.state.params.new_friend;

                this.setState({ Friends:[...this.state.Friends,new_friend]});

                console.log(this.state.Friends);

            }

  //      Alert.alert(params.value);
 }

}


  ButtonClickCheckFunction = () =>{
  //Alert.alert("Button Clicked")
  this.props.navigation.navigate('AddFriend')
  }

  AddExpenseButton = () =>{

    this.props.navigation.navigate('AddExpense')
  }


    render() {
      return (

        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'skyblue'}}>

            <Text style={styles.welcome}>Expense Manager</Text>
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 3, flexDirection: 'column'}}>
                    <Text style={styles.header}>You owe: {this.state.owe}$</Text>
                    <Text style={styles.header}>You are owed: {this.state.owed}$</Text>
                    </View>
                    <NavigationEvents
                    onWillFocus={this.willFocusAction}

                    />
                  <Button style={styles.button_add_frnd} title='Add Friend' onPress= {this.ButtonClickCheckFunction} />
                </View>
           </View>


          <View style={{flex: 5, backgroundColor: 'skyblue'}}>

          </View>
          <Button title='Add Expense' style={styles.button} onPress = {this.AddExpenseButton} />
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
  },
  button_add_frnd: {
    textAlign: 'center',
    fontSize: 20,
    justifyContent: 'center',

 backgroundColor:'#00BCD4',
 borderRadius:10,
 borderWidth: 1,
 borderColor: '#fff'

  }
});

export default ManageMain;
