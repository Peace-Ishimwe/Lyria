import React from "react";

const JumpBackinCard = ({ image, name}) => {
  return (
    <div className="max-w-[220px] rounded-xl overflow-hidden relative mt-5">
        <img src={image} alt={name} className="w-full" />
        <span className="absolute bottom-0 -translate-x-1/2 whitespace-nowrap text-white left-1/2">{name}</span>
    </div>
  );
};

export default JumpBackinCard;
