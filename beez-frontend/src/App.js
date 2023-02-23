import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './home/Home';
import { BrowserRouter, Routes,Route ,useNavigate,Navigate} from 'react-router-dom';
import Accueil from './home/Accueil';
import Login from './home/Login';
import Homelog from './home/Homelog';
import Accueillog from './home/Accueillog';
import About from './home/About';
import Contact from './home/Contact';
import Aboutlog from './home/Aboutlog';
import Blog from './home/Blog';
import Notif from './home/Notif';
import QandA from './home/QandA';
import AddBlog from './home/AddBlog';
import Contactlog from './home/Contactlog';


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} >
              <Route path="/" element={<Accueil />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />

              

            </Route>
            <Route path="/login" element={<Login />} /> 
            <Route path="/homelog" element={<Homelog />} >
              <Route path="/homelog" element={<Accueillog />} />
              <Route path="/homelog/aboutlog" element={<Aboutlog />} />
              <Route path="/homelog/blog" element={<Blog />} />
              <Route path="/homelog/notif" element={<Notif />} />
              <Route path="/homelog/qa" element={<QandA />} />
              <Route path="/homelog/addblog" element={<AddBlog />} />
              <Route path="/homelog/contactlog" element={<Contactlog />} />






            </Route>
        </Routes>
      </BrowserRouter>
    
 

  
      
    </>
  );
}

export default App;
