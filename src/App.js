import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import GreyBar from './components/GreyBar';
import PriceTag from './components/PriceTag';
import CounterButton from './components/CounterButton';


class CounterCard extends Component{
    render() {

        const { width } = Dimensions.get("window")

        return(
            <View style={[styles.card, {width: width - 40}]}>
                <View style={[styles.defaultHeading, styles.mainHeadingStyle]}>
                    <GreyBar width={"95%"} height={30}/>
                </View>
                <View style={[styles.defaultHeading, styles.subHeadingStyle]}>
                    <GreyBar width={"30%"} height={15}/>
                    <GreyBar width={"20%"} height={15}/>
                </View>
                <View style={[styles.defaultHeading, styles.mainHeadingStyle, {justifyContent: 'space-around',}]}>
                    <PriceTag/>
                    <CounterButton/>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    defaultHeading: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    mainHeadingStyle: {
        marginLeft: 20,
        marginRight: 20,
    },
    subHeadingStyle: {
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    card: {
        height: "30%",
        width: "80%",
        backgroundColor: 'white',
        borderRadius: 5,
        shadowOpacity: .4,
        shadowOffset: {x: 0, y: 2},
        shadowColor: 'black',
        shadowRadius: 5,
        borderColor: 'white',
        borderWidth: 2,
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    }
})

export default CounterCard;