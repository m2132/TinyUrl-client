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

export default function HelperTextAligned() {

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



// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },

// ];

// export default function ControlledOpenSpeedDial() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//       <SpeedDial
//         ariaLabel="SpeedDial controlled open example"
//         sx={{ position: 'absolute', bottom: 16, right: 16 }}
//         icon={<SpeedDialIcon />}
//         onClose={handleClose}
//         onOpen={handleOpen}
//         open={open}
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//             onClick={handleClose}
//           />
//         ))}
//       </SpeedDial>
//     </Box>
//   );
// }


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';
// import EditIcon from '@mui/icons-material/Edit';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function OpenIconSpeedDial() {
//   return (
//     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//       <SpeedDial
//         ariaLabel="SpeedDial openIcon example"
//         sx={{ position: 'absolute', bottom: 16, right: 16 }}
//         icon={<SpeedDialIcon openIcon={<EditIcon />} />}
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//           />
//         ))}
//       </SpeedDial>
//     </Box>
//   );
// }