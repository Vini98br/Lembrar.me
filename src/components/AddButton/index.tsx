import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.main};
  height: 58px;
  width: 58px;
  border-radius: 58px;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}>
        <AntDesign name="plus" color="#fff" size={25} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AddButton;
