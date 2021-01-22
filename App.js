import  React, {Component} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';


export default class App extends Component {
constructor(){
  super();
  this.state={
    firstNumber:0,
    secondNumber:0,
    result:0
  }
}

sub=()=>{
  this.setState({
    result:this.state.firstNumber-this.state.secondNumber
  })
  // c=a-b
  //this.setState.result=this.state.firstNumber-this.state.secondNumber
}

add=()=>{
  this.setState({
    result:this.state.firstNumber+this.state.secondNumber
  })
}

multi=()=>{
  this.setState({
    result:this.state.firstNumber*this.state.secondNumber
  })
}

divide=()=>{
  this.setState({
    result:this.state.firstNumber/this.state.secondNumber
  })
}

  render(){
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
      placeholder='Enter The First Digit'
      onChangeText={(text)=>{
        this.setState({
          firstNumber:parseInt(text),
        })
      }}></TextInput>
<Text> </Text>
      <TouchableOpacity style={styles.button} onPress={this.add}>
      <Text style={styles.text}>Addition( + )</Text>
      </TouchableOpacity>
<Text> </Text>
      <TouchableOpacity style={styles.button} onPress={this.sub}>
      <Text style={styles.text}>Subtract( - )</Text>
      </TouchableOpacity>
<Text> </Text>
      <TouchableOpacity style={styles.button} onPress={this.multi}>
      <Text style={styles.text}>Multiply( * )</Text>
      </TouchableOpacity>
<Text> </Text>
      <TouchableOpacity style={styles.button} onPress={this.divide}>
      <Text style={styles.text}>Divide( / )</Text>
      </TouchableOpacity>
<Text> </Text>
      <TextInput style={styles.input}
      placeholder='Enter The Second Digit'
      onChangeText={(text)=>{
        this.setState({
          secondNumber:parseInt(text),
        })
      }}></TextInput>
      
      <Text style={{backgroundColor:'#ffffff',
    padding:10,
    borderRadius:30,
    justifyContent : 'center',
    marginTop:30,
    alignItems:'center',
    marginRight:50,
    marginLeft:55,}}>{this.state.result}</Text>
    <Text> </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#808080',
  },
  input:{
    backgroundColor:'#ecf0f1',
    justifyContent: 'center',
    marginLeft:55,
    marginRight:60,
    fontSize:20,
    padding: 8,
  },

  button:{
    backgroundColor:'#4630EB',
    padding:10,
    borderRadius:30,
    justifyContent : 'center',
    marginTop:5,
    alignItems:'center',
    marginRight:50,
    marginLeft:55,
  },

  text:{
    color:'#ffffff',
    

  },
 
});
