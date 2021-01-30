var visitor_count = 200;
var visitor_milestone = 500;

var visitors_until_milestone = visitor_milestone - visitor_count;

console. log(visitor_count);

if ( visitor_count < 500) {
    var alert_message = "Welcome, you are the " + visitor_count + "th visitor, there are " + visitors_until_milestone + " more site visits until we hit our milestone of " + visitor_milestone + "!";
    alert(alert_message);
}

document.write("<h2>Welcome to my site!</h2> <p>Click the button below to tell me about yourself!</p>")

function myFunction() {
    var text;
    var name = prompt("Please enter your name:", "First Name");
    if (name == null || name == "") {
      text = "Hello, how are you today?";
    } else {
      text = "Hello " + name + "! How are you today?";
    }
    document.getElementById("response").innerHTML = text;
  }

  console. log(text);