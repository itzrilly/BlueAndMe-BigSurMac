import React, { Fragment, useEffect } from 'react'
import { SafeAreaView, Text, Platform, StatusBar, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  
  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle='dark-content' /> }
      <SafeAreaView>
        <Text>Hello!</Text>
      </SafeAreaView>
    </Fragment>
  )

}

const styles = StyleSheet.create({
  
})

export default App;
