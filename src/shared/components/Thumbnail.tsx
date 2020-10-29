import React from 'react';
import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';
import { colors } from '../styles';
import { ImgBackground } from './commons';

type ButtonProps = {
    outline?: boolean;
    secondary?: boolean;
    accent?: boolean;
    isActivated?: boolean;
    width?: string;
    margin?: string;
    isLoading?: boolean;
    onClick: any;
};

export const Thumbnail: React.FC<ButtonProps> = ({
    children,
}) => {
    return (
        <ThumbnailButton>
            <ImgBackground source={require('assets/bgs/bg-drawer.png')}>
                {children}
            </ImgBackground>
        </ThumbnailButton>
    )
};

type StyleProps = {
    margin?: string;
    width?: string;
    outline: boolean;
    secondary: boolean;
    accent: boolean;
    isActivated: boolean;
};

const ThumbnailButton = styled.TouchableOpacity<StyleProps>`
    width: 100%;
    height: 200px;
`
const Img = styled.Image<StyleProps>`
    width: 120px;
    height: 120px;
    border-radius: 150px;
`
