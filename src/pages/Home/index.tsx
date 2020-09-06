/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Container,
  Header,
  HeaderTitle,
  Input,
  Categories,
  Category,
  CategoriesWrapper,
  CategoryWrapper,
  List,
  ObjectWrapper,
  ObjectConteiner,
  Photo,
  Content,
  ObjectName,
  ObjectRoom,
  BlankSpace,
  InlineStyles,
  HeaderContent,
} from './styles';

export interface MyObject {
  id: number;
  photo?: string;
  name: string;
  type: {
    id: number;
    name: string;
  };
  room: string;
  furniture?: string;
  drawer?: string;
  obs?: string;
}

const Home: React.FC = () => {
  const renderItem = ({item}: {item: MyObject}) => {
    return (
      <ObjectWrapper>
        <ObjectConteiner style={InlineStyles.ObjectConteiner}>
          <Content>
            {/* {item.photo ? <Photo source={item.photo}/> : 
            } */}
            <BlankSpace />
            <View>
              <ObjectName>{item.name}</ObjectName>
              <ObjectRoom>{item.room}</ObjectRoom>
            </View>
          </Content>
          <AntDesign name="right" size={14} color="black" />
        </ObjectConteiner>
      </ObjectWrapper>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <Header source={require('../../images/Vector.png')}>
        <HeaderContent>
          <HeaderTitle>Explore seus Objetos</HeaderTitle>
          <Input />
        </HeaderContent>
        <CategoriesWrapper>
          <Categories horizontal showsHorizontalScrollIndicator={false}>
            <CategoryWrapper>
              <Category selected>Todos</Category>
            </CategoryWrapper>
            <CategoryWrapper>
              <Category>Roupas</Category>
            </CategoryWrapper>
            <CategoryWrapper>
              <Category>Roupas</Category>
            </CategoryWrapper>
            <CategoryWrapper>
              <Category>Roupas</Category>
            </CategoryWrapper>
            <CategoryWrapper>
              <Category>Roupas</Category>
            </CategoryWrapper>
            <CategoryWrapper>
              <Category>Roupas</Category>
            </CategoryWrapper>
          </Categories>
        </CategoriesWrapper>
      </Header>
    );
  };

  return (
    // <Container>
    <List
      ListHeaderComponent={ListHeaderComponent}
      data={[
        {
          id: 1,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 2,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 3,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 4,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 5,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 6,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 7,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
        {
          id: 8,
          // photo: File;
          name: 'Object',
          // type: {
          //   id: number;
          //   name: string;
          // }
          room: "Sala",
          furniture: 'Sla',
          drawer: 'Segunda',
          obs: 'Debaixo de sla oq',
        },
      ]}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item: MyObject) => item.id}
    />
    // </Container>
  );
};

export default Home;
