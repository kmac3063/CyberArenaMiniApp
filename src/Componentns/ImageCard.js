import React, {useEffect, useState} from "react";
import {Div} from "@vkontakte/vkui";

const ImageCard = ({url, height, width}) => {
   return <Div style={{
        backgroundImage: 'url(' + url + ')',
        backgroundPosition: "center",
        backgroundSize: "cover",
        translateY: "-50%",
        height : height,
        width: width,
        verticalAlign: "top",
        display: "inline-block",
        paddingBottom: '6px',
        marginRight: '6px',
        borderRadius: 6
    }}/>
}

export default ImageCard