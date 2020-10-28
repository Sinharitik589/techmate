import Link from "next/link";

import $ from "jquery";
import Footer from "../Components/Footer";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import Head from "next/head";
const About = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>About the team techmates</title>
        <meta
          name="description"
          data="A group of students trying to make comparison convinient and easy"
        />
        <meta
          name="google-site-verification"
          content="nJKzLkR7UKXOdYtFfc7fgCO6Hml0Mi5zCHHFHU9BI1k"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
          integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
          integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
          crossorigin="anonymous"
        ></script>
        <link rel="shortcut icon" href="./logo.jpeg" />
      </Head>
      <nav>
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>
            <img className="logo_img" src="./logo.jpeg" />
          </a>
        </Link>

        <span className="techmate" style={{ color: "blue" }}>
          {"<TECH_"}
          <span style={{ color: "black" }}>{"MATE/>"}</span>
        </span>
        <span
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
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>
              <span style={{ color: "black" }} className="toggler_menu">
                Home
              </span>
            </a>
          </Link>
          <Dropdown as={"span"} className="toggler_menu">
            Categories
            <Dropdown.Toggle
              variant="success"
              as={"span"}
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item as={"div"}>
                <Link
                  href={{
                    pathname: `/Categories[category]`,
                  }}
                  as={{
                    pathname: process.env.BACKEND_URL + `/Categories/gadgets`,
                  }}
                  passHref
                >
                  <a style={{ color: "black" }}>Gadgets</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item as={"div"}>
                <Link
                  href={{
                    pathname: `/Categories[category]`,
                  }}
                  as={{
                    pathname: process.env.BACKEND_URL + `/Categories/colleges`,
                  }}
                  passHref
                >
                  <a style={{ color: "black" }}>Colleges</a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link href="/contact" as={process.env.BACKEND_URL + "/contact"}>
            <a>
              <span className="toggler_menu">Contact</span>
            </a>
          </Link>
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a>
              <span style={{ color: "blue" }} className="toggler_menu">
                About
              </span>
            </a>
          </Link>
        </div>
      </nav>
      <div id="header_toggle">
        <div className="header_toggler">
          <Link href="/" as={process.env.BACKEND_URL + "/"}>
            <a>
              <span style={{ color: "black" }} id="home">
                Home
              </span>
            </a>
          </Link>
          <Dropdown>
            Categories
            <Dropdown.Toggle
              variant="success"
              as={"span"}
              id="dropdown-split-basic"
            />
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  href={{
                    pathname: `/Categories[category]`,
                  }}
                  as={{
                    pathname: process.env.BACKEND_URL + `/Categories/gadgets`,
                  }}
                  passHref
                >
                  <a style={{ color: "black" }}>Gadgets</a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href={{
                    pathname: `/Categories[category]`,
                  }}
                  as={{
                    pathname: process.env.BACKEND_URL + `/Categories/colleges`,
                  }}
                  passHref
                >
                  <a style={{ color: "black" }}>Colleges</a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="/contact" as={process.env.BACKEND_URL + "/contact"}>
            <a style={{ color: "black" }}>
              <span id="contact">Contact</span>
            </a>
          </Link>
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a style={{ color: "blue" }}>
              <span id="about">About</span>
            </a>
          </Link>
        </div>
      </div>
      <Container>
        <main>
          <div className="about-page">
            <h1>About Us</h1>
            <Row>
              <Col md={5} xs={12}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="./logo.jpeg"
                />
              </Col>
              <Col md={7} xs={12}>
                <div>
                  <b>
                    <i>WE COMPARE YOU CHOOSE...</i>
                  </b>
                  In this tagline we refers to us, the members of the team
                  TECH_MATE , an organisation comprising of students dedicated
                  to provide filtered content. Our first and formost aim is to
                  provide unbiased comparison between technologies and gadgets
                  that you are finding hard to choose between ,we are bound to
                  come up with the most reliable and researched content easing
                  the load of dillema from your mind.The idea behind this
                  website is to compare and contrast even the smallest details
                  that matters for you..{" "}
                </div>
              </Col>
            </Row>
          </div>
        </main>
      </Container>

      <Footer />
    </div>
  );
};

export default About;
