const calculateInput = document.querySelector(".calculate-form");
const btn = document.querySelector(".primary-btn");
const result = document.querySelector(".result p");

const calculateMarks = (event) => {
   event.preventDefault();
   const formData = new FormData(calculateInput);

   let totalMarks = 0;
}