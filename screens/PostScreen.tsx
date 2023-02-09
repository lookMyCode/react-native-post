// import styled from 'styled-components/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import Loading from '../components/Loading';
import { IPost } from '../models/interfaces';


export default function PostScreen({ route, navigation }: any) {
  const [model, setModel] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);
  const {id, title} = route.params;

  useEffect(() => {
    navigation.setOptions({title});
    fetchPost();
  }, [])

  function fetchPost() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        const {id, title, body} = res.data;
        const formatedModel = {
          id,
          title,
          body,
          imageUrl: 'https://placebeard.it/100x100',
          createdAt: '8.02.2023',
        }

        setModel(formatedModel);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  if (isLoading) {
    return <Loading />
  }

  return <>
    <Image style={styles.image} source={{uri: model.imageUrl}} />
    <View style={{padding: 10}}>
      <Text style={styles.title}>{model.body}</Text>
    </View>
  </>
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
  },
});
