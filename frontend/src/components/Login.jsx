import React from "react";
import { useRef } from "react";
import Img1 from "../assets/LOGOOO.jpg";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../reduxStores/actions/sellerAction";
import { connect } from "react-redux";

function Login({ sellers, login, error }) {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailq = email.current.value;
    const passwordq = password.current.value;
    console.log(emailq, passwordq);
    try {
      await login(emailq, passwordq);
      navigate("/seller");
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Login failed: Please cheak your credential");
      } else {
        alert("Login failed: Please cheak your credential");
        // setError("An error occurred. Please try again."); // Generic error message
      }
    }
  };

  return (
    <>
      <section className="" style={{ backgroundColor: "#9c86b9" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{
                        borderRadius: "1rem 0 0 1rem",
                        height: "100%",
                        width: "400px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center ">
                    <div className="card-body p-3 p-lg-5 text-black">
                      <div className="d-flex justify-content-start align-items-center mb-4">
                        <img src={Img1} alt="here" height="185px" />
                        <h2
                          className="fw-normal mb-3 pb-3 text-center fw-bold mt-4"
                          style={{ letterSpacing: "1px" }}
                        >
                          APNA STORE
                        </h2>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            ref={email}
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="email">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            ref={password}
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <Link to="/signup" style={{ color: "#393f81" }}>
                            Register here
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  sellers: state.sellerStore.sellers,
  error: state.sellerStore.error,
});

const mapDispatchToProps = {
  login: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
