<?php
/*
Template Name: expertise
*/
?>
<?php
 get_header(); 
 ?>
<div id="wrapper" class="" bis_skin_checked="1">
  <div id="backgrounds" bis_skin_checked="1">
    <div class="back back0" bis_skin_checked="1"></div>
    <div class="back back1" bis_skin_checked="1"></div>
    <div class="back back2" bis_skin_checked="1"></div>
  </div>
  <div class="wow-cnt" bis_skin_checked="1">
    <main id="main">

      <?php
                global $post;
                $myposts = get_posts([
                    'numberposts' => -1,
                    'category_name' => 'expertise-page',
                    'order' => 'ASC',
                ]);
                
                if( $myposts ){
                  $i = 0;

                    foreach( $myposts as $post ){
                    setup_postdata( $post );
                    $i += 1;
                    if ($i % 2 == 0) {
                    ?>
                      <section class="exp-block dev-section-white">
                        <div class="container" bis_skin_checked="1">
                          <div class="caption-section" bis_skin_checked="1">
                            <h3><?php the_title(); ?></h3>
                          </div>
                          <div class="col-holder" bis_skin_checked="1">
                            <div class="left-content" bis_skin_checked="1">
                              <div class="img-holder show-in fadeInLeft" bis_skin_checked="1" now="now">
                                <img src="<?php the_post_thumbnail_url(); ?>" alt="img" class="show-in pulse" now="now">
                              </div>
                            </div>
                            <div class="right-content" bis_skin_checked="1">
                              <div class="text-holder" bis_skin_checked="1">
                                <?php the_content(); ?>
                                <div class="selected-ext" bis_skin_checked="1">
                                  <span class="show-in fadeInUp delay600" now="now"><?php the_field('text') ?></span>
                                </div>
                                <p class="show-in fadeInUp delay800" now="now"><?php the_field('text2') ?></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-holder" bis_skin_checked="1">
                            <div data-offset="200" class="col show-in fadeInUp" bis_skin_checked="1" now="now">
                              <p><?php the_field('first-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('first-icon-img') ?>" alt="img">
                                </div>
                              </div>
                            </div>
                            <div data-offset="200" class="col show-in fadeInUp delay300" bis_skin_checked="1" now="now">
                              <p><?php the_field('second-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('second-icon-img') ?>" alt="img">
                                </div>
                              </div>
                            </div>
                            <div data-offset="200" class="col show-in fadeInUp delay600" bis_skin_checked="1" now="now">
                              <p><?php the_field('third-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('third-icon-img') ?>" alt="img">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="left-white" bis_skin_checked="1"></div>
                        <div class="right-white" bis_skin_checked="1"></div>
                      </section>
                      <?php } else { ?>
                      <section class="exp-block ">
                        <div class="container" bis_skin_checked="1">
                          <div class="caption-section" bis_skin_checked="1">
                            <h3><?php the_title(); ?></h3>
                          </div>
                          <div class="col-holder" bis_skin_checked="1">
                            <div class="left-content" bis_skin_checked="1">
                              <div class="img-holder show-in fadeInLeft"  bis_skin_checked="1">
                                <img src="<?php the_post_thumbnail_url(); ?>" alt="img" class="pulse" >
                              </div>
                            </div>
                            <div class="right-content" bis_skin_checked="1">
                              <div class="text-holder" bis_skin_checked="1">
                                <?php the_content(); ?>
                                <div class="selected-ext" bis_skin_checked="1">
                                  <span class="show-in fadeInUp delay600" ><?php the_field('text') ?></span>
                                </div>
                                <p class="show-in fadeInUp delay800" ><?php the_field('text2') ?></p>
                              </div>
                            </div>
                          </div>
                          <div class="col-holder" bis_skin_checked="1">
                            <div data-offset="200" class="col show-in fadeInUp"  bis_skin_checked="1">
                              <p><?php the_field('first-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('first-icon-img') ?>" alt="img" class="fingerprint">
                                </div>
                              </div>
                            </div>
                            <div data-offset="200" class="col show-in fadeInUp delay300"  bis_skin_checked="1">
                              <p><?php the_field('second-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('second-icon-img') ?>" alt="img">
                                </div>
                              </div>
                            </div>
                            <div data-offset="200" class="col show-in fadeInUp delay600"  bis_skin_checked="1">
                              <p><?php the_field('third-icon-text') ?></p>
                              <div class="img-wrap" bis_skin_checked="1">
                                <div class="img-holder" bis_skin_checked="1">
                                  <img src="<?php the_field('third-icon-img') ?>" alt="img">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="left-bg-el" bis_skin_checked="1"></div>
                      </section>         

                <?php }}} wp_reset_postdata(); ?>

        </main>
<?php get_footer(); ?>
