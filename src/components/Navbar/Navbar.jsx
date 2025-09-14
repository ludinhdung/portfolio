import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img
          src="https://cdn.prod.website-files.com/64125885e9e64b8f0e014e18/64127f515b99c43c6cb17a06_random.svg"
          loading="lazy"
          alt="logo"
          className="logo-img"
        />
      </a>

      <ul className="nav-list">
        <li className="nav-items">
          <a href="#background">Background</a>
        </li>
        <li className="nav-items">
          <a href="#skills">Skills</a>
        </li>
        <li className="nav-items">
          <a href="#project-section">Project</a>
        </li>
        <li className="nav-items">
          <a href="mailto:dungdung23092002@gmail.com">Get in Touch</a>
        </li>
      </ul>

      <div className="social-icons">
        <a href="http://github.com/ludinhdung" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="svg-icon"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            >
              <path d="M9.096 21.25v-3.146a3.33 3.33 0 0 1 .758-2.115c-3.005-.4-5.28-1.859-5.28-5.798c0-1.666 1.432-3.89 1.432-3.89c-.514-1.13-.5-3.084.06-3.551c0 0 1.95.175 3.847 1.75c1.838-.495 3.764-.554 5.661 0c1.897-1.575 3.848-1.75 3.848-1.75c.558.467.573 2.422.06 3.551c0 0 1.432 2.224 1.432 3.89c0 3.94-2.276 5.398-5.28 5.798a3.33 3.33 0 0 1 .757 2.115v3.146" />
              <path d="M3.086 16.57c.163.554.463 1.066.878 1.496c.414.431.932.77 1.513.988a4.46 4.46 0 0 0 3.62-.216" />
            </g>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/l%E1%BB%AF-d%C5%A9ng-36b086245"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="svg-icon"
          >
            <g fill="none" stroke="currentColor" stroke-width="2">
              <rect width="14" height="14" x="5" y="5" rx="4" />
              <path
                stroke-linecap="round"
                d="M9 11.4v4m0-6.7v.01m3 2.69v.6m0 3.4V12m0 0c2-.5 3-.639 3 .5v2.9"
              />
            </g>
          </svg>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
