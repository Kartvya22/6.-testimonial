
import './App.css';
import Testimonial from './components/Testimonial';
import reviews from './Data';

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-gray-300'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Our Testimonials</h1>
      </div>
      <div className='bg-violet-400 h-[4px] w-1/12 mt-1' ></div>
      <Testimonial reviews={reviews} />
    </div>
  );
}

export default App;
