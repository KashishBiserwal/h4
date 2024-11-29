import { Outlet } from "react-router-dom";
import "./css/Layout.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ComplexNavbar } from "./Navbar";

const Layout = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="full">
      <ComplexNavbar />
      <div className="body">
        <Outlet />
      </div>
      <div className="contact-container">
        <section id="contact">
          <h2 className="font-bold text-2xl">Contact</h2>
          <br />
          <div class="contact-form">
            <div id="form">
              <form action="https://formspree.io/f/xqakyazn" method="POST">
                <div class="input">
                  <label>Name </label>
                  <input type="text" name=" name " autoComplete="off" />
                </div>
                <br />

                <div className="input">
                  <label>Phone </label>
                  <input type="number" name=" Number" autoComplete="off" />
                </div>
                <br />

                <div className="input">
                  <label>E-mail </label>
                  <input type="email" name=" Email " autoComplete="off" />
                </div>
                <br />

                <div className="input">
                  <label>Message </label>
                  <input type="text" name=" message " autoComplete="off" />
                </div>
                <br />

                <button
                  type="submit"
                  className="button bg-white text-black p-3 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>

            <div id="details">
              <h3 className="font-bold text-2xl">Contact Info</h3>
              <br />
              <div>
                <div class="contact-logo">
                  <img src="images/whatsapp.png" alt="" />
                  <p>
                    <a href="tel:7531029156">+91 7531029156</a>
                  </p>
                </div>
                <div class="contact-logo">
                  <img src="images/gmail.png" alt="" />
                  <p>
                    <a href="mailto:h4study@gmail.com">h4study@gmail.com</a>
                  </p>
                </div>
                {/* <div class="contact-logo">
                                    <img src="images/instagram.png" alt="" />
                                    <p>
                                        <a
                                            href="https://www.instagram.com/aadrshgupta6/"
                                            target="_blank" rel="noreferrer"
                                        >aadrshgupta6</a
                                        >
                                    </p>
                                </div> */}
                <div className="contact-logo">
                  <img src="images/placeholder.png" alt="" />
                  <p>vatika kunj bhondsi Gurugram (122102)</p>
                </div>
                <div className="contact-logo">
                  <img src="images/youtube.png" alt="" />
                  <a
                    href="https://www.youtube.com/@H4STUDY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @H4STUDY
                  </a>
                </div>
                <div className="contact-logo">
                  <img src="images/telegram.png" alt="" />
                  <a
                    href="https://t.me/H4STUDY1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    H4STUDY1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer id="footer">
        <div>
          <p>H4STUDY © 2024</p>
          {/* <br></br> */}
          {/* <p>Aadrsh Gupta</p> */}
        </div>
        <div>
          {/* <p>Passionate Education</p> */}
          {/* <br></br> */}
          {/* Website by Kashish Biserwal */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
