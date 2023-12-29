'use client'
import React, { useState } from "react";
import PetCard from "../Pet/petCard";
import SearchBar from "../Search/Searchcomponent";
import {
  dummyPetData,
  dummyPetData1,
  dummyPetData2,
  dummyPetData3,
} from "./dummyPetData";
import Headercomponent from "../Header/Headercomponent";
import Filtercomponent from "../Search/Filtercomponent";

const HomePage = () => {
  

  const petDataList = [
    dummyPetData,
    dummyPetData1,
    dummyPetData2,
    dummyPetData3,
  ];

  const [searchCriteria,setSearchCriteria] =useState<SearchParams>({
    species: '',
    breed: '',
    age: '',
    shelterLocation: '',
    houseTrained: true,
    notHouseTrained: true,
    vaccinated: true,
    notVaccinated: true,
    spayed: true,
    neutering: true
  });


  
  function handleSearch(e:SearchParams){
    console.log("searching")
    console.log(e)
    const setter:SearchParams={
      species: e.species,
      breed: e.breed,
      age: e.age,
      shelterLocation: e.shelterLocation,
      houseTrained: e.houseTrained,
      notHouseTrained: e.notHouseTrained,
      vaccinated: e.vaccinated,
      notVaccinated: e.notVaccinated,
      spayed: e.spayed,
      neutering: e.neutering
    }
    setSearchCriteria(setter)
    console.log(searchCriteria);
    setDisplay(filter);

  }

  const home=<SearchBar handleSubmit={handleSearch} petDataList={petDataList}></SearchBar>
  const filter=<Filtercomponent searchCriteria={searchCriteria} petDataList={petDataList}></Filtercomponent>

  const [display,setDisplay]=useState(home);


  return (
    <div className="container mx-auto p-4">
      <Headercomponent handleHome={()=>{
        setDisplay(home);
      }} 
      handleApplication={()=>{
        setDisplay(filter);
      }}></Headercomponent>
      {display}      
    </div>
  );
};

export default HomePage;
