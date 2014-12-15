ShareThisLink.js
================

Usage:
------

    <script type="text/javascript" src="/js/ShareThisLink.js"></script>

    <script type="text/javascript">
        var share = new shareThisLink(
        {
          'url':   'http://server.com/article/url/1314',
          'title': 'Article title here',
          'summary': 'Article summary here',
          'image': 'http://server.com/pics/image.jpg',
          'via': '@TwitterUser'
        });
    </script>

    <div>
      <a onclick="share.Facebook();">Share in Facebook</a>
      <a onclick="share.Twitter();">Share in Twitter</a>
      <a onclick="share.LinkedIn();">Share in Linkedin</a>
      <a onclick="share.Mail();">Share by mail</a>
    </div>


Facebook, Twitter and Linkedin just work out of the box.
Mail() simply opens a popup to your site's "/share/mail" url, so you have to implement that part for yourself.
