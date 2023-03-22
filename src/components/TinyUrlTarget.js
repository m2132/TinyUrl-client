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

export default function TinyUrlTarget() {

  const [url, setUrl] = useState();
  const [uniqeName, setUniqeName] = useState();
  const [newUrl,setNewUrl] = useState("");;

    const post = async()=>{      

      setNewUrl(await Service.postUrl(url,uniqeName))
      console.log('newUrl',newUrl)
      
     
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
    {/* <Avatar sx={{m: 1, ml:22, bgcolor: orange[300] }}>
        <FavoriteBorder/>
      </Avatar> */}
    <Typography sx={{ ml:20.5  }} component="h1" variant="h5">
          TinyUrlTarget
        </Typography>
    <TextField 
        fullWidth
        label="Your Url" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your unique name "
        onChange={(event) => setUrl(event.target.value)}
      />
    
    <TextField 
        fullWidth
        label="Name" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your url "
        onChange={(event) => setUniqeName(event.target.value)}
    />
    <br/>
      <Button variant="contained" 
       onClick={post}
       sx={{ mt: 3,ml:17, mb: 2,pl:5 ,pr:5 ,bgcolor: teal[300] }}
       >
        Send
      </Button> 
      <br/>
       <TextField 
        fullWidth 
        disabled
        label="Your Tiny Url" 
        id="margin-normal" 
        margin="normal" 
        value={newUrl}
    />  
     
    </Box>

    
    </Container>
    
  );
}



