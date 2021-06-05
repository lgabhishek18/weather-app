import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
// import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SET_CITY } from "../weather/SliceWeather";

function SelectCity() {
  const [show, setShow] = useState(false);
  const [cityName, setCityName] = useState("");

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(SET_CITY(cityName));
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "300px" }}>
        <Button variant={"light"} onClick={handleShow}>
          Select City Name
        </Button>
        <p className='text-white-50'>Developed by : ABHISHEK GUPTA</p>
      </div>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Header closeButton>
          <Modal.Title>Enter City Name</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <input type='text' className='form-control' placeholder='City Name'
            onChange={(e) => { setCityName(e.target.value); }}/>
        </Modal.Body> 
        
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default SelectCity;
