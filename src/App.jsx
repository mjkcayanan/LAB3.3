import './App.css'
import { useState } from 'react';

function App() {
  // Create a state to store the selected program type
  const [selectedProgramType, setSelectedProgramType] = useState("");

  const handleProgramChange = (e) => {
    setSelectedProgramType(e.target.value);
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
              <input
                type="text"
                name="fname"
                inputMode="text"
                maxLength={50}
                required
              />
            </div>
            <div className="input-group">
              <label>Middle Name</label>
              <input
                type="text"
                name="mname"
                inputMode="text"
                maxLength={50}
              />
            </div>
            <div className="input-group">
              <label>Last Name*</label>
              <input
                type="text"
                name="lname"
                inputMode="text"
                maxLength={50}
                required
              />
            </div>
            <div className="input-group">
              <label>Suffix</label>
              <input
                type="text"
                name="suffix"
                inputMode="text"
                maxLength={10}
              />
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
                />
                Other
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
                inputMode="numeric"
                pattern="\d*"
                maxLength={15}
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\D/g, ''); }}
                required
              />
            </div>
            <div className="input-group">
              <label>Landline</label>
              <input
                type="text"
                name="landline_number"
                placeholder="Number"
                inputMode="numeric"
                pattern="\\d*"
                maxLength={15}
                onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/\\D/g, ''); }}
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

          {/* Grade School */}
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>Grade School Name</label>
              <input type="text" name="gs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated</label>
              <input type="text" name="gs_year" />
            </div>
          </div>
          <div className="input-group">
            <label>Grade School Address</label>
            <input type="text" name="gs_address" />
          </div>

          {/* Junior High */}
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>Junior High School Name</label>
              <input type="text" name="jhs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated</label>
              <input type="text" name="jhs_year" />
            </div>
          </div>
          <div className="input-group">
            <label>Junior High School Address</label>
            <input type="text" name="jhs_address" />
          </div>

          {/* Senior High */}
          <div className="grid-row three-cols">
            <div className="input-group">
              <label>Senior High School Name</label>
              <input type="text" name="shs_name" />
            </div>
            <div className="input-group">
              <label>Year Graduated</label>
              <input type="text" name="shs_year" />
            </div>
            <div className="input-group">
              <label>Grade Average</label>
              <input type="text" name="shs_grade_avg" />
            </div>
          </div>
          <div className="input-group">
            <label>Senior High School Address</label>
            <input type="text" name="shs_address" />
          </div>

        </fieldset>

        {/* SECTION 4: ENROLLMENT CHOICES */}
        <fieldset>
          <legend>4. Enrollment Choices</legend>
          
          {/* Academic Level */}
            <p>Academic Level*</p>
            <div className="academic-level-container">
              <label className="level-item">
                <input type="radio" name="level" value="freshman" /> Freshman
              </label>
              
              <label className="level-item">
                <input type="radio" name="level" value="sophomore" /> Sophomore
              </label>
              
              <label className="level-item">
                <input type="radio" name="level" value="junior" /> Junior
              </label>
              
              <label className="level-item">
                <input type="radio" name="level" value="senior" /> Senior
              </label>
            </div>

          {/* Semester */}
            <p>Semester*</p>
            <div className="semester-row">
              <label className="radio-item">
                <input type="radio" name="semester" value="1st" /> First Semester
              </label>
              
              <label className="radio-item">
                <input type="radio" name="semester" value="2nd" /> Second Semester
              </label>
              
              <label className="radio-item">
                <input type="radio" name="semester" value="summer" /> Summer
              </label>
            </div>

          {/* Campus */}
              <p>Campus*</p>
              <div className="form-inline-group">
                <label className="radio-option">
                  <input type="radio" name="campus" value="manila" /> Manila
                </label>
                
                <label className="radio-option">
                  <input type="radio" name="campus" value="quezon-city" /> Quezon City
                </label>
              </div>

          {/* Program Type */}
            <p>Program Type*</p>
            <div className="form-inline-group">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="program" 
                  value="undergraduate" 
                  onChange={handleProgramChange} 
                /> Undergraduate
              </label>
              
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="program" 
                  value="graduate" 
                  onChange={handleProgramChange} 
                /> Graduate
              </label>
            </div>

          {/* College Department & Degree Program */}
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>College Department*</label>
              <select name="department" required>
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
              <select name="program" required>
                <option value="">Select Program</option>
                <optgroup label="College of Engineering and Architecture">
                  <option value="BSARCH">BS Architecture</option>
                  <option value="BSCHEM">BS Chemical Engineering</option>
                  <option value="BSCIV">BS Civil Engineering</option>
                  <option value="BSCPE">BS Computer Engineering</option>
                  <option value="BSELEC">BS Electrical Engineering</option>
                  <option value="BSELE">BS Electronics Engineering</option>
                  <option value="BSIND">BS Industrial Engineering</option>
                  <option value="BSMECH">BS Mechanical Engineering</option>
                </optgroup>
                <optgroup label="College of Computer Studies">
                  <option value="BSCS">BS Computer Science</option>
                  <option value="BSDS">BS Data Science and Analytics</option>
                  <option value="BSEMC">BS Entertainment and Multimedia Computing</option>
                  <option value="BSIT">BS Information Technology</option>
                </optgroup>
                <optgroup label="College of Business Education">
                  <option value="BSACC">BS Accountancy</option>
                  <option value="BSAIS">BS Accounting Information System</option>
                  <option value="BSBA">BS Business Administration</option>
                  <option value="FM">Financial Management</option>
                  <option value="HRM">Human Resource Management</option>
                  <option value="LSC">Logistics and Supply Chain Management</option>
                  <option value="MM">Marketing Management</option>
                </optgroup>
                <optgroup label="College of Arts">
                  <option value="BAENG">Bachelor of Arts in English Language</option>
                  <option value="BAPOL">Bachelor of Arts in Political Science</option>
                </optgroup>
                <optgroup label="Graduate - Doctorate">
                  <option value="DIT">Doctor in Information Technology</option>
                  <option value="DECCE">Doctor of Engineering with Specialization in Computer Engineering</option>
                  <option value="DPHCS">Doctor of Philosophy in Computer Science</option>
                </optgroup>
                <optgroup label="Graduate - Master's">
                  <option value="MIS">Master in Information Systems</option>
                  <option value="MIT">Master in Information Technology</option>
                  <option value="MLSC">Master in Logistics and Supply Chain Management</option>
                  <option value="MESCE">Master of Engineering with Specialization in Civil Engineering</option>
                  <option value="MESCE2">Master of Engineering with Specialization in Computer Engineering</option>
                  <option value="MESEE">Master of Engineering with Specialization in Electrical Engineering</option>
                  <option value="MESELE">Master of Engineering with Specialization in Electronics Engineering</option>
                  <option value="MESIE">Master of Engineering with Specialization in Industrial Engineering</option>
                  <option value="MESME">Master of Engineering with Specialization in Mechanical Engineering</option>
                  <option value="MSCS">Master of Science in Computer Science</option>
                </optgroup>
              </select>
            </div>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit Registration</button>
      </form>
    </div>
  )
}

export default App