import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectOnce() {
  const [redirected, setRedirected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!redirected) {
      navigate('/menu', { replace: true });
      setRedirected(true);
    }
  }, [navigate, redirected]);

  return null;
}

export default RedirectOnce;