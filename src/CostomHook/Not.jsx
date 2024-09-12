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
    <div className="flex items-center justify-center pt-20 flex-col">
      <div className="border w-[500px] h-[80vh] ">
        <h1 className="text-2xl">Note Creat</h1>
        <div>
          <div className="flex ">
            <h1>Title</h1>
            <input
              value={input.title}
              onChange={handleChange}
              name="title"
              className="border w-[300px] h-10"
              type="text"
            />
          </div>
          <div className="flex ">
            <h1>Description</h1>
            <textarea
              value={input.description}
              onChange={handleChange}
              className="border"
              name="description"
              rows={3}
              cols={30}
            ></textarea>
          </div>
          <div className="flex ">
            <h1>Color</h1>
            <input
              value={input.color}
              onChange={handleChange}
              name="color"
              className="border w-[300px] h-10"
              type="text"
            />
          </div>
        </div>

        
      </div>
      <button onClick={handleAdd} className="bg-blue-600 rounded-md p-2">Submit</button>
    </div>
  );
};

export default Not;
