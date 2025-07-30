const photos = [
  'images/IMG_20240901_163213472.jpg',
  'images/IMG-20250313-WA0049.jpg',
  'images/IMG-20250327-WA0024.jpg',
  'images/Screenshot 2024-04-21 183417.png',
  // Add more photo paths here
];

const captions = [
  'Our first photo together 💖',
  'To always being there for me❤️',
  'To always keep you smiling like this🤌🏻❤️',
  'To the day I knew only you were the reason for my happiness❤️🫶🏻',
  // Match the order and number of photos
];

let index = 0;

function nextPhoto() {
  const photoElement = document.getElementById("photo");
  const captionElement = document.getElementById("caption");
  index++;

  if (index < photos.length) {
    photoElement.src = photos[index];
    captionElement.textContent = captions[index];
  } else {
    // Show the letter at the end
    document.querySelector(".photo-frame").innerHTML = `
      <div class="letter">
       
        <p>
          Dear Chellom,<br><br>
          From all the time we have spent together and to every moment of happiness with you, I just want to say how lucky I am to have you.<br><br>
          You are the happiness in my life, You are the love of my life, You are the reason I live for.<br><br>
          Thank you for being you — perfectly beautiful, infinetly kind, and completely mine.<br><br>
          Sathyama nee ilama naa ena panuven nu therila. Unakaga I'll do anything.Always be the perfect person you are, Never change for anyone<br><br>
          Happy Girlfriend’s Day, my thango. I hope this little gesture brought a smile to your face just like you bring to mine every day.❤️🤌🏻<br><br>
          Forever yours,<br>
          ~your loosu.

        </p>
      </div>
    `;

    // Hide the caption and button
    captionElement.style.display = "none";
    document.querySelector("button").style.display = "none";
  }
}
