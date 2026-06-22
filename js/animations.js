document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 900,
    once: true,
    easing: 'ease-out-cubic'
  });

  const counters = document.querySelectorAll('.count');
  const options = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.dataset.target, 10);
        const duration = 1600;
        let start = 0;
        const stepTime = Math.abs(Math.floor(duration / countTo));

        const counter = setInterval(() => {
          start += Math.ceil(countTo / 50);
          if (start >= countTo) {
            target.textContent = countTo.toLocaleString() + (countTo >= 20 ? '+' : '+');
            clearInterval(counter);
          } else {
            target.textContent = start.toLocaleString() + '+';
          }
        }, stepTime);
        observer.unobserve(target);
      }
    });
  }, options);

  counters.forEach((counter) => observer.observe(counter));
});
