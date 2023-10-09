import React, { useCallback, useState } from "react";
import Banner from "./banner"
import HouseList from "./houseList";
import TestProps from "./testProps";
import MyButton from "./counterButton";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button"
import House from "./house";
import Stack from "./avatar"
import navValues from "@/helpers/navValues";
import ComponentPicker from "./componentPicker";

const person = 
    {
      name: "Andy",
      age: 21,
    };

const navigationContext = React.createContext(navValues.home);
const App = () => {

    const navigate = useCallback(
        (navTo, param) => setNav({current: navTo, param, navigate}),
        []
    );

    const [nav, setNav] = useState({current : navValues.home, navigate})
    return (
    <navigationContext.Provider value = {nav}>
        <TestProps person={person}>
        </TestProps>
        <Banner headerText="Providing houses all over the world">  
        </Banner>
        <ComponentPicker currentNavLocation={nav.current} />

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
    </navigationContext.Provider>
    );
};

export { navigationContext};

export default App;