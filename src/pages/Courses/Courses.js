import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import Tema1 from '../../asets/images/tema1.jpg';
import Tema2 from '../../asets/images/tema2.jpg';
import Tema3 from '../../asets/images/tema3.jpg';
import Tema4 from '../../asets/images/tema4.jpg';
import Tema5 from '../../asets/images/tema5.jpg';
import Tema6 from '../../asets/images/tema6.jpg';
import Tema7 from '../../asets/images/tema7.jpg';
import Tema8 from '../../asets/images/tema8.jpg';
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import Contact from "../Contact/Contact";

const courses = [
    {
        id: 1,
        img: [Tema1],
        title: 'Drita',
        description:'“Para 20 vitesh, me mësimin e diagnozës nga mjekët, jeta ime mori një tjetër kthesë. Vazhdoj me betejën time si një kalorëse, jam duke luftuar ' +
            'dhëmbë për dhëmbë me këtë sëmundje dhe shpresoj se do t’ia dal” shprehet ajo me buzëqeshjen që nuk i largohet për asnjë moment nga fytyra. '
    },
    {
        id:2,
        img: [Tema2],
        title: 'Leoreta',
        description: '"Jeta ime ishte shumë normale katër vite më parë, derisa një ditë ndjeva një dhimbje krahu kur po ' +
            'stërvitesha në palestër, bëra menjëherë' +
            ' një vizitë shëndetësore ku zbulova se vuaja nga kanceri i gjirit.\n' +
            'Vendosa që të bëhesha e fortë duke dalë hapur me të vërtetën\n' +
            'forca ime është familja dhe njerëzit e dashur"'
    },
    {
        id: 3,
        img: [Tema3],
        title: 'Barry',
        description: 'Nëse do të mund të kthehesha pas në kohë dhe të vendosja vetë për fatin tim, do ta lejoja veten të prekesha nga' +
            ' kanceri për shkak të mënyrës se si ai ndryshoi' +
            ' perceptimin tim për jetën. Dielli duket më i ndritshëm, bari duket më i gjelbër dhe bota duket e madhe '
    },
    {
        id: 4,
        img: [Tema4],
        title: 'Beni',
        description: 'Unë shkova në tokën e kancerit të gjirit. Dhe për shkak se unë nuk jam grua, nuk mendoj se mund të kisha kuptuar ' +
            'me të vërtetë atë që grate përballen  deri në atë diagnozë, dhe pasojat e operacionit dhe trajtimit.\n' +
            'Unë mendoj se do të jem më i vlefshëm pasi kam pasur përvojën. Sepse pa marrë parasysh sa e dini - ose ' +
            'mendoni se e dini - ka gjithmonë më shumë për të mësuar në jetë'
    },
    {
        id: 5,
        img: [Tema5],
        title: 'Maggie',
        description: " Mendimet e mia të para ishin: A do të jetojë ky fëmijë? A do të jetoj? Kush do të lexojë histori para gjumit?\n" +
            "Unë u diagnostikova me kancer të gjirit në fazën 3 kur isha shtatzënë në muajin e shtatë.\n" +
            "Ishte hera e parë që kuptova se jeta nuk ndalet për shkak të një diagnoze me kancer."
    },
    {
        id: 6,
        img: [Tema6],
        title: 'Amara',
        description: 'Dhurata më e madhe që më bëri kanceri ishte mundësia për tu shndërruar në versionin më të fortë dhe më të mirë të vetes.' +
            ' Kanceri më mësoi se duhet t\'i japim dhimbjes hapësirën për të marrë frymë, në mënyrë që të shërohet.'
    },
    {
        id: 7,
        img: [Tema7],
        title: 'Dan',
        description: 'Unë as nuk e dija që burrat mund të prekeshin nga kanceri i gjirit\n' +
            'Nuk kisha histori të kancerit të gjirit në familjen time dhe asnjë faktor rreziku.”\n' +
            'Forcën time e kam marrë nga familja dhe besimi im.\n' +
            'Ne duam t\'u mësojmë fëmijëve tanë, ju ose mund të zgjoheni dhe të qani ose mund të ngriheni dhe të luftoni.'
    },
    {
        id: 8,
        img: [Tema8],
        title: 'Sonela',
        description:' Sapo kam filluar vitin e dhjetë të luftës sime me këtë sëmundje të rëndë. E në këto vite kam pasur momentet e mia të vështira.\n' +
            'Edhe unë kam qarë, edhe unë kam derdhur lot, unë e forta kam përjetuar momente dobësie, unë e hekurta i jam trembur vështirësive të jetës. Dhe ja ku jam mes jush,' +
            ' e armatosur me fjalën time, me buzëqeshjen në buzë dhe dashurinë në shpirt.'

    },
];

function Courses () {
    return (
        <div className='courses-page'>
            <header className='height-75'>
             <div className='container h-100 d-flex flex-column
             align-items-center justify-content-center text-light'>
             <h1 className='text-center fw-semibold'>"Luftën me kancerin e gjirit, të ndihmojmë ne me tejkalu"</h1>
                 <p className='text-center w-75 mb-5'>Ne jemi me ty!</p>
             </div>
            </header>

            <div className='container py-5'>
                <div className='row g-4'>
                    {courses.map((courses) => (
                        <div  key={courses.id} className='col-lg-6'>
                            <Card className='text-white shadow
                            scale-hover-effect'>
                                <Card.Img src={courses.img}/>
                                <Card.ImgOverlay  className='d-flex flex-column
                                align-items-center justify-content-center  p-md-5'>
                                    <Card.Title className='fs-1 text-danger'>
                                        {courses.title}</Card.Title>
                                    <Card.Text className='text-center'>{courses.description}</Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-dark text-light py-5'>
                <FaqAccordion/>
            </div>
            <div className='bg-dark text-light py-5'>
                <Contact/>
            </div>

        </div>
    );
}
export default Courses;