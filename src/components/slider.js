import "./style/slider.css";

const Slider = () => {
let slider = document.querySelector('.slider');
let wrapper = document.querySelector('.wrapper');
let item = document.querySelectorAll('.item');
let currdeg  = 0;
let active = 0;

function handleNext () {
    slider.classList.toggle('zoom');

    currdeg = currdeg - 120;

    if (active === item.length - 1) {
        active = 0;
    } else {
        active++;
    }

    toggle();
}

function handlePref () {
    slider.classList.toggle('zoom');

    currdeg = currdeg + 120;

    if (active === 0) {
        active = item.length - 1;
    } else {
        active--;
    }

    toggle();
}

let toggle = () => {
    setTimeout(() => {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove('active');
        }

        item[active].classList.add('active')
        wrapper.style.transform = 'rotateY(' + currdeg + 'deg)';
    }, 900);

    setTimeout(() => {
        slider.classList.toggle('zoom');
    }, 1900);
}

  return (
    <div className="body">
      <div className="slider">
        <div className="wrapper">
          <div
            style={{backgroundImage: 'url(https://images5.alphacoders.com/137/thumb-1920-1376859.png)'}}
            className="item item1 active"
          >
            <div className="item__info">
              <p className="item__year">
                <span>1483 - 1484</span>
              </p>
              <p className="item__name">
                <span>BIRH OF VENUS</span>
              </p>
              <a href="javascript:void(0)" className="btn">
                <span>Discover more</span>
              </a>
            </div>
          </div>
          <div
            style={{backgroundImage: 'url(https://wallpapers.com/images/featured/4k-gaming-background-bud9k5ffqi3r2ds9.jpg)'}}
            className="item item2"
          >
            <div className="item__info">
              <p className="item__year">
                <span>1481 - 1484</span>
              </p>
              <p className="item__name">
                <span>BIRH OF VENUS</span>
              </p>
              <a href="javascript:void(0)" className="btn">
                <span>Discover more</span>
              </a>
            </div>
          </div>
          <div
            style={{backgroundImage: 'url(https://cdn.pixabay.com/video/2023/07/19/172156-846731269_tiny.jpg)'}}
            className="item item3"
          >
            <div className="item__info">
              <p className="item__year">
                <span>1500 - 1501</span>
              </p>
              <p className="item__name">
                <span>THE STORY OF VIRGINIA</span>
              </p>
              <a href="javascript:void(0)" className="btn">
                <span>Discover more</span>
              </a>
            </div>
          </div>
        </div>

        <div className="arrow arrow-next" onClick={handleNext}></div>
        <div className="arrow arrow-prev" onClick={handlePref}></div>
      </div>
    </div>
  );
};

export default Slider;
