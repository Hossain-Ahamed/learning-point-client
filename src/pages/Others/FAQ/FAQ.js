import React from 'react';

const FAQ = () => {
    function downloadImage(imageUrl) {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'my-img.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
        return (
            <div>
                <img src="https://authentication-project001.web.app/assets/carousel/images/Huge%20supporing%20team.jpeg" alt="" />
                <button onClick={() => downloadImage('https://authentication-project001.web.app/assets/carousel/images/Huge%20supporing%20team.jpeg')}>download </button>
            </div>
        );
    };

    export default FAQ;