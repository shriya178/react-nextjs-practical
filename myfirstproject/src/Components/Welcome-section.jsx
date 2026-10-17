import studentImage from '../assets/girl img.jpeg';

function WelcomeSection() {
  return (
    <section className='App-welcome'>
      <h2>Welcome To My First React Project</h2>
      <p> Name: SHriya Patel</p>
      <p> Course: Full Stack Web Development</p>
      <p>Institute: Red And White skill Education</p>
      <p>Current date: {new Date().toLocaleDateString()}</p>
      {/* Student Image */}

      <img
        src={studentImage}
        alt='Student'
        className='student-image'
        width='120'
      />
    </section>
  );
}

export default WelcomeSection;
