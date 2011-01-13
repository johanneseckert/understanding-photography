// understanding photography

// Copyright (c) 2009 Johannes Henseler 
// See http://code.google.com/p/undstandingphotography/ for more info

function toggle_box(obj,align) {
	if ( align === undefined ) { align = 'right';	}

	Effect.toggle(obj,'slide', {duration:0.3});

	var current = Element.getStyle(obj+'_title', "background-position");

	if (current == "right 6px")
		Element.setStyle(obj+'_title', {backgroundPosition:align+" -26px",opacity: 0.5});
	else
		Element.setStyle(obj+'_title', {backgroundPosition:align+" 6px",opacity: 1});
}

function auto_mod_change() {
	if ($('no_auto').checked) {
		$('slider_exposure').setOpacity(1);
		exposureSlider.setEnabled();
		$('exposureHandle').setStyle({display:"block"})
		$('slider_aperture').setOpacity(1);
		apertureSlider.setEnabled();
		$('apertureHandle').setStyle({display:"block"})
		exposureSlider.setValue(currentExposure);
		apertureSlider.setValue(currentAperture);
	}
	if ($('auto_exposure').checked) {
		$('slider_aperture').setOpacity(1);
		apertureSlider.setEnabled();
		$('apertureHandle').setStyle({display:"block"})
		$('slider_exposure').setOpacity(0.2);
		exposureSlider.setDisabled();
		$('exposureHandle').setStyle({display:"none"})
		exposureSlider.setValue(currentExposure);
		apertureSlider.setValue(currentAperture);
	}
	if ($('auto_aperture').checked) {
		$('slider_exposure').setOpacity(1);
		exposureSlider.setEnabled();
		$('exposureHandle').setStyle({display:"block"})
		$('slider_aperture').setOpacity(0.2);
		apertureSlider.setDisabled();
		$('apertureHandle').setStyle({display:"none"})
		exposureSlider.setValue(currentExposure);
		apertureSlider.setValue(currentAperture);
	}
}

//
//
//	FOCUS Demo
//
//

function initFocus() {
	new Control.Slider('focusHandle','focusTrack',{
											axis:'vertical',
											range:$R(1,24),
											sliderValue: 21,
											values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
											onSlide:function(v){refreshFocusDemo(v)},
											onChange:function(v){refreshFocusDemo(v)}
										});
}

function refreshFocusDemo(v) {
//	$('focusImage').src = "img/spaceball.gif";
	$('focusImage').src = "demos/pointoffocus/focus-" + v + ".jpg";
}

//
//
//	APERTURE Demo
//
//

Apertures = new Array("dummy","1.8","2.5","3.2","4.5","6.3","9.0","14","18","22");
// schluessel:				0				1					2				 3				4				 5				6				 7				8				9				10			11			12			13			14			15			16			17			18		 19			20		 21			22		 23			24		 25			26		 27			28		29		30		31		32		33		34		35		36		37		38		39		40		41		42		43		44		45		46		 47			48		 49			50		 51
Exposures = new Array("dummy","1/4000","1/3200","1/2500","1/2000","1/1600","1/1250","1/1000","1/800","1/640","1/500","1/400","1/320","1/250","1/200","1/160","1/125","1/100","1/80","1/60","1/50","1/40","1/30","1/25","1/20","1/15","1/13","1/10","1/8","1/6","1/5","1/4","1/3","1/2","0.6","0.8","1.0","1.3","1.6","2.0","2.5","3.2","4.0","5.0","6.0","8.0","10.0","13.0","15.0","20.0","25.0","30.0");
var currentAperture = 1;
var currentExposure = 21;
var apertureSlider;
var exposureSlider;

