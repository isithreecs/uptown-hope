const modalContent = () => {
    return {
      healthCare: {
        title: "Healthcare",
        content: (
          <div>
            <div
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: "rgba(40, 39, 161, 0.93)",
                margin: "12px auto",
                marginBottom: "14px",
              }}
            ></div>
            <ul>
              <li>Behavioral Health Specialist</li>
              <li>CNA</li>
              <li>CMA</li>
              <li>GNA</li>
              <li>Direct Support Professional/CMT</li>
              <li>House Manager</li>
              <li>Intake Specialist</li>
              <li>Job Coach</li>
              <li>Job Developer</li>
              <li>Medical Assistant</li>
              <li>Medical Records Clerk</li>
              <li>Mental Health Counselor</li>
              <li>Occupational Therapist</li>
              <li>Personal Care Assistant</li>
              <li>Program Manager</li>
              <li>Quality Assurance</li>
              <li>Social Worker</li>
              <li>Therapeutic Support Staff</li>
            </ul>
          </div>
        ),
        backgroundImage: require("../coverImages/application.jpg"),
      },
      nursing: {
        title: "Nursing",
        content: "Nursing Positions",
        backgroundImage: require("../coverImages/corporate1.jpg"),
      },
      administration: {
        title: "Administration",
        content: "Administration Positions",
        backgroundImage: require("../coverImages/group_photo.jpg"),
      },
      finance: {
        title: "Finance",
        content: "Finance Positions",
        backgroundImage: require("../coverImages/Servicespage_image.jpg"),
      },
    };
  };
  
  export default modalContent;
  