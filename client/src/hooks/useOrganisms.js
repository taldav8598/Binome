import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { 
    // httpGetOrganisms, 
    httpSubmitCommonName 
} from "./requests";

function useOrganisms() {
    const navigate = useNavigate();
    // const [organisms, saveOrganisms] = useState([]);
    const [isPending, setIsPending] = useState(false);
    
    // const getOrganisms = useCallback(async () => {
    //     const fetchedOrganisms = await httpGetOrganisms();
    //     saveOrganisms(fetchedOrganisms);
    // }, []);

    // useEffect(() => {
    //     getOrganisms();
    // }, []);

    
    
    const submitCommonName = useCallback(async (e) => {
        e.preventDefault();
        setIsPending(true);
        const data = new FormData(e.target);
        const commonName = data.get("common-name");
        const response = await httpSubmitCommonName({
            commonName,
        });

        const success = response.ok;
        if (success) {
            console.log(success);
            navigate(`/search`, {state: commonName});
        } else {
            console.log("Response not submitted");
        }

        
        
    }, []);
    

    return {
        submitCommonName
    };
}


export default useOrganisms;