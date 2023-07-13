

interface NavbarProps {
  onNavigate: (pathName: string) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const handleNavigate = (pathName: string) => {
    window.history.pushState({}, "", pathName);
    onNavigate(pathName);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <a className="navbar-brand" onClick={() => handleNavigate("/home")}>
            Movies App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => handleNavigate("/login")}
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => handleNavigate("/register")}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
