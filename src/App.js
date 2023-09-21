import React, { useState } from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import LanguageSelector from './LanguageSelector';
import LoginForm from './Login';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <LanguageSelector></LanguageSelector>
      <LoginForm show={showLogin} onClose={() => setShowLogin(false)} />
      <h1>Hello StackBlitz! { showLogin + "" }</h1>
      <Button variant="primary" onClick={() => setShowLogin(true)}>
        Login
      </Button>
      <Button variant="secondary">Secondary</Button>
      <p>Start editing to see some magic happen :)</p>

      <button>HTML Button</button>

      <button className="btn btn-primary">Primary</button>

      <AppButton>Click Here</AppButton>
    </div>
  );
}

function AppButton({ children, variant }) {
  return <button className={`btn btn-${variant}`}>{children}</button>;
}
