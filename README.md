# hacathon
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 <link rel="stylesheet" href="all.min.css" >

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <title>
    shopme.com
  </title>
    <link rel="stylesheet" href="temp.css"/>
    <script defer src="mainn.js"></script>
</head>
  <body>
    <!--nav-->
 <nav class="navbar">
   <div class="navbar-center">
     <span class="nav-icon">
       <i class="fas fa-bars"></i>
     </span>
      <div class="logo">
        <p style="font-size: 2rem;">BRanDS</p>
      </div>
      <div id="input">
        <input type="text" placeholder="search">
        <button class="s-btn">search</button>
      </div>
      <div class="cart-btn">
        <span><i class="fas fa-cart-plus"></i></span>
        <div class="cart-items">0</div>
      </div>
   </div>
 </nav>
    <!--nav end-->
    <!--carousel-->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/November/SSW/GW/1/Super-saver-3000x1200._CB415527686_.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/mg19/2020/PC/Storage/Oct/Jupiter/W3Headers/PD_MC_Desktophero_3000x1200--UnRecHero-21stNov-2020-3-2-1._CB415611713_.jpg" class="d-block w-100" alt="...">
        </div>
        
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--carousel end-->
<section class="products">
   <div id="container">
    <div class="col-md-8 col-lg-8 col-sm-6 mx-auto product-center ">
     
  </div>
   </div>
</section>
<!--cart-->
  <div class="cart-layout">
    <h2>Your cart</h2>
    <span class="close-icon"><i class="fas fa-window-close"></i></span>
    <div class="cart">
     <div class="cart-content">
       <div class="cart-itam">
         <ul id="cartitam"></ul>
         <span class="remore">remove</span>
       </div>
       <div>
         <i class="fas fa-chevron-up"></i>
         <p class="aitem-amount">1</p>
         <i class="fas fa-chevron-down"></i>
       </div>
     </div>
    </div>
  </div>
  <div id="selected">

  </div>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  </body>
</html> 
