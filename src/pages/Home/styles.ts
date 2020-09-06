/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const InlineStyles = {
  ObjectConteiner:{
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

export const Container = styled.View`
  background-color: ${props => props.theme.colors.background};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.ImageBackground`
  height: 260px;
  padding: 20px 0 75px 0px;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const HeaderContent = styled.View`
  padding: 0 30px;
  flex:1;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fontFamily};
  color: ${({theme}) => theme.colors.light};
  font-size: 24px;
  font-weight: 500;
`;

export const Input = styled.TextInput.attrs(() => ({
  placeholder: 'Pesquise um objeto',
}))`
  background-color: ${({theme}) => theme.colors.light};
  width: 100%;
  border-radius: 7px;
  height: 50px;
  padding: 0 15px;
`;

export const CategoriesWrapper = styled.View`
  height: 40px;
`;

export const Categories = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingLeft: 30,
  },
}))`

`;

export const Category = styled.Text<{selected?: boolean}>`
  font-family: ${({theme}) => theme.fontFamily};
  font-size: 20px;
  margin-right: 10px;
  margin-top: 10px;
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  background-color: ${(props) => props.selected ? props.theme.colors.light : 'transparent'};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
  color: ${(props) => props.selected ? props.theme.colors.main : props.theme.colors.light};
  border-radius: 5px;
  padding: 0 3px;
`;

export const CategoryWrapper = styled.View`

`;

export const List = styled(FlatList as new () => FlatList<any>)`
  /* width: 80%; */
  /* margin-top: -30px; */
  width: 100%;
`;

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
