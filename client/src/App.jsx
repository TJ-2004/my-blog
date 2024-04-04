import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, About, SignIn, SignUp, Dashboard, Projects } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
