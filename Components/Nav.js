import $ from "jquery";
import Link from "next/link";
const Nav = () => {
  return (
    <>
      <nav>
        <img
          style={{ height: 60, width: 60, position: "relative", left: 0 }}
          src="./logo.png"
        />
        <span className="techmate" style={{ color: "blue" }}>
          {"<TECH_"}
          <span style={{ color: "black" }}>{"MATE/>"}</span>
        </span>
        <span
          style={{ position: "relative", right: 0 }}
          className="toggler_icon"
          onClick={() => {
            $("#header_toggle").slideToggle();
          }}
        >
          <svg
            width="2em"
            height="2em"
            viewBox="0 0 16 16"
            class="bi bi-list"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </span>
        <div className="desc_toggler">
          <Link href="/" as="/">
            <a>
              <span className="toggler_menu">Home</span>
            </a>
          </Link>
          <Link href="/contact" as="/contact">
            <a>
              <span className="toggler_menu">Contact</span>
            </a>
          </Link>
          <Link href="/about" as="/about">
            <a>
              <span className="toggler_menu">About</span>
            </a>
          </Link>
        </div>
      </nav>
      <div id="header_toggle">
        <div className="header_toggler">
          <Link href="/" as="/">
            <a style={{ color: "black" }}>
              <span id="home">Home</span>
            </a>
          </Link>
          <Link href="/contact" as="/contact">
            <a style={{ color: "black" }}>
              <span id="contact">Contact</span>
            </a>
          </Link>
          <Link href="/about" as="/about">
            <a style={{ color: "black" }}>
              <span id="about">About</span>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
