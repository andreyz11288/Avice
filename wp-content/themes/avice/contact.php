<?php
/*
Template Name: contact
*/
?>
<?php 
get_header(); 
?>
<style>footer {display: none !important} #__nuxt{  margin-top: -20px;}</style>
<div id="wrapper" class="">
    <div id="backgrounds">
        <div class="back back0"></div>
        <div class="back back1"></div>
        <div class="back back2"></div>
    </div>
    <div>
        <main id="main">
            <section class="contact-page">
                <div class="container">
                    <div class="contact-wrapper">
                        <div class="contact-caption">
                            <div class="contact-caption-holder">
                                <h1>Contact Us</h1>
                                <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/Avice.svg" class="logo-contact">
                            </div>
                            <p>Give us just a few details on your project here, and we'll shortly continue discussion in person.</p>
                        </div>
                        <?php echo do_shortcode('[contact-form-7 id="b1a5c71" title="contact-form"]') ?>
                        <!-- <form autocomplete="off" class="col-holder">
                            <input name="hidden" autocomplete="false" style="display:none">
                            <div class="col">
                                <div class="left-form">
                                    <label>
                                        <div class="input-holder">
                                            <input name="name" type="text">
                                        </div>
                                        <span class="placeholder">Name</span>
                                        <span class="error-msg">This field is required</span>
                                    </label>
                                    <label>
                                        <div class="input-holder">
                                            <input name="email" type="email">
                                        </div>
                                        <span class="placeholder">Email</span>
                                        <span class="error-msg">Enter valid email</span>
                                    </label>
                                    <label>
                                        <div class="input-holder">
                                            <input name="phone" type="phone">
                                        </div>
                                        <span class="placeholder">Phone</span>
                                        <span class="error-msg">Enter valid phone</span>
                                    </label>
                                    <label class="hide-message">
                                        <div class="input-holder">
                                            <textarea rows="1" style="resize: none; overflow: hidden; height: 45px;"></textarea>
                                        </div>
                                        <span class="placeholder">Message</span>
                                        <span class="error-msg">This field is required</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col">
                                <div class="right-form 2">
                                    <label>
                                        <div class="input-holder">
                                            <textarea rows="1" style="resize: none; overflow: hidden; height: 45px;"></textarea>
                                        </div>
                                        <span class="placeholder">Message</span>
                                        <span class="error-msg">This field is required</span>
                                    </label>
                                </div>
                            </div>
                        </form> -->
                        <div class="col-holder">
                            <div class="col btn-holder">
                                <div class="img-holder">
                                    <canvas id="waves1"></canvas>
                                    <img alt="img" src="<?php bloginfo('template_url'); ?>/assets/img/icon1.png">
                                    <div class="rectangle1"></div>
                                    <div class="rectangle2"></div>
                                    <div class="rectangle3"></div>
                                    <div class="rectangle4"></div>
                                    <div class="rectangle5"></div>
                                    <div class="rectangle6"></div>
                                    <div class="rectangle7"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</div>
<div class="scroll-up">
    <div class="scroll-arrow"></div>
</div>
</div>
</div>
</div>
<?php get_footer(); ?>

<style>
    .contact-page .btn-holder .img-1 {
        justify-content: flex-end;
    }
    .btn-holder {
        margin: auto;
    }
    .btn {
        padding: 12px 50px 15px;
    }
    .placeholder {
        color: rgba(255, 255, 255, 0.9);
    }
</style>