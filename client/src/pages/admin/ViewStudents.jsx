import React, { useEffect, useState } from 'react'
import ClassData from '../../components/ClassData'
import Section from '../../components/section'
import Students from '../../components/student/students'
import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getStudents } from '../../redux/actions/studentAction'

const ViewStudents = () => {
  const dispatch = useDispatch()
  const [classData,setClassData]=useState({
    studentClass:'',
    section:''
  })
  const { students } = useSelector(state => state.students)

  const [allStudents,setAllStudents]=useState([])

  useEffect(() => {
    dispatch(getStudents())
  }, [dispatch])



  const handleChange=(e)=>{
    setClassData({
      ...classData,
      [e.target.name]:e.target.value
    })
  }

  
  const handleSubmit=()=>{

    if(!classData.studentClass || !classData.section) {
      alert("Please select student class and section")
    }
  
    if(classData.studentClass && classData.section) {
      const filterStudent = [...students].filter(student => student.className === String(classData.studentClass) && student.section === classData.section)

      setAllStudents(filterStudent)

    }
  }

  return (
    <Box>
      <Box sx={{mt:'20px'}}>
        <ClassData handleChange={handleChange} classData={classData}/>
        <Section handleChange={handleChange} classData={classData}/>
      </Box>
      <Button variant='contained' sx={{my:'20px'}} onClick={()=>handleSubmit()}>Submit</Button>
      <hr />
      <Students allStudents={allStudents} />
    </Box>
  )
}

export default ViewStudents
