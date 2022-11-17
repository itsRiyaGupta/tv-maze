import React, { useState } from "react";
import axios from "axios";
import List from "./List";
import Person from "./person";

const Projectbody = () => {
  const [value, setValue] = useState("typing");
  const [searchInput, setSearchInput] = useState("");
  const [balance, setBalance] = useState([]);
  const [type, setType] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = async () => {
    await axios
      .get(`https://api.tvmaze.com/search/${type}?q=${searchInput}`)
      .then((response) => {
        setBalance(response.data);
      });
  };

  console.log(balance);

  const ifNotFoundData = () => {
    let display = "";
    if (!searchInput) {
      display = "Data not found";
    }
  };

  const handleActorChange = () => {
    setType("");
    setBalance([]);
    setValue("actor");
    setType("people");
  };
  const handleShowChange = () => {
    setType("");
    setBalance([]);
    setValue("show");
    setType("shows");
  };

  return (
    <div>
      <div className="bg-blue-200 h-20 font-extrabold text-4xl text-center py-4">
        TVmaze
      </div>

      <div className="bg-green-300  h-10 font-extrabold text-xl text-center py-1 flex justify-center">
        <div className="mr-4 cursor-pointer">
          <input type="radio"  name="radioButton" onClick={handleActorChange} />
          by actor
        </div>
        <div className="mr-4 cursor-pointer">
          <input type="radio" name="radioButton" onClick={handleShowChange} />
          by show
        </div>
      </div>

      <div className="bg-green-400 flex justify-center">
        <input
          type="text"
          className=" border-solid  border-2 border-black mx-3 text-center "
          value={searchInput}
          onChange={handleChange}
          placeholder={`Search by ${value}`}
        />
        <button
          className=" border-solid  border-2 border-black mx-3 text-center bg-white font-bold rounded-md text-red-900 dark:md:hover:bg-fuchsia-600 "
          onClick={onSubmit}
        >
          Search
        </button>
      </div>

      <div className="bg-green-100 min-h-screen">
        <p> {ifNotFoundData}</p>
        {/* <List balance={balance} /> */}
        {type === "shows" && balance.length > 0 && <List data={balance} />}

        {type === "people" && balance.length > 0 && <Person data={balance} />}
      </div>
    </div>
  );
};

export default Projectbody;
