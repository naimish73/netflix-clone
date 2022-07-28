import React, { useEffect, useState } from "react";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {}
        fetchData();
    }, []);
    return <header></header>;
}

export default Banner;
