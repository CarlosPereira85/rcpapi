import React from 'react';
import './App.css';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';


const App = () => {
  return (
    <main>
     <Header/>
     <ContentContainer />
     <Footer />
    </main>
  );
}

export default App;

