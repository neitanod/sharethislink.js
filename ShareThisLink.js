function shareThisLink(data){
  this.shareData = data;
  this.shareData['title'] = encodeURIComponent(this.shareData['title']);
  this.shareData['summary'] = encodeURIComponent(this.shareData['summary']);

  var initialized = false;

  this.initialize = function(){
    if(initialized) return;
    initialized = true;
    if(this.shareData['url']) this.shareData['shortUrl'] = this.getShortUrl(this.shareData['url']);
  }

  this.Facebook = function(){
    this.initialize();
    var data = ___merge(this.shareData, this.shareData['facebook']);
    window.open(
        "http://www.facebook.com/sharer/sharer.php?u="+this.shareData['shortUrl']+"&t="+this.shareData['title']+"&images[0]="+this.shareData['image'],
        this.target, 'width=500,height=400');
  }

  this.Twitter = function(){
    this.initialize();
    var data = ___merge(this.shareData, this.shareData['twitter']);
    window.open(
        "https://twitter.com/intent/tweet?text="+data['title'].replace(/%26%23039%3B/g,"'")+" "+data['shortUrl']+(data["via"]?" via "+data["via"]:""),
        //"http://twitter.com/share?text="+this.shareData['title']+" "+this.shareData['shortUrl'],
        this.target, 'width=500,height=400');
  }

  this.LinkedIn = function(){
    this.initialize();
    var data = ___merge(this.shareData, this.shareData['linkedin']);
    window.open(
        "http://www.linkedin.com/shareArticle?mini=true&url="+this.shareData['shortUrl']+"&title="+this.shareData['title']+"&summary="+this.shareData['summary'],
        this.target, 'width=500,height=400');
  }

  this.Mail = function(){
    this.initialize();
    var data = ___merge(this.shareData, this.shareData['mail']);
    window.open(
        "/share/mail?url="+this.shareData['url']+"&short_url="+this.shareData['shortUrl']+"&title="+this.shareData['title']+"&summary="+this.shareData['summary']+"&image="+this.shareData['image'],
        this.target, 'width=600,height=500');
  }

  this.getShortUrl = function(url){
    var xhReq = new XMLHttpRequest();
    xhReq.open("GET", "/share/shorten?url="+encodeURIComponent(url), false);
    xhReq.send(null);
    return xhReq.responseText;
  }

  return this;
}

function ___merge(set1, set2){
  for (var key in set2){
    if (set2.hasOwnProperty(key))
      set1[key] = set2[key]
  }
  return set1
}
