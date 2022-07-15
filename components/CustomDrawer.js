import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Share } from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
//import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
    const { navigation } = props

    const moveToScreen = (screen) => {
        navigation.navigate(screen)
    }

    const shareTheApp = () => {
        Share.share({ title: 'Blue And Me', message: 'Télécharges l\'application Blue And Me et bénéficie de 1Go gratuit' })
    }

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
                    <View style={styles.view_infouser}>
                        <Image 
                            source={require('../assets/images/icons/ic_user_ios_gray.png')} 
                            style={styles.icon_user} />
                        <Text style={styles.username}>Uchiha Itachi</Text>
                        <Text style={styles.phone}>620 00 00 00</Text>
                    </View>
                    {/*<Text
                        onPress={() => navigation.closeDrawer()}
                        style={styles.btn_close}
                    >
                        Fermer
                    </Text>*/}
                </ImageBackground>
                
                <View style={styles.bt_container}>
                    {/*<DrawerItemList {...props} />*/}

                    {/*<TouchableOpacity 
                        onPress={ () => {} }
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_home.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Accueil</Text>
                        </View>
                    </TouchableOpacity>*/}
                    
                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_user_ios_black.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Mes informations</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_clock.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Notifications</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_plan.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Plan tarifaire</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('Password')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_password.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Mot de passe</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_heraut.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Dernières offres</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={shareTheApp}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_share.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Partager</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_rank.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Noter Blue And Me</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_tutorial.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Tutoriel</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_aboutus.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>A propos nous</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => moveToScreen('InfoUser')}
                        style={styles.btn}>
                        <View style={styles.inner_btn_view}>
                            <Image source={require('../assets/images/icons/ic_language.png')} style={styles.icon} />
                            <Text style={styles.text_btn}>Langue</Text>
                        </View>
                    </TouchableOpacity>

                    {/*<DrawerItem
                        label='Accueil'
                        onPress={() => navigation.navigate('Home')}
                        icon={() => <Image source={require('../assets/images/icons/ic_home.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Mes informations'
                        onPress={() => navigation.navigate('InfoUser')}
                        icon={() => <Image source={require('../assets/images/icons/ic_user_ios_black.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Notifications'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_clock.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Plan tarifaire'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_plan.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Mot de passe'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_password.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Dernières offres'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_heraut.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Partager'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_share.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Noter Blue And Me'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_rank.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Tutoriel'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_tutorial.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='A propos nous'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_aboutus.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />

                    <DrawerItem
                        label='Langue'
                        onPress={() => navigation.navigate('Service')}
                        icon={() => <Image source={require('../assets/images/icons/ic_language.png')} style={styles.icon} />}
                        labelStyle={styles.drawer_item}
                    />*/}
                </View>
            </DrawerContentScrollView>

            <View style={styles.btl_container}>
                <TouchableOpacity
                    onPress={ () => moveToScreen('Login') }
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
        flexDirection: 'row',
        padding: 20
    },
    view_infouser: {
        //flex: 1,
        alignItems: 'center'
    },
    /*btn_close: {
        flex: 1,
        color: '#fff',
    },*/
    icon_user: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10
    },
    username: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    phone: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },
    bt_container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5,
        paddingLeft: 20,
    },
    /*drawer_item: {
        marginLeft: -25,
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
    },
    drawer_text: {
    },*/
    btl_container: {
        padding: 5,
        paddingLeft: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    btn: {
        paddingVertical: 12
    },
    inner_btn_view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text_btn: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        marginLeft: 15
    },
    icon: {
        width: 23,
        height: 23,
    }
})