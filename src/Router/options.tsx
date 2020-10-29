import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import { colors, spacings} from 'shared/styles';
import FIcon from 'react-native-vector-icons/Feather';
import { IconContainer, ImgIcon } from 'shared/components/commons';
import MIcon from 'react-native-vector-icons/Ionicons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerActions } from '@react-navigation/native';


export const commonScreenOptionss: StackNavigationOptions = {
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.black,
  },
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerBackTitle: null,
  headerBackTitleVisible: false,
  headerBackImage: () => (
    <FIcon name="arrow-left" size={24} color={colors.black} />
  ),
};
export const commonScreenOptions = ({ navigation }): StackNavigationOptions => ({
  headerTitleAlign: 'center',

  headerLeftContainerStyle: {
    paddingHorizontal: spacings.right,
  },
  headerRightContainerStyle: {
    paddingHorizontal: spacings.right,
  },
  headerTitleStyle: {
    color: colors.black,
  },
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerBackTitle: null,
  headerBackTitleVisible: false,
  headerBackImage: () => (
    <FIcon name="arrow-left" size={24} color={colors.black} />
  ),
  headerLeft: () => (
    <IconContainer onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      {/* <FIcon name="menu" size={24} color={colors.primary} /> */}
      <ImgIcon source={require('assets/icons/menu.png')} />
    </IconContainer>
  ),
});
