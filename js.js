
$('#start_button').on('click', function (e) {

     Start();

})





var Name = "Zoey";
var Level = 1;
//var audio = new Audio('http://soundfxcenter.com/video-games/sonic-the-hedgehog/26f8b9_Sonic_Ring_Sound_Effect.mp3');

function Start(){
	//Name = document.getElementsByName("name")[0].value;
	Name = Name.toUpperCase();
	document.getElementById('Title').innerHTML = '<H1 style="text-align: center;font-family: Arial;">'+Name+'</h1>';
	document.getElementById('Body').innerHTML = '';
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
//	audio.play();
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
				Output += '<td><button class="btn btn-lg bt-primary" id="btn'+count+'" href="#btn'+count+'">'+RandomName+'</button></td>';
			} else {
				Output += '<td><button class="btn btn-lg bt-primary" onclick="NewBoard()">'+Name+'</button></td>';
			};
		};
		Output += '</tr>';		
	};
	Output += '</table>';
	$("#Body").html(Output);
	//document.getElementById('Body').innerHTML = Output;
	Level += .2;
};