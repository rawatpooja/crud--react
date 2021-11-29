import React from 'react';
import {useState,useEffect} from 'react';
import{Link} from 'react-router-dom';
const Show1=()=>{
        let data1=[]
    const [selected,setSelected]=useState('')
    const[showData,setshowData]=useState(data1);
    useEffect((showData)=>{
const data1=JSON.parse(localStorage.getItem("data"))
        setshowData(data1);
        console.log(data1)
       console.log(showData);

    },[]);
    const changeSelectOptionHandler = (event) => {
           setSelected(event.target.value);
            console.log(event.target.value)
        console.log(selected)
            
};
return(
 <div>
   <div className="addp"><Link to ="/">Add Player</Link></div> <div className="showp"><Link to ="/show1">show Player</Link></div>
     <div className="mySelect">
        <select onChange={changeSelectOptionHandler}>
        <option>Select--</option>
        {showData?.map((value,i)=>{
       return(
       <option>{value.addData.name}</option>
             )
        })}
       </select> {" "}{" "}
       <select>
       <option>Select---</option>
       {showData?.filter((obj,i)=>obj.addData.name=== selected).map((value,i)=>{
       console.log(value.displayValue)
       console.log(selected)
       return( 
       value.displayValue.map((value,i)=>{
        return(
         <option>{value}</option>
               )
       })
       )})}
      </select> <br/><br/>
      <select onChange={changeSelectOptionHandler}>
        <option>Select--</option>
        {showData?.map((value,i)=>{
       return(
       <option>{value.addData.name}</option>
             )
        })}
       </select> {" "}{" "}
       <select>
       <option>Select---</option>
       {showData?.filter((obj,i)=>obj.addData.name=== selected).map((value,i)=>{
       console.log(value.displayValue)
       console.log(selected)
       return( 
       value.displayValue.map((value,i)=>{
        return(
         <option>{value}</option>
               )
       })
       )})}
      </select> <br/><br/>
       
      <select onChange={changeSelectOptionHandler}>
        <option>Select--</option>
        {showData?.map((value,i)=>{
       return(
       <option>{value.addData.name}</option>
             )
        })}
       </select> {" "}{" "}
       <select>
       <option>Select---</option>
       {showData?.filter((obj,i)=>obj.addData.name=== selected).map((value,i)=>{
       console.log(value.displayValue)
       console.log(selected)
       return( 
       value.displayValue.map((value,i)=>{
        return(
         <option>{value}</option>
               )
       })
       )})}
      </select> <br/><br/>
       
      <select onChange={changeSelectOptionHandler}>
        <option>Select--</option>
        {showData?.map((value,i)=>{
       return(
       <option>{value.addData.name}</option>
             )
        })}
       </select> {" "}{" "}
       <select>
       <option>Select---</option>
       {showData?.filter((obj,i)=>obj.addData.name=== selected).map((value,i)=>{
       console.log(value.displayValue)
       console.log(selected)
       return( 
       value.displayValue.map((value,i)=>{
        return(
         <option>{value}</option>
               )
       })
       )})}
      </select> <br/><br/>
       
      <select onChange={changeSelectOptionHandler}>
        <option>Select--</option>
        {showData?.map((value,i)=>{
       return(
       <option>{value.addData.name}</option>
             )
        })}
       </select> {" "}{" "}
       <select>
       <option>Select---</option>
       {showData?.filter((obj,i)=>obj.addData.name=== selected).map((value,i)=>{
       console.log(value.displayValue)
       console.log(selected)
       return( 
       value.displayValue.map((value,i)=>{
        return(
         <option>{value}</option>
               )
       })
       )})}
      </select> <br/><br/>
       
         </div>         
 </div>
    )
}
export default Show1;