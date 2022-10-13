import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Logo from "../components/Layout/Logo";

export default function wedo() {
  return (
    <HomeTemplate themeClasses="light-theme">
      <div className="page wedo">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <h3 className="page-subheading">
                We specialize in brand design consultancy, creating brand
                strategies according to international standard methods.
              </h3>
              <div className="page-item">
                <p className="page-item__heading">What we do:</p>
                <div className="page-item__desc">
                  <p>
                    - Design Logo & Brand Identity (Designs For Business Model)
                  </p>
                  <p>- Design Packaging & Gift Boxes.</p>
                  <p>- Long-term Graphic Design For Business</p>
                  <p>- Product Photography, Brand Photography.</p>
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">Product objective:</p>
                <div className="page-item__desc">
                  <p>
                    - At UOVO, the products are not only beautiful or engaging
                    but also suitable for customer&apos;s brand characteristics.
                  </p>
                  <p>
                    - At UOVO, the products are in line with practical
                    application to help businesses optimize costs.
                  </p>
                  <p>
                    - At UOVO, the products are in line with the customer&apos;s
                    core business model(Designs For Business Model) and the
                    positioning of the product. (Category First - Brand Second)
                  </p>
                </div>
              </div>
            </div>
            <Logo theme="light-theme"></Logo>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
