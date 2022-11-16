import React from 'react'

const Person = ({data}) => {
    console.log("data", data[0])
    
  return (
    <div>
          {data.map((item)=>{
            const imageObject = item.person["image"] || ''
            const image = imageObject["medium"]|| ""
            console.log(image)
            return(<div>
                <p>{item.person.name}</p>
                <img src={image}></img>
                
               </div>)
          }
                
            )
        }
    </div>
  )
}

export default Person