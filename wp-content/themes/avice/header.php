<!DOCTYPE html>
<html data-n-head="" class="loading">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta data-n-head="true" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
  <meta data-n-head="true" content="AVICE GLOBAL" name="description" data-hid="description">
  <meta data-n-head="true" content="#003366" name="theme-color">
  <meta data-n-head="true" content="#003366" name="msapplication-TileColor">
  <meta data-n-head="true" content="/ms-icon-144x144.png" name="msapplication-TileImage">
  <meta data-n-head="true" content="website" property="og:type">
  <meta data-n-head="true" content="<?= get_home_url() ?>/" property="og:url">
  <meta data-n-head="true" content="AVICE GLOBAL — Success by design" property="og:title">
  <meta data-n-head="true" content="<?= get_home_url() ?>/images/og-image.jpg" property="og:image">
  <meta data-n-head="true" content="AVICE GLOBAL" property="og:site_name">
  <meta data-n-head="true" content="Ukraine-based company with clients all over the globe." property="og:description">
  <title data-n-head="true">AVICE GLOBAL</title>
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
              </ul>
              <a href="<?= get_home_url() ?>/contact" class="btn">Contact Us</a>
            </div>
          </div>
        </header>