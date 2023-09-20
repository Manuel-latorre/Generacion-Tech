// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import avatar3 from './assets/avatar3.png'
// import avatar4 from './assets/avatar4.png'
// import avatar5 from './assets/avatar5.png'
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import './Equipo.css';

// // import required modules
// import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// export default function Equipo() {
//   return (
//     <>

//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         autoplay={{
//             delay: 1000,
//             disableOnInteraction: false,
//           }}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination, Autoplay]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
        
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar3} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Damián Gómez</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar4} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Paola vera</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
       
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar4} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Matías Hernandez</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar3} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Lucas Rius</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar5} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Guillermina Diaz</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar4} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Julian Rodriguez</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className='cardContainer'>
//                 <div className="divImagen">
//                     <img src={avatar3} alt="" className="cardImagen" />
//                 </div>
//                 <div className="cardText">
//                     <h2 className='textCard'>Manuel Latorre</h2>
//                     <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
//                     <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
//                 </div>          
//             </div>
//         </SwiperSlide>
        
//       </Swiper>
    
//     </>
//   );
// }
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import avatar3 from '../../assets/avatar3.png'
// import avatar4 from '../../assets/avatar4.png'
import avatar5 from '../../assets/avatar5.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Equipo.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function Equipo() {
    
  return (
    <>
    <div style={{marginTop:200}}>
    <div>
    <p style={{fontSize: 30, fontWeight: '400', textAlign:'center', marginBottom: 80, marginTop: 30}}>CONOCE NUESTRO EQUIPO</p>
    </div>
    
      <Swiper
        
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
        coverflowEffect={{
          rotate:0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            
       
        <div className='cardContainer'>
            <span></span>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Damián Gómez</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Paola vera</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Matías Hernandez</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='https://www.linkedin.com/in/matiashernandez00/' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Lucas Rius</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='https://www.linkedin.com/in/lucas-rius/' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Guillermina Diaz</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='https://www.linkedin.com/in/guillerminaadiaz/' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Julian Rodriguez</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='https://www.linkedin.com/in/julianigrodriguez/' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='cardContainer'>
                <div className="divImagen">
                    <img src={avatar5} alt="" className="cardImagen" />
                </div>
                <div className="cardText">
                    <h2 className='textCard'>Manuel Latorre</h2>
                    <p className="textCard">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, veritatis ratione voluptatum cupiditate magni sapiente vel suscipit, quod dolor dolorum placeat facilis rerum iure minus facere aspernatur consequuntur at vitae!</p>
                    <a href='https://www.linkedin.com/in/manuel-latorre-936b72223/' target='_blank' className="button">  <LinkedInIcon style={{marginRight:5}}/> LinkedIn</a>
                </div>          
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
