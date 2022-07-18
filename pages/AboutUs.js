import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'

const AboutUs = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/Slide02.jpg') }
                    style={styles.image_user}
                />

                <View style={styles.view_container}>
                    <Text style={styles.title}>Blue And Me</Text>
                    <Text style={styles.text_info}>Version: 1.0</Text>
                    <Text style={styles.text_info}>Copyright © 2022 CAMTEL</Text>
                </View>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('LegalInfos') }
                    style={styles.vs_container}
                >
                    <Text style={styles.text_info_title}>Informations légales</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.vs_container}
                >
                    <Text style={styles.text_info_title}>Logiciels tiers</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.vs_container}
                >
                    <Text style={styles.text_info_title}>Conditions générales d'utilisation</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() => {}}
                    style={styles.vs_container}
                >
                    <Text style={styles.text_info_title}>Nos engagements</Text>
                    <Image 
                        source={ require('../assets/images/icons/ic_right_chevron.png') } 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img_container: {
        marginTop: 0
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 220
    },
    view_container:{
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        marginBottom: 10
    },
    text_info: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    vs_container: {
        backgroundColor: '#fff',
        padding: 20,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icon: {
        height: 23,
        width: 23
    },
    text_info_title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    }
})

export default AboutUs