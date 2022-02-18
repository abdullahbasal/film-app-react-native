import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'

import WebView from 'react-native-webview'
import LoadingImg from '../components/LoadingImg';

export default function Home() {
    const [homePageRandomVideoAndImg, setHomePageRandomVideoAndImg] = useState([]);
    const [randomNumber, setRandomNumber] = useState(350);

    const [loading, setLoading] = useState(false);
    const randomNumberFunc = () => {
        setRandomNumber(Math.floor(Math.random() * 1000) + 1)
    }
    const getHomePageRandomVideoAndImg = () => {

        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${randomNumber}/videos?api_key=fb6891ac1513b32781eb5f2353287b59&language=tr-US`,
        }).then(ress => { setHomePageRandomVideoAndImg(ress.data.results) });
        setLoading(true)
    };
    useEffect(() => {
        setLoading(false)
        randomNumberFunc()
        getHomePageRandomVideoAndImg()
    }, []);

    const ItemRender = ({ videoTitle, videoKey }) => (
        <View style={styles.homePageVideo}>
            <Text style={{ fontSize: 18, color: "white", marginBottom: 20, textAlign: "center" }}>{videoTitle}</Text>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <WebView
                    style={{ width: 320, height: 200, maxHeight: 220, alignItems: "center", justifyContent: "center" }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: `https://www.youtube.com/embed/${videoKey}` }}
                />
            </View>
        </View >
    );
    return (
        <>

            <View style={styles.homePageContainer}>
                <View style={{ flex: 1, marginTop: 40, alignItems: "center", justifyContent: "center" }}><Image style={{ width: 80, height: 80 }} source={require("../../assets/images/Logo.png")} ></Image><Text style={styles.HomePageWelcomeTitle}>Film App Hoş Geldiniz!</Text>
                    <Text style={styles.HomePageWelcomeMessage}>Sinema Cebinizde! Yeni çıkan, Vizyonda olan, En çok izlenen, En Popüler film ve diziler güncel olarak bu uygulamada sizlerle.</Text></View>
                <View style={{ flex: 6, marginTop: 40 }}>
                    <Text style={styles.homePageCategoryName}>Sizin İçin Seçtiklerimiz</Text>
                    {loading ?
                        <SafeAreaView style={{ alignItems: "center", justifyContent: "center" }}>
                            <FlatList
                                data={homePageRandomVideoAndImg.slice(0, 1)}
                                renderItem={({ item }) => <ItemRender videoTitle={item.name} videoKey={item.key} />}
                                keyExtractor={item => item.id}
                                horizontal={false}
                                decelerationRate={0.2}
                                initialNumToRender={1}

                            />

                        </SafeAreaView> : <LoadingImg />}</View>

            </View>
        </>
    )
}
const styles = StyleSheet.create({
    homePageContainer: {
        backgroundColor: "#171717",
        minHeight: 1000
    },
    HomePageWelcomeTitle: { color: "purple", fontSize: 24, textAlign: "center" }, HomePageWelcomeMessage: { color: "pink", fontSize: 16, textAlign: "center" },

    homePageVideo: {
        flex: 1,
        height: 250,
        width: 320, marginRight: 10
    },
    horizontalImg: { height: 150, width: 150 },
    homePageCategoryName: { color: "white", fontSize: 20, padding: 7, fontWeight: "900", textAlign: "center" }

});
