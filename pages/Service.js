import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Alert, Button, StyleSheet } from 'react-native'
import PackageItem from '../components/PackageItem'
import packages from '../helpers/PackageData'
//import AsyncStorage from '@react-native-async-storage/async-storage'

//const extractKey = ({ forfait }) => forfait

const Service = () => {

    const [ data, setData ] = useState([])

    renderItem = () => {
        let items = []

        packages.map(packs => {
            // Alert.alert('Mes forfaits', JSON.stringify(packs))
            items = packs.infoPackage.map(ipack => {
                //Alert.alert('Mes forfaits', JSON.stringify(ipack))
                //items = ipack.tabs.map(forfait => {
                    // Alert.alert('Mes forfaits', JSON.stringify(forfait))
                    /*return (
                        <View key={forfait.id} >
                            <Text>{forfait.title}</Text>
                        </View>
                    )*/
                    return ipack
                //})
            })
            setData(items)
        })

        /*return (
            <View>{items}</View>
        )*/
    }
    
    useEffect(() => {
       renderItem()
    }, []) 

  
        
    return(
        <View style={styles.container}>
            <View style={styles.title_view}>
                <Text style={styles.title_text}>TOUS NOS OFFRES BLUETIFUL</Text>
            </View>
            <View style={styles.flatlist_view}>
                <FlatList
                    data={data}
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
    title_view: {
        backgroundColor: '#0d41e1', 
        height: 90,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title_text: {
        fontFamily: 'Montserrat-Bold',
        color: '#fff',
        fontSize: 20
    },
    flatlist_view: {
        paddingBottom: 190
    },
    flatlist: {
    }
})