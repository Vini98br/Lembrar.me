import styled from 'styled-components/native';

export const InlineStyles = {
  ObjectConteiner: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
};

export const ObjectWrapper = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const ObjectConteiner = styled.View`
  background-color: #fff;
  width: 100%;
  height: 80px;
  border-radius: 9px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 13px;
`;

export const BlankSpace = styled.View`
  width: 50px;
`;

export const Photo = styled.Image``;

export const Content = styled.View`
  flex-direction: row;
`;

export const ObjectName = styled.Text`
  color: ${(props) => props.theme.colors.dark};
`;

export const ObjectRoom = styled.Text`
  color: ${(props) => props.theme.colors.gray};
`;
