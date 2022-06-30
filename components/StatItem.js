import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import numeral from 'numeral'

const StatItem = (props) => {
    return (
        <View style={styles.item_container}>
            <View style={styles.item_right}>
                <Text style={styles.icon_title}>{props.title}</Text>
                <Image
                    source={{ uri: props.image }}
                    style={styles.icon}
                />
            </View>
            <View style={styles.item_left_container}>
                { props.qty ? (<Text style={styles.item_left_text}>{numeral(props.qty).format('0,0[.]00')} U</Text>) : '' }
                { props.data ? (<Text style={styles.item_left_text}>{props.data}</Text>) : '' }
                { props.sms ? (<Text style={styles.item_left_text}>{props.sms}</Text>) : '' }
                <View style={styles.view_date} ><Text style={styles.validity_date}>{'\n'}{props.text_validity} {props.date_exp}</Text></View>
            </View>
        </View>
    )
}

export default StatItem

const styles = StyleSheet.create({
    item_container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 7,
        marginBottom: 7,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    item_right: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    icon_title: {
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12
    },
    icon: {
        height: 50,
        width: 50,
        margin: 5
    },
    item_left_container: {
        flex: 3
    },
    item_left_text: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30
    },
    view_date: {
    },
    validity_date: {
        fontFamily: 'Montserrat-Bold'
    }
})