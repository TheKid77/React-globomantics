import { useState } from "react";
import Banner from "./banner"
import HouseList from "./houseList";
import TestProps from "./testProps";
import MyButton from "./counterButton";
import House from "./house";
const person = 
    {
      name: "Andy",
      age: 21,
    };

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    return ( 
    <>
        <TestProps person={person}>
        </TestProps>
        <Banner>  
            Providing house all over the world
        </Banner>
        {selectedHouse ? (
        <House house={selectedHouse} />
        ) : ( 
        <HouseList selectHouse={setSelectedHouse} /> 
        )}
        <MyButton>
        </MyButton>
    </>
    );
};

export default App;