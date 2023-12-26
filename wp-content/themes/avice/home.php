<?php
/*
Template Name: home
*/
?>

<?php get_header(); ?>
<div id="wrapper" class="" bis_skin_checked="1">
  <div id="backgrounds" bis_skin_checked="1">
    <div class="back back0" bis_skin_checked="1"></div>
    <div class="back back1" bis_skin_checked="1"></div>
    <div class="back back2" bis_skin_checked="1"></div>
  </div>
  <div class="wow-cnt" bis_skin_checked="1">
    <main id="main">
      <section class="visual-section">
        <div class="rotation-holder" bis_skin_checked="1">
          <div class="rotation" bis_skin_checked="1">
            <div style="transform: rotate(210deg);" bis_skin_checked="1"></div>
            </div>
          </div>
          <div class="container" bis_skin_checked="1">
            <div class="col-holder" bis_skin_checked="1">
              <div class="col" bis_skin_checked="1">
                <div class="visual-text" bis_skin_checked="1">
                  <?php the_field('visual-section-text', 8) ?>
                  <div class="img-holder 2" bis_skin_checked="1">
                    <img alt="img" src="<?php the_field('visual-section-img', 8) ?>">
                  </div>
                </div>
                <a href="<?php echo get_home_url() ?>/contact" class="btn">Contact Us</a>
              </div>
              <div class="col d-flex align-center" bis_skin_checked="1">
                <div class="headings" bis_skin_checked="1">
                  <?php
                  global $post;
                  $myposts = get_posts([
                    'numberposts' => -1,
                    'category_name' => 'visual-section',
                    'order' => 'ASC',
                  ]);

                  if( $myposts ){
                    
                    foreach( $myposts as $post ){
                      setup_postdata( $post );
                      ?>
                      <div class="layer" bis_skin_checked="1">
                        <h1>
                          <span>
                            <?php the_content() ?>
                          </span>
                        </h1>
                      </div>
                      <?php
                      }
                    }
                    wp_reset_postdata();
                    ?>
                    </div>
                    <div class="particles" bis_skin_checked="1">
                      <div class="loader" bis_skin_checked="1">
                        <canvas id='scene'></canvas>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mob-social" bis_skin_checked="1">
                  <ul class="social-icon">
                    <li>
                      <a href="https://www.facebook.com/aviceglobal/" target="_blank">
                        <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/face.svg">
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/aviceinc/?viewAsMember=true" target="_blank">
                        <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/linkin.svg">
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/AviceGlobal" target="_blank">
                        <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/twitter.svg">
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/avice_global/" target="_blank">
                        <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/inst.svg">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="left-bg-el" bis_skin_checked="1"></div>
            </section>
            <section class="experience-section">
              <div class="container" bis_skin_checked="1">
                <div class="caption-holder" bis_skin_checked="1">
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter out">W</span>
                    <span class="letter out">e</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">c</span>
                    <span class="letter out">r</span>
                    <span class="letter out">e</span>
                    <span class="letter out">a</span>
                    <span class="letter out">t</span>
                    <span class="letter out">e</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">e</span>
                    <span class="letter out">x</span>
                    <span class="letter out">p</span>
                    <span class="letter out">e</span>
                    <span class="letter out">r</span>
                    <span class="letter out">i</span>
                    <span class="letter out">e</span>
                    <span class="letter out">n</span>
                    <span class="letter out">c</span>
                    <span class="letter out">e</span>
                    <span class="letter out">s</span>
                  </h2>
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter in">W</span>
                    <span class="letter in">e</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">b</span>
                    <span class="letter in">u</span>
                    <span class="letter in">i</span>
                    <span class="letter in">l</span>
                    <span class="letter in">d</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">t</span>
                    <span class="letter in">r</span>
                    <span class="letter in">u</span>
                    <span class="letter in">s</span>
                    <span class="letter in">t</span>
                    <span class="letter in">-</span>
                    <span class="letter in">w</span>
                    <span class="letter in">o</span>
                    <span class="letter in">r</span>
                    <span class="letter in">t</span>
                    <span class="letter in">h</span>
                    <span class="letter in">y</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">r</span>
                    <span class="letter in">e</span>
                    <span class="letter in">l</span>
                    <span class="letter in">a</span>
                    <span class="letter in">t</span>
                    <span class="letter in">i</span>
                    <span class="letter in">o</span>
                    <span class="letter in">n</span>
                    <span class="letter in">s</span>
                  </h2>
                  <p>That improve your customer’s satisfaction and grow your business</p>
                </div>
              </div>
              <div class="experience-holder" id="experience" bis_skin_checked="1">
                <div class="container" bis_skin_checked="1">
                  <div class="col-holder" bis_skin_checked="1">
                    <?php
                    global $post;
                    $myposts = get_posts([
                      'numberposts' => -1,
                      'category_name' => 'experience-section',
                      'order' => 'ASC',
                    ]);
                    
                    if( $myposts ){
                      $i = 0;
                      foreach( $myposts as $post ){
                        setup_postdata( $post );
                        $i += 1;
                        ?>
                        <div class="col" bis_skin_checked="1">
                          <div class="img-holder show-in fadeInUp <?php if ($i === 2 || $i === 4) {echo 'delay500';}; ?>" bis_skin_checked="1">
                          <img alt="img" src="<?php the_post_thumbnail_url(); ?>" class="show-in pulse <?php if ($i === 2 || $i === 4) {echo 'delay1000';};?>">
                        </div>
                        <div class="col-text show-in fadeInUp <?php if ($i === 2 || $i === 4) {echo 'delay500';};?>" bis_skin_checked="1">
                        <h3><?php the_title(); ?></h3>
                        <p><?php the_content(); ?></p>
                      </div>
                    </div>
                    <?php 
                    }
                  }
                  wp_reset_postdata();
                  ?>
                  <a href="<?php  ?><?php echo get_home_url() ?>/expertise" class="btn">Learn more</a>
                </div>
                <div class="left-white" bis_skin_checked="1"></div>
                <div class="right-white" bis_skin_checked="1"></div>
              </div>
            </section>
            <section class="benefits-section" id="benefits">
              <div class="container" bis_skin_checked="1">
                <div class="caption-holder" bis_skin_checked="1">
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter out">W</span>
                    <span class="letter out">o</span>
                    <span class="letter out">r</span>
                    <span class="letter out">k</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">w</span>
                    <span class="letter out">i</span>
                    <span class="letter out">t</span>
                    <span class="letter out">h</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">u</span>
                    <span class="letter out">s</span>
                  </h2>
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter in">O</span>
                    <span class="letter in">n</span>
                    <span class="letter in">l</span>
                    <span class="letter in">y</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">t</span>
                    <span class="letter in">o</span>
                    <span class="letter in">p</span>
                    <span class="letter in">-</span>
                    <span class="letter in">s</span>
                    <span class="letter in">k</span>
                    <span class="letter in">i</span>
                    <span class="letter in">l</span>
                    <span class="letter in">l</span>
                    <span class="letter in">e</span>
                    <span class="letter in">d</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">e</span>
                    <span class="letter in">n</span>
                    <span class="letter in">g</span>
                    <span class="letter in">i</span>
                    <span class="letter in">n</span>
                    <span class="letter in">e</span>
                    <span class="letter in">e</span>
                    <span class="letter in">r</span>
                    <span class="letter in">s</span>
                  </h2>
                  <p>We’re a passionate team of professionals delivering only the best results</p>
                </div>
                <div class="col-holder" bis_skin_checked="1">
                  <?php
                  global $post;
                  $myposts = get_posts([
                    'numberposts' => -1,
                    'category_name' => 'benefits-section',
                    'order' => 'ASC',
                  ]);
                  
                  if( $myposts ){
                    $i = 0;
                    
                    foreach( $myposts as $post ){
                      setup_postdata( $post );
                      $i += 1;
                      ?>
                      <div class="col" bis_skin_checked="1">
                        <div class="img-holder" bis_skin_checked="1">
                          <canvas id="waves<?= $i ?>"></canvas>
                          <img alt="img" src="<?php the_post_thumbnail_url(); ?>">
                          <div class="rectangle1" bis_skin_checked="1"></div>
                          <div class="rectangle2" bis_skin_checked="1"></div>
                          <div class="rectangle3" bis_skin_checked="1"></div>
                          <div class="rectangle4" bis_skin_checked="1"></div>
                          <div class="rectangle5" bis_skin_checked="1"></div>
                          <div class="rectangle6" bis_skin_checked="1"></div>
                          <div class="rectangle7" bis_skin_checked="1"></div>
                        </div>
                        <div class="col-text" bis_skin_checked="1">
                          <h3><?php the_title(); ?></h3>
                          <p class="show-in fadeInDown <?php if ($i === 2 || $i === 4) {echo 'delay500';}; ?>"><?php the_content(); ?></p>
                        </div>
                      </div>
                      <?php 
                    }
                  } 
                  wp_reset_postdata(); ?>
                </div>
              </div>
            </section>
            <section class="works-section" id="works">
              <div class="container" bis_skin_checked="1">
                <div class="caption-holder" bis_skin_checked="1">
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter out">L</span>
                    <span class="letter out">a</span>
                    <span class="letter out">t</span>
                    <span class="letter out">e</span>
                    <span class="letter out">s</span>
                    <span class="letter out">t</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">w</span>
                    <span class="letter out">o</span>
                    <span class="letter out">r</span>
                    <span class="letter out">k</span>
                    <span class="letter out">s</span>
                  </h2>
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter in">W</span>
                    <span class="letter in">e</span>
                    <span class="letter in">'</span>
                    <span class="letter in">r</span>
                    <span class="letter in">e</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">p</span>
                    <span class="letter in">r</span>
                    <span class="letter in">o</span>
                    <span class="letter in">u</span>
                    <span class="letter in">d</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">t</span>
                    <span class="letter in">o</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">s</span>
                    <span class="letter in">h</span>
                    <span class="letter in">a</span>
                    <span class="letter in">r</span>
                    <span class="letter in">e</span>
                  </h2>
                  <p>Our works are based on trust and confidence, that’s why they are so beautiful.</p>
                </div>
                <div class="col-holder" bis_skin_checked="1">
                  <div class="col" bis_skin_checked="1">
                    <div class="rectangular-holder1" bis_skin_checked="1">
                      <div class="rectangle1" bis_skin_checked="1"></div>
                      <div class="rectangle2" bis_skin_checked="1"></div>
                      <div class="rectangle3" bis_skin_checked="1"></div>
                      <div class="rectangle4" bis_skin_checked="1"></div>
                      <div class="rectangle5" bis_skin_checked="1"></div>
                      <div class="rectangle6" bis_skin_checked="1"></div>
                      <div class="rectangle7" bis_skin_checked="1"></div>
                    </div>
                    <?php
                    global $post;
                    $myposts = get_posts([
                      'numberposts' => -1,
                      'category_name' => 'works-section',
                      'order' => 'ASC',
                    ]);

                    if( $myposts ){
                      foreach( $myposts as $post ){
                        setup_postdata( $post );
                        ?>
                    <div class="slide" bis_skin_checked="1">
                      <div class="prev-works" bis_skin_checked="1">
                        <span class="dots"></span>
                        <div class="img-holder" bis_skin_checked="1">
                          <img alt="img" src="<?php the_post_thumbnail_url(); ?>">
                        </div>
                      </div>
                    </div>
                    <?php }} wp_reset_postdata(); ?>
                    <div class="rectangular-holder2" bis_skin_checked="1">
                      <div class="rectangle1" bis_skin_checked="1"></div>
                      <div class="rectangle2" bis_skin_checked="1"></div>
                      <div class="rectangle3" bis_skin_checked="1"></div>
                      <div class="rectangle4" bis_skin_checked="1"></div>
                      <div class="rectangle5" bis_skin_checked="1"></div>
                      <div class="rectangle6" bis_skin_checked="1"></div>
                      <div class="rectangle7" bis_skin_checked="1"></div>
                    </div>
                  </div>
                  <div class="col" bis_skin_checked="1">
                    <div class="slider-btn show" bis_skin_checked="1">
                      <svg viewBox="0 0 120 120" class="progress">
                        <circle cx="60" cy="60" r="54" style="transition-duration: 0ms;"></circle>
                      </svg>
                      <img class="arrow" alt="img" src="<?php bloginfo('template_url'); ?>/assets/img//arrow-1.svg">
                      <svg viewBox="0 0 7 11" class="arrow" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="<?php bloginfo('template_url'); ?>/assets/img/arrow-1.svg ?>"></use>
                      </svg>
                    </div>
                    <div class="col-text" bis_skin_checked="1">
                      <div class="headings" bis_skin_checked="1">
                        <?php
                        global $post;
                        $myposts = get_posts([
                          'numberposts' => -1,
                          'category_name' => 'works-section',
                          'order' => 'ASC',
                        ]);
                        
                        if( $myposts ){
                          foreach( $myposts as $post ){
                            setup_postdata( $post );
                            ?>
                        <div class="layer1" bis_skin_checked="1">
                          <h2>
                            <span class="caption-slide"><?php the_title(); ?></span>
                            <br>
                            <span class="caption-text"><?php the_content(); ?></span>
                          </h2>
                        </div>
                        <?php }} wp_reset_postdata(); ?>
                      </div>
                    </div>
                    <a href="<?php echo get_home_url() ?>/portfolio" class="btn">View more</a>
                  </div>
                </div>
                <ul class="brend">
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/google.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/grove.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/liva.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/hummel.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/diretto.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/sony.svg">
                  </li>
                  <li>
                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/telkom.svg">
                  </li>
                </ul>
              </div>
              <div class="grad-line1" bis_skin_checked="1"></div>
              <div class="grad-line2" bis_skin_checked="1"></div>
              <div class="grad-line3" bis_skin_checked="1"></div>
            </section>
            <section class="contact-section">
              <div class="container" bis_skin_checked="1">
                <div class="caption-holder" bis_skin_checked="1">
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter out">G</span>
                    <span class="letter out">o</span>
                    <span class="letter out">t</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">a</span>
                    <span class="letter out">n</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">a</span>
                    <span class="letter out">p</span>
                    <span class="letter out">p</span>
                    <span class="letter out">&nbsp;</span>
                    <span class="letter out">i</span>
                    <span class="letter out">d</span>
                    <span class="letter out">e</span>
                    <span class="letter out">a</span>
                    <span class="letter out">?</span>
                  </h2>
                  <h2 class="word" style="opacity: 1;">
                    <span class="letter in">W</span>
                    <span class="letter in">e</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">k</span>
                    <span class="letter in">n</span>
                    <span class="letter in">o</span>
                    <span class="letter in">w</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">w</span>
                    <span class="letter in">h</span>
                    <span class="letter in">a</span>
                    <span class="letter in">t</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">t</span>
                    <span class="letter in">o</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">d</span>
                    <span class="letter in">o</span>
                    <span class="letter in">&nbsp;</span>
                    <span class="letter in">n</span>
                    <span class="letter in">e</span>
                    <span class="letter in">x</span>
                    <span class="letter in">t</span>
                  </h2>
                  <p>Let's talk about getting it to market.</p>
                </div>
                <div class="col-holder" bis_skin_checked="1">
                  <div class="col" bis_skin_checked="1">
                    <form class="form">
                      <?php echo do_shortcode('[contact-form-7 id="2913a31" title="Let\'s talk about getting it to market"]') ?>
                    </form>
                  </div>
                  <div class="col" bis_skin_checked="1">
                    <div class="img-holder" bis_skin_checked="1">
                      <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/img-form.png">
                    </div>
                  </div>
                </div>
              </div>
              <div class="left-white" bis_skin_checked="1"></div>
              <div class="right-white" bis_skin_checked="1"></div>
            </section>
          </main>
          <div class="contact-popup" bis_skin_checked="1">
            <div class="popup-text" bis_skin_checked="1">
              <div class="anim-holder" bis_skin_checked="1">
                <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/Avice.svg">
              </div>
              <div class="anim-holder" bis_skin_checked="1">
                <h4>We're here for you! </h4>
              </div>
              <div class="anim-holder" bis_skin_checked="1">
                <p>You're already one step closer to the launch of your product!</p>
              </div>
            </div>
          </div>
<?php get_footer(); ?>