<?php
/**
 * The template for displaying 404 pages (not found)
 */

get_header();
?>
<div id="backgrounds" bis_skin_checked="1">
        <div class="back back0" bis_skin_checked="1"></div>
        <div class="back back1" bis_skin_checked="1"></div>
        <div class="back back2" bis_skin_checked="1"></div>
    </div>
	<div class="error-404 not-found default-max-width">
		<h1 class="page-title"><?php esc_html_e( 'Nothing here', 'avice' ); ?></h1>
		<div class="page-content">
			<p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'avice' ); ?></p>
			<?php get_search_form(); ?>
		</div>
	</div>

<?php
get_footer();
?>
<style>
#footer {
	display: none !important;
}
.error-404 {
	z-index: 2;
    position: absolute;
	top: 100px;
    left: 50%;
    transform: translateX(-50%);
}
.page-title, .page-content {
	color: white;
}
</style>