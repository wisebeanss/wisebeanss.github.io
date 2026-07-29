// Header (Button Logic)
const buttonGrp = document.querySelector('.buttonGroup');
const listhref = document.querySelectorAll('.sidenav ul');
var alltopics = document.querySelectorAll('.topic');
function hideall() {
	for (let onetopic of alltopics) {
		onetopic.style.display = "none";
		onetopic.classList.remove('active');
	}
}
function show(pagenum) {
	hideall();
	let onetopic = document.querySelector('#topic' + pagenum);
	onetopic.style.display = "block";
	onetopic.classList.add('active');
}

const links1 = [
	{ href: '#cognitiveskills', label: 'What are Cognitive Skills?' },
	{ href: '#types', label: 'Types of Cognitive Skills' },
	{ href: '#improve', label: 'Habits that improve cognitive skills' }
];
const links2 = [
	{ href: '#reaction', label: 'What is Reaction Speed?' },
	{ href: '#typesReaction', label: "Types of Reaction Speed" },
	{ href: '#average', label: 'Average Reaction Speed' },
	{ href: '#facts', label: 'Fun Facts' },
	{ href: '#factors', label: 'Factors' }
];

function updateSideNav(links) {
	sidenavList.innerHTML = '';
	document.querySelector('.sidenav').style.display = "block";
	for (const { href, label } of links) {
		sidenavList.appendChild(createhref(href, label));
	}
}
buttonGrp.addEventListener('click' ,function (evnt) {
	const btn = evnt.target.closest('button');
	if(!btn) return;
	switch (btn.id) {
		case 'btn1':
			show(1);
			updateSideNav(links1);
			breakk;
		case 'btn2':
			show(2);
			updateSideNav(links2);
			break;
		case 'btn3':
			show(3);
			document.querySelector('.sidenav').style.display = "none";
			break;
	}
});
show(1);

// Fullscreen Logic
const fullScreenBtn = document.querySelector('header #fullscreen');
fullScreenBtn.addEventListener('click', function () {
	if (fullScreenBtn.classList.contains("FS")) {
		fullScreenBtn.classList.remove("FS");
		exitfullScreen();
	}
	else {
		fullScreenBtn.classList.add("FS");
		fullScreen();
	}
});
function fullScreen() {
	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen();
	} else if (document.documentElement.mozRequestFullScreen) { // Firefox
		document.documentElement.mozRequestFullScreen();
	} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, and Opera
		document.documentElement.webkitRequestFullscreen();
	} else if (document.documentElement.msRequestFullscreen) { // IE/Edge
		document.documentElement.msRequestFullscreen();
	}
}

function exitfullScreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.mozCancelFullScreen) { // Firefox
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { // IE/Edge
		document.msExitFullscreen();
	}
}
//Href Logic
function createhref(link, text) {
	let list = document.createElement('li');
	let hyperlink = document.createElement('a');
	hyperlink.href = link;
	hyperlink.innerHTML = text;
	list.append(hyperlink);
	return list;
}

//Reaction Time Showcase 

const whiteDivNormal = document.querySelector("#normal .white");
const whiteDivGamer = document.querySelector('#gamer .white');
const startAnimBtn = document.querySelector('.showcase > button');

startAnimBtn.addEventListener('click', function () {
	// Remove the class from both
	whiteDivGamer.classList.remove("play");
	whiteDivNormal.classList.remove("play");

	// Force a reflow so the browser registers the removal
	void whiteDivGamer.offsetWidth;
	void whiteDivNormal.offsetWidth;

	// Re-add the class to restart the animation
	whiteDivGamer.classList.add("play");
	whiteDivNormal.classList.add("play");
});


//Quiz Game 
const startButton = document.querySelector('.quizContainer > button');
startButton.addEventListener('click', function () { generateQuiz(questions) });

