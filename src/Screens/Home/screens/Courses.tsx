import React, { useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'shared/components';
import Toast from 'react-native-simple-toast';
import { Container, ImgBackground, Label, ShadowStyles } from 'shared/components/commons';
import { colors, spacings, CoursesInfo } from 'shared/styles';
import Pulse from 'react-native-pulse'
import { CardIcon } from 'shared/components/CardIcon';
import { FlatList } from 'react-native-gesture-handler';

export const CoursesScreen = ({ route: { params }, navigation }) => {
    const { name, codigo, carrera } = params;

    const [state, setState] = useState({
        status: true,
    })

    const [loading, setLoading] = useState(false);


    return (
        <ImgBackground source={require('assets/bgs/bg-home.png')}>
            <Container style={{ paddingTop: 10 }}>
                <FlatList
                    data={CoursesInfo}
                    renderItem={({ item }) => {
                        return (
                            <CardIcon isActivated={false} icon={'courses'} title={item.title} note={item.note} />
                        )
                    }}
                    keyExtractor={(item, index) => { return index.toString() }}
                />
            </Container>
        </ImgBackground>
    );
};
export const Content = styled.ScrollView`
    
`
export const SmallBox = styled.View`
    padding-horizontal: 10px;
`

export const LogoSmall = styled.Image`
    width: 35px;
    height: 35px;
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
