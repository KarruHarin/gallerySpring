import React from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';
import background from '../assets/background.jpg';
import nakash from '../assets/nakash1.JPG';
import haricharan from '../assets/haricharan.JPG';
import gaami from '../assets/gaami director.JPG';
import upview from '../assets/upview.jpg';
import people from '../assets/people.jpg';
import musicVideo from '../assets/musicVideo.mp4';
import pep from '../assets/alsoPeople.jpg';
import chowrastha from '../assets/chowrastha.MP4';

import fashion from '../assets/fashionShow.JPG';
import hanuman from '../assets/hanumanragupadi.JPG';
import spring from '../assets/spring.jpg';
import cncert from '../assets/concertVideo.mp4';
import navdeep from '../assets/navdeep (2).JPG';
import speechh from '../assets/speech.JPG';



const Gallery = () => {
  const items = [
    { id: 1, type: 'image', title: 'Nakash Aziz', media: nakash, span: 'row-span-2 col-span-2' },
    { id: 2, type: 'image', title: 'HariCharan', media: haricharan, span: 'col-span-1' },
    { id: 3, type: 'image', title: 'Directors Cut', media: gaami, span: 'col-span-1' },
    { id: 4, type: 'video', title: 'Urban Dreams', media: cncert, span: 'row-span-2 col-span-2' },
    { id: 5, type: 'image', title: 'Navdeep', media: navdeep, span: 'col-span-1' },
    { id: 6, type: 'video', title: 'Chowrastha', media: chowrastha, span: 'col-span-1' },
    { id: 7, type: 'image', title: 'City Lights', media: hanuman, span: 'row-span-2 col-span-2' },
    { id: 8, type: 'image', title: 'Fashion', media: fashion, span: 'col-span-1' },
    { id: 9, type: 'image', title: 'Inspiration', media: speechh, span: 'col-span-1' },
    { id: 10, type: 'image', title: 'Night Life', media: upview, span: 'col-span-2' },
  ];

  const MediaContent = ({ item }) => {
    if (item.type === 'video') {
      return (
        <video 
          src={item.media}
          className="w-full h-full object-cover rounded-lg"
          autoPlay
          muted
          loop
        />
      );
    }
    return (
      <img 
        src={item.media}
        alt={item.title}
        className="w-full h-full object-cover rounded-lg"
      />
    );
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-pink-200 bg-center bg-fixed font-henny bg-contain"
      style={{ backgroundImage: `url(${spring})`}}
    >
      {/* Heading */}
      {/* Grid */}
      <div className="grid grid-cols-4 gap-2 p-6 auto-rows-[150px] max-w-[2000px] mx-3 pt-40 md:mx-2 sm:mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${item.span} group relative overflow-hidden rounded-sm  shadow-lg hover:shadow-xl transition-shadow duration-500 `}
          >
            {/* Media with Zoom Effect */}
            <div className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-full transform transition-transform ">
                <MediaContent item={item} />
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            {/* Title and Icon */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-bold group-hover:text-pink-400 transition-colors duration-300 md:text-xl lg:text-2xl truncate">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
