import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, Pressable} from 'react-native';
import Card from './src/components/TinderCard';
import users from './assets/data/users';
import AnimatedStack from './src/components/AnimatedStack';
import MatchesScreen from "./src/screens/MatchesScreen";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import HomeScreen from "./src/screens/HomeScreen";


const App = () => {
    const [activeScreen, setActiveScreen] = useState('HOME');
    const onSwipeLeft = user => {
        console.warn('swipe left', user.name);
    };

    const onSwipeRight = user => {
        console.warn('swipe right: ', user.name);
    };
    const color = '#b5b5b5';
    const activeColor = '#F76C6B';
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.pageContainer}>
                <View style={styles.topNavigation}>
                    <Pressable onPress={() => setActiveScreen('HOME')} >
                        <Fontisto
                            name="tinder"
                            size={30}
                            color={activeScreen === 'HOME' ? activeColor : color}
                        />
                    </Pressable>
                    <MaterialCommunityIcons
                        name="star-four-points"
                        size={30}
                        color={color}
                    />
                    <Pressable onPress={() => setActiveScreen('CHAT')}>
                        <Ionicons
                            name="ios-chatbubbles"
                            size={30}
                            color={activeScreen === 'CHAT' ? activeColor : color}
                        />
                    </Pressable>
                    <FontAwesome
                        name="user"
                        size={30}
                        color={activeScreen === 'PROFILE' ? activeColor : color}
                    />
                </View>
                {activeScreen === 'HOME' && <HomeScreen />}
                {activeScreen === 'CHAT' && <MatchesScreen />}

            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    topNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
    },
});

export default App;