// Reference messages collection
  var messagesRef = firebase.database().ref('messages');

// Listen for form submit
  document.getElementById(`contact-form`).addEventListener('submit', submitForm);

// Submit form
  function submitForm(e) {
  e.preventDefault();

// Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

// Save message
  saveMessage(name, email, phone, message);
}

//clear form
function reiniciar(){
document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}