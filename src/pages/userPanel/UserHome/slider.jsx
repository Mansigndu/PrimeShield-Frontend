
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css';

function Slider() {
  return (
    <>
      <div className="bigclient">
        <h3 className='clients1'>CLIENT TESTIMONIALS</h3>
        <h1 className='clients2'>What Our Policyholders Say About <br />Our Insurance Services</h1>

        <Swiper
          modules={[Navigation, Pagination,  A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
         
        >

          <SwiperSlide>
          <div className="leftclient d-flex flex-column gap-3">
              <img src="images/testimonial-1.jpg" alt="Client" width={100} height={100} id='imgg' />
              <h2 className='clientbox1'>vanshika
                <h4 className='clientbox2'>Teacher</h4>
              </h2>
            </div>
            <div className="left1client">
              <p   className='mt-3'>"The health insurance plan offered great coverage at an affordable premium. Filing a claim was quick and stress-free."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="leftclient d-flex flex-column gap-3">
              <img src="images/testimonial-2.jpg" alt="Client" width={100} height={100} id='imgg' />
              <h2 className='clientbox1'>Anmol
                <h4 className='clientbox2'>Teacher</h4>
              </h2>
            </div>
            <div className="left1client">
              <p  className='mt-3'>"The health insurance plan offered great coverage at an affordable premium. Filing a claim was quick and stress-free."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="leftclient d-flex flex-column gap-3">
              <img src="images/testimonial-3.jpg" alt="Client" width={100} height={100} id='imgg' />
              <h2 className='clientbox1'>Vikram Patel
                <h4 className='clientbox2'>Freelancer</h4>
              </h2>
            </div>
            <div className="left1client">
              <p  className='mt-3'>"I got my motor insurance policy through this platform. The whole process was transparent and super convenient."</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="leftclient d-flex flex-column gap-3">
              <img src="images/testimonial-4.jpg" alt="Client" width={100} height={100} id='imgg' />
              <h2 className='clientbox1'>Neha Sinha
                <h4 className='clientbox2'>IT Professional</h4>
              </h2>
            </div>
            <div className="left1client d-flex flex-column gap-3">
              <p  className='mt-3 '>"I’ve been with CrashGuard for over a year. Their travel insurance saved me during a trip delay—amazing service!"</p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default Slider;
