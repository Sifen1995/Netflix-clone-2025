import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Banner from '../../components/banner/banner'
import Rowlist from '../../components/rows/rowlist/Rowlist'
import Row from '../../components/rows/row/Row'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <Rowlist/>
      <Footer/>
    </>
  )
}
