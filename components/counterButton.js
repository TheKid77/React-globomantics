import React, { useState } from "react";

const MyButton = () => {

    const [counter1, setCounter] = useState(0);

    // const addCounter= (prop) => {
    //     setCount(prop);
    //     // setCounter(prop);
    // }
    // // setCounter (counter+1);
    return (
        <>
        <br /><br />
        <button className="btn btn-primary" onClick={() => setCounter(counter1+1)}>
        Add {counter1}
        </button>
        </>
    );
};

export default MyButton;