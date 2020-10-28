import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
const Carousels = (props) => {
  const replace = (str) => {
    let array = str;
    for (let i = 0; i < str.length; i++) {
      array = array.replace(" ", "_");
    }
    return array;
  };
  return (
    <>
      <hr style={{ marginTop: 70 }} />

      <Carousel>
        {props.post.map((val) => {
          let index = props.data.findIndex((value) => {
            return val.heading == value;
          });

          if (index >= 0) {
            let description =
              val.meta_description.slice(0, 160) + ". . . . . . . . . . . .";
            return (
              <Carousel.Item>
                <Link
                  href={{
                    pathname: `/blogs[blog]`,
                  }}
                  as={{
                    pathname:
                      process.env.BACKEND_URL + `/${replace(val.heading)}`,
                  }}
                  passHref
                >
                  <a>
                    <div
                      className="d-block w-100 description-container"
                      style={{
                        backgroundImage: `url(${val.imageUrl})`,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          display: "flex",
                          width: "100%",
                          height: "100%",
                          color: "white",
                          backgroundColor: "#0009",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div>
                          <div className="heading">{val.heading}</div>
                          <p className="carousel-des">{description}</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </Carousel.Item>
            );
          }
        })}
      </Carousel>
      <hr style={{ marginBottom: 20 }} />
    </>
  );
};

export default Carousels;
