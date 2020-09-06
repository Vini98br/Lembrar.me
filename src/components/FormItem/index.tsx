import React, {useState} from 'react';
import {Container, Label, Input} from './styles';
import {TextInput} from 'react-native';
import {FormData} from '../../pages/NewObject';
import {Textarea} from 'native-base';

export interface FormItemProps {
  label: string;
  type: 'TextInput' | 'TextArea';
  handleChange: any;
  inputName: keyof FormData;
  inputValue: any;
  required?: boolean | undefined;
}

const FormItem: React.FC<FormItemProps> = ({
  label,
  handleChange,
  inputName,
  inputValue,
  type,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return type === 'TextInput' ? (
    <Container>
      <Label isFocused={isFocused} isEmpty={Boolean(inputValue)}>
        {label}
        {required ? ' *' : ''}
      </Label>
      <TextInput
        value={inputValue}
        autoCapitalize="words"
        onChange={handleChange(inputName)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  ) : (
    <Container>
      <Label isFocused={isFocused} isEmpty={Boolean(inputValue)}>
        {label}
      </Label>
      <Textarea
        rowSpan={3}
        value={inputValue}
        underline
        bordered={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange(inputName)}
      />
    </Container>
  );
};

export default FormItem;
