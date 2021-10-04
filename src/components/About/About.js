import React from "react";
import { Col, Container, Row } from "react-bootstrap";



const About = () => {
  return (
   <section>
         <h2 className='text-center text-uppercase mt-5 text-primary'>    Know about the course </h2>
          <hr className='w-50 mx-auto text-primary bold'/>
     <Container>
       <Row>
       <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> This is a complete web development course : </h6>
               <p>Everything from zero to getting a job as a junior web developer is taught over and over again in this course. So, if you finish this course well, you will be able to start trying internship or job without any other course on web development.</p>
            </div>
         </Col>

         <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> Unlimited support : </h6>
               <p>Any of your questions will be answered within 24 hours during the course (excluding holidays). If there is any problem with Penchgi brand, come to Google Hangout 2/3 times a day and the problem will be solved by sharing your skin. And when the course is over (even after 3 months) you will be given loose support</p>
            </div>
         </Col>

         <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> Special Interview Preparation Group:</h6>
               <p>Any of your questions will be answered within 24 hours during the course (excluding holidays). If there is any problem with Penchgi brand, come to Google Hangout 2/3 times a day and the problem will be solved by sharing your skin. And when the course is over (even after 3 months) you will be given loose support</p>
            </div>
         </Col>
         <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> Opportunity to watch offline videos:</h6>
               <p>Those will work daily. Give 6 to 8 hours every day. Seriously will finish the course in a timely manner. SCIC (Super Charged Interviewee Club) created with them. This is 4 to 6 weeks of special training. There is no separate fee for that. Only one qualification: Serious hard work to finish the main course within the specified time.</p>
            </div>
         </Col>
         <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> Special Interview Preparation Group:</h6>
               <p>Those will work daily. Give 6 to 8 hours every day. Seriously will finish the course in a timely manner. SCIC (Super Charged Interviewee Club) created with them. This is 4 to 6 weeks of special training. There is no separate fee for that. Only one qualification: Serious hard work to finish the main course within the specified time.</p>
            </div>
         </Col>
         <Col md={4}>
            <div className='m-4 p-3 border' style={{height: '300px'}}>
               <h6 className='fw-bold'> Live Conceptual Sessions:</h6>
               <p>Those will work daily. Give 6 to 8 hours every day. Seriously will finish the course in a timely manner. SCIC (Super Charged Interviewee Club) created with them. This is 4 to 6 weeks of special training. There is no separate fee for that. Only one qualification: Serious hard work to finish the main course within the specified time.</p>
            </div>
         </Col>
        

       </Row>
     </Container>
   </section>
  );
};

export default About;
