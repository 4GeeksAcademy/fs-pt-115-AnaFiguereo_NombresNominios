import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const pronombres = ["the","our"]
const adjetivos = ["great", "big"];
const sustantivos = ["jogger", "racoon"];

pronombres.map((pronombre) => {
  adjetivos.map((adjetivo) => {
    sustantivos.map((sustantivo) => {
      console.log(`${pronombre}${adjetivo}${sustantivo}.com`);
    });
  });
})