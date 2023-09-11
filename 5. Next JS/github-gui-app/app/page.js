"use client"
import { useState } from "react";

export default function page() {

  const [userName, setUserName] = useState()

  const handleChange = (e) => {
    setUserName(e.target.value)
    console.log(userName);
  }

  const loadDataAPI = () => {
  //  cont link = 
    console.log(userName);
  }


  return (
    <>
      <input type="text" name="" id=""
        value={userName}
        onChange={handleChange} />
      <button onClick={loadDataAPI}>Load Data</button>
      <section>
        <div className="container w-[100%] mx-auto px-5">
          <div className="col-12">
            <div className="col-span-4">
              <img src="" alt="" />
            </div>
            <div className="col-span-8">
              {userName}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
