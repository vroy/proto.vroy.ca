(function(){
    var html = '<hr/>'
        +'<div class="left">'
        +'  <b>About:</b>'
        +'  <ul class="fancy_links">'
        +'    <li><a href="http://vroy.ca/about">vroy.ca</a></li>'
        +'    <li><a href="https://github.com/exploid">github</a></li>'
        +'  </ul>'
        +'</div>'
        +'<div class="right">'
        +'  <b>Projects:</b>'
        +'  <ul class="fancy_links">'
        +'    <li><a href="http://canvas.vroy.ca/">canvas</a></li>'
        +'    <li><a href="http://chat.vroy.ca">chat</a></li>'
        +'    <li><a href="http://cron.vroy.ca">cron</a></li>'
        +'    <li><a href="http://proto.vroy.ca">proto</a></li>'
        +'    <li><a href="http://ssh.vroy.ca">ssh</a></li>'
        +'    <li><a href="http://vroy.ca">vroy.ca</a></li>'
        +'  </ul>'
        +'</div>';

    var footer = document.getElementById("footer");
    if (footer) footer.innerHTML = html;
})();
