const Userinfo = ({ username }) => {
  return (
    <div className="user-right">
      <h1>{username}</h1>
      <i className="bi bi-three-dots-vertical"></i>
    </div>
  );
};

export default Userinfo;
