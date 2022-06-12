import React, { useEffect, useState } from 'react'
import { getAllUsers } from '../services/CourseService'


export default function UserDetails() {
    const [userData, setuserData]= useState([]);
    useEffect(()=>{
        getAllUsers()
    .then(res=>{
      console.log(res.data);
      setuserData(res.data)
    })
    .catch(err=> console.log(err));
  },[]);
  return (
    <div className='container'>
        <h4>User Details</h4>
        <table className="table table-bordered" style={{ marginTop: '1rem' }}>
  <thead>
    <tr>
        <th>Sr. No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    {userData?.map((usr) =>
    <tr class="table-active" key={usr.id}>
      <td>{usr.id}</td>
      <td>{usr.fname} &nbsp; {usr.lname}</td>
      <td>{usr.email}</td>
      <td>{usr.mobile}</td>
    </tr>
    )}
  </tbody>
</table>
    </div>
  )
}
