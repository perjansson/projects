import Head from 'next/head'

import { Page, Content } from '../types'
import { getIndexPageData } from '../queries'
import { Carousel } from '../components/Carousel'
import { Grid } from '../components/Grid'
import { Tray } from '../components/Tray'

export async function getStaticProps() {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: getIndexPageData,
      }),
    }
  )

  const { data } = await res.json()

  return {
    props: {
      page: data.page,
    },
  }
}

interface IndexProps {
  page: Page
}

export default function Index({ page }: IndexProps) {
  const renderContent = (content: Content, i: number) => {
    const componentKey = `${content.__typename}_${i}`

    switch (content.__typename) {
      case 'Carousel':
        return <Carousel {...content} key={componentKey} />

      case 'Grid':
        return <Grid {...content} key={componentKey} />

      case 'Tray':
        return <Tray {...content} key={componentKey} />

      default:
        return null
    }
  }

  return (
    <>
      <Head>
        <title>Per Jansson - Fullstack Web Developer</title>
      </Head>
      <h1>{page.title}</h1>
      <div>{page.content.items.map(renderContent)}</div>
    </>
  )
}
