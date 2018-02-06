let srcString = "";
let imgNumber = 1;

function createSnuggle() {
	imgNumber = Math.floor(Math.random() * 16) + 1;
	srcString = "images/" + String(imgNumber) + ".jpg";
	console.log(srcString);
}

$('.summon-button').click(function(){
	createSnuggle();
	$('.photo').attr('src',srcString);
	$(this).text("Summon another snuggle");
});