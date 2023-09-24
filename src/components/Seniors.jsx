import { useParams } from "react-router-dom";
const Seniors = () => {
  const { degree } = useParams();

  return (
    <>
      <section className="c-block--remove-top-padding c-block b-quote b-quote__icon-crimson bg-gray-100">
        <div className="b-quote__container l-container">
          <div className="b-quote__content">
            <blockquote className="c-quote rounded-lg bg-white p-8 shadow-md">
              <div className="c-block__quote-content an-will-animate an-was-on-viewport an-on-viewport an-on-viewport-mid an-on-viewport-full">
                <div className="c-quote__text mb-4 text-3xl font-semibold">
                  No one is less because they go to a food pantry. No one
                  deserves to be hungry.
                </div>

                <div className="c-quote__cite-text">
                  <div className="c-quote__cite-name text-base font-semibold">
                    Leah Gose, Graduate School of Arts and Sciences alum
                  </div>
                  <div className="c-quote__cite-title">
                    Leah is shedding light on how we can work together to
                    provide nutritional assistance, address barriers to access,
                    and create policies that eliminate food insecurity.
                  </div>
                  <div className="c-quote__quote-cta mt-4">
                    <a
                      href="https://gsas.harvard.edu/news/hungry-change"
                      className="a-btn a-btn-secondary a-btn--arrow-right"
                    >
                      <span className="a-btn__text">
                        Read more about Leah’s work
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <cite className="c-quote__cite an-will-animate an-was-on-viewport an-on-viewport an-on-viewport-mid an-on-viewport-full">
                <span className="c-quote__cite-figure c-image">
                  <img
                    src="https://www.harvard.edu/wp-content/uploads/2023/08/LeahGose-copy-624x624.jpg"
                    alt="A woman stands outside, resting her arm on a brick wall"
                    className="c-quote__cite-image c-image__image"
                  />
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Seniors;
