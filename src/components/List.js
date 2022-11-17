import React from "react";

const List = ({ data }) => {
  console.log("data", data);

  return (
    <div className="grid grid-cols-4 gap-4 text-center text-red-500">
      {data.map((item) => {
        let name = item.show.name;
        // const imageObject = item.show["image"] || "";
        const image = item?.show?.image?.medium || item?.show?.image?.originnal || "";


        const url = item.show.url;
        return (
            <>
            {image!=='' &&   <div className="border border-red-600 border-3 font-semibold h bg-slate-400 flex flex-col justify-center">
            
            
        
            <div>{name}</div>
                <a target="_blank" href={url} className="flex flex-row justify-center" rel="noreferrer">
                <img src={image} alt="picture not available"></img>
                </a>
            
            
                {item.show.summary}
          </div>}
            </>
          

        );
      })}
    </div>
  );
};

export default List;
