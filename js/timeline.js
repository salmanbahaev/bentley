function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    } 
    // else {
    //   change.target.classList.remove('element-show');
    // }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
let elementsR = document.querySelectorAll('.element-animation-r');

for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elementsR) {
  observer.observe(elm);
}