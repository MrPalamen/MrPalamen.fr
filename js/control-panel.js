/*
 * Project:    Dynasty - Responsive Coming Soon Template
 * Version:    1.0
 * Autor:      -SitoWeb-
 * http://themeforest.net/user/-SitoWeb-
 *
 */

(function($) {
    "use strict";

    $("#control-panel-button").click(function() {
        var panel = document.getElementById('control-panel');
        if (classie.has(panel, 'show')) {
            classie.removeClass(panel, 'show');
        } else {
            classie.addClass(panel, 'show');
        }
    });

    $("#yellow-color-skin-button").click(function() {
        document.getElementById('color-css').href = 'css/skins/yellow.css';
        document.getElementById('logo').src = 'images/logo-yellow.png';
    });
    $("#green-color-skin-button").click(function() {
        document.getElementById('color-css').href = 'css/skins/green.css';
        document.getElementById('logo').src = 'images/logo-green.png';
    });
    $("#blue-color-skin-button").click(function() {
        document.getElementById('color-css').href = 'css/skins/blue.css';
        document.getElementById('logo').src = 'images/logo-blue.png';
    });

})(jQuery);