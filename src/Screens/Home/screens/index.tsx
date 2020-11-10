import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import Toast from 'react-native-simple-toast';
import { Container, ImgBackground, Label } from 'shared/components/commons';
import { colors } from 'shared/styles';
import Pulse from 'react-native-pulse'
import { postAlert } from 'shared/Api';

export const HomeScreen = ({ route: { params }, navigation }) => {

    const [state, setState] = useState({
        selectedStartDate: '',
        hours: '08',
        minutes: '00',
        type: 'am',
        status: false,
    })
    
    const [loading, setLoading] = useState(false);

    const alert = async () => {
        let response = {}
        setLoading(true)
        try {
            response = await postAlert()
        } catch (error) {
            Toast.show('Datos no encontrados', Toast.SHORT);
            setLoading(false)
        }
        
        if (response === 'error') {
            Toast.show('Datos no encontrados', Toast.SHORT);
            setLoading(false)
        } else {
            setLoading(false)
            Toast.show('Su alerta ha sido enviada', Toast.SHORT);
        }
    }


    return (
        <ImgBackground source={require('assets/bgs/bg-home.png')}>
            <Content contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                <Container center>
                    <SmallBox>
                        <Label accent bold='bold' style={{ paddingHorizontal: 0, textAlign: 'center',}}>
                            “Porque todos tenemos algo valioso que proteger” 
                        </Label>
                    </SmallBox>
                    <CenterPulse>
                        <Pulse color={colors.primary} numPulses={3} diameter={250} speed={15} duration={500} />
                        <ButtonRounded onLongPress={alert}>
                            <Label size='22px' style={{ textAlign: 'center', color: 'white'}}>
                                SOS
                            </Label>
                        </ButtonRounded>
                    </CenterPulse>
                    <SmallBox style={{ paddingBottom: 0,}}>
                        <Label accent bold='bold' style={{ textAlign: 'center' }}>
                            MANTEN LA CALMA!
                        </Label>
                        <Label secondary bold='bold' style={{ textAlign: 'center', marginTop:10, }}>
                            Presiona el botón por 3 segundos 
                            para enviar la alerta
                        </Label>
                    </SmallBox>
                </Container>
                <SmallBox style={{ padding: 0, position: 'absolute', bottom: -50,}}>
                    <LogoSmall source={require('assets/icons/dimac-white-small.png')} />
                </SmallBox>
            </Content>
        </ImgBackground>
    );
};
export const Content = styled.ScrollView`
    
`
export const SmallBox = styled.View`
    padding: 60px;
`
export const LogoSmall = styled.Image`
    width: 45px;
    height: 45px;
    margin-bottom: 15px;
`
export const ButtonRounded = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary}
    border-radius: 150px;
`
export const CenterPulse = styled.View`
    justify-content: center;
    align-items:center;
`
