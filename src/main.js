import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import{UserInput} from "./largest-prime-factor";
import pig from "./img/pig.jpg";

$().ready(function(){
  $(".largest-prime").submit(function(e){
    e.preventDefault();
    let number  = $("#int").val();
    let input = new UserInput(number);
    let output = input.getLargestPrime();

    $(".output").html(`<img src=${pig}/>${output}`);
  })
})
