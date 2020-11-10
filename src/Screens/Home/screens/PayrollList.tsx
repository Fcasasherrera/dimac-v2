import React, { useState, useEffect } from 'react';
import { ScrollView, RefreshControl} from 'react-native'
import styled from 'styled-components/native';
import Toast from 'react-native-simple-toast';
import { Container, ImgBackground, Label, ShadowStyles } from 'shared/components/commons';
import { colors, PayrollInfo } from 'shared/styles';
import { CardIcon } from 'shared/components/CardIcon';
import { FlatList } from 'react-native-gesture-handler';
import { postPayrolls } from 'shared/Api';
import RNFetchBlob from 'rn-fetch-blob'
import { Platform } from "react-native";


export const PayrollListScreen = ({ route: { params }, navigation }) => {
    const { name } = params;

    const [state, setState] = useState({
        status: true,
        data: [],
    })
    
    

    const [loading, setLoading] = useState(false);
    const initial = async () => {
        let response = {}
        setLoading(true)
        try {
            response = await postPayrolls();
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
    const download = (item) => {
        if(Platform.OS === 'ios'){
            console.log('hey');
            
            RNFetchBlob.config({
                fileCache: true,
                appendExt: 'pdf'
            })
                .fetch('GET', item.pdf_recibo)
                .then((res) => {
                    // open the document directly
                    RNFetchBlob.ios.previewDocument(res.path())
                    // or show options
                    // RNFetchBlob.ios.openDocument(res.path())
                })
        } else {
            const { config, fs } = RNFetchBlob
            let DownloadDir = fs.dirs.DownloadDir // this is the Downloads directory.
            console.log(DownloadDir);
            let options = {
                fileCache: true,
                // appendExt : extension, //Adds Extension only during the download, optional
                addAndroidDownloads: {
                    useDownloadManager: true, //uses the device's native download manager.
                    notification: true,
                    // mime: 'text/plain',
                    title: item.fecha_pdf, // Title of download notification.
                    path: DownloadDir + "/" + item.fecha_pdf + '.pdf', // this is the path where your download file will be in
                    description: 'Downloading file.'
                }
            }
            config(options)
                .fetch('GET', item.pdf_recibo)
                .then((res) => {
                    console.log("Success");
                })
                .catch((err) => { console.log('error') }) // To execute when download cancelled and other errors
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
                                <CardIcon key={index} isActivated={false} onClick={() => {download(item)}} icon={'payroll'} title={item.fecha_pdf} note={'Nomina ' + (index +1)} />
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
                                        No hay recibos cargados del empleado.
                                    </Label>
                                </Row>
                            )
                        }}
                        keyExtractor={(item, index) => { return index.toString() }}
                    />

                }
                </ScrollView>
            </Container>
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
