import axios from "axios";
import Head from "next/head";
import $ from "jquery";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import React from "react";

import { Row, Col, Container, Dropdown } from "react-bootstrap";
import Link from "next/link";

export default ({ blog }) => {
  const replace = (str) => {
    let array = str;
    for (let i = 0; i < str.length; i++) {
      array = array.replace(" ", "_");
    }
    return array;
  };
  const imageInsert = (url, title) => {
    if (url) {
      return <img alt={title} src={url}></img>;
    }
  };
  const openAnswer = (index) => {
    $(`#answer_${index}`).toggle();
    if ($(`#answer_${index}`).is(":hidden")) {
      $(`#question_button_${index}`)
        .html(`<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg>`);
    } else {
      $(`#question_button_${index}`)
        .html(`<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>`);
    }
  };
  const replaceContentUrl = (str) => {
    let string = str;

    blog.urls.map((value) => {
      console.log(value, "value");
      string = string.replace(
        `${value.keyword}`,
        `<a href=${value.url}>${value.keyword}</a>`
      );
    });

    return string;
  };

  const renderConclusion = (conclusion_final) => {
    if (conclusion_final.length > 0) {
      return (
        <div className="subheading">
          <h3>Conclusion</h3>
          <p dangerouslySetInnerHTML={{ __html: conclusion_final }}></p>
        </div>
      );
    }
  };

  const renderButton = (flipkart, amazon) => {
    if (flipkart.length > 0 && amazon.length > 0) {
      return (
        <>
          <a href={amazon} className="col-md-4 buy-button">
            <img
              style={{ margin: 0, padding: 0 }}
              src="https://i.pinimg.com/originals/08/5f/d8/085fd8f7819dee3b716da73d3b2de61c.jpg"
              alt="buy on amazon"
            />
            <div>Buy on amazon</div>
          </a>
          <a className="col-md-4 offset-md-4 buy-button" href={flipkart}>
            <img
              style={{ margin: 0, padding: 0 }}
              src="https://latestnews.fresherslive.com/images/articles/ians/origin/2020/07/14/walmart-led-investors-pump-in-12-bn-in-flipkart-group-5f0da8994d322-1594730649.jpg"
              alt="buy on flipkart"
            />
            <div style={{ backgroundColor: "#0b275b", color: "white" }}>
              Buy on flipkart
            </div>
          </a>
        </>
      );
    }
  };

  const renderList = (key_feature, value, col) => {
    if (key_feature.length > 0) {
      let key_feature_arr = key_feature.split(",");
      return (
        <>
          <div style={{ backgroundColor: col }}>{value}</div>
          <ul>
            {key_feature_arr.map((val) => {
              if (val.length > 0) {
                return <li>{val}</li>;
              }
            })}
          </ul>
        </>
      );
    }
  };
  const week_days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let times = new Date(blog.createdAt);
  let day = week_days[times.getDay()];
  let date = times.getDate();
  let month = months[times.getMonth()];
  let year = times.getFullYear();

  let time = `${day} ${date} ${month} ${year}`;
  let description_new = blog.description.split("\n").join("<br/>");
  return (
    <div className="about">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{blog.heading}</title>
        <meta name="title" content={blog.heading} />
        <meta name="description" content={blog.meta_description} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://thtechmates.in/${replace(blog.heading)}`}
        />
        <meta property="og:title" content={blog.heading} />
        <meta property="og:description" content={blog.meta_description} />
        <meta property="og:image" content={blog.imageUrl} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`https://thtechmates.in/${replace(blog.heading)}`}
        />
        <meta property="twitter:title" content={blog.heading} />
        <meta property="twitter:description" content={blog.meta_description} />
        <meta property="twitter:image" content={blog.imageUrl} />
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
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossorigin="anonymous"
        />
        <link rel="shortcut icon" href="../logo.jpeg" />
      </Head>
      <nav>
        <Link href="/" as={process.env.BACKEND_URL + "/"}>
          <a>
            <img alt="logo" className="logo_img" src="../logo.jpeg" />
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
            className="bi bi-list"
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
            <a style={{ color: "black" }}>
              <span id="about">About</span>
            </a>
          </Link>
        </div>
      </div>
      <Container>
        <main>
          <Row>
            <Col xs={12} md={8}>
              <h3 id="heading">{blog.heading}</h3>
              <hr />
              <h5 className="time">
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-calendar-check"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  {time}
                </span>
                <span>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-pencil"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                    />
                  </svg>
                  {blog.username}
                </span>
              </h5>
              <img
                className="heading_img"
                alt={blog.heading}
                src={blog.imageUrl}
              />
              <div className="icon_container">
                <span>
                  <FacebookShareButton
                    url={`https://thtechmates.in/blogs/${blog.heading}`}
                    quote={blog.heading}
                  >
                    <FacebookIcon size={50} round={true} />
                  </FacebookShareButton>
                </span>

                <span>
                  <WhatsappShareButton
                    url={`https://thtechmates.in/blogs/${replace(
                      blog.heading
                    )}`}
                    title={blog.heading}
                  >
                    <WhatsappIcon size={50} round={true} />
                  </WhatsappShareButton>
                </span>
                <span>
                  <TwitterShareButton
                    url={`https://thtechmates.in/blogs/${replace(
                      blog.heading
                    )}`}
                    title={blog.heading}
                    via="dspeakingsoul"
                  >
                    <TwitterIcon size={50} round={true} />
                  </TwitterShareButton>
                </span>
              </div>
              <hr />
              <p
                className="subheading description_sub"
                dangerouslySetInnerHTML={{ __html: description_new }}
              ></p>
              {blog.subheading.map((value) => {
                let {
                  title,
                  content,
                  key_feature,
                  pros,
                  cons,
                  flipkart,
                  amazon,
                } = value;

                let content_new = content.split("\n").join("<br/>");
                let content_final = replaceContentUrl(content_new);

                return (
                  <div className="subheading">
                    <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>

                    <div className="subheading-image">
                      {imageInsert(value.url, title)}
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: content_final }}></p>
                    <div className="pro-con">
                      {renderList(key_feature, "Key Features", "blue")}
                    </div>

                    <div className="pro-con">
                      {renderList(pros, "Pros", "green")}
                    </div>
                    <div className="pro-con">
                      {renderList(cons, "Cons", "red")}
                    </div>
                    <div className="row">{renderButton(flipkart, amazon)}</div>
                  </div>
                );
              })}

              {renderConclusion(blog.conclusion)}
            </Col>
            <Col xs={12} md={4}>
              <div className="right">
                <div id="ad">Space For Ad</div>

                <div id="quest">
                  {blog.questions.map((value, index) => {
                    return (
                      <div className="quest-container">
                        <div id={`question_${index}`}>
                          {value.question}
                          <span
                            id={`question_button_${index}`}
                            onClick={() => {
                              openAnswer(index);
                            }}
                          >
                            <svg
                              width="1em"
                              height="1em"
                              viewBox="0 0 16 16"
                              className="bi bi-chevron-down"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                              />
                            </svg>
                          </span>
                        </div>
                        <p id={`answer_${index}`}>{value.answer}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </main>
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
            <img alt="twitter" src="../twitter.svg" />
          </a>

          <a href="https://www.facebook.com/Tech_Mate-101184858397572/">
            <img alt="facebook" src="../facebook.svg" />
          </a>
          <a href="https://www.instagram.com/the_tech_mate_/?hl=en">
            <img alt="instagram" src="../instagram.svg" />
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
    </div>
  );
};

export async function getStaticProps(context) {
  const replace = (str) => {
    let array = str;
    for (let i = 0; i < str.length; i++) {
      array = array.replace("_", " ");
    }
    return array;
  };
  console.log(context["params"]["blog"], "context");
  const res = await axios.get(
    `https://zen-newton-5723fe.netlify.app/.netlify/functions/api/blog?heading=${replace(
      context["params"]["blog"]
    )}`
  );
  const blog = await res.data[0];

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const replace = (str) => {
    let array = str;
    for (let i = 0; i < str.length; i++) {
      array = array.replace(" ", "_");
      array=array.replace("|","%7C")
    }
    return array;
  };
  const res = await axios.get(
    "https://zen-newton-5723fe.netlify.app/.netlify/functions/api/"
  );
  const posts = await res.data.arr;

  const array = posts.map((val, index) => {
    return `/${replace(val.heading)}`;
  });

  return {
    paths: array,
    fallback: false,
  };
}
