import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native'

// const deciChecker = (rate) => {
//     return (rate == Math.floor(rate)) ? true : false
// }

function arrayGen(intnum) {
    var temp = intnum;
    var gen = [0,0,0,0,0];
    for(var i=0; i<intnum; i++) {
        if(temp < 1) {
            gen[i] = 0.5;
        } else {
            gen[i] = 1;
            temp = temp - 1;
        }
    }
    return gen;
}

const Rating = ({rate, color}) => {

    const rates = arrayGen(rate);

    return (
    <View style= {styles.container}>
        {rates.map((r) => {
            if(r == 1) {
                return (<Ionicons key={r} name="star" color={color} />)
            } else if(r == 0.5) {
                return (<Ionicons key={r} name="star-half" color={color} />)
            } else {
                return (<Ionicons key={r} name="star-outline" color={color} />)
            }
        })}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5
    }
})

export default Rating