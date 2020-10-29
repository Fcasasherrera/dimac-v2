import React, { Suspense } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/index';


const { Navigator, Screen } = createDrawerNavigator();
import CustomDrawer from '../components/CustomDrawer'
import * as options from './options';

const Router = ({ route: { params } }) => {
    return (
        <Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} params={params} />}>
            <Screen name="Home" component={HomeScreen} initialParams={params} options={options.header}/>
            <Screen name="Dimac" component={HomeScreen} initialParams={params} />
            <Screen name="Nomina" component={HomeScreen} initialParams={params} />
            <Screen name="Cursos" component={HomeScreen} initialParams={params} />
            <Screen name="Chat" component={HomeScreen} initialParams={params} />
        </Navigator>
    );
};

export default Router;