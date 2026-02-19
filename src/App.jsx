import './App.css'
import { useState } from 'react';

// 1. Data Mapping for Dynamic Selects
const PROGRAM_DATA = {
  CEA: [
    { value: "BSARCH", label: "BS Architecture" },
    { value: "BSCHEM", label: "BS Chemical Engineering" },
    { value: "BSCIV", label: "BS Civil Engineering" },
    { value: "BSCPE", label: "BS Computer Engineering" },
    { value: "BSELEC", label: "BS Electrical Engineering" },
    { value: "BSELE", label: "BS Electronics Engineering" },
    { value: "BSIND", label: "BS Industrial Engineering" },
    { value: "BSMECH", label: "BS Mechanical Engineering" },
  ],
  CCS: [
    { value: "BSCS", label: "BS Computer Science" },
    { value: "BSDS", label: "BS Data Science and Analytics" },
    { value: "BSEMC", label: "BS Entertainment and Multimedia Computing" },
    { value: "BSIT", label: "BS Information Technology" },
  ],
  CBE: [
    { value: "BSACC", label: "BS Accountancy" },
    { value: "BSAIS", label: "BS Accounting Information System" },
    { value: "BSBA", label: "BS Business Administration" },
    { value: "FM", label: "Financial Management" },
    { value: "HRM", label: "Human Resource Management" },
    { value: "LSC", label: "Logistics and Supply Chain Management" },
    { value: "MM", label: "Marketing Management" },
  ],
  CA: [
    { value: "BAENG", label: "Bachelor of Arts in English Language" },
    { value: "BAPOL", label: "Bachelor of Arts in Political Science" },
  ],
  GRAD: [
    { value: "DIT", label: "Doctor in Information Technology" },
    { value: "DECCE", label: "Doctor of Engineering (Computer Engineering)" },
    { value: "DPHCS", label: "Doctor of Philosophy in Computer Science" },
    { value: "MIS", label: "Master in Information Systems" },
    { value: "MIT", label: "Master in Information Technology" },
    { value: "MLSC", label: "Master in Logistics and Supply Chain Management" },
    { value: "MSCS", label: "Master of Science in Computer Science" },
  ]
};

