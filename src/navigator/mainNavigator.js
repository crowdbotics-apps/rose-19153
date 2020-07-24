import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile84196Navigator from '../features/UserProfile84196/navigator';
import Settings84195Navigator from '../features/Settings84195/navigator';
import Settings84193Navigator from '../features/Settings84193/navigator';
import SignIn284191Navigator from '../features/SignIn284191/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile84196: { screen: UserProfile84196Navigator },
Settings84195: { screen: Settings84195Navigator },
Settings84193: { screen: Settings84193Navigator },
SignIn284191: { screen: SignIn284191Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
