import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native'

const Password = () => {
    return (
        <View style={styles.container}>

            <View style={styles.title_view}>
                {/*<Image
                    source={ require('../assets/images/img/password.png') }
                    style={styles.inner_icon}
                />*/}
                <Text style={styles.title_text}>Modifier mon mot de passe</Text>
            </View>

            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/Slide06.jpg') }
                    style={styles.image_user}
                />
            </View>

            <View style={styles.form_view}>
                <TextInput 
                    placeholder='Mot de passe actuel'
                    style={styles.text_input}
                />

                <TextInput 
                    placeholder='Nouveau mot de passe' 
                    style={styles.text_input}
                />

                <TextInput 
                    placeholder='Retaper le nouveau mot de passe'
                    style={styles.text_input}
                />

                <View style={styles.btn_container}>
                        <TouchableOpacity
                            onPress={ () => {} }
                            style={styles.btn}
                        >
                            <Text style={styles.text_btn}>Valider</Text>
                        </TouchableOpacity>
                    </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title_view: {
        backgroundColor: '#0d41e1',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'flex-end'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        //marginTop: 10
    },
    /*inner_icon: {
        width: 100,
        height: 100,
        marginBottom: 10
    },*/
    img_container: {
        marginTop: 0
    },
    image_user: {
        width: Dimensions.get('window').width,
        height: 230
    },
    form_view: {
        margin: 20
    },
    text_input: {
        borderBottomWidth: 1,
        borderColor: '#4632A1',
        padding: 10,
        margin: 10,
        fontFamily: 'Montserrat-Regular'
    },
    btn_container: {
        marginTop: 20
    },
    btn: {
        backgroundColor: '#0d41e1',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: 'rgba(0,0.1,0,5)',
        shadowOpacity: 0.3,
        elevation: 1

    },
    text_btn: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 22
    }
})

export default Password;
