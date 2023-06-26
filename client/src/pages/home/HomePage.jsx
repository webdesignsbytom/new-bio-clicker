import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import CanvasGame from '../../components/canvas/CanvasGame';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/');
  }, []);

  return (
    <div className='grid main__bg font-poppins h-screen overflow-hidden max-h-screen'>
      <CanvasGame />
    </div>
  );
}

export default HomePage;
