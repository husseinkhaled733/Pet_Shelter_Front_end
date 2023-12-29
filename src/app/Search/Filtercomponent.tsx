'use client'
import React from "react";
import { useState } from "react";
import PetCard from "../Pet/petCard";
import { log } from "console";

const Filtercomponent = ({searchCriteria, petDataList }: { searchCriteria:SearchParams, petDataList: [] }) => {

  console.log(searchCriteria);

  const [houseTrained,sethouseTrained] =useState(searchCriteria.houseTrained);
  const [notHouseTrained,setnothouseTrained] =useState(searchCriteria.notHouseTrained);
  const [vaccinated,setvaccinated] =useState(searchCriteria.vaccinated);
  const [notvaccinated,setnotvaccinated] =useState(searchCriteria.notVaccinated);
  const [spayed,setspayed] =useState(searchCriteria.spayed);
  const [neutering,setneutering] =useState(searchCriteria.neutering);


  return (
    <div className="container mx-auto p-4">
      <form onSubmit={(e:any)=>{
        e.preventdefault();
        console.log('====================================');
        console.log(e.target.values);
        console.log('====================================');
      }} className="flex flex-col md:flex-row m-auto items-center w-fit justify-center space-y-4 md:space-y-0 mb-4 border-2 border-gray-400 px-6 pb-6 rounded-lg bg-base-100">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">House trained</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={houseTrained}
              
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Not house trained</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={notHouseTrained}

            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Vaccinated</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={vaccinated}

            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Not vaccinated</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={notvaccinated}

            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Spayed</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={spayed}

            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Neutring</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={neutering} 
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Filter
        </button>
      </form>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Search Results
          </span>
        </h1>
      </div>
      <ul className="flex flex-wrap justify-center gap-4">
        {petDataList.map((petData, index) => (
          <li key={index}>
            <PetCard petData={petData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtercomponent;
