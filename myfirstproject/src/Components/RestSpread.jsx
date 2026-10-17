function RestSpread() {
  // 1. Do arrays merge
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const mergedArray = [...arr1, ...arr2];

  // 2. Do objects merge
  const obj1 = { name: 'Shriya', age: 18 };
  const obj2 = { city: 'Surat', course: 'Full Stack' };
  const mergedObject = { ...obj1, ...obj2 };

  // 3. Object ki copy
  const original = { name: 'Shriya', city: 'Surat' };
  const copy = { ...original, city: 'Ahmedabad' };

  // 4. Rest operator wala function
  function sum(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    return total;
  }

  return (
    <section className='rest-spread'>
      <h2>Rest & Spread Operator</h2>
      <p>
        <b>Array 1:</b> {JSON.stringify(arr1)} | <b>Array 2:</b>{' '}
        {JSON.stringify(arr2)}
      </p>
      <p>
        <b>Merged Array:</b> {JSON.stringify(mergedArray)}
      </p>
      <p>
        <b>Merged Object:</b> {JSON.stringify(mergedObject)}
      </p>
      <p>
        <b>Original Object:</b> {JSON.stringify(original)}
      </p>
      <p>
        <b>Copied Object (city badli):</b> {JSON.stringify(copy)}
      </p>
      <p>
        <b>Rest function sum(10, 20, 30, 40):</b> {sum(10, 20, 30, 40)}
      </p>
    </section>
  );
}

export default RestSpread;
