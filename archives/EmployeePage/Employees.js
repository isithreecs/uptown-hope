import './Employees.css' 
import React, { useState } from "react"; 
import { Modal, Button, Carousel } from "react-bootstrap-v5";
import Fab from '@mui/material/Fab';


const Employees = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImgSrc] = useState([]);
    const [modalTitle, setModalTitle] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleImageClick = (src, title) => {
        setModalImgSrc(src);
        setShowModal(true);
        setModalTitle(title);
        setCurrentIndex(0);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const handleSelect = (selectedIndex) => {
        setCurrentIndex(selectedIndex); 
    }

    return(
        <div className="form-grid">
            <div className="title">Contractor Forms</div>
            <div className="grid-container">
                <div className="grid-item">
                    Direct Deposit Authorization Form 
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Direct%20Deposit%20Authorization%20Image.png" width="100%" height="100px" alt="Direct Deposit Authorization"
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Direct%20Deposit%20Authorization%20Image.png"],
                                "Direct Deposit Authorization Form"
                            )
                        }
                        className="image-border"
                        />
                        {/* <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Direct%20Deposit%20Authorization.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button> */}
                        <Fab sx={{
                            padding: 2,
                            fontSize: 12,
                            color: 'rgba(230, 115, 14, 1)',
                            '&:hover': {backgroundColor: 'rgba(230, 115, 14, 1)' }
                        }} variant="extended" className="btn" data-dismiss="modal"> 
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Direct%20Deposit%20Authorization.pdf" target="_blank" rel="noopener noreferrer"> 
                                Download
                            </a>
                        </Fab>
                    </div>
                </div>
                <div className="grid-item">
                          I-9 Form     
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9%20Image.png" width="100%" height="100px" alt="I-9 Forms"
                        onClick={() =>
                            handleImageClick(
                                [
                                "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9%20Image.png",
                                "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9%20Image%202.png", 
                                "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9%20Image%203.png",
                                "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9%20Image%204.png"
                                ],
                                "I-9 Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/i-9-paper-Update%20version%20Exp%205.31.27.pdf" target="_blank" rel="noopener noreferrer">
                            Download
                            </a>
                        </Button>    
                        </div>
                    </div>
                <div className="grid-item">
                    1279A CPS Background Clearance Form
                        <div className="image-container">
                            <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/1279A%20CPS%20Background%20Clearance%20Image%201.png" width="100%" height="100px" alt="1279A CPS Background Clearance Form" 
                            onClick={() => 
                                handleImageClick(
                                    ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/1279A%20CPS%20Background%20Clearance%20Image%201.png"],
                                    "1279A CPS Background Clearance Form"
                                )
                            }
                            />            
                            <Button type="button" className="btn" data-dismiss="modal">
                                <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/1279A%20CPS%20Background%20Clearance%20Form.pdf" target="_blank" rel="noopener noreferrer">
                                    Download
                                </a>
                            </Button>
                    </div>
                </div>
                
                <div className="grid-item">
                    Requested Training Documents Before Hire Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Requested%20Training%20Documents%20Before%20Hire%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Requested%20Training%20Documents%20Before%20Hire%20Image.png"],
                                "Requested Training Documents Before Hire Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Requested%20Training%20Documents%20Before%20Hire.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Training Payroll Deduction Authorization Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Payroll%20Deduction%20Authorization%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Payroll%20Deduction%20Authorization%20Image.png"],
                                "Training Payroll Deduction Authorization Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Payroll%20Deduction%20Authorization%208.28.23%20MANDT.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    New Contractor's Information Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/New%20Contractors%20Information%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/New%20Contractors%20Information%20Image.png"],
                                "New Contractor's Information Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/New%20Contractors%20Information.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Direct Support Professional Duties Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Uptown%20Hope%20Direct%20Support%20Professional%20Duties%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Uptown%20Hope%20Direct%20Support%20Professional%20Duties%20Image.png"],
                                "Direct Support Professional Duties Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Uptown%20Hope%20Direct%20Support%20Professional%20Duties.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Privacy Requirements and Policy for Noncriminal Justice Applicants Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Privacy%20Requirements%20and%20Policy%20Image%201.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                [
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Privacy%20Requirements%20and%20Policy%20Image%201.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Privacy%20Requirements%20and%20Policy%20Image%202.png"
                                ],
                                "Privacy Requirements and Policy For Noncriminal Justice Applicants Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Privacy%20Requirements%20and%20Policy.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Independent Contractor Agreement Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%201.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                [
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%201.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%202.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%203.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%204.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%205.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%206.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%207.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%208.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%209.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement%20Image%2010.png"
                                ],
                                "Independent Contractor Agreement Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Independent%20Contractor%20Agreement.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Training Requirements and Policy Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Requirements%20and%20Policy%20Image%201.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                [
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Requirements%20and%20Policy%20Image%201.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Requirements%20and%20Policy%20Image%202.png",
                                    "https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Requirements%20and%20Policy%20Image%203.png"
                                ],
                                "Training Requirements and Policy Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Training%20Requirements%20and%20Policy.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Employee Physical Examination and TB Test Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employee%20Physical%20Examination%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employee%20Physical%20Examination%20Image.png"],
                                "Employee Physical Examination and TB Test Form \n(Physical and TB test are separate! We need Both!"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employee%20Physical%20Examination%20-%20TB%20Test.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Employment Reference Check Form
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employment%20Reference%20Check%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employment%20Reference%20Check%20Image.png"],
                                "Employment Reference Check Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Employment%20Reference%20Check.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Ipad Usage Addendum
                    <div className="image-container">
                        <img src="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Ipad%20Usage%20Addendum%20Image.png" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                ["https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Ipad%20Usage%20Addendum%20Image.png"],
                                "Ipad Usage Addendum Form"
                            )
                        }
                        />
                        <Button type="button" className="btn" data-dismiss="modal">
                            <a href="https://github.com/Chr1sC0nn0r/UptownHopeContractorDocs/raw/main/Ipad%20Usage%20Addendum.pdf" target="_blank" rel="noopener noreferrer">
                                Download
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="grid-item">
                    Form
                    <div className="image-container">
                        <img src="" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                "",
                                "Form"
                            )
                        }
                        />
                        {/* <a href="" target="_blank" rel="noopener noreferrer">
                            Download
                        </a> */}
                    </div>
                </div>
                <div className="grid-item">
                    Form
                    <div className="image-container">
                        <img src="" width="100%" height="100px" alt="Form" 
                        onClick={() =>
                            handleImageClick(
                                "",
                                "Form"
                            )
                        }
                        />
                        {/* <a href="" target="_blank" rel="noopener noreferrer">
                            Download
                        </a> */}
                    </div>
                </div>
                <div className="grid-item">Form 16</div>
                <div className="grid-item">Form 17</div>
                <div className="grid-item">Form 18</div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                        {modalImages.map((src, index) => (
                            <Carousel.Item key={index}>
                                <img className="d-block w-100" src={src} alt={`${index + 1}`} style={{ width: "100%", height: "auto" }} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
}


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>


export default Employees;
