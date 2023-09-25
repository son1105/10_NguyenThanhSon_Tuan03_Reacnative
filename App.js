import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
    return ( <
        View style = { styles.container } >
        <View style={styles.section1}>
            <Text>This is first section</Text>
            <Image style={{width:'100px', height:'100px'}} source={require('./assets/icon.png')}></Image>
        </View>
        <View style={styles.section2}>
            <Text>This is second section</Text>
        </View>
        <View style={styles.section3}>
            <Text>This is last section</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    section1:{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems:'center'
    },
    section2:{
        flex: 1,
        backgroundColor: 'yellow'
    },
    section3:{
        flex: 1,
        backgroundColor: 'purple'
    }
});