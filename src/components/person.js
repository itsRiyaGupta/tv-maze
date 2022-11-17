import React from "react";

const Person = ({ data }) => {
  console.log("data", data[0]);

  return (
    <div className="grid grid-cols-3 gap-4 text-center text-red-500">
      {data.map((item) => {
        const imageObject = item.person["image"] || "";
        // const image = imageObject["medium"] || "";
        const image = item?.person?.image?.medium || item?.person?.image?.originnal || "";
        const url = item.person.url;
        console.log(image);
        return (
          <>
            

            {image!=='' &&   <div className="border border-red-600 border-3 font-semibold bg-slate-400  " >
            <div>{item.person.name}</div>
            {/* <img src={image}></img>
             */}
             <a target="_blank" href={url} className="flex flex-row justify-center" rel="noreferrer">
              <img src={image}></img>
            </a>
            {item.person.sumaary}
          </div>}
                 
          </>
          
        );
      })}
    </div>
  );
};

export default Person;
