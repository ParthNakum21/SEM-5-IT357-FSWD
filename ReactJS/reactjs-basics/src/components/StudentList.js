import React from 'react';

function StudentList(){
    const students =[
        {id:1, name:"Parth", marks: 100},
        {id:2, name:"Elon", marks: 98},
        {id:3, name:"Mark", marks:96},
        {id:4, name:"Alex", marks:33},
        {id:5, name:"Jack", marks:25}
    ];

    const lowScoringStudents = students.filter((student) => student.marks<35);

    return(
        <div className='student-list'>
            <br/>
            <h1>Students</h1>
            <ul>
                {students.map((student)=>(
                    <li key={student.id}>{student.name} : {student.marks}</li>
                ))}
            </ul>
            <h1>Low-Scoring Students</h1>
            <ul>
                {lowScoringStudents.map((student)=>(
                    <li key={student.id}>{student.name} :  {student.marks}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;