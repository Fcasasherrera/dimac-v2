import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar, Composer, Day } from 'react-native-gifted-chat'
import { ImgBackground, } from 'shared/components/commons';
import { DotIndicator } from 'react-native-indicators';
import { colors, DefaultChat } from 'shared/styles';
import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';
import { postCheckChat, postOnLoadChat, postSendMessage } from 'shared/Api';

export const ChatScreen = ({ route: { params }, navigation }) => {
    const [messages, setMessages] = useState([]);
    const [idChat, setidChat] = useState('');
    const [loading, setLoading] = useState(false);
    const seePrevMessages = async(id_chat) => {
        let response: any = {}
        // setLoading(true)
        try {
            response = await postCheckChat(id_chat);
        } catch (error) {
            Toast.show('Error al ejecutar la peticion', Toast.SHORT);
            setLoading(false)
        }
        // setLoading(false)
        let res = response.conversacionChat.reverse();
        
        var messages = [];
        for (var i = 0; i < res.length; i++) {
            if (res[i].Operador == "Usuario") {
                var data = {
                    _id: i,
                    text: res[i].Texto,
                    createdAt: new Date(),
                    user: {
                        _id: 1,
                        name: 'Usuario',
                        avatar: require('assets/icons/dimac-blue-drawer.png'),
                    },
                }
                messages.push(data);
            }
            else {
                var data = {
                    _id: i,
                    text: res[i].Texto,
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'Asistencia Dimac',
                        avatar: require('assets/icons/dimac-blue-drawer.png'),
                    },
                }
                messages.push(data);
            }
        }
        setMessages(messages)   
    }
    const initial = async () => {
        let response:any = {}
        setLoading(true)
        try {
            response = await postOnLoadChat();
        } catch (error) {
            Toast.show('Error al ejecutar la peticion', Toast.SHORT);
            setLoading(false)
        }
        
        
        if (response.Estatus === "Nuevo") {
            setMessages(DefaultChat)
            setLoading(false)
        } else {
            setLoading(false)
            setidChat(response.id_chat)
            seePrevMessages(response.id_chat)
        }
    }
    const reloadMessages = () => {
        seePrevMessages(idChat)
    }
    useEffect(() => {
        initial();
    }, [])

    useEffect(() => {
        let interval = setTimeout(() => {
            reloadMessages()
        }, 20000)
        return () => {
            clearInterval(interval);
        }
    });

    const onSend = useCallback(async (messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        let response: any = {}
        
        try {
            response = await postSendMessage(idChat, messages[0].text);
        } catch (error) {
            Toast.show('Error al enviar el mensaje', Toast.SHORT);
        }
    }, [])

    const renderInputToolbar = (props) => {
        return <InputToolbar {...props} containerStyle={{ backgroundColor: colors.white, borderRadius: 50, marginHorizontal: 8, borderTopWidth: 0, }} renderComposer={props1 => (<Composer {...props1} textInputStyle={{ color: colors.black, borderWidth: 0, alignSelf: 'center', }} />)} />
    }
    const renderDay = (props) => {
        return <Day {...props} textStyle={{ color: colors.black }} />
    }
    const renderSend = (props) => {
        const { text, messageIdGenerator, user, onSend } = props
        if (props.text.trim().length > 0) {
            return (
                <Touchable 
                    onPress={
                        () => {
                            if (text && onSend) {
                                onSend({ text: text.trim(), user: user, _id: messageIdGenerator() }, true);
                            }
                        }
                    }>
                    <MIcon name="send-sharp" size={24} color={colors.primary} />
                </Touchable>
            )
        }
  }

    

    return (
        <Background source={require('assets/bgs/bg-home.png')}>
            {loading ? 
                <DotIndicator color={colors.primary} size={10} count={3} />
            :
                <GiftedChat
                    scrollToBottom={true}
                    renderAvatarOnTop={true}
                    messages={messages}
                    renderInputToolbar={renderInputToolbar}
                    renderDay={renderDay}
                    renderSend={renderSend} 
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            }
        </Background>
    )
}
export const Background = styled.ImageBackground`
    flex: 1;
    resize-mode: contain;
`
export const Touchable = styled.TouchableOpacity`
    justify-content: flex-end;
    align-items: center;
    align-self: center;
    margin-horizontal: 8px;
`