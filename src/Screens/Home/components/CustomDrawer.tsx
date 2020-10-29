import * as React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import styled from 'styled-components/native';
import { Thumbnail } from '../../../shared/components/Thumbnail';
import { useNavigation } from '@react-navigation/native';
import { colors } from 'shared/styles';
import FIcon from 'react-native-vector-icons/Feather';
import { IconContainer } from 'shared/components/commons'
import MIcon from 'react-native-vector-icons/Ionicons';;

interface CustomDrawerProps {
    params,
}

const CustomDrawer = (props: CustomDrawerProps) => {
    const navigation = useNavigation()
    const { name } = props.params;
    return (
        <>
            <Container>
                <Thumbnail onClick={() => { }} width={'40px'}>
                    <LabelBox>
                        <Label white>Karine</Label>
                    </LabelBox>
                </Thumbnail>
                {/**
                * @deprecated please no :(
                */}
                <ContentBox contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                    <ItemBox active={true} onPress={() => navigation.navigate('Home')}>
                        <IconContainer>
                            <MIcon name="home-outline" size={18} color={colors.primary} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={true}>Inicio</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                    <ItemBox active={false} onPress={() => navigation.navigate('Dimac')}>
                        <IconContainer>
                            <ImgIcon source={require('assets/icons/dimac-blue-drawer.png')} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={false}>Dimac</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                    <ItemBox active={false} onPress={() => navigation.navigate('Nomina')}>
                        <IconContainer>
                            <ImgIcon source={require('assets/icons/payroll.png')} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={false}>Nomina</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                    <ItemBox active={false} onPress={() => navigation.navigate('Cursos')}>
                        <IconContainer>
                            <ImgIcon source={require('assets/icons/courses.png')} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={false}>Cursos</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                    <ItemBox active={false} onPress={() => navigation.navigate('Chat')}>
                        <IconContainer>
                            <MIcon name="chatbubble-ellipses-outline" size={18} color={colors.primary} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={false}>Chat</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                    <ItemBox active={false} onPress={() => navigation.replace('Login')}>
                        <IconContainer>
                            <ImgIcon source={require('assets/icons/logout.png')} />
                        </IconContainer>
                        <LabelDrawerBox>
                            <Label active={false}>Cerrar Sesión</Label>
                        </LabelDrawerBox>
                    </ItemBox>
                </ContentBox>
                {/* <DrawerContentScrollView {...props} style={{marginTop: 0, paddingTop: 0}}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label="Cerrar Sesión"
                        onPress={() => navigation.replace('Login')}
                    />
                </DrawerContentScrollView> */}
            </Container>
        </>
    );
};

export default CustomDrawer;
const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: flex-start;
`
type LabelDrawerProps = {
    active?: boolean,
    white?: boolean
}
const Label = styled.Text<LabelDrawerProps>`
    font-size: 14px;
    text-transform: capitalize;
    color: ${props => props.active ? colors.primary : props.white ? colors.white : colors.black}
`
const LabelBox = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    padding: 5px;
    border-radius: 10px;
    width: 40%;
`
const LabelDrawerBox = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5px;
`

const ItemBox = styled.TouchableOpacity<LabelDrawerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.active ? colors.primaryLigth : 'transparent'};
    padding: 8px;
    border-radius: 10px;
    width: 100%;
    margin-vertical: 5px;
`

const ContentBox = styled.ScrollView`
    background-color: ${colors.white};
    padding: 10px;
    margin-top: -24px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    height: 100%;
`
const ImgIcon = styled.Image`
    width: 18px;
    height: 18px;
    resize-mode: contain;
`
