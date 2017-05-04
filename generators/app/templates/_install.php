<?php
/**
 * @file
 * <%= module_name %>.install file.
 */

/**
 * Implements hook_schema().
 */
function <%= module_name %>_schema() {
  $schema = array();

  $schema[] = array();

  return $schema;
}

/**
 * Implements hook_install().
 */
function <%= module_name %>_install() {

}

/**
 * Implements hook_uninstall().
 */
function <%= module_name %>_uninstall() {
  // variable_del('some variable');
}
