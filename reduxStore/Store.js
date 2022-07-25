import { legacy_createStore, combineReducers } from 'redux'
import themeReducer from './Reducers'

// Mettre en place un reducer général
const rootReducer = combineReducers({
    theme: themeReducer
})

// Créer un store avec le reducer
const configureStore = () => {
    return legacy_createStore(rootReducer)
}

// Exporter le store configuré
export default(configureStore)