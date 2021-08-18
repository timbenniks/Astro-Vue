import React from 'react'

export default function VidItem(props) {
    return (
        <li >
          <a href={`/videos/${props.video.uid}`}>
            <img src={props.video.image}/>
            <article class="my-4">
              <p class="post-date text-gray-400 text-sm uppercase">
                {props.video.date}
              </p>
              <h4 class="font-bold text-xl leading-6 mb-2">
                {props.video.title}
              </h4>
            </article>
          </a>
        </li>
    )
  }