import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity } from 'react-native'

const Support = () => {
    
    return(
        <View style={styles.container}>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>Aide</Text>
            </View>

            <View style={styles.img_container}>
                <Image
                    source={ require('../assets/images/img/blue_user.jpeg') }
                    style={styles.image_user}
                />
            </View>
        
            <TouchableOpacity style={styles.item_container}
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={styles.rv_text}>Forum</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={styles.btn_text}>Consulter</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_assistant.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item_container}
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={styles.rv_text}>FAQ</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={styles.btn_text}>Consulter</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_chat_64.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item_container}
                onPress={() => {}}
                >
                <View style={styles.r_view}>
                    <Text style={styles.rv_text}>Contactez-nous</Text>
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={styles.btn_rv_action}
                    >
                        <Text style={styles.btn_text}>Appeler</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.l_view}>
                    <Image
                        source={ require('../assets/images/icons/ic_help.png') }
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>

        </View>
    )

}

export default Support

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
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
        width: Dimensions.get('window').width
    },
    item_container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'lightgray',
        borderWidth: 2,
        margin: 11,
        padding: 10,
        borderRadius: 5,
    },
    r_view: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    rv_text:{
        textAlign: 'center',
        fontFamily: 'Montserrat-bold',
        fontSize: 18,
        marginBottom: 20
    },
    btn_rv_action: {
        height: 35,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#0d41e1',
        borderWidth: 1,
    },
    btn_text: {
        color: '#0d41e1',
        fontFamily: 'Montserrat-bold'
    },
    l_view: {
        flex: 2,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    icon: {
        height: 80,
        width: 80,
        marginRight: 15
    }
})