import React from 'react'
import Banner from '../Layouts/Banner'
import Searchbar from '../Layouts/Searchbar'
import Gridlayout from '../Layouts/Gridlayout'
import { DataConsumer } from '../UseAuth/UseData'


const Lazyload = () => {
  const datavalue=DataConsumer();
  console.log("datavalue in Lazyload",datavalue)


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
    <Gridlayout/>
    </div>
    </>
  )
}

export default Lazyload