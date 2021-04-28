import React from 'react';
import './index.css';

export default function Carousel({ first, second, third }) {
  console.log(first);
  return (
    <>
      <div class="carousel">
        <div class="carousel-inner">
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden="true"
            checked="checked"
          />
          <div class="carousel-item">
            <img src={first} />
          </div>
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden="true"
          />
          <div class="carousel-item">
            <img src={second} />
          </div>
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden="true"
          />
          <div class="carousel-item">
            <img src={third} />
          </div>
          <label for="carousel-3" class="carousel-control prev control-1">
            ‹
          </label>
          <label for="carousel-2" class="carousel-control next control-1">
            ›
          </label>
          <label for="carousel-1" class="carousel-control prev control-2">
            ‹
          </label>
          <label for="carousel-3" class="carousel-control next control-2">
            ›
          </label>
          <label for="carousel-2" class="carousel-control prev control-3">
            ‹
          </label>
          <label for="carousel-1" class="carousel-control next control-3">
            ›
          </label>
          <ol class="carousel-indicators">
            <li>
              <label for="carousel-1" class="carousel-bullet">
                •
              </label>
            </li>
            <li>
              <label for="carousel-2" class="carousel-bullet">
                •
              </label>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
