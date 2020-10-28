import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';
import {colors} from 'shared/styles';
import FIcon from 'react-native-vector-icons/Feather';

export const commonScreenOptions: StackNavigationOptions = {
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
  headerLeftContainerStyle: {
    paddingLeft: 16,
  },
};
