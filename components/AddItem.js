import {View, Text, TextInput, Button} from "react-native"
import {useState} from "react";

const AddItem = ({addItem}) => {
    const [text, setText] = useState('')

  return (
    <View>
        <TextInput placeholder="Enter the title for your item..." value={text} onChangeText={(text)=> setText(text)}/>


        <Button onPress={()=>{
            addItem(text)
            setText('')
        }} title={'Add'}/>
    </View>
  )
}

export default AddItem