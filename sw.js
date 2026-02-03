<!DOCTYPE html>
<html>
<head>
	<title>be1.ru</title>
</head>
<body>
<p>const CACHE_NAME = &#39;afroperm-v2&#39;;</p>

<p>const ASSETS = [</p>

<p>&nbsp; &#39;./&#39;,</p>

<p>&nbsp; &#39;./index.html&#39;,</p>

<p>&nbsp; &#39;./manifest.json&#39;</p>

<p>];</p>

<p>&nbsp;</p>

<p>self.addEventListener(&#39;install&#39;, (event) =&gt; {</p>

<p>&nbsp; event.waitUntil(</p>

<p>&nbsp; &nbsp; caches.open(CACHE_NAME).then((cache) =&gt; cache.addAll(ASSETS))</p>

<p>&nbsp; );</p>

<p>});</p>

<p>&nbsp;</p>

<p>self.addEventListener(&#39;fetch&#39;, (event) =&gt; {</p>

<p>&nbsp; event.respondWith(</p>

<p>&nbsp; &nbsp; caches.match(event.request).then((response) =&gt; {</p>

<p>&nbsp; &nbsp; &nbsp; return response || fetch(event.request);</p>

<p>&nbsp; &nbsp; })</p>

<p>&nbsp; );</p>

<p>});</p>
</body>
</html>
