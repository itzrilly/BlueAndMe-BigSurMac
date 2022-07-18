import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

const LegalInfos = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.view_container}>
                <Text style={styles.title}>Editeur</Text>
                <Text style={styles.text}>CAMTEL (Cameroon Telecomunications S.A)</Text>
                <Text style={styles.text}>Opérateur public de téléphonie du Cameroun</Text>
                <Text style={styles.text}>Siège Social:Boulevard du 20 Mai, Yaoundé - Cameroun</Text>
                <Text style={styles.text}>Activité: Télécom</Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Conception et réalisation</Text>
                <Text style={styles.text}>CAMTEL (Cameroon Telecomunications S.A)</Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Hébergement</Text>
                <Text style={styles.text}>Cameroon Telecomunications S.A</Text>
                <Text style={styles.text}>Opérateur public de téléphonie du Cameroun</Text>
                <Text style={styles.text}>Siège Social: Boulevard du 20 Mai, Yaoundé - Cameroun</Text>
                <Text style={styles.text}>Activité: Télécom</Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Nous contacter</Text>
                <Text style={styles.text}>Pour toute information sur l'application Blue And Me, contactez nous via l'application en cliquant sur l'onglet <Text style={styles.semibold}>Support</Text> qui se trouve juste en bas de votre écran principal ou alors contactez le service en appelant gratuitement le <Text style={styles.semibold}>825</Text></Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Information sur la consommation du volume data</Text>
                <Text style={styles.text}> Laborum aliqua anim sint deserunt occaecat. Fugiat velit nisi ut officia magna incididunt aliqua aliquip sit tempor duis velit ipsum. Qui ex Lorem sunt sunt fugiat nisi nostrud cupidatat.</Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Protection des données personnelles</Text>
                <Text style={styles.text}> Laborum aliqua anim sint deserunt occaecat. Fugiat velit nisi ut officia magna incididunt aliqua aliquip sit tempor duis velit ipsum. Qui ex Lorem sunt sunt fugiat nisi nostrud cupidatat.</Text>
            </View>

            <View style={styles.view_container}>
                <Text style={styles.title}>Programme d'amélioration de l'application</Text>
                <Text style={styles.text}>Occaecat fugiat ut ea ex quis ex non mollit ipsum ea pariatur incididunt. Cillum sit incididunt dolore duis irure amet sunt incididunt ad nostrud id eu dolore minim. In incididunt ea fugiat velit duis adipisicing id mollit tempor culpa. Consequat dolore do eu deserunt aute. Laboris fugiat amet mollit pariatur duis proident nostrud.</Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    view_container: {
        padding: 20
    },
    title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        paddingBottom: 10
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        //textAlign: 'justify'
    },
    semibold: {
        fontFamily: 'Montserrat-SemiBold'
    }
})

export default LegalInfos
