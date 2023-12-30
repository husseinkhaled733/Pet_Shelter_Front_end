'use client'
import { useEffect } from 'react';
import { HOME_ROUTE } from '../constants/routes';
import { useRouter } from 'next/navigation';


const AdopterPage = () => {
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem('Authorization')
    if (!auth) {
      router.push(HOME_ROUTE)
    }
  }, [])

  return (
    <div>
      <h1>Adopter Page</h1>
    </div>
  )
}

export default AdopterPage;