import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity, ScrollView} from 'react-native';
import {
  Container,
  Header,
  CloseButton,
  CloseButtonWrapper,
  StyledInput,
  StyledItem,
  styles,
  SubmitButton,
  SubmitButtonText,
  StyledForm,
} from './styles';
import FormItem from '../../components/FormItem';
import useForm from '../../hooks/useForm';

export interface InputFocus {
  name?: boolean;
  room?: boolean;
  furniture?: boolean;
  drawer?: boolean;
  obs?: boolean;
}

export interface FormData {
  name: string;
  room: string;
  furniture?: string;
  drawer?: string;
  obs?: string;
}

const NewObject: React.FC = () => {
  const navigation = useNavigation();

  const validate = (values: any) => {
    console.log();
  };

  const add = () => {
    console.log();
  };

  const {values, handleChange, handleSubmit} = useForm(add, validate);

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header source={require('../../images/New.png')}>
        <CloseButtonWrapper>
          <CloseButton onPress={() => navigation.goBack()}>
            <AntDesign name="close" color="#fff" size={30} />
          </CloseButton>
        </CloseButtonWrapper>
      </Header>
      <StyledForm>
        <FormItem
          inputValue={values.name}
          inputName="name"
          type="TextInput"
          handleChange={handleChange}
          label="Nome do objeto"
          required
        />
        <FormItem
          inputValue={values.room}
          inputName="room"
          type="TextInput"
          handleChange={handleChange}
          label="Cômodo"
          required
        />
        <FormItem
          inputValue={values.furniture}
          inputName="furniture"
          type="TextInput"
          handleChange={handleChange}
          label="Móvel"
        />
        <FormItem
          inputValue={values.drawer}
          inputName="drawer"
          type="TextInput"
          handleChange={handleChange}
          label="Gaveta"
        />
        <FormItem
          inputValue={values.obs}
          inputName="obs"
          type="TextArea"
          handleChange={handleChange}
          label="Observações"
        />
        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient
            colors={['#6385FB', '#B14FFF']}
            useAngle={true}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignItems: 'center',
              marginVertical: 15,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.22,
              shadowRadius: 2.22,
              elevation: 3,
              borderRadius: 4,
            }}
            angle={90}>
            <SubmitButtonText>ADICIONAR</SubmitButtonText>
          </LinearGradient>
        </TouchableOpacity>
      </StyledForm>
    </Container>
  );
};

export default NewObject;
