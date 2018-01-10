import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


class GreyBar extends Component{
    render() {
        return(
            <View style={[styles.greyContent, {width: this.props.width, height: this.props.height}]}/>
        )
    }
}

const styles = StyleSheet.create({
    greyContent: {
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'rgb(201, 205, 213)',
        borderRadius: 5,
    }
})

export default GreyBar;