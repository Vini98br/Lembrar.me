import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #d1d1d1;
  padding-top: 10px;
  margin: 5px 0;
`;

export const Label = styled.Text<{isFocused?: boolean; isEmpty?: boolean}>`
  position: absolute;
  left: 0;
  font-family: ${(props) => props.theme.fontFamily};
  top: ${(props) => (!props.isFocused && !props.isEmpty ? '30px' : '0px')};
  font-size: ${(props) =>
    !props.isFocused && !props.isEmpty ? '20px' : '14px'};
  color: ${(props) => (!props.isFocused && !props.isEmpty ? '#aaa' : '#000')};
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 26px;
  font-size: 25px;
`;
