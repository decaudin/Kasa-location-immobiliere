import "../styles/Error.scss";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <p className="goBack">Retournez sur la page d'accueil</p>
    </div>
  );
};

export default Error;
