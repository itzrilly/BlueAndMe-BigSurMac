import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Components/Home'
import Product from '../Components/Product'
import Service from '../Components/Service'
import Support from '../Components/Support'
import Menu from '../Components/Menu'

const HomeStackNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Accueil'
      }
    }
})

const ProductStackNavigator = createStackNavigator({
    Product: {
      screen: Product,
      navigationOptions: {
        title: 'Produit'
      }
    }
})

const ServiceStackNavigator = createStackNavigator({
    Service: {
      screen: Service,
      navigationOptions: {
        title: 'Service'
      }
    }
})

const SupportStackNavigator = createStackNavigator({
    Support: {
      screen: Support,
      navigationOptions: {
        title: 'Support'
      }
    }
})

const MenuStackNavigator = createStackNavigator({
    Menu: {
      screen: Menu,
      navigationOptions: {
        title: 'Menu'
      }
    }
})

const BlueTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <Image source={require('../Images/ic_home.png')}
                    style={styles.icon}/>
                }
            }
        },
        Product: {
            screen: ProductStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <Image source={require('../Images/ic_product.png')}
                    style={styles.icon}/>                 
                },
            }
        },
        Service: {
          screen: ServiceStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image  source={require('../Images/ic_service.png')}
                style={styles.icon} />                    
            }
          }
        },
        Support: {
          screen: SupportStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <Image  source={require('../Images/ic_support.png')}
                style={styles.icon} />                
            }
          }
        },
        Menu: {
            screen: MenuStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                return <Image source={require('../Images/ic_menu.png')}
                    style={styles.icon} />
                }
            }
          }
      },
        {
            tabBarOptions: {
                activeBackgroundColor: '#DDDDDD',
                inactiveBackgroundColor: '#FFFFFF',
                showLabel: true,
                showIcon: true,
                style:{
                    borderTopWidth: 1,
                    borderTopColor: '#D3D3D3'
                }
            }
        }
  )
  
  const styles = StyleSheet.create({
    icon: {
      width: 23,
      height: 23
    }
  })
  
export default createAppContainer(BlueTabNavigator)