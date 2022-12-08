import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import { DataConsumer } from '../UseAuth/UseData'
const Gridcontent = ({showpopup,page,setpage}) => {
const[isEmpty,setIsempty]=useState(false)
const [show,setshow]=useState(true)
const[total,settotal]=useState(0)
const datavalue=DataConsumer()
useEffect(()=>{
    console.log("use eduect-------->",datavalue)
    if(datavalue?.showsearchdetails?.data && datavalue?.showsearchdetails?.data?.length!=0){
        console.log(" inside use eduect-------->")

        setshow(false)
    }

},[datavalue])
    console.log("data avlue in grid coontetnd", datavalue)
    // settotal( datavalue?.currentScroll?.datas?.length)
 async function loadFunc (){
    console.log("loading asyunc in infinite scroll")
    let currentpage=page
    let updatedpage=currentpage+1
    console.log("current", currentpage)
    console.log("updated page",updatedpage)
    let updated=datavalue?.data?.datas?.slice(((updatedpage*10)-10),updatedpage*10)
    console.log("updating", updated, datavalue?.data?.datas)
   
    if(updated?.length!=0){
        await setpage((pre)=>pre+1)
        await datavalue?.setcurrentScroll(()=>{
            return {
                datas:[...datavalue?.currentScroll?.datas,...updated]
            }
        })
    }

}
console.log("testing================")
console.log(
    !datavalue?.showsearchdetails?.data?.length==0)
// const totalitems=datavalue?.currentScroll?.datas?.length
  return (
<>
{console.log("show status ==>", show)}
{show&&<InfiniteScroll
 dataLength={total}
 next={loadFunc}
 hasMore={true}
 loader={<h4>Loading...</h4>}

>
{datavalue?.currentScroll?.datas?.map((x,i)=>
    <div onClick={(e)=>showpopup(e)} className={""} id={x.capsule_serial} key={i}>
    <p><span className='parallel'>Capsule_serial : </span>{x.capsule_serial}</p>
    <p>
    <span className='parallel'>Capsule_id : </span>{x.capsule_id}</p>
    <p><span className='parallel'>Status : </span>{x.status}</p>
   </div>
  )
}

 </InfiniteScroll> 
}
</>
  )
}

export default Gridcontent