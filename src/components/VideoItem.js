import React, { useState } from 'react'

class VideoItem extends React.Component {
    render() {
      return (
        <li class="video-item" id={video.uid}>
        <a href="/videos/${video.uid}">
          <img alt={video.title}
               src={video.image}
               width="16"
               height="9"
               loading="lazy"
               class="w-full object-contain"
          />
          {/* <article class="my-4">
            <p class="post-date text-gray-400 text-sm uppercase">
              { video.date }
            </p>
            <h4 class="font-bold text-xl leading-6 mb-2">
              { video.title }
            </h4>
            <p>
              <span
                v-for="tag in video.tags"
                key="tag"
                class="
                  inline-block
                  uppercase
                  text-xs
                  bg-blue-100
                  py-1
                  px-2
                  mr-1
                  mb-1
                "
              >
                {tag}
              </span>
            </p>
          </article> */}
        </a>
      </li>
      );
    }
  }