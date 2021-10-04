import React from "react";
import { Col } from "react-bootstrap";

const Students = (props) => {
  const { img, name } = props.student || {};
  return (
    <Col xs={12} md={3}>
      <div className=" text-center m-4 p-1 border student-cart">
        <img src={img} alt="" />
        <h5> {name}</h5>
      </div>
    </Col>
  );
};

export default Students;
