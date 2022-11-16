import React from "react";

const List = ({ data }) => {
  console.log("data", data);

  return (
    <div>
      {data.map((item) => {
          let name = item.show.name;
          const imageObject = item.show["image"] || ''
          const image = imageObject["medium"]|| ""
        return (
          <div>
            <p>{name}</p>
            <img src={image}></img>
          </div>
        );
      })}
    </div>
  );
};

export default List;
