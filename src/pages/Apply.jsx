import React from 'react'
import { Container } from 'react-bootstrap'
import ApplyForm from '../components/layout/ApplyForm'

function Apply() {
  return (
    
    <Container className="d-flex flex-column justify-content-around gap-5">

      <div className="section-header">
        <h2>Application Form</h2>
      </div>

      <ApplyForm />
    </Container>


    
  )
}

export default Apply