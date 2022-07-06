import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Alert, Button, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import PackageItem from '../components/PackageItem'
//import packages from '../helpers/PackageData'
import allinone  from '../helpers/Aio'
import  onlydata from '../helpers/Od'
//import AsyncStorage from '@react-native-async-storage/async-storage'

const Service = () => {

    const [ data, setData ] = useState([])
 
    /*renderItem = () => {
        let items = []

        packages.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items)
        })
    }*/

    const renderItem = () => {
        let items0 = []

        allinone.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items0 = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items0)
        })
    }

    const re_renderItem = () => {
        let items1 = []

        onlydata.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items1 = packs.infoPackage.map(ipack => {
                return ipack
            })
            setData(items1)
        })
    }
    
    useEffect(() => {
       renderItem()
    }, []) 

  
        
    return(
        <View style={styles.container}>

            {/*<View style={styles.title_view}>
                <Text style={styles.title_text}>Choisisez le type de forfait que vous souhaitez activer</Text>
            </View> */}

            <View style={styles.title_view}>
                <Text style={styles.title_text}>TOUS NOS OFFRES BLUETIFUL</Text>
            </View>

            <View style={styles.top_tabs}>
                <TouchableOpacity
                    onPress={renderItem}
                    style={{ flex: 1, height: 50, justifyContent: 'center' }}
                >
                    <Text style={styles.top_tab_text}>Forfait tout-en-un</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={re_renderItem}
                    style={{ flex: 1, height: 50, justifyContent: 'center' }}
                >
                    <Text style={styles.top_tab_text}>Internet uniquement</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.flatlist_view}>
                <FlatList
                    data={data}
                    extraData={data}
                    initialNumToRender={4}
                    //renderItem={this.renderItem}
                    renderItem={({item}) => <PackageItem
                            category = {item.category}
                            category_less = {item.category_less}
                            daily = {item.daily}
                            weekly = {item.weekly}
                            monthly = {item.monthly}
                            title = {item.title}
                            price = {item.price}
                            overview = {item.overview}
                            validity = {item.validity}
                            gain={item.gain}
                            ic_facebook = {item.ic_facebook}
                            ic_whatsapp = {item.ic_whatsapp}
                            ic_twitter = {item.ic_twitter}
                            ic_telegram = {item.ic_telegram}
                            ic_instagram = {item.ic_instagram}
                            ic_youtube = {item.ic_youtube}
                            ic_netflix = {item.ic_netflix}
                            all_airtime_network = {item.all_airtime_network}
                            call_flot = {item.call_flot}
                            sms_flot = {item.sms_flot}
                            all_sms_network = {item.all_sms_network}
                            airtime_other_blue = {item.airtime_other_blue}
                            daily_limit = {item.daily_limit}
                            download = {item.download}
                        />
                    }
                    keyExtractor={(item) => item.id}
                    style={styles.flatlist}
                    // keyExtractor={extractKey}
                />
            </View>
        </View>
    )

}

export default Service

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
    },
    top_tabs: {
        flexDirection: 'row',
        backgroundColor: 'darkblue'
    },
    tab_1: {
        
    },
    tab_2: {
        flex: 1,
        height: 50,
        justifyContent: 'center'
    },
    top_tab_text: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        color: '#fff'
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
    flatlist_view: {
        paddingBottom: 280
    },
    flatlist: {
    }
})