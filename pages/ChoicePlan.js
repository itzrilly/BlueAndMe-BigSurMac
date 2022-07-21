import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, Pressable, Dimensions } from 'react-native'

const ChoicePlan = () => {

    const [ modalVisible, setModalVisible ] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>NOUVEAU PLAN TARIFAIRE</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Veuillez choisir le nouveau plan tarifaire</Text>
            </View>

            <Pressable 
                onPress={() => setModalVisible(true)}
                style={styles.plan_view}
            >
                <Text style={styles.text_info}>1. Basic</Text>
            </Pressable>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalInnerView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Vous avez choisi le plan tarifaire: <Text style={styles.plan_text}>{'\n'}Blue Classic!</Text></Text>
                        <Pressable
                            style={styles.buttonClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Confirmer</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },
    view: {
        alignItems: 'center',
        marginBottom: 25
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22,
        padding: 10,
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
    modalInnerView: {
        flex: 1,
        marginTop: 22,
        justifyContent: 'flex-end'
    },
    modalView: {
        height: Dimensions.get('window').height * 1/4,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 30,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16
    },
    plan_text: {
        fontFamily: 'Montserrat-SemiBold',
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#0d41e1',
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})

export default ChoicePlan
