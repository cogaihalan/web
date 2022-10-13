import React from "react";
import HomeTemplate from "../template/HomeTemplate";
import Logo from "../components/Layout/Logo";
export default function about() {
  return (
    <HomeTemplate themeClasses="dark-theme">
      <div className="page about">
        <div className="container">
          <div className="page-container">
            <div className="page-content">
              <h1 className="page-heading">UOVO - Positioning Statement</h1>
              <div className="page-item">
                <p className="page-item__heading">- Explorer/ Experience:</p>
                <div className="page-item__desc">
                  UOVO always cares about the experience of customers as well as
                  the staff. If we don&apos;t experience much, we won&apos;t be
                  able to understand the difference between industries. And
                  without much experience, the design will made lack the
                  hands-on experience as well as ability to manage risks.
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">- Ruler/ Discipline:</p>
                <div className="page-item__desc">
                  Each individual in UOVO must keep good discipline, obey the
                  high standard of work and be punctual. No creativity is
                  created by carelessness, it is discipline that brings
                  creativity. UOVO always has responsibility for each product
                  created and discipline is indispensable to achieve the highest
                  responsibility.
                </div>
              </div>
              <div className="page-item">
                <p className="page-item__heading">- Sage/ Understanding:</p>
                <div className="page-item__desc">
                  UOVO is always ready to listen to all customer issues. We come
                  up with solution by carefully defining and digging into the
                  factors. At UOVO, personal bias is not priority as our
                  guideline for work is understanding.
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
