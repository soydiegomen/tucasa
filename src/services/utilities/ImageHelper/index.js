import React from 'react';
import imageConfig from 'services/config';

//Obtienen las casas publicadas con base a ciertos filtros
export const buildHouseImage = (relativeImage) => {
  let imageUrl = '';
  if(relativeImage && relativeImage.length > 0){
    //Default image
    imageUrl = imageConfig.houseCDNURL + relativeImage;
  }else{
    imageUrl = imageConfig.houseCDNURL + 'uploads/2018/3/13/min-1521001117851-seis.jpg';
  }

  return (<img alt="casa uno" className="img-responsive portrait"
  src={imageUrl} />);
};
