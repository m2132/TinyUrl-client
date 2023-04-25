import * as React from 'react';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Service from "../Service"
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
// import {  IconButton } from "@material-ui/core";
// import { FileCopyOutlined } from "@material-ui/icons";
import copy from "copy-to-clipboard";
//import SendIcon from '@mui/icons-material/Send';
import Container from "@mui/material/Container";
import {orange,teal} from '@mui/material/colors';
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export default function TinyUrl() {

  const [url, setUrl] = useState();
  const [uniqeName, setUniqeName] = useState();
  const [newUrl,setNewUrl] = useState("");;

    const post = async()=>{      

      setNewUrl(await Service.postUrl(url,uniqeName))
      console.log('newUrl',newUrl)
      
     
  }
  const handleCopyClick = () => {
    copy(newUrl); // עותק את הטקסט הנוכחי ללוח הגזירים
  };
  
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
          TinyUrl
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
       {/* <TextField 
        fullWidth 
        disabled
        label="Your Tiny Url" 
        id="margin-normal" 
        margin="normal"       
        value={newUrl} 
        
    />   */}
      {/* <ContentPasteIcon onClick={handleCopyClick}/> */}

     <TextField


        fullWidth
        disabled
        label="Your Tiny Url"
        id="margin-normal"
        margin="normal"
        value={newUrl}
        onChange={(e) => setNewUrl(e.target.value)}
      />

        {/* <FileCopyOutlined />
      </IconButton> */}
      {/* <ContentPasteIcon/> */}
    add target-
    <Link href="/tinyUrlTarget" variant="body2" color={teal[300]}>
   <ControlPointIcon/>
              </Link>

     
    </Box>

    
    </Container>
    
  );
}



