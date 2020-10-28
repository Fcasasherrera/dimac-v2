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
import { ShadowStyles } from 'shared/components/commons';

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
                        <Label>Karine</Label>
                    </LabelBox>
                </Thumbnail>
                {/**
                * @deprecated please no :(
                */}
                {/* <ContentBox contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <LabelBox onPress={() => navigation.navigate('Inicio')}>
                        <Label>Inicio</Label>
                    </LabelBox>
                    <LabelBox onPress={() => navigation.navigate('Dimac')}>
                        <Label>Dimac</Label>
                    </LabelBox>
                    <LabelBox onPress={() => navigation.navigate('Nomina')}>
                        <Label>Nomina</Label>
                    </LabelBox>
                    <LabelBox onPress={() => navigation.navigate('Cursos')}>
                        <Label>Cursos</Label>
                    </LabelBox>
                    <LabelBox onPress={() => navigation.navigate('Chat')}>
                        <Label>Chat</Label>
                    </LabelBox>
                    <LabelBox onPress={() => navigation.replace('Login')}>
                        <Label>Cerrar Sesión</Label>
                    </LabelBox>
                </ContentBox> */}
                <DrawerContentScrollView {...props}>
                    <DrawerItemList {...props} />
                    <DrawerItem
                        label="Cerrar Sesión"
                        onPress={() => navigation.replace('Login')}
                    />
                </DrawerContentScrollView>
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
const Label = styled.Text`
    align-self: center;
    text-align: center;
    font-size: 14px;
    text-transform: capitalize;
    color: ${colors.white}
`
const LabelBox = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    padding: 5px;
    border-radius: 50px;
    width: 40%;
`
const ContentBox = styled.ScrollView`
    ${ShadowStyles}
    
    background-color: ${colors.white};
    padding: 10px;
    height: 100%;
`

