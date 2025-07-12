const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
});
document.querySelector('.search-icon').addEventListener('click', function() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
});

// Toggle profile menu
document.querySelector('.profile-icon').addEventListener('click', function(e) {
    e.preventDefault();
    const profileMenu = document.querySelector('.profile-menu');
    profileMenu.classList.toggle('active');
});

// Close profile menu when clicking outside
document.addEventListener('click', function(e) {
    const profileContainer = document.querySelector('.profile-container');
    if (!profileContainer.contains(e.target)) {
        document.querySelector('.profile-menu').classList.remove('active');
    }
});

//features
document.addEventListener('DOMContentLoaded', () => {
    const featureBoxes = document.querySelectorAll('#feature .fe-box');

    const checkScroll = () => {
        featureBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Add 'active' class when box is in viewport
            if (boxTop < windowHeight * 0.8) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    };

    // Run on scroll and initially
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});

//products
const observerOptions = {
    threshold: 0.2 // Adjust visibility percentage
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateOnScroll.unobserve(entry.target); // Optional: run only once
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-up, .pro').forEach(el => {
    animateOnScroll.observe(el);
});

//createmore
const boxes = document.querySelectorAll('.blog-box');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    boxes.forEach(box => {
        observer.observe(box);
    });

    //theme
    const toggleSwitch = document.getElementById('theme-toggle');
    const body = document.body;

    // Load stored theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });

    //module
      gsap.from(".module-card", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

    //for me
     const imageMap = {
    product1: {
      front: "img/products/front.webp",
      back: "img/products/back.webp",
      left: "img/products/left.jpg",
      right: "img/products/right.webp"
    },
    product2: {
      front: "img/products/front.webp",
      back: "img/products/back.webp",
      left: "img/products/left.jpg",
      right: "img/products/right.webp"
    },
    product3: {
      front: "img/products/front.webp",
      back: "img/products/back.webp",
      left: "img/products/left.jpg",
      right: "img/products/right.webp"
    },
    product4: {
      front: "img/products/front.webp",
      back: "img/products/back.webp",
      left: "img/products/left.jpg",
      right: "img/products/right.webp"
    },
    product5: {
      front: "img/products/front.webp",
      back: "img/products/back.webp",
      left: "img/products/left.jpg",
      right: "img/products/right.webp"
    }
  };

  function showDesigner() {
    const modal = document.getElementById("designerModal");
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("active");
    }, 50);
  }

  function closeDesigner(event) {
    const modal = document.getElementById("designerModal");
    modal.classList.remove("active");
    setTimeout(() => {
      modal.style.display = "none";
    }, 400);
  }

  function changeView(view) {
    Object.keys(imageMap).forEach(id => {
      document.getElementById(id).src = imageMap[id][view];
    });

    // Update active class
    document.querySelectorAll(".design-buttons button").forEach(btn => {
      btn.classList.remove("active");
    });
    document.getElementById(view + "Btn").classList.add("active");
  }

  //upload image
  document.querySelector('input[type="file"]').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file && file.size < 5 * 1024 * 1024) { // 5MB limit
    const reader = new FileReader();
    reader.onload = function(e) {
      const uploadedImage = e.target.result;
      // Set overlay image for all product cards
      for (let i = 1; i <= 5; i++) {
        document.getElementById(`overlay${i}`).src = uploadedImage;
        document.getElementById(`overlay${i}`).style.display = "block";
      }
    };
    reader.readAsDataURL(file);
  } else {
    alert("Image must be under 5MB in JPG or PNG format.");
  }
});

//mystery box
function openMysteryBox() {
    const modal = document.getElementById('mysteryAnimation');
    modal.style.display = 'flex';

    setTimeout(() => {
        modal.style.display = 'none';
        window.location.href = 'sproduct.html';
    }, 3000);
}
//marvel,dc
function openWithAnimation(type) {
    const modal = document.getElementById('animationModal');
    const gif = document.getElementById('animationGif');

    if (type === 'marvel') {
        gif.src = 'img/products/mavel.gif';
    } else if (type === 'dc') {
        gif.src = 'img/products/dc.gif';
    }

    modal.style.display = 'flex';

    setTimeout(() => {
        modal.style.display = 'none';
        window.location.href = 'sproduct.html';
    }, 3000);
}
function toggleWishlist(icon) {
    icon.classList.toggle("liked");
}

//login-register
