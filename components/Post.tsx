import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';


interface IPostProps {
  title: string,
  imageUrl: string,
  createdAt: string,
}

const PostView = styled.View`
  display: flex;
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700
`;

const PostDetails = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;


export default function Post({title, imageUrl, createdAt}: IPostProps) {
  
  return (
    <PostView>
      <PostImage source={{uri: imageUrl}}/>
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{createdAt}</PostDate>
      </PostDetails>
    </PostView>
  );
}