import React, { useEffect, useState } from 'react'

const Details = ({states}) => {
    const {contract}=states;
    const[data,setData]=useState([]);
    useEffect(()=>{
        const getDetails=async()=>{
            const details=await contract.getData();
            setData(details);
            // console.log(details);
        }
        contract && getDetails();
    },[contract])
    // console.log(data);
  return (
    <div className="bankData">
        <table>
        <caption>
    Deposit details
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Message</th>
      <th scope="col">Date</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
            {data.map((datas)=>{
                const dates=(parseInt(datas.timestamp)*1000);
                const date=new Date(dates);
                const currentdate=date.toLocaleString(); 
                // const dated=date.toDateString();
                console.log(currentdate);
                return(
                    
                        <tbody key={datas.timestamp}>
                            <tr>
      <th scope="row">{datas.name}</th>
      <td>{datas.message}</td>
      <td>{currentdate}</td>
      <td>{datas.from}</td>
    </tr>
                            </tbody>
                    
                )
            })}
            </table>

    </div>
  )
}

export default Details