import React from 'react'

export default function VidItem(props) {

  return (
    <li>
      <p>REACT</p>
      <a href={`/videos/${props.video.uid}`}>
        
        <img 
          src={props.video.image}
          alt={props.video.title}
          width="16"
          height="9"
          loading="lazy"
          className="w-full object-contain"
        />
        <article className="my-4">
        
          <p className="post-date text-gray-400 text-sm uppercase">
            {props.video.date}
          </p>
          <h4 className="font-bold text-xl leading-6 mb-2">
            {props.video.title}
          </h4>
          <p>

            {props.video.tags.map((tag) => (
              <span className="inline-block uppercase text-xs bg-blue-100 py-1 px-2 mr-1 mb-1">
                {tag}
              </span>
            ))}
          </p>
        </article>
      </a>
    </li>
  )
}