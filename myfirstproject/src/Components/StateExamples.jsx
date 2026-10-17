import { useState } from 'react';

function StateExamples() {
  // 1. String State
  const [text, setText] = useState('Hello');

  // 2. Number State
  const [count, setCount] = useState(0);

  // 3. Boolean State
  const [isOn, setIsOn] = useState(false);

  // 4. Array State
  const [skills, setSkills] = useState(['HTML', 'CSS']);

  // Nayi skills ki list jo ek-ek karke add hongi
  const skillPool = ['JavaScript', 'React.js', 'Node.js', 'MongoDB', 'Next.js'];

  function addNextSkill() {
    // Jo skill abhi 'skills' array mein nahi hai, usme se pehli wali nikal lo
    const nextSkill = skillPool.find((s) => !skills.includes(s));
    if (nextSkill) {
      setSkills([...skills, nextSkill]);
    }
  }

  // 5. Object State
  const [student, setStudent] = useState({
    name: 'Shriya Patel',
    course: 'React.js',
  });

  return (
    <section className='state-section'>
      <h2>useState Examples</h2>

      {/* 1. String */}
      <div className='state-box'>
        <h3>String</h3>
        <p>{text}</p>
        <button onClick={() => setText('Welcome to React!')}>Update</button>
        <button onClick={() => setText('Hello')}>Reset</button>
      </div>

      {/* 2. Number */}
      <div className='state-box'>
        <h3>Number</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* 3. Boolean */}
      <div className='state-box'>
        <h3>Boolean</h3>
        <p>{isOn ? 'ON' : 'OFF'}</p>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        <button onClick={() => setIsOn(false)}>Reset</button>
      </div>

      {/* 4. Array */}
      <div className='state-box'>
        <h3>Array</h3>
        <p>{skills.join(', ')}</p>
        <button onClick={addNextSkill}>Add Skill</button>
        <button onClick={() => setSkills(['HTML', 'CSS'])}>Reset</button>
      </div>

      {/* 5. Object */}
      <div className='state-box'>
        <h3>Object</h3>
        <p>
          {student.name} - {student.course}
        </p>
        <button onClick={() => setStudent({ ...student, course: 'Next.js' })}>
          Update Course
        </button>
        <button
          onClick={() =>
            setStudent({ name: 'Shriya Patel', course: 'React.js' })
          }
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default StateExamples;
