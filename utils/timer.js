export default function myTimer() {
  const date = new Date();
  document.getElementById('time').innerHTML = date.toLocaleTimeString();
}
