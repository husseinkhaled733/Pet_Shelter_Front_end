"use client";
import React, { useState } from "react";
import PetCard from "../Pet/petCard";
import Headercomponent from "../Header/Headercomponent";
import PetList from "../Pet/PetList";

const SearchFilter = ({ searchParams }: any) => {
  console.log(searchParams);
  console.log(searchParams.vaccinated);

  console.log("in search filter");
  

  const [houseTrained, sethouseTrained] = useState(
    Boolean(searchParams.houseTrained)
  );
  const [notHouseTrained, setnothouseTrained] = useState(
    Boolean(searchParams.notHouseTrained)
  );
  const [vaccinated, setvaccinated] = useState(
    Boolean(searchParams.vaccinated)
  );
  const [notvaccinated, setnotvaccinated] = useState(
    Boolean(searchParams.notVaccinated)
  );
  const [spayed, setspayed] = useState(Boolean(searchParams.spayed));
  const [neutering, setneutering] = useState(Boolean(searchParams.neutering));

  return (
    <>
      <Headercomponent></Headercomponent>
      <div className="container mx-auto p-4 min-h-screen min-w-screen bg-inherit">
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            console.log("====================================");
            console.log(vaccinated);
            console.log("====================================");
            console.log(notHouseTrained);
            console.log("====================================");
            console.log(notvaccinated);
            console.log("====================================");
            console.log(spayed);
            console.log("====================================");
            console.log(neutering);
            console.log("====================================");
            console.log(houseTrained);
            console.log("====================================");
          }}
          className="flex flex-col md:flex-row m-auto items-center w-fit justify-center space-y-4 md:space-y-0 mb-4 border-2 border-gray-400 px-6 pb-6 rounded-lg bg-base-100"
        >
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">House trained</span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={houseTrained}
                onChange={() => {
                  sethouseTrained(!houseTrained);
                }}
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
                onChange={() => {
                  setnothouseTrained(!notHouseTrained);
                }}
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
                onChange={() => {
                  setvaccinated(!vaccinated);
                }}
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
                onChange={() => {
                  setnotvaccinated(!notvaccinated);
                }}
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
                onChange={() => {
                  setspayed(!spayed);
                }}
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
                onChange={() => {
                  setneutering(!neutering);
                }}
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
        <PetList searchCriteria={searchParams}></PetList>
      </div>
    </>
  );
};

export default SearchFilter;
