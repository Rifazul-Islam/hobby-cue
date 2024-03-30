import { IoIosPeople } from "react-icons/io";
import { GiBeachBag } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa";
const MultipleService = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col ">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    <IoIosPeople
                      className="fs-2 me-3"
                      style={{ color: "#8064A2" }}
                    />{" "}
                    People
                  </h5>
                  <p className="card-text">
                    Find a teacher, coach, or expert for your hobby interest in
                    your locality. Find a partner, teammate, accompanist or
                    collaborator.
                  </p>
                  <button type="button" className="btn btn-outline-secondary">
                    Connect
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 mt-4 ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {" "}
                    <GiBeachBag
                      className="fs-2 me-3"
                      style={{ color: "#C0504D" }}
                    />{" "}
                    Product
                  </h5>
                  <p className="card-text">
                    Find a teacher, coach, or expert for your hobby interest in
                    your locality. Find a partner, teammate, accompanist or
                    collaborator.
                  </p>
                  <button type="button" className="btn btn-outline-secondary">
                    Got it
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="col-sm-12 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <IoLocation
                    className="fs-2 me-3"
                    style={{ color: "#77933C" }}
                  />
                  Place
                </h5>
                <p className="card-text">
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </p>
                <button type="button" className="btn btn-outline-secondary">
                  Meet up
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-12 mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <FaCalendarCheck
                    className="fs-3 me-3"
                    style={{ color: "#0D6EFD" }}
                  />
                  Program
                </h5>
                <p className="card-text">
                  Find a teacher, coach, or expert for your hobby interest in
                  your locality. Find a partner, teammate, accompanist or
                  collaborator.
                </p>
                <button type="button" className="btn btn-outline-secondary">
                  Attend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleService;
