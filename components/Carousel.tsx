import React from 'react'
import { Carousel as CarouselType } from '../types'

export function Carousel({ title, projects }: CarouselType) {
  return (
    <>
      <h2>Carousel ({title})</h2>
      <div>
        {projects.items.map((project) => (
          <div>{project.title}</div>
        ))}
      </div>
    </>
  )
}
