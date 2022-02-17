import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LoadingImg from '../components/LoadingImg';

export default function FilmsMain() {
    const [popularMovie, setPopularMovie] = useState([]);
    const [upComingMovie, setUpComingMovie] = useState([]);
    const [topRatedMovie, setTopRatedMovie] = useState([]);
    const [nowPlayingMovie, setNowPlayingMovie] = useState([]);


    const [loading, setLoading] = useState(false);
    const getPopularMovieImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=fb6891ac1513b32781eb5f2353287b59&language=tr-&page=1US',
        }).then(ress => setPopularMovie(ress.data.results));
        setLoading(true)
    };
    const getUpComingMovieImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=fb6891ac1513b32781eb5f2353287b59&language=tr-US&page=1',
        }).then(ress => setUpComingMovie(ress.data.results));
        setLoading(true)
    };
    const getTopRatedMovieImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setTopRatedMovie(ress.data.results));
        setLoading(true)
    };
    const getNowPlayingMovieImg = () => {

        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=fb6891ac1513b32781eb5f2353287b59&language=en-US&page=1',
        }).then(ress => setNowPlayingMovie(ress.data.results));
        setLoading(true)
    };
    useEffect(() => {

        setLoading(false)
        getPopularMovieImg()
        getUpComingMovieImg()
        getTopRatedMovieImg()
        getNowPlayingMovieImg()

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
            <View style={styles.filmsMainContainer} >
                <View>
                    <Text style={styles.categoryName}>Popüler Filmler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={popularMovie}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}
                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>Vizyona Girecek Filmler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={upComingMovie}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>En Çok Oy Alan Filmler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={topRatedMovie}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                    <Text style={styles.categoryName}>Vizyondaki Filmler</Text>{loading ?
                        <SafeAreaView >
                            <FlatList
                                data={nowPlayingMovie}
                                renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                                keyExtractor={item => item.id}
                                horizontal={true}
                                decelerationRate={0.2}

                            />

                        </SafeAreaView> : <LoadingImg />}
                </View>
            </View >



        </ScrollView>
    );
}

const styles = StyleSheet.create({
    filmsMainContainer: {
        backgroundColor: "#171717",

    },
    imgView: {
        height: 150,
        width: 150, marginRight: 10
    },
    horizontalImg: { height: 150, width: 150 },
    categoryName: { color: "white", fontSize: 20, padding: 7, fontWeight: "900" }

});
