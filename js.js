var Name = "";
var Level = 1;
var audio = new Audio('http://soundfxcenter.com/video-games/sonic-the-hedgehog/26f8b9_Sonic_Ring_Sound_Effect.mp3');

function Start(){
	Name = document.getElementsByName("name")[0].value;
	Name = Name.toUpperCase();
	document.getElementById('Title').innerHTML = '<H1 style="text-align: center;font-family: Arial;">'+Name+'</h1>';
	document.getElementById('test').innerHTML = '';
	NewBoard();
	};

	function NewBoard() {
	var Rows = Math.floor(Level)+1;  
	var Colums = Math.floor(Level)+1;
	var total = Rows * Colums;
	var count = 0;
	var Random = Math.floor((Math.random() * total)+1);;
	var Output;
	var Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	audio.play();
	Output = '<table>';
	for (x = 0; x < Rows; x++) {
	Output += '<tr>';
		for (y = 0; y < Colums; y++) {
			count += 1;
			if (count!=Random) {
				var RandomName = "";
				for (l = 0; l < Name.length;l++) {
				RandomName += Letters.charAt(Math.floor(Math.random() * Letters.length));
	};
				Output += '<td><a class="btn" id="btn'+count+'" href="#btn'+count+'">'+RandomName+'</a></td>';
			} else {
				Output += '<td><a class="btn" onclick="NewBoard()">'+Name+'</a></td>';
			};
		};
		Output += '</tr>';		
	};
	Output += '</table>';
	document.getElementById('test').innerHTML = Output;
	Level += .2;
};