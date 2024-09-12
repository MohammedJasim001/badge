import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Datas } from '../App'

const Main = () => {
   const { data, setData } = useContext(Datas)

   const handleDelete = (i) => {
    setData(data.filter((_, ind) => i !== ind))
   }

   return (
    <div className="min-h-screen  p-6">
      <div className="mb-6">
        <Link to={'/create'}>
          <button className="bg-blue-500 text-white p-2 rounded-lg shadow-lg  ">
            Create
          </button>
        </Link>
      </div>

      <div className="flex gap-6 flex-wrap">
        {data.map((ele, ind) => (
          <div key={ind} className=" rounded-lg  w-[300px] h-[300px] flex flex-col justify-between" style={{backgroundColor:ele.color}}>
            <div className=" p-4 text-white">
              <h3 className="text-lg font-semibold">{ele.title}</h3>
              <p className="mt-2">{ele.description}</p>
              <p className="mt-2 font-semibold">{ele.color}</p>   
            </div>
            <button 
                onClick={() => handleDelete(ind)} 
                className="bg-red-500 text-white p-2 rounded-lg w-40 ml-16"
              >
                Delete
              </button>
             
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Main
