import { color } from 'react-native-reanimated';
import { colors } from 'shared/styles';
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
export const Container = styled.View<StyledContainerProps>`
    align-items: center;
    justify-content: ${props => props.center ? 'center': 'flex-start'};
    height: 100%;
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
};
export const Label = styled.Text<StyledTextProps>`
  ${baseTextStyles}
  color: ${props => props.secondary ? colors.blackLigth : props.accent ? colors.primary : colors.black }
`
export const IconContainer = styled.TouchableOpacity.attrs(props => ({}))`
  padding: 8px;
  border-radius: 50px;
`;