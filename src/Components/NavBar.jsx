import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';

export function NavBar() {
    return (
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="fixed" sx={{backgroundColor:"#134B70", maxHeight:"100px"}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href='https://tce.edu/'
              sx={{ mr: 2, display: {"xs": "none", "md": "inherit"}}}
            >
            <img src="/public/tce_logo.png" height="40px"/>
  
            </IconButton>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              href = "https://www.tce.edu/student/nss"
              sx={{ mr: 2 }}
            >
            <img src="/public/nss_logo.png" height="40px"/>
  
            </IconButton>
            <Stack sx={{flexGrow: 1}} direction="row" gap={0.5}>
            <Typography variant="body" component="div" sx={{fontFamily: "livvic", minWidth: "90px", fontWeight: 600}}>
              A Photography Booth of 
            </Typography>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter.typeString('TCE')
                  .pauseFor(2500)
                  .deleteAll()
                .start()
                typewriter.typeString('NSS')
                  .pauseFor(2500)
                  .deleteAll()
                .start()
                typewriter.typeString('ALL')
                  .pauseFor(2500)
                  .deleteAll()
                .start()
              }}
              />
            </Stack>
            <Button color="inherit" sx={{fontFamily: "livvic", display: {xs: "none", md: "block"}}}>
              <a href = "/about" target='_blank'>About Team!</a>
            </Button>
            <Button color="inherit" sx={{fontFamily: "livvic"}}>
              <a href = "https://docs.google.com/forms/d/e/1FAIpQLSeCGpscYZB59Cuaq3pryvl1SjAodbp-Trq6U04YtJ5gOfwedA/viewform" target='_blank'>Join Us!</a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }