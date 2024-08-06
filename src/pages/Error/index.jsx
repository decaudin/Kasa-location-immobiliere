import { useNavigate } from 'react-router-dom';
import "./index.scss";

const Error = () => {
  
  const navigate = useNavigate();

  // Redirige vers la page d'accueil

  const handleGoBack = () => {
    navigate('/');
  };
  
  return (
    <div className="error">
      <h1>404</h1>
      <p className="text">Oups! La page que vous demandez n'existe pas.</p>
      <p className="goBack" onClick={handleGoBack}>
        Retournez sur la page d'accueil
      </p>
    </div>
  );
};

export default Error;