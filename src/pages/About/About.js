import React from "react";
import './About.css';
import {Link} from 'react-router-dom';
import Photo from '../../asets/images/third.jpg';
import ChooseSection from "../../components/section/ChooseSection";
import Person1 from '../../asets/images/person1.jpg';
import Person2 from '../../asets/images/person2.jpg';
import Person3 from '../../asets/images/person3.jpg';
import Person4 from '../../asets/images/person4.jpg';
import Person5 from '../../asets/images/person5.jpg';
import Person6 from '../../asets/images/person6.jpg.jpg';
import Person7 from '../../asets/images/person7.jpg';
import Person8 from '../../asets/images/person8.jpg';
import Person9 from '../../asets/images/person9.jpg';


const persons = [
    {
        id:1,
        img:[Person1]
    },
    {
        id:2,
        img:[Person2]
    },
    {
        id:3,
        img:[Person3]
    },
    {
        id:4,
        img:[Person4]
    },
    {
        id:5,
        img:[Person5]
    },
    {
        id:6,
        img:[Person6]
    },
    {
        id:7,
        img:[Person7]
    },
    {
        id:8,
        img:[Person8]
    },
    {
        id:9,
        img:[Person9]
    },
];

function About () {
    return (
        <div className='about-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column
                align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fa4852" className="bi bi-balloon-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
                    </svg>
                        Tetori Roze
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#fa4852" className="bi bi-balloon-heart" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
                        </svg>  </h1>
                    <p className='text-center w-75 mb-5'></p>
                </div>
            </header>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column
                    justify-content-center mb-4 mb-lg-0'>
                        <h2 className='mb-4 mb-lg-5'>“Zbulimi i hershëm-shpëton jetë”</h2>
                        <p className='mb-4 mb-lg-5'>“Me hapjen e kësaj fushate, i bëjmë thirrje vajzave dhe grave që të kujdesen për veten duke u kontrolluar edhe kur nuk kanë shqetësim.
                            Me vendosmërinë tonë për të siguruar barnat, kemi rritur ndjeshëm buxhetin për barna. Kosova sot ka dy pajisjet e teknologjisë së fundit për radioterapi”, tha Albin Kurti. </p>

                        <p className='mb-4 mb-lg-5'>“Lufta më e madhe për kancerin është zbulimi i hershëm i kancerit. Zbulimi i hershëm është një mundësi më e madhe për t’u shëruar disa prej llojeve të kancerit, sepse ato mund edhe të parandalohen,” ka thënë onkologu Hyseni.

                            Tutje, ai ka thënë se nëse merret si shembull kanceri i mushkërive, mund të parandalohet sepse ai zakonisht paraqitet për shkak të pirjes së duhanit, andaj nëse fillohet mënyra më e shëndetshme e jetesës është masë preventive.

                            Zbulimi i hershëm është aktiviteti shëndetësor dhe joshëndetësor, por njerëzit duhet së pari të rrisin kulturën shëndetësore që të lajmërohen me kohë te mjeku.

                            Sipas onkologut, Kosova ka një infrastrukturë të përshtatshme sepse femrat mund ta bëjnë mamografinë në çdo vend. </p>

                        <Link to='/contact'>
                            <button type='button' className='btn btn-danger btn-lg
                            mx-0 mx-sm-2 my-2 my-sm-0'>Bashkohu me ne</button>
                        </Link>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                       <img src={Photo}  className='img-fluid object-fit-cover w-75' alt=''/>
                    </div>
                </div>
            </div>
            <div className='bg-dark
             text-light py-5'>
                <ChooseSection/>
            </div>
            <div className='bg-body-tertiary py-5'>
                <div className='container'>
                    <h2 className='text-center mb-5 '> "Ishte hera e parë që kuptova se jeta nuk ndalet për shkak të një diagnoze me kancer."</h2>
                        <div className='row g-4'>
                            {persons.map((person) => (
                                <div key={person.id} className='col-md-4'>
                                 <img src={person.img} className='img-fluid object-fit-cover'  alt=''/>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default About;