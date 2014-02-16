<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Dashboard - Ace Admin</title>
        <meta name="description" content="overview &amp; stats" />
        <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="assets/css/font-awesome.css" />
        <!--[if IE 7]>
          <link rel="stylesheet" href="assets/css/font-awesome-ie7.min.css" />
        <![endif]-->
        <link rel="stylesheet" href="assets/css/ace-fonts.css" />
        <link rel="stylesheet" href="assets/css/ace.min.css" />
        <link rel="stylesheet" href="assets/css/ace-rtl.min.css" />
        <link rel="stylesheet" href="assets/css/ace-skins.min.css" />
        <link rel="stylesheet" href="assets/css/global.css" />
        <!--[if lte IE 8]>
          <link rel="stylesheet" href="assets/css/ace-ie.min.css" />
        <![endif]-->
        <!-- inline styles related to this page -->
        <!-- ace settings handler -->
        <script src="assets/js/ace-extra.min.js"></script>
        <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!--[if lt IE 9]>
        <script src="assets/js/html5shiv.js"></script>
        <script src="assets/js/respond.min.js"></script>
        <![endif]-->
        <style></style>
    </head>

    <body>
        <div class="navbar navbar-default" id="navbar">

            <div class="navbar-container" id="navbar-container">
                <div class="navbar-header pull-left">
                    <a href="#" class="navbar-brand">
                        <small>
                            <i class="fa fa-trophy fa-lg"></i>
                            Plataforma Educativa
                        </small>
                    </a><!-- /.brand -->
                </div><!-- /.navbar-header -->

                <div class="navbar-header pull-right" role="navigation">
                    <ul class="nav ace-nav">
                        <li class="grey">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-position fa fa-tasks fa-lg"></i>
                                <span class="badge badge-grey">4</span>
                            </a>

                            <ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                                <li class="dropdown-header">
                                    <i class="icon-ok"></i>
                                    4 Actividades por completar
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">Software Update</span>
                                            <span class="pull-right">65%</span>
                                        </div>

                                        <div class="progress progress-mini ">
                                            <div style="width:65%" class="progress-bar "></div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">Hardware Upgrade</span>
                                            <span class="pull-right">35%</span>
                                        </div>

                                        <div class="progress progress-mini ">
                                            <div style="width:35%" class="progress-bar progress-bar-danger"></div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">Unit Testing</span>
                                            <span class="pull-right">15%</span>
                                        </div>

                                        <div class="progress progress-mini ">
                                            <div style="width:15%" class="progress-bar progress-bar-warning"></div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">Bug Fixes</span>
                                            <span class="pull-right">90%</span>
                                        </div>

                                        <div class="progress progress-mini progress-striped active">
                                            <div style="width:90%" class="progress-bar progress-bar-success"></div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        Ver las actividades pendientes
                                        <i class="icon-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="purple">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-position fa fa-bell fa-lg icon-animated-bell"></i>
                                <span class="badge badge-important">8</span>
                            </a>

                            <ul class="pull-right dropdown-navbar navbar-pink dropdown-menu dropdown-caret dropdown-close">
                                <li class="dropdown-header">
                                    <i class="icon-warning-sign"></i>
                                    8 Notificaciones
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">
                                                <i class="btn btn-xs no-hover btn-pink icon-comment"></i>
                                                New Comments
                                            </span>
                                            <span class="pull-right badge badge-info">+12</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="btn btn-xs btn-primary icon-user"></i>
                                        Bob just signed up as an editor ...
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">
                                                <i class="btn btn-xs no-hover btn-success icon-shopping-cart"></i>
                                                New Orders
                                            </span>
                                            <span class="pull-right badge badge-success">+8</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <div class="clearfix">
                                            <span class="pull-left">
                                                <i class="btn btn-xs no-hover btn-info icon-twitter"></i>
                                                Followers
                                            </span>
                                            <span class="pull-right badge badge-info">+11</span>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        Ver todas las notificaciones
                                        <i class="icon-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="green">
                            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <i class="icon-position fa fa-envelope fa-lg icon-animated-vertical"></i>
                                <span class="badge badge-success">5</span>
                            </a>

                            <ul class="pull-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                                <li class="dropdown-header">
                                    <i class="icon-envelope-alt"></i>
                                    5 Mensajes
                                </li>

                                <li>
                                    <a href="#">
                                        <img src="assets/avatars/avatar.png" class="msg-photo" alt="Alex's Avatar" />
                                        <span class="msg-body">
                                            <span class="msg-title">
                                                <span class="blue">Alex:</span>
                                                Ciao sociis natoque penatibus et auctor ...
                                            </span>

                                            <span class="msg-time">
                                                <i class="icon-time"></i>
                                                <span>a moment ago</span>
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img src="assets/avatars/avatar3.png" class="msg-photo" alt="Susan's Avatar" />
                                        <span class="msg-body">
                                            <span class="msg-title">
                                                <span class="blue">Susan:</span>
                                                Vestibulum id ligula porta felis euismod ...
                                            </span>

                                            <span class="msg-time">
                                                <i class="icon-time"></i>
                                                <span>20 minutes ago</span>
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <img src="assets/avatars/avatar4.png" class="msg-photo" alt="Bob's Avatar" />
                                        <span class="msg-body">
                                            <span class="msg-title">
                                                <span class="blue">Bob:</span>
                                                Nullam quis risus eget urna mollis ornare ...
                                            </span>

                                            <span class="msg-time">
                                                <i class="icon-time"></i>
                                                <span>3:15 pm</span>
                                            </span>
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a href="inbox.html">
                                        Ver todos los mensajes
                                        <i class="icon-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li class="light-blue">
                            <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                                <img class="nav-user-photo" src="assets/avatars/user.jpg" alt="Jason's Photo" />
                                <span class="user-info">
                                    <small>Bienvenido,</small>
                                    Luis Fernando
                                </span>
                                <i class="icon-caret-down"></i>
                            </a>

                            <ul class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                                <li>
                                    <a href="#">
                                        <i class="icon-old fa fa-cogs fa-lg"></i>
                                        Configuración
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="icon-old fa fa-user"></i>
                                        Pefil
                                    </a>
                                </li>

                                <li class="divider"></li>

                                <li>
                                    <a href="#">
                                        <i class="icon-old fa fa-power-off fa-lg"></i>
                                        Salir
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul><!-- /.ace-nav -->
                </div><!-- /.navbar-header -->
            </div><!-- /.container -->
        </div>
        <div class="main-container" id="main-container">
            <div class="main-container-inner">
                <a class="menu-toggler" id="menu-toggler" href="#">
                    <span class="menu-text"></span>
                </a>
                <div class="sidebar" id="sidebar">
                    <ul class="nav nav-list">
                        <li class="<?= ($tab == "inicio") ? "active" : "" ?>">
                            <a href="/lms">
                                <i class="icon-position fa fa-book fa-lg"></i> 
                                <span class="menu-text"> Cálculo Diferencial </span>
                            </a>
                        </li>

                        <li class="<?= ($tab == "anuncios") ? "active" : "" ?>">
                            <a href="anuncios">
                                <i class="icon-position fa fa-bullhorn fa-lg"></i>
                                <span class="menu-text"> Anuncios </span>
                            </a>
                        </li>
                        <li class="<?= ($tab == "info") ? "active" : "" ?>">
                            <a href="informacion">
                                <i class="icon-position fa fa-info fa-lg"></i>
                                <span class="menu-text"> Información del curso </span>
                            </a>
                        </li>
                        <li class="<?= ($tab == "contenido") ? "active open" : "" ?>">
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-position fa fa-th-list fa-lg"></i>
                                <span class="menu-text"> Contenido </span>

                                <b class="arrow fa fa-angle-down"></b>
                            </a>

                            <ul class="submenu">
                                <li class="<?= ($tab == "contenido") ? "active" : "" ?>">
                                    <a href="contenido">
                                        <i class="icon-position fa fa-angle-double-right"></i>
                                        Limites
                                    </a>
                                </li>
                                <li class="<?= ($tab == "") ? "active" : "" ?>">
                                    <a href="contenido">
                                        <i class="icon-position fa fa-angle-double-right"></i>
                                        Derivadas
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="<?= ($tab == "videos" || $tab == "textFiles" ) ? "active open" : "" ?>">
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-position fa fa-briefcase fa-lg"></i>
                                <span class="menu-text"> Recursos </span>

                                <b class="arrow fa fa-angle-down"></b>
                            </a>

                            <ul class="submenu">
                                <li class="<?= ($tab == "videos") ? "active" : "" ?>">
                                    <a href="videos">
                                        <i class="icon-position fa fa-angle-double-right"></i>
                                        <i class="icon-position fa fa-play-circle-o fa-lg"></i> 
                                        Videos
                                    </a>
                                </li>
                                <li class="<?= ($tab == "textFiles") ? "active" : "" ?>">
                                    <a href="textFiles">
                                        <i class="icon-position fa fa-angle-double-right"></i>
                                        <i class="icon-position fa fa-file-text fa-lg"></i> 
                                        PDFs
                                    </a>
                                </li>
                            </ul>
                        </li>
                         <li class="<?= ($tab == "evaluaciones") ? "active" : "" ?>">
                            <a href="evaluaciones">
                                <i class="icon-position fa fa-rocket fa-lg"></i>
                                <span class="menu-text"> Evaluaciones </span>
                            </a>
                        </li>


                        <li>
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-position fa fa-comments-o fa-lg"></i>
                                <span class="menu-text"> Foro </span>

                                <b class="arrow icon-angle-down"></b>
                            </a>

                            <ul class="submenu">
                                <li>
                                    <a href="tables.html">
                                        <i class="icon-double-angle-right"></i>
                                        Simple &amp; Dynamic
                                    </a>
                                </li>

                                <li>
                                    <a href="jqgrid.html">
                                        <i class="icon-double-angle-right"></i>
                                        jqGrid plugin
                                    </a>
                                </li>
                            </ul>
                        </li>






                        <li>
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-position fa fa-globe fa-lg"></i>
                                <span class="menu-text"> Recursos externos </span>

                                <b class="arrow icon-angle-down"></b>
                            </a>

                            <ul class="submenu">
                                <li>
                                    <a href="profile.html">
                                        <i class="icon-double-angle-right"></i>
                                        User Profile
                                    </a>
                                </li>

                                <li>
                                    <a href="inbox.html">
                                        <i class="icon-double-angle-right"></i>
                                        Inbox
                                    </a>
                                </li>

                                <li>
                                    <a href="pricing.html">
                                        <i class="icon-double-angle-right"></i>
                                        Pricing Tables
                                    </a>
                                </li>

                                <li>
                                    <a href="invoice.html">
                                        <i class="icon-double-angle-right"></i>
                                        Invoice
                                    </a>
                                </li>

                                <li>
                                    <a href="timeline.html">
                                        <i class="icon-double-angle-right"></i>
                                        Timeline
                                    </a>
                                </li>

                                <li>
                                    <a href="login.html">
                                        <i class="icon-double-angle-right"></i>
                                        Login &amp; Register
                                    </a>
                                </li>
                            </ul>
                        </li>


                    </ul><!-- /.nav-list -->

                    <div class="sidebar-collapse" id="sidebar-collapse">
                        <i class="icon-double-angle-left fa fa-angle-double-left fa-lg" data-icon1="icon-double-angle-left fa fa-angle-double-left fa-lg" data-icon2="icon-double-angle-right fa fa-angle-double-right fa-lg"></i>
                    </div>
                </div>
                <div class="main-content">
                    <div class="page-content">
                        <div class="page-header">
                            <h1>
                                Cálculo Diferencial 
                                <?php if ($tab != "inicio") { ?>
                                    <small>
                                        <i class="fa fa-angle-right fa-lg"></i>
                                        <?= $tab ?>
                                    </small>
                                <?php } ?>
                            </h1>
                        </div><!-- /.page-header -->