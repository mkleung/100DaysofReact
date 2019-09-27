import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'

// https://expo.github.io/vector-icons/
import { Ionicons } from '@expo/vector-icons';

class CounterApp extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.button_wrapper}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Ionicons name="md-add" size={40} color="#EC645B" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 40 }}>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Ionicons name="md-remove" size={40} color="#EC645B" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EC645B'
    },
    button_wrapper: {
        flexDirection: 'row', 
        width: 200, 
        height: 100,
        backgroundColor: "#FFF",
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 50
    }
})