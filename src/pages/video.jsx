import React from 'react';

const Video = () => {
  // const videoUrl = 'https://www.youtube.com/embed/ALc6QprUd0k?autoplay=1';

  return (
    <div className='flex flex-wrap'>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} style={{ width: '300px', height: '300px', margin: '10px' }}>
        <iframe width="935" height="526" src="https://www.youtube.com/embed/ALc6QprUd0k" title="✔️ Picked up _JAVA_OPTIONS SOLVED  permanently." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ))}
    </div>
  );
};

export default Video;


<iframe width="935" height="526" src="https://www.youtube.com/embed/ALc6QprUd0k" title="✔️ Picked up _JAVA_OPTIONS SOLVED  permanently." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>