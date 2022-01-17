import React, { useRef } from 'react'
import './SearchForm.scss';


import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'


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
    <Form className="search" onSubmit={handleSubmit} >
    <InputGroup className="hello">
    <FormControl
      placeholder="Postal Code"
      aria-label="Location"
      aria-describedby="basic-addon2"
      ref={postalCodeRef}/>
    <div className='hi'> 
    <FormControl
      placeholder="Lost, Found"
      aria-label="Status"
      aria-describedby="basic-addon2"
      ref={statusRef}/>
    <Button variant="outline-secondary" id="button-addon2" type='submit'>
      Search
    </Button>
    </div>
  </InputGroup>
  
  </Form>
  </div>
  )
}

