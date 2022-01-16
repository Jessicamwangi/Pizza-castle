window.onscroll = function() {
  myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if(window.pageYOffset > sticky){
      header.classList.add("sticky");
  } else{
      header.classList.remove("sticky");
  }
}

$('body').scrollspy({
  target: '#myHeader'
});


$(document).ready(function() {
  $('.fa-search').on("click", function() {
      $('.header-search .header-input').css("display","inline-block");
      $(".close-icon").css("display","inline-block");
      $(".search-icon").css("display","none");
  });
  $('.close-icon').on("click", function() {
      $('.header-search .header-input').css("display","none");
      $(".close-icon").css("display","none");
      $(".search-icon").css("display","inline-block");
  });
});

// *******************
$(".chef-slider").bxSlider({
  auto:true,
  controls: true,
  nextText : '<i class="fas fa-arrow-right"></i>',
  prevText : '<i class="fas fa-arrow-left"></i>',
  pause: 5000,
  speed: 500,
  slideMargin : 30,
  pager : true,
  pagerCustom: '.chef-slider'
});
$(function () {
  $('.summary').hide();
  $('.cdata-overlay').hide();
//Get inputs
  $("#checkout").click(function () {
      let flavour = $(".flavour option:selected").val();
      let size = $("#size option:selected").val();
      let crust = $("#crust option:selected").val();
      let topping = $("#toppings option:selected").val();
      let number = $("#number").val();
      console.log(size);

      //Function order
      let order = (f, s, c, t, n, total) => {
          return {f, s, c, t, n, total};
      };

      //check price
      let price, totalPrice;
      switch (flavour) {
          case flavour = "Cheese":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "Veggie":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "Pepperoni":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "BBQ Chicken":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "Margherita":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "hawaiian":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "Buffalo":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
          case flavour = "Meat Pizza":
              switch (size) {
                  case size = "regular":
                      price = 300;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "medium":
                      price = 600;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
                  case size = "large":
                      price = 1200;
                      if (crust === "thin") {
                          totalPrice = (price * number) + 200;
                      } else if (crust === "thick") {
                          totalPrice = (price * number) + 350;
                      } else if (crust === "flatbread") {
                          totalPrice = (price * number) + 250;
                      } else {
                          totalPrice = (price * number) + 400;
                      }
                      break;
              }
              break;
      }
      switch (topping) {
          case topping = "tomato":
              totalPrice = totalPrice + 50;
              break;
          case topping = "onions":
              totalPrice = totalPrice + 50;
              break;
          case topping = "mushroom":
              totalPrice = totalPrice + 100;
              break;
          case topping = "greenpepper":
              totalPrice = totalPrice + 80;
              break;
          case topping = "olives":
              totalPrice = totalPrice + 120;
              break;
          case topping = "pineapple":
              totalPrice = totalPrice + 120;
              break;
          case topping = "sweetcorn":
              totalPrice = totalPrice + 120;
              break;
          case topping = "macon":
              totalPrice = totalPrice + 200;
              break;
          case topping = "mince":
              totalPrice = totalPrice + 120;
              break;
          case topping = "beef":
              totalPrice = totalPrice + 170;
              break;
          case topping = "chicken":
              totalPrice = totalPrice + 170;
              break;

      }

      //Execute order function
      let newOrder = order(flavour, size, crust, topping, number, totalPrice);
      console.log(newOrder); // test func

      //create a new object
      // let myOrder = JSON.stringify(JSON.parse(newOrder));

      //Write to the order
      $('.summary').slideDown(2000);
      $('.cdata-overlay').slideUp();
      $('#list').slideDown();
      $('.deliver').show(1000);
      $('.delivernot').show(1000);

      $('#list').text(" ");
      $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
          + newOrder.s + "<br>" + "Crust :     "
          + newOrder.c + "<br>" + "Toppings :     "
          + newOrder.t + "<br>" + " Number of pizzas :    "
          + newOrder.n + "<br>" + "Total Price :  "
          + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
  });

  //Deliver
  $(".deliver").click(function () {
      $('.summary').slideUp();
      $('#list').slideUp();
      $('.summary').text("Provide location details").slideDown();
      $('.deliver').hide(1000);
      $('.delivernot').hide(1000);
      $('.cdata-overlay').slideDown();
  });


  //Pick Up
  $(".delivernot").click(function () {

  });

  //Scrollify
  $(function () {
      $.scrollify.move('#sum-order');
  });
});