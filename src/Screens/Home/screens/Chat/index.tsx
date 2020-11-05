import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, InputToolbar, Composer, Day } from 'react-native-gifted-chat'
import { ImgBackground, } from 'shared/components/commons';
import { colors } from 'shared/styles';
import styled from 'styled-components/native';
import MIcon from 'react-native-vector-icons/Ionicons';
import {
    StyleSheet,
} from 'react-native'

export const ChatScreen = ({ route: { params }, navigation }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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