import { RiChatQuoteFill } from "react-icons/ri";
const Testimonials = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div style={{ background: "#F7FDFF" }} className="row">
          <div className="col  ">
            <div className="col-sm-12 mt-4 p-4">
              <div style={{ background: "#F7F5F9" }} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <h5 className="poppins-bold">
                      {" "}
                      <RiChatQuoteFill
                        className="fs-2 me-3"
                        style={{ color: "#8064a2" }}
                      />{" "}
                      Testimonials
                    </h5>
                  </h5>
                  <p className="card-text">
                    In a fast growing and ever changing city like Bangalore, it
                    sometimes becomes very difficult to find or connect with
                    like minded people. Websites like hobbycue.com is a great
                    service which helps me get in touch with, communicate,
                    connect, and exchange ideas with other dancers. It also
                    provides the extra benefit of finding products and services
                    that I can avail, which I can be assured is going to be of
                    great quality as it comes recommended by people of the
                    hobbycue community. To have discussions, to get visibility,
                    and to be able to safely explore various hobbies and
                    activities in my city, all under one roof, is an excellent
                    idea and I highly recommend it.
                  </p>
                  <button type="button" className="btn btn-outline-secondary">
                    Add new
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
