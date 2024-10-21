import React, { useEffect, useState } from 'react'
import './Contact.css'
import PageTitle from '../../Components/PageTitle/PageTitle'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { GrInstagram } from 'react-icons/gr';
export default function Contact() {
  const initialValues = {username: "" , gmail: "" , mobilePhone: "" , message: ""};
  const [formValues , setFormValues] = useState(initialValues);
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const handleChange = (e) => {
    // console.log(e.target);
    const {name , value} = e.target;
    setFormValues({...formValues , [name]: value});
    // console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    //console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      // console.log(formValues);
    }
  },[formErrors])
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username) {
      errors.username = "The User Name Is Required!";
    } else if((values.username.lenght < 3) || (values.username.lenght > 10)) {
      errors.username = "The Name Must Be At Least 3 Chars and At Most 10 Chars!";
    }

    if(!values.gmail) {
      errors.gmail = "The Gmail Is Required!";
    } else if(!regex.test(values.gmail)) {
      errors.gmail = "This Is Not Valid Email";
    }

    if(!values.mobilePhone) {
      errors.mobilePhone = "The Phone Is Required!";
    } else if((values.mobilePhone.lenght < 11) || (values.mobilePhone.lenght > 11)) {
      errors.mobilePhone = "The Phone Number Must Be 11 Digits!";
    }

    if(!values.message) {
      errors.message = "The Message Is Required!";
    } 

    return errors;

  }
  return (
    <>
     <Container className='mt-5 text-center'>
      <Row className='mt-5 text-center'>
        <Col>
        <PageTitle title={'Contact Page'}/>
        </Col>
      </Row>

      <Row className='mt-5 g-2'>
        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><FaPhoneAlt/></Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Phone Us</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='tel: +2001069166549' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>



        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><FaFacebookF/>        </Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Facebook</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='https://facebook.com' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>


        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><FaXTwitter/>        </Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Twitter</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='https://x.com' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>


        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><GrInstagram/></Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Instagram</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='https://instagram.com' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>


        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><SiGmail/>        </Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Gmail</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='https://mail.google.com/' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>

        <Col lg={4} md={6} sm={12}>
        <Card className='cardContact shadow px-5 py-3 w-100'>
      <Card.Body className='d-flex flex-column gap-2'>
        <Card.Title style={{backgroundColor: '#6d757d', borderRadius: '50%', width:'50px' , height: '50px'}} className='icon mx-auto fs-3 text-white d-flex justify-content-center align-items-center'><FaLinkedinIn/>        </Card.Title>
        <Card.Subtitle style={{color: '#6d757d'}} className="mb-2 text fs-5">Linkedin</Card.Subtitle>
        <Card.Text className='text' style={{fontSize: '13px' , color: '#777'}}>
        Would you like to discuss your business needs? our team will be delighted to assist you.
        </Card.Text>
        <a style={{backgroundColor: '#6d757d'}} href='https://linkedin.com' target='__blank' className='btn fs-5 text-white border-0 text-decoration-none px-5'>Contact</a>
      </Card.Body>
    </Card>          
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col md={12}>
        <div className='contact__form'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (alert(`Thank You For Contact Us`)) : (<pre className='d-none'>{JSON.stringify(formValues , undefined , 2)}</pre>)}
              <div className='contact__form__content border py-3 px-3 rounded shadow bg-light'>
                <form onSubmit={handleSubmit}>
                  <div className='form__group mb-4 text-start'>
                    <label style={{color: '#6d757d'}} htmlFor="username" className='mb-3 fs-5'>User Name</label>
                    <br />
                    <input type="text" name="username" id="username" className='form-control' placeholder='Enter Your Name' value={formValues.username} onChange={handleChange}/>
                    <p style={{color: 'red'}} className='err'>{formErrors.username}</p>
                  </div>

                  <div className='form__group mb-4 text-start'>
                    <label style={{color: '#6d757d'}} className='mb-3 fs-5' htmlFor="gmail">Gmail</label>
                    <br />
                    <input type="email" name="gmail" id="gmail" className='form-control' placeholder='Enter Your Gmail' value={formValues.gmail} onChange={handleChange}/>
                    <p style={{color: 'red'}} className='err'>{formErrors.gmail}</p>
                  </div>

                  <div className='form__group mb-4 text-start'>
                    <label style={{color: '#6d757d'}} className='mb-3 fs-5' htmlFor="mobilePhone">Phone</label>
                    <br />
                    <input type="number" name="mobilePhone" id="mobilePhone" className='form-control' placeholder='Enter Your Phone' value={formValues.mobilePhone} onChange={handleChange}/>
                    <p style={{color: 'red'}} className='err'>{formErrors.mobilePhone}</p>
                  </div>

                  <div className='form__group mb-4 text-start'>
                    <label style={{color: '#6d757d'}} className='mb-3 fs-5' htmlFor="message">Message</label>
                    <br />
                    <textarea name="message" id="message" className='form-control' placeholder='Message' value={formValues.message} onChange={handleChange}></textarea>
                    <p style={{color: 'red'}} className='err'>{formErrors.message}</p>
                  </div>

                  <div className='form__group mb-4 d-flex justify-content-center align-items-center rounded-5 w-100 mx-auto'>
                    <button style={{backgroundColor: '#6d757d'}} className='btn border-0 sub rounded-5 w-25 py-3 text-white'>Submit</button>
                  </div>
{/* 
                  <div className='form__group d-flex justify-content-center align-items-center rounded-5 w-100 mx-auto'>
                    <a onClick={()=>{Swal.fire("Let's We Go To Gmail")}} href='https://mail.google.com/mail/u/0/#inbox' target='__blank' className='btn btn-info border-0 text-decoration-none star text-white rounded-5 w-25'>Start</a>
                  </div> */}

                </form>
              </div>
            </div>
        </Col>
      </Row>
      </Container>
    </>
  )
}

