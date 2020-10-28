import React, { useState, useEffect } from 'react';
import { Text, View, Platform } from 'react-native';
import styled from 'styled-components/native';
import { loginUDG } from '../../../shared/Api/index';
import Toast from 'react-native-simple-toast';
import { Button } from '../../../shared/components';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'shared/styles';
import BaseIcon from 'react-native-vector-icons/Octicons';
import BaseSimpleIcon from 'react-native-vector-icons/SimpleLineIcons';



export const LoginScreen = ({ navigation }) => {
    const [state, setState] = useState({
        user: '',
        pass: '',
        status: false,
    })
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (state.user !== '' && state.pass !== '') {
            setState({ ...state, status: true });
        } else {
            setState({ ...state, status: false });
        }
    }, [state.user, state.pass]);

    const login = async () => {
        let response = {}
        setLoading(true)
        try {
            response = await loginUDG(state)
        } catch (error) {
            Toast.show('Datos no encontrados', Toast.SHORT);
            setLoading(false)
        }
        if (response === 'err') {
            Toast.show('Datos no encontrados', Toast.SHORT);
            setLoading(false)
        } else {
            setLoading(false)
            navigation.replace('User', response)
        }
    }

    return (
        <Container>
            <LogoContainer colors={['#1786E5', '#1786E5', '#1370C0', '#105B9C', '#0C4373']}>
                <LogoImage style={{}} source={require('../../../assets/icons/dimac-white.png')} />
                <H1 style={{ position: 'absolute', bottom: Platform.OS === 'ios' ? 56 : 40, right: 48, alignSelf: 'flex-end' }}>Iniciar Sesión</H1>
            </LogoContainer>
            <LoginBox>
                <InputBox>
                    <Icon
                        name={state.status ? 'mail' : 'mail'}
                        size={18}
                        isValid={state.status}
                    />
                    <InputText
                        isValid={state.status}
                        onChangeText={text => setState({ ...state, user: text })}
                        value={state.user}
                        placeholder="Email"
                    />
                </InputBox>
                <InputBox>
                    <SimpleIcon
                        name={state.status ? 'key' : 'key'}
                        size={18}
                        isValid={state.status}
                    />
                    <InputText
                        isValid={state.status}
                        onChangeText={text => {
                            setState({ ...state, pass: text })
                        }}
                        value={state.pass}
                        placeholder="Contraseña"
                        secureTextEntry
                    />
                </InputBox>
                <View style={{ alignSelf: 'flex-end' }}>
                    <Button outline={true} secondary={true}>Olvidaste tu contraseña?</Button>
                </View>
                <ButtonBox>
                    <Button isLoading={loading} isActivated={state.status} onClick={login}>
                        INICIAR
                    </Button>
                </ButtonBox>
            </LoginBox>
            <BottomBox>
                <Row>
                    <Label>
                        Aun no tienes cuenta?
                    </Label>
                    <View>
                        <Button outline={true} secondary={true}>Registrate</Button>
                    </View>
                </Row>
            </BottomBox>
        </Container>
    );
};

const LogoImage = styled.Image`
  width: 100%;
  resize-mode: contain;
`;
const Container = styled.View`
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    display: flex;
`
const Row = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
const LogoContainer = styled(LinearGradient)`
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 40%;
    border-bottom-start-radius: 50px;
    overflow: hidden;
`
const Icon = styled(BaseIcon) <{ isValid: boolean }>`
  color: ${props => (props.isValid ? colors.primary : colors.gray)};
  margin-left: 12px;
`;
const SimpleIcon = styled(BaseSimpleIcon) <{ isValid: boolean }>`
  color: ${props => (props.isValid ? colors.primary : colors.gray)};
  margin-left: 12px;
`;
const ShadowStyles = `
    shadow-color: ${colors.blackTransparentLight};
    shadow-offset: 0px 3px;
    shadow-opacity: .4;
    shadow-radius: 3px;
    elevation: 1;
`
const LoginBox = styled.View`
    align-items: center;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    height: 40%;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 50px;
`
const BottomBox = styled.View`
    align-items: center;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    height: 20%;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 80px;
`
const ButtonBox = styled.View`
    ${ShadowStyles}
    align-items: center;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    padding-right: 40px;
    padding-left: 40px;
    margin-top: 64px;
`
const H1 = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: ${Platform.OS === 'ios' ? '200': '100'};
`
const Label = styled.Text`
    color: ${colors.gray};
    margin-top: 5px;
    margin-bottom: 5px;
`
const InputText = styled.TextInput`
    height: 40px;
    width: 80%;
    color: ${colors.black};
`
const InputBox = styled.View`
    ${ShadowStyles}
    height: 40px;
    width: 100%;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: white;
    align-items: center;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
`