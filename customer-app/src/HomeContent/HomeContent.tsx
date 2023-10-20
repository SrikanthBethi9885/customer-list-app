import React, { useState, useEffect } from 'react';
import img from './img.jpg' // Import local image
import img1 from './img1.jpg' // Import local image
import img3 from './img3.jpg' // Import local image
import img4 from './img4.jpg' // Import local image
import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: #333; 
    margin: 0; 
  `


const HomeContent = () => {
    const imageUrls = [ img, img1, img3, img4];  // Array of locally imported images

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000); // Change image every 3 seconds (adjust the interval as needed)

        return () => clearInterval(intervalId);
    }, [currentImageIndex, imageUrls.length]);

    return (
        <div>
            <img src={imageUrls[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '75%', height: '500px' }} />
            <Paragraph>"Welcome to <span style={{ color: '#007BFF', fontWeight: 'bold' }}> Bachannapet</span>, a picturesque gem nestled in the heart of rural India. Our 'Hamara Villages' platform is delighted to introduce you to the beauty and charm of <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Bachannapet</span> village. With its lush green fields, vibrant culture, and warm-hearted community, <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Bachannapet</span> offers a serene escape from the hustle and bustle of city life. Explore the rich agricultural heritage, visit the tranquil temples that dot the landscape, and immerse yourself in the traditions and festivities that make <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Bachannapet</span> a truly unique destination. Discover the stories of its people, the flavors of its cuisine, and the timeless traditions that have been passed down through generations. Join us in celebrating the beauty and spirit of <span style={{ color: '#007BFF', fontWeight: 'bold' }}>Bachannapet</span>  on 'Hamara Villages' as we invite you to experience the simple yet extraordinary life in this enchanting village."</Paragraph>
            
        </div>
    );
};

export default HomeContent;
