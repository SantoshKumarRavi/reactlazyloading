import React from 'react'
import Banner from '../Layouts/Banner'
import Searchbar from '../Layouts/Searchbar'
import PageGridlayout from '../Layouts/PageGridlayout'

import { DataConsumer } from '../UseAuth/UseData'

const Pagination = () => {
  const datavalue=DataConsumer()
  console.log("datavalue in Pagination",datavalue)


  return (
    <>
    <div className="main-page-wrapper">
    <div className="page-wrapper">
    {datavalue?.showdetails?.data &&<div className={(datavalue?.showdetails?.data?.length!==undefined)?"opacity":""}>
        
    </div>}
    <div className='banner-logout-wrapper'>
    <Banner/>
    </div>
    </div>
    <Searchbar/>
    <PageGridlayout/>
    </div>
    </>
  )
}

export default Pagination