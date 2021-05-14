<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- CSS stylesheets -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="CSS/reset.css">
        <link rel="stylesheet" href="CSS/template.css">
        <link rel="stylesheet" href="CSS/訂製拼圖.css" />
        <!-- Javascript Libraries -->

        <!-- font-family: "Noto Sans TC"; -->
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
        />
        <!-- metadata -->
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- Title/Icon -->
        <title>Fond Momento</title>
        <link rel="icon" href="images/icon.png" type="image/x-icon" />
    </head>
    <body translate="no">
        <header>
            <div id="banner_top">
                <div id="banner_logo_box">
                    <a href="index.php"
                        ><img
                            id="banner_logo"
                            src="images/logo.png"
                            alt="LOGO: Fond Momento"
                    /></a>
                </div>
                <div id="banner_slogan_box">
                    <img
                        id="banner_slogan"
                        src="images/header_slogan.png"
                        alt="Slogan: Love is not only a sentiment, but also an art"
                    />
                </div>
            </div>
        </header>
        <nav>
            <div id="nav_bar">
                <div id="nav_logo">
                    <a href="index.php"
                        ><img src="images/logo2.png" alt="Logo"
                    /></a>
                </div>
                <ul class="horizontalNav">
                    <li class="nav_items">
                        <a href="訂製拼圖.php">訂製拼圖</a>
                    </li>
                    <li class="nav_items">
                        <a href="裱框服務.php">產品介紹</a>
                    </li>
                    <li class="nav_items">
                        <a href="拼圖遊戲.php">拼圖遊戲</a>
                    </li>
                </ul>
            </div>
            <div class="member_cart horizontalNav">
                <a href="會員.php"
                    ><img
                        class="cart_icons"
                        src="images/icons/1x/member.png"
                        alt="Member Login"
                /></a>
                <a href="購物車.php"
                    ><img
                        class="cart_icons"
                        src="images/icons/1x/cart.png"
                        alt="Shopping Cart"
                /></a>
                <a href="index.php"
                    ><img
                        class="cart_icons"
                        src="images/icons/1x/home.png"
                        alt="Home Page"
                        style="padding-left: 0.20em"
                        
                /></a>
            </div>
            <div class="sideMenu">
                <ul>
                    <li></li>
                    <li><a href="訂製拼圖.php">訂製拼圖</a></li>
                    <li><a href="裱框服務.php">產品介紹</a></li>
                    <li><a href="拼圖遊戲.php">拼圖遊戲</a></li>
                    <li class="member_cart">
                        <a href="會員.php"
                            ><img
                                class="cart_icons"
                                src="images/icons/1x/member.png"
                                alt="Member Login"
                        /></a>
                        <a href="購物車.php"
                            ><img
                                class="cart_icons"
                                src="images/icons/1x/cart.png"
                                alt="Shopping Cart"
                        /></a>
                    </li>
                </ul>
            </div>
        </nav>
        <main>
            <div id="gameBox">
                <img
                    class="margin1 size1"
                    src="images/pintoo_game/pintoo1/0.jfif"
                />
                <div class="table margin1 size1">
                    <!-- 拼圖底座 -->
                    <div class="table_row">
                        <div class="table_cell" id="Q1" data-ans="6"></div>
                        <div class="table_cell" id="Q2" data-ans="5"></div>
                        <div class="table_cell" id="Q3" data-ans="4"></div>
                    </div>
                    <div class="table_row">
                        <div class="table_cell" id="Q4" data-ans="3"></div>
                        <div class="table_cell" id="Q5" data-ans="2"></div>
                        <div class="table_cell" id="Q6" data-ans="1"></div>
                    </div>
                    <!-- 拼圖圖片 -->
                    <div class="ans ui-widget-content" id="ans01" data-ans="1">
                        <img
                            id="pic01" class="ans_pic"
                            src="images/pintoo_game/pintoo2/01.png"
                        />
                        <span></span>
                    </div>
                    <div class="ans ui-widget-content" id="ans02" data-ans="2">
                        <img
                            id="pic02" class="ans_pic"
                            src="images/pintoo_game/pintoo2/02.png"
                        />
                        <span></span>
                    </div>
                    <div class="ans ui-widget-content" id="ans03" data-ans="3">
                        <img
                            id="pic03" class="ans_pic"
                            src="images/pintoo_game/pintoo2/03.png"
                        />
                        <span></span>
                    </div>
                    <div class="ans ui-widget-content" id="ans04" data-ans="4">
                        <img
                            id="pic04" class="ans_pic"
                            src="images/pintoo_game/pintoo2/04.png"
                        />
                        <span></span>
                    </div>
                    <div class="ans ui-widget-content" id="ans05" data-ans="5">
                        <img
                            id="pic05" class="ans_pic"
                            src="images/pintoo_game/pintoo2/05.png"
                        />
                        <span></span>
                    </div>
                    <div class="ans ui-widget-content" id="ans06" data-ans="6">
                        <img
                            id="pic06" class="ans_pic"
                            src="images/pintoo_game/pintoo2/06.png"
                        />
                        <span></span>
                    </div>
                </div>
            </div>
            <div id="finished">
                <srong>* 拼圖完成 *</srong>
                <button id="restart" type="button">重新開始</button>
            </div>
        </main>
        <footer>
            <div class="footerLeft">
                <a href="對對碰.php">
                    <img src="Game/g52.jpg" alt="對對碰" />
                </a>
                <span>僅供教學練習</span>
            </div>

            <ul id="footer_details">
                <li class="footer_items">
                    <a href="關於我們.php">關於我們</a>
                </li>
                <li class="footer_lines">|</li>
                <li class="footer_items">
                    <a href="index.php#contactSection">聯絡我們</a>
                </li>
            </ul>
        </footer>
        <!--k Javascript Scripts -->
        <script src="js/libraries/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
        <script src="js/product.js"></script>
        <script src="js/template.js"></script>
    </body>
</html>
