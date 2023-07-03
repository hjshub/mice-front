//
//-----------------------------------------------------------------
// 공통 스크립트
//-----------------------------------------------------------------
//

const gb = (function () {
  return {
    wW: window.innerWidth,
    wH: window.innerHeight,
    html: $('html'),
    body: $('body'),
    layout: $('#layout'),
    main: $('.main'),
    header: $('#gnb'),
    listSwiper: $('.list-swiper').get(),
    listSwiper2: $('.list-swiper2').get(),
    btnActiveModal: $('.button-active-modal'),
    btnCloseModal: $('.button-close-modal'),
    btnActiveTooltip: $('.button-active-tooltip'),
    isMob: window.innerWidth <= 821 ? true : false,
    isFocus: false,
  };
})();

window.addEventListener('load', () => {
  gb.CommonFunction.init();

  if (gb.main.length) gb.CommonFunction.zoomIn();
  if (gb.listSwiper.length) gb.CommonFunction.listSwiper();
  if (gb.listSwiper2.length) gb.CommonFunction.listSwiper2();
});

gb.CommonFunction = (function () {
  const zoomIn = () => {
    gb.dialog = document.querySelectorAll('.dialog');
    gb.visualWrap = document.querySelector('.visual-wrap');
    gb.btnDialogOff = document.querySelectorAll('.btn-dialog-off');

    const zoomInLeftBottom = (t) => {
      goScrollTop();
      gsap.to(gb.visualWrap, {
        transformOrigin: '0% 100%',
        ease: 'none',
        onComplete: function () {
          gb.visualWrap.classList.add('zoom--In');
          t.style.opacity = 0;
          t.style.visibility = 'hidden';
          t.nextElementSibling.style.opacity = 1;
          t.nextElementSibling.style.pointerEvents = 'auto';
          $('.dialog').not($(t)).closest('div').addClass('blur');
        },
      });
      gb.isFocus = true;
      //console.log('알림1');
    };

    const zoomInCenterTop = (t) => {
      goScrollTop();
      gsap.to(gb.visualWrap, {
        transformOrigin: '50% 10%',
        ease: 'none',
        onComplete: function () {
          gb.visualWrap.classList.add('zoom--In');
          t.style.opacity = 0;
          t.style.visibility = 'hidden';
          t.nextElementSibling.style.opacity = 1;
          t.nextElementSibling.style.pointerEvents = 'auto';
          $('.dialog').not($(t)).closest('div').addClass('blur');
        },
      });
      gb.isFocus = true;
      //console.log('알림2');
    };

    const zoomInRightBottom = (t) => {
      goScrollTop();
      gsap.to(gb.visualWrap, {
        transformOrigin: '100% 80%',
        ease: 'none',
        onComplete: function () {
          gb.visualWrap.classList.add('zoom--In');
          t.style.opacity = 0;
          t.style.visibility = 'hidden';
          t.nextElementSibling.style.opacity = 1;
          t.nextElementSibling.style.pointerEvents = 'auto';
          $('.dialog').not($(t)).closest('div').addClass('blur');
        },
      });
      gb.isFocus = true;
      //console.log('알림3');
    };

    gb.dialog.forEach((el, idx) => {
      el.addEventListener('mouseenter', function () {
        if (!gb.isFocus) {
          if (idx == 0) {
            gb.zoomInLeftBottom = setTimeout(function () {
              zoomInLeftBottom(el);
            }, 600);
          }
          if (idx == 1) {
            gb.zoomInCenterTop = setTimeout(function () {
              zoomInCenterTop(el);
            }, 600);
          }
          if (idx == 2) {
            gb.zoomInRightBottom = setTimeout(function () {
              zoomInRightBottom(el);
            }, 600);
          }
        }
      });

      el.addEventListener('touchstart', function () {
        if (!gb.isFocus) {
          if (idx == 0) {
            gb.zoomInLeftBottom = setTimeout(function () {
              zoomInLeftBottom(el);
            }, 600);
          }
          if (idx == 1) {
            gb.zoomInCenterTop = setTimeout(function () {
              zoomInCenterTop(el);
            }, 600);
          }
          if (idx == 2) {
            gb.zoomInRightBottom = setTimeout(function () {
              zoomInRightBottom(el);
            }, 600);
          }
        }
      });

      el.addEventListener('mouseleave', function () {
        clearTimeout(gb.zoomInLeftBottom);
        clearTimeout(gb.zoomInCenterTop);
        clearTimeout(gb.zoomInRightBottom);
      });
    });

    gb.btnDialogOff.forEach((elem) => {
      elem.addEventListener('click', function () {
        gb.visualWrap.classList.remove('zoom--In');
        gb.dialog.forEach((el) => {
          //el.style.opacity = 1;
          el.style.visibility = 'visible';
          el.nextElementSibling.style.opacity = 0;
          el.nextElementSibling.style.pointerEvents = 'none';
          el.parentElement.classList.remove('blur');
        });
        gb.isFocus = false;
      });
    });

    drawingDialog();
  };
  const drawingDialog = () => {
    const timeLine = gsap.timeline({
      repeat: '-1',
      repeatDelay: 2,
    });

    timeLine
      // dialog 01
      .fromTo(
        gb.dialog[0],
        {
          x: '-10%',
        },
        {
          x: 0,
          delay: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'ease-out',
          onComplete: function () {
            gb.dialog[0].style.pointerEvents = 'auto';
          },
        }
      )
      .to(gb.dialog[0], {
        delay: 0.3,
        duration: 1,
        text: {
          value: gb.dialog[0].children[0].innerHTML,
          //speed: 1,
        },
        ease: 'none',
      })
      .to(gb.dialog[0], {
        delay: 3,
        x: '-10%',
        opacity: 0,
        onComplete: function () {
          gb.dialog[0].style.pointerEvents = 'none';
        },
      })
      // dialog 02
      .fromTo(
        gb.dialog[1],
        {
          y: '10%',
        },
        {
          y: 0,
          delay: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'ease-out',
          onComplete: function () {
            gb.dialog[1].style.pointerEvents = 'auto';
          },
        }
      )
      .to(gb.dialog[1], {
        delay: 0.3,
        duration: 1,
        text: {
          value: gb.dialog[1].children[0].innerHTML,
          //speed: 1,
        },
        ease: 'none',
      })
      .to(gb.dialog[1], {
        delay: 3,
        y: '10%',
        opacity: 0,
        onComplete: function () {
          gb.dialog[1].style.pointerEvents = 'none';
        },
      })
      // dialog 03
      .fromTo(
        gb.dialog[2],
        {
          y: '10%',
        },
        {
          y: 0,
          delay: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'ease-out',
          onComplete: function () {
            gb.dialog[2].style.pointerEvents = 'auto';
          },
        }
      )
      .to(gb.dialog[2], {
        delay: 0.3,
        duration: 1,
        text: {
          value: gb.dialog[2].children[0].innerHTML,
          //speed: 1,
        },
        ease: 'none',
      })
      .to(gb.dialog[2], {
        delay: 3,
        y: '10%',
        opacity: 0,
        onComplete: function () {
          gb.dialog[2].style.pointerEvents = 'none';
        },
      });
  };
  const setGnb = () => {
    // 헤더
    if (gb.main.length) {
      gsap.to(gb.main, { y: 0, duration: 0.5, delay: 0.3 });
    }

    gsap.to(gb.header, { y: 0, opacity: 1, duration: 0.5, delay: 0.4 });

    if (document.documentElement.scrollTop >= 40) {
      gb.html.addClass('fixed');
    } else {
      gb.html.removeClass('fixed');
    }

    $('.btn-mob-menuOpen').on('click', function () {
      if (gb.html.hasClass('m-menu')) {
        mobMenuClose();
      } else {
        gb.html.addClass('m-menu');
        gb.body.append('<div class="dimmed btn-mob-menuClose"></div>');
        gb.body.css({
          height: '100vh',
          'overflow-y': 'hidden',
        });
        if (!gb.main.length) {
          gb.html.removeClass('active');
        }
      }
    });

    $(document).on('click', '.btn-mob-menuClose', function () {
      mobMenuClose();
    });

    const mobMenuClose = () => {
      gb.html.removeClass('m-menu');
      $('.dimmed').remove();
      gb.body.css({
        height: 'auto',
        'overflow-y': 'visible',
      });
      if (!gb.main.length) {
        gb.html.addClass('active');
      }
    };

    $('.depth1')
      .find('> li > a')
      .on('click', function (e) {
        const trg_ = $(this);
        if (trg_.next('.depth2').length) {
          e.preventDefault();
          e.stopPropagation();

          if (trg_.closest('li').hasClass('on')) {
            trg_.closest('li').removeClass('on');
            trg_.next('.depth2').stop().slideUp(300);
          } else {
            trg_.closest('li').addClass('on');
            trg_.next('.depth2').stop().slideDown(300);
          }
        }
      });
  };
  const modalOn = () => {
    // 공통 모달 열기
    gb.btnActiveModal.on('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const trg = $(this);
      const modalName = trg.data('modal-name');

      $('.modal').removeClass('zoomIn');
      $('.dimmed').remove();

      trg.addClass('active');
      $('.modal#modal-' + modalName).addClass('zoomIn');

      gb.body.append('<div class="dimmed button-close-modal"></div>');
      gb.body.css({
        height: '100vh',
        'overflow-y': 'hidden',
      });
      $('.dimmed').css('z-index', 1001);
    });

    $(document).on('click', '.button-close-modal', () => {
      modalOff();
    });
  };
  const modalOff = () => {
    // 공통 모달 닫기
    gb.btnActiveModal.removeClass('active');
    $('.modal').removeClass('zoomIn');
    $('.dimmed').remove();

    gb.body.css({
      height: 'auto',
      'overflow-y': 'visible',
    });
    $('.dimmed').css('z-index', 990);
  };
  const listSwiper = () => {
    // 메인 공통 스와이퍼
    gb._listSwiper = gb._listSwiper || [];

    gb.listSwiper.forEach(function (elem, i) {
      if (typeof gb._listSwiper[i] !== 'undefined') {
        gb._listSwiper[i].destroy();
        gb._listSwiper[i] = undefined;
      }

      gb.listSwiperOption = {
        // Optional parameters
        loop: false,
        speed: 600,
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: false,
        debugger: true, // Enable debugger
        // resistance: false,
        // allowTouchMove: true,
        // observer: true,
        // observeParents: true,
        // SimulateTouch: false,
        scrollbar: {
          el: '.swiper-scrollbar-customed',
          hide: false,
          draggable: true,
        },
        navigation: {
          nextEl: '.button-swiper-nxt',
          prevEl: '.button-swiper-prev',
        },
      };

      gb._listSwiper[i] = new Swiper(elem, gb.listSwiperOption);
    });
  };
  const listSwiper2 = () => {
    // 인재정보 스와이퍼
    gb._listSwiper2 = gb._listSwiper2 || [];

    gb.listSwiper2.forEach(function (elem, i) {
      if (typeof gb._listSwiper2[i] !== 'undefined') {
        gb._listSwiper2[i].destroy();
        gb._listSwiper2[i] = undefined;
      }

      gb.listSwiper2Option = {
        // Optional parameters
        loop: false,
        speed: 600,
        direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
        breakpoints: {
          821: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerColumn: 2,
          },
        },
        centeredSlides: false,
        debugger: true, // Enable debugger
        // resistance: false,
        // allowTouchMove: true,
        // observer: true,
        // observeParents: true,
        // SimulateTouch: false,
        scrollbar: {
          el: '.swiper-scrollbar-customed',
          hide: false,
          draggable: true,
        },
        navigation: {
          nextEl: '.button-swiper-nxt',
          prevEl: '.button-swiper-prev',
        },
      };

      gb._listSwiper2[i] = new Swiper(elem, gb.listSwiper2Option);
    });
  };
  const fileUpload = (el, type) => {
    // input file
    const pathpoint = el.value.lastIndexOf('.');
    const filepoint = el.value.substring(pathpoint + 1, el.length);
    const filetype = filepoint.toLowerCase(); // 업로드 파일 확장자
    const fileReader = new FileReader();
    const fileName = el.files[0].name; // 첨부 파일 명
    const filesize = el.files[0].size; // 첨부 파일 용량

    fileReader.readAsDataURL(el.files[0]);

    if (type == 'image') {
      // 이미지 업로드
      if (filetype == 'jpg' || filetype == 'gif' || filetype == 'png' || filetype == 'jpeg' || filetype == 'bmp') {
        //정상적인 이미지 확장자 파일일 경우
        fileReader.onload = function (e) {
          el.closest('.file-attach-image').children[0].children[0].setAttribute('src', e.target.result);
        };
      } else {
        alert('이미지 파일만 등록 가능 합니다.');
        parentObj = el.parentNode;
        node = parentObj.replaceChild(el.cloneNode(true), el);
        return false;
      }
    } else {
      if (
        filetype == 'pdf' ||
        filetype == 'ppt' ||
        filetype == 'doc' ||
        filetype == 'hwp' ||
        filetype == 'txt' ||
        filetype == 'zip'
      ) {
        el.closest('.file-attach').children[0].children[0].value = fileName;
      } else {
        alert('첨부파일은 pdf, ppt, doc, hwp, txt, zip만 등록 가능 합니다');
        parentObj = el.parentNode;
        node = parentObj.replaceChild(el.cloneNode(true), el);
        return false;
      }
    }
  };
  const copyToClipboard = (val) => {
    // 클립 보드에 복사
    const t = document.createElement('textarea');

    document.body.appendChild(t);

    t.value = val;
    t.select();

    document.execCommand('copy');
    document.body.removeChild(t);
  };
  const copyUrl = () => {
    // url 복사
    copyToClipboard(location.href);
    alert('링크가 복사되었습니다.\n ' + location.href);
  };
  const goScrollTop = () => {
    gb.html.stop().animate({ scrollTop: 0 }, 300);
  };
  const toolTipSet = (trg) => {
    return {
      _clientY: $(trg).offset().top - document.documentElement.scrollTop,
      clientY: document.documentElement.scrollTop + document.documentElement.clientHeight - $(trg).offset().top,
    };
  };
  const toolTip = () => {
    gb.btnHoverTooltip = $('.button-hover-tooltip');

    gb.btnActiveTooltip.on('click', function () {
      const _toolTipSet = toolTipSet(this);
      const _trg = $(this);

      if (_trg.hasClass('on')) {
        _trg.removeClass('on');
        _trg.next('.tooltip').removeClass('animation--start');
      } else {
        if (_toolTipSet._clientY >= _toolTipSet.clientY) {
          _trg.next('.tooltip:not(.right)').removeClass('up').addClass('down');
        } else {
          _trg.next('.tooltip:not(.right)').removeClass('down').addClass('up');
        }

        _trg.addClass('on');
        _trg.next('.tooltip').addClass('animation--start');
      }
    });

    $('.button-close-tooltip').on('click', function () {
      $(this).closest('.tooltip').removeClass('animation--start');
      $(this).closest('.tooltip').prev('button').removeClass('on');
    });

    gb.btnHoverTooltip.on('mouseenter', function () {
      const _toolTipSet = toolTipSet(this);
      const _trg = $(this);

      if (_toolTipSet._clientY >= _toolTipSet.clientY) {
        _trg.find('.tooltip:not(.right)').removeClass('up').addClass('down');
      } else {
        _trg.find('.tooltip:not(.right)').removeClass('down').addClass('up');
      }

      _trg.addClass('on');
      _trg.find('.tooltip').addClass('animation--start');
      gb.body.css('user-select', 'auto');
    });

    gb.btnHoverTooltip.on('mouseleave', function () {
      const _trg = $(this);
      _trg.removeClass('on');
      _trg.find('.tooltip').removeClass('animation--start');
      gb.body.css('user-select', 'none');
    });

    gb.btnHoverTooltip.on('touchstart', function () {
      const _toolTipSet = toolTipSet(this);
      const _trg = $(this);

      $('.tooltip').removeClass('animation--start');

      if (_trg.hasClass('on')) {
        _trg.removeClass('on');
        _trg.find('.tooltip').removeClass('animation--start');
      } else {
        if (_toolTipSet._clientY >= _toolTipSet.clientY) {
          _trg.find('.tooltip:not(.right)').removeClass('up').addClass('down');
        } else {
          _trg.find('.tooltip:not(.right)').removeClass('down').addClass('up');
        }

        _trg.addClass('on');
        _trg.find('.tooltip').addClass('animation--start');
      }
    });
  };
  const dropDown = () => {
    gb.dropDown = document.querySelectorAll('.dropDown');
    gb.dropDown2 = document.querySelectorAll('.dropDown2');

    gb.dropDown.forEach(function (elem) {
      elem.addEventListener('mouseenter', function () {
        this.children[1].style.opacity = 1;
        this.children[1].style.visibility = 'visible';
        this.children[1].style.pointerEvents = 'auto';
      });
      elem.addEventListener('focusin', function () {
        this.children[1].style.opacity = 1;
        this.children[1].style.visibility = 'visible';
        this.children[1].style.pointerEvents = 'auto';
      });
      elem.addEventListener('mouseleave', function () {
        this.children[1].style.opacity = 0;
        this.children[1].style.visibility = 'hidden';
        this.children[1].style.pointerEvents = 'none';
      });
      elem.addEventListener('focusout', function () {
        this.children[1].style.opacity = 0;
        this.children[1].style.visibility = 'hidden';
        this.children[1].style.pointerEvents = 'none';
      });
    });

    gb.dropDown2.forEach(function (elem) {
      elem.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const el = elem.parentElement.nextElementSibling;

        if (elem.classList.contains('on')) {
          elem.classList.remove('on');

          if (el.classList.contains('clip')) {
            gsap.fromTo(
              el,
              {
                height: 'auto',
              },
              {
                duration: 0.2,
                height: `${gb.el_H}px`,
                onComplete: function () {
                  el.children[0].classList.add('txt-line-clamp2');
                  el.style.height = 'auto';
                },
                overwrite: true,
              }
            );
          } else {
            gsap.to(el, {
              duration: 0.3,
              height: 0,
            });
          }
        } else {
          elem.classList.add('on');
          gb.el_H = el.clientHeight;
          if (el.classList.contains('clip')) {
            el.children[0].classList.remove('txt-line-clamp2');
            gsap.fromTo(
              el,
              {
                height: `${gb.el_H}px`,
              },
              {
                duration: 0.3,
                height: 'auto',
                overwrite: true,
              }
            );
          } else {
            gsap.to(el, {
              duration: 0.3,
              height: 'auto',
            });
          }
        }
      });
    });
  };
  const checkAlll = () => {
    // 전체 선택
    const checkItemAll = $('input[type=checkbox][name^=chk_all]');
    const checkItem = $('input[type=checkbox][name^=chk_filter]');

    checkItemAll.on('change', function () {
      if ($(this).prop('checked')) {
        checkItem.prop('checked', '');
      }
    });

    checkItem.on('change', function () {
      if ($(this).prop('checked')) {
        checkItemAll.prop('checked', '');
      }
    });
  };
  const openSideMenu = () => {
    $('.button-open-sideMenu').on('click', function () {
      const trg = $(this);
      const sideMenu = trg.closest('aside');

      if (trg.hasClass('on')) {
        sideMenu.stop().animate(
          {
            right: '-265px',
          },
          300,
          'easeInOutExpo',
          function () {
            trg.removeClass('on');
          }
        );
      } else {
        sideMenu.stop().animate(
          {
            right: 0,
          },
          300,
          'easeInOutExpo',
          function () {
            trg.addClass('on');
          }
        );
      }
    });
  };
  const vdPlay = () => {
    const buttonVdActive = document.querySelector('.vd-active');

    if (buttonVdActive) {
      buttonVdActive.addEventListener('click', function () {
        const trg = this;

        if (trg.classList.contains('vd-play')) {
          trg.classList.remove('vd-play');
          trg.previousElementSibling.pause();
          trg.parentElement.classList.add('vd-stop');
        } else {
          trg.classList.add('vd-play');
          trg.previousElementSibling.play();
          trg.parentElement.classList.remove('vd-stop');
        }
      });
    }
  };
  const niceSelect = () => {
    $('.select-wrap select').niceSelect();

    // const niceSelect = document.querySelectorAll('.nice-select');

    // niceSelect.forEach(function (el) {
    //   const list = el.lastElementChild.children;
    //   const max = el.lastElementChild.childElementCount;

    //   for (var l = 0; l < max; l++) {
    //     (function (n) {
    //       list[n].addEventListener('click', function () {
    //         el.previousElementSibling.selectedIndex = n;

    //         const selectedIndex = el.previousElementSibling.selectedIndex;
    //         const selectedValue = el.previousElementSibling.value;

    //         console.log(selectedIndex, selectedValue);
    //       });
    //     })(l);
    //   }
    // });
  };
  const createCalendar = function () {
    const defaultOption = {
      closeText: '닫기',
      currentText: '오늘',
      prevText: '이전 달',
      nextText: '다음 달',
      monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      dayNames: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
      dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
      weekHeader: '주',
      yearSuffix: '년',
    };

    $.datepicker.setDefaults(defaultOption);

    $('.calendar > input[type=text]').datepicker({
      showOn: 'both',
      dateFormat: 'yy-mm-dd',
      minDate: 'd',
    });
  };
  const init = () => {
    setGnb();
    modalOn();
    //niceSelect();
    createCalendar();
    toolTip();
    checkAlll();
    vdPlay();
    dropDown();
    openSideMenu();
  };

  return {
    init,
    zoomIn,
    drawingDialog,
    niceSelect,
    createCalendar,
    modalOff,
    listSwiper,
    listSwiper2,
    goScrollTop,
    fileUpload,
    copyUrl,
  };
})();

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop >= 40) {
    gb.html.addClass('fixed');
  } else {
    gb.html.removeClass('fixed');
  }
});

window.addEventListener('resize', () => {
  if (gb.listSwiper.length) gb.CommonFunction.listSwiper();
  if (gb.listSwiper2.length) gb.CommonFunction.listSwiper2();
});

// 쿠키설정
function setCookie(cName, cValue, cDay) {
  const expire = new Date();
  let cookies;

  expire.setDate(expire.getDate() + cDay);
  cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
  if (typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
  document.cookie = cookies;
}

function getCookie(cName) {
  cName = cName + '=';
  const cookieData = document.cookie;
  const start = cookieData.indexOf(cName);
  const cValue = '';
  if (start != -1) {
    start += cName.length;
    const end = cookieData.indexOf(';', start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
