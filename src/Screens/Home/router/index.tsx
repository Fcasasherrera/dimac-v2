import React, { Suspense } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/index';


const { Navigator, Screen } = createDrawerNavigator();
import CustomDrawer from '../components/CustomDrawer'
import * as options from './options';
import { DimacScreen } from '../screens/Dimac';
import { PayrollListScreen } from '../screens/PayrollList';
import { CoursesScreen } from '../screens/Courses';
import { ChatScreen } from '../screens/Chat';
import { NotificationsScreen } from '../screens/Notifications';

const Router = ({ route: { params } }) => {
    return (
        <Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} params={params} />}>
            <Screen name="Home" component={HomeScreen} initialParams={params} options={{...options.header, title: 'Inicio'}}/>
            <Screen name="Dimac" component={DimacScreen} initialParams={params} />
            <Screen name="Nomina" component={PayrollListScreen} initialParams={params} />
            <Screen name="Cursos" component={CoursesScreen} initialParams={params} />
            <Screen name="Soporte" component={ChatScreen} initialParams={params} />
            <Screen name="Notifications" component={NotificationsScreen} initialParams={params} />
        </Navigator>
    );
};

export default Router;