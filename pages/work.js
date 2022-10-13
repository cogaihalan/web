import Image from "next/image";
import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import { LazyLoadImage } from "react-lazy-load-image-component";
const dataNameImageJPG = [
  "WOMO",
  "deVUI",
  "Mekong capital",
  "Yen Tu Mountain",
  // "Hoiana",
  "Le Virtu`",
  // "Maa pickles",
  "kk sapa hotel",
  "ha long pearl yogurt",
  "HikVision",
  "cict",
  "em",
  "and vietnam",
  "ngn",
  "enzym nutri",
  "bazan coffee",
  "ngoc huyen lb",
  "nap book",
  "lovebook(vedu corp)",
  "hicon",
  "persident cusise",
  // "quang ninh department of tourism",
  "king edu",
  "casakid",
  "casamia(interior design)",
  "com tam nam ky",
  "pho tu",
  "dobe vietnam",
  "518",
  "itc",
  "trang an inter",
  "davicon",
  "seagold",
  "sunny",
  // "cool mate",
  "hi look",
  // "es agents",
  "vietlesson",
  "dr helens",
  // "vicem haiphong",
  "ant",
  "htv tree",
  // "au group",
  // "hoa vien",
  // "hong an",
  "trangzee",
  "thanh xuan 90",
];
const dataNameImagePNG = ["hoan my service", "Fami", "FC racing", "z125"];
export default function work() {
  const renderImage = (listImage, format) => {
    const formatImg = format ? "jpg" : "png";
    return listImage.map((item, index) => {
      return (
        <li key={index} className="work-item">
          <p className="work-item__name">{item}</p>
          <div className="hide showImg">
            <LazyLoadImage
              effect="blur"
              alt={`${item}`}
              src={`/assets/images/${item}.${formatImg}`}
            />
          </div>
        </li>
      );
    });
  };

  return (
    <HomeTemplate themeClasses="light-theme">
      <div className="page work">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <ul className="list-work">
                {renderImage(dataNameImageJPG, true)}
                {renderImage(dataNameImagePNG, false)}
              </ul>
              <div className="home-info">
                <div className="home-details">
                  <div className="home-detail">Creative Agency</div>
                  <div className="home-detail">Brand Agency</div>
                  <div className="home-detail">Brand Strategy</div>
                  <div className="home-detail">Brand Identity</div>
                  <div className="home-detail">Visual Unity Solution</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
