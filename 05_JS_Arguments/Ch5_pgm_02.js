var msg;
var msg2;
var msg3;
var showMessage;

msg = "It's full of stars!";
msg2 = "And there is a beautiful moon"
msg3 = msg.concat(msg2);

showMessage = function () {
	// console.log(message);
    console.log(msg); //updated  to as it works
    console.log(msg2);
    console.log(msg3);
};

showMessage();