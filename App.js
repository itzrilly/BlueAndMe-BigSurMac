import React, { Fragment, useEffect } from 'react'
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Navigation from './navigation/Navigation'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Fragment>
      { Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </Fragment>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

export default App;
