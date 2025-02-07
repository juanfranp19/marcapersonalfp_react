import React, { useEffect, useState } from 'react';

import cabecera from "../assets/logo/mp-logoNaranja100.png";
import pie from "../assets/logo/mp-logoReves.png";

const LogoMP = (props) => {

    const donde = props.donde;

    const [src, setSrc] = useState();

    function asignacionSrc() {
        if (donde === "cabecera") setSrc(cabecera );
        if (donde === "pie") setSrc(pie );
    }

    useEffect(asignacionSrc, []);

    return (
        <img src={src} alt="Logo Marca Personal FP" />
    );
}

export default LogoMP;
