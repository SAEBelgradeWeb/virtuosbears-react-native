import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from "react";

import Item from "./components/Item"
import AddItem from './components/AddItem';

export default function App() {

  const [counter,setCounter] = useState(3)

  const [items, setItems] = useState([
    {id:0,title:'Oranges'},
    {id:1,title:'Bananas'},
    {id:2,title:'Milk'},
  ])

  function deleteItem(id){
    setItems(items.filter(item => item.id !== id))
  }

  function addItem(title){
    const newItems = [...items, {id: counter, title:title}]
    setItems(newItems)
    setCounter(counter + 1)
  }

  return (
    <View style={styles.headerText}>
      <Text style={[styles.headerText, styles.fontStyle]}>Shopping list</Text>

      <AddItem addItem={addItem} />

      {/* flatlist mapping */}
      <FlatList data={items} renderItem={({item})=> {
        return (
          <Item itemStyle={styles.item} data={item} deleteItem={deleteItem} />
        )
      }} />


    </View>
  );
}


const styles = StyleSheet.create({
  headerText:{
    textAlign:'center',
    marginTop:60,
  },
  fontStyle:{
    fontSize:30
  },
  item:{
    fontSize:25,
  }

})
