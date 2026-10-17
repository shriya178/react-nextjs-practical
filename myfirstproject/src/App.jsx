import Header from './Components/Header';
import Welcome from './Components/Welcome-section';
import RestSpread from './Components/RestSpread';
import Footer from './Components/Footer';
import StudentCard from './Components/StudentCard';
import StateExamples from './Components/StateExamples';
import StudentManager from './Components/StudentManager';
import './App.css';

function App() {
  const students = [
    {
      name: 'Shriya Patel',
      city: 'Surat',
      state: 'Gujarat',
      country: 'India',
      course: 'Full Stack Development',
    },
    {
      name: 'Asha Mishra',
      city: 'Ahmedabad',
      state: 'Gujarat',
      country: 'India',
      course: 'Full Stack Development',
    },
    {
      name: 'Ayesha Bheshania',
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
      course: 'Full Stack Development',
    },
    {
      name: 'Abdul Mannan',
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India',
      course: 'Full Stack Development',
    },
    {
      name: 'Smit Prajapati',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      course: 'Full Stack Development',
    },

    {
      name: 'Priyansh Patel',
      city: 'Rajkot',
      state: 'Gujarat',
      country: 'India',
      course: 'Full Stack Development',
    },
  ];

  return (
    <div className='App'>
      <Header />
      <Welcome />
      <RestSpread />

      <section className='students-section'>
        <h2>Student Cards (Props)</h2>
        <div className='cards'>
          {students.map((s, index) => (
            <StudentCard
              key={index}
              name={s.name}
              city={s.city}
              state={s.state}
              country={s.country}
              course={s.course}
            />
          ))}
        </div>
      </section>

      <StateExamples />
      <StudentManager />

      <Footer />
    </div>
  );
}

export default App;
