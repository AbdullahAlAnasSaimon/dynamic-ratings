const stars = document.querySelectorAll(".stars i");
// console.log(stars);
stars.forEach((star, index) =>{
  star.addEventListener('click', () =>{
    // console.log("clicked", index + 1);
    stars.forEach((star, index2) =>{
      index >= index2 ? star.classList.add("active") : star.classList.remove("active");
    })
  })
} )