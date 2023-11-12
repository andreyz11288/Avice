<?php 
add_action('wp_enqueue_scripts', function() {
	wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/main.css');

	// wp_enqueue_script( 'js', get_template_directory_uri() . '/assets/js/js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'analytics', get_template_directory_uri() . '/assets/js/analytics.js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( '5b9a1ff7120afafab5000075', get_template_directory_uri() . '/assets/js/5b9a1ff7120afafab5000075.js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'tagjs', get_template_directory_uri() . '/assets/js/tagjs', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'fast-simplex-noise', get_template_directory_uri() . '/assets/js/fast-simplex-noise.js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'three', get_template_directory_uri() . '/assets/js/three.min.js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'sine-waves', get_template_directory_uri() . '/assets/js/sine-waves.min.js', ['jquery'], 'null', 'false' );
	// wp_enqueue_script( 'manifest', get_template_directory_uri() . '/assets/js/manifest.679b5bb1969467c2777a.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'default', get_template_directory_uri() . '/assets/js/default.e0fd0f822988850cb016.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'index', get_template_directory_uri() . '/assets/js/index.96ee5e8679e74b120c78.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'index-contact', get_template_directory_uri() . '/assets/js/index.a501ab83fe1a098a6a2e.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'vendor', get_template_directory_uri() . '/assets/js/vendor.3d9b48817ce782be47cc.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'app', get_template_directory_uri() . '/assets/js/app.241eb898de230e7dcb2d.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'canvas2', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r125/three.min.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'canvas1', 'https://codepen.io/dannysgrant/pen/YNLNXp.js', ['jquery'], 'null', 'true' );
	// wp_enqueue_script( 'canvas3', 'https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.5/dat.gui.min.js', ['jquery'], 'null', 'true' );
	wp_enqueue_script( 'canvas', get_template_directory_uri() . '/assets/js/canvas.js', ['jquery'], 'null', 'true' );
});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custom-logo');

add_filter( 'upload_mimes', 'svg_upload_allow' );

# Добавляет SVG в список разрешенных для загрузки файлов.
function svg_upload_allow( $mimes ) {
	$mimes['svg']  = 'image/svg+xml';

	return $mimes;
}

add_filter( 'wp_check_filetype_and_ext', 'fix_svg_mime_type', 10, 5 );

# Исправление MIME типа для SVG файлов.
function fix_svg_mime_type( $data, $file, $filename, $mimes, $real_mime = '' ){

	// WP 5.1 +
	if( version_compare( $GLOBALS['wp_version'], '5.1.0', '>=' ) ){
		$dosvg = in_array( $real_mime, [ 'image/svg', 'image/svg+xml' ] );
	}
	else {
		$dosvg = ( '.svg' === strtolower( substr( $filename, -4 ) ) );
	}

	// mime тип был обнулен, поправим его
	// а также проверим право пользователя
	if( $dosvg ){

		// разрешим
		if( current_user_can('manage_options') ){

			$data['ext']  = 'svg';
			$data['type'] = 'image/svg+xml';
		}
		// запретим
		else {
			$data['ext']  = false;
			$data['type'] = false;
		}

	}

	return $data;
}

show_admin_bar(false);

function blog_theme_widgets_init() {
	register_sidebar([
		'name'           => esc_html__( 'Social link' , 'blog-theme'),
		'id'             => "social-link",
		// 'description'    => '',
		// 'class'          => '',
		// 'before_widget'  => '<>',
		// 'after_widget'   => "</>\n",
		// 'before_title'   => '<h2 class="widgettitle">',
		// 'after_title'    => "</h2>\n",
		// 'before_sidebar' => '',
		// 'after_sidebar'  => '',
		// 'show_in_rest'   => false,
	]);
}

add_action('widgets_init', 'blog_theme_widgets_init');

remove_filter('the_content', 'wpautop');
?>