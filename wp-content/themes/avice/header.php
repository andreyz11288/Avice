<!DOCTYPE html>
<!-- saved from url=(0021)<?= get_home_url() ?>/ -->
<html data-n-head="" class="loading">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta data-n-head="true" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
  <meta data-n-head="true" content="AVICE GLOBAL" name="description" data-hid="description">
  <meta data-n-head="true" content="#003366" name="theme-color"><meta data-n-head="true" content="#003366" name="msapplication-TileColor">
  <meta data-n-head="true" content="/ms-icon-144x144.png" name="msapplication-TileImage"><meta data-n-head="true" content="website" property="og:type">
  <meta data-n-head="true" content="<?= get_home_url() ?>/" property="og:url"><meta data-n-head="true" content="AVICE GLOBAL — Success by design" property="og:title">
  <meta data-n-head="true" content="<?= get_home_url() ?>/images/og-image.jpg" property="og:image"><meta data-n-head="true" content="AVICE GLOBAL" property="og:site_name">
  <meta data-n-head="true" content="Ukraine-based company with clients all over the globe." property="og:description">
  <title data-n-head="true">AVICE GLOBAL</title>
  <!-- <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource(1)' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource(2)' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource(3)' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource(4)' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ saved_resource(5)' ?>" width="1" height="1" border="0">
  <img src="<?php  get_template_directory_uri() . '/assets/js/ seg' ?>" width="1" height="1" border="0"> -->
  <?php wp_head() ?>
</head>
<body>
<div id="__nuxt" >
  <div id="__layout" >
    <div >
      <header id="header" class="">
        <strong class="logo">
          <?php the_custom_logo() ?>
        </strong>
            <div class="header-holder" >
              <div class="line-menu1" ></div>
              <div class="nav-drop" >
                <?php wp_nav_menu(); ?>
              </div>
              <div class="line-menu1 line-menu2" ></div>
              <ul class="social-icon">
                <?php if(!dynamic_sidebar('social-link')) ?>
                <!-- <li><a href="<?php get_field('link-fb'); ?>" target="_blank">
                  <img alt="img" src="<?php the_field('img-fb'); ?>"></a>
                </li>
                <li><a href="<?php the_field('link-linked'); ?>" target="_blank">
                  <img alt="img" src="<?php the_field('img-linked'); ?>"></a>
                </li>
                <li><a href="<?php the_field('link-twitter'); ?>" target="_blank">
                  <img alt="img" src="<?php the_field('img-twitter'); ?>"></a>
                </li>
                <li><a href="<?php the_field('link-inst'); ?>" target="_blank">
                  <img alt="img" src="<?php the_field('img-inst'); ?>"></a>
                </li> -->
              </ul>
          </div>
          <div class="header-holder2" >
            <div class="nav-opener" >
              <span></span>
            </div>
            <div class="nav-drop" >
              <div class="line-menu1" ></div>
              <?php wp_nav_menu(); ?>
              <div class="line-menu1 line-menu2" ></div>
            </div>
            <div class="right-block" >
              <ul class="social-icon">
                <?php if(!dynamic_sidebar('social-link')) ?>
                <!-- <li><a href="https://www.facebook.com/aviceglobal/" target="_blank">
                  <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/face.svg"></a>
                </li>
                <li><a href="https://www.linkedin.com/company/aviceinc/?viewAsMember=true" target="_blank">
                  <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/linkin.svg"></a>
                </li>
                <li><a href="https://twitter.com/AviceGlobal" target="_blank">
                  <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/twitter.svg"></a>
                </li>
                <li><a href="https://www.instagram.com/avice_global/" target="_blank">
                  <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/inst.svg"></a>
                </li> -->
              </ul>
              <a href="<?= get_home_url() ?>/contact" class="btn">Contact Us</a>
            </div>
          </div>
        </header>