import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MyFooter() {
  return (
    <>

      
      <Container fluid className="text-white text-center" style={{backgroundColor: "#0a4275"}}>

        <Container className='p-4 pb-0'>
          <section className=''>
            <p className='d-flex justify-content-center align-items-center'>
              <span className='me-3'>Apply for seat</span>
              <Button type='button' outline="true" color="light" rounded="true">
                Apply!
              </Button>
            </p>
          </section>
        </Container>

          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © {new Date().getFullYear()} Copyright:
          <Link className='text-white' to='/' style={{marginLeft: "10px"}}>
          নাবিল ছাত্রাবাস
          </Link>
        </div>
      </Container>
    </>
  )
}

export default MyFooter