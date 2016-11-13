
var dom = document.implementation.createDocument('!DOCTYPE', 'html', null);
var body = dom.createElement("body");
dom.documentElement.appendChild(body);

setTimeout(function() {    
    document.body.innerHTML = "<h1>hello world</h1><h2>fire it up</h2>";
    
    var me = document.querySelector('script[data-id][data-name="fire-it-up"]');
    var id = me.getAttribute('data-id');
    alert(id);


    var js2 = document.createElement('script');
    js2.src = 'index2.js';
    document.body.insertBefore(js2, document.body.firstChild);
},0);

