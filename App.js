import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from "./components/Header"

export default function App() {
  return (
    <View style={styles.view}>
      <Header title={"My website"}/>
      <Text style={styles.text}>Hello world!</Text>
      <Image source={{uri:"https://randomuser.me/portraits/men/1.jpg"}} style={styles.img} />
    </View>
  );
}

Header.defaultProps ={
  title:"No title"
}


const styles = StyleSheet.create({
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:"center"
  },
  text:{
    color:"darkslateblue",
    fontSize:30
  },
  img:{
    width:100,
    height:100,
    borderRadius:100/2 // !!!
  }
})
