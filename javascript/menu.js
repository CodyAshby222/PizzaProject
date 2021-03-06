const pizzaId = document.getElementById("pizza");

function setUp() {
  pizzaId.innerHTML = ` <!-- Bootstrap Nav Bar -->
    <div class="nav-extra"></div>

  <nav class="navbar navbar-expand-lg navbar-dark navbar-off-white bg-raisin-black">
    <img class="pizza-chef"src="images/chef2.png"><a class="navbar-brand pizza-font" href="#">Code-Pizza</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active nav-menu">
            <a class="nav-link" href="menu.html">Menu<span class="sr-only">(current)</span></a>
          </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>

 
</div>

<div class="bg-padding"></div>
<div class="pizza-box bg-raisin-black white-txt"><h3 class="pizza-font">Our Menu</h3></div>


<div class="bg-padding"></div>
<div class="row pizza-box justify-space-around">
  <div class="card">
    <img src="images/cheese.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title pizza-font">Cheese Pizza</h4>
      <div class="border-btm-line"></div>
      <p class="card-text">For those who like there pizza with no toppings. Only $5! You may adjust as needed to fit your pizza needs!</p>
      <button type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
        <b>ORDER NOW</b>
      </button>
    </div>
  </div>

<div class="card">
  <img src="images/pep (2).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title pizza-font">Pepperoni Pizza</h4>
    <div class="border-btm-line"></div>
    <p class="card-text">For our pepperoni lovers out there! Our first topping is FREE! So the pepperoni is on us! Only $5! Perfect for everyone!</p>
    <button id="prePep" type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
      <b>ORDER NOW</b>
    </button>
  </div>
</div>

<div class="card">
  <img src="images/meat (2).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title pizza-font">Meat Lovers Pizza</h4>
    <div class="border-btm-line"></div>
    <p class="card-text">For those who love meat on their pizza! 5 flavorful meat toppings! With our 5+ toppings deal you get our SPECIAL DEAL!</p>
    <button id="preMeat" type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
      <b>ORDER NOW</b>
    </button>
  </div>
</div>

<div class="card" >
  <img src="images/veggie (2).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title pizza-font">Veggie Pizza</h4>
    <div class="border-btm-line"></div>
    <p class="card-text">For our vegetarian lovers! This has all the veggies you need to make your pizza just for you! For only $7! </p>
    <button id="preVeggie" type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
      <b>ORDER NOW</b>
    </button>
  </div>
</div>

<div class="card">
  <img src="images/supreme (2).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title pizza-font">Supreme Pizza</h4>
    <div class="border-btm-line"></div>
    <p class="card-text">Our classic Supreme Pizza! Has everything you need! Add one more topping and you can get our SPECIAL!</p>
    <button id="preSupreme" type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
      <b>ORDER NOW</b>
</button>
  </div>
</div>

<div class="card">
  <img src="images/all (2).png" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title pizza-font">"ALL-OUT" Pizza</h4>
    <div class="border-btm-line"></div>
    <p class="card-text">Going all out on our ALL-OUT PIZZA! These are for the crazy pizza lovers out there who are up for the challenge!</p>
    <button id="preAll" type="button" class="btn btn-custom" data-toggle="modal" data-target="#exampleModalCenter" data-backdrop="static" data-keyboard="false">
      <b>ORDER NOW</b>
     </button>
  </div>
</div>

</div>

<div class="bg-padding"></div>

</div>

  

  <!-- Customize Pizza Page/Modal -->
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title pizza-font" id="exampleModalCenterTitle">Customize Your Own Pizza!</h2>
          <button type="button" class="close closeButton" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Pizza Container -->
          <div class="container">
            <div class="row">
              <div class="col-5">

                <div class="direction-column">
                  <div class="pizza-box-2">
                    <img src="images/cheese-pizza.png" class="img-fluid" alt="">
                    <div id="pizzaToppingDisplay"></div>

                  </div>
                  <br>
                  <h3 class="pizza-font">Your Order:</h3>
                  <p></p>
                  <h6 id="orderSize">Small Pizza</h6>
                  <p></p>
                  <p><b>Toppings:</b></p>
                  <div class="row">
                    <div class="col-6 column-large">
                  <div id="addedToppings"></div>
                </div>
                <div class="col-6 column-large">
                  <div id="addedToppings2"></div>
                </div>
                </div>
                  
              
                  

                </div>
              </div>
              <div class="col-7 border-left-line">
                <!-- Users Topping Selection -->
                <h5 class="pizza-font">Size:</h5>
                <input class="sizeBtn Small" type="radio" name="choice" checked="checked"> Small<br>
                <input class="sizeBtn Medium" type="radio" name="choice"> Medium<br>
                <input class="sizeBtn Large" type="radio" name="choice"> Large<br>
                <input class="sizeBtn extraLarge" type="radio" name="choice"> Extra Large<br><br>
                <div class="border-btm-line"></div><br>
                <h5 class="pizza-font">Toppings:</h5>
                <div class="row">
                <div class="col-5 column-large">
                  <p></p>
                <h6 >Meats</h6>
                <p class="border-btm-line"></p>
                Pepperoni:
                <img class="pepperoni left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="pepperoni mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="pepperoni right pizza-size-button" src="images/rightcircle.png" alt="" srcset=""><br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>
                
                Chicken:
                <img class="chicken left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="chicken mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="chicken right pizza-size-button" src="images/rightcircle.png" alt="" srcset=""><br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>
              
                Beef:
                <img class="beef left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="beef mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="beef right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>
                           
                Sausage:
                <img class="sausage left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="sausage mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="sausage right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double"  type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>

                Steak:
                <img class="steak left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="steak mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="steak right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>
              </div>
              <div class="col-5 border-left-line column-large">
                <p></p>
                <h6>Vegetables/Fruit</h6>
                <p class="border-btm-line"></p>
                Green Peppers:
                <img class="greenpeppers left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="greenpeppers mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="greenpeppers right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>

                Corn:
                <img class="corn left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="corn mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="corn right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>

                Jalapenos:
                <img class="jalapenos left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="jalapenos mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="jalapenos right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>

                Tomatoes:
                <img class="tomatoes left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="tomatoes mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="tomatoes right pizza-size-button" src="images/rightcircle.png" alt="" srcset="">
                <br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>

                Pineapple:
                <img class="pineapple left pizza-size-button" src="images/leftcircle.png" alt="" srcset="">
                <img class="pineapple mid pizza-size-button" src="images/fullcircle.png" alt="" srcset="">
                <img class="pineapple right pizza-size-button" src="images/rightcircle.png" alt="" srcset=""><br>Double: <input class="double" type="checkbox"> Extra: <input class="extra" type="checkbox"><br><br>
              </div>
            </div>
              </div>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <h3 id="totalPrice" class="pizza-font">Total:</h3>
         <div>
          <button class="closeButton" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-warning" data-dismiss="modal" data-toggle="modal"
            data-target="#thankYouModal" data-backdrop="static" data-keyboard="false">Add To Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Thank You Page/Modal -->
  <div class="modal fade" id="thankYouModal" tabindex="-1" role="dialog" aria-labelledby="thankYouModalTitle"
    aria-hidden="true">
    <div id="modal-dialog-thank-you" class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title pizza-font" id="thankYouModalTitle">Thank You For Your Order!</h2>
          <button type="button" class="close closeButton" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p id="thank-you-message2"></p>
          <p id="thank-you-message"></p>
        </div>
      </div>
    </div>
  </div>`;
}

setUp();
