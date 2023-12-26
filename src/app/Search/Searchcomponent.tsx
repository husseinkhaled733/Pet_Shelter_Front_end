// components/SearchBar.js

import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-col md:flex-row m-auto items-center w-fit justify-center space-y-4 md:space-y-0 mb-4 border-2 border-gray-400 px-6 pb-6 rounded-lg bg-base-100">
      {/* Species Field */}
      <div className="flex flex-col mb-4 md:mb-0 p-2">
        <label htmlFor="species" className="mb-1 text-gray-400">
          Species
        </label>
        <input
          type="text"
          id="species"
          name="species"
          placeholder="Enter species"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Breed Field */}
      <div className="flex flex-col mb-4 md:mb-0 p-2">
        <label htmlFor="breed" className="mb-1 text-gray-400">
          Breed
        </label>
        <input
          type="text"
          id="breed"
          name="breed"
          placeholder="Enter breed"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Age Field */}
      <div className="flex flex-col mb-4 md:mb-0 p-2">
        <label htmlFor="age" className="mb-1 text-gray-400">
          Age
        </label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Enter age"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Shelter Location Field */}
      <div className="flex flex-col mb-4 md:mb-0 p-2">
        <label htmlFor="shelterLocation" className="mb-1 text-gray-400">
          Shelter Location
        </label>
        <input
          type="text"
          id="shelterLocation"
          name="shelterLocation"
          placeholder="Enter shelter location"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Search Button */}
      <div className="flex flex-col mb-4 md:mb-0 pt-6 px-2">
      <button className="btn btn-primary ">
        Search
      </button>
      </div>
    </div>
  );
};

export default SearchBar;