const endButton = document.querySelector('#quiz > button');
endButton.addEventListener('click', function () { checkAnswers(questions, answers) });
let questions = [
	{
		question: "What is reaction speed?", answer: [
			"The time it takes for muscles to grow stronger",
			"The time it takes for a human to process and act upon new information",
			"The time it takes to memorize new information",
			"The speed at which the heart pumps blood"
		]
	},
	{
		question: "What is Simple (reflex) Reaction Time?", answer: [
			"The time taken to respond to a single stimulus with a single response",
			"The time taken to choose between multiple responses",
			"The time taken to remember a sequence of events",
			"The time taken to recover after physical exertion"
		]
	},
	{
		question: "What is Choice Reaction Time?", answer: [
			"The time taken to react to only auditory stimuli",
			"The time taken to consciously respond to one of several stimuli, each requiring a different response",
			"The time taken to react without thinking",
			"The time taken to process a single repeated stimulus"
		]
	},
	{
		question: "What is the average human reaction speed?", answer: [
			"50ms",
			"150ms",
			"250ms",
			"500ms"
		]
	},
	{
		question: "Roughly what reaction time do competitive e-sports professionals achieve?", answer: [
			"10–30ms",
			"150–170ms",
			"300–350ms",
			"500–600ms"
		]
	},
	{
		question: "Which sense processes information the fastest, according to the passage?", answer: [
			"Sight",
			"Hearing",
			"Touch",
			"Smell"
		]
	},
	{
		question: "Why do sprinters react to the bang of the starting gun rather than a visual flash?", answer: [
			"Auditory signals reach the brain faster than visual cues",
			"Visual cues are harder to detect at a distance",
			"Sound travels faster than light over short distances",
			"Sprinters are trained to ignore visual signals"
		]
	},
	{
		question: "At approximately what age does human reaction time tend to peak?", answer: [
			"18",
			"24",
			"35",
			"45"
		]
	},
	{
		question: "Which of the following is NOT listed as a factor influencing reaction time?", answer: [
			"Stimulus intensity",
			"Blood type",
			"State of attention",
			"Practice and training"
		]
	},
	{
		question: "Which environmental factors are mentioned as influencing reaction time?", answer: [
			"Lighting, noise, and distractions",
			"Altitude and humidity",
			"Time zone and season",
			"Air pressure and gravity"
		]
	}

];
let answers = [2, 1, 2, 3, 2, 3, 1, 2, 2, 1];
const form = document.querySelector('#quiz form');

function generateQuiz(questions) {
	startButton.disabled = true;
	document.querySelector('#quiz').style.display = "block";
	for (let i = 0; i < questions.length; i++) {
		let fieldset = document.createElement('fieldset');
		let Qn = questions[i].question;
		let p = document.createElement('p');
		p.innerHTML = Qn;

		//Constructing Questions
		fieldset.append(p);
		for (let j = 0; j < 4; j++) {
			let label = document.createElement('label');
			let input = document.createElement('input');
			input.name = `Q${i + 1}`;
			input.type = 'radio';
			input.value = j + 1
			label.textContent = questions[i].answer[j];
			label.insertBefore(input, label.firstChild);
			label.append(document.createElement('br'));
			fieldset.append(label);
		}
		form.append(fieldset);
	}
}
function removeQuiz() {
	form.innerHTML = " ";
	score = 0;
	document.querySelector(".quizContainer > h3").innerHTML = "Quiz";
}
function checkAnswers(questions, answers) {
	let score = 0;
	let unanswered = [];
	startButton.disabled = false;
	for (let i = 0; i < questions.length; i++) {
		const selected = form.querySelector(`input[name="Q${i + 1}"]:checked`);
		if (!selected) {
			unanswered.push(i + 1);
			continue;
		}
		if (Number(selected.value) === answers[i]) {
			score++;
		}
	}
	if (unanswered.length > 0) {
		alert("Please answer all questions before submitting");
		return;
	}
	removeQuiz();
	document.querySelector(".quizContainer > h3").innerHTML = `Score: ${score}/10`;
	return score;
}



// Header (Hamburger Menu)
const headnavhamBtn = document.querySelector('#hamIcon');
const menuItemsList = document.querySelector(".topnav ul");
headnavhamBtn.addEventListener("click", toggleMenus);
function toggleMenus() {
	if (menuItemsList.classList.contains("menuShow")) {
		menuItemsList.classList.remove("menuShow");
	}
	else {
		menuItemsList.classList.add("menuShow");
	}
}
const sidenavhamBtn = document.querySelector('#sidenavHamIcon');
const sidenavList = document.querySelector('.sidenav ul');
sidenavhamBtn.addEventListener("click", toggleSideNavMenus);
function toggleSideNavMenus() {
	if (sidenavList.classList.contains("menuShow")) {
		sidenavList.classList.remove("menuShow");
	}
	else {
		sidenavList.classList.add("menuShow");
	}
}
// QR Code Btn 
const qrCodeBtn = document.querySelector("button.qrToggleBtn");
const qrDiv = document.querySelector('div.qrPopUp');
qrCodeBtn.addEventListener('click', function () {
	qrDiv.classList.toggle("showQr");
})

