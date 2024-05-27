import {useEffect, useState} from "react";

const useSize = () => {
    const [windowSize, setWindowSize] = useState([
        getWindow().innerHeight,
        getWindow().innerWidth,
    ]);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowSize([getWindow().innerWidth, getWindow().innerHeight]);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener("resize", windowSizeHandler);
        }

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, []);

    return windowSize;
}

const getWindow = () =>  typeof window !== 'undefined' ? window : {innerHeight: 0, innerWidth: 0}

export default useSize;
