'use client';

import Image from 'next/image';
import car1 from '../../public/1.png';
import car2 from '../../public/2.png';
import car3 from '../../public/3.png';
import { FaArrowRight, FaStar } from 'react-icons/fa';

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const dummyData = [
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    images: [car1, car2, car3],
  },
  {
    title: '1979 HONDA Durango',
    lot: '7435903470',
    currentBid: '',
    location: 'DXB - Dubai',
    images: [car1, car2, car3],
  },
];

const RelatedCars = () => {
  return (
    <div className="mt-12">
      <h4 className="text-2xl md:text-4xl font-bold mb-6">Related Vehicles</h4>
      <div className="flex flex-wrap">
        {dummyData.map((item, i) => {
          const { title, lot, currentBid, location, images } = item;
          return (
            <div className="p-2 w-full sm:w-1/2 lg:w-1/3" key={i}>
              <div className="border border-primary border-opacity-20 rounded-md overflow-hidden">
                <Swiper
                  grabCursor={true}
                  centeredSlides={true}
                  pagination={false}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper text-center"
                >
                  {images?.map((image, i) => (
                    <SwiperSlide key={i}>
                      <Image src={image} alt="car" className="w-full" />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="p-3 flex flex-col gap-1">
                  <p>Lot: {lot}</p>
                  <h4 className="font-semibold text-lg">
                    Current Bid:{' '}
                    {currentBid ? (
                      currentBid
                    ) : (
                      <span className="text-primary cursor-pointer">
                        Start the bid
                      </span>
                    )}
                  </h4>
                  <p>Location: {location}</p>
                </div>
                <div className="flex justify-between items-center gap-2 p-3">
                  <button className="flex justify-center items-center gap-x-1 bg-primary text-white hover:bg-opacity-90 rounded-lg py-2 px-3">
                    View Details <FaArrowRight />
                  </button>
                  <button className="border border-primary text-primary hover:text-white hover:bg-primary duration-300 rounded py-1.5 px-3 flex justify-center items-center gap-x-1">
                    <FaStar />
                    Watch
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedCars;
