
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let height = parseFloat(document.getElementById('height-of-trapezoid').value);
  let b = parseFloat(document.getElementById('side-b-of-trapezoid').value);
  let a = parseFloat(document.getElementById('side-a-of-trapezoid').value);

  // process
  let area = (a+b)*height/2
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' cm²'
}
