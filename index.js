const today = new Date();

    const formattedDate = today.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });


 function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;

    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').innerHTML = `${formattedDate} - ${hours}:${minutes}:${seconds} ${ampm}`;
  }
  updateClock();

  setInterval(updateClock, 1000);












const postbutton = document.getElementById("postbutton");
const posts = document.getElementById("posts");
const textarea = document.getElementById("textarea");

const STORAGE_KEY = "glaze";

document.addEventListener("DOMContentLoaded", () => {
  posts.textContent = localStorage.getItem(STORAGE_KEY) || "";
});

const formatDate = () =>
  new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

postbutton.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (!text) return;

  const post = `${text} - (${formatDate()})`;

  posts.textContent += (posts.textContent ? "\n\n" : "") + post;
  localStorage.setItem(STORAGE_KEY, posts.textContent);

  textarea.value = "";
});


const clear = document.getElementById('clear')
  clear.addEventListener("click", () => {
localStorage.removeItem(STORAGE_KEY);
posts.postContent = "";
});


