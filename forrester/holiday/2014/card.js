$(document).ready(function() {
	$("#gray-squares").delay(700).animate({"opacity": "1"}, 700);
	$.when($(".square").delay(700).animate({"opacity": "1"}, 700)).then(function() {

		var yellowClicked = false;
		var greenClicked = false;
		var blueClicked = false;

		$.when($(".arrow img").animate({"opacity": "1"}, 1500)).then(function() {
			$( ".yellow" ).hover(
				function() {
					var thisWidth = "145";

					$(this).find(".coordinates").stop(true, true).animate({"width": thisWidth}, 500);
					$(this).stop(true, true).animate({"width": thisWidth}, 500);
					if ($(this).hasClass('arrow')) {
						$(this).find("img").css({ opacity: 0 });
					}
				}, function() {
					if (yellowClicked == false) {
						$(this).find(".coordinates").animate({"width": "0"}, 500);
						$(this).animate({"width": "16"}, 500, function() {
							if ($(this).hasClass('arrow')) {
								$(this).find("img").css({ opacity: 1 });
							}
						});
					}
				}
			);

			$( ".green" ).hover(
				function() {
					var thisWidth = "162";
					
					$(this).find(".coordinates").stop(true, true).animate({"width": thisWidth}, 500);
					$(this).stop(true, true).animate({"width": thisWidth}, 500);
					if ($(this).hasClass('arrow')) {
						$(this).find("img").css({ opacity: 0 });
					}
				}, function() {
					if (greenClicked == false) {
						$(this).find(".coordinates").animate({"width": "0"}, 500);
						$(this).animate({"width": "16"}, 500, function() {
							if ($(this).hasClass('arrow')) {
								$(this).find("img").css({ opacity: 1 });
							}
						});
					}
				}
			);

			$( ".blue" ).hover(
				function() {
					var thisWidth = "160";
					
					$(this).find(".coordinates").stop(true, true).animate({"width": thisWidth}, 500);
					$(this).stop(true, true).animate({"width": thisWidth}, 500);
					if ($(this).hasClass('arrow')) {
						$(this).find("img").css({ opacity: 0 });
					}
				}, function() {
					if (blueClicked == false) {
						$(this).find(".coordinates").animate({"width": "0"}, 500);
						$(this).animate({"width": "16"}, 500, function() {
							if ($(this).hasClass('arrow')) {
								$(this).find("img").css({ opacity: 1 });
							}
						});
					}
				}
			);
		});

		


		var phasesCompleted = 0;

		function replayCard() {
			location.reload(false);
		}

		function squareClick() {
			var myCallbacks = 1;
			$(".square").off("click").css("cursor", "default");
			if (phasesCompleted == 0) {
				$("#background").animate({ opacity: 0 }, 1800);
			}

			if ($(this).hasClass("yellow") === true) {
				yellowClicked = true;
				$(".yellow.arrow img").stop(true, true).css({"opacity": "0"});
				$(".yellow").off('mouseenter mouseleave'); //Unbind the hover event
				$("#gray8").animate({"opacity": "0"}, 900);
				$("#gray9").animate({"opacity": "0"}, 900);
				$(".yellow > .coordinates").stop(true, true).animate({"width": "145"}, 1500);
				$(".yellow").animate({"width": "145"}, 1500);
				$(".yellow-map").css({ "z-index": 0 });
				$(".green-map").css({ "z-index": -1 });
				$(".blue-map").css({ "z-index": -1 });
				$("#emea1").animate({"opacity": "1"}, 1500);
				$("#emea2").delay(1050).animate({"opacity": "1"}, 1500);
				$.when($(".yellow").delay(850).fadeOut(1500)).then(function() {
					$(this).css({ opacity: 0 });
				});
				$("#emea3").delay(1800).animate({"opacity": "1"}, 1500);
				$.when($(".yellow-city").delay(1050).animate({"opacity": "1"}, 1500)).then(function() {
					$(".yellow-city").delay(1050).animate({"opacity": "0.6"}, 1500, function() {
						if (myCallbacks > 1) {
							return;
						} else {
							$(".square").off("click").on( "click", squareClick).css("cursor", "pointer");
							myCallbacks++;
							phasesCompleted++;
							if (phasesCompleted == 3) {
								$("#close").animate({"opacity": "1"}, 1800, function() {
									$("#message").show();
									$(".yellow-map").css({ opacity: 0 });
									$(".green-map").css({ opacity: 0 });
									$(".blue-map").css({ opacity: 0 });
									$("#close").animate({"opacity": "0"}, 1800, function() {
										$("#replay").show().on( "click", replayCard).css("cursor", "pointer");
										$("#logo").wrap("<a href=\"http://forrester.com\"></a>");
									});
								});
							}
						}
					});
				});
			}

			if ($(this).hasClass("green") === true) {
				greenClicked = true;
				$(".green.arrow img").stop(true, true).css({"opacity": "0"});
				$(".green").off('mouseenter mouseleave'); //Unbind the hover event
				$("#gray2").animate({"opacity": "0"}, 900);
				$("#gray10").animate({"opacity": "0"}, 900);
				$("#gray11").animate({"opacity": "0"}, 900);
				$("#gray22").animate({"opacity": "0"}, 900);
				$("#gray3").animate({"opacity": "0"}, 900);
				$("#gray27").animate({"opacity": "0"}, 900);
				$(".green > .coordinates").stop(true, true).animate({"width": "162"}, 1500);
				$(".green").animate({"width": "162"}, 1500);
				$(".green-map").css({ "z-index": 0 });
				$(".yellow-map").css({ "z-index": -1 });
				$(".blue-map").css({ "z-index": -1 });
				$("#amer1").animate({"opacity": "1"}, 1500);
				$("#amer2").delay(1050).animate({"opacity": "1"}, 1500);
				$.when($(".green").delay(850).fadeOut(1500)).then(function() {
					$(this).css({ opacity: 0 });
				});
				$("#amer3").delay(1800).animate({"opacity": "1"}, 1500);
				$.when($(".green-city").delay(1050).animate({"opacity": "1"}, 1500)).then(function() {
					$(".green-city").delay(1050).animate({"opacity": "0.6"}, 1500, function() {
						if (myCallbacks > 1) {
							return;
						} else {
							$(".square").off("click").on( "click", squareClick).css("cursor", "pointer");
							myCallbacks++;
							phasesCompleted++;
							if (phasesCompleted == 3) {
								$("#close").animate({"opacity": "1"}, 1800, function() {
									$("#message").show();
									$(".yellow-map").css({ opacity: 0 });
									$(".green-map").css({ opacity: 0 });
									$(".blue-map").css({ opacity: 0 });
									$("#close").animate({"opacity": "0"}, 1800, function() {
										$("#replay").show().on( "click", replayCard).css("cursor", "pointer");
										$("#logo").wrap("<a href=\"http://forrester.com\"></a>");
									});
								});
							}
						}
					});
				});
			}

			if ($(this).hasClass("blue") === true) {
				blueClicked = true;
				$(".blue.arrow img").stop(true, true).css({"opacity": "0"});
				$(".blue").off('mouseenter mouseleave'); //Unbind the hover event
				$("#gray12").animate({"opacity": "0"}, 900);
				$("#gray24").animate({"opacity": "0"}, 900);
				$("#gray19").animate({"opacity": "0"}, 900);
				$(".blue > .coordinates").stop(true, true).animate({"width": "160"}, 1500);
				$(".blue").animate({"width": "160"}, 1500);
				$(".blue-map").css({ "z-index": 0 });
				$(".yellow-map").css({ "z-index": -1 });
				$(".green-map").css({ "z-index": -1 });
				$("#apac1").animate({"opacity": "1"}, 1500);
				$("#apac2").delay(1050).animate({"opacity": "1"}, 1500);
				$.when($(".blue").delay(850).fadeOut(1500)).then(function() {
					$(this).css({ opacity: 0 });
				});
				$("#apac3").delay(1800).animate({"opacity": "1"}, 1500);
				$.when($(".blue-city").delay(1050).animate({"opacity": "1"}, 1500)).then(function() {
					$(".blue-city").delay(1200).animate({"opacity": "0.6"}, 1500, function() {
						if (myCallbacks > 1) {
							return;
						} else {
							$(".square").off("click").on( "click", squareClick).css("cursor", "pointer");
							myCallbacks++;
							phasesCompleted++;
							if (phasesCompleted == 3) {
								$("#close").animate({"opacity": "1"}, 1800, function() {
									$("#message").show();
									$(".yellow-map").css({ opacity: 0 });
									$(".green-map").css({ opacity: 0 });
									$(".blue-map").css({ opacity: 0 });
									$("#close").animate({"opacity": "0"}, 1800, function() {
										$("#replay").show().on( "click", replayCard).css("cursor", "pointer");
										$("#logo").wrap("<a href=\"http://forrester.com\"></a>");
									});
								});
							}
						}
					});
				});
			}

		}
		$(".square").on('click', squareClick);

	});
});