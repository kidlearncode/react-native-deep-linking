import { Navigation } from 'react-native-navigation';
import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';

export function registerScreen() {
  Navigation.registerComponent('tabs.Tab1', () => Tab1)
  Navigation.registerComponent('tabs.Tab2', () => Tab2)
  Navigation.registerComponent('screen.Screen1', () => Screen1)
  Navigation.registerComponent('screen.Screen2', () => Screen2)

}
