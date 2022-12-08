import React,{useState} from 'react'
import { DataConsumer } from '../UseAuth/UseData'

const Searchbar = () => {
  const datavalue=DataConsumer()
  // console.log("search data",datavalue)
  const [data,setdata]=useState({
    status:"",
    original_launch:"",
    type:""
})
function filterdata(e){
e.preventDefault();
let contextdata=datavalue?.data?.datas
const {status,original_launch,type}=data
let Statusregex=new RegExp(`${status}`) 
let launchregex=new RegExp(`${original_launch}`) 
let typeregex=new RegExp(`${type}`) 

if((status==="")&& (original_launch==="")&& (type==="")){
  datavalue.setShowSearchdetails({})
  // console.log("empty filtyered ==>",datavalue.data.datas)
  // datavalue.setdata(()=>{
  //   return{
  //     datas:datavalue.data.datas
  //   }
  // })
}

contextdata=contextdata.filter((objele)=>{
  let value=0
  if((status!==""&&Statusregex.test(objele.status))&&(original_launch!==""&&launchregex.test(objele.original_launch))&&(type!==""&&typeregex.test(objele.type))){
    value=objele
  }
  return value
})
datavalue.setShowSearchdetails(()=>{
  return{
    data:contextdata
  }
})
console.log("search filtered data ==>",contextdata)
}

function processingdata(e){
  let updated={...data}
  updated[e.target.name]=e.target.value
  setdata(()=>updated)
}
const{status,original_launch,type}=data
  return (
    <>
    <div className='search-bar-wrapper'>
      <h2>Make decision based on Datas</h2>
      <form  onSubmit={(e)=>filterdata(e)} >
        <div className='form-input-wrapper'>
        <input className='form-input' value={status} onChange={(e)=>processingdata(e)}  type={"text"} name={"status"} placeholder="    Status"/>
        <input className='form-input'  value={original_launch} onChange={(e)=>processingdata(e)} type={"text"} name={"original_launch"}  placeholder="    Original_launch"/>
        <input  className='form-input' value={type} onChange={(e)=>processingdata(e)} type={"text"} name={"type"}  placeholder="    Type"/>
        <input className='form-input form-input-submit' type={"submit"} value="Search"/>
        </div>
    </form>
    
    </div>
    </>
  )
}

export default Searchbar