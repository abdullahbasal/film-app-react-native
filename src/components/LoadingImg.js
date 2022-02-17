import React from 'react'
import { Image, View } from 'react-native'
import loadingSpinner from "../../assets/images/loadingSpinner/spinner.svg"
export default function LoadingImg() {
    return (
        <View><Image source={loadingSpinner} /></View>
    )
}
