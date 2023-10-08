import { useState } from "react";
import Banner from "./banner"
import HouseList from "./houseList";
import TestProps from "./testProps";
import MyButton from "./counterButton";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"
import House from "./house";
import Stack from "./avatar"

const person = 
    {
      name: "Andy",
      age: 21,
    };

const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    
    const setSelectedHouseWrapper = (house) => {
        setSelectedHouse(house);
    }
    return ( 
    <>
        <TestProps person={person}>
        </TestProps>
        <Banner headerText="Providing houses all over the world">  
        </Banner>

        {selectedHouse ? (
        <House house={selectedHouse} />
        ) : ( 
        <HouseList selectHouse={setSelectedHouseWrapper} /> 
        )}
        <MyButton>
        </MyButton>
        <Box sx={{ '& button': { m: 1 } }}>
            <div>
                <Button
                fullWidth
                size="large"
                variant="contained" 
                color="success">
                    Click
                </Button>
            </div>
        </Box>
        <Stack></Stack>
    </>
    );
};

export default App;