import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const MyButton = () => {

    const [counter1, setCounter] = useState(0);

    // const addCounter= (prop) => {
    //     setCount(prop);
    //     // setCounter(prop);
    // }
    // // setCounter (counter+1);
    // return (
    //     <>
    //     <br /><br />
    //     <button className="btn btn-primary" onClick={() => setCounter(counter1+1)}>
    //     Add {counter1}
    //     </button>
    //     </>
        return (
        <Stack spacing={2} direction="row" margin={2}>
            <Button variant="contained" color="error" onClick={() => setCounter(counter1+1)}>Click Counter {counter1}</Button>
        </Stack>
    
    );
};

export default MyButton;