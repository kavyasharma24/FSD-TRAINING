import Student from './Student.jsx';

function App() {
  const student =[
  {
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'John Doe',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  },
  {
    pic: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Amit Kumar',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  },
  {
    pic: 'https://img.favpng.com/25/6/6/vector-graphics-student-clip-art-illustration-stock-photography-png-favpng-Xs0aCHdQTWua3ZZULi8p3URfj.jpg',
    name: 'Vicky Singh',
    age: 21,
    course: 'Computer Science',
    year: '3rd',
    university: 'ABC University'
  }
];



  return (
    <div>
      {student.map((ele, index) => (
        <Student key={index} data={ele} />
      ))}
    </div>
  );
}

export default App;
