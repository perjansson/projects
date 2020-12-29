import { BLOCKS } from '@contentful/rich-text-types'

export interface Project {
  title: string
  role: string
  description: BLOCKS
}

export interface Carousel {
  __typename: 'Carousel'
  title: string
  projects: {
    items: Project[]
  }
}

export interface Grid {
  __typename: 'Grid'
  title: string
  projects: {
    items: Project[]
  }
}

export interface Tray {
  __typename: 'Tray'
  title: string
  projects: {
    items: Project[]
  }
}

export type Content = Carousel | Grid | Tray

export interface Page {
  title: string
  content: {
    items: Content[]
  }
}
