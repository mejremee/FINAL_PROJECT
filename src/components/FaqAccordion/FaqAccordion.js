import React from "react";
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';


function FaqAccordion () {
    return (
        <div className='faq-section'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'> “Ne bëjmë kontrolla, por jo mjaftueshëm” </h2>
                <p className='text-center mb-5'>
                    Pyetjet e shpeshta</p>
                <Accordion defaultActiveKey=" flush">
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                          Si kryhet mamografia?
                      </Accordion.Header>
                      <Accordion.Body>
                          Ekzaminimi kryhet me pacienten në pozicionin drejt. Gjiri vendoset mbi një tavolinë radiografike dhe më pas shtypet butë. Për të përftuar një imazh sa më cilësor duhet të kryhet mirë shtypja, por jo aq sa të shkaktojë dhimbje. Për depistim nevojiten dy pamje për secilin gji: njëri nga lart dhe tjetri i pjerrët në anë. Ekzaminimi zgjat vetëm pak minuta, ku shtypja e gjirit zgjat pak sekonda për secilin film. Imazhet me rreze X përftohen në formën e një filmi radiografik, apo paraqiten në monitor ku edhe interpretohen nga mjeku Radiolog.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            A është e nevojshme parapërgatitja e pacientes?
                        </Accordion.Header>
                        <Accordion.Body>
                            Ky ekzaminim duhet të kryhet në javën e dytë të ciklit menstrual, ose një javë para ardhjes së menstruacioneve. Në këto faza të ciklit, gjendrat e gjirit janë të relaksuara: nga njëra anë gjiri bëhet më pak i ndjeshëm ndaj presionit, dhe nga ana tjetër jep mundësinë që të përftohet një imazh cilësisht më i mirë. Duhen përjashtuar pacientet shtatzëna nga ky ekzaminim. Ditën e ekzaminimit duhet evituar përdorimi i deodoranteve, solucioneve apo pudrave të trupit, sepse për shkak të përmbajtjes së tyre mund të evidentohen në formën e grimcave të vogla dhe të ndikojnë në rezultat, pra në diagnozë.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>
                           Cilat Arsyet më të shpeshta që kërkojnë kryerjen e këtij ekzaminimi?
                        </Accordion.Header>
                        <Accordion.Body>
                            Zbulimi i ndonjë nodusi të dyshimtë ose të fortë gjatë vetëkontrollit që ka bërë pacientja, apo që ka zbuluar mjeku gjatë palpimit (prekjes) të gjirit.
                            Eko e dyshimtë e gjirit, pa një konkluzion të qartë dhe përfundimtar
                            Dhimbje të pashpjegueshme ose ndryshime të lëkurës (gropëzime, tërheqje të lëkurës, cikatrizime të gjirit)
                            Rrjedhje të sekrecioneve nga thithi i gjirit
                            Zmadhim i nyjeve limfatike nën sqetull
                            Rrezik i lartë për zhvillim të kancerit të gjirit (psh. nëse ka familjarë të prekur nga kanceri, nëse ka kryer ndërhyrje kirurgjikale për heqjen e një tumori beninj në gji)
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                            A paraqet rreziqe apo efekte të padëshiruara ky ekzaminim?
                        </Accordion.Header>
                        <Accordion.Body>
                            Ky ekzaminim është pa rreziqe. Shpesh shtypja e gjirit cilësohet si e parehatshme, deri e dhimbshme. Me anë të aparateve moderne të mamografisë, është tepër e shkurtër kohëzgjatja e rrezatimit dhe kufizohet vetëm në indin e gjirit. Në raste të rralla, në mamografi mund të përftohen rezultate false pozitive, që shpeshherë çojnë në kryerjen e panevojshme të biopsies, duke shkaktuar një traumë psikologjike tek pacientja.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

    );
}
export default FaqAccordion;