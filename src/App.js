import React from 'react';
import Form from './components/Form';
import Header from './components/header/Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="body-pane">
      <Form />
      </div>
    </>
  )
}


export default App;