import './App.css'

function App() {
  return (
    <div className="enrollment-container">
      <header>
        <img src="/tip-logo.png" alt="TIP Logo" className="logo" />
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
              <input type="text" name="fname" required />
            </div>
            <div className="input-group">
              <label>Middle Name</label>
              <input type="text" name="mname" />
            </div>
            <div className="input-group">
              <label>Last Name*</label>
              <input type="text" name="lname" required />
            </div>
            <div className="input-group">
              <label>Suffix</label>
              <input type="text" name="suffix" />
            </div>
          </div>

          <div className="grid-row three-cols">
            <div className="input-group">
              <label>Date of Birth*</label>
              <input type="date" name="dob" onKeyDown={(e) => e.preventDefault()} required />
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
        </fieldset>

        {/* SECTION 2: CONTACT DETAILS */}
        <fieldset>
          <legend>2. Contact Details Section</legend>
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>Email Address*</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label>Mobile Number*</label>
              <input type="tel" name="mobile" required />
            </div>
          </div>
          <div className="input-group">
            <label>Complete Home Address*</label>
            <input type="text" name="address" placeholder="Street, Barangay, City, Province, Zip Code" required />
          </div>
        </fieldset>

        {/* SECTION 3: ENROLLMENT CHOICES */}
        <fieldset>
          <legend>3. Enrollment Choices</legend>
          <div className="grid-row">
            <div className="radio-group">
              <label>Campus:</label>
              <input type="radio" name="campus" value="Manila" required /> Manila
              <input type="radio" name="campus" value="QC" /> Quezon City
            </div>
          </div>
          <div className="grid-row two-cols">
            <div className="input-group">
              <label>College Department</label>
              <select name="department" required>
                <option value="CEA">College of Engineering and Architecture</option>
                <option value="CCS">College of Computer Studies</option>
              </select>
            </div>
            <div className="input-group">
              <label>Degree Program</label>
              <select name="program" required>
                <option value="BSCPE">BS Computer Engineering</option>
                <option value="BSCS">BS Computer Science</option>
                <option value="BSIT">BS Information Technology</option>
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