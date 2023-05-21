function Private({username, logout}) {
  return (
    <div>
      <h1>Szia, {username}!</h1>
      <div>Formázott tartalom</div>
      <button onClick={logout} className="logoutBtn">Kijelentkezés</button>
    </div>
  );
};

export default Private;
