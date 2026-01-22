const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
// ...yukarıda senin eski kodların var...

// --- BURADAN SONRASINI EN ALTTA OLACAK ŞEKİLDE EKLE ---

window.toggleLangMenu = function() {
  document.getElementById("lang-menu").classList.toggle("show");
  console.log("Menü tetiklendi!"); // Konsola mesaj yazar, çalıştığını anlarız.
}

window.onclick = function(event) {
  if (!event.target.matches('.lang-btn') && !event.target.matches('.ri-global-line')) {
    var dropdowns = document.getElementsByClassName("lang-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* --- DİL ÇEVİRİ SİSTEMİ --- */

const translations = {
  // İNGİLİZCE (Varsayılan)
  en: {
    menu_home: "Home",
    menu_about: "About",
    menu_service: "Services",
    menu_portfolio: "Portfolio",
    menu_contact: "Ask for price",
    
    header_title: "UI/UX<br />& Brand Identity<br />Designer",
    header_desc: "I design user-friendly websites and mobile applications, along with clear and consistent brand identities. My focus is on creating simple, intuitive digital experiences that look good, work smoothly, and help brands communicate effectively with their users.",
    header_btn: "Hire Me Now",
  },

  // TÜRKÇE
  tr: {
    menu_home: "Anasayfa",
    menu_about: "Hakkımda",
    menu_service: "Hizmetler",
    menu_portfolio: "Portfolyo",
    menu_contact: "Fiyat Al",
    
    header_title: "Arayüzü & <br />Marka Kimliği<br />Tasarımcısı",
    header_desc: "Kullanıcı dostu web siteleri ve mobil uygulamalar ile birlikte net ve tutarlı marka kimlikleri tasarlıyorum. Odak noktam; iyi görünen, sorunsuz çalışan ve markaların kullanıcılarıyla etkili iletişim kurmasına yardımcı olan basit, sezgisel dijital deneyimler yaratmaktır.",
    header_btn: "Beni İşe Al",
  },
  // --- BURAYI EKLE (ALMANCA) ---
  de: {
    menu_home: "Startseite",
    menu_about: "Über mich",
    menu_service: "Dienstleistungen",
    menu_portfolio: "Portfolio",
    menu_contact: "Preis anfragen",
    
    header_title: "UI/UX &<br />Markenidentitäts<br />Designer",
    header_desc: "Ich entwerfe benutzerfreundliche Websites und mobile Apps sowie klare und konsistente Markenidentitäten. Mein Fokus liegt auf der Schaffung einfacher, intuitiver digitaler Erlebnisse, die gut aussehen, reibungslos funktionieren und Marken helfen, effektiv zu kommunizieren.",
    header_btn: "Jetzt beauftragen",
  },
  ar: {
    menu_home: "الرئيسية",
    menu_about: "من أنا",
    menu_service: "خدماتي",
    menu_portfolio: "أعمالي",
    menu_contact: "اطلب عرض سعر",
    
    header_title: "مصمم  <br />واجهةالمستخدم <br />و الهوية البصرية",
    header_desc: "أقوم بتصميم مواقع ويب وتطبيقات جوال سهلة الاستخدام، إلى جانب هويات تجارية واضحة ومتسقة. تركيزي ينصب على خلق تجارب رقمية بسيطة وبديهية تبدو جيدة وتعمل بسلاسة.",
    header_btn: "وظفني الآن",
  }
};
// --- GÜNCELLENMİŞ FONKSİYON (RTL DESTEKLİ) ---
function changeLanguage(lang) {
  const selectedLang = translations[lang];
  const elements = document.querySelectorAll('[data-lang]');

  // 1. Yazıları Değiştir
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (selectedLang[key]) {
      element.innerHTML = selectedLang[key];
    }
  });

  // 2. Arapça ise Sayfayı TERS ÇEVİR (RTL)
  if (lang === 'ar') {
    document.body.setAttribute('dir', 'rtl'); // Sayfayı sağdan sola yapar
    document.body.style.fontFamily = "'Cairo', sans-serif"; // Arapça fontunu uygula
  } else {
    document.body.setAttribute('dir', 'ltr'); // Diğer dillerde normale dön
    document.body.style.fontFamily = "'Montserrat', sans-serif"; // Orijinal fonta dön
  }

  // 3. Menüyü kapat
  const langMenu = document.getElementById("lang-menu");
  if (langMenu.classList.contains('show')) {
    langMenu.classList.remove('show');
  }
}