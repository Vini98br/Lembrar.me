import React, {useEffect, useState} from 'react';
import MyObject, {MyObjectProps} from '../../components/MyObject/index';
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
  HeaderContent,
} from './styles';
import getRealm from '../../services/realm';

const Home: React.FC = () => {
  const [myObjects, setMyObjects] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const realm = await getRealm();
      const data = realm.objects('MyObject').sorted('name', true);
      setMyObjects(data);
      console.log(data);
    })();
  }, []);

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
      data={myObjects}
      showsVerticalScrollIndicator={false}
      renderItem={({item}: {item: MyObjectProps}) => <MyObject data={item} />}
      keyExtractor={(item: MyObjectProps) => item.id.toString()}
    />
    // </Container>
  );
};

export default Home;
