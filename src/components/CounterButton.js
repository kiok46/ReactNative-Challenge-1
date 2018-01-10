import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';


class CounterButton extends Component{

    state = {
        open: 0,
        counter: 1,
        animation: new Animated.Value(0),
    }

    increaseCount = () => {
        this.setState({counter: this.state.counter+1})
    }

    startCounterAnimation = () => {
        if (!this.state.open){
            Animated.timing(this.state.animation, {
                toValue: 1,
                duration: 300
            }).start(() => this.setState({open: 1}))
        } else {
            this.increaseCount()
        }
    }

    closeCounterAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration: 300
        }).start(() => this.setState({open: 0}))
    }

    decreaseCount = () => {
        const {counter} = this.state;
        if (counter>1){
            this.setState({counter: this.state.counter-1})
        } else{
            return
        }
    }

    render() {

        const incrementBoxScaleX = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, .7]
        }) 

        const incrementBoxtranslateX = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 30]
        })

        const incrementBoxRotate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '90deg']
        })

        const incrementBoxTransformStyle = {
            transform: [
                {
                    scale: incrementBoxScaleX
                },
                {
                    translateX: incrementBoxtranslateX
                },
                {
                    rotate: incrementBoxRotate
                }
            ]
        }

        const counterDisplayScaleX = this.state.animation.interpolate({
            inputRange: [0, .2, 1],
            outputRange: [.9, 1, 1.25]
        })

        const counterDisplaytranslateX = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [120, 100]
        })

        const counterDisplayTransformStyle = {
            transform: [
                {
                    translateX: counterDisplaytranslateX
                },
                {
                    scale: counterDisplayScaleX
                }
            ]
        }

        const decrementBoxtranslateX = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 0]
        })

        const decrementBoxTransformStyle = {
            transform: [
                {
                    translateX: decrementBoxtranslateX
                },
                {
                    scale: .7
                }
            ]
        }

        return(
            <View style={{flexDirection: 'row'}}>
                <Animated.View style={[styles.counterDisplayStyle, counterDisplayTransformStyle]}>
                    <Text style={styles.quantityTextStyle}>{this.state.counter}</Text>
                </Animated.View>
                <TouchableWithoutFeedback onPress={this.decreaseCount}>
                    <Animated.View style={[styles.counterDefaultStyle, styles.counterDecrementStyle, decrementBoxTransformStyle]}>
                        <Text style={[styles.textStyle, {color: 'rgb(130, 130, 130)'}]}>-</Text>                        
                    </Animated.View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.startCounterAnimation}>
                    <Animated.View style={[styles.counterDefaultStyle, styles.counterIncrementStyle, incrementBoxTransformStyle]}>
                        <Text style={[styles.textStyle, ]}>+</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    counterDefaultStyle: {
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: .3,
        shadowOffset: {x: 0, y: 2},
        shadowColor: 'black'
    },
    counterIncrementStyle: {
        backgroundColor: 'rgb(49, 186, 201)',
    },
    counterDecrementStyle: {
        backgroundColor: 'white',
        borderColor: 'rgb(130, 130, 130)',
        borderWidth: 3,
    },
    counterDisplayStyle: {
        backgroundColor: 'rgb(240, 240, 240)',
        borderRadius: 30,
        borderColor: 'rgb(240, 240, 240)',
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 34,
        textAlign: 'auto',
        opacity: 1,
        color: 'white',
    },
    quantityTextStyle: {
        fontSize: 28,
        color: 'rgb(130, 130, 130)'
    }
})

export default CounterButton;