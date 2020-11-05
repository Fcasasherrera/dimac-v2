import React from 'react';
import { colors, spacings } from 'shared/styles';
import styled from 'styled-components/native';
import { IconContainer } from 'shared/components/commons';
import MIcon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import { StackNavigationOptions } from '@react-navigation/stack';


const header = ({ navigation }): StackNavigationOptions => ({
    headerTitleAlign: 'center',
    
    headerTransparent: false,
    headerLeftContainerStyle: {
        paddingHorizontal: spacings.right,
    },
    headerRightContainerStyle: {
        paddingHorizontal: spacings.right,
    },
    headerLeft: () => (
        <IconContainer onPress={() => navigation.navigate('Notifications')}>
            <MIcon name="ios-notifications-outline" size={24} color={colors.black} />
        </IconContainer>
    ),
    headerRight: () => (
        <IconContainer onPress={() => navigation.navigate('MainAddressSelector')}>
            <SimpleIcon name="wallet" size={18} color={colors.black} />
        </IconContainer>
    ),
    // headerTitle: () => <Logo source={{ uri: 'https://images.squarespace-cdn.com/content/5134cbefe4b0c6fb04df8065/1540481411828-EI6QOPHKV2JQWV550JIP/squarespace-logo-horizontal-white.jpg?format=1000w&content-type=image%2Fjpeg' }} />,
});
const Logo = styled.Image`
  margin: 0 auto;
  width: 110px;
  resize-mode: contain;
`;
export { header };