import React,{useState} from 'react'
import { Card, Modal, Row, Col } from 'react-bootstrap'
import SERVER_URL from '../services/serverUrl';

function ProjectCard({project}) {
  console.log(`${SERVER_URL}/uploads/${project?.projectImage}`);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className='shadow mb-5 btn' style={{ width: '28rem' }} onClick={handleShow}>
      <Card.Img height={'200px'} variant="top" src={`${SERVER_URL}/uploads/${project?.projectImage}`} />
      <Card.Body>
        <Card.Title>{project?.title}</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='align-items-center'>
              <Col sm={12} md={6} >
                <img height={'200px'} className='img-fluid' src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt=" Project Image" />
              </Col>
              <Col sm={12} md={6} >
                <h2 className="fw-bolder text-warning">{project?.title}</h2>
                <p>Project Overview : <span className='fw-bolder'> {project?.overview}</span> </p>
                <p>Languauge Used : <span className="fw-bolder text-danger">{project?.languages}</span> </p>
              </Col>
          </Row>
          <div className='mt-3'>
            <a href={project?.github} target='_blank' style={{cursor:'pointer',color:'black'}} > <i style={{height:'34px'}} className="fa-brands fa-github fa-2x"></i> </a>
            <a href={project?.website} target='_blank' style={{cursor:'pointer',color:'black'}} className='ms-5' > <i style={{height:'34px'}} className="fa-solid fa-link fa-2x"></i> </a>
          </div>
        </Modal.Body>
    </Modal>

    </>
  )
}

export default ProjectCard