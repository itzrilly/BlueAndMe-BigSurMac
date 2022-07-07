import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView 
                {...props} 
                contentContainerStyle={{ 
                    backgroundColor: '#0d41e1'
                }}
            >
                <ImageBackground 
                    source={require('../assets/images/img/img_bg.png')} 
                    style={styles.img_bg} >
                    <Image 
                        source={require('../assets/images/icons/ic_user_ios_gray.png')} 
                        style={styles.icon} />
                    <Text style={styles.username}>Itachi Uchiha</Text>
                    <Text style={styles.phone}>620 00 00 00</Text>
                </ImageBackground>
                <View style={styles.bt_container}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.btl_container}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.btn}
                >
                    <View style={styles.inner_btn_view}>
                        <Image
                            source={require('../assets/images/icons/ic_signout.png')}
                            style={styles.icon} 
                        />
                        <Text style={styles.text_btn}>Se deconnecter</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    img_bg: {
        padding: 20
    },
    icon: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    username: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular'
    },
    phone: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Montserrat-SemiBold'
    },
    bt_container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    btl_container: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    btn: {
        paddingVertical: 15
    },
    inner_btn_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_btn: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 5
    },
    icon: {
        width: 23,
        height: 23
    }
})