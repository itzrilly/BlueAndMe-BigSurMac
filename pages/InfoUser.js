import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import infoData from '../helpers/InfosUser'
//import Header from '../components/Header'

const InfoUser = () => {

    const [ dataUser, setDataUser ] = useState([])

    userData = () => {
        let item = []

        infoData.map(dUser => {
            item = dUser.user.map(myUser => {
                //Alert.alert('MyUser', JSON.stringify(myUser.firstname))
                return (
                    <View key={myUser.id}>
                        <View style={styles.img_container}>
                            <Image source={{ uri: myUser.pic_url }} style={styles.picture} />
                        </View>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Prénom: </Text><Text style={styles.text_info}>{myUser.firstname}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Nom de famille: </Text><Text style={styles.text_info}>{myUser.lastname}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Numéro de service: </Text><Text style={styles.text_info}>{myUser.number}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Genre: </Text><Text style={styles.text_info}>{myUser.gender}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Type de paiement: </Text><Text style={styles.text_info}>{myUser.payment_type}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Ville & Quatier: </Text><Text style={styles.text_info}>{myUser.city}, {myUser.quarter}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Adresse postale: </Text><Text style={styles.text_info}>{myUser.postal_adress}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Type d'identification: </Text><Text style={styles.text_info}>{myUser.id_type}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Numéro d'identification.: </Text><Text style={styles.text_info}>{myUser.cni_id}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>Numéro de contact: </Text><Text style={styles.text_info}>{myUser.contact_number}</Text></Text>
                        <Text style={styles.text_info_container}><Text style={styles.title}>E-mail: </Text><Text style={styles.text_info}>{myUser.email}</Text></Text>
                    </View>
                )
            })
            setDataUser(item)
        })

        /*return(
            <View>
                <Text>{dataUser}</Text>
            </View>
        )*/
    }

    useEffect(() => {
        userData()
    }, [])

    return (
        <View style={styles.container}>
            {/*<SafeAreaView>
                <Header text='Infos abonné' goBack = {() => navigation.goBack()} />
            </SafeAreaView> */}
            {
                dataUser
            }
        </View>
    )
}

export default InfoUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    img_container: {
        alignItems: 'center',
        width: Dimensions.get('window').width,
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    picture: {
        height: 200,
        width: 200,
        borderRadius: 120
    },
    text_info_container: {
        margin: 10
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    text_info: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16
    }
})