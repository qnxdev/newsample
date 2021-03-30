import { Link, Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErrorPage";
import LoginPage from "./LoginPage";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Carousel.css";

export default function AdmissionPage({ user, loginControl }) {
  const history = useHistory();
  const CarouselList = [
    {
      img: "/images/carousel/1.jpg",
    },
    {
      img: "/images/carousel/2.jpg",
      link: "/facil",
    },
    {
      img: "/images/carousel/3.jpg",
      link: "/fasdfsd",
    },
    {
      img: "/images/carousel/4.jpg",
    },
  ];
  return (
    <Page loginControl={loginControl} user={user}>
      <h1>Admission</h1>
      <div className="carousel-container">
        <Carousel interval={4000}>
          {CarouselList.map((i) => (
            <Carousel.Item>
              {i.link ? (
                <Link to={i.link}>
                  <img src={i.img} alt="" width="500px" height="300px" />
                </Link>
              ) : (
                <img src={i.img} alt="" width="500px" height="300px" />
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Page>
  );
}
