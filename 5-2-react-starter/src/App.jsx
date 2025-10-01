import './App.css'
import StudentCard from './components/StudentCard';
function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <div>
            <h1>Student Info</h1>
            <StudentCard name= "Shoroooq Abu Zaid" id="202257840" dept="ICS"/>
            <StudentCard name= "Yaqeen Showkan" id="202255400" dept="ICS"/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
