import styled from 'styled-components/native';
import {Form} from 'native-base';
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

export const SubmitButtonText = styled.Text`
  color: ${(props) => props.theme.colors.light};
`;
