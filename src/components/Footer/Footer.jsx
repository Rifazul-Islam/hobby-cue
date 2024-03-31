import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { RiParkingBoxFill } from "react-icons/ri";
import { FaGooglePlusSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer bg-light pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Hobby cue</h5>
            <ol className="list-unstyled ">
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  About me
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Work with us
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Contact us
                </Link>
              </li>
            </ol>
          </div>
          <div className="col-md-3">
            <h5>How Do I</h5>

            <ol className="list-unstyled ">
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Add a Listing
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Post a Query
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Add a blog post
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Other Queries
                </Link>
              </li>
            </ol>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ol className="list-unstyled ">
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Listings
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Blogs Post
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Shape
                </Link>
              </li>
              <li>
                <Link to="#" className="no-text-decoration text-dark">
                  Community
                </Link>
              </li>
            </ol>
          </div>
          <div className="col-md-3">
            <h5>Social Media</h5>
            <div style={{ color: "#8064A2" }} className="fs-5">
              <FaFacebook /> <AiFillTwitterCircle className="ms-3 me-3" />{" "}
              <FaInstagramSquare />
              <RiParkingBoxFill className="ms-3 me-3" />{" "}
              <FaGooglePlusSquare className=" me-3" /> <MdEmail />
            </div>
            <h5 className="my-2">Invite Friends</h5>
            <form className=" ">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email Id"
                  aria-label="Input group example"
                  aria-describedby="btnGroupAddon2"
                />
                <div
                  className="input-group-text custom-bg-color cursor-pointer text-white"
                  id="btnGroupAddon2"
                >
                  invite
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div style={{ background: "#DDDDDD" }} className=" my-2">
        <p className="text-center py-3"> © Purple Cues Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
