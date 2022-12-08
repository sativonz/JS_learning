
const d = document,
w = window;

export function observerVideo(){
  const $video = d.querySelector(".IO-box video");

  const cb = (entries) => {
    entries.forEach(entry => entry.isIntersecting ? $video.play() : $video.pause());
  }

  const observer = new IntersectionObserver(cb, {
    //root
    //rootMargin: "-450px",
    //Para hacer lo mismo pero mas exacto
    threshold: [0.5, 0.75]
  });  

  observer.observe($video);

  d.addEventListener("visibilitychange", () => {
      //OJO También posible hacerlo en vez de consultar (d.hidden) hacerlo -> d.visibilityState === 'visible' || d.visibilityState === 'hidden'
      if (d.hidden) {
          $video.pause();
      } else {
          $video.play();
      }
  });




}