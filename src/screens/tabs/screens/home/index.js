/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Text, Animated, FlatList, StatusBar} from 'react-native';
import style from './style';
import {Header, ArticleMain, ArticleItem, ArticleToday} from './components';
import firestore from '@react-native-firebase/firestore';

const Home = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const [data, setData] = useState([]);
  const [articleMain, setArticleMain] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [barStyle, setBarStyle] = useState('dark-content');

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
        const main = {...articles[0]};
        setArticleMain(main);
        articles.splice(0);
        setData(articles);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY,}}}],
    {
      useNativeDriver: false,
    },
  );

  return (
    <View style={style.container}>
      <StatusBar barStyle={barStyle} />
      <Header scrollY={scrollY} />
      <FlatList
        style={{flex: 1}}
        data={data}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <View>
            <ArticleMain item={articleMain} />
            <ArticleToday />
          </View>
        }
        keyExtractor={item => item.id}
        renderItem={({item, index}) => {
          return <ArticleItem item={item} />;
        }}
        onScroll={onScroll}
      />
    </View>
  );
};

export default Home;
