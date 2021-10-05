import React from 'react'
import {Image, Text, View, StyleSheet,ImageBackground} from 'react-native'
import Card from "./src/components/TinderCard";
import users from './assets/data/users'

const App = () => {

    const user = {
        name: 'Elon Musk',
        image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        bio: 'A dude with a rocket is looking for a gal with fuel',
    }

    return (
        <View style={styles.pageContainer}>
            <Card user={users[1]}/>
        </View>
    )
};


const styles = StyleSheet.create(
    {
        pageContainer: {
            justifyContent: 'center', alignItems: 'center', flex: 1
        }
    })
export default App;
