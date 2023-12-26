<?php
/*
Template Name: team
*/
?>
<?php 
get_header(); 
?>
<style>footer {display: none !important}</style>
<div id="wrapper" class="" bis_skin_checked="1">
    <div id="backgrounds" bis_skin_checked="1">
        <div class="back back0" bis_skin_checked="1"></div>
        <div class="back back1" bis_skin_checked="1"></div>
        <div class="back back2" bis_skin_checked="1"></div>
    </div>
    <div class="wow-cnt" bis_skin_checked="1">
        <main id="main" style="transform: translate3d(0px, 100vh, 0px);">
            <section class="prev-anim">
                <!-- <canvas></canvas> -->
                <div class="logo-full" bis_skin_checked="1">
                    <img src="<?php bloginfo('template_url'); ?>/assets/img/a1.svg" alt="" class="Q">
                    <div class="log-wrap" bis_skin_checked="1">
                        <div class="overflow-hidden" bis_skin_checked="1">
                            <img src="<?php bloginfo('template_url'); ?>/assets/img/a2.svg" alt="" class="next-part">
                        </div>
                    </div>
                </div>
            </section>
            <section id="team-section" class="team-section">
                <div class="container" bis_skin_checked="1">
                    <div class="col-holder" bis_skin_checked="1">
                        <?php
                        global $post;
                        $myposts = get_posts([
                            'numberposts' => -1,
                            'category_name' => 'team-section',
                            'order' => 'ASC',
                        ]);
                        
                        if( $myposts ){
                            $i = 0;

                            foreach( $myposts as $post ){
                            setup_postdata( $post );
                            $i += 1;
                            ?>
                            <div class="col" bis_skin_checked="1">
                                <div data-offset="200" class="prof-holder fadeInUp delay300 <?php if ($i > 2 ) {echo 'show-in';}; ?>" bis_skin_checked="1" now="now">
                                    <div class="img-prof" bis_skin_checked="1">
                                        <img src="<?php the_post_thumbnail_url(); ?>" alt="img">
                                    </div>
                                    <div class="col-text" bis_skin_checked="1">
                                        <strong class="text-bg">
                                            <h2><?= get_the_excerpt(); ?></h2>
                                            <?= get_the_excerpt(); ?>
                                        </strong>
                                        <h4><?php the_title(); ?></h4>
                                        <p><?php the_content(); ?></p>
                                    </div>
                                </div>
                                <div class="img-holder fadeInUp delay300 <?php if ($i > 2 ) {echo 'show-in';}; ?>" bis_skin_checked="1">
                                    <canvas id="waves<?= $i ?>"></canvas>
                                    <img src="<?php bloginfo('template_url'); ?>/assets/img/icon1.png" alt="img">
                                    <div class="rectangle1" bis_skin_checked="1"></div>
                                    <div class="rectangle2" bis_skin_checked="1"></div>
                                    <div class="rectangle3" bis_skin_checked="1"></div>
                                    <div class="rectangle4" bis_skin_checked="1"></div>
                                    <div class="rectangle5" bis_skin_checked="1"></div>
                                    <div class="rectangle6" bis_skin_checked="1"></div>
                                    <div class="rectangle7" bis_skin_checked="1"></div>
                                </div>
                            </div>
                        <?php }} wp_reset_postdata(); ?>
                    </div>
                </div>
            </section>
            <div class="grad-team1" bis_skin_checked="1"></div>
            <div class="grad-team2" bis_skin_checked="1"></div>
            <div class="grad-team3" bis_skin_checked="1"></div>
            <div class="grad-team4" bis_skin_checked="1"></div>
        </main>
    </div>
</div>

<?php get_footer(); ?>

<script>
    window.onload = function () {
    setTimeout(function () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 10)
  }

  const mainElement = document.getElementById('main')
  document.body.style.overflow = 'hidden'

  setTimeout(() => {
    document.body.style.overflow = 'auto'
    mainElement.style.transform = 'translate3d(0px, 0px, 0px)'
  }, 8000)
</script>
