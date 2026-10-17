import { useState, useEffect } from 'react';

function StudentManager() {
  const [name, setName] = useState('');

  // page khulte hi local storage se data padhta hai
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('students');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // jab bhi students list badle, local storage me save karo
  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  function addStudent() {
    if (name.trim() === '') {
      return;
    }
    const newStudent = { id: Date.now(), name: name.trim() };
    setStudents([...students, newStudent]);
    setName('');
  }

  function deleteStudent(id) {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  }

  return (
    <section className='manager-section'>
      <h2>Student Information Manager</h2>

      <input
        type='text'
        placeholder='Enter student name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name}
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StudentManager;
