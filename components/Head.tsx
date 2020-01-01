import Head from 'next/head'
import { useSelector } from 'react-redux'

export default () => {
  const siteTitle = useSelector((state: any) => state.products.siteTitle)

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" user-scalable="no" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
      />
    </Head>
  )
}
