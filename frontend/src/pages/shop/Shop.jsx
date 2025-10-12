import React from 'react'
import Hero from '../../components/hero/Hero'
import Popular from '../../components/popular/Popular'
import Offers from '../../components/offers/Offers'
import NewCollection from '../../components/newCollections/NewCollection'
import NewsLitter from '../../components/newsLetter/NewsLitter'

import classes from './Shop.module.css'
import Footer from '../../components/footer/Footer'

const Shop = () => {
  return (
    <div className={classes.container}>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLitter />
    </div>
  )
}

export default Shop