/* <div className='container'>
        <div className='row mt-5'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='contactBox contactBox1 d-flex flex-column gap-2 align-items-center py-3 px-3 border shadow'>
              <div className='contactBox__frist__line'>
                <div className='contactBox__frist__line__icon fw-bold fs-3'>
                <MdQuestionAnswer/>
                </div>
              </div>
              <div className='contactBox__second__line'>
                <div className='contactBox__second__line__text'>
                  <h3>General Enquiries</h3>
                </div>
              </div>
              <div className='contactBox__third__line'>
                <div className='contactBox__third__line__text text-center'>
                  <p style={{color: "#777"}}>Would you like to discuss your business needs? our team will be delighted to assist you.</p>
                </div>
              </div>
              <div className='contactBox__fourth__line'>
                <div className='contactBox__fourth__line__link'>
                  <a href='tel: +2001069166549' target='__blank' className='btn btn-primary'>Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='contactBox contactBox1 d-flex flex-column gap-2 align-items-center py-3 px-3 border shadow'>
              <div className='contactBox__frist__line'>
                <div className='contactBox__frist__line__icon fw-bold fs-3'>
                <MdMessage />
                </div>
              </div>
              <div className='contactBox__second__line'>
                <div className='contactBox__second__line__text'>
                  <h3>Speak to support</h3>
                </div>
              </div>
              <div className='contactBox__third__line'>
                <div className='contactBox__third__line__text text-center'>
                  <p style={{color: "#777"}}>We are available for you every time and time by starting your support request and we connect.</p>
                </div>
              </div>
              <div className='contactBox__fourth__line'>
                <div className='contactBox__fourth__line__link'>
                  <a href='https://www.github.com/Anas-Ahmed-Zakaria' target='__blank' className='btn btn-primary'>Get Support</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='contactBox contactBox1 d-flex flex-column gap-2 align-items-center py-3 px-3 border shadow'>
              <div className='contactBox__frist__line'>
                <div className='contactBox__frist__line__icon fw-bold fs-3'>
                <FaCodePullRequest/>
                </div>
              </div>
              <div className='contactBox__second__line'>
                <div className='contactBox__second__line__text'>
                  <h3>Feature Request</h3>
                </div>
              </div>
              <div className='contactBox__third__line'>
                <div className='contactBox__third__line__text text-center'>
                  <p style={{color: "#777"}}>Share your ideas on new fanctionalities to make plesk an even better.</p>
                </div>
              </div>
              <div className='contactBox__fourth__line'>
                <div className='contactBox__fourth__line__link'>
                  <a href='https://mail.google.com/mail/u/0/#inbox' target='__blank' className='btn btn-primary'>Feature Request</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='contactBox contactBox1 d-flex flex-column gap-2 align-items-center py-3 px-3 border shadow'>
              <div className='contactBox__frist__line'>
                <div className='contactBox__frist__line__icon fw-bold fs-3'>
                <MdQuestionAnswer/>
                </div>
              </div>
              <div className='contactBox__second__line'>
                <div className='contactBox__second__line__text'>
                  <h3>Partner With Us</h3>
                </div>
              </div>
              <div className='contactBox__third__line'>
                <div className='contactBox__third__line__text text-center'>
                  <p style={{color: "#777"}}>Interested in becoming partener of plesk, we are excited to hear about your plans.</p>
                </div>
              </div>
              <div className='contactBox__fourth__line'>
                <div className='contactBox__fourth__line__link'>
                  <a href='https://www.linkedin.com' target='__blank' className='btn btn-primary'>Become a partner</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-5'>
          <div className='col-md-12'>
            <div className='contact__form'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (alert(`Thank You For Contact Us`)) : (<pre className='d-none'>{JSON.stringify(formValues , undefined , 2)}</pre>)}
              <div className='contact__form__content border py-3 px-3 rounded shadow bg-light'>
                <form onSubmit={handleSubmit}>
                  <div className='form__group mb-4'>
                    <label htmlFor="username">User Name</label>
                    <br />
                    <br />
                    <input type="text" name="username" id="username" className='form-control' placeholder='Enter Your Name' value={formValues.username} onChange={handleChange}/>
                    <p className='err'>{formErrors.username}</p>
                  </div>

                  <div className='form__group mb-4'>
                    <label htmlFor="gmail">Gmail</label>
                    <br />
                    <br />
                    <input type="email" name="gmail" id="gmail" className='form-control' placeholder='Enter Your Gmail' value={formValues.gmail} onChange={handleChange}/>
                    <p className='err'>{formErrors.gmail}</p>
                  </div>

                  <div className='form__group mb-4'>
                    <label htmlFor="mobilePhone">Phone</label>
                    <br />
                    <br />
                    <input type="number" name="mobilePhone" id="mobilePhone" className='form-control' placeholder='Enter Your Phone' value={formValues.mobilePhone} onChange={handleChange}/>
                    <p className='err'>{formErrors.mobilePhone}</p>
                  </div>

                  <div className='form__group mb-4'>
                    <label htmlFor="message">Message</label>
                    <br />
                    <br />
                    <textarea name="message" id="message" className='form-control' placeholder='Message' value={formValues.message} onChange={handleChange}></textarea>
                    <p className='err'>{formErrors.message}</p>
                  </div>

                  <div className='form__group mb-4 d-flex justify-content-center align-items-center rounded-5 w-100 mx-auto'>
                    <button className='btn btn-primary border-0 sub rounded-5 w-25'>Submit</button>
                  </div>

                  <div className='form__group d-flex justify-content-center align-items-center rounded-5 w-100 mx-auto'>
                    <a onClick={()=>{Swal.fire("Let's We Go To Gmail")}} href='https://mail.google.com/mail/u/0/#inbox' target='__blank' className='btn btn-info border-0 text-decoration-none star text-white rounded-5 w-25'>Start</a>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
    </div> */