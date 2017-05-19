<%@include file="importsCss.jsp" %>

<header class="main-header">
    <!-- Logo -->
    <a href="Index" class="logo">
        <!--         mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>SI</b>W</span>
        <!--         logo for regular state and mobile devices -->
        <span class="logo-lg"><b>SisInfo</b> Web</span>
    </a>

    <nav class="navbar navbar-fixed-top">

        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span class="sr-only">Toggle navigation</span>
        </a>
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
                                    <a href="Logout" class="btn btn-default btn-flat">Sair</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>