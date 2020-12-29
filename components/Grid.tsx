import React from 'react'
import { Grid as GridType } from '../types'

export function Grid({ title, projects }: GridType) {
  return (
    <>
      <h2>Grid ({title})</h2>
      <div>
        {projects.items.map((project) => (
          <div>{project.title}</div>
        ))}
      </div>
    </>
  )
}
