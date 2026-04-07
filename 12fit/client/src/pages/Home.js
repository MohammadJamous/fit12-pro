import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <section className="hero-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <span className="hero-badge mb-3 d-inline-block">
                AI Powered Sports & Fitness
              </span>

              <h1 className="display-4 fw-bold text-primary">
                Build Your Fitness Journey with 12Fit
              </h1>

              <p className="lead mt-3 text-muted">
                A smart platform that helps you create personalized workout and
                diet plans in a simple, modern, and user-friendly way.
              </p>

              <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
                {!user ? (
                  <>
                    <Link to="/register" className="btn btn-primary btn-lg px-4">
                      Start Your Plan
                    </Link>

                    <Link to="/login" className="btn btn-outline-dark btn-lg px-4">
                      Login
                    </Link>
                  </>
                ) : (
                  <Link to="/dashboard" className="btn btn-primary btn-lg px-4">
                    Go to Dashboard
                  </Link>
                )}
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src={hero}
                alt="12Fit Hero"
                className="img-fluid shadow hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Why Choose 12Fit?</h2>
          <p className="text-muted mb-5 section-subtitle">
            Designed for beginners and fitness lovers who want clear, simple,
            and personalized plans.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 feature-card">
                <div className="card-body p-4">
                  <div className="feature-icon">💪</div>
                  <h4 className="text-primary mt-3">Workout Plans</h4>
                  <p className="text-muted">
                    Smart workout suggestions based on your goals and fitness
                    level.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 feature-card">
                <div className="card-body p-4">
                  <div className="feature-icon">🥗</div>
                  <h4 className="text-success mt-3">Diet Plans</h4>
                  <p className="text-muted">
                    Personalized nutrition recommendations to support your
                    fitness journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 feature-card">
                <div className="card-body p-4">
                  <div className="feature-icon">📊</div>
                  <h4 className="text-dark mt-3">Track Progress</h4>
                  <p className="text-muted">
                    Follow your improvement and stay motivated with a clean
                    dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5 text-white">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to transform your lifestyle?</h2>
          <p className="mt-3">
            Join 12Fit and start building a stronger, healthier version of
            yourself.
          </p>

          {!user ? (
            <Link to="/register" className="btn btn-light text-dark mt-3 px-4">
              Create Account
            </Link>
          ) : (
            <Link to="/dashboard" className="btn btn-light text-dark mt-3 px-4">
              Open Dashboard
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;