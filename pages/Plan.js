import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Plan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>MON PLAN TARIFAIRE</Text>
            </View>

            <TouchableOpacity style={styles.plan_view}>
                <Text style={styles.text_info}>Plan tarifaire actuel: 
                    <Text style={styles.text_plan}> ULSERVICE</Text>
                </Text>
                <Image source={ require('../assets/images/icons/ic_plan_detail.png') } style={styles.icon} />
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={ () => { navigation.navigate('ChoicePlan') } }
                style={styles.plan_view}
            >
                <Text style={styles.text_info}>Changer de plan tarifiare</Text>
                <Image source={ require('../assets/images/icons/ic_right_chevron.png') } style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd'
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    plan_view: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text_info: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        padding: 10,
        textTransform: 'uppercase'
    },
    text_plan: {
        fontFamily: 'Montserrat-SemiBold',
    },
    icon: {
        height: 23,
        width: 23
    },
})

export default Plan