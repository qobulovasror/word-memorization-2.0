import { View, Text } from "react-native";

const CustomHeader = ({title}) => {
    return (
        <View style={{width: '100%', height: 50, marginBottom: 5}}>
            <Text style={{fontSize: 22, textAlign: 'center', margin: 7, fontFamily: 'serif'}}>{title}</Text>
        </View>
    )
}

export default CustomHeader;