var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
 *
 * Copyright (c) 2014 Daniele Lenares (https://github.com/Ryuk87)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * 
 * Version 0.3.0
 *
 */
(function ( $ ) {
	
	$.goup = function(user_params) {
		
		/* Default Params */
		var params = $.extend({
				location : 'left',
				locationOffset : 20,
				bottomOffset : 20,
				containerRadius : 5,
				containerClass : 'goup-container',
				arrowClass : 'goup-arrow',
				alwaysVisible : false,
				trigger: 500,
				entryAnimation : 'fade',
				goupSpeed : 'slow',
				hideUnderWidth : 500,
				containerColor : '#cb4335',
				arrowColor : '#fff'
			}, user_params);
		/* */
		
		
		$('body').append('<div style="display:none" class="'+params.containerClass+'"></div>');
		var container = $('.'+params.containerClass);
		$(container).html('<div class="'+params.arrowClass+'"></div>');
		var arrow = $('.'+params.arrowClass);
		
		/* Parameters check */
		var location = params.location;
		if (location != 'right' && location != 'left') {
			location = 'right';
		}
		
		var locationOffset = params.locationOffset;
		if (locationOffset < 0) {
			locationOffset = 0;
		}
		
		var bottomOffset = params.bottomOffset;
		if (bottomOffset < 0) {
			bottomOffset = 0;
		}
		
		var containerRadius = params.containerRadius
		if (containerRadius < 0) {
			containerRadius = 0;
		}
		
		var trigger = params.trigger;
		if (trigger < 0) {
			trigger = 0;
		}
		
		var hideUnderWidth = params.hideUnderWidth;
		if (hideUnderWidth < 0) {
			hideUnderWidth = 0;
		}
		
		var checkColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
		if (checkColor.test(params.containerColor)) {
			var containerColor = params.containerColor;
		} else {
			var containerColor = '#000';
		}
		if (checkColor.test(params.arrowColor)) {
			var arrowColor = params.arrowColor;
		} else {
			var arrowColor = '#fff';
		}
		/* */
		
		/* Container Style */
		var containerStyle = {};
		containerStyle = {
			position : 'fixed',
			width : 50,
			height : 50,
			background : containerColor,
			cursor: 'pointer'
		};
		containerStyle['bottom'] = bottomOffset;
		containerStyle[location] = locationOffset;
		containerStyle['border-radius'] = containerRadius;
		
		$(container).css(containerStyle);
		
		/* Arrow Style */		
		var arrowStyle = {};
		arrowStyle = {
			width : 0,
			height : 0,
			margin : '0 auto',
			'padding-top' : 19,
			'border-style' : 'solid',
			'border-width' : '0 10px 10px 10px',
			'border-color' : 'transparent transparent '+arrowColor+' transparent' 
		};
		$(arrow).css(arrowStyle);
		/* */
		
		
		
		/* Trigger Hide under a certain width */
		var isHidden = false;
		$(window).resize(function(){
			if ($(window).outerWidth() <= hideUnderWidth) {
				isHidden = true;
				do_animation($(container), 'hide', params.entryAnimation);
			} else {
				isHidden = false;
				$(window).trigger('scroll');
			}
		});
		/* If i load the page under a certain width, i don't have the event 'resize' */
		if ($(window).outerWidth() <= hideUnderWidth) {
			isHidden = true;
			$(container).hide();
		}
		
		
		/* Trigger show event */
		if (!params.alwaysVisible) {
			$(window).scroll(function(){
				if ($(window).scrollTop() >= trigger && !isHidden) {
					do_animation($(container), 'show', params.entryAnimation);
				}
				
				if ($(window).scrollTop() < trigger && !isHidden) {
					do_animation($(container), 'hide', params.entryAnimation);
				}
			});
		} else {
			do_animation($(container), 'show', params.entryAnimation);
		}
		/* If i load the page and the scroll is over the trigger, i don't have immediately the event 'scroll' */
		if ($(window).scrollTop() >= trigger && !isHidden) {
			do_animation($(container), 'show', params.entryAnimation);
		}
		
		/* Click event */
		$(container).on('click', function(){
			$('html,body').animate({ scrollTop: 0 }, params.goupSpeed);
			return false;
		});
	};
	
	
	/* Private function for the animation */
	function do_animation(obj, type, animation) {
		if (type == 'show') {
			switch(animation) {
				case 'fade':
					obj.fadeIn();
				break;
				
				case 'slide':
					obj.slideDown();
				break;
				
				default:
					obj.fadeIn();
			}
		} else {
			switch(animation) {
				case 'fade':
					obj.fadeOut();
				break;
				
				case 'slide':
					obj.slideUp();
				break;
				
				default:
					obj.fadeOut();
			}
		}
	}
	
}( jQuery ));


$(document).ready(function(){
$.goup();
});

}
/*
     FILE ARCHIVED ON 10:23:20 Dec 14, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:57:18 Oct 03, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.524
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 25.088
  LoadShardBlock: 332.332 (3)
  PetaboxLoader3.datanode: 371.829 (5)
  PetaboxLoader3.resolve: 2519.859 (4)
  load_resource: 2709.907 (2)
*/