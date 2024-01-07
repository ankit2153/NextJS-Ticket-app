"use client";

import { useRouter } from "next/navigation";

import React, { useState } from "react";

function TicketForm() {
  
  const router = useRouter();

  const prev = () => {
    router.back();
  };

  const TicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "non started",
    category: "Hardware Problem",
  };


  const [formData, setformData] = useState(TicketData);

  const handleChange = (e) => {
    
    const value = e.target.value;

    const name = e.target.name;

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {

    e.preventDefault();


    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    if (!res.ok) {
      throw new Error("Failed to create Ticket");
    }

    router.refresh();

    router.push(process.env.NEXT_PUBLIC_DOMAIN);

    router.refresh()

    


  };

  return (
    <div className="flex justify-center pt-10 items-center">
      <div
        id="form"
        className=" rounded  text-black  border-2  flex  max-w-fit justify-center items-center   p-4 mt-4  flex-col  border-black"
      >
        <b>Title</b>
        <input
          name="title"
          type="text"
          required
          onChange={handleChange}
          value={formData.title}
        />
        <b>Description</b>
        <input
          type="text"
          name="description"
          required
          onChange={handleChange}
          value={formData.description}
        />
        <b>Progress(%)</b>
        <input
          name="progress"
          type="number"
          required
          onChange={handleChange}
          value={formData.progress}
        />
        <b>Priority</b>
        <input
          type="number"
          max={5}
          min={1}
          name="priority"
          required
          onChange={handleChange}
          value={formData.priority}
        />
        <b>Category</b>
        <select
          className="p-2 rounded"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project"> Project</option>
        </select>

        <button className="btn w-fit p-1 font-bold mt-2" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>

      <button onClick={prev} >PREV</button>
    </div>
  );
}

export default TicketForm;
