import Link from "next/link";

const Card = ({ value }) => {
  var description;
  console.log(value.meta_description.slice(0, 160), value.heading);

  description = value.meta_description.slice(0, 160) + "........";

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
    "Jan",
    "Febr",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  let times = new Date(value.createdAt);
  let day = week_days[times.getDay()];
  let date = times.getDate();
  let month = months[times.getMonth()];
  let year = times.getFullYear();

  let time = ` ${date} ${month} ${year}`;
  const replace = (str) => {
    let array = str;
    for (let i = 0; i < str.length; i++) {
      
      array = array.replace(" ", "_");
    }
    return array;
  };

  return (
    <>
      <Link
        href={{
          pathname: `/blogs[blog]`,
        }}
        as={{
          pathname: process.env.BACKEND_URL + `/${replace(value.heading)}`,
        }}
        passHref
      >
        <a>
          <div className=" blog-container">
            <div className="component-description ">
              <div className="heading">{value.heading}</div>{" "}
              <div className="auth-des">
                <span>
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
                    </svg>{" "}
                  </span>
                  <span>{time}</span>
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
                  </svg>{" "}
                  {value.username}
                </span>
              </div>
              <p>{description}</p>
            </div>
            <div className=" image-container">
              <img
                alt={value.heading}
                style={{ padding: 0 }}
                src={value.imageUrl}
              />
            </div>
          </div>
        </a>
      </Link>
    </>
  );
};

export default Card;
