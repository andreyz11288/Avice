<?php
/*
Template Name: expertise
*/
?>
<?php
 get_header(); 
 ?>
 <style>footer {display: none !important} #__nuxt{  margin-top: -20px;}</style>
<div id="wrapper" class="" bis_skin_checked="1">
  <div id="backgrounds" bis_skin_checked="1">
    <div class="back back0" bis_skin_checked="1"></div>
    <div class="back back1" bis_skin_checked="1"></div>
    <div class="back back2" bis_skin_checked="1"></div>
  </div>
  <div bis_skin_checked="1">
    <main id="main">
      <div class="prev-proj-holder" bis_skin_checked="1">
        <div class="container" bis_skin_checked="1">
          <h1>Works.</h1>
          <section class="prev-proj-section">
            <div class="vue-scrollbar__wrapper" bis_skin_checked="1" style="height: 100%;">
            <div class="vue-scrollbar__area vue-scrollbar-transition" bis_skin_checked="1" style="margin-top: 0px; margin-left: 0px;">
            <aside class="sidebar-holder">
              <ul class="sidebar sidebar1">
                <?php
                global $post;
                $myposts = get_posts([
                    'numberposts' => -1,
                    'category_name' => 'portfolio-prev-section',
                    'order' => 'ASC',
                ]);
                
                if( $myposts ){
                    $i = 0;

                    foreach( $myposts as $post ){
                    setup_postdata( $post );
                    // $i += -100;
                    ?>
                    <li class="col-holder active"  onclick="updateTransform(event, <?= $i ?>)">
                      <div class="border-el" bis_skin_checked="1"></div>
                      <div class="col-img" bis_skin_checked="1">
                        <div class="img-holder" bis_skin_checked="1">
                          <img src="<?php the_post_thumbnail_url(); ?>" alt="img">
                        </div>
                      </div>
                      <div class="col-text" bis_skin_checked="1">
                        <div class="mini-description" bis_skin_checked="1">
                          <?php the_content(); ?>
                        </div>
                      </div>
                    </li>
                <?php $i += -100; }} wp_reset_postdata(); ?>
              </ul>
            </aside> 
            </div>
          </div>
          <div class="overflow-hidden flex-grow" bis_skin_checked="1">
            <div class="slides" bis_skin_checked="1" style="transform: translate3d(0px, 0%, 0px);">

              <?php
                global $post;
                $myposts = get_posts([
                    'numberposts' => -1,
                    'category_name' => 'portfolio-prev-section',
                    'order' => 'ASC',
                ]);
                
                if( $myposts ){

                    foreach( $myposts as $post ){
                    setup_postdata( $post );
                    ?>

                    <article class="project-holder">
                      <div class="vue-scrollbar__wrapper" bis_skin_checked="1">
                        <div class="vue-scrollbar__area vue-scrollbar-transition" bis_skin_checked="1" style="margin-top: 0px; margin-left: 0px;">
                          <div bis_skin_checked="1">
                            <div now="now" class="proj-prev  delay300 fadeInDown" bis_skin_checked="1">
                              <div class="proj-prev-img" bis_skin_checked="1">
                                <img src="<?php the_field('hero-img') ?>" alt="img">
                              </div>
                              <!-- <a href="/portfolio/grove" class="btn">View Project</a> -->
                            </div>
                            <div now="now" class="proj-footer  delay1000 fadeInDown" bis_skin_checked="1">
                              <div class="col-holder" bis_skin_checked="1">
                                <div class="col" bis_skin_checked="1">
                                  <div class="img-brend" bis_skin_checked="1">
                                    <img src="<?php the_field('hero-svg') ?>" alt="img">
                                  </div>
                                  <ul class="proj-info">
                                    <li>
                                      <div class="img-holder" bis_skin_checked="1">
                                        <img src="<?php the_field('icon-people') ?>" alt="img">
                                      </div>
                                      <p><?= the_field('type') ?></p>
                                    </li>
                                    <li>
                                      <div class="img-holder" bis_skin_checked="1">
                                        <img src="<?php the_field('icon-loc') ?>" alt="img">
                                      </div>
                                      <p><?= the_field('loc') ?></p>
                                    </li>
                                    <li>
                                      <div class="img-holder" bis_skin_checked="1">
                                        <img src="<?php the_field('icon-calendar') ?>" alt="img">
                                      </div>
                                      <p><?= the_field('year') ?></p>
                                    </li>
                                  </ul>
                                </div>
                                <div class="col" bis_skin_checked="1">
                                  <div now="now" class="img-block  fadeInDown delay1000" bis_skin_checked="1">
                                    <div class="img-holder1" bis_skin_checked="1">
                                      <img src="<?php the_field('small-img2') ?>" alt="img">
                                    </div>
                                    <div class="img-holder2" bis_skin_checked="1">
                                      <img src="<?php the_field('small-img3') ?>" alt="img">
                                    </div>
                                  </div>
                                  <div class="team-holder" bis_skin_checked="1">
                                    <p>Team.</p>
                                    <ul class="team">
                                      <li>
                                        <img src="<?php the_field('team1') ?>" alt="img">
                                      </li>
                                      <li>
                                        <img src="<?php the_field('team2') ?>" alt="img">
                                      </li>
                                      <li>
                                        <img src="<?php the_field('team3') ?>" alt="img">
                                      </li>
                                      <li>
                                        <img src="<?php the_field('team4') ?>" alt="img">
                                      </li>
                                      <li>
                                        <img src="<?php the_field('team5') ?>" alt="img">
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>

                <?php }} wp_reset_postdata(); ?>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</div>
<?php get_footer(); ?>

<style>
  .wp-block-image {
    margin-bottom: 0;
  }
</style>