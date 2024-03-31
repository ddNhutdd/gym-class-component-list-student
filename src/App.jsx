import React from "react";
import StudentInfoComponent from "./component/StudentInfoComponent";

function App() {
  const listStudent = [
    {
      id: 1,
      name: "Nguyen Van A",
      age: 19,
      address: 'Không có'
    },
    {
      id: 2,
      name: "Nguyen Van A",
      age: 21,
      address: 'Không có'
    }
  ]
  return (
    <StudentInfoComponent students={listStudent} />
  )
}

export default App
