import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {globalStyles} from '../styles/global'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function About() {
    return (
        <View style={globalStyles.container}>
            <AntDesign name='facebook-square' size={25}/>
            <Text style={globalStyles.titleText}>About screen</Text>
        </View>
    )
}