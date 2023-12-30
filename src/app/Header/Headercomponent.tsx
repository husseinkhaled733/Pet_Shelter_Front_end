'use client'
import { useRouter } from "next/navigation";
import React from "react";

const Headercomponent = () => {
  const router = useRouter();
  return (
    <div className="navbar bg-base-100 rounded-lg mb-5">
      <div className="flex-1">
        <text className="btn btn-ghost text-xl">Welcome</text>
      </div>
      <div className="flex justify-around">
        <button className="btn btn-primary mx-5" onClick={()=>{
          router.push('/Home')
        }}>Home</button>
        <button className="btn btn-secondary mx-5" onClick={()=>{
          router.push('/Applications')
        }}>Applications</button>
      </div>
    </div>
  );
};

export default Headercomponent;
