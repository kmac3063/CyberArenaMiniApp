import React, {useEffect, useState} from "react";

const CardImage = ({url, height}) => {
   return <div style={{
        backgroundImage: 'url(' + url + ')',
        backgroundPosition: "center",
        backgroundSize: "cover",
        translateY: "-50%",
        height : height,
        display: 'flex',
        align: 'center',
        justifyContent: 'center',
        paddingBottom: '6px',
        borderRadius: 12
    }}/>
}

export default CardImage