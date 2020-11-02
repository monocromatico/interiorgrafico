CKEDITOR.plugins.add('OCUpload', {
  init: function (editor) {
    if (!Drupal.settings.ocupload || !Drupal.settings.ocupload.allowedExt) {
      return;
    }

    // Add Button
    editor.ui.addButton('OCUpload', {
      label: Drupal.t('Upload file'),
      command: 'OCUpload',
      icon: this.path + '../img/icon-ckeditor.png'
    });

    // Add Command
    editor.addCommand('OCUpload', {
      exec: function (editor) {
        if (!Drupal.ocupload.ckeditorPlugin.flow.support) {
          alert(Drupal.t('Your browser not support HTML5 File API'));
        }
      }
    });

    // Lazy create and configure Flow.js object
    if (!Drupal.ocupload.ckeditorPlugin.flow) {
      Drupal.ocupload.ckeditorPlugin.flow = Drupal.ocupload.ckeditorPlugin.createFlow();
    }

    // Process upload button
    if (Drupal.ocupload.ckeditorPlugin.flow && Drupal.ocupload.ckeditorPlugin.flow.support) {
      editor.on('dataReady', function () {
        jQuery('.cke_button__ocupload').once('ocupload', function () {
          var $button = jQuery(this);
          Drupal.ocupload.ckeditorPlugin.flow.assignBrowse($button[0]);
          Drupal.ocupload.ckeditorPlugin.flow.assignDrop($button[0]);

          // Stop hidden input click propagation
          $button.find('input').click(function (event) {
            event.stopPropagation();
          });
        });
      });
    }
  }
});

(function ($) {
  Drupal.ocupload = Drupal.ocupload || {};
  Drupal.ocupload.ckeditorPlugin = Drupal.ocupload.ckeditorPlugin || {};

  /**
   * Create and configure Flow.js object.
   */
  Drupal.ocupload.ckeditorPlugin.createFlow = function () {
    var flow = Drupal.ocupload.createFlow();

    if (Drupal.ocupload.ckeditorPlugin.flow && Drupal.ocupload.ckeditorPlugin.flow.support) {
      flow.on('filesSubmitted', Drupal.ocupload.ckeditorPlugin.onFilesSubmitted);
      flow.on('fileSuccess', Drupal.ocupload.ckeditorPlugin.onFileSuccess);
      flow.on('complete', Drupal.ocupload.ckeditorPlugin.onComplete);
      flow.on('error', Drupal.ocupload.ckeditorPlugin.onComplete);
    }

    return flow;
  };

  /**
   * Files selected handler.
   */
  Drupal.ocupload.ckeditorPlugin.onFilesSubmitted = function (files, event) {
    var $textarea = $(event.target).closest('.cke').prev('textarea');
    var editorInstance = CKEDITOR.instances[$textarea.attr('id')];
    var selection = editorInstance.getSelection();

    editorInstance.setReadOnly(true);

    Drupal.ocupload.ckeditorPlugin.flow.opts.query.selectedText = selection ? selection.getNative().toString() : '';
    Drupal.ocupload.ckeditorPlugin.flow.upload();

    Drupal.ocupload.ckeditorPlugin.activeTextareaId = $textarea.attr('id');
  };

  /**
   * File uploaded handler.
   */
  Drupal.ocupload.ckeditorPlugin.onFileSuccess = function (file, response, chunk) {
    if (!Drupal.ocupload.checkResponse(response)) {
      return;
    }

    response = $.parseJSON(response);

    if (response.status) {
      var editorInstance = CKEDITOR.instances[Drupal.ocupload.ckeditorPlugin.activeTextareaId];
      var selection = editorInstance.getSelection();
      var selectedText = selection ? selection.getNative().toString() : '';
      var insertedHtml = selectedText ? response.data : response.data + ' ';

      editorInstance.setReadOnly(false);
      editorInstance.insertHtml(insertedHtml);

      // Hack for Auto-Grow plugin
      if (CKEDITOR.plugins.get('autogrow')) {
        editorInstance.forceNextSelectionCheck();
        editorInstance.selectionChange();
      }

      editorInstance.setReadOnly(true);
    }
    else {
      alert(response.data);
    }
  };

  /**
   * File uploaded handler.
   */
  Drupal.ocupload.ckeditorPlugin.onComplete = function () {
    var editorInstance = CKEDITOR.instances[Drupal.ocupload.ckeditorPlugin.activeTextareaId];
    editorInstance.setReadOnly(false);
  };
})(jQuery);