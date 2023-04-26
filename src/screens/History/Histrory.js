import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import ChequeHistoryScreen from './ChequeHistory';
import OnlineHistoryScreen from './OnlineHistory';
import RoomBookingHistoryScreen from './RoomBookingHistory';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
function Histrory() {
  return (
    <>
      <ProfileHeader />
      <Tab.Navigator>
        <Tab.Screen name="Online" component={OnlineHistoryScreen} />
        <Tab.Screen name="Cheque" component={ChequeHistoryScreen} />
        <Tab.Screen name="Room" component={RoomBookingHistoryScreen} />
      </Tab.Navigator>
    </>
  );
}

export default Histrory;
