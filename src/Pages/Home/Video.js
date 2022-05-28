import React from 'react';


const Video = () => {
    return (
        <div className=''>
            <h2>Welcome To My Site</h2>
            <div className='rounded-lg bg-neutral sm:p-8'>
                <div className='aspect-w-16 aspect-h-9'>
                <iframe height="300px" width="100%" src="https://www.youtube.com/embed/LiY7u68M6hU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
            
        </div>
    );
};

export default Video;