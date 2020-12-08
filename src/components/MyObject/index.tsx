import React from 'react';
import {View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  ObjectWrapper,
  ObjectConteiner,
  ObjectName,
  ObjectRoom,
  BlankSpace,
  Content,
  InlineStyles,
} from './styles';

export interface MyObjectProps {
  id: number;
  // photo?: string;
  name: string;
  // type: {
  //   id: number;
  //   name: string;
  // };
  room: string;
  furniture?: string;
  drawer?: string;
  obs?: string;
}

const MyObject: React.FC<{data: MyObjectProps}> = ({data}) => {
  return (
    <ObjectWrapper>
      <ObjectConteiner style={InlineStyles.ObjectConteiner}>
        <Content>
          {/* {item.photo ? <Photo source={item.photo}/> : 
          } */}
          <BlankSpace />
          <View>
            <ObjectName>{data.name}</ObjectName>
            <ObjectRoom>{data.room}</ObjectRoom>
          </View>
        </Content>
        <AntDesign name="right" size={14} color="black" />
      </ObjectConteiner>
    </ObjectWrapper>
  );
};

export default React.memo(MyObject);
