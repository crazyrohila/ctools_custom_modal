/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($, Drupal, window, document, undefined) {
  Drupal.theme.prototype.ctools_custom_modal_html = function () {
    var html = '';
    html += '<div id="ctools-modal" class="ctools-modal-custom">';
    html += '  <div class="ctools-modal-content ctools-modal-custom-help-content">';
    html += '    <div class="modal-header">';
    html += '      <span class="popups-close"><a class="close" href="#">X' + Drupal.CTools.Modal.currentSettings.closeImage + '</a></span>';
    html += '      <div class="modal-title">Help</div>';
    html += '    </div>';
    html += '    <div class="modal-scroll"><div id="modal-content" class="modal-content modal-content-custom"></div></div>';
    html += '  </div>';
    html += '</div>';
    return html;
  }
})(jQuery, Drupal, this, this.document);
