import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AdminRoute } from './components/common/ProtectedRoute';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Team from './components/sections/Team';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import AdminDashboard from './components/admin/AdminDashboard';
import Login from './components/Login';
import { useState, useEffect } from 'react';
import api from './utils/api';

function HomePage() {
  const [content, setContent] = useState({});

  useEffect(() => {
    api.get('/content')
      .then(res => {
        const data = {};
        res.data.forEach(item => { data[item.sectionKey] = item.value; });
        setContent(data);
      })
      .catch(err => console.error('Error fetching content:', err));
  }, []);

  return (
    <>
      <Hero content={content} />
      <About content={content} />
      <Services content={content} />
      <Team content={content} />
      <Gallery content={content} />
      <Contact content={content} />
    </>
  );
}

function App() {
  const [content, setContent] = useState({});

  useEffect(() => {
    api.get('/content')
      .then(res => {
        const data = {};
        res.data.forEach(item => { data[item.sectionKey] = item.value; });
        setContent(data);
      })
      .catch(err => console.error('Error fetching content:', err));
  }, []);
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <TopBar content={content}/>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About content={content}/>}  />
              <Route path="/services" element={<Services content={content}/>} />
              <Route path="/team" element={<Team content={content}/>} />
              <Route path="/gallery" element={<Gallery content={content}/>} />
              <Route path="/contact" element={<Contact content={content}/>} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/admin" element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              } />
            </Routes>
          </main>
          <Footer content={content}/>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;