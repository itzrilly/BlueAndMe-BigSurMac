import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Service from '../pages/Service'
import Support from '../pages/Support'
import Menu from '../pages/Menu'

const BlueTabNavigator = createBottomTabNavigator({
    Accueil: { screen: Home },
    Produit: { screen: Product },
    Service: { screen: Service },
    Support: { screen: Support },
    Menu: { screen: Menu }
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state
            if(routeName === 'Accueil'){
                return (
                    <View style={{ flex: 1, justifyContent: 'flex-end', borderTopColor: focused ? tintColor : '', borderTopWidth: focused ? 2 : 0 }}>
                        <Image 
                            source={require('../assets/images/ic_home.png')}
                            style={styles.icon} />
                    </View>
                )
            }else if(routeName === 'Produit'){
                return (
                    <View style={{ flex: 1, justifyContent: 'flex-end', borderTopColor: focused ? tintColor : '', borderTopWidth: focused ? 2 : 0 }}>
                        <Image 
                            source={require('../assets/images/ic_product.png')}
                            style={styles.icon} />
                    </View>  
                ) 
            }else if(routeName === 'Service'){
                return (
                    <View style={{ flex: 1, justifyContent: 'flex-end', borderTopColor: focused ? tintColor : '', borderTopWidth: focused ? 2 : 0 }}>
                        <Image  
                            source={require('../assets/images/ic_service.png')}
                            style={styles.icon} />   
                    </View>
                )
            }else if(routeName === 'Support'){
                return (
                    <View style={{ flex: 1, justifyContent: 'flex-end', borderTopColor: focused ? tintColor : '', borderTopWidth: focused ? 2 : 0 }}>
                        <Image  
                            source={require('../assets/images/ic_support.png')}
                            style={styles.icon} />     
                    </View>
                )
            }else{
                return (
                    <View style={{ flex: 1, justifyContent: 'flex-end', borderTopColor: focused ? tintColor : '', borderTopWidth: focused ? 2 : 0 }}>
                        <Image 
                            source={require('../assets/images/ic_menu.png')}
                            style={styles.icon} />
                    </View>
                )
            }
        }
    }),
    tabBarOptions: {
        activeTintColor: 'blue',
        inactiveTintColor: 'rgba(0,0.0,0,6)',
        showLabel: true,
        showIcon: true,
        style: {
            shadowColor: 'rgba(0,0.0,0,6)',
            showLabel: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 15,
            elevation: 5,
            borderTopColor: 'transparent',
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20
        }
    }
})

const Navigation = createStackNavigator({
    Login: { screen: Login },
    Home: { screen: BlueTabNavigator },
    Product: { screen: Product },
    Service: { screen: Service },
    Support: { screen: Support },
    Menu: { screen: Menu }
},
{
    headerMode: 'none',
    initialRouteName: 'Login'
})
  
const styles = StyleSheet.create({
    icon: {
      width: 23,
      height: 23
    }
})

export default createAppContainer(Navigation)