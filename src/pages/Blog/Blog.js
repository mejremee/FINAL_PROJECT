import React from "react";
import './Blog.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Person11 from '../../asets/images/person11.jpg';
import Person22 from '../../asets/images/person22.jpg';
import Person33 from '../../asets/images/person33.jpg';
import Person44 from '../../asets/images/person44.jpg';
import Person55 from '../../asets/images/person55.jpg';
import Person66 from '../../asets/images/person66.jpg';
import Person77 from '../../asets/images/person77.jpg';
import Person88 from '../../asets/images/person88.jpg';
import Person99 from '../../asets/images/person99.jpg';

const blogs = [
    {
        id:1,
        img:[Person11] ,
        title:'E panjohur',
        description:'"Kanceri nuk mund ta gjymtojë dashurinë, nuk mund të thyejë shpresën, nuk mund të pushtojë shpirtin." '
    },
    {
        id:2,
        img:[Person22] ,
        title:'Ruth Westheimer',
        description:'\n' +
            '“Rruga jonë nuk është bari i butë; është një shteg malor me shumë shkëmbinj. Por ajo shkon lart, përpara, drejt diellit.”'
    },
    {
        id:3,
        img:[Person33] ,
        title:'I panjohur',
        description:'\n' +
            '“Perëndia nuk premtoi ditë pa dhimbje, të qeshura pa pikëllim, apo diell pa shi, por Ai premtoi forcë për ditën, ngushëllim për lotët dhe dritë për rrugën.”'
    },
    {
        id:4,
        img:[Person44] ,
        title:' Mary Bollinger Appelhanz ',
        description:' “Kur më dhanë një kohë të shkurtër për të jetuar, një nga fëmijët e mi më tha: “Mami, ti je një luftëtare! Le ta bejme kete!"\'  '
    },
    {
        id:5,
        img:[Person55] ,
        title:' Sarah Betz Bucciero ',
        description:'“Kanceri është një maratonë – nuk mund të shikosh vijën e finishit. Ti e merr atë moment pas momenti, ndonjëherë frymë me frymë, herë të tjera hap pas hapi.”'
    },
    {
        id:6,
        img:[Person66] ,
        title:' Melissa Etheridge',
        description:'“Sapo e mposhta kancerin e gjirit, nuk kisha më frikë nga asgjë”.'
    },
    {
        id:7,
        img:[Person77] ,
        title:' Sheryl Crow ',
        description:'“I vetmi person që mund të të shpëtojë je ti. '
    },
    {
        id:8,
        img:[Person88] ,
        title:'Gilda Radner ',
        description:' “Qëllimi është të jetosh një jetë të plotë, produktive edhe me gjithë atë paqartësi. Pavarësisht se çfarë ndodh, nëse kanceri nuk ndizet më kurrë apo nëse vdes, e rëndësishme është që ditët që ke pasur do të kesh jetuar. "  '
    },
    {
        id:9,
        img:[Person99] ,
        title:'C.C. Scott ',
        description:'"Shpirti i njeriut është më i fortë se çdo gjë që mund t\'i ndodhë."  '
    },

];


function Blog () {
    return (
        <div className='blog-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column
                align-items-center justify-content-center text-light'>
                    <h3 className='text-center fw-semibold'>Sonela</h3>
                    <p className='text-center w-75 mb-5'>“Nuk është e rëndësishme që nuk ke flokët, e rëndësishme është të mos kesh dhimbje, e rëndësishme është të vazhdosh të jetosh!”</p>
                </div>
            </header>
            <div className='bg-body-tertiary py-5'>
                <div className='container'>
                    <div className='row g-4'>
                        {blogs.map((blog) => (
                            <div key={blog.id} className='col-md-6
                            col-lg-4'>
                                <Link to='/blog' className='text-decoration-none'>
                                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                      <Card.Img variant='top' src={blog.img}/>
                                        <Card.Body className='p-md-5 d-flex
                                        flex-column align-itmes-center'>
                                        <Card.Title className='fs-2
                                        mb-4'>{blog.title}</Card.Title>
                                            <Card.Text className='text-center'>
                                                {blog.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;