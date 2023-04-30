import React, { useEffect, useState } from 'react';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Carousel = () => {


    const [carouselImages, setcarouselImages] = useState([]);


    useEffect(() => {

        fetch('https://learning-point-server-ten.vercel.app/carousel')
            .then(res => res.json())
            .then(data => setcarouselImages(data))

    }, []);

   

    return (
        <AutoplaySlider 
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={3000}
      
      >
        {
            carouselImages.map(cItem=>(<div key={cItem._id} data-src={cItem.img} />))
        }
       
      </AutoplaySlider>
    );
};

export default Carousel;