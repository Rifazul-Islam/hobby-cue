const Community = () => {
  return (
    <div>
      <div className="container">
        <div style={{ background: "#F7FDFF" }} className="row">
          <div className="col  ">
            <div className="col-sm-12 mt-4 p-4">
              <h4 className="poppins-light">
                Your
                <span className="ms-2" style={{ color: "#8064a2" }}>
                  hobby
                </span>{" "}
                Your
                <span className="ms-2" style={{ color: "#0096C8" }}>
                  Community
                </span>
              </h4>
              <button
                type="button"
                style={{ background: "#8064a2" }}
                className="btn  mt-2 text-white"
              >
                Get Started
              </button>
            </div>
          </div>

          <img
            className="my-4"
            src="https://i.ibb.co/myvByFt/community.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Community;
