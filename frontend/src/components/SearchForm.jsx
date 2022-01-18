import React, { useRef } from 'react'
import './SearchForm.scss';


import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function SearchForm() {
  const postalCodeRef = useRef();
  const statusRef = useRef();
  // const emailRef = useRef();
  // const pwRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`this is postal code------>`, postalCodeRef.current.value)
    console.log("===============================")
    console.log(`this is status ----->`, statusRef.current.value)
  } 

  
  
  return (
    <div>
      <Container className="search-page">
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group className="form-left">
            <Form.Control
              className="form-input"
              placeholder="Postal Code"
              aria-label="Location"
              aria-describedby="basic-addon2"
              ref={postalCodeRef}
            />
          </Form.Group>
          <Form.Group className="form-center">
            <Form.Control
              className="form-input"
              placeholder="Lost, Found"
              aria-label="Status"
              aria-describedby="basic-addon2"
              ref={statusRef}
            />
          </Form.Group>
          <Form.Group className="form-right">
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
            >
              Search
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

