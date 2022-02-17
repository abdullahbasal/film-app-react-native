import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LoadingImg from '../components/LoadingImg';

export default function EpisodeMain() {
    const [popularEpisode, setPopularEpisode] = useState([]);
    const [airingTodayEpisode, setAiringTodayEpisode] = useState([]);
    const [topRatedEpisode, setTopRatedEpisode] = useState([]);
    const [onTheAirEpisode, setOnTheAirEpisode] = useState([]);


    const [loading, setLoading] = useState(false);
    const getPopularEpisodeImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/popular?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setPopularEpisode(ress.data.results));
        setLoading(true)
    };
    const getUpComingMovieImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/airing_today?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setAiringTodayEpisode(ress.data.results));
        setLoading(true)
    };
    const getTopRatedEpisodeImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/top_rated?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setTopRatedEpisode(ress.data.results));
        setLoading(true)
    };
    const getOnTheAirImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/tv/on_the_air?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setOnTheAirEpisode(ress.data.results));
        setLoading(true)
    };
    useEffect(() => {

        setLoading(false)
        getPopularEpisodeImg()
        getUpComingMovieImg()
        getTopRatedEpisodeImg()
        getOnTheAirImg()

    }, []);

    const ItemRender = ({ img }) => (
        <View style={styles.imgView}>
            <TouchableOpacity>

                <Image
                    source={{
                        uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${img}`,
                    }}
                    style={styles.horizontalImg}></Image>
            </TouchableOpacity>
        </View>
    );


    return (
        <ScrollView>
            <View style={styles.episodeMainContainer} >
                <View>
                    <Text style={styles.categoryName}>Popüler Diziler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={popularEpisode}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>Bugün Yayınlanacak Diziler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={airingTodayEpisode}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>En Çok Oy Alan Diziler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={topRatedEpisode}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>Yayındaki Diziler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={onTheAirEpisode}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}
                            />

                        </SafeAreaView> : <LoadingImg />}
                </View>
            </View >


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    episodeMainContainer: {
        backgroundColor: "#171717",

    },
    imgView: {
        height: 150,
        width: 150, marginRight: 10
    },
    horizontalImg: { height: 150, width: 150 },
    categoryName: { color: "white", fontSize: 20, padding: 7, fontWeight: "900" }

});
