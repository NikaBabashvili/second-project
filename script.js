const valid = document.getElementById('result');
const submit = document.getElementById('subscribe');
const maincontent = document.getElementById('maincontent');
const sent = document.getElementById('sent');
const success = document.getElementById('success');



success.style.visibility = 'hidden'
sent.style.visibility = 'hidden';
valid.style.visibility = 'hidden';
maincontent.style.visibility = 'visible'
maincontent.style.display = 'block'


const inputfield = document.getElementById("inputfield");

submit.addEventListener('click', function () {
  const input = inputfield.value.trim(); 
  
  if (input.length === 0) {
    valid.textContent = 'The field is empty';
    valid.style.color = 'red';
  } else if (!input.includes('@') || !input.includes('.com')) {
    valid.textContent = 'Valid email required';
    valid.style.color = 'red';
    } else {
    valid.textContent = ''; 
    maincontent.style.visibility = 'hidden'
    maincontent.style.display = 'none'
    sent.style.visibility = 'visible'
    sent.innerHTML = "A confirmation email sent to   " + input + "." + "  Please open it and click the button inside to confirm your subscription."
    success.style.visibility = 'visible'

}
  valid.style.visibility = 'visible';
 
});