function App() {
  const [selectedProgramType, setSelectedProgramType] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  const handleProgramChange = (e) => {
    setSelectedProgramType(e.target.value);
  };

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);
  };

  return (
    <div className="enrollment-container">
      <header>
        <h2>ADEi University Digital Registrar</h2>
        <p>Laboratory Activity 3.3 - Student Enrollment Portal</p>
      </header>

      <form action="http://localhost:5000/register" method="POST">
        {/* SECTION 1: PERSONAL INFORMATION */}
        <fieldset>
          <legend>1. Personal Information Section</legend>
          <div className="grid-row four-cols">
            <div className="input-group">
              <label>First Name*</label>
              <input type="text" name="fname" required maxLength={50} />
            </div>
            <div className="input-group">
              <label>Middle Name</label>
              <input type="text" name="mname" maxLength={50} />
            </div>
            <div className="input-group">
              <label>Last Name*</label>
              <input type="text" name="lname" required maxLength={50} />
            </div>
            <div className="input-group">
              <label>Suffix</label>
              <input type="text" name="suffix" maxLength={10} />
            </div>
          </div>

          <div className="grid-row three-cols">
            <div className="input-group">
              <label>Date of Birth*</label>
              <input type="date" name="dob" required />
            </div>
            <div className="input-group">
              <label>Gender*</label>
              <select name="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non-binary">Non-binary</option>
              </select>
            </div>
            <div className="input-group">
              <label>Nationality*</label>
              <select name="nationality" required>
                <option value="filipino">Filipino</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Religion</label>
            <div className="checkbox-group">
              <label><input type="checkbox" name="religion" value="Catholic" /> Catholic</label>
              <label><input type="checkbox" name="religion" value="Christian" /> Christian</label>
              <label><input type="checkbox" name="religion" value="Muslim" /> Muslim</label>
              <label>
                <input
                  type="checkbox"
                  name="religion"
                  value="Other"
                  onChange={(e) => {
                    const other = document.querySelector('input[name="religion_other"]');
                    if (other) {
                      other.disabled = !e.target.checked;
                      if (!e.target.checked) other.value = '';
                      else other.focus();
                    }
                  }}
                /> Other
              </label>
            </div>
            <input type="text" name="religion_other" placeholder="If Other, specify" disabled />
          </div>
        </fieldset>

        {/* SECTION 2: CONTACT DETAILS */}
        <fieldset>
          <legend>2. Contact Details Section</legend>
          <div className="grid-row three-cols">
            <div className="input-group">
              <label>Email Address*</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label>Mobile Number*</label>
              <input
                type="tel"
                name="mobile"
                maxLength={11}
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
                required
              />
            </div>
            <div className="input-group">
              <label>Landline</label>
              <input
                type="tel"
                name="landline"
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Complete Home Address*</label>
            <input type="text" name="address" placeholder="Street, Barangay, City, Province, Zip Code" required />
          </div>
        </fieldset>

        {/* SECTION 3: ACADEMIC HISTORY */}
        <fieldset>
          <legend>3. Academic History Section</legend>
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>Grade School Name</label>
              <input type="text" name="gs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated (GS)*</label>
              <input type="text" name="gs_year" required maxLength={4} />
            </div>
          </div>

          <div className="grid-row two-cols">
            <div className="input-group">
              <label>Junior High School Name</label>
              <input type="text" name="jhs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated (JHS)*</label>
              <input type="text" name="jhs_year" required maxLength={4} />
            </div>
          </div>

          <div className="grid-row three-cols">
            <div className="input-group">
              <label>Senior High School Name</label>
              <input type="text" name="shs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated (SHS)*</label>
              <input type="text" name="shs_year" required maxLength={4} />
            </div>
            <div className="input-group">
              <label>SHS Grade Average*</label>
              <input type="number" name="shs_average" step="0.01" required />
            </div>
          </div>
        </fieldset>

        {/* SECTION 4: ENROLLMENT CHOICES */}
        <fieldset>
          <legend>4. Enrollment Choices</legend>
          
          <p>Academic Level*</p>
          <div className="form-inline-group">
            <label className="radio-option">
              <input type="radio" name="academic_level" value="undergraduate" onChange={handleProgramChange} required /> Undergraduate
            </label>
            <label className="radio-option">
              <input type="radio" name="academic_level" value="graduate" onChange={handleProgramChange} /> Graduate
            </label>
          </div>

          <p>Semester*</p>
          <div className="semester-row">
            <label className="radio-item"><input type="radio" name="semester" value="1st" required /> First Semester</label>
            <label className="radio-item"><input type="radio" name="semester" value="2nd" /> Second Semester</label>
            <label className="radio-item"><input type="radio" name="semester" value="summer" /> Summer</label>
          </div>

          <div className="grid-row two-cols">
            <div className="input-group">
              <label>College Department*</label>
              <select name="department" value={selectedDept} onChange={handleDeptChange} required>
                <option value="">Select Department</option>
                <optgroup label="Undergraduate">
                  <option value="CEA">College of Engineering and Architecture</option>
                  <option value="CCS">College of Computer Studies</option>
                  <option value="CBE">College of Business Education</option>
                  <option value="CA">College of Arts</option>
                </optgroup>
                <optgroup label="Graduate">
                  <option value="GRAD">Graduate Programs</option>
                </optgroup>
              </select>
            </div>

            <div className="input-group">
              <label>Degree Program*</label>
              <select name="degree_program" required disabled={!selectedDept}>
                <option value="">{selectedDept ? "Select Program" : "Select Department first"}</option>
                {selectedDept && PROGRAM_DATA[selectedDept].map((prog) => (
                  <option key={prog.value} value={prog.value}>
                    {prog.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  )
}

export default App;