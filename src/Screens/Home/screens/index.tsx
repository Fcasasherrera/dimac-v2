import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import Toast from 'react-native-simple-toast';
import { Container, Label } from 'shared/components/commons';
import { colors } from 'shared/styles';
export const HomeScreen = ({ route: { params }, navigation }) => {
    const { name, codigo, carrera } = params;

    const [state, setState] = useState({
        selectedStartDate: '',
        hours: '08',
        minutes: '00',
        type: 'am',
        status: false,
    })
    
    const [loading, setLoading] = useState(false);


    return (
        <Container center>
            <SmallBox>
                <Label accent style={{textAlign: 'center'}}>
                    “Porque todos tenemos algo valioso que proteger” 
                </Label>
            </SmallBox>
            <ButtonRounded onClick={() => {console.log('asd');}}>
                <Label style={{ textAlign: 'center', color: 'white'}}>
                    SOS
                </Label>
            </ButtonRounded>
            <SmallBox>
                <Label accent style={{ textAlign: 'center' }}>
                    MANTEN LA CALMA!
                </Label>
                <Label secondary style={{ textAlign: 'center', marginTop:10, }}>
                    Presiona el botón por 3 segundos 
                    para enviar la alerta
                </Label>
            </SmallBox>
        </Container>
    );
};
export const SmallBox = styled.View`
    padding: 60px;
`
export const ButtonRounded = styled.TouchableOpacity`
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary}
    border-radius: 150px;
`