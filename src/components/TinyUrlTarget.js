import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service"
import Button from '@mui/material/Button';
//import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CreateIcon from '@mui/icons-material/Create';
export default function TinyUrlTarget() {

  const [url, setUrl] = useState();
  const [uniqeName, setUniqeName] = useState();
  const [name, setName] = useState();
  const [targetValue, setTargetValue] = useState();

  const [newUrl,setNewUrl] = useState("");

    const post = async()=>{      

      setNewUrl(await Service.postUrl(url,uniqeName))
      console.log('newUrl',newUrl)
      
     
  }
  const addInputs=()=>{
    return(
      <TextField 
      label="place of distribution" 
      id="margin-normal" 
      margin="normal" 
    
  />  
    )
  }
  return (
    
    <Container maxWidth="xs">
    <Box
      sx={{
        marginTop: 8,
        flexDirection: "column",
        alignItems: 'center',
       // '& > :not(style)': { m: 1 },
        width: 500,
        maxWidth: '100%',
      }}
    >
    <Avatar sx={{m: 1, ml:22, bgcolor: orange[300] }}>
        <AutorenewIcon/>
      </Avatar>
    <Typography sx={{ ml:20.5  }} component="h1" variant="h5">
         Target
        </Typography>
    <TextField 
    disabled
    
        fullWidth
        label="Your Url" 
        id="margin-normal" 
        margin="normal" 
        onChange={(event) => setUrl(event.target.value)}
      />
    
    <TextField 
    disabled
        fullWidth
        label="Name" 
        id="margin-normal" 
        margin="normal" 
        onChange={(event) => setUniqeName(event.target.value)}
    />
    <br/>
      {/* <Button variant="contained" 
       onClick={post}
       sx={{ mt: 3,ml:17, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
        Send
      </Button>  */}
      <br/>
       <TextField 
        label="place of distribution" 
        id="margin-normal" 
        margin="normal" 
        value={newUrl}
    />  
    <TextField 
        label="value" 
        id="margin-normal" 
        margin="normal" 
        value={newUrl}
    />  
            <TextField 
        fullWidth 
        disabled
        label="Your Tiny target Url" 
        id="margin-normal" 
        margin="normal" 
        value={newUrl}
    />  
    <SpeedDial
   onClick={addInputs}
        ariaLabel="SpeedDial basic example"
        // sx={{ position: 'absolute' }}
        icon={<SpeedDialIcon />}
     />

     
    </Box>
    </Container>
    
  );
}



