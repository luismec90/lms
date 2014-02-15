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
                                        <i class="icon-cog"></i>
                                        Configuración
                                    </a>
                                </li>

                                <li>
                                    <a href="#">
                                        <i class="icon-user"></i>
                                        Pefil
                                    </a>
                                </li>

                                <li class="divider"></li>

                                <li>
                                    <a href="#">
                                        <i class="icon-off"></i>
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


                    <!--                    <div class="sidebar-shortcuts" id="sidebar-shortcuts">
                                            <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
                                                <button class="btn btn-success">
                                                    <i class="icon-signal"></i>
                                                </button>
                    
                                                <button class="btn btn-info">
                                                    <i class="icon-pencil"></i>
                                                </button>
                    
                                                <button class="btn btn-warning">
                                                    <i class="icon-group"></i>
                                                </button>
                    
                                                <button class="btn btn-danger">
                                                    <i class="icon-cogs"></i>
                                                </button>
                                            </div>
                    
                                            <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
                                                <span class="btn btn-success"></span>
                    
                                                <span class="btn btn-info"></span>
                    
                                                <span class="btn btn-warning"></span>
                    
                                                <span class="btn btn-danger"></span>
                                            </div>
                                        </div> #sidebar-shortcuts -->

                    <ul class="nav nav-list">
                        <li class="active">
                            <a href="index.html">
                                <i class="icon-position fa fa-book fa-lg"></i> 
                                <span class="menu-text"> Cálculo Diferencial </span>
                            </a>
                        </li>

                        <li>
                            <a href="typography.html">
                                <i class="icon-position fa fa-bullhorn fa-lg"></i>
                                <span class="menu-text"> Anuncios </span>
                            </a>
                        </li>

                        <li>
                            <a href="typography.html">
                                <i class="icon-position fa fa-desktop fa-lg"></i>
                                <span class="menu-text"> Introducción </span>
                            </a>
                        </li>

                        <li>
                            <a href="typography.html">
                                <i class="icon-position fa fa-desktop fa-lg"></i>
                                <span class="menu-text"> Videos </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-position fa fa-desktop fa-lg"></i>
                                <span class="menu-text"> Meterial </span>

                                <b class="arrow fa fa-angle-down fa-lg"></b>
                            </a>

                            <ul class="submenu">
                                <li>
                                    <a href="elements.html">
                                        <i class="icon-position fa fa-desktop fa-lg"></i>
                                        Elements
                                    </a>
                                </li>

                                <li>
                                    <a href="buttons.html">
                                        <i class="icon-position fa fa-desktop fa-lg"></i>
                                        Buttons &amp; Icons
                                    </a>
                                </li>

                                <li>
                                    <a href="treeview.html">
                                        <i class="icon-position fa fa-desktop fa-lg"></i>
                                        Treeview
                                    </a>
                                </li>

                                <li>
                                    <a href="jquery-ui.html">
                                        <i class="icon-double-angle-right"></i>
                                        jQuery UI
                                    </a>
                                </li>

                                <li>
                                    <a href="nestable-list.html">
                                        <i class="icon-double-angle-right"></i>
                                        Nestable Lists
                                    </a>
                                </li>

                                <li>
                                    <a href="#" class="dropdown-toggle">
                                        <i class="icon-double-angle-right"></i>

                                        Three Level Menu
                                        <b class="arrow icon-angle-down"></b>
                                    </a>

                                    <ul class="submenu">
                                        <li>
                                            <a href="#">
                                                <i class="icon-leaf"></i>
                                                Item #1
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" class="dropdown-toggle">
                                                <i class="icon-pencil"></i>

                                                4th level
                                                <b class="arrow icon-angle-down"></b>
                                            </a>

                                            <ul class="submenu">
                                                <li>
                                                    <a href="#">
                                                        <i class="icon-plus"></i>
                                                        Add Product
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <i class="icon-eye-open"></i>
                                                        View Products
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-list"></i>
                                <span class="menu-text"> Evaluaciones </span>

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
                                <i class="icon-edit"></i>
                                <span class="menu-text"> Foro </span>

                                <b class="arrow icon-angle-down"></b>
                            </a>

                            <ul class="submenu">
                                <li>
                                    <a href="form-elements.html">
                                        <i class="icon-double-angle-right"></i>
                                        Form Elements
                                    </a>
                                </li>

                                <li>
                                    <a href="form-wizard.html">
                                        <i class="icon-double-angle-right"></i>
                                        Wizard &amp; Validation
                                    </a>
                                </li>

                                <li>
                                    <a href="wysiwyg.html">
                                        <i class="icon-double-angle-right"></i>
                                        Wysiwyg &amp; Markdown
                                    </a>
                                </li>

                                <li>
                                    <a href="dropzone.html">
                                        <i class="icon-double-angle-right"></i>
                                        Dropzone File Upload
                                    </a>
                                </li>
                            </ul>
                        </li>



                        <li>
                            <a href="calendar.html">
                                <i class="icon-calendar"></i>

                                <span class="menu-text">
                                    Calendario
                                    <span class="badge badge-transparent tooltip-error" title="" data-original-title="2&nbsp;Important&nbsp;Events">
                                        <i class="icon-warning-sign red bigger-130"></i>
                                    </span>
                                </span>
                            </a>
                        </li>



                        <li>
                            <a href="#" class="dropdown-toggle">
                                <i class="icon-tag"></i>
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
                                <small>
                                    <i class="fa fa-angle-right fa-lg"></i>
                                   Videos
                                </small>
                            </h1>
                        </div><!-- /.page-header -->
                        <div class="row-fluid">
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                        </div>
                        <div class="row-fluid">
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>


                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                    </h3>
                                    <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>

                                </li>

                            </ul>
                        </div>
                           <div class="row-fluid">
                            <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>

                                          
                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                </h3>
                                <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>
                  
                                </li>
                                 
                            </ul>
                                   <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>

                                          
                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                </h3>
                                <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>
                  
                                </li>
                                 
                            </ul>
                                   <ul class="ace-thumbnails col-lg-3 col-md-4 col-sm-6">
                                <li>
                                    <div>
                                        <img width="100%" height="100%" alt="150x150" src="assets/img/julio_profe.jpg">
                                        <div class="text">
                                            <div class="inner">
                                                <span></span>

                                          
                                                <a href="assets/img/julio_profe.jpg" data-rel="colorbox" class="cboxElement">
                                                    <i class="icon-zoom-in"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="fa fa-play fa-4x"></i>
                                                </a>

                                                <a href="#">
                                                    <i class="icon-share-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <h3><a href="#project-link">Limites</a>
                                </h3>
                                <p>En este video aprenderas los conceptos básicos de los limites, también contiene varios ejercicios explicados paso a paso </p>
                  
                                </li>
                                 
                            </ul>
                        </div>
                        <!-- PAGE CONTENT ENDS -->
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.page-content -->
        </div><!-- /.main-content -->

        <!-- basic scripts -->
        <!--[if !IE]> -->
        <script type="text/javascript">
            window.jQuery || document.write("<script src='assets/js/jquery-2.0.3.min.js'>" + "<" + "/script>");
        </script>
        <!-- <![endif]-->
        <!--[if IE]>
        <script type="text/javascript">
        window.jQuery || document.write("<script src='assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
        </script>
        <![endif]-->
        <script src="assets/js/bootstrap.min.js"></script>
        <!-- page specific plugin scripts -->
        <script src="assets/js/jquery-ui-1.10.3.custom.min.js"></script>
        <!-- ace scripts -->
        <script src="assets/js/ace.min.js"></script>
        <script src="assets/js/global.js"></script>

    </body>
</html>
