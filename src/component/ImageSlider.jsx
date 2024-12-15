import React from "react";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    { id: 1, url: "https://xlm.ru/storage/uploads/images/2022/04/12/HbWFqn8nqvgDi5Pn2trQoDRBeXZa7VuXH7dKYCt7.jpeg" },
    { id: 2, url: "https://ml.logobook.ru/make_nimage.php?uid=15536459" },
    { id: 3, url: "https://xlm.ru/storage/uploads/images/2022/12/02/hakWXWz11qYtIgO3rT8CTfKpU5tF81O76mLTe6cr.jpeg" },
    { id: 4, url: "https://sun9-24.userapi.com/impg/uhgJKHAKRZqItLHQCuigVKPqJ9940aVfbPptEw/MXvhNBja86E.jpg?size=510x773&quality=96&sign=55a5aafb52a71fccc618213c6d591af8&type=album" },
    { id: 5, url: "https://static.insales-cdn.com/images/products/1/1964/831809452/3024676-3.jpg" },
  ];
  
  const { t } = useTranslation(); 


  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 4,
    slidesToScroll: 1, 
    centerMode: true, 
    centerPadding: "20",
  };

  return (
    <div className="slider" >
      <h1 >{t('h1_manga')}</h1>
      <div className="slider-content">

      
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slider-card" >
            <img
              src={image.url}
              alt={`Slide ${image.id}`}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
             
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default ImageSlider;