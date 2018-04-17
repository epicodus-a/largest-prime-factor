import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import{UserInput} from "./largest-prime-factor";

$().ready(function(){
  $(".largest-prime").submit(function(e){
    e.preventDefault();
    let number  = $("#int").val();
    let input = new UserInput(number);
    let output = input.getLargestPrime();

    $(".output").html(output);
  })
})
