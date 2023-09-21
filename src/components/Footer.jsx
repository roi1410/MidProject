
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-section bg-gray-900 text-white py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col mb-6 md:mb-0">
              <div className="mb-4">
                <i className="fas fa-map-marker-alt text-orange-500 text-2xl mb-2"></i>
                <h4 className="text-xl font-semibold">Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
            <div className="flex flex-col mb-6 md:mb-0">
              <div className="mb-4">
                <i className="fas fa-phone text-orange-500 text-2xl mb-2"></i>
                <h4 className="text-xl font-semibold">Call us</h4>
                <span>9876543210</span>
              </div>
            </div>
            <div className="flex flex-col mb-6 md:mb-0">
              <div className="mb-4">
                <i className="far fa-envelope-open text-orange-500 text-2xl mb-2"></i>
                <h4 className="text-xl font-semibold">Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="mb-10 md:mb-0">
                <div className="footer-logo">
                  <a href="index.html">
                    <img
                      src="https://i.ibb.co/QDy827D/ak-logo.png"
                      className="max-w-xs mx-auto"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="footer-text text-gray-400 text-sm mt-4">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididuntut consectetur adipisicing
                    elit, Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="footer-social-icon mt-4">
                  <span className="text-white font-bold text-lg mb-2">
                    Follow us
                  </span>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/"
                    className="mr-2"
                  >
                    <img
                      src="https://img.icons8.com/color/48/facebook.png"
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="https://twitter.com/home" className="mr-2">
                    <img
                      src="https://img.icons8.com/fluency/48/twitterx--v1.png"
                      alt="Twitter"
                      className="w-8 h-8"
                    />
                  </a>
                  <a href="#" className="mr-2">
                    <i className="fab fa-google-plus-g text-red-500 bg-white rounded-full w-8 h-8 flex items-center justify-center"></i>
                  </a>
                </div>
              </div>
              <div className="mb-10 md:mb-0">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3 className="text-xl font-semibold">
                      What is a university
                    </h3>
                    <div className="bg-orange-500 h-2 w-20 mt-2"></div>
                  </div>
                  <div className="footer-text text-gray-400 text-sm mt-4">
                    <p>
                      A university (from Latin universitas 'a whole') is an
                      institution of higher (or tertiary) education and research
                      which awards academic degrees in several academic
                      disciplines. Universities typically offer both
                      undergraduate and postgraduate programs. In the United
                      States, the designation is reserved for colleges that have
                      a graduate school.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
