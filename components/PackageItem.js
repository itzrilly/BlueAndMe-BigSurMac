import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import numeral from 'numeral'

const PackageItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.item_container}>
                {props.category ? (<Text style={styles.text_item_title_big}>{props.category}</Text>) : ''}
                {props.category_less ? (<Text style={styles.text_item_title_less}>{props.category_less}</Text>) : ''}
                {props.daily ? (<Text style={styles.text_item_title_less}>{props.daily}</Text>) : ''}
                {props.weekly ? (<Text style={styles.text_item_title_less}>{props.weekly}</Text>) : ''}
                {props.monthly ? (<Text style={styles.text_item_title_less}>{props.monthly}</Text>) : ''}
                {props.title ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Plan: </Text><Text style={styles.text_item_package}>{props.title}</Text></View>) : ''}
                {props.price ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Prix: </Text><Text style={styles.text_item}>{numeral(props.price).format('0,0[.]00')} U</Text></View>) : ''}
                {props.overview ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Détail: </Text><Text style={styles.text_item}>{props.overview}</Text></View>) : ''}
                {props.validity ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Validité: </Text><Text style={styles.text_item}>{props.validity}</Text></View>) : ''}
                {props.gain ? (<View style={styles.view_line}><Text style={styles.sub_tile}>DATA: </Text><Text style={styles.text_item}>{props.gain}</Text></View>) : ''}
                { props.ic_facebook || props.ic_whatsapp || props.ic_twitter || props.ic_telegram || props.ic_instagram || props.ic_youtube || props.ic_netflix ?
                (<View style={styles.view_line}>
                        <Text style={styles.sub_tile}>Applis illimités: </Text>
                        <View style={styles.rs_view}>
                            {props.ic_facebook ? (<Image source={{ uri: props.ic_facebook }} style={styles.sm_icon} />) : ''}
                            {props.ic_whatsapp ? (<Image source={{ uri: props.ic_whatsapp }} style={styles.sm_icon} />) : ''}
                            {props.ic_twitter ? (<Image source={{ uri: props.ic_twitter }} style={styles.sm_icon} />) : ''}
                            {props.ic_telegram ? (<Image source={{ uri: props.ic_telegram }} style={styles.sm_icon} />) : ''}
                            {props.ic_instagram ? (<Image source={{ uri: props.ic_instagram }} style={styles.sm_icon} />) : ''}
                            {props.ic_youtube ? (<Image source={{ uri: props.ic_youtube }} style={styles.sm_icon} />) : ''}
                            {props.ic_netflix ? (<Image source={{ uri: props.ic_netflix }} style={styles.sm_icon} />) : ''}
                        </View>
                </View>) 
                : '' }
                {props.all_airtime_network ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Airtime tous réseaux: </Text><Text style={styles.text_item}>{props.all_airtime_network} U</Text></View>) : ''}
                {props.call_flot ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Appels à des numéros de la flotte mobile: </Text><Text style={styles.text_item}>{props.call_flot}</Text></View>) : ''}
                {props.sms_flot ? (<View style={styles.view_line}><Text style={styles.sub_tile}>SMS à des numéros de la flotte mobile: </Text><Text style={styles.text_item}>{props.sms_flot}</Text></View>) : ''}
                {props.all_sms_network ? (<View style={styles.view_line}><Text style={styles.sub_tile}>SMS tous réseaux: </Text><Text style={styles.text_item}>{props.all_sms_network}</Text></View>) : ''}
                {props.airtime_other_blue ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Airtime autres numéros Blue: </Text><Text style={styles.text_item}>{numeral(props.airtime_other_blue).format('0,0[.]00')} U</Text></View>) : ''}
                {props.daily_limit ? (<View style={styles.view_line}><Text style={styles.sub_tile}>Limite journalier: </Text><Text style={styles.text_item}>{props.daily_limit}</Text></View>) : ''}
                {props.download ? (<View style={styles.view_line_last}><Text style={styles.sub_tile}>Téléchargements: </Text><Text style={styles.text_item}>{props.download}</Text></View>) : ''}
            </View>
            { (props.category || props.category_less || props.daily || props.weekly || props.monthly) ?  ''  :
            ( 
                <View style={styles.btn_container}>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={styles.subscribe_btn}
                    >
                        <Text style={styles.btn_subscribe_text}>Activer</Text>
                    </TouchableOpacity>
                </View> 
            )}
        </View>
    )
}

export default PackageItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        padding: 10
    },
    text_item_title_big: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 24,
    },
    text_item_title_less: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        textAlign: 'center'
    },
    text_item_title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    view_line: {
        flexDirection: 'row',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    view_line_last: {
        flexDirection: 'row',
        borderBottomWidth: 0,
        alignItems: 'center',
    },
    sub_tile: {
        fontFamily: 'Montserrat-SemiBold',
        flex: 1,
        flexWrap: 'wrap'
    },
    text_item_package: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#0d41e1',
        flex: 2,
    },
    text_item: {
        flex: 1,
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
        flexWrap: 'wrap'
    },
    item_container: {
        flex: 2,
    },
    btn_container: {
        flex: 1,
        justifyContent: 'center',
    },
    subscribe_btn: {
        backgroundColor: '#0d41e1',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        shadowColor: 'rgba(0,0.1,0,5)',
        shadowOpacity: 0.3,
        elevation: 1
    },
    btn_subscribe_text: {
        color: '#fff',
        fontFamily: 'Montserrat-SemiBold'
    },
    rs_view: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    sm_icon: {
        height: 25,
        width: 25
    }
})