"use client"

import { useState } from "react";

// const initialState = {
//   name: "",
//   email: "",
//   phoneNumber: "",
//   dateOfBirth: "",
//   gender: "",
//   address: "",
//   programIntrested: "",
// }

const initialState = {
  name: "",
  fatherName: "",
  religion: "",
  profession: "",
  email: "",
  phone: "",
  phoneWhatsapp: "",
  dob: "",
  id: "",
  qualification: "",
  address: "",
  gender: "",
}
export default function page() {

  const [state, setState] = useState(initialState);

  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi", e);
    setData((prevData) => [...prevData, state]);
    setState(state)
  }

  return (
    <>
      <section className="bg-gray-200 py-9 px-3 md:px-0">
        <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg">
          <div className="text-center sm:my-7">
            <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">Admission Form</h1>
            <h3 className="text-gray-400 font-bold text-center mt-3 sm:mt-5 text-xs sm:text-[15px]">The field with * mark is required</h3>
            <h1 className="text-center sm:text-xl text-[#3c6e71] mt-2 sm:mt-5 text-md font-medium mb-5 sm:mb-0">Personal Information</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Name *" required />
              </div>

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Father Name *" required />
              </div>

              <div>
                <div class="relative">

                  <select onChange={handleChange}
                    name="religion"
                    id="religion"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline">
                    <option>Selet Religion</option>
                    <option>Islam</option>
                    <option>Other</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>


              <div>
                <input onChange={handleChange}
                  type="text"
                  name="profession"
                  id="profession"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Profession" />
              </div>

              <div>
                <input onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Email *" required />
              </div>

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="phone"
                  id="phone"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Phone Number *" required />
              </div>

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="phoneWhatsapp"
                  id="phoneWhatsapp"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Whatsapp" />
              </div>

              <div>
                <input onChange={handleChange}
                  type="date"
                  name="dob"
                  id="dob"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                />
                <label className="text-xs text-[#3c6e71] font-bold" htmlFor="">Date of Birth</label>
              </div>

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="id"
                  id="id"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="CNIC or B-Form Number *" required />
                <label className="text-xs text-[#3c6e71] font-bold" htmlFor="">CNIC or B-Form Number (only numbers without hyphens), we will verify it.</label>
              </div>

              <div>
                <div class="relative">

                  <select onChange={handleChange}
                    name="qualification"
                    id="qualification"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-[#3c6e71] focus:shadow-outline">
                    <option>Selet Highest Qualification</option>
                    <option>None</option>
                    <option>Primary</option>
                    <option>Middle</option>
                    <option>Matriculation</option>
                    <option>O-Level</option>
                    <option>Intermediate</option>
                    <option>A-Level</option>
                    <option>Undergraduate</option>
                    <option>Graduate</option>
                    <option>Post-Graduate</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              <div>
                <input onChange={handleChange}
                  type="text"
                  name="address"
                  id="address"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline"
                  placeholder="Address" />
              </div>

              <div>
                <div class="relative">

                  <select onChange={handleChange}
                    name="gender"
                    id="gender"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-[#3c6e71] focus:shadow-outline">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>female</option>
                  </select>

                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center gap-3 text-[#3c6e71] font-bold">
                <label htmlFor="">Gender:</label>
                <input className="" onChange={handleChange} type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input className="" type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div> */}

              <div className="sm:col-span-2 text-center">
                <button type="submit" className="bg-[#3c6e71] hover:bg-[#3c6e71e0] transition-all w-full sm:w-[50%] py-2 rounded-xl text-white font-bold my-5">Apply Now</button>
              </div>

            </div>

          </form>
        </div>

        <div className="container p-5 mx-auto bg-white rounded-lg shadow-lg mt-5">
          <div className="text-center">
            <h1 className="text-center text-xl sm:text-3xl text-[#3c6e71] font-bold border-b-2 border-orange-200 inline">Output</h1>
          </div>


          {data.map((item, i) => {
            return (
              <>

                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                  <h1 className="text-center text-2xl mb-2 text-[#3c6e71e8] font-bold">User {i + 1}</h1>
                  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>

                        <th scope="col" class="px-6 py-3">
                          Name
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Father Name
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Religion
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Profession
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Email
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Phone Number
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Whatsapp
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Whatsapp
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Whatsapp
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr class="bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th class="px-6 py-4">
                          {item.name}
                        </th>

                        <td class="px-6 py-4">
                          {item.fatherName}
                        </td>

                        <td class="px-6 py-4">
                          {item.religion}
                        </td>

                        <td class="px-6 py-4">
                          {item.profession}
                        </td>

                        <td class="px-6 py-4">
                          {item.email}
                        </td>

                        <td class="px-6 py-4">
                          {item.phone}
                        </td>

                        <td class="px-6 py-4">
                          {item.phoneWhatsapp}
                        </td>
                      </tr>
                    </tbody>

                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>

                        <th scope="col" class="px-6 py-3">
                          Date Of Birth
                        </th>

                        <th scope="col" class="px-6 py-3">
                          CNIC
                        </th>

                        <th scope="col" class="px-6 py-3">
                          Qualification
                        </th>
                        <th scope="col" class="px-6 py-3" colSpan="2">
                          Address
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Gender
                        </th>

                        <th scope="col" class="px-6 py-3">
                          <span class="">Action</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">
                          {item.dob}
                        </td>
                        <td class="px-6 py-4">
                          {item.id}
                        </td>
                        <td class="px-6 py-4">
                          {item.qualification}
                        </td>
                        <td class="px-6 py-4" colSpan="2">
                          {item.address}
                        </td>
                        <td class="px-6 py-4">
                          {item.gender}
                        </td>

                        <td scope="col" class="px-6 py-3">
                          <button onClick={() => deleteHandler(item.html_url)} className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </>
            )
          })}

        </div>







        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  )
}
