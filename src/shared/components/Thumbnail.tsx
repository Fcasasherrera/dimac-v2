import React from 'react';
import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';
import { colors } from '../styles';

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
            <ImgBackground source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=400' }}>
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
    height: 150px;
`
const Img = styled.Image<StyleProps>`
    width: 120px;
    height: 120px;
    border-radius: 150px;
`
const ImgBackground = styled.ImageBackground<StyleProps>`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`
