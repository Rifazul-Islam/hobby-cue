import { BiSolidSearch } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa6";
import { MdStars } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="bg-light">
      <nav className="navbar navbar-expand-lg navbar-light  mb-5 ms-5">
        <div className="container-fluid">
          <a className="navbar-brand " href="/">
            <img
              style={{ width: "280px" }}
              src="https://i.ibb.co/9vsg8SH/hobby-logo.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                />
                <div
                  className="input-group-text custom-bg-color cursor-pointer text-white"
                  id="btnGroupAddon2"
                >
                  <BiSolidSearch />
                </div>
              </div>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5 poppins-bold">
              <li className="nav-item dropdown me-5">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdExplore style={{ fontSize: "22px", color: "#8064a2" }} />{" "}
                  Explore
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown poppins-bold ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <MdStars style={{ fontSize: "22px", color: "#8064a2" }} />{" "}
                  Hobby
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <div className="mt-2 ms-4">
                <FaBookmark style={{ fontSize: "22px", color: "#8064a2" }} />
                <IoMdNotifications
                  style={{
                    fontSize: "30px",
                    color: "#8064a2",
                    margin: "0px 20px",
                  }}
                />
                <FaShoppingCart
                  style={{ fontSize: "22px", color: "#8064a2" }}
                />

                <button type="button" className="btn btn-outline-danger ms-5">
                  Sign In
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
