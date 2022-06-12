import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCourses } from '../services/CourseService'

export default function Courses() {
    const [courseData, setcourseData]= useState([]);
    useEffect(()=>{
      getAllCourses()
    .then(res=>{
      console.log(res.data);
      setcourseData(res.data)
    })
    .catch(err=> console.log(err));
  },[]);
  return (
    <>
      <div className='row container'>
      <h2> Courses </h2>
        {courseData?.map((course) =>
          <div className='col-sm-4' style={{ marginBottom: '1rem' }} key={course.id}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">Course Name: {course.cname}</h5>
                <p>Duration: {course.duration}</p>
                <p>Price: ₹ {course.price}</p>
                <Link to="/adduser" className="btn btn-info">Enquire</Link>
              </div>
            </div>
          </div>)}
      </div>
    </>
  )
}
