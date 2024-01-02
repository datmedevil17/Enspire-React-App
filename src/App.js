import './App.css';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
    <Navbar title ="TextUtils" about = "About"/>
    
    <div className="container my-4">
    {/* <TextForm heading = "Enter the text to analyze"/> */}
    <About />

    </div>
    </>
  );
}

export default App;
