var begin_entered=false;
var cont_width;
$(document).ready(function(){
	
	
	$(document).delegate('.ui-page', 'touchmove', false);
	
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if(isSafari){
	   $('#heading_text').attr('role','text')
	}
$('#begin_btn').off('click').on('click',function(){
	begin_entered=true;
	$('#btn_container').fadeIn(1000);
	$('#begin_page,#begin_btn').hide();
	$('#responsive_container,#text_container').fadeIn(1000);
	$('.slider').fadeIn(1000);
	resizeApp();
	set_tab()
	$('#whole_container').attr('role','application');
	$('a').attr('href','#reset_btn');
	$('#reset_btn').show();
})
	$('.imageCont,#begin_container').mouseenter(function(){
		$('.imageCont,#begin_container').attr('title',$('#begin_container').attr('alt'));
	});
	
	$('.imageCont,#begin_container').mouseleave(function() {
  		$( ".imageCont,#begin_container" ).removeAttr('title');
	});
	
//	document.getElementById("ui_handler").addEventListener("touchstart", tapHandler);

//	$('.ui-slider-handle').on('touchstart click',alert())
	

	
	
//	$("#slider").slider("option", "values", [50,80]);
	
var slider = $("#slider").slider({
	  orientation: 'horizontal',
	  range: false,
	  min: 0,
	  max: 100,
	  values: [0],
	
	
		
	  slide: function(event, ui) {
		  var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
		  var includeRight = event.keyCode != $.ui.keyCode.LEFT;
		  var value = findNearest(includeLeft, includeRight, Math.round(ui.value));
//	   	  var sliderpos =$(this).find('.ui-slider-handle').position();
//		  var sliderleft= parseInt(sliderpos.left);
		  slider.slider('values', 0, ui.value);
//		  console.log(ui.value)
		 
//		  console.log(slider.slider('values', 0, ui.value))
	      rangePercent = getRangePercent(ui.value);
		  console.log(ui.value);
		  displayImage((getRealValue(slider.slider('values', 0))+rangePercent));
		  console.log(":::::::::::::::::::::",(getRealValue(slider.slider('values', 0))+rangePercent))
	   		console.log(Math.round(ui.value))
		  if(Math.round(ui.value)>=93){ 
//				alert();
//		   		console.log('ipod')
				$('.img6').css('opacity','1');
//		   		$('.ui-slider-handle').attr('aria-label','2014')
			  	$('#heading_text').html(data[0].description[data[0].description.length-1])
			   	$('#heading_text').attr('aria-label',data[0].description[data[0].description.length-1])
			}
//		  if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {	
//		  	$('.ui-slider-handle').blur();
//		  }
		  return false;
		  
	  },
	  stop: function( event, ui ) {
		  var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
		  var includeRight = event.keyCode != $.ui.keyCode.LEFT;
		  var value = findNearest(includeLeft, includeRight, ui.value/scale);
//		  console.log(includeLeft, includeRight, ui.value);
		  slider.slider('values', 0, Math.round(value*scale));
		  console.log(Math.round(value*scale));
		 
		  
		  adjustSlider((getRealValue(slider.slider('values', 0))+1));
		  if(Math.round(value*scale)==0){
			  $('#heading_text').removeAttr('tabindex');
			  $('#heading_text').css('visibility','hidden');
		  }else{
			  $('#heading_text').css('visibility','visible');
			  $('#heading_text').attr('tabindex','0');
		  }
		   if(Math.round(value*scale)>=93){
//				alert();
				$('.img6').css('opacity','1');
			    $('#heading_text').html(data[0].description[data[0].description.length-1])
			   	$('#heading_text').attr('aria-label',data[0].description[data[0].description.length-1])
		  
		   }
		  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          if(isSafari){
               $('#ui_handler').blur();
               $('#ui_handler').off('click').on('click',function(){
                    $('#text_container').focus();
                    setTimeout(function(){
                        $('#ui_handler').focus();
                    },10)
                });
              setTimeout(function(){
                $('#ui_handler').trigger('click')
              },20)
          }
	  }
  });
	
			
//		var flag_touch=0;
//	if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {		
//		$(document).on('touchend', '.ui-slider-handle', function(event){
//////			if ($(".ui-slider-handle").is(":focus")) {
////				//alert()
////				if(event.handled === false) return
////				event.stopPropagation();
////				event.preventDefault();
////				event.handled = true;
////				$("#slider").slider("option", "values", [value[flag_touch]]);
////				var isAndroid = /(android)/i.test(navigator.userAgent);	
////				if(isAndroid){
////					setTimeout(function(){
//							$('.ui-slider-handle').blur()//.focus();
//						setTimeout(function(){
////							$('.ui-slider-handle').removeAttr('aria-label')//.blur()
//							$('.ui-slider-handle').focus()//.blur()
//						},100)
//						
////						setTimeout(function(){
////							$('.ui-slider-handle').blur()
////						},200)
////					},100)
////				}
////			
////				flag_touch++
////				if(flag_touch>value.length-1){
////					flag_touch=0
////				}
//////			}
//		});
//	}
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if(iOS){
		$('#ui_handler').attr('aria-live','assertive')
	}
		  $(document).on('touchend', '.ui-slider-handle', function(event){
////			$('.ui-slider-handle').focus()
			if( /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent) ) {	
//				//aria-live="assertive"
////				$(document).on('click','body',function(){
////					//  $(this) = your current element that clicked.
////					// additional code
////					alert()
////				});
////				$(document).trigger('click')
////				$('.ui-slider-handle').trigger('click')
				
				var isAndroid = /(android)/i.test(navigator.userAgent);
				if(isAndroid){
					$('.ui-slider-handle').blur();
					setTimeout(function(){
						$('.ui-slider-handle').focus();	
					},200)		
				}
				
//				
////					$('#heading_text').trigger('click');
//////					$('.ui-slider-handle').off('click').on('click',function(){
////////						$('.ui-slider-handle').attr('aria-label',' ');
////						$('.ui-slider-handle').focus()//.trigger();
//////					});
//////					$('.ui-slider-handle').trigger('click')
			}	
		});
function findNearest(includeLeft, includeRight, value) {
	var nearest = null;
	var diff = null;
	for (var i = 0; i < values.length; i++) {
		if ((includeLeft && values[i] <= value) || (includeRight && values[i] >= value)) {
			var newDiff = Math.abs(value - values[i]);
			if (diff == null || newDiff < diff) {
				nearest = values[i];
				diff = newDiff;
			}
		}
	}
	return nearest;
}
	
function getRangePercent(value){
	var firstVal = values[0];
	var secondVal = values[values.length-1];
	for (var i = 0; i < value.length; i++) {
		if (value <= value[i])
		{
			secondVal = value[i];
			break;
		}
		firstVal = value[i];
//		console.log(firstVal);
	}
	var valA = secondVal-firstVal;
	var valB = value-firstVal;
//	console.log('dinesh:::',Number((valB/valA).toFixed(2)))
	return Number((valB/valA).toFixed(2));
//	console.log(Number((valB/valA).toFixed(2)))
}

       
function adjustSlider(val){
	$( "#slider" ).slider("value",val);
	displayImg(val);
	console.log(val)
}

function getRealValue(sliderValue) {
	for (var i = 0; i < value.length; i++) {
		
//		console.log("sliderValue::::",value[i], sliderValue)
		if (value[i] >= sliderValue) {
//			console.log("::::dfd:::::",trueValues[i])
//			return trueValues[i];
			return (i);
		}
	}
	return 0;
}
	
function displayImage(val){
	displayImg(val);
//	console.log('dinesh:::',val)
}
	
String.prototype.replaceAt=function(index, character) {
	return this.substr(0, index) + character + this.substr(index+character.length);
}

    function displayImg(val)
    {
		
		
//		console.log(val);
        var roundVal = Number(String(val).split(".")[0]);
		console.log("roundVal:::",roundVal)
		
        var decimalAfterVal = Number(String(val))//.split(".")[1]);
        var nxtImg = 0;
        var decimalFirstVal = Number(String(val).replaceAt(0, "0"));
		//console.log("decimalFirstVal:::",decimalFirstVal);
		//console.log("decimalAfterVal:::",decimalAfterVal);

        if (decimalFirstVal+'' != 'undefined' && ! isNaN(decimalFirstVal))
        {
//			console.log('1')
            nxtImg = roundVal + 1;
        }else{
//			console.log('2')
            decimalFirstVal = 0;
        }

        if (nxtImg != -1)
        {
            var inc = decimalFirstVal;
            var dec = 100-decimalFirstVal;
            // $('.direction').hide();
            // $('.directionText').hide();
            $('#heading_text').html(data[0].description[roundVal-2]); 
            $('#heading_text').attr('aria-label',data[0].description[roundVal-2]); 
            $('.ui-slider-handle').attr('aria-label',data[0].year[roundVal-1]); 
//			console.log(data[0].year[roundVal-1]);
			
			console.log("heading",roundVal)
             $(".imgC").css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+0+')"', 
            'filter': 'alpha(opacity='+0+')',
            '-moz-opacity':(0/100),
            '-khtml-opacity': (0/100),
           'opacity': (0/100)});

            $(".img"+roundVal).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+dec+')"', 
            'filter': 'alpha(opacity='+dec+')',
            '-moz-opacity':(dec/100),
            '-khtml-opacity': (dec/100),
           'opacity': (dec/100)});

			$(".img"+nxtImg).css({'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity='+inc+')"', 
            'filter': 'alpha(opacity='+inc+')',
            '-moz-opacity':(inc),
            '-khtml-opacity': (inc),
           'opacity': (inc)});
             
			 console.log(val,">>>>",roundVal, nxtImg)
             console.log("din:::",inc,dec)
        }

        /*
        {'-ms-filter':'"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)"', 
        'filter': 'alpha(opacity=50)',
        '-moz-opacity':'0.5',
        '-khtml-opacity': '0.5',
       'opacity': '0.5'}*/
    }
$('.ui-slider-handle').addClass('customPlayhead')
$('.ui-slider,.ui-slider-range').addClass('sliderRange');
$('#text_container').html(direction_text);
$('#text_container').attr('aria-label',$('#text_container').text())

//
	set_tab()
	
	document.body.onkeyup = function(e){
//		alert()
		if(e.keyCode == 32 || e.keyCode == 13){
			e.preventDefault(e);
//			if(e.target.id!='label_head_1'||e.target.id!='label_head_2'||e.target.id!='label_head_3'){
				$('#'+e.target.id).trigger('click');
//			}
			
		}
		
	}
	
	$('#reset_btn').off('click').on('click',function(){
		location.reload();	
	})
	
	$('#begin_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();	
	})
	$('#begin_reverse_dummy').on('focus',function(){
		$('.tab_index').eq(1).focus();
	})
	
	
	$('#dummy_1').on('focus',function(){
		$('.tab_index').eq(1).focus();
		$('#whole_container').removeAttr('role');
		
	})
	$('#dummy_2').on('focus',function(){
		$('.tab_index').eq(0).focus();
	})
	var isAndroid = /(android)/i.test(navigator.userAgent);	
	if(isAndroid){
		setTimeout(function(){
			$('.ui-slider-handle').removeAttr('role');
		},10)
	}
	
});

$(window).resize(function(){
  resizeApp();
});


//});
	
function set_tab(){
	if(begin_entered==false){
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('#begin_container').addClass('tab_index');
		$('#begin_btn').addClass('tab_index');
		$('#begin_dummy,#begin_reverse_dummy').addClass('tab_index');
	}else{
		$('.tab_index').removeClass('tab_index').removeAttr('tabindex');
		$('.hotspot').addClass('tab_index');
		$('.label_heading').addClass('tab_index');
		$('.label_content').addClass('tab_index');
		$('.close_button').addClass('tab_index');
		$('#text_container,#reset_btn').addClass('tab_index');
//		$('#heading_text').addClass('tab_index');
		$('.imageCont').addClass('tab_index');
		$('.ui-slider-handle').addClass('tab_index');
//		$('.ui-slider-handle').attr('aria-label','draggable slider')
//		$('.ui-slider-handle').attr('role','slider')
		$('#dummy_1,#dummy_2,.dummy_popup,.hotspot_dummy').addClass('tab_index');
	}
	$('.tab_index').each(function(){
//		setTimeout(function(){
    		$('.tab_index').attr('tabindex','0')//.focus().blur();
//		},10)
  });
}
