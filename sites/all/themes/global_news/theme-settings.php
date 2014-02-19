<?php

/**
 * @file
 * Theme settings for the global_news
 */
function global_news_form_system_theme_settings_alter(&$form, &$form_state) {

$form['global_news_additiona_options'] = array(
    '#type' => 'fieldset',
    '#title' => t('Aditional Options'),
    '#weight' => 1,
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  );
  
  $form['global_news_additiona_options']['global_news_date'] = array(
    '#type' => 'fieldset',
    '#title' => t('Header date output'),
  );
  
  $form['global_news_additiona_options']['global_news_date']['global_news_date_output'] = array(
   '#type' => 'checkbox',
   '#title' => t('Show date in header'),
   '#default_value' => theme_get_setting('global_news_date_output'),
   '#description' => 'Check here if you want to output date in header.'
  );

  $form['global_news_additiona_options']['global_news_theme_styling'] = array(
    '#type' => 'fieldset',
    '#title' => t('Theme styling'),
  );
  
  $form['global_news_additiona_options']['global_news_theme_styling']['global_news_theme_styling_color'] = array(
   '#type' => 'select',
   '#title' => t('Choose color theme'),
   '#default_value' => theme_get_setting('global_news_theme_styling_color'),
   '#options' => array(
     'red' => t('Red'),
     'blue' => t('Blue'),
     'dark_blue' => t('Dark Blue'),
     'dark_grey' => t('Dark Grey'),
     'green' => t('Green'),
     'grey' => t('Grey'),
     'orange' => t('Orange'),
   ),
  );
  
  $form['global_news_additiona_options']['global_news_theme_styling']['global_news_layout'] = array(
    '#type' => 'radios',
    '#title' => t('Layout type:'),
    '#default_value' => theme_get_setting('global_news_layout'),
    '#options' => array(
     '1' => t('Liquid'),
     '2' => t('Fixed'),
   ),
  );

  /**
   * Breadcrumb settings
   */
  $form['global_news_additiona_options']['global_news_breadcrumb'] = array(
    '#type' => 'fieldset',
    '#title' => t('Breadcrumb'),
  );
  
  $form['global_news_additiona_options']['global_news_breadcrumb']['global_news_breadcrumb_display'] = array(
   '#type' => 'select',
   '#title' => t('Display breadcrumb'),
   '#default_value' => theme_get_setting('global_news_breadcrumb_display'),
   '#options' => array(
     'yes' => t('Yes'),
     'no' => t('No'),
   ),
  );
  
  $form['global_news_additiona_options']['global_news_breadcrumb']['global_news_breadcrumb_hideonlyfront'] = array(
    '#type' => 'checkbox',
    '#title' => t('Hide the breadcrumb if the breadcrumb only contains the link to the front page.'),
    '#default_value' => theme_get_setting('global_news_breadcrumb_hideonlyfront'),
  );
  
  $form['global_news_additiona_options']['global_news_breadcrumb']['global_news_breadcrumb_showtitle'] = array(
    '#type' => 'checkbox',
    '#title' => t('Show page title on breadcrumb.'),
    '#default_value' => theme_get_setting('global_news_breadcrumb_showtitle'),
  );

  $form['global_news_additiona_options']['global_news_breadcrumb']['global_news_breadcrumb_separator'] = array(
    '#type' => 'textfield',
    '#title' => t('Breadcrumb separator'),
    '#default_value' => theme_get_setting('global_news_breadcrumb_separator'),
  );
}