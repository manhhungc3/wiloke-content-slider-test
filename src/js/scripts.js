(function () {
  // @ComponentName
  const componentName = "wiloke-content-slide-test";

  async function init() {
    wiloke.loadStyle({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.css",
    });
    wiloke.loadStyle({
      file: `https://dev-magicbadges.myshopkit.app/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
    });
    wiloke.loadStyle({
      file: `https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`,
    });
    await wiloke.loadScript({
      file: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.2.0/swiper-bundle.min.js",
    });
    wiloke.loadStyle({
      file: `https://envato-element-js-core.netlify.app/main.css`,
    });

    wiloke.elementor(`.${componentName}-wrapper`, componentName, async (el) => {
      if (!!el) {
        wiloke.skeleton(el, componentName);
        const swiperEl = el.querySelector(".wil-swiper");

        const swiperInstance = wiloke.swiper(swiperEl);
        const swiper1 = el.querySelector(`.${componentName}-swiper1`);

        if (swiper1) {
          const boxEls = el.querySelectorAll('.wiloke-1-box');
          boxEls[swiperInstance.activeIndex + 1].style.opacity = "1";
          swiperInstance.on('slideChange', function () {
            if(swiperInstance.params.slidesPerView == 1) {
              boxEls.forEach(boxEl => {
                boxEl.style.opacity = "0"
              });
              boxEls[swiperInstance.activeIndex].style.opacity = "1";

            } else {
              boxEls.forEach(boxEl => {
                boxEl.style.opacity = "0"
              });
              boxEls[swiperInstance.activeIndex + 1].style.opacity = "1";
            }

          });

          swiperInstance.on('resize', function () {
            if(swiperInstance.params.slidesPerView == 1) {
              boxEls.forEach(boxEl => {
                boxEl.style.opacity = "0"
              });
              boxEls[swiperInstance.activeIndex].style.opacity = "1";

            } else {
              boxEls.forEach(boxEl => {
                boxEl.style.opacity = "0"
              });
              boxEls[swiperInstance.activeIndex + 1].style.opacity = "1";
            }

          })
        }
        const swiper2 = el.querySelector(`.${componentName}-swiper2`);
        if (swiper2) {
          const currentPageEls = el.querySelectorAll('.number-of-page');
          currentPageEls.forEach(currentPageEl => {
            currentPageEl.innerText = `${swiperInstance.activeIndex + 1 > 9 ? `${swiperInstance.activeIndex + 1}` : `0${swiperInstance.activeIndex + 1}` }` ;
            swiperInstance.on('slideChange', () => {
              currentPageEl.innerText = `${swiperInstance.activeIndex + 1 > 9 ? `${swiperInstance.activeIndex + 1}` : `0${swiperInstance.activeIndex + 1}` }`;
            })
          })

          const nextBtnEls = el.querySelectorAll(".btn-next");
          nextBtnEls[nextBtnEls.length - 1].classList.add("end");
          nextBtnEls.forEach(nextBtnEl => {
            nextBtnEl.addEventListener('click', () => {
              swiperInstance.slideNext()
            })
          });
          const prevBtnEls = el.querySelectorAll(".btn-prev");
          prevBtnEls[0].classList.add("end");
          prevBtnEls.forEach(prevBtnEl => {
            prevBtnEl.addEventListener('click', () => {
              swiperInstance.slidePrev()
            })
          });
        }

        const BG3NodeList = el.querySelectorAll('.wiloke-3-BGContainer');
        const swiper3 = el.querySelector(`.${componentName}-swiper3`);
        if(swiper3) {
          const currentPage3El = el.querySelector('.number-page-3');
          const contentEls = el.querySelectorAll('.wiloke-3-content');

          contentEls.forEach((contentEl, index) => {
            function handleBackground() {
              BG3NodeList.forEach(el => el.style.opacity = 0);
              BG3NodeList[index].style.opacity = 1;
            }
            currentPage3El.innerText = '01';
            contentEl.addEventListener('click', () => {

              currentPage3El.innerText = `${index + 1 > 9 ? `${index + 1}` : `0${index + 1}` }`;
              handleBackground();
              contentEls.forEach(contentEl => {
                contentEl.classList.remove('contentBGActive');

              })
              contentEl.classList.add('contentBGActive')

            })

          })
        }

        const BG4NodeList = el.querySelectorAll('.wiloke-4-BGContainer');
        const swiper4 = el.querySelector(`.${componentName}-swiper4`);
          if (swiper4) {
            const currentPage4Els = el.querySelectorAll('.number-page-4');
            currentPage4Els.forEach(currentPageEl => {
              currentPageEl.innerText = `${swiperInstance.realIndex + 1 > 9 ? `${swiperInstance.realIndex + 1}` : `0${swiperInstance.realIndex + 1}` }` ;
              swiperInstance.on('slideChange', () => {
                currentPageEl.innerText = `${swiperInstance.realIndex + 1 > 9 ? `${swiperInstance.realIndex + 1}` : `0${swiperInstance.realIndex + 1}` }`;
              })
            })
            const nextBtn4El = el.querySelector(".swiper-button-4-next");
            nextBtn4El.addEventListener('click', () => {
              swiperInstance.slideNext();
            });
            swiperInstance.on('slideChange', () => {
              if(swiperInstance.isEnd && !swiperInstance.params.loop) {
                nextBtn4El.classList.add("end")
              } else {
                nextBtn4El.classList.remove("end")
              }
            });
            const prevBtn4El = el.querySelector(".swiper-button-4-prev");
            prevBtn4El.addEventListener('click', () => {
              swiperInstance.slidePrev();
            })
            if(swiperInstance.isBeginning && !swiperInstance.params.loop) {
              prevBtn4El.classList.add("end");
            }
            swiperInstance.on('slideChange', () => {
              if(swiperInstance.isBeginning && !swiperInstance.params.loop) {
                prevBtn4El.classList.add("end")
              } else {
                prevBtn4El.classList.remove("end")
              }
            });

            function handleBackground() {
              BG4NodeList.forEach(el => el.style.opacity = 0);
              BG4NodeList[swiperInstance.realIndex].style.opacity = 1;
            }
            handleBackground();
            swiperInstance.on('slideChange', handleBackground);
          }
        }
    });
  }


  if (window.wiloke) {
    init();
  } else {
    const coreJs = "https://envato-element-js-core.netlify.app/main.js";
    const coreJsEl = document.createElement("script");
    coreJsEl.src = coreJs;
    document.body.appendChild(coreJsEl);
    coreJsEl.addEventListener("load", init);
  }
})();
