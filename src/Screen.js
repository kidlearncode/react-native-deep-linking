import { Navigation } from 'react-native-navigation';
import { registerScreen } from './App';

registerScreen()

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Tab 1',
            icon: require('../img/ic_home_36pt.png'),
            screen: 'tabs.Tab1'
        }, {
            label: 'Tab 2',
            icon: require('../img/ic_android_36pt.png'),
            screen: 'tabs.Tab2'
        }
    ]
})