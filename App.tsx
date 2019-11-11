import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const colors = {
    red: '#FF0000'
};

// colors.blue should be throwing an error
export default function App() {
    return (
        <View style={styles.container}>
            <Text>The color red: {colors.red}</Text>
            <Text>The color blue: {colors.blue}</Text>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}
