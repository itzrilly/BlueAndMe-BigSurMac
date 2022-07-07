import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from '../pages/Login'
import Home from '../pages/Home'
// import Product from '../pages/Product'
import Service from '../pages/Service'
import Support from '../pages/Support'
import Menu from '../pages/Menu'
import CustomDrawer from '../components/CustomDrawer'

const BlueStack = createNativeStackNavigator()
const BlueTab = createBottomTabNavigator()
const BlueDrawer = createDrawerNavigator()

const BlueTabNavigator = () => {
    const navigation = useNavigation()
    return (
        <BlueTab.Navigator screenOptions={ { 
            tabBarStyle:{
                shadowColor: 'rgba(0,0.0,0,1)',
                showLabel: { width: 0, height: 0 },
                shadowOpacity: 0.1,
                shadowRadius: 30,
                elevation: 10,
                backgroundColor: '#fff'
            },
            tabBarShowLabel: true,
        }}>
            <BlueTab.Screen name='Accueil' component={Home} options = {{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_home_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_home.png')}
                                style={styles.icon} />
                        )}
                    </View>
            }} />
            {/*
            <BlueTab.Screen name='Produit' component={Product} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_product_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_product.png')}
                                style={styles.icon} />
                        )}
                    </View>
            }} />
            */}
            <BlueTab.Screen name='Service' component={Service} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_service_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_service.png')}
                                style={styles.icon} />
                        )}
                    </View>
            }} />
            <BlueTab.Screen name='Support' component={Support} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <View style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_support_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_support.png')}
                                style={styles.icon} />
                        )}
                    </View>
            }} />
            <BlueTab.Screen name='Menu' component={Menu} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_menu_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_menu.png')}
                                style={styles.icon} />
                        )}
                    </TouchableOpacity>
            }} />
        </BlueTab.Navigator>
    )
}

const BlueDrawerNavigator = () => {
    return (
        <BlueDrawer.Navigator 
            drawerContent={
                props => <CustomDrawer { ...props } />
            }
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#0d41e1',
                drawerActiveTintColor: '#fff',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 15
                }
            }}
        >
            <BlueDrawer.Screen name="Home" component={BlueTabNavigator} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_home_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_home.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Mes informations" component={Service} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_user_ios_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_user_ios_black.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Notifications" component={Support} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_clock_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_clock.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Modifier le mot de passe" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_password_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_password.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
            <BlueDrawer.Screen name="Partager" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_share_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_share.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Noter Blue And Me" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_rank_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_rank.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Tutoriel" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_tutorial_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_tutorial.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="A propos nous" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_aboutus_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_aboutus.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
             <BlueDrawer.Screen name="Langue" component={Menu} 
                options={{
                    drawerIcon: ({ focused }) => 
                    <View>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_language_white.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_language.png')}
                                style={styles.icon} />
                        )}
                    </View>
                }}
            />
        </BlueDrawer.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <BlueStack.Navigator initialRouteName='Login'>
                <BlueStack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Home'
                    component={BlueDrawerNavigator}
                    options={{ headerShown: false }}
                />
                {/*<BlueStack.Screen
                    name='Product'
                    component={Product}
                    options={{ headerShown: false }}
                />*/}
                <BlueStack.Screen
                    name='Service'
                    component={Service}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Support'
                    component={Support}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Menu'
                    component={Menu}
                    options={{ headerShown: false }}
                />
            </BlueStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({
    icon: {
      width: 23,
      height: 23
    }
})