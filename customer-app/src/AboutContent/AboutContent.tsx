import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AboutContent: React.FC = () => {
    const [villageText, setVillageText] = useState("");
    const [youtubeText, setYoutubeText] = useState("");

    useEffect(() => {
        // You can fetch the content using axios or any other method
        // For this example, I'll assign sample text
        setVillageText("Bachannapet, a tranquil village located in the heart of rural India, is a place where time seems to stand still amidst the beauty of tradition and nature. With its lush fields, vibrant culture, and close-knit community, Bachannapet offers a peaceful escape from the hustle and bustle of urban life. Explore the rich agricultural heritage, visit the quaint temples that grace the landscape, and immerse yourself in the traditions and festivities that have been passed down through generations. Bachannapet is a testament to the simple yet extraordinary life of rural India, where every day is a celebration of community, culture, and the beauty of nature.");
        setYoutubeText("Welcome to the HamaraVillages YouTube channel, your gateway to the captivating world of rural India. Our channel is dedicated to showcasing the untold stories, cultural treasures, and natural wonders found in villages across the country. Through our engaging videos, you'll embark on a virtual journey to discover the heart and soul of rural life. From vibrant festivals and traditional art forms to breathtaking landscapes and heartwarming community stories, we bring you closer to the essence of India's villages. Join us as we celebrate the uniqueness, diversity, and beauty of rural life, one video at a time. Subscribe, like, and share the experience with us on HamaraVillages YouTube, and let's explore the incredible charm of village living together.");

        // You can also make an axios request to fetch the content
        // axios.get('your-api-endpoint')
        //   .then(response => {
        //     setVillageText(response.data.villageText);
        //     setYoutubeText(response.data.youtubeText);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
    }, []);
    const textStyleHeader = {
        color: '#007BFF', // Text color
        fontWeight: 'bold', // Font weight (bold)
        fontSize: '20px', // Font size
        fontFamily: 'Arial, sans-serif', // Font family
    };
    const textStyle = {
        color: '#46967B ', // Text color
        fontSize: '15px', // Font size
        fontFamily: 'Arial, sans-serif', // Font family
    };


    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <div className="about-village">
                <h1 style={textStyleHeader}>About Bachannapet Village</h1>
                <p style={textStyle}>{villageText}</p>
            </div>
            <div className="about-youtube">
                <h1 style={textStyleHeader}>About HamaraVillages YouTube Channel</h1>
                <p style={textStyle}>{youtubeText}</p>
            </div>
        </div>
    );
};

export default AboutContent;

