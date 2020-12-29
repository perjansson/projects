import React from 'react'
import { Tray as TrayType } from '../types'

export function Tray({ title, projects }: TrayType) {
  return (
    <>
      <h2>Tray ({title})</h2>
      <div>
        {projects.items.map((project) => (
          <div>{project.title}</div>
        ))}
      </div>
    </>
  )
}
