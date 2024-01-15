import React from "react";

function Card(props) {
  const interests = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.' },
    {id: 2, name: 'MacBook', description: 'Apple MacBook.' },
];
  return (
    
    <div className="border-sm rounded-lg shadow-lg p-4 m-4 bg-slate-500 w-[400px]">
      <h2 className="text-xl mb-3 bg-slate-300 ">{props.name}</h2>
      <p className="text-sm text-red mb-3">{props.description}</p>
      <h3 className="text-sm p-0 m-0">Interests</h3>
      <ul className="p-0 m-0 list-none">
        {props.interests && props.interests.map((interest) => (
          
          <li key={interest} className="font-sm mb-2 text-blue-200">{interest}</li>
        ))}
        
      </ul>
      <div className="flex mb-4">
        <a href={props.linked} target="_blank" rel="noopener noreferrer" className="text-white p-4 border rounded-lg bg-sky-300 inline-block m-3 shadow-md ">LinkedIn</a>
        <br />
          <a href={props.twitter} target="_blank" rel="noopener noreferrer" className="text-white p-4 border rounded-lg bg-sky-300 inline-block m-3 shadow-md">
            Twitter
          </a>
          {props.otherSocialMedia && (
            <a href={props.otherSocialMedia} target="_blank" rel="noopener noreferrer" className="text-white p-4 border rounded-lg bg-sky-300 inline-block m-3 shadow-md" >
              {props.otherSocialMedia.label}
            </a>
          )}
      </div>

    </div>
  );
}

export default Card;

