import { IoIosAddCircle } from "react-icons/io";
const AddList = () => {
  return (
    <div style={{ background: "#F7FDFF" }}>
      <div className="container">
        <div className="row">
          <div className="col border ">
            <div className="col-sm-12 mt-4 p-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <h5 className="poppins-bold">
                      {" "}
                      <IoIosAddCircle
                        className="fs-2 me-3"
                        style={{ color: "#0D6EFD" }}
                      />{" "}
                      Add your own
                    </h5>
                  </h5>
                  <p className="card-text">
                    Are you a teacher or expert? Do you sell or rent out
                    equipment, venue or event tickets? Or, you know someone who
                    should be on hobbycue? Go ahead and Add your Own page
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

export default AddList;
