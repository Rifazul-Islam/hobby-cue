import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { RxBorderSolid } from "react-icons/rx";
const Banner = () => {
  return (
    <div style={{ background: "#F7F5F9" }} className="container pt-5">
      <div className="row h-100">
        <div className="col d-flex">
          <div className=" flex-grow-1 p-2">
            <h2 className="poppins-light">
              Explore your
              <span className="ms-2" style={{ color: "#0096C8" }}>
                hobby
              </span>{" "}
              or
              <span className="ms-2" style={{ color: "#8064a2" }}>
                passion
              </span>
            </h2>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p>
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>

            <div>
              <img
                src="https://i.ibb.co/SV5f2xL/hobby-banner-pic.png"
                alt="banner-image"
              />
            </div>
          </div>
        </div>
        <div className="col d-flex">
          <div className=" flex-grow-1 p-2">
            <h6 className="mt-2 ms-3">
              <span style={{ color: "#939CA3" }}> Sign up</span>
              <span
                className="pb-1"
                style={{
                  color: "#8064a2",
                  marginLeft: "5px",
                  borderBottom: "3px solid #8064a2",
                }}
              >
                Sign in
              </span>
            </h6>
            <div className="row p-3 mt-4">
              <div className="border rounded  col-10 p-2">
                <FcGoogle className="ms-3" />
                <span className="text-center ms-5 poppins-bold">
                  Continue with Google
                </span>
              </div>
              <div className="border rounded  col-10 p-2 mt-3">
                <FaFacebook style={{ color: "#0D6EFD" }} className="ms-3 " />
                <span className="text-center ms-5 poppins-bold">
                  {" "}
                  Continue with Facebook
                </span>
              </div>
            </div>

            {/* input field used */}
            <div className="row ms-3">
              <h6 className="poppins-bold py-4 ms-5 ">
                <RxBorderSolid className="me-2" />
                Or Connect With <RxBorderSolid />
              </h6>
              <input
                className="col-10 mb-3 py-1 "
                type="text"
                placeholder="Email"
              />{" "}
              <br />
              <input
                className="col-10 py-1"
                type="password"
                placeholder="Password"
              />
              <button
                type="button"
                style={{ background: "#8064a2" }}
                className="btn mt-3 text-white col-10"
              >
                Agree and Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