// Header brain hover

// Memory Game
let randomNumber = [];
let level = 1;
let index = 0;
let lives = 3;
let hardmode = false;

const StartGameBtn = document.querySelector('#gameContainer button#start');
StartGameBtn.addEventListener("click", function () {
	level = 1;
	lives = 3;
	reset();
	game();
});
const SubmitAnswer = document.querySelector('#game input');
const SubmitAnswerBtn = document.querySelector('#game button');
const hardModeBtn = document.querySelector('#gameContainer button#hard');
hardModeBtn.addEventListener('click',
	function () {
		if (!hardmode) {
			hardmode = true;
			console.log("hard mode on!");
		}
		else {
			hardmode = false;
			console.log("hard mode off!");
		}
	}
);
let ball = document.getElementById("ball");
let ballX = 0;
let ballY = 0;
let velX = 20;
let velY = 20;
const mamboAudio = new Audio('Audio/mambo.mp3');
let ballInterval = null;
SubmitAnswerBtn.addEventListener('click', checkAnswer);
const header1 = document.querySelector('#game h1');
const header2 = document.querySelector('#game h2');
const para = document.querySelector('#game p');

function game() {
	if(hardmode) {
		clearInterval(ballInterval);
		ballInterval = setInterval(ballAnim, 16.6);
	}
	else {
		clearInterval(ballInterval);
		ball.style.display = "none";
	}
	StartGameBtn.disabled = true;
	randomNumber = [];
	index = 0;
	para.style.display = "none";
	for (let i = 0; i < level; i++) {
		randomNumber[i] = Math.floor(10 * Math.random()) + 1;
		console.log(randomNumber[i]);
	}
	header1.innerHTML = randomNumber[index];
	index++;
	SubmitAnswer.readOnly = true;
	gameInterval = setInterval(function () {
		if (index < randomNumber.length) {
			header1.innerHTML = randomNumber[index];
			index++
		}
		else {
			clearInterval(gameInterval);
			header1.innerHTML = "";
			SubmitAnswer.readOnly = false;
			SubmitAnswerBtn.disabled = false;
		}
	}, 1000);
}


function checkAnswer() {
	if (SubmitAnswerBtn.disabled) return;
	let PlayerAnswers = SubmitAnswer.value.split(',');
	let isCorrect = true;
	if (PlayerAnswers.length !== randomNumber.length) {
		isCorrect = false;

	}
	else {
		for (let i = 0; i < PlayerAnswers.length; i++) {
			console.log(PlayerAnswers[i]);
			if (Number(PlayerAnswers[i]) !== randomNumber[i]) {
				isCorrect = false;
				break;
			}
		}
	}
	if (!isCorrect) {
		changeHeart(lives);
		lives -= 1;
	}
	else {
		level++;
	}
	header1.innerHTML = isCorrect ? "You win" : "You Lose";
	SubmitAnswer.value = "";
	if (lives > 0) {
		setTimeout(function () {
			game();
		}, 1000);
	}
	else {
		header1.innerHTML = "Game Over";
		SubmitAnswer.readOnly = true;
		StartGameBtn.disabled = false;
	}
}

function reset() {
	const heart = document.querySelectorAll('.heart');
	for (let i = 0; i < 3; i++) {
		heart[i].style.backgroundPosition = "-67px 0px";
	}
}
function changeHeart() {
	const heart = document.getElementById('heart' + lives);
	heart.style.backgroundPosition = "0px 0px";
}


function ballAnim() {
	if (hardmode) {
		ball.style.display = "block";
		const gameDiv = document.querySelector('#game');
		const width = gameDiv.offsetWidth;
		const height = gameDiv.offsetHeight;
		const ballSize = ball.offsetWidth;

		ballX += velX;
		ballY += velY;

		if (ballX > width - ballSize) {
			velX = -velX;
			ballX = width - ballSize;
			mamboAudio.play();
		}
		if (ballY > height - ballSize) {
			velY = -velY;
			ballY = height - ballSize;
			mamboAudio.play();
		}
		if (ballX < 0) {
			velX = -velX;
			ballX = 0;
			mamboAudio.play();
		}
		if (ballY < 0) {
			velY = -velY;
			ballY = 0;
			mamboAudio.play();
		}

		ball.style.left = ballX + "px";
		ball.style.top = ballY + "px";
	}
	else {
		velX = 0;
		velY = 0;
		ballX = 1;
		ballX = 1;
		ball.style.display = "none";
	}
}
