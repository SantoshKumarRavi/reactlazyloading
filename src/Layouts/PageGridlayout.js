import React, { useRef, useState,useEffect } from 'react'
import { DataConsumer } from '../UseAuth/UseData'
import "../App.css"
const PageGridlayout = () => {
  const datavalue=DataConsumer()
  const[page,setpage]=useState(1)
  // const[totalpages,settotalpages]=useState({})
  // const[filteredpagedata,setfilteredpagedata]=useState({})
  // const[showdetails,setShowdetails]=useState({})
  const popref=useRef(null)
  function changepage(e){
    setpage( e.target.id)
  }

//   console.log("grid 1", datavalue.data?.datas)
//   console.log("grid data 2",(datavalue.showsearchdetails?.data))

  function showpopup(e){
  const id=(e.target.id)
    let filterpopup=[...datavalue?.data?.datas]
    // console.log("filtered",filterpopup)
    // console.log("clicked show opo up",e.target)

    filterpopup=filterpopup.filter((ele)=>{
      let value=0
      if(id===ele.capsule_serial){
        value=ele
      }
      return value
    })
    datavalue.setShowdetails(()=>{
      return {
        data:filterpopup
      }
    })
    console.log("after filtered",filterpopup)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popref.current &&
        !popref.current.contains(event.target)
      ) {
        datavalue.setShowdetails({})
      }
    };
    if( datavalue.showdetails?.data){
      setTimeout(()=>{
        document.addEventListener("click", handleClickOutside,false);
      },0)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, [datavalue]);

  return (
    <>
      <div className='grid_container'>
         {
       (!(datavalue.showsearchdetails?.data)||(datavalue.showsearchdetails?.data?.length===0))&& datavalue?.data?.datas?.slice(((page*10)-10),page*10).map((x,i)=>
    <div onClick={(e)=>showpopup(e)} className={"grid-content-box"} id={x.capsule_serial} key={i}>
        <p><span className='parallel'>Capsule_serial : </span>{x.capsule_serial}</p>
        <p>
        <span className='parallel'>Capsule_id : </span>{x.capsule_id}</p>
        <p><span className='parallel'>Status : </span>{x.status}</p>
       </div>)
        }
         {
         datavalue.showdetails?.data?.map((x,i)=><div ref={popref} className='grid-content-box popup'  key={i}>
        <p><span className='parallel'>Capsule_serial : </span>{x.capsule_serial}</p>
        <p>
        <span className='parallel'>Capsule_id : </span>{x.capsule_id}</p>
        <p><span className='parallel'>Status : </span>{x.status}</p>
        <p><span className='parallel'>Landings : </span>{x.landings}</p>
        <p><span className='parallel'>Reuse_count : </span>{x.reuse_count}</p>

          </div>)
        }
        {(datavalue.showsearchdetails?.data)&& 
        datavalue?.showsearchdetails?.data?.slice(((page*10)-10),page*10).map((x,i)=><div onClick={(e)=>showpopup(e)} className={datavalue?.showsearchdetails?.data?.length<5?"grid-content-box less-qty-grid-content-box":"grid-content-box"}  id={x.capsule_serial} key={i}>
              <p><span className='parallel'>Capsule_serial : </span>{x.capsule_serial}</p>
        <p>
        <span className='parallel'>Capsule_id : </span>{x.capsule_id}</p>
        <p><span className='parallel'>Status : </span>{x.status}</p>
          </div>)
        }
      </div>
      <div className='total-page-wrapper'>
        {/* <div className='page-wrapper'> */}
        <div className={"page-box"} >⬅</div>
      {
          datavalue?.totalpage?.datas?.map((x,i)=><div id={x} className={"page-box"} onClick={(e)=>changepage(e)} key={i}>{x}</div>)
        }
                <div className={"page-box"} >➡</div>
        {/* </div> */}
      </div>
        
    </>
  )
}

export default PageGridlayout