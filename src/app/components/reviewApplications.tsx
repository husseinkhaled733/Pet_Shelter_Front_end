'use client'
import { Box } from "@mui/material";
import StaffMemberCard from "./staffMemberCard";
import { useEffect, useState } from "react";
import { BASE_BACKEND_URL, GET_APPLICATIONS_ENDPOINT, GET_STAFF_ENDPOINT } from "../constants/end-points";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { HOME_ROUTE } from "../constants/routes";
import ReviewAppCard from "./reviewApp";


const ReviewApps = (props: any) => {

  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  const [appList, setAppList] = useState([]);

  const fetchApps = async () => {
    const url = BASE_BACKEND_URL + GET_APPLICATIONS_ENDPOINT + localStorage.getItem('email');
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
      setAppList(data)
    }
  }

  useEffect(() => {
    fetchApps()
  }, [])
  
  return (
    <Box>
      {appList.map((app: any) => 
        <ReviewAppCard app={app} />
      )}
      <ToastContainer />
    </Box>
  )
}

export default ReviewApps;