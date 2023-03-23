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
          el.style.opacity = 1;
          el.style.visibility = 'visible';
          el.nextElementSibling.style.opacity = 0;
          el.nextElementSibling.style.pointerEvents = 'none';
          el.parentElement.classList.remove('blur');
        });
        gb.isFocus = false;
      });
    });

    //   gsap.to('.dialog01', { duration: 0, text: 'MICE...<br/>산업..?', ease: 'none' });
    //   gsap.to('.dialog02', { duration: 0, text: '취업준비<br/> 완료!!', ease: 'none' });
    //   gsap.to('.dialog03', { duration: 0, text: '새로운<br/> 소식이 떴나?', ease: 'none' });
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
  const modal = () => {
    // 공통 모달
    gb.btnActiveModal.on('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const trg = $(this),
        modalName = trg.data('modal-name');

      if (trg.hasClass('on')) {
        $('.button-active-modal').removeClass('on');
        $('.modal').css('display', 'none');
        $('.dimmed fixed').remove();
        gb.body.css({
          height: 'auto',
          'overflow-y': 'visible',
        });
      } else {
        $('.button-active-modal').not(trg).removeClass('on');
        trg.addClass('on');

        $('.modal').css('display', 'none');
        $('.modal#modal-' + modalName)
          .find('textarea')
          .val('');
        $('.modal#modal-' + modalName)
          .stop()
          .fadeIn(300);

        gb.body.append('<div class="dimmed fixed modal-off"></div>');
        gb.body.css({
          height: '100vh',
          'overflow-y': 'hidden',
        });
      }
    });

    $(document).on('click', '.modal-off', function () {
      modalOff();
    });
  };
  const modalOff = () => {
    // 공통 모달 닫기
    $('.button-active-modal').removeClass('on');
    $('.modal').css('display', 'none');
    $('.dimmed.fixed').remove();

    // 입력 폼 리셋
    $('.modal').find('input').val('');
    $('.modal').find('textarea').val('');

    gb.body.css({
      height: 'auto',
      'overflow-y': 'visible',
    });
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
    const fileName = $(el)[0].files[0].name; // 첨부 파일 명
    const filesize = $(el)[0].files[0].size; // 첨부 파일 용량

    fileReader.readAsDataURL($(el)[0].files[0]);

    if (type == 'image') {
      // 이미지 업로드
      if (filetype == 'jpg' || filetype == 'gif' || filetype == 'png' || filetype == 'jpeg' || filetype == 'bmp') {
        // 정상적인 이미지 확장자 파일일 경우
        // fileReader.onload = function (e) {
        //   $(el).closest('.file-up-list').find('.file-attach-image img').attr('src', e.target.result);
        // };
      } else {
        alert('이미지 파일만 선택 할 수 있습니다.');
        parentObj = el.parentNode;
        node = parentObj.replaceChild(el.cloneNode(true), el);
        return false;
      }
    }

    $(el).closest('.file-attach').find('.text-wrap input[type=text]').val(fileName);
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
  const toolTip = () => {
    gb.btnActiveTooltip.on('click', function () {
      const trg = $(this);
      const trgOffsetTop = trg.offset().top;
      const currentScrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = currentScrollTop + clientHeight;
      const _clientY = trgOffsetTop - currentScrollTop;
      const clientY = scrollHeight - trgOffsetTop;

      if (trg.hasClass('on')) {
        trg.removeClass('on');
        trg.next('.tooltip').removeClass('animation--start');
      } else {
        if (_clientY >= clientY) {
          trg.next('.tooltip:not(.right)').removeClass('up').addClass('down');
        } else {
          trg.next('.tooltip:not(.right)').removeClass('down').addClass('up');
        }

        trg.addClass('on');
        trg.next('.tooltip').addClass('animation--start');
      }
    });

    $('.button-close-tooltip').on('click', function () {
      $(this).closest('.tooltip').removeClass('animation--start');
      $(this).closest('.tooltip').prev('button').removeClass('on');
    });
  };
  const dropDown = () => {
    gb.dropDown = document.querySelectorAll('.dropDown');

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
  const init = () => {
    setGnb();
    modal();
    toolTip();
    checkAlll();
    vdPlay();
    dropDown();
    openSideMenu();
  };

  return {
    init,
    zoomIn,
    //modalOff,
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
