import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl } from 'react-native'
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import { Container, ImgBackground, Label, ShadowStyles } from 'shared/components/commons';
import { colors} from 'shared/styles';
import { CardIcon } from 'shared/components/CardIcon';
import { FlatList } from 'react-native-gesture-handler';
import {Modal} from "react-native";
import { FrameModal } from '../components/VideoPlayer';
import { postCourses } from 'shared/Api';

export const CoursesScreen = ({ route: { params }, navigation }) => {
    const { name } = params;

    const [state, setState] = useState({
        status: true,
        data: [],
    })
    const [videoUrl, setVideoUrl] = useState('')
    

    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const initial = async () => {
        let response = {}
        setLoading(true)
        try {
            response = await postCourses();
        } catch (error) {
            Toast.show('Error al ejecutar la peticion', Toast.SHORT);
            setLoading(false)
        }
        if (response === 'No hay recibos cargados del empleado.') {
            setState({ ...state, data: [] })
            setLoading(false)
        } else {
            setLoading(false)
            setState({ ...state, data: response })
        }
    }
    useEffect(() => {
        initial()
    }, []);
    const onRefresh = () => {
        initial();
    }

    return (
        <ImgBackground source={require('assets/bgs/bg-home.png')}>
            <Container style={{ paddingTop: 10 }}>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={loading}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    {state.data.length > 0 ? 
                        <FlatList
                            data={state.data}
                            renderItem={({ item, index }) => {
                                return (
                                    <CardIcon key={index} onClick={() => { setVideoUrl(item.Videos); setModalVisible(true) }} isActivated={false} icon={'courses'} title={item.Titulo} note={item.Descripcion} />
                                )
                            }}
                            keyExtractor={(item, index) => { return index.toString() }}
                        />
                        :
                        <FlatList
                            refreshing={loading}
                            onRefresh={onRefresh}
                            data={[1]}
                            renderItem={(data) => {
                                return (
                                    <Row>
                                        <Label style={{ textAlign: 'center' }}>
                                            No hay videos aun.
                                    </Label>
                                    </Row>
                                )
                            }}
                            keyExtractor={(item, index) => { return index.toString() }}
                        />

                    }
                </ScrollView>
            </Container>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <FrameModal videoUrl={videoUrl} closeModal={() => setModalVisible(false)} />
            </Modal>
        </ImgBackground>
    );
};
const Row = styled.View`
    ${ShadowStyles}
    flex-direction: row;
    justify-content: center;
    background-color: ${colors.white};
    padding: 25px;
    border-radius: 16px;
    margin-top: 16px;
`