function initAperture() {
	apertureSlider = new Control.Slider('apertureHandle','apertureTrack',{
																					axis:'horizontal',
																					range:$R(1,9),
																					sliderValue: currentAperture,
																					values:[1,2,3,4,5,6,7,8,9],
																					onSlide:function(v){currentAperture = v; showApertureDemo()},
																					onChange:function(v){currentAperture = v; showApertureDemo()}
																				});
	exposureSlider = new Control.Slider('exposureHandle','exposureTrack',{
																					axis:'horizontal',
																					range:$R(1,51),
																					sliderValue: currentExposure,
																					values:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],
																					onSlide:function(v){currentExposure = v; showApertureDemo()},
																					onChange:function(v){currentExposure = v; showApertureDemo()}
																				});
}

function showApertureDemo() {
	
	if ($('auto_exposure').checked)
		switch (currentAperture) {
		  case 1: currentExposure = 21; break;
		  case 2: currentExposure = 25; break;
		  case 3: currentExposure = 28; break;
		  case 4: currentExposure = 32; break;
		  case 5: currentExposure = 35; break;
		  case 6: currentExposure = 39; break;
		  case 7: currentExposure = 44; break;
		  case 8: currentExposure = 49; break;
		  case 9: currentExposure = 51; break;
		}
	if ($('auto_aperture').checked) {
		cE = currentExposure;
		if (cE <= 22) currentAperture = 1;
		if (cE >= 23 && cE <= 26) currentAperture = 2;
		if (cE >= 27 && cE <= 30) currentAperture = 3;
		if (cE >= 30 && cE <= 33) currentAperture = 4;
		if (cE >= 34 && cE <= 37) currentAperture = 5;
		if (cE >= 38 && cE <= 42) currentAperture = 6;
		if (cE >= 43 && cE <= 47) currentAperture = 7;
		if (cE >= 48 && cE <= 50) currentAperture = 8;
		if (cE >= 51) currentAperture = 9;
	}
	
	
	refreshApertureDemo();
}

function refreshApertureDemo() {
//	$('apertureImage').src = "img/spaceball.gif";
//	$('apertureHistogram').src = "img/spaceball.gif";
	$('apertureValue').innerHTML = Apertures[currentAperture];
	$('exposureValue').innerHTML = Exposures[currentExposure];
	
	neuerDateiname = "photo_" + Exposures[currentExposure].replace(/\//, "-") + " sec at f-" + Apertures[currentAperture] + ".jpg";
	$('apertureImage').src = "demos/aperture/"+neuerDateiname;
	neuerDateiname = "photo_" + Exposures[currentExposure].replace(/\//, "-") + "-sec-at-f-" + Apertures[currentAperture] + ".gif";
	$('apertureHistogram').src = "demos/aperture/histograms/"+neuerDateiname;
}



//
//
//	BRENNWEITE Demo
//
//

var currentFocallength = 24;

function initFocallength() {
	new Control.Slider('focallengthHandle','focallengthTrack',{
											axis:'horizontal',
											range:$R(18,400),
											sliderValue: currentFocallength,
											values:[8,10,12,15,18,24,30,35,41,48,55,60,70,85,90,105,120,130,145,170,200,260,320,400],
											onSlide:function(v){currentFocallength = v; refreshFocallengthDemo()},
											onChange:function(v){currentFocallength = v; refreshFocallengthDemo()}
										});
}

function refreshFocallengthDemo() {
//	$('focallengthImage').src = "img/spaceball.gif";
	$('focallengthValue').innerHTML = currentFocallength;
	
	neuerDateiname = "photo_" + currentFocallength + " mm.jpg";
	$('focallengthImage').src = "demos/focallength/"+neuerDateiname;
}


//
//
//	ISO Demo
//
//

var currentISO = 100;

function initISO() {
	new Control.Slider('isoHandle','isoTrack',{
											axis:'horizontal',
											range:$R(100,1600),
											sliderValue: currentISO,
											values:[100,200,400,800,1600],
											onSlide:function(v){currentISO = v; refreshISODemo()},
											onChange:function(v){currentISO = v; refreshISODemo()}
										});
}

function refreshISODemo() {
//	$('isoImage').src = "img/spaceball.gif";
	$('isoValue').innerHTML = currentISO;
	
	neuerDateiname = "photo_ISO " + currentISO + ".jpg";
	$('isoImage').src = "demos/iso/"+neuerDateiname;
}



//
//
//	WHITEBALANCE Demo
//
//

var currentKelvin = 3450;

function initWhitebalance() {
	new Control.Slider('whitebalanceHandle','whitebalanceTrack',{
											axis:'horizontal',
											range:$R(2200,10000),
											sliderValue: currentKelvin,
											values:[2200,2250,2500,2750,3000,3450,3750,4000,5000,6000,8000,10000],
											onSlide:function(v){currentKelvin = v; refreshWhitebalanceDemo()},
											onChange:function(v){currentKelvin = v; refreshWhitebalanceDemo()}
										});
}

function refreshWhitebalanceDemo() {
//	$('whitebalanceImage').src = "img/spaceball.gif";
	$('whitebalanceValue').innerHTML = currentKelvin;
	
	neuerDateiname = "photo_" + currentKelvin + " kelvin.jpg";
	$('whitebalanceImage').src = "demos/whitebalance/"+neuerDateiname
}


//
//
//	WHITEBALANCE2 Demo
//
//

var currentKelvin = 6000;

function initWhitebalance2() {
	new Control.Slider('whitebalanceHandle','whitebalanceTrack',{
											axis:'horizontal',
											range:$R(2200,10000),
											sliderValue: currentKelvin,
											values:[2200,2500,3000,3250,3500,3750,4000,5000,6000,7000,8000,10000],
											onSlide:function(v){currentKelvin = v; refreshWhitebalance2Demo()},
											onChange:function(v){currentKelvin = v; refreshWhitebalance2Demo()}
										});
}

function refreshWhitebalance2Demo() {
//	$('whitebalanceImage').src = "img/spaceball.gif";
	$('whitebalanceValue').innerHTML = currentKelvin;
	
	neuerDateiname = "photo_" + currentKelvin + " kelvin.jpg";
	$('whitebalanceImage').src = "demos/whitebalance2/"+neuerDateiname;
}



//
//
//	fstoptime Demo
//
//

var currentfstoptime = 0.3;

var fstopequals = new Array(); 
 
  fstopequals["0.3"] = 3.5;
  fstopequals["0.5"] = 4;
  fstopequals["0.6"] = 5.6;
  fstopequals["1"] = 8;
  fstopequals["1.6"] = 11;
  fstopequals["2"] = 16;
  fstopequals["3.2"] = 16;
  fstopequals["10"] = 16;
  fstopequals["25"] = 16;
  
var isoequals = new Array();

  isoequals["0.3"] = 800;
  isoequals["0.5"] = 800;
  isoequals["0.6"] = 800;
  isoequals["1"] = 800;
  isoequals["1.6"] = 800;
  isoequals["2"] = 800;
  isoequals["3.2"] = 400;
  isoequals["10"] = 200;
  isoequals["25"] = 100;

function initfstoptime() {
	new Control.Slider('fstoptimeHandle','fstoptimeTrack',{
											axis:'horizontal',
											range:$R(0.3,25),
											sliderValue: currentfstoptime,
											values:[0.3,0.5,0.6,1.0,1.6,2.0,3.2,10.0,25.0],
											onSlide:function(v){currentfstoptime = v; refreshstoptimeDemo()},
											onChange:function(v){currentfstoptime = v; refreshstoptimeDemo()}
										});
}

function refreshstoptimeDemo() {
	$('camera_exposure').innerHTML = currentfstoptime;
	$('camera_fstop').innerHTML = fstopequals[currentfstoptime];
	$('camera_iso').innerHTML = isoequals[currentfstoptime];
	
	neuerDateiname = "fstoptime_" + currentfstoptime + ".jpg";
	$('fstoptimeimage').src = "demos/fstoptime/"+neuerDateiname;
}