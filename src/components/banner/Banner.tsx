import React, { ReactNode } from "react";

import hourglassIcon from "../../resources/icons/hourglass.svg";
import levelIcon from "../../resources/icons/level.svg";

import "../Banner/banner.scss";

interface BannerProps {
  title: string;
  description?: string;
  backgroundColor?: string;
  backgroundImg?: string;
  time?: string;
  level?: string;
  children?: ReactNode;
}

const Banner = ({
  title,
  description,
  time,
  level,
  backgroundColor,
  backgroundImg,
  children,
}: BannerProps) => {
  return (
    <section className="banner">
      <div className="container">
        <div className={backgroundImg}>
          {children}
          <div className={backgroundColor}>
            <h1 className="banner__title">{title}</h1>

            {description && <p className="banner__descr">{description}</p>}

            {(time || level) && (
              <div className="banner__details">
                <div className="banner__detail">
                  <div className="banner__icon">
                    <img src={hourglassIcon} alt="hourglass icon" />
                  </div>
                  <span className="banner__detail-text">{time} mins</span>
                </div>
                <div className="banner__detail">
                  <div className="banner__icon">
                    <img src={levelIcon} alt="level icon" />
                  </div>
                  <span
                    className="banner__detail-text"
                    data-value={level?.toLowerCase()}
                  >
                    {level}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
