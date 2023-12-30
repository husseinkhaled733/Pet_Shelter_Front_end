'use client'
import { Box } from "@mui/material";
import StaffMemberCard from "./staffMemberCard";
import { useEffect, useState } from "react";
import { BASE_BACKEND_URL, GET_STAFF_ENDPOINT } from "../constants/end-points";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "../constants/routes";


const StaffMembers = (props: any) => {

  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  const [staffList, setStaffList] = useState([]);

  const fetchStaffMembers = async () => {
    const url = BASE_BACKEND_URL + GET_STAFF_ENDPOINT + localStorage.getItem('email');
    let headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors')
    headers.append('Authorization', localStorage.getItem('Authorization')!)
    let response = await fetch(url, {
      method: 'GET',
      headers: headers
    })
    if (response.status === 200) {
      let data = await response.json()
      setStaffList(data)
    }
  }

  useEffect(() => {
    fetchStaffMembers()
  }, [])
  
  return (
    <Box>
      {staffList.map((staff: any) => 
        <StaffMemberCard key={staff.email} staff={staff} staffList={staffList} setStaffList={setStaffList} />
      )}
      <ToastContainer />
    </Box>
  )
}

export default StaffMembers;