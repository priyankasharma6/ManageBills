import React from 'react'
import {Text, TextInput, View, TouchableOpacity, Button, StyleSheet, FlatList } from 'react-native';

export default class ExpenseRow extends React.Component{
  constructor(props){
    super(props);
  //  console.log(this.props);
  this.state = {
    title: this.props.title,
    cost: this.props.total,
  }
}
  valueChanged = () =>{
    this.props.valueChanged();
  }
  deleteRow = () =>{
      this.props.DeleteRow(this.props.id);
  }
        render(){
          return(
            <View style = {styles.container}>
                <Text style = {styles.input}>{this.props.title}</Text>
                  <Button   title="X" onPress = {this.deleteRow} color = 'red' />
            </View>
          );
        }
}
const styles = StyleSheet.create({
  container:{

    flexDirection: 'row',
    backgroundColor: '#d9b3ff',
    borderColor: 	 '#e6e6ff',
    padding: 4,
    borderWidth: 1,
  //  marginTop:2
},
  input:{
    fontSize: 20,
    backgroundColor:'white'

  }

});
