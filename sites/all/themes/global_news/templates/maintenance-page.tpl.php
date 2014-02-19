<?php
/**
 * @file
 * Implementation to display a single Drupal page while offline.
 *
 * All the available variables are mirrored in page.tpl.php.
 *
 * @see template_preprocess()
 * @see template_preprocess_maintenance_page()
 * @see global_news_process_maintenance_page()
 */
$html_attributes = "lang=\"{$language->language}\" dir=\"{$language->dir}\" {$rdf->version}{$rdf->namespaces}";
?>
<?php print $doctype; ?>

<!--[if IE 8 ]><html <?php print $html_attributes; ?> class="no-js ie8"><![endif]-->
<!--[if IE 9 ]><html <?php print $html_attributes; ?> class="no-js ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html <?php print $html_attributes; ?> class="no-js"><!--<![endif]-->
<head<?php print $rdf->profile; ?>>

  <?php print $head; ?>
  
  <!--  Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  
  <title><?php print $head_title; ?></title>
  <?php print $styles; ?>
  
  <?php print $scripts; ?>

</head>
<body class="<?php print $classes; ?>" <?php print $attributes;?>>

  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
  </div>

  <?php print $page_top; ?>

  <div id="page-wrapper"><div id="page">

      <header id="header" class="header clearfix" role="banner">

          <?php if ($logo || $site_name || $site_slogan): ?>

            <?php if ($logo): ?>
              <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
                <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
              </a>
            <?php endif; ?>

            <?php if ($site_name): ?>
              <h1 title="<?php print $site_name; ?>" id="site-name" class="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print $site_name; ?>"><?php print $site_name; ?></a>
              </h1>
            <?php endif; ?>

            <?php if ($site_slogan): ?>
              <h2 title="<?php print $site_slogan; ?>" id="site-slogan" class="site-slogan">
                <?php print $site_slogan; ?>
              </h2>
            <?php endif; ?>

          <?php endif; ?>

        </header>

      <div id="main-wrapper">
        <div id="main" class="clearfix">
          <div id="content" class="column" role="main">
            <div class="section">
              <a id="main-content"></a>
              <?php if ($title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
              <?php print $content; ?>
              <?php if ($messages): ?>
                <div id="messages">
                  <div class="section clearfix">
                    <?php print $messages; ?>
                  </div><!-- /.section -->
                </div><!-- /#messages -->
              <?php endif; ?>
            </div><!-- /.section -->
          </div><!-- /#content -->
        </div><!-- /#main -->
      </div><!-- /#main-wrapper -->

      </div><!-- /#page -->
    </div><!-- /#page-wrapper -->

  <?php print $page_bottom; ?>

</body>
</html>
