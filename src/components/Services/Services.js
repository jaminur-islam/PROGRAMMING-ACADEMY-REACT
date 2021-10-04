import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/CourseData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>    
      <h2 className='text-center text-uppercase mt-5 text-primary'> Our All Services </h2>
          <hr className='w-50 mx-auto text-primary bold'/>
    <Row>
      {
       services.map(service => <Service key={service.id} service={service}> </Service>) 
      }
    </Row>
    </Container>
  );
};

export default Services;
