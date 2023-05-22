import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="container bg-info">
      <div className="bg-primary container text-center">
        <div>
          <h1>Abhijeet Habe</h1>
          <p>abhijeet@gmail.com | +91-1234567890 | 123 LA Street</p>
        </div>
      </div>
      <div>Objective:</div>

      <div>
        <hr />
        <p>
          My objective as a full stack developer is to create high-quality web
          applications that meet the needs of the end-users and deliver a positive
          user experience.
        </p>
      </div>
      <div>Education:</div>

      <div>
        <hr />
        <table className="table table-success table-striped" border="true">
          <tr>
            <th>College Name</th>
            <th>University Name</th>
            <th>Branch</th>
            <th>Percenrage/CGPA</th>
            <th>Passing year</th>
          </tr>
          <tr>
            <td>Kochi CDAC</td>
            <td>CDAC</td>
            <td>Diploma in Advanced Computing</td>
            <td>-</td>
            <td>Pursuing</td>
          </tr>
          <tr>
            <td>Dr. dy patil college</td>
            <td>Pune University</td>
            <td>Mechanical Engineering</td>
            <td>7.56</td>
            <td>2021</td>
          </tr>
          <tr>
            <td>Fr Agnel, Vashi</td>
            <td>Mumbai University</td>
            <td>Diploma in Mechanical Engineering</td>
            <td>6.85</td>
            <td>2018</td>
          </tr>
        </table>
      </div>
      <div>Skills:</div>

      <div>
        <hr />
        <h5 className="fs-6">
          Technical Skills: HTML, CSS, JavaScript, Java, MySQL, NoSQL and OOPs
        </h5>
        <h5 className="fs-6">
          Soft Skills: Critical thinking, Problem Solving, Communication, Time
          Management
        </h5>
      </div>
      <div>Experience:</div>

      <div>
        <hr />
        <h4>Senior Systems Executive</h4>
        <p>Cognizant Technology Solutions</p>
        <ul>
          <li>
            Responsible for providing IT infrastructure support covering cloud and
            on-premise products like Windows, Azure, MS Office and other business
            applications to our global customers.
          </li>
          <li>
            Achieved over 75% first time resolution using my Critical thinking and
            Problem Solving skills.
          </li>
          <li>
            Achieved an average handling time of 12 with my time management skills
            which led to client satisfaction.
          </li>
        </ul>
      </div>
      <div>Projects:</div>

      <div>
        <hr />
        <h4>Django Blog Page</h4>
        <p>HTML | CSS | Bootstrap | Python | Django</p>
        <ul>
          <li>
            Created Blog Application with Django, which allows users to create,
            edit and delete posts.
          </li>
          <li>
            Implemented forms to valitade user input by creating a user
            registration page and the use of Crispy forms to match the modern
            style of application.
          </li>
          <li>
            Created an authentication system for application so that users can
            login and logout. Restricting certain pages so that user must be
            logged-in in order to access the page.
          </li>
        </ul>
      </div>
      <div>Extra-Curricular Activities:</div>

      <div>
        <hr />
        <ul>
          <li>Institute wise ranked 6th on GeeksForGeeks coding platform.</li>
          <li>
            Participated in District level chess compititions during elimentary
            school.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default App;
