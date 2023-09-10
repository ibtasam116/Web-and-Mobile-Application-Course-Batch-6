"use client"

import { useState } from "react";

import axios from "axios"
import Image from "next/image";

export default function Home() {

  const userName = ["Ali", "Naeem", "Umair"]

  const [student, setStudents] = useState([{
    studentName: "ALi",
    rollNo: 12,
    section: "A",
  },
  {
    studentName: "Hamza",
    rollNo: 3,
    section: "E",
  },
  {
    studentName: "Ibtasam",
    rollNo: 6,
    section: "D",
  },
  {
    studentName: "Ibtasam",
    rollNo: 6,
    section: "D",
  },
  {
    studentName: "Ibtasam",
    rollNo: 6,
    section: "D",
  }])

  const deleteHandler = (rollNo) => {
    console.log("studentRollNo", rollNo)
    let restStudents = student.filter((student) => {
      if (student.rollNo !== rollNo) {
        return student
      }
    })
    console.log("restStudents", restStudents);
    setStudents(restStudents);
  }


  const todos = [{
    task: "Work",
    time: "9 PM",
  },
  {
    task: "Work",
    time: "9 PM",
  },
  {
    task: "Work",
    time: "9 PM",
  },]

  const [data, setData] = useState([])

  const loadDataFromServer = async () => {
    // let response = await fetch("https://api.github.com/users/naveed-rana", { method: "GET" });
    // response = await response.json()
    // console.log("Response", response)
    // let response = await axios.get('https://api.github.com/users/naveed-rana')
    let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
    setData(response.data)
    console.log("response", response.data)

  }


  // const newarray = [1, 2, 3, 4, 5]
  return (
    <>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            GitHub Followers
            {/* <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
          </caption>
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                SR #
              </th>
              <th scope="col" class="px-6 py-3">
                Profile
              </th>
              <th scope="col" class="px-6 py-3">
                Follower Name
              </th>
              <th scope="col" class="px-6 py-3">
                Follower ID
              </th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, i) => {
                return (
                  <>
                    <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-xl text-gray-900 whitespace-nowrap dark:text-white">
                        {i + 1}
                      </th>
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <Image className="rounded-full" src="data:image/png;base64,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"
                          width={50} height={50} />
                        {/* {item.avatar_url} */}
                      </th>
                      <td class="px-6 py-4">
                        {item.login}
                      </td>
                      <td class="px-6 py-4">
                        {item.id}
                      </td>
                      <td class="px-6 py-4 text-right">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody >
        </table>
      </div>


      {/* <h1>Github Name:- {data.name} <br /> Followers:- {data.followers}</h1>
      <div className="text-center">
        <button onClick={loadDataFromServer} className="my-3 border-2 border-slate-400 rounded-2xl py-3 px-5 bg-slate-700 text-white hover:shadow-md hover:bg-slate-400 hover:border-slate-700">Load</button>
      </div> */}

      {/* {newarray.map((item, i) => {
        return (
          <>
          {item}
          <h1>{i}</h1>
          </>
        )
      })} */}

      <hr />

      <button>{2 !== 2 ? "true" : "False"}</button>

      <table>
        <tr>
          <th>No.</th>
          <th>Task</th>
          <th>Time</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {
          todos.map((todo, i) => {
            return (
              <>
                <tr>
                  <td>{i + 1}</td>
                  <td>{todo.task}</td>
                  <td>{todo.time}</td>
                  <td><button>Delete</button></td>
                  <td><button>Update</button></td>
                </tr>
              </>
            )
          })
        }
      </table >

      <h1 className='text-center text-xl sm:text-2xl lg:text-5xl font-bold my-3'>Todo App</h1>

      {
        userName.map((item) => {
          return (
            <>{userName}</>
          )
        })
      }

      <hr />


      <table>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Roll No.</th>
          <th>Section</th>
          <th>Delete</th>
        </tr>
        {
          student.map((student, i) => {
            return (
              <>
                <tr>
                  <td>{i}</td>
                  <td>{student.studentName}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.section}</td>
                  <td><button onClick={() => deleteHandler(student.rollNo)} >Delete</button></td>
                </tr>
              </>
            )
          })
        }
      </table>



    </>
  )
}
