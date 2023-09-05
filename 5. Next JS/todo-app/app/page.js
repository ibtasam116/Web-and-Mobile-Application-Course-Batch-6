"use client"
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

  return (
    <>

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
