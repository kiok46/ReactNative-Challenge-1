import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class PriceTag extends Component{
    render() {
        return(
            <Text style={styles.priceText}>$29</Text>
        )
    }
}

const styles = StyleSheet.create({
    priceText: {
        fontSize: 48,
        fontWeight: '300',
        color: 'rgb(130, 130, 130)'
    }
})

export default PriceTag;