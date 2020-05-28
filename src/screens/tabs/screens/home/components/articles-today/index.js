import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';

const ArticlesToday = ({}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('articles')
      .onSnapshot(querySnapshot => {
        const articles = [];
        querySnapshot.forEach(documentSnapshot => {
          articles.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        console.log(articles);
        setData(articles);
      });
    return () => subscriber();
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.title}>Bản tin trong ngày ?</Text>
      <ScrollView style={style.scrollView} />
    </View>
  );
};

export default ArticlesToday;
