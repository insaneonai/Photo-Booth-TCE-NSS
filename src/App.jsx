import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { SlideOne, SlideTwo } from './Components/Slides.jsx';
import { PhotoBar } from './Components/PhotoBar.jsx';
import { NavBar } from './Components/NavBar.jsx';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function App() {
  return (
    <>
    <Box sx={{width: "100vw"}}>
    <NavBar/>
    <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{height: "100vh"}}
        keyboard={{enabled: true}}
        navigation={true}
      >
    <SwiperSlide style={{alignItems: "center", display: "flex", justifyContent: "center"}}><PhotoBar/></SwiperSlide>
    <SwiperSlide style={{alignItems: "center", display: "flex", justifyContent: "center"}}><SlideOne/></SwiperSlide>
    <SwiperSlide style={{alignItems: "center", display: "flex", justifyContent: "center"}}><SlideTwo/></SwiperSlide>
    </Swiper>
    </Box>
    </>
  )
}

export default App
