import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {

  

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A cat in a slice of bread"
        src="../images/catBread.jpg"
      />


    </Layout>
  )
}

export default IndexPage