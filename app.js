const text = document.querySelector("p");
const image = document.querySelector("img");
const author = document.querySelector(".author");
const time = 3000;

const testimonials = [
  [
    "https://randomuser.me/api/portraits/lego/5.jpg",
    "Lego Man",
    "Thank you very much."
  ],
  [
    "https://randomuser.me/api/portraits/lego/8.jpg",
    "Chef",
    "I lost my ticket. What should I do?"
  ],
  [
    "https://randomuser.me/api/portraits/lego/4.jpg",
    "Billy",
    "Is this color OK, or would you like a different color?"
  ],
  [
    "https://randomuser.me/api/portraits/lego/0.jpg",
    "Senior",
    "Tom looks pale. Is anything the matter with him?"
  ],
  [
    "https://randomuser.me/api/portraits/lego/3.jpg",
    "Not A Doctor",
    "Windy this morning, isn't it?"
  ]
];

let i = 0;
const testimonialSlider = () => {
  if (i < testimonials.length - 1) {
    i++;
  } else {
    i = 0;
  }
  text.innerHTML = testimonials[i][2];
  image.src = testimonials[i][0];
  author.innerHTML = testimonials[i][1];
  image.setAttribute("alt", testimonials[i][1]);
};

window.setInterval(testimonialSlider, time);
