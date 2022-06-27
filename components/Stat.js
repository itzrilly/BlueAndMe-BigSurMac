import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const Stats = () => {
    return (
        <View style={styles.container}>
            {/* Solde principal */}
            <View style={styles.item_container}>
                <View style={styles.item_right}>
                    <Text style={styles.icon_title}>CREDIT{'\n'}PRINCIPAL</Text>
                    <Image
                        source={require('../assets/images/icons/ic_appel_sortant.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.item_left_container}>
                    <Text style={styles.item_left_text}>10 000 U</Text>
                    <Text style={styles.validity_date}>{'\n'}Date limite d'accès au réseau:{'\n'}01-01-2037</Text>
                </View>
            </View>

            {/* Données mobile */}
            <View style={styles.item_container}>
                <View style={styles.item_right}>
                    <Text style={styles.icon_title}>DATA 4G</Text>
                    <Image
                        source={require('../assets/images/icons/ic_antenne_relais_colored.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.item_left_container}>
                    <Text style={styles.item_left_text}>1024 MB</Text>
                    <Text style={styles.validity_date}>{'\n'}Validité: 01-10-2022</Text>
                </View>
            </View>

            {/* Message */}
            <View style={styles.item_container}>
                <View style={styles.item_right}>
                    <Text style={styles.icon_title}>SMS</Text>
                    <Image
                        source={require('../assets/images/icons/ic_sms.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.item_left_container}>
                    <Text style={styles.item_left_text}>100 SMS</Text>
                    <Text style={styles.validity_date}>{'\n'}Validité: 01-10-2022</Text>
                </View>
            </View>

            {/* Solde Bonnus for all call */}
            <View style={styles.item_container}>
                <View style={styles.item_right}>
                    <Text style={styles.icon_title}>BONUS TOUT RESEAU</Text>
                    <Image
                        source={require('../assets/images/icons/ic_microphone.png')}
                        style={styles.icon}
                    />
                </View>
                <View style={styles.item_left_container}>
                    <Text style={styles.item_left_text}>1 000 U</Text>
                    <Text style={styles.validity_date}>{'\n'}Validité: 01-10-2022</Text>
                </View>
            </View>
        </View>
        
    )
}

export default Stats

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 7,
        backgroundColor: '#ddd'
    },
    item_container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item_right: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    icon_title: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12
    },
    icon: {
        height: 50,
        width: 50,
        margin: 5
    },
    item_left_container: {
        flex: 3
    },
    item_left_text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
    },
    validity_date: {
        fontFamily: 'Montserrat-Light'
    }
})