import {useEffect, useState} from "react";
import loadingStatus from "../helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useHouses = () => {

    const [houses, setHouses] = useState([]);
    const { get, loadingState } = useGetRequest("api/houses");

    useEffect(() => {
        console.log("IN EFFECT");
        const fetchHouses = async () => {
        const houses = await get();
        setHouses(houses);
        };
        fetchHouses();
    }, [get]);
    console.log("IN MAIN");

    return { houses, setHouses, loadingState }
}

export default useHouses;