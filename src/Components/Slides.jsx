import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import {About, Logo, History, nss, Aim} from '../CONSTANTS.js';


export function SlideOne() {
    return (
      <Box sx={{height: "90vh", width:"80vw", backgroundColor: "#EEEEEE", borderRadius: "1.5rem", overflow: "scroll", scrollbarWidth: "none", paddingTop: "70px"}}>
        <Typography variant="h4" sx={{fontFamily: "oswald", color: "black", margin: "10px"}}>
          Welcome to TCE NSS!
          <Divider/>
        </Typography>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
          About NSS
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {About}
        </Typography>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
          The LOGO
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {Logo}
        </Typography>
        <Box display="flex" justifyContent="center">
        <img src="/public/nss_logo.png" height="100px" width="100px"/>
        </Box>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
          NSS Goals
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {Logo}
        </Typography>
      </Box>
    )
  }

 export function SlideTwo() {
    return (
      <Box sx={{height: "90vh", width:"80vw", backgroundColor: "#EEEEEE", borderRadius: "1.5rem", overflow: "scroll", scrollbarWidth: "none", paddingTop: "70px"}}>
        <Typography variant="h4" sx={{fontFamily: "oswald", color: "black", margin: "10px"}}>
          NSS Day: Celebrating Community Service
          <Divider/>
        </Typography>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
          History of NSS
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {History}
        </Typography>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
        NSS Day Celebrations
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {nss}
        </Typography>
        <Typography variant="h6" sx={{fontFamily: "livvic", color: "black", margin: "15px"}}>
        Main Aim Of Student
        </Typography>
        <Typography variant="body1" sx={{fontFamily: "livvic", color: "black", textAlign: "justify", mx: "15px"}}>
          {Aim}
        </Typography>
      </Box>
    )
  }