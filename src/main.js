
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Food } from "./food2fork.js";


$(document).ready(function() {
   

      $('#output').empty();

      let food = new Food();
      let promise = food.getFoodInfo();
      // console.log(bike);

      promise.then(function(response) {
       
      let body = JSON.parse(response);
      food.getData(body);
      for (let i=0;i<food.images.length;i++){
        $("ul#foodImages").append(`<li><img src="${food.images[i]}"></li>`);
      }
      });
   
  });