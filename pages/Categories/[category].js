import axios from "axios";
import Card from "../../Components/Card";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import $ from "jquery";
export default ({ blog }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="../logo.jpeg" />
      </Head>
      <nav>
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>
            <img className="logo_img" src="../logo.jpeg" />
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
              <span className="toggler_menu">Home</span>
            </a>
          </Link>
          <Dropdown as={"span"} className="toggler_menu">
            <span style={{ color: "blue" }}>Categories</span>
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
              <span className="toggler_menu">About</span>
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
            <span style={{ color: "blue" }}> Categories</span>

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
            <a style={{ color: "black" }}>
              <span id="contact">Contact</span>
            </a>
          </Link>
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a style={{ color: "black" }}>
              <span id="about">About</span>
            </a>
          </Link>
        </div>
      </div>
      <Container>
        <Head>
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
        </Head>
        <Row>
          <Col md={3} xs={12}>
            <div className="advert">Space for ad</div>
          </Col>
          <Col md={9} xs={12}>
            <div style={{ marginTop: 70 }}>
              {blog.map((val) => (
                <Card value={val} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <footer>
        <div>
          <a href="https://www.linkedin.com/in/tech-mate-9846731b6">
            <svg
              id="Bold"
              enable-background="new 0 0 24 24"
              height="25"
              viewBox="0 0 24 24"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" />
              <path d="m.396 7.977h4.976v16.023h-4.976z" />
              <path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" />
            </svg>
          </a>
          <a href="https://twitter.com/the_tech_mate_?s=08">
            <img src="../twitter.svg" />
          </a>

          <a href="https://www.facebook.com/Tech_Mate-101184858397572/">
            <img src="../facebook.svg" />
          </a>
          <a href="https://www.instagram.com/the_tech_mate_/?hl=en">
            <img src="../instagram.svg" />
          </a>
        </div>
        <div>
          <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
            <a style={{ color: "#808080", marginLeft: 10 }}>About</a>
          </Link>
          <Link href="/contact" as={process.env.BACKEND_URL + "/contact"}>
            <a style={{ color: "#808080", marginLeft: 10 }}>Contact</a>
          </Link>
        </div>
        <div>
          <span
            dangerouslySetInnerHTML={{
              __html: "&#169Copyright 2020 All rights reserved",
            }}
          ></span>
        </div>
      </footer>
    </>
  );
};

export async function getStaticProps(context) {
  console.log(context["params"]["category"], "context");
  const res = await axios.get(
    `https://zen-newton-5723fe.netlify.app/.netlify/functions/api/blog?category=${context["params"]["category"]}`
  );
  const blog = await res.data;

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const arr = ["gadgets", "colleges"];

  const array = arr.map((val, index) => {
    return `/Categories/${val}`;
  });

  return {
    paths: array,
    fallback: false,
  };
}
