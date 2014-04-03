$(document).ready(function(){

	/**
	*	Play the jukebox
	*/

	$('#jukebox').on('submit', function(e) {
		e.preventDefault();

		// Clear out any previous song lyrics
		$('.song').empty();

		// grab the selected song name
		var selected_song = $('select.form-control option:selected').val();

		// grab selected song's lyrics
		var song_arr = song_lyrics(selected_song);

		// change the background color
		var bg_color = change_bg_color();
		if ( bg_color === "rgb(0, 31, 63)" ) {
			$('body').animate( {backgroundColor: bg_color, color: '#FFF'}, 1500);
		} else {
			$('body').animate( {backgroundColor: bg_color, color: '#101010'}, 1500);
		}

		// spit out the lyrics, line by line
		$.each(song_arr, function(index, value) {
			setTimeout( function() {
				var lyric = $('<p />', {text: value});
				$('.song').append(lyric);
			}, index * 3000);


		});
	});

	/**
	*	Return the selected song's lyrics
	*/
	function song_lyrics(song){
		var happy_birthday = ["Happy birthday to you.",
		"Happy birthday to you...",
		"Happy birthday, dear best-looking guy/gal in the universe!",
		"Happy birthday to youuuuuuuuuuu!!!"];
		var let_it_go = ["The snow glows white on the mountain tonight",
		"Not a footprint to be seen",
		"A kingdom of isolation",
		"And it looks like I’m the queen."];
		var love_song = ["I, I love you like a love song, baby",
		"I, I love you like a love song, baby",
		"I, I love you like a love song, baby",
		"And I keep hitting re-peat-peat-peat-peat-peat-peat"];
		
		switch (song) {
			case "happy_birthday":
			return happy_birthday;
			case "let_it_go":
			return let_it_go;
			case "love_song":
			return love_song;
			default:
			return happy_birthday;
		}
	}

	/**
	*	Set the mood
	*/
	function change_bg_color() {
		// lime, orange, navy, yellow, sky blue
		var colors   = ["rgb(1, 255, 112)", "rgb(255, 133, 27)", "rgb(0, 31, 63)", "rgb(255, 220, 0)", "rgb(127, 219, 255)"];

		// grab a new background color (can't be the same as current)
		var current_bg_color = $('body').css('backgroundColor');
		var new_bg_color = "";

		do {
			new_bg_color = colors[Math.floor(Math.random() * colors.length)];
		} while( current_bg_color === new_bg_color);

		return new_bg_color;
	}


});