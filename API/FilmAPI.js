import React from 'react'

export default function FilmAPI(props) {
    const [loading, setLoading] = useState(false);
    const getMovieImg = (props) => {

        axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${props.category}?api_key=fb6891ac1513b32781eb5f2353287b59&language=tr-&page=1US`,
        }).then(ress => `${props.set}`(ress.data.results));
        setLoading(true)
    };
    const ItemRender = ({ img }) => (
        <View style={styles.imgView}>
            <Image
                source={{
                    uri: `https://www.themoviedb.org/t/p/w220_and_h330_face/${img}`,
                }}
                style={styles.horizontalImg}></Image>

        </View>
    );
    return (
        <> <Text style={styles.categoryName}>Popüler Filmler</Text>{loading ?
            <SafeAreaView >
                <FlatList
                    data={popularMovie}
                    renderItem={({ item }) => <ItemRender img={item.poster_path} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />

            </SafeAreaView> : <LoadingImg />}</>
    )
}

const styles = StyleSheet.create({
    filmsMainContainer: {
        backgroundColor: "#171717",
        minHeight: 1000
    },
    imgView: {
        height: 150,
        width: 150, marginRight: 10
    },
    horizontalImg: { height: 150, width: 150 },
    categoryName: { color: "white", fontSize: 20, padding: 10, fontWeight: "900" }

});
