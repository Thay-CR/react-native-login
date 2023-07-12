import { View , Text } from "react-native";
import {styles} from './style'

export const Toast = props => {
 return (
    <View style={styles.body}>
        <Text style={ props.status == 'success' ? styles.textSuccess : styles.text}>{props.msg}</Text>
    </View>
 )
}

