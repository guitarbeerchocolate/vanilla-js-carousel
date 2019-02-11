const carousel = function() {
  const el = document.querySelector('.carousel');
  this.carouselItems = el.querySelectorAll('.carousel__item');
  this.carouselPrevious = el.querySelector('.carousel--prev a');
  this.carouselNext = el.querySelector('.carousel--next a');
  this.activePosition = 0;
  this.runTimer();
  this.next();
  this.previous();
};

carousel.prototype.runTimer = function() {
  this.carouselTimer = setInterval(() => {
    this.carouselItems[this.activePosition].classList.remove('carousel__item--active');
    this.activePosition++;
    if(this.activePosition == this.carouselItems.length) this.activePosition = 0;
    this.carouselItems[this.activePosition].classList.add('carousel__item--active');
  },2000);
}

carousel.prototype.next = function() {
  this.carouselNext.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(this.carouselTimer);
    this.carouselItems[this.activePosition].classList.remove('carousel__item--active');
    this.activePosition++;
    if(this.activePosition == this.carouselItems.length) this.activePosition = 0;
    this.carouselItems[this.activePosition].classList.add('carousel__item--active');
  });
};

carousel.prototype.previous = function() {
  this.carouselPrevious.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(this.carouselTimer);
    this.carouselItems[this.activePosition].classList.remove('carousel__item--active');
    this.activePosition--;
    if(this.activePosition < 0) this.activePosition = (this.carouselItems.length - 1);
    this.carouselItems[this.activePosition].classList.add('carousel__item--active');
  });
};

carousel.prototype.sayHello = function() {
  return 'hello';
};

module.exports = new carousel();
