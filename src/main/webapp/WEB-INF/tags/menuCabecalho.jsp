<!-- jQuery 2.2.3 (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.7 (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/bootstrap/js/bootstrap.min.js"></script>
<!-- iCheck (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/plugins/iCheck/icheck.min.js"></script>
<!-- (Obrigatorio) -->
<script src="${pageContext.request.contextPath}/lib/AdminLTE/dist/js/app.js" type="text/javascript"></script>
<!-- Bootstrap CSS (Obrigatorio) -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/lib/bootstrap/css/bootstrap.min.css">
<!-- Theme style (Obrigatorio) -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/lib/AdminLTE/dist/css/AdminLTE.min.css">
<!-- (Obrigatorio)  -->
<link rel="stylesheet" href="${pageContext.request.contextPath}/lib/AdminLTE/dist/css/skins/_all-skins.min.css">
<!-- Font Awesome (Obrigatorio) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
<!-- Ionicons (Obrigatorio) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

<!-- Logo -->
<!--    <a href="index.jsp" class="logo">
         mini logo for sidebar mini 50x50 pixels 
        <span class="logo-mini"><b>Sis</b>Info</span>
         logo for regular state and mobile devices 
        <span class="logo-lg"><b>SisInfo</b> Web</span>
    </a>-->

<header class="main-header">
    <nav class="navbar navbar-fixed-top">

        <div class="container-fluid">
            <div class="navbar-header">
                <a href="Dashboard" class="navbar-brand"><b>Início do Dashboard</b></a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                    <i class="fa fa-bars"></i>
                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="navbar-collapse">
                <!--                <ul class="nav navbar-nav">
                                    <li><a href="UsuarioController?action=select">Lista de Usuários <span class="sr-only"></span></a></li>
                                    <li class="dropdown">
                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Estoque <span class="caret"></span></a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a href="#">Action</a></li>
                                            <li><a href="#">Another action</a></li>
                                            <li><a href="#">Something else here</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#">Separated link</a></li>
                                            <li class="divider"></li>
                                            <li><a href="#">One more separated link</a></li>
                                        </ul>
                                    </li>
                                </ul>-->


                <!-- Menu do lado direito -->
                <ul class="nav navbar-nav navbar-right">

                    <!-- Dados do usuario -->
                    <li class="dropdown user user-menu">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <img src="${pageContext.request.contextPath}/lib/img/ic_account_circle.png" class="user-image" alt="User Image">
                            <span class="hidden-xs">Nome do Usuário</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- User image -->
                            <li class="user-header">
                                <img src="${pageContext.request.contextPath}/lib/img/ic_account_circle.png" class="img-circle" alt="User Image">

                                <p>
                                    Nome do Usuário - Web Developer
                                    <small>Membro desde Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Abaixo do usuario -->
                            <!--<li class="user-body">
                              <div class="row">
                                <div class="col-xs-4 text-center">
                                  <a href="#">Followers</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                  <a href="#">Sales</a>
                                </div>
                                <div class="col-xs-4 text-center">
                                  <a href="#">Friends</a>
                                </div>
                              </div>
                            <!-- /.row --
                            </li> -->
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#" class="btn btn-default btn-flat">Meu Perfil</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>