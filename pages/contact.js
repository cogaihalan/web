import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Logo from "../components/Layout/Logo";
import Image from "next/image";
export default function contact() {
  return (
    <HomeTemplate themeClasses="dark-theme">
      <div className="page contact">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <div className="page-contact">
                <h3 className="page-heading">
                  We look forward to questions, discussions, and collaborations.
                </h3>
                <a className="page-email" href="mailto:hello@uovo.agency">
                  hello@uovo.agency
                </a>
              </div>
              <div className="page-brand">
                <div className="page-brand__scan">
                  <div>
                    <Image
                      className="image-scan"
                      src="/assets/qr1.png"
                      alt="uovo-social-media"
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div>
                    <Image
                      className="image-scan"
                      src="/assets/qr2.png"
                      alt="uovo-social-media"
                      width="100px"
                      height="100px"
                    />
                  </div>
                </div>
                <div className="page-brand__intro">
                  Hello!
                  <br />
                  UOVO is an agency based in Hanoi since 2018.
                  <br />
                  We aim for unfolding your brand story, mapping great brand
                  strategies and letting them to win customer&apos;s mind. Your
                  story is what inspired us!
                </div>
              </div>
            </div>
            <Logo theme="dark-theme"></Logo>
          </div>
        </div>
      </div>
    </HomeTemplate>
  );
}
