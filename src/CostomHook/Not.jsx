import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Datas } from "../App";

const Not = () => {
  const { data, setData } = useContext(Datas);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    color: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (
      input.title.trim("") &&
      input.description.trim("") &&
      input.color.trim("")
    ) {
      setData([...data, input]);
      setInput("");
      navigate("/");
    } else {
      alert("fill all of this");
    }
  };

  return (
    <div className="flex items-center justify-center pt-20 flex-col bg-blue-300 h-[100vh]">
      <div className=" w-[500px] h-[60vh] bg-green-400 rounded-md">
        <h1 className="text-2xl text-center"><u>Note Creat</u></h1>
        <div className="mt-10 ">
          <div className=" flex gap-5 mt-5 ml-2">
            <h1 className="text-lg">Title: </h1>
            <input
              value={input.title}
              onChange={handleChange}
              name="title"
              className="border w-[300px] h-10 rounded-md p-5"
              type="text"
            />
          </div>
          <div className="flex gap-5 mt-5 ml-2">
            <h1 className="text-lg">Description: </h1>
            <textarea
              value={input.description}
              onChange={handleChange}
              className="border rounded-md pl-5 pt-2"
              name="description"
              rows={5}
              cols={45}
            ></textarea>
          </div>
          <div className="flex gap-5 mt-5 ml-2">
            <h1 className="text-lg">Color: </h1>
            <input
              value={input.color}
              onChange={handleChange}
              name="color"
              className="border w-[300px] h-10 rounded-md p-5"
              type="text"
            />
          </div>
        </div>

        
      </div>
      <button onClick={handleAdd} className="bg-blue-600 rounded-md p-2 w-40">Submit</button>
    </div>
  );
};

export default Not;
