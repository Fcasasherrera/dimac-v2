import React from 'react';
import { DotIndicator } from 'react-native-indicators';
import styled from 'styled-components/native';
import { Label, ShadowStyles } from 'shared/components/commons';
import { colors, spacings } from '../styles';
import MIcon from 'react-native-vector-icons/Ionicons';;
import { Text } from "react-native";

type CardIconProps = {
    icon: string;
    title: string;
    note?: string;
    content?: Array<any>;
    outline?: boolean;
    secondary?: boolean;
    accent?: boolean;
    isActivated?: boolean;
    onClick: any;
    width?: string;
    margin?: string;
    isLoading?: boolean;
};

export const CardIcon: React.FC<CardIconProps> = ({
    icon,
    title,
    note,
    content,
    children,
    isLoading = false,
    onClick,
    isActivated = true,
}) => {
    return isActivated ? (
        <Card>
            <Row>
                <IconCardBox>
                    {icon === 'dimac' ?
                        <LogoSmall source={require('assets/icons/dimac-white-small.png')} />
                        : icon === 'courses' ?
                            <LogoSmall source={require('assets/icons/courses-white.png')} />
                            : icon === 'payroll' ?
                                <LogoSmall source={require('assets/icons/payroll-white.png')} />
                                : null}
                </IconCardBox>
                <SmallBox style={{ flex: 1, marginLeft: 8, }}>
                    <Label>
                        {title}
                    </Label>
                    {note ?
                        <Label secondary bold='normal' numberOfLines={1} style={{ paddingHorizontal: 0, textAlign: 'left', }}>
                            {note}
                        </Label>
                    : null}
                </SmallBox>
            </Row>
            {title !== 'Nuestros Valores' ?
                <Row>
                    <SmallBox>
                        {content && content.map((text) => {
                            return (
                                <Label bold='normal' style={{ paddingTop: spacings.left, textAlign: 'justify', }}>
                                    {text}
                                </Label>
                            )
                        })}
                    </SmallBox>
                </Row>
                :
                <Row center>
                    <SmallBox>
                        <Label accent bold='normal' style={{ marginRight: 6, paddingTop: spacings.extraThin, textAlign: 'center', }}>
                            D
                        </Label>
                        <Label accent bold='normal' style={{ marginRight: 6, paddingTop: spacings.extraThin, textAlign: 'center', }}>
                            I
                        </Label>
                        <Label accent bold='normal' style={{ marginRight: 6, paddingTop: spacings.extraThin, textAlign: 'center', }}>
                            M
                        </Label>
                        <Label accent bold='normal' style={{ marginRight: 6, paddingTop: spacings.extraThin, textAlign: 'center', }}>
                            A
                        </Label>
                        <Label accent bold='normal' style={{ marginRight: 6, paddingTop: spacings.extraThin, textAlign: 'center', }}>
                            C
                        </Label>
                    </SmallBox>
                    <SmallBox>
                        <Label bold='normal' style={{ paddingTop: spacings.extraThin, textAlign: 'justify', }}>
                            isciplina
                        </Label>
                        <Label bold='normal' style={{ paddingTop: spacings.extraThin, textAlign: 'justify', }}>
                            ntegridad
                        </Label>
                        <Label bold='normal' style={{ paddingTop: spacings.extraThin, textAlign: 'justify', }}>
                            ejora Continua
                        </Label>
                        <Label bold='normal' style={{ paddingTop: spacings.extraThin, textAlign: 'justify', }}>
                            ctitud
                        </Label>
                        <Label bold='normal' style={{ paddingTop: spacings.extraThin, textAlign: 'justify', }}>
                            ompromiso
                        </Label>
                    </SmallBox>
                </Row>
            }
        </Card>
    ) : (
            <CardTouchable center onPress={onClick}>
                <Row>
                    <IconCardBox>
                        {icon === 'dimac' ?
                            <LogoSmall source={require('assets/icons/dimac-white-small.png')} />
                            : icon === 'courses' ?
                                <LogoSmall source={require('assets/icons/courses-white.png')} />
                                : icon === 'payroll' ?
                                    <LogoSmall source={require('assets/icons/payroll-white.png')} />
                                    : icon === 'notification' ?
                                        <MIcon name="ios-notifications-outline" size={28} color={colors.white} />
                                        : null}
                    </IconCardBox>
                    <SmallBox style={{ flex: 1, marginLeft: 8, }}>
                        <Label>
                            {title}
                        </Label>
                        {note ?
                            <Label secondary bold='normal' numberOfLines={1} style={{ paddingHorizontal: 0, textAlign: 'left', }}>
                                {note}
                            </Label>
                            : null}
                    </SmallBox>
                    <IconCardBox transparent>
                        {icon === 'dimac' ?
                            <LogoSmall source={require('assets/icons/dimac-white-small.png')} />
                            : icon === 'courses' ?
                                <LogoSmall transparent source={require('assets/icons/play.png')} />
                                : icon === 'payroll' ?
                                    <LogoSmall transparent source={require('assets/icons/download.png')} />
                                    : null}
                    </IconCardBox>
                </Row>

            </CardTouchable>
        );
};
type StyledContainerProps = {
    center?: string;
};
export const SmallBox = styled.View`
`
type IconCardBoxProps = {
    transparent?: boolean,
}
export const IconCardBox = styled.View<IconCardBoxProps>`
    width: ${props => props.transparent ? '50px' : '70px'};
    height: ${props => props.transparent ? '50px' : '70px'};
    border-radius: 20px
    background-color: ${props => props.transparent ? 'transparent' : colors.primary}
    justify-content: center;
    align-items: center;
`
export const Row = styled.View<StyledContainerProps>`
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: ${props => props.center ? 'center' : 'space-between'};
    align-items: center;
`

export const CardTouchable = styled.TouchableOpacity<StyledContainerProps>`
    ${ShadowStyles}
    background-color: ${colors.white}
    border-radius: 20px;
    padding: 16px;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: center;
    
    margin-vertical: ${spacings.thin}px;
    margin-horizontal: ${spacings.left}px;
`
export const Card = styled.View<StyledContainerProps>`
    ${ShadowStyles}
    background-color: ${colors.white}
    border-radius: 20px;
    padding: 16px;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    align-items: center;
    
    margin-vertical: ${spacings.thin}px;
    margin-horizontal: ${spacings.left}px;
`
export const LogoSmall = styled.Image<IconCardBoxProps>`
    width: ${props => props.transparent ? '20px' : '35px'};
    height: ${props => props.transparent ? '20px' : '35px'};
    resize-mode: contain;
`