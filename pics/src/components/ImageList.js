import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = props => {
  const images = props.images.map(i => (
    <ImageCard
      key={i.id}      
      image={i}    
    />
  ));
  return <div className="image-list" style={{ paddingTop: "30px" }}>{images}</div>;
};

export default ImageList;
