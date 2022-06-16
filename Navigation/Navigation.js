import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../Components/Home'
import Product from '../Components/Product'
import Service from '../Components/Service'
import Support from '../Components/Support'

const HomeStackNavigator = createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Accueil'
      }
    }
})

const ProductStackNavigator = createStackNavigator({
    Favorites: {
      screen: Product,
      navigationOptions: {
        title: 'Produit'
      }
    }
})

const ServiceStackNavigator = createStackNavigator({
    News: {
      screen: Service,
      navigationOptions: {
        title: 'Service'
      }
    }
})

const SupportStackNavigator = createStackNavigator({
    WatchedFilm: {
      screen: Support,
      navigationOptions: {
        title: 'Support'
      }
    }
})

const BlueTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <View style={styles.ic_container}>
                    <Image
                        source={require('../Images/ic_home.png')}
                        style={styles.icon}/>
                    <Text style={styles.ic_name}>Accueil</Text>
                </View>
              }
            }
        },
        Product: {
            screen: ProductStackNavigator,
            navigationOptions: {
              tabBarIcon: () => {
                  return <View style={styles.ic_container}>
                    <Image
                        source={require('../Images/ic_product.png')}
                        style={styles.icon}/>
                    <Text style={styles.ic_name}>Produit</Text>
                </View>                    
              },
            }
        },
        Service: {
          screen: ServiceStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <View style={styles.ic_container}>
                <Image
                    source={require('../Images/ic_service.png')}
                    style={styles.icon} />
                    <Text style={styles.ic_name}>Service</Text>
                </View> 
            }
          }
        },
        Support: {
          screen: SupportStackNavigator,
          navigationOptions: {
            tabBarIcon: () => {
              return <View style={styles.ic_container}>
               <Image
                    source={require('../Images/ic_support.png')}
                    style={styles.icon} />
                    <Text style={styles.ic_name}>Support</Text>
                </View> 
            }
          }
        }
      },
        {
        tabBarOptions: {
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: false,
            showIcon: true
        }
        }
  )
  
  const styles = StyleSheet.create({
    ic_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
      width: 25,
      height: 25
    },
    ic_name: {
        fontSize: 12
    }
  })
  
export default createAppContainer(BlueTabNavigator)