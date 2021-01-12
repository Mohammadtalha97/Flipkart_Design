import React from "react";
import "./style.css";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import logo from "./img/logo.png";
import plus from "./img/plus.png";
const Testing = () => {
  return (
    <>
      {/* Header */}
      <div className="my_header">
        <div className="my_header_top">
          <a href="#1" style={{ float: "left" }}>
            <img style={{ width: "75px" }} src={logo} alt="logo" />
            <div style={{ position: "relative", top: "-10px" }}>
              <span
                style={{
                  fontStyle: "italic",
                  color: "#fff",
                  fontSize: "0.7em",
                }}
              >
                Explore
              </span>
              &nbsp;
              <span
                style={{
                  fontStyle: "italic",
                  color: "#ffe500",
                  fontSize: "0.7em",
                }}
              >
                Plus
              </span>
              <img style={{ width: "10px" }} src={plus} alt="plus" />
            </div>
          </a>
          <form className="searchForm">
            <input
              type="text"
              placeholder="Search for products, brands and more"
            />
            <button type="submit" className="btn">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
          <ul className="nav nav-pills my_header_top_ul">
            <li className="nav-item">
              <a className="nav-link " href="#login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#login">
                More <i className="fa fa-chevron-down"></i>
              </a>
              <ul className="my_subMenu nav flex-column">
                <li className="nav-item">
                  <i className="fa fa-bell"></i>
                  <a className="nav-link" href="#3ds">
                    Notification Prefereces
                  </a>
                </li>
                <li className="nav-item">
                  <i className="fa fa-briefcase"></i>
                  <a className="nav-link" href="#3ds">
                    Sell On Flipkart
                  </a>
                </li>
                <li className="nav-item">
                  <i className="fa fa-bell"></i>
                  <a className="nav-link" href="#3ds">
                    24 X 7 Customer Support
                  </a>
                </li>
                <li className="nav-item">
                  <i className="fa fa-line-chart"></i>
                  <a className="nav-link" href="#3ds">
                    Advertise
                  </a>
                </li>
                <li className="nav-item">
                  <i className="fa fa-question-circle"></i>
                  <a className="nav-link" href="#3ds">
                    Download App
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#login">
                <i className="fa fa-shopping-cart"></i>&nbsp;Cart
              </a>
            </li>
          </ul>
        </div>
        <div className="my_header_bottom ">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="#3">
                Electronics <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                TVs &amp; Appliances <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Men <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Women <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Baby &amp; Kids <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Home &amp; Furniture <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Sports, Books &amp; More <i className="fa fa-chevron-down"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#2">
                Offer Zone
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Main */}
      <div className="container-fluid my_container">
        {/* Main_1 */}
        <div className="my_main_1">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={{ width: "1350px", height: "278px" }}
                  src={img1}
                  className="d-block w-100"
                  alt="1"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "1350px", height: "278px" }}
                  src={img2}
                  className="d-block w-100"
                  alt="2"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "1350px", height: "278px" }}
                  src={img3}
                  className="d-block w-100"
                  alt="3"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "1350px", height: "278px" }}
                  src={img4}
                  className="d-block w-100"
                  alt="4"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev my_carousel_control"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <i class="fa fa-chevron-left" aria-hidden="true"></i>

              <span className="visually-hidden">Previous</span>
            </a>
            <a
              className="carousel-control-next my_carousel_control"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <i class="fa fa-chevron-right" aria-hidden="true"></i>

              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
        {/* Main_2 */}
        <div className="my_main_2">
          {/* 10 */}
          <div className="row">
            <div className="col-md-10 my_10_bgWhite">
              {/* Top */}
              <div className="my_10_top">
                <h4> Deals Of The Day</h4>
                <a href="#123" className="btn btn-sm btn-primary ">
                  {" "}
                  View All
                </a>
              </div>
              {/* Bottom */}
              <div
                id="carouselExampleControls1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="my_carousel_box">
                      <div className="row">
                        <div className="col">1</div>
                        <div className="col">2</div>
                        <div className="col">3</div>
                        <div className="col">4</div>
                        <div className="col">5</div>
                        <div className="col">6</div>
                      </div>
                    </div>
                    {/* <img
                      style={{ width: "1350px", height: "278px" }}
                      src={img1}
                      className="d-block w-100"
                      alt="1"
                    /> */}
                  </div>
                  <div className="carousel-item">
                    <div className="my_carousel_box">
                      <div className="row">
                        <div className="col">7</div>
                        <div className="col">8</div>
                        <div className="col">9</div>
                        <div className="col">10</div>
                        <div className="col">11</div>
                        <div className="col">12</div>
                      </div>
                    </div>
                    {/* <img
                      style={{ width: "1350px", height: "278px" }}
                      src={img2}
                      className="d-block w-100"
                      alt="2"
                    /> */}
                  </div>
                  <div className="carousel-item">
                    <div className="my_carousel_box">
                      <div className="row">
                        <div className="col">13</div>
                        <div className="col">14</div>
                        <div className="col">15</div>
                        <div className="col">16</div>
                        <div className="col">17</div>
                        <div className="col">18</div>
                      </div>
                    </div>
                    {/* <img
                      style={{ width: "1350px", height: "278px" }}
                      src={img3}
                      className="d-block w-100"
                      alt="3"
                    /> */}
                  </div>
                  <div className="carousel-item">
                    <div className="my_carousel_box">
                      <div className="row">
                        <div className="col">19</div>
                        <div className="col">20</div>
                        <div className="col">21</div>
                        <div className="col">22</div>
                        <div className="col">23</div>
                        <div className="col">24</div>
                      </div>
                    </div>
                    {/* <img
                      style={{ width: "1350px", height: "278px" }}
                      src={img4}
                      className="d-block w-100"
                      alt="4"
                    /> */}
                  </div>
                </div>
                <a
                  className="carousel-control-prev my_carousel_control"
                  href="#carouselExampleControls1"
                  role="button"
                  data-bs-slide="prev"
                >
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>

                  <span className="visually-hidden">Previous</span>
                </a>
                <a
                  className="carousel-control-next my_carousel_control"
                  href="#carouselExampleControls1"
                  role="button"
                  data-bs-slide="next"
                >
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>

                  <span className="visually-hidden">Next</span>
                </a>
              </div>
            </div>
            {/* 2 */}
            <div className="col-md-2 my_2"></div>
          </div>
        </div>
        {/* Main_3 */}
        <div className="my_main_3"></div>
        {/* Main_4 */}
        <div className="my_main_4"></div>
        {/* Main_5 */}
        <div className="my_main_5"></div>
        {/* Main_6 */}
        <div className="my_main_6"></div>
      </div>
      {/* Footer */}
      <div className="my_footer"></div>
    </>
  );
};

export default Testing;
