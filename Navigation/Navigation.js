import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Login from '../pages/Login'
import Home from '../pages/Home'
// import Product from '../pages/Product'
import Service from '../pages/Service'
import Support from '../pages/Support'
import Menu from '../pages/Menu'

const BlueStack = createNativeStackNavigator()
const BlueTab = createBottomTabNavigator()

const BlueTabNavigator = () => {
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
                tabBarIcon: ({ focused }) => <View style={{ padding: 5, borderTopColor: focused ? 'dodgerblue' : '', borderTopWidth: focused ? 2 : 0 }}>
                        { focused ? (
                            <Image 
                                source={require('../assets/images/icons/ic_menu_blue.png')}
                                style={styles.icon} />
                        ) : (
                            <Image 
                                source={require('../assets/images/icons/ic_menu.png')}
                                style={styles.icon} />
                        )}
                    </View>
            }} />
        </BlueTab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <BlueStack.Navigator initialRouteName='Test'>
                <BlueStack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <BlueStack.Screen
                    name='Home'
                    component={BlueTabNavigator}
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