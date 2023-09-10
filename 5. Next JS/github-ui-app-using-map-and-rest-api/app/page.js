"use client"


import axios from "axios"
import { useState } from "react";

export default function Home() {

  // const [data, setData] = useState([])
  // const [follower, setFollower] = useState([])

  // const loadServerData = async () => {

  //   // let response = await fetch("https://api.github.com/users/naveed-rana",{
  //   //   method: "GET"
  //   // });
  //   // response = await response.json()

  //   let response = await axios.get('https://api.github.com/users/naveed-rana');
  //   // let response1 = await axios.get('https://api.github.com/users/naveed-rana/followers');
  //   setData(response.data)
  //   console.log("User", response);
  //   // setFollower(response1.data)
  //   // console.log('response', response1);

  // }

  // const [data, setData] = useState([])
  const [userName, setUserName] = useState()

  const handleChange = (e) => {
    setUserName(e.target.value)
    console.log(userName);
  };

  const handleGet = async () => {
    
  }

  return (
    <>
      <h1>User Data</h1>
      <div className="text-center py-5">
        <input
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700"
          type="text"
          placeholder="Enter your user name"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="text-center">
        <button
          // onClick={handleGet}
          className="bg-[#183468] hover:bg-[#3e5e99] text-white font-bold py-2 px-12 rounded">
          Get Data
        </button>
      </div>

      {/* <button onChange={handleChange} className="border-2 px-4 py-2 rounded-3xl hover:bg-slate-700 hover:text-gray-200">Load</button> */}
      {/* 

      <div className="container">
        <div className="col-12">
          <div className='col-span-4 border'>
            <div>
              <Image src={img} className="rounded-full" width={200} height={200} />
            </div>
            <div>
              {data.map((item) => {
                return (
                  <h1>{data.name}</h1>
                }
              )
            }
            </div>

          </div>
          <div className='col-span-8 border'>
            {follower.map((item, i) => {
              return (
                <span className="">{item.login}<br /></span>
              )
            })}
          </div>
        </div>
      </div> */}
    </>
  )
}
