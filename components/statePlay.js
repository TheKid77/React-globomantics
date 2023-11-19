import { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box, Grid} from '@mui/material';
import Display from "./display";


const State = () => {
    const [counter, setCounter] = useState(0);
    console.log('rendering with counter value', counter);
  
    const increaseByOne = () => {
      console.log('increasing, value before', counter);
      setCounter(current => counter + 1);
    }
  
    const decreaseByOne = () => { 
      console.log('decreasing, value before', counter);
      setCounter(current => counter - 1);
    }
  
    const setToZero = () => {
      console.log('resetting to zero, value before', counter);
      setCounter(0);
    }

    const [clicks, setClicks] = useState({
        left: 0, right: 0
      });
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        const newClicks = { 
          ...clicks,
          left: clicks.left + 1, 
        }
        setAll(allClicks.concat('L'))
        setClicks(newClicks)
    }
    
    const handleRightClick = () => {
        const newClicks = { 
          ...clicks,
          right: clicks.right + 1 
        }
        setAll(allClicks.concat('R'))
        setClicks(newClicks)
    }
  
    return (
      <>
        <Grid container spacing={12} justifyContent="center" alignItems="center">
            <Grid item>
                <Display counter={counter} />
            </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={4}>
                <Box bgcolor="primary.light" p={2}>
                    <Button variant="contained" onClick={decreaseByOne}>minus</Button>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="primary.light" p={2}>
                    <Button variant="contained" onClick={setToZero}>zero</Button> 
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box bgcolor="primary.light" p={2}>
                    <Button variant="contained" onClick={increaseByOne}>plus</Button> 
                </Box>
            </Grid>
        </Grid>
        <div>
            <Divider>CENTER</Divider>
        </div>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
            <Grid item xs={3}>
                <Box bgcolor="primary.light" p={2}>
                    <Button variant="contained" onClick={handleLeftClick}>left</Button> 
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box bgcolor="primary.light" p={2}>
                    <Display counter={clicks.left} />
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box bgcolor="primary.light" p={2}>
                    <Display counter={clicks.right} />
                </Box>
            </Grid>
            <Grid item xs={3}>
                <Box bgcolor="primary.light" p={2}>
                    <Button variant="contained" onClick={handleRightClick}>right</Button> 
                </Box>
            </Grid>
        </Grid>

        <Grid container spacing={12} justifyContent="center" alignItems="center">
            <Grid item xs={3}>
                <Box bgcolor="primary.light" p={2}>
                <p>{allClicks.join(' ')}</p>
                </Box>
            </Grid>
        </Grid>
      </>
    )
  } 

  export default State;