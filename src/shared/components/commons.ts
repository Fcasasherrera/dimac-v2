import { color } from 'react-native-reanimated';
import { colors, fontWeight } from 'shared/styles';
import styled from 'styled-components/native';

export const BaseButtonStyles = `
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  max-height: 40px;
  margin-top: 5px;
`;
export const ShadowStyles = `
    shadow-color: ${colors.blackTransparentLight};
    shadow-offset: 0px 3px;
    shadow-opacity: .4;
    shadow-radius: 3px;
    elevation: 1;
`
type StyledContainerProps = {
  center?: string;
};
export const Container = styled.SafeAreaView<StyledContainerProps>`
    flexDirection: column;
    align-items: center;
    justify-content: ${props => props.center ? 'center': 'flex-start'};
    
    padding-right: 20px;
    padding-left: 20px;
`
const baseTextStyles = `
  font-size:14px;
`;
type StyledTextProps = {
  margin ?: string;
  secondary?: boolean;
  accent?: boolean;
  bold?: string;
  size?: string;
};
export const Label = styled.Text<StyledTextProps>`
  ${baseTextStyles}
  ${props => props.size ? 'font-size:' + props.size : ''}
  color: ${props => props.secondary ? colors.blackLigth : props.accent ? colors.primary : colors.black }
  font-weight: ${props => props.bold === 'light' ? fontWeight.light : props.bold === 'medium' ? fontWeight.medium : props.bold === 'bold' ? fontWeight.bold : props.bold === 'extraBold' ? fontWeight.extraBold : fontWeight.normal}
`

export const IconContainer = styled.TouchableOpacity.attrs(props => ({}))`
  padding: 8px;
  border-radius: 50px;
`;
type StyleBgProps = {
  
};
export const ImgBackground = styled.ImageBackground<StyleBgProps>`
    flex: 1;
    resize-mode: contain;
    justify-content: center;
    align-items: center;
`