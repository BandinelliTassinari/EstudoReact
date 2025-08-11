import React from 'react';
import GloboHeader from './components/GloboHeader';
import GloboSubHeader from './components/GloboSubHeader';
import { Divider } from 'antd';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div style={{ background: '#fff', padding: isMobile ? '5' : '0px' }}>
      <GloboHeader />

      {/* Divider acima do SubHeader */}
      <Divider style={{ 
        borderTop: '3px solid #e8e8e8', 
        margin: isMobile ? '0' : '10px 0', 
        position: 'absolute', 
        top: '50px'
      }} />
      <GloboSubHeader />
      {/* SubHeader centralizado */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '10px' : '20px' }}>
        
      </div>
      <Divider style={{ 
        borderTop: '3px solid #e8e8e8', 
        margin: isMobile ? '0' : '10px 0', 
        position: 'absolute', 
        top: '88px', 
      }} />
    </div>
  );
}

export default App;
