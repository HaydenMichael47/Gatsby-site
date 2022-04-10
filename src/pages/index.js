import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import { useDispatch } from 'react-redux'
import { pieDataUpdateAction } from '../redux/pieData/pieActions'
import { usePieData } from '../redux/pieData/usePieData'
import Pie from '../components/pie'

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