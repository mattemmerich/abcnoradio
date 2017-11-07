$(document).ready(function(){


		var sk = document.getElementById("#skip")
		var b = document.getElementById("#back")
		var time = document.getElementById("showDuration")
		var display = document.getElementById("display")
		var s = document.getElementById("song")
		var a = document.getElementById("artist")
		var d = document.getElementById("date")
		var idnum = 0



	//Hide Pause Button
	$('#pause').hide();
	// //Pause Button
	$('#pause').click(function(){
		console.log('pause button clicked')
		// myRadio = new Radio();
		myRadio.pause();
		$('#pause').hide();
		$('#play').show();

	});

	//Play Button
	$('#play').click(function(){
		console.log('play button clicked')
		// myRadio = new Radio();
		myRadio.play();
		$('#play').hide();
		$('#pause').show();
		$('#duration').fadeIn(1000);

	});

	$('#submit').click(function(){
		console.log('track submitted')
		myRadio.addTrack();

	});


	var Radio = function(){
		var i = 0;
		this.archive = [];
		// this.currentSong ='mp3/Atticus_Finch.mp3';
		var player = document.getElementById("music");

		this.play = function(){
			console.log('the track is playing');
			player.play();
			$('#song').text(this.archive[i].song)
			$('#artist').text(this.archive[i].artist)
			$('#date').text(this.archive[i].date)
			// str.match(/(mp3\/)(\w+)(\.mp3)/)[2]

			// document.getElementById("#song").innerHTML this.archive[i].song
			// document.getElementById("#artist").innerHTML this.archive[i].artist
			// document.getElementById("#date").innerHTML this.archive[i].date
		};

		this.pause = function(){
			console.log('paused');
			player.pause();
		}

		this.back = function(){
			console.log('back');
			if(i == 0){
			 i = this.archive.length - 1;
			} else {
				i--;
			}
			 player.setAttribute("src", this.archive[i].song);
			 this.play();
		}

		this.skip =function(){
			console.log('skiped');

			if(i == this.archive.length-1){
			 i = 0
			} else {
				i++;
			}
			 player.setAttribute("src", this.archive[i].song);
			 this.play();



		}

		this.load=function(i){
			this.archive.push(i);
		}

		this.addTrack=function(i){
			Submit.apply(this, arguments)
			i = new Submit()
			this.archive.push(i)
			//thanks Andy!!!

	}





	};


	function Track(song, artist, date){
		this.song = song;
		this.artist = artist;
		this.date = date;
	}


	function Submit(song, artist, date){
		this.song=document.getElementById("sub_url").value;
		this.artist = document.getElementById("sub_artist").value;
		this.date = document.getElementById("sub_song").value;
	}

	//Skip Button
	$('#skip').click(function(sk){
		myRadio.skip();
	});


	//Back Button
	$('#back').click(function(b){
		myRadio.back();
	});



	var imgArray = [
	"img/abc.png",
	"img/abc_001.jpg",
	"img/abc_010.jpg",
	"img/abc_002.jpg",
  "img/abc_003.jpg",
	"img/abc_004.jpg",
	"img/abc_005.jpg",
	"img/abc_007.jpg",
	"img/abc_008.jpg",
	"img/abc_009.jpg",
  "img/abc_011.jpg"];

	var header = document.getElementsByClassName("carousel")[0];
	var counter = 0;
	setInterval(function() {
	    header.setAttribute("src", imgArray[counter]);
	    counter++;
	    if(counter >= imgArray.length) {
	        counter = 0;
	    }
	}, 1500)

	zero = new Track("mp3/Wound.mp3", "Heavy Negatives", "09/XX/2015")
	one = new Track("mp3/Manthem.mp3", "Bouncing Souls", "09/14/2010")
	two = new Track("mp3/Selfish_Schism.mp3", "Mankind?", "10/XX/1991")
	three = new Track("mp3/Ugly_Bastards.mp3", "The Casulaties", "XX/XX/1991")
	//four = new Track("mp3/Unknown_Title.mp3", "Death Mold", "11/06/2006")
	four = new Track("mp3/Shoot_People_Not_Dope.mp3", "Toxic Narcotic", "XX/XX/2004")
	five = new Track("mp3/first_song.mp3", "The Skabs", "XX/XX/199X")
	six = new Track("mp3/Chattyang.mp3", "Sangharsha", "10/18/2014")
	seven = new Track("mp3/Elmundo.mp3", "R-Tronika", "04/25/2015")
	eight = new Track("mp3/Unknown_Title_2.mp3", "Dysfunctional Youth", "XX/XX/1995")
	nine = new Track("mp3/enziguri.mp3", "Empire State", "04/07/2016")
	ten = new Track("mp3/why_suffer.mp3", "GO!", "07/08/2006")
	eleven = new Track("mp3/Unknown_Title.mp3", "A$stroland", "04/13/13")
	twelve = new Track("mp3/Justice_For_All_&_Know_It_All.mp3", "76% Uncertain", "07/25/2009")







//loops structres...
//push...
//if/else control flow logic
//

	myRadio = new Radio();

	myRadio.load(zero);
	myRadio.load(one);
	myRadio.load(two);
	myRadio.load(three);
	myRadio.load(four);
	myRadio.load(five);
	myRadio.load(six);
	myRadio.load(seven);
	myRadio.load(eight);
	myRadio.load(nine);
	myRadio.load(ten);
	myRadio.load(eleven);
	myRadio.load(twelve);
	


	// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// $('#song').text(this.archive[i].song.match(/(mp3\/)(\w+)(\.mp3)/)[2])/////////LINE 63//////////////
});
