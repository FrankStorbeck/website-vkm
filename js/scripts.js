var currenCaptchaString;

function valForm(aLanguage)
{
	//if (! document.documentElement || navigator.appName == "Microsoft Internet Explorer")
	//	return true; // IE doesn't do this rightfully, lets handle it by the cgi script
	var errorMessage;
	var okMessage;
	switch (aLanguage) {
		case 0:
			errorMessage = "Incorrect antwoord voor het probleem, probeer nogmaals.";
			okMessage = "Bericht wordt verzonden";
			break;
		case 1:
			errorMessage = "Falsches Antwort für die Aufgabe, versuchen Sie es nochmals.";
			okMessage = "Bericht wird verschickt.";
			break;
		case 2:
		default:
			errorMessage = "Incorrect answer for the problem, try again.";
			okMessage = "Message will be sent.";
			break;
	}
	var aCaptcha = document.getElementById("Captcha").value;
	if (aCaptcha != currenCaptchaString)
	{
		GenerateCaptcha();
		window.alert(errorMessage);
		return false;
	}
    return confirm(okMessage);
}

function GenerateCaptcha()
{
	var x = document.getElementById("Captcha_label");
	var r1 = Math.floor((Math.random()*10)+1);
	var r2 = Math.floor((Math.random()*10)+1);
	currenCaptchaString = r1 + r2;
	x.innerHTML=r1 + " + " + r2 + " = ?";
}
		