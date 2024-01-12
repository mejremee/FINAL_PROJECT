import React from "react";
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import City1 from '../../asets/images/qyteti1.jpg';
import City2 from '../../asets/images/qyteti2.jpg';
import City3 from '../../asets/images/qyteti3.jpg';



function Contact () {
    return (
        <div className='contact-page'>
            <header className='height-75'>
               <div className='container h-100 d-flex flex-column
               align-items-center justify-content-center text-light'>
                   <h1 className='text-center fw-semibold'>Regjistrohu tani</h1>
                   <p className='text-center w-75 mb-5'>Bashkohu me ne!</p>
               </div>
            </header>
            <div className='container my-5 d-flex justify-content-center'>
             <Form  id='contact-form'>
                 <Row className='mb-3'>
                   <Col sm={12} md={6} className='mb-3 mb-md-0'>
                     <Form.Label>Emri</Form.Label>
                     <Form.Control placeholder='Emri'/>
                   </Col>
                     <Col sm={12} md={6} >
                         <Form.Label>Mbiemri</Form.Label>
                         <Form.Control placeholder='Mbiemri'/>
                     </Col>
                 </Row>
                 <Form.Group className='mb-3'>
                     <Form.Label>Email</Form.Label>
                     <Form.Control  type='email' placeholder='Email' />
                     <Form.Text className='text-muted' >
                         Ne nuk do ta ndajme emailin tuaj me askend tjeter.</Form.Text>
                 </Form.Group>

                 <Form.Group className='mb-3'>
                     <Form.Label>Adresa</Form.Label>
                     <Form.Control  placeholder='Adresa juaj'/>
                 </Form.Group>

                 <Row className='mb-3'>
                     <Col sm={12} md={6} className='mb-3 mb-md-0'>
                       <Form.Label>Lokacioni</Form.Label>
                         <Form.Select defaultValue='Prishtine'>
                             <option>Prishtine</option>
                             <option>Mitrovice</option>
                             <option>Peje</option>
                             <option>Prizren</option>
                             <option>Ferizaj</option>
                             <option>Gjilan</option>
                             <option>Gjakove</option>
                         </Form.Select>
                     </Col>
                     <Col sm={12} md={6}>
                         <Form.Label>Kodi Postar </Form.Label>
                         <Form.Control  placeholder='Kodi Postar'/>
                     </Col>
                 </Row>
                 <Form.Group className='mb-3'>
                   <Form.Label>Mesazhi yt</Form.Label>
                     <Form.Control  as='textarea' rows={3}/>
                 </Form.Group>
                 <Button variant='danger btn-lg' type='submit'>
                     Regjistrohu
                 </Button>
             </Form>
            </div>
            < div className='bg-dark text-light p-5'>
              <div className='container'>
                  <h2 className='text-center mb-5'>Lokacioni yne</h2>
                  <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column
                    align-items-center'>
                        <img src={City1}  className='img-fluid d-flex align-items-center
                        ' alt=''/>
                    </div>
                      <div className='col-lg-4 d-flex flex-column
                    align-items-center'>
                          <img src={City2}  className='img-fluid d-flex align-items-center
                        ' alt=''/>
                          <h3 className='text-center mt-3'>Prishtine</h3>
                      </div>
                      <div className='col-lg-4 d-flex flex-column
                    align-items-center'>
                          <img src={City3}  className='img-fluid d-flex align-items-center
                        ' alt=''/>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    );
}

export default Contact;