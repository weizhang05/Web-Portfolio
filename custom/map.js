$(window).load(function(){
	L.mapbox.accessToken = 'pk.eyJ1Ijoid2VpemhhbmcwNSIsImEiOiJXbUV3eHZjIn0.ITF8RYRI5jccDOW_z-a41A';
	var map = L.mapbox.map('map', 'mapbox.streets')
	  .setView([1.3544858, 103.8191149], 11)
	  
	var ite = L.marker([1.333588, 103.955148]).addTo(map);
	ite.bindPopup("<img id='popupIcon' src='img/ite.png'> <p><strong>NITEC in Info-Communications Technology</strong><br> <ul><li>CCC-CDC ITE Scholarship 2010</li><li>CCC-CDC ITE Scholarship 2011</li></ul></p>");
	
	var poly = L.marker([1.442938, 103.785827]).addTo(map);
	poly.bindPopup("<img id='popupIcon' src='img/rp.jpg'> <p><strong>Diploma in Information Technology with Merit (Security)</strong><br> <ul><li>Netapp-PTC Scholarship 2013</li><li>Alcatel-Lucent Scholarship 2014</li><li>Lee Kuan Yew Award for Mathematics and Science</li></ul></p>");
	
	var uni = L.marker([1.295065, 103.773509]).addTo(map);
	uni.bindPopup("<img id='popupIcon' src='img/nus.png'> <p><strong>Bachlor of Computing in Information Security</strong><br> </p>");
	
	// Disable drag and zoom handlers.
	//map.dragging.disable();
	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.keyboard.disable();

	// Disable tap handler, if present.
	if (map.tap) map.tap.disable();
});