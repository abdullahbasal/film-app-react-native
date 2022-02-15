import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'

export default function FilmsMain() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/popular?api_key=fb6891ac1513b32781eb5f2353287b59&language=tr-&page=1US',
        }).then(ress => setMovie(ress.data.results));
    }, []);

    console.log(movie);
    return (
        <ScrollView>
            <View >
                <View style={styles.allFilmsContainer} >
                    <Text >Filmler</Text>
                    <View style={styles.popularFilmsHorizontal}>


                        {movie.map(item => {
                            return (
                                <View key={item.id}>
                                    <Image
                                        source={{
                                            uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`,
                                        }}
                                        style={{ height: 150, width: 150 }}></Image>


                                </View>
                            );
                        })}



                    </View>
                </View>

            </View >
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    allFilmsContainer: {
        justifyContent: 'center'
    },
    popularFilmsHorizontal: {
    }
});
