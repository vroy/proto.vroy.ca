(function() {
    // Get the footer from proto.vroy.ca. The footer.js script will inject the footer into #footer if it exists.
    var ext = document.createElement('script'); ext.type = 'text/javascript'; ext.async = true;
    ext.src = 'http://proto.vroy.ca/footer.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ext);
})();

$(document).ready(function(){
        /*
          This function is used to toggle between showing and hiding the github ribbon.
          Depending on the width of the page, the github ribbon sometimes overlap some
          more important items on the page.
        */
        $(window).resize(toggleGithubRibbon); // On resize
        toggleGithubRibbon(); // On load
        function toggleGithubRibbon() {
            var width = $(window).width();
            if ( width > 1220 ) {
                $(".github-ribbon").show();
            } else {
                $(".github-ribbon").hide();
            }
        }
});
