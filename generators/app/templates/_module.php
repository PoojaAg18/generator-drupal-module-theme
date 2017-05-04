<?php
/**
 * @file
 * <%= module_name %>.module file.
 */
<% if (hooks.menu == true) { %>
/**
 * Implements hook_menu().
 */
function <%= module_name %>_menu() {
  $items = array();
  $items[''] = array(
    'title' => '',
    'description' => '',
    'access arguments' => array(''),
    'page callback' => '',
    'page arguments' => array(''),
  );
  return $items;
}<% } %>
<% if (hooks.theme == true) { %>
/**
 * Implements hook_theme().
 */
function <%= module_name %>_theme($existing, $type, $theme, $path) {
  $items = array();
  $items[''] = array(
    'variables' => array(),
    'path' => '',
    'template' => '',
  );
  return $items;
}<% } %>
<% if (hooks.perm == true) { %>
/**
 * Implements hook_permission().
 */
function <%= module_name %>_permission() {
  return array(
    'administer my module' => array(
      'title' => t('Administer my module'),
      'description' => t('Perform administration tasks for my module.'),
    ),
  );
}<% } %>
<% if (hooks.block == true) { %>
/**
 * Implements hook_block_info().
 */
function <%= module_name %>_block_info() {
  $blocks = array();
  //$blocks['syndicate'] = array(
  //  'info' => t('Syndicate'),
  //  'cache' => DRUPAL_NO_CACHE,
  //);

  return $blocks;
}

/**
 * Implements hook_block_view().
 */
function <%= module_name %>_block_view($delta = '') {
  $block = array();

  switch ($delta) {
    case 'example':
      $block['subject'] = 'Example title';
      $block['content'] = 'Could be a render array';
      break;
  }
  return $block;
}

/**
 * Implements hook_block_configure().
 */
function <%= module_name %>_block_configure($delta = '',$edit = array()) {
  $form = array();
  
  switch ($delta) {
    case 'example':
      $form['subject'] = 'Example title';
      $block['content'] = 'Could be a render array';
      break;
  }
  return $form;
}

<% } %>
