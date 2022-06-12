import React,{useState} from 'react'
import { addUser } from '../services/CourseService';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const [state,setState]=useState({fname:'',lname:'',email:'',mobile:''});
    const navigate=useNavigate();
    const handler=(event)=>{
     const {name,value}=event.target;
     setState({...state,[name]:value});
    }
    const postData=(event)=>{
      event.preventDefault();
      addUser(state)
      .then(res=>{
          if(res.data){
              alert("Add User");
              navigate("/courses");
          }
      })
      .catch(err=> console.log(err))
}
  return (
    <div className='container'>
    <h1> Add Details</h1>
    <form onSubmit={postData}>
        <div className='form-group'>
            <label> First Name</label>
            <input type="text" name="fname" className='form-control' onChange={handler}/>
        </div>
        <div className='form-group'>
            <label> Last Name</label>
            <input type="text" name="lname" className='form-control' onChange={handler}/>
        </div>
        <div className='form-group'>
            <label> Email</label>
            <input type="text" name="email" className='form-control' onChange={handler}/>
        </div>
        <div className='form-group'>
            <label> Mobile</label>
            <input type="text" name="mobile" className='form-control' onChange={handler}/>
        </div>
        <input type="submit" value="Add" className='btn btn-success'/>
    </form>
</div>
    
  )
}
