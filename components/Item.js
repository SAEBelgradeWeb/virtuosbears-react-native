import { Text, TouchableOpacity } from "react-native"

const Item = ({itemStyle, data, deleteItem}) => {
  return (
    <TouchableOpacity onPress={function(){
        deleteItem(data.id)
    }}>
        <Text style={itemStyle}>{data.title}</Text>
    </TouchableOpacity>
  )
}

export default Item