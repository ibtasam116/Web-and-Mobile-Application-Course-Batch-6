"use client"

import { useState } from "react";

import axios from "axios"

export default function Home() {

  const userName = ["Ali", "Naeem", "Umair"]

  const student = [{
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
  }]

  const deleteHandler = () => {

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
    // let response = await axios.get('https://api.github.com/users/naveed-rana/followers')
    let response = await axios.get('https://api.github.com/users/naveed-rana')
    setData(response.data)
    console.log("response", response.data)

  }


  // const newarray = [1, 2, 3, 4, 5]
  return (
    <>
      <h1>Github Name:- {data.name} <br /> Followers:- {data.followers}</h1>
      <div className="text-center">
        <button onClick={loadDataFromServer} className="my-3 border-2 border-slate-400 rounded-2xl py-3 px-5 bg-slate-700 text-white hover:shadow-md hover:bg-slate-400 hover:border-slate-700">Load</button>
      </div>

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
                  <td><button onClick={deleteHandler} >Delete</button></td>
                </tr>
              </>
            )
          })
        }
      </table>



    </>
  )
}
