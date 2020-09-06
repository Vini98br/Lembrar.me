import styled from 'styled-components/native';
import {Input, Item, Form} from 'native-base';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  linearGradient: {
    marginTop: 15,
    justifyContent: 'center',
    padding: '10px 0px',
  },
});

export const StyledForm = styled(Form)`
  margin: 0 15px;
`;

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.ImageBackground`
  height: 360px;
`;

export const CloseButton = styled.TouchableWithoutFeedback``;

export const CloseButtonWrapper = styled.View`
  position: absolute;
  right: 20px;
  top: 60px;
`;

export const StyledInput = styled(Input)``;

export const StyledItem = styled(Item)<{isFocused: boolean}>` 
  border-bottom-width: ${(props) => (props.isFocused ? '2px' : '  0.5px')};
  border-color: ${(props) => (props.isFocused ? props.theme.colors.main : props.theme.colors.gray)};
`;

export const SubmitButton = styled(LinearGradient)<LinearGradientProps>`
  width: 100%;
`;

export const SubmitButtonText = styled.Text`
  color: ${props => props.theme.colors.light};
`;