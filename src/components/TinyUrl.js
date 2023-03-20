import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { async } from 'q';

export default function TinyUrl() {

  const [url, setUrl] = useState();
  const [uniqeName, setUniqeName] = useState();
  const [newUrl,setNewUrl] = useState("");

  const  post=async()=>{
    setNewUrl(await Service.postUrl(url,uniqeName))
  }
   
  return (
    <Container>
    <Box
      sx={{
        // display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
        width: 500,
        maxWidth: "100%",
      }}
    >
    <br/>
    <TextField 
        label="Your Url" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your url"
        onChange={(event) => setUrl(event.target.value)}
    />
    {/* <br/> */}

    <TextField 
        label="Name" 
        id="margin-normal" 
        margin="normal" 
        helperText="Please enter your unique name "
        onChange={(event) => setUniqeName(event.target.value)}
    />
   
<br/>

      <Button variant="contained" endIcon={<SendIcon />}  onClick={post}>
        Send
      </Button>    
    <br/>

      <TextField disabled fullWidth label="your tiny url" id="fullWidth" value={newUrl} />
    </Box>
    </Container>
    
  );
}

