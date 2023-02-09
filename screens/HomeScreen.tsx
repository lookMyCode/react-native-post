import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from 'react-native';
import Loading from '../components/Loading';
// import styled from 'styled-components/native';
import Post from '../components/Post';
import { IPost } from '../models/interfaces';



export default function HomeScreen({ navigation }: any) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(fetchPosts, []);

  function fetchPosts() {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then(res => {
        const formatedPosts = (res.data || []).map(({id, title, body}: IPost) => {
          return {
            id,
            title,
            body,
            imageUrl: 'https://placebeard.it/100x100',
            createdAt: '8.02.2023',
          }
        });

        setPosts(formatedPosts);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <>
      <FlatList 
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={posts}
        renderItem={({item}) => {
          return <TouchableOpacity onPress={() => navigation.navigate('Post', {id: item.id, title: item.title})}>
            <Post 
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        }}
      />
    </>
  );
}
