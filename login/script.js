function check() {
  let dict = {
    'admin':'admin',
    'admininstrator':'Admin',
    'user':'password',
    'user1':'12345678',
    'user2':'PassWRD'
  }
  let user = document.getElementById('usr').value.toLowerCase();
  let passwd = document.getElementById('pswd').value;
  let btn = document.getElementById('chkr');
  let msg = document.getElementById('msg');

  if (passwd === dict[user]) {
    btn.style.backgroundColor = 'green';
    msg.textContent = 'Login successful!';
  } else {
    btn.style.backgroundColor = 'red';
    msg.textContent = 'Login failed!';
  }
}