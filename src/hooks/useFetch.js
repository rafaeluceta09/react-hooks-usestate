import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [state, setstate] = useState(
                                {
                                    data: null,
                                    isLoader : true,
                                    hasError : false 
                                });

        const { data, isLoader, hasError   } = state;

    const getFetch = async () =>{   


        setstate({
            ... state,
            isLoader : true,

        });
        console.log(url);        const resp = await fetch(url);
        const data = await resp.json();
        setstate({
            data,
            isLoader : false,
            hasError : null
        });
    }
    useEffect(() => {
        getFetch();
    
    }, [url])
        

    return {
        data,
        isLoader,
        hasError
    };
}
