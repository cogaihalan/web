import React, { useState } from "react";
import { Container } from "react-bootstrap";
import video from "../public/assets/video.gif";
import Carousel from "react-bootstrap/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Slider from "react-slick";
import HomeTemplate from "../template/HomeTemplate";
export default function Home() {
  const [theme, setTheme] = useState(true);
  const settings = {
    dots: false,
    arrows: false,
    lazyLoad: true,
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const partnerQuantity = () => {
    let listPartnerId = [];
    for (let partnerId = 2; partnerId <= 51; partnerId++) {
      listPartnerId.push(partnerId);
    }
    return [...listPartnerId];
  };
  const renderPartnersLogo = () => {
    return partnerQuantity().map((partnerId, index) => {
      return (
        <div key={index} className="partners-img">
          <LazyLoadImage
            src={`/assets/partners/Asset ${partnerId}.jpg`}
            alt={`Partner ${partnerId}`}
          />
        </div>
      );
    });
  };
  return (
    <>
      <HomeTemplate themeClasses={theme ? "dark-theme" : "light-theme"}>
        <Container>
          <Carousel
            nextIcon={
              <span
                className="carousel-control-next-icon"
                style={{
                  backgroundImage: theme
                    ? "url(/assets/whiteNextIcon.png)"
                    : "url(/assets/nextIcon.png)",
                }}
              ></span>
            }
            prevIcon={
              <span
                style={{
                  backgroundImage: theme
                    ? "url(/assets/whitePrevIcon.png)"
                    : "url(/assets/prevIcon.png)",
                }}
                className="carousel-control-prev-icon"
              ></span>
            }
            controls={true}
            onSelect={() => {
              setTheme(!theme);
            }}
            indicators={false}
            slide={true}
            className="home-carousel"
          >
            <Carousel.Item>
              <div className="home-info">
                <div className="home-details">
                  <div className="home-detail">Creative Agency</div>
                  <div className="home-detail">Brand Agency</div>
                  <div className="home-detail">Brand Strategy</div>
                  <div className="home-detail">Brand Identity</div>
                  <div className="home-detail">Visual Unity Solution</div>
                </div>
                <p className="home-intro">
                  Hello!
                  <br />
                  UOVO is an agency based in Hanoi since 2018.
                  <br />
                  We aim for unfolding your brand story, mapping great brand
                  strategies and letting them to win customer&apos;s mind.
                  <br />
                  Your story is what inspired us!
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center carousel-video">
                <LazyLoadImage src={video.src} alt="video"></LazyLoadImage>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div
                className="carousel-image"
                style={{
                  backgroundImage: "url(/assets/logo3.gif) ",
                }}
              ></div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="home-partners__slider">
                <Slider {...settings}>{renderPartnersLogo()}</Slider>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </HomeTemplate>
    </>
  );
}
