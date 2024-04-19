import React, { Fragment } from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const photos = [
  {
    src: "https://s3-alpha-sig.figma.com/img/0771/da48/6c68f24b9d58d5ad17471b825d1dd751?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NtWi64~WOQsF5ZDMiXbpaecK~E1P5lZLICotVgsLnHdVtSp7ECDTPxe6~a5v8MsWlxMOl3m73XFLsx~Mj1E9Qqbv4zDu0Fa5s0NjnFUG3LYd5x4JaRYVUAetaf2oMaQjSErrAUhmpjbWD3oYdVUQKbKw0tSi4dbido1IevRtONhHe---isOUUz2TkxHFrds2Uut9ptEuKVcchdnKrQ8wapFXAPC7sVgbS3lnw7klO0Xtc-GvWtApGZpXToLn5iicK0RNEqVKzDt8XB3IJksQCI5BlgoKHu9QBiiq5nIZW2OXOyRcRKLQCMV1ezToyIKIjhRBCfSwZolHSb80LTf9mw__,",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/1891/23d5/1d4f865f9e55c2d08670d271c2d4a934?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NEGWmO3VmoXhNu~2YetCyxDdofxnwWXg7wqZPWxKabbCxsEFvcle17mHp7EYeP8dG2z3G5UIOe91g6aU7R7DBUcF~0UfZAfhRfHvLpamQ0HgleJLvLkL4bUOgN59VUEAPybuUJc5cTttx2L79gcxdx5DdYiDUQJzzlwk9E2NXxiW~fZImmi~QDDhtzGxOIBY8lRfxoVZxWy~kdaMw9x1ccwfsSLM5iKJx8yW4TaEZ2dk-YMjXlz2fViYdayu6Huiq3krqNj7yL9A1XcrblYnRIMvnAxFDPTTUV2akL4~n~XskFyU-j01wrXmx91xR~RziO~FawI1eo3~lD4IVjRNVw__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/18e1/b9c5/87b17479f9fa9f86613323d21ef24e54?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RJHeiAgAZf~1S4hJoFbA081syHntS0npOe4i5jv8NRUABaRlmLIj2p48IQ2AT2TvfXCrVc3Ws-DLk6dhFoGiHVJNNKi-5LLLMot5tipAfWKB1kW45XzoyWRX7Hg~ktBhVUBPlMire707gO~1w0t-iNcASTpUSF63FFSUc4dahZBl2qtQPC1RP5ddU3SuPtEMNmNWH~kGL9Yf9AwrnEke~Qoa1uOQCWuAiAN-JBT~Qo26YqOmf0Ce8zDWvgg32effCPM0orFTJWkiDbL5hZafvc-FYwrf0TZtMslqcflvNqYXRitVEahzFddLw1YgcbVsFK5kmWavYD~RG6c05o8n1Q__",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/8167/1f0d/fbad083c7a1027a02f5f9cfb045f092d?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AvKVrFyxjBccr2Fns9OUSoTHZ1NJdgfwdjL5yKu4~81O-ihLfb9x3eIzGB~cFKx-hvRdXu7XkzyWWU0vo1bm0v-C1bmBI9X~P735G050c-IxRVTBosvBxzWfCLkGyw2YNa6dqHEWltiu91Dv0FrDDHs9Ddcm3e34PXV37cBEAs7LP8kEeBXaCWAHWKyNKZtmK8fUIilpqYhOL2vCd6R~Oxsq5x5MtPjzRz5Ptneo-BHjoErX7Vx04PzPP0bP-X~uYDvnqiuna~V1aIRbfNQE6zLs2juhJbqK49wpwdI56UQhaJhMdMoD8eff3m4fdKaWRizYk9hJBmXr4CcdhWiAyg__",
  },

  {
    src: "https://s3-alpha-sig.figma.com/img/b57c/aeeb/4fdd2ea165f729eebcb3413f3e9c5936?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qAlNniKMb-L8FWLq~Zw6vWOjn5A5xw0539sCmWXIL6YPPiDTa-Lmmog4D4R8MVTMO9y-Z0JyaD3SpaB8fD6ZdsKEN97cJhLn89VUEfSTONTG9b38bHDypDPrUdPkh11nVlPObE62BkShK8RF8MFtnf~O5mWthZwoXT10cb9nDcFbBn86U3rzlVKQvl3gFG60vREh~HuUqKFqnXZncgvT6sBhaosF3X-75SNoRQcz3HpZy-wnd19f-~Lxmcbbs~kQnC7hQHoGkic3lPXo2x2gj9BD8qELwlDnPdaTlbK0bAYTFmHFS9U6yPyrF-nSaR7jOAlUmOahHwKzYDvSMo8HMg__",
  },
];

const PartnerCarousel = () => {
  const breakpoint = {
    310: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1030: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  };
  return (
    <Fragment>
      <section className=" mt-5">
        <div className="row justify-content-center">
          <div className="col-md-3 col-xl-3 col-sm-12">
            <p>
              Trusted by more then 100+
              <br />
              Companies across the globe
            </p>
          </div>
          <div className="col-md-8 col-xl-8 col-sm-12">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={4}
              breakpoints={breakpoint}
              loop={true}
              autoplay={{
                delay: 100,
              }}
              speed={4000}
            >
              {photos.map((photos, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" portfolio-card">
                      <div className="portfolio-card-details">
                        <img
                          src={photos.src}
                          alt=""
                          className="port-img"
                          style={{ width: "150px" }}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PartnerCarousel;
