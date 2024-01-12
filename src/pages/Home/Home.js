import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';
import ChooseSection from "../../components/section/ChooseSection";
import Women from '../../asets/images/tetori1.jpg';
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from 'react-bootstrap';
import  DR1 from '../../asets/images/dr1.JPG';
import DR2 from '../../asets/images/dr2.jpg.jpg';
import Dr3 from '../../asets/images/dr3.jpg';


const blogs = [
    {
        id:1,
        img:[DR1],
        title:'Ass.Dr.Sci. Emine Devolli – Disha, Spec.Radio-onkologe & ultrasoniste',
        description:'   Dr Sc Emine Devolli Disha, ju ofron shërbime cilësore të diagnostikimit bashkëkohor me ultrazë.'


    },
    {
        id:2,
        img:[DR2],
        title:'Dr.Daniela Bega',
        description:' Një mjek është një HERO! Ky është një profesion, që ndryshe nga të tjerët kërkon humanizëm, sakrificë personale, përkushtim…Por gjithashtu edhe shpërblimi që merr mbrapsht është shumë i madh! Kështu është edhe për dr. Daniela Begën: “Është një motivim, zgjohem në mëngjes dhe e di që do bëj diçka të mirë, do ndihmoj dikë. Një mjek i mirë është ai që e do pacientin.” '

    },
    {
        id:3,
        img:[Dr3],
        title:'Dr. Sc. Vildane Goga Çmega',
        description:' Fillimi i tetorit nënkupton fillimin e muajit të ndërgjegjësimit të kancerit të gjirit. Muaji i vetëdijësimit të kancerit të gjirit, i shënuar në shumë vende të botës çdo tetor, ndihmon në rritjen e vëmendjes dhe mbështetjes për vetëdijen, zbulimin dhe trajtimin e hershëm, si dhe kujdesin për këtë sëmundje. Po ashtu edhe ne Kosovë krahasuar me vitet e kaluara shihet vetëdije dhe ndërgjegjësim me i madh për këtë sëmundje, pikërisht falë këtij muaji që ndër vite më rrallë shënohet me aktivitete të ndryshme për të ndihmuar gruan ne ngritjen e vëmendjes atëherë kur gruaja nuk posedon asnjë nga simptomat e semundjes në gji.  '

    },
];


function Home  () {
    return (
       <div className='home-page'>
           <header className='h-100 min-vh-100 d-flex align-items-center
           text-light'>
               <div className='container d-flex flex-column
               align-items-center'>
                <h2>Tetori Roze</h2>
               <h1 className='text-center fw-semibold'>Muaji i
                   ndërgjegjësimit për kancerin e gjirit!</h1>
               <p >“E jotja është të më shpallësh luftë, e imja të fitoj”</p>
                   <div className='d-flex flex-column flex-sm-row
                   align-items-center'>
                       <Link to='/stories'>
                           <button type='button' className='btn btn-danger
                           btn-lg mx-0 mx-sm-2
                           my-2 my-sm-0'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">
                               <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>
                           </svg>Nuk je vetem
                           </button>
                       </Link>
                       <Link to='/contact'>
                           <button type='button' className='btn btn-outline-light
                           btn-lg mx-0 mx-sm-2
                           my-2 my-sm-0'>Regjistrohu tani
                           </button>
                       </Link>
                   </div>
               </div>
           </header>
           <div className='py-5'>
               <ChooseSection/>
           </div>

           <div className='py-5 bg-light'>
              <div className='container'>
                  <div className='row d-flex align-items-center
                  justify-content-around'>
                    <div className='col-lg-5'>
                      <h2 className='text-capitalize'>Të gjithë bashkë edhe në këtë sfidë të jetës! </h2>
                        <p>Ti nuk je vetem!</p>
                        <Link to='/stories'>
                            <button type='button' className='btn btn-danger
                            btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>
                                Trego historine tende</button>
                        </Link>
                    </div>
                      <div className='col-lg-5 mt-5 mt-lg-0'>
                          <img src={Women}  className='img-fluid' alt=''/>
                      </div>
                  </div>
              </div>
           </div>
           <div className='py-5'>
               <FaqAccordion/>
           </div>
           <div className='blog-section text-light py-5'>
               <div className='container d-flex flex-column
               align-items-center'>
                   <h2 className='text-center text-capitalize mb-5'>
                       Diagnostikimi i hershëm, shpëton jetë!  </h2>
                   <div className='row g-4'>
                       {blogs.map((blog) => (
                           <div key={blog.id} className='col-md-6 col-lg-4'>
                             <Link to="/blog" className='text-decoration-none'>
                                 <Card className='h-100 shadow
                                 scale-hover-effect'>
                                     <Card.Img variant='top'  src={blog.img}/>
                                     <Card.Body className='p-md-5'>
                                         <Card.Title>{blog.title}</Card.Title>
                                         <Card.Text>{blog.description}</Card.Text>
                                     </Card.Body>
                                 </Card>
                             </Link>
                           </div>
                       ))}
                   </div>
                   <Link to='/blog'>
                       <button type='button' className='btn btn-danger btn-lg
                       mt-5'>Caktoni terminin tuaj</button>
                   </Link>
               </div>
           </div>
       </div>
    );
}

export default Home;