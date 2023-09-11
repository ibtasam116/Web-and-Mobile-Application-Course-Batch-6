"use client"
import { useState } from "react";

export default function page() {

  const [data, setData] = useState([])
  const [userName, setUserName] = useState()

  const handleChange = (e) => {
    setUserName(e.target.value)
    console.log(userName);
  }

  const loadDataAPI = async () => {

    const link = await fetch(`https://api.github.com/users/${userName}`, {
      method: 'Get'
    })

    if (!link.ok) {
      alert("User not found");
      // setUserName('')
      return
    }

    const userData = await link.json();
    console.log(userData);
    setData([...data, userData])
    // setUserName("");

  }


  return (
    <>

      <input name="" id=""
        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-700"
        type="text"
        placeholder="Enter GitHub UserName"
        value={userName}
        onChange={handleChange}
      />

      <button onClick={loadDataAPI}
        className="bg-[#183468] hover:bg-[#3e5e99] text-white font-bold py-2 px-12 rounded">
        Load Data</button>

      <section>
        <div className="container w-[100%] mx-auto px-2">
          <div className="col-12">
            {data.map((item, i) => {
              return (
                <>

                  < div className="col-span-4">
                    <div>
                      <img src={item.avatar_url} className="rounded-full" alt="" width={300} height={300} />
                    </div>
                    <div className="my-5">
                      <h1 className="text-2xl font-bold">{item.name}</h1>
                      <h1 className="text-gray-400">{item.company}</h1>
                    </div>
                    <div>
                      <p className="w-80">{item.bio}</p>
                    </div>
                    <div>
                      <button className="">Edit Profile</button>
                    </div>
                    <div>
                      <span>{item.followers}</span>
                      <span>{item.following}</span>
                    </div>
                  </div>

                </>
              )
            })
            }
            <div className="col-span-8">
              {/* {userName} */}
            </div>
          </div>
        </div>
      </section >

    </>
  )
}
