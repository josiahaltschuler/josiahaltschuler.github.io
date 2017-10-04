$(window).ready(function() {
	
	var allFlipped = false;
	
	function setupTouch() {
		$(window).bind('touchmove',function(event){
			
			var e = event.originalEvent;
			
			if (e.targetTouches[0].pageX >= 0) {
				var element = document.elementFromPoint(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
				theClass = $(element).attr("class");
				if (theClass.indexOf('lightblue') > 0) {
					var theColor = '#9bddf8';
				}
				if (theClass.indexOf('darkblue') > 0) {
					var theColor = '#3399cc';
				}
				if (theClass.indexOf('yellow') > 0) {
					var theColor = '#ffcd3b';
				}
				if (theClass.indexOf('orange') > 0) {
					var theColor = '#ffb218';
				}
				if (theClass.indexOf('red') > 0) {
					var theColor = '#ff880b';
				}
				if (allFlipped == false) {
					if (theClass.indexOf("unflipped") > -1) {
						$(element).flip({ 
							direction: 'rl',
							speed: 150,
							bgColor: theColor,
							color: theColor,
							onEnd: function() {
								if ($('.unflipped').length == 0) {
									allFlipped = true;
									setupFlipBack();
								}
							}
						}).removeClass('unflipped').addClass('flipped').unbind();
						e.preventDefault();
					}
				} else {
					if (theClass.indexOf(" flipped") > -1) {
						$(element).flip({ 
							direction: 'lr',
							speed: 150,
							bgColor: theColor,
							color: theColor,
							onEnd: function(){
								if ($('.flipped').length == 0) {
									allFlipped = false;
									setupFlipForward();
								}
							}
						}).removeClass('flipped').addClass('unflipped').unbind();
						e.preventDefault();
					}
				}
				
			}
		});
	}
	
	function setupFlipForward() {
		window.setTimeout(function() {
		
			$('.lightblue').one('mouseenter', function() {
				if ($('.flipped').length == 32) {
					setupFlipBack();
					allFlipped = true;
				}
				$(this).flip({ 
					direction: 'rl',
					speed: 150,
					bgColor: '#9bddf8',
					color: '#9bddf8'
				}).removeClass('unflipped').addClass('flipped');
			});
	
			$('.darkblue').one('mouseenter', function() {
				if ($('.flipped').length == 32) {
					setupFlipBack();
					allFlipped = true;
				}
				$(this).flip({ 
					direction: 'rl',
					speed: 150,
					bgColor: '#3399cc',
					color: '#3399cc'
				}).removeClass('unflipped').addClass('flipped');
			});
	
			$('.yellow').one('mouseenter', function() {
				if ($('.flipped').length == 32) {
					setupFlipBack();
					allFlipped = true;
				}
				$(this).flip({ 
					direction: 'rl',
					speed: 150,
					bgColor: '#ffcd3b',
					color: '#ffcd3b'
				}).removeClass('unflipped').addClass('flipped');
			});
	
			$('.orange').one('mouseenter', function() {
				if ($('.flipped').length == 32) {
					setupFlipBack();
					allFlipped = true;
				}
				$(this).flip({ 
					direction: 'rl',
					speed: 150,
					bgColor: '#ffb218',
					color: '#ffb218'
				}).removeClass('unflipped').addClass('flipped');
			});
	
			$('.red').one('mouseenter', function() {
				if ($('.flipped').length == 32) {
					setupFlipBack();
					allFlipped = true;
				}
				$(this).flip({ 
					direction: 'rl',
					speed: 150,
					bgColor: '#ff880b',
					color: '#ff880b'
				}).removeClass('unflipped').addClass('flipped');
			});
		
		}, 500);
	}
	
	function setupFlipBack() {
		window.setTimeout(function() {
		
			$('.lightblue').one('mouseenter', function() {
				if ($('.unflipped').length == 32) {
					setupFlipForward();
					allFlipped = false;
				}
				$(this).flip({ 
					direction: 'lr',
					speed: 150,
					bgColor: '#9bddf8',
					color: '#9bddf8'
				}).removeClass('flipped').addClass('unflipped');
			});
		
			$('.darkblue').one('mouseenter', function() {
				if ($('.unflipped').length == 32) {
					setupFlipForward();
					allFlipped = false;
				}
				$(this).flip({ 
					direction: 'lr',
					speed: 150,
					bgColor: '#3399cc',
					color: '#3399cc'
				}).removeClass('flipped').addClass('unflipped');
			});
		
			$('.yellow').one('mouseenter', function() {
				if ($('.unflipped').length == 32) {
					setupFlipForward();
					allFlipped = false;
				}
				$(this).flip({ 
					direction: 'lr',
					speed: 150,
					bgColor: '#ffcd3b',
					color: '#ffcd3b'
				}).removeClass('flipped').addClass('unflipped');
			});
	
			$('.orange').one('mouseenter', function() {
				if ($('.unflipped').length == 32) {
					setupFlipForward();
					allFlipped = false;
				}
				$(this).flip({ 
					direction: 'lr',
					speed: 150,
					bgColor: '#ffb218',
					color: '#ffb218'
				}).removeClass('flipped').addClass('unflipped');
			});
	
			$('.red').one('mouseenter', function() {
				if ($('.unflipped').length == 32) {
					setupFlipForward();
					allFlipped = false;
				}
				$(this).flip({ 
					direction: 'lr',
					speed: 150,
					bgColor: '#ff880b',
					color: '#ff880b'
				}).removeClass('flipped').addClass('unflipped');
			});
		
		}, 500);
		
	}
	
	// This is a bunch of random card flips for the intro
	window.setTimeout(function() {
		$('.card1').flip({ 
			direction: 'rl',
			speed: 150,
			bgColor: '#9bddf8',
			color: '#9bddf8'
		}).addClass('flipped');
	}, 1100);
	
	window.setTimeout(function() {
		$('.card1').flip({ 
			direction: 'lr',
			speed: 150,
			bgColor: '#9bddf8',
			color: '#9bddf8'
		}).removeClass('flipped');
	}, 1650);
	
	window.setTimeout(function() {
		$('.card21').flip({ 
			direction: 'rl',
			speed: 150,
			bgColor: '#3399cc',
			color: '#3399cc'
		}).addClass('flipped');
	}, 1300);
	
	window.setTimeout(function() {
		$('.card21').flip({ 
			direction: 'lr',
			speed: 150,
			bgColor: '#3399cc',
			color: '#3399cc'
		}).removeClass('flipped');
	}, 1850);
	
	window.setTimeout(function() {
		$('.card27').flip({ 
			direction: 'rl',
			speed: 150,
			bgColor: '#ff880b',
			color: '#ff880b'
		}).addClass('flipped');
	}, 1550);
	
	window.setTimeout(function() {
		$('.card27').flip({ 
			direction: 'lr',
			speed: 150,
			bgColor: '#ff880b',
			color: '#ff880b'
		}).removeClass('flipped');
	}, 2100);
	
	window.setTimeout(function() {
		
		// The sets up the mouse hover events
		setupFlipForward();
		
		// This sets up the touchmove events
		setupTouch();
	}, 2500);
	
});