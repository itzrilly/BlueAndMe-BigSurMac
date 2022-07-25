import React from 'react'
import { View, Text, FlatList, Alert, Button, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'

const Option = ({ navigation }) => {
    const theme = useSelector(state => state.theme)

    return(
        <ScrollView style={ theme.mode == 'light' ? styles.container_light : styles.container_dark }>

            <View style={styles.title_view}>
                <Text style={styles.title_text}>Blue Services</Text>
            </View> 

            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/blue_girls.png') }
                    style={styles.image_user}
                />
            </View>

            {/*<View style={styles.title_view}>
                <Text style={styles.title_text}>TOUS NOS OFFRES BLUETIFUL</Text>
            </View> */}

            <View style={styles.item_container}>

                <TouchableOpacity 
                    onPress={ () => navigation.navigate('Service') }
                    style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }
                >
                    <Image
                        source={ require('../assets/images/icons/ic_forfait.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Souscrire à un forfait Blue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_gift.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Offrir un forfait Blue à un proche</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item_container}>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_location.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Call Box Blue le plus proche</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_localise_plan.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Agence Blue la plus proche</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item_container}>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_payment.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Recharger votre compte</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_payment_friend_blue.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Recharger le compte d'un proche</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item_container}>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_preferred_number.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Numéros préférés</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_home_zone.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Home Zone </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.item_container}>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_info_call.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Infos dernier appel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ theme.mode == 'light' ? styles.item_light : styles.item_dark }>
                    <Image
                        source={ require('../assets/images/icons/ic_blue_new_offers.png') }
                        style={styles.icon}
                    />
                    <Text style={ theme.mode == 'light' ? styles.text_light : styles.text_dark }>Découvrir les dernières offres de Blue</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )

}

export default Option

const styles = StyleSheet.create({
    container_light: {
       flex: 1,
       backgroundColor: '#ddd',
       marginBottom: 50
    },
    container_dark: {
        flex: 1,
        backgroundColor: '#14213d',
        marginBottom: 50
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    img_container: {
        marginTop: 0
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 400
    },
    item_container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    item_light: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 10,
        padding: 7,
        borderRadius: 10
    },
    item_dark: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#14213d',
        margin: 10,
        padding: 7,
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 0.2
    },
    icon: {
        height: 70,
        width: 70
    },
    text_light: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
    },
    text_dark: {
        marginTop: 5,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        color: '#fff'
    }
})