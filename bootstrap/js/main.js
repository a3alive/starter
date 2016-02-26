/*Evaluates the copyright year*/
;
(function ($) {
    $(document).ready(function () {
        var d = new Date();
        var n = d.getFullYear();
        $("#copyright-year").text(n);
    });
})(jQuery);
