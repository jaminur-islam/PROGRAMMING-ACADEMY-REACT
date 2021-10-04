import React from "react";
import { useState } from "react";
import { useEffect} from "react";
import { Container, Row } from "react-bootstrap";
import ShowCourse from "../ShowCourse/ShowCourse";
import Students from "../Students/Students";

const Home = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/CourseData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 4)));
  }, []);

  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("./myData.JSON")
      .then((res) => res.json())
      .then((data) => setStudents(data?.slice(1, 9)));
  }, []);
  
  return (
      <Container> 
        <section>
         
          <h2 className='text-center text-uppercase mt-5 text-primary'> Our Successful Students </h2>
          <hr className='w-50 mx-auto text-primary bold'/>
          <Row>
          {
            students.map(student=> <Students key={student.id} student={student}> </Students>)
          }
          </Row>
        </section>




      <section>         
      <h2 className='text-center text-uppercase mt-5 text-primary'>Our Most popular courses </h2>
      <hr className='w-50 mx-auto text-primary bold' />
      <Row>        
      {
        courses?.map(course => <ShowCourse key={course.id} course={course}> </ShowCourse>)
      }
      </Row>
      </section>
      </Container>
    
  );
};

export default Home;
