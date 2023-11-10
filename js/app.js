document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-box-1');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-box-2');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-box-3');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-box-4');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-box-5');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-1');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-2');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-3');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-4');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var blinkingBox = document.querySelector('.blinking-5');
    blinkingBox.addEventListener('animationiteration', function() {
      blinkingBox.style.display = 'none';
    });
  });

  const hamburger = document.querySelector("#hamburger");
  const hamburger1 = document.querySelector("#hamburger1");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", () => {
  hamburger1.classList.toggle("hidden"),
  menu.classList.toggle("hidden")
});

hamburger1.addEventListener("click", () => {
  hamburger1.classList.toggle("hidden"),
  menu.classList.toggle("hidden")
});


var divButtons = document.querySelectorAll('#ButtonChar');
var elements = document.querySelectorAll('.hidden');
var textId = document.querySelectorAll('#theText')

// Sembunyikan semua elemen, kecuali elemen pertama
elements.forEach(function(element, index) {
  if (index !== 0) {
    element.classList.add('hidden');
  }
});


// Tambahkan event listener pada setiap elemen 'toggle-div'
divButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var targetId = button.getAttribute('data-target');
    var targetElement = document.getElementById(targetId);

    // Tampilkan elemen target
    
    targetElement.classList.remove('hidden');

    // Sembunyikan elemen lain
    elements.forEach(function(element) {
      if (element !== targetElement) {
        element.classList.add('hidden');
      }
    });
  });
});


