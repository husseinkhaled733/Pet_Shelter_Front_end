import React from "react";
import PetCard from "../Pet/petCard";
import SearchBar from "../Search/Searchcomponent";
import {
  dummyPetData,
  dummyPetData1,
  dummyPetData2,
  dummyPetData3,
} from "./dummyPetData";

const HomePage = () => {
  const petDataList = [
    dummyPetData,
    dummyPetData1,
    dummyPetData2,
    dummyPetData3,
  ];
  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Suggestions
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

export default HomePage;
