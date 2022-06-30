import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, Alert, FlatList } from 'react-native'
import statData from '../helpers/StatData'
import StatItem from './StatItem'

const Stats = () => {

    const [ info, setInfo ] = useState([])

    const renderItem = () => {
        let items = []

        statData.map(info => {
            // Alert.alert('Mon solde', JSON.stringify(info))
            items = info.infoBalance.map(balance => {
                // Alert.alert('Mon solde', JSON.stringify(balance))
                return balance
            })
            setInfo(items)
        })
    }

    useEffect(() => {
        renderItem()
    }, [])

    return (
        <View style={styles.container}>

            <FlatList
                data={info}
                renderItem = { ({item}) => <StatItem
                        title = {item.title}
                        image = {item.image}
                        qty= {item.qty}
                        data={item.data}
                        sms={item.sms}
                        text_validity= {item.text_validity}
                        date_exp = {item.date_exp}
                    />
                }
                keyExtractor={(item) => item.id}
                style={styles.stat_item}
            />

        </View>

    )
}

export default Stats

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 7,
        backgroundColor: '#ddd'
    },
    stat_item: {
        flex: 1,
    }
})