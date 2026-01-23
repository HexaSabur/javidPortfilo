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

    about_title: "Bit About Me",
    about_desc: "I’m Jawid, a UI/UX and brand designer specializing in designing websites and mobile applications alongside clear and consistent brand identities. I focus on creating simple, user-friendly digital experiences that balance aesthetics, usability, and functionality. I work fluently in Arabic, Turkish, English, and German.",
    about_btn: "Download CV",

    service_title: "My Best Services",
    serv_1_title: "Website Design",
    serv_1_desc: "We craft user-friendly interfaces that engage visitors and help you achieve your online goals with minimum effort.",
    serv_2_title: "Logo Design & Brand Marks",
    serv_2_desc: "Designing distinctive and timeless logos that reflect brand values.",
    serv_3_title: "Mobile Development",
    serv_3_desc: "From iOS to Android, we create apps that deliver seamless performance and keep users coming back for more.",
    serv_4_title: "Social Media & Digital Visuals",
    serv_4_desc: "Creating blog posts, videos, and social media content that drives traffic and engagement.",
    serv_5_title: "Brand Identity & Visual Systems",
    serv_5_desc: "Building cohesive brand identities, including color systems, typography, and visual guidelines.",
    serv_6_title: "Digital Marketing",
    serv_6_desc: "From pay-per-click (PPC) to social media marketing, we ensure your brand stands out.",

    portfolio_title: "My Portfolio",
    portfolio_desc: "Explore a showcase of my diverse projects, demonstrating my skills in web development and design.",

    contact_title: "Let's Talk With Me!",
    contact_desc: "An open invitation to connect, and exploring collaborative opportunities on my personal portfolio website.",
    footer_text: "jawid © 2026. All rights reserved."
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

    about_title: "Hakkımda",
    about_desc: "Ben Jawid, web siteleri ve mobil uygulamaların yanı sıra net ve tutarlı marka kimlikleri tasarlama konusunda uzmanlaşmış bir UI/UX ve marka tasarımcısıyım. Estetik, kullanılabilirlik ve işlevselliği dengeleyen basit, kullanıcı dostu dijital deneyimler yaratmaya odaklanıyorum. Arapça, Türkçe, İngilizce ve Almanca dillerinde akıcı bir şekilde çalışabiliyorum.",
    about_btn: "CV İndir",

    service_title: "Hizmetlerim",
    serv_1_title: "Web Tasarımı",
    serv_1_desc: "Ziyaretçilerin ilgisini çeken ve çevrimiçi hedeflerinize minimum çabayla ulaşmanızı sağlayan kullanıcı dostu arayüzler oluşturuyoruz.",
    serv_2_title: "Logo Tasarımı",
    serv_2_desc: "Marka değerlerini yansıtan, ayırt edici ve zamansız logolar tasarlıyoruz.",
    serv_3_title: "Mobil Geliştirme",
    serv_3_desc: "iOS'tan Android'e, sorunsuz performans sunan ve kullanıcıların tekrar gelmesini sağlayan uygulamalar yapıyoruz.",
    serv_4_title: "Sosyal Medya Görselleri",
    serv_4_desc: "Trafik ve etkileşim sağlayan blog gönderileri, videolar ve sosyal medya içerikleri oluşturuyoruz.",
    serv_5_title: "Marka Kimliği",
    serv_5_desc: "Renk sistemleri, tipografi ve görsel kılavuzlar dahil olmak üzere uyumlu marka kimlikleri oluşturuyoruz.",
    serv_6_title: "Dijital Pazarlama",
    serv_6_desc: "PPC reklamlarından sosyal medya pazarlamasına kadar markanızın öne çıkmasını sağlıyoruz.",

    portfolio_title: "Portfolyom",
    portfolio_desc: "Web geliştirme ve tasarım becerilerimi sergileyen çeşitli projelerime göz atın.",

    contact_title: "Benimle iletişime geç!",
    contact_desc: "Kişisel portfolyo sitemde işbirliği fırsatlarını keşfetmek ve bağlantı kurmak için açık bir davet.",
    footer_text: "jawid © 2026. Tüm hakları saklıdır."
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

    about_title: "Über Mich",
    about_desc: "Ich bin Jawid, ein UI/UX- und Markendesigner, der sich auf die Gestaltung von Websites, mobilen Apps und Markenidentitäten spezialisiert hat. Ich konzentriere mich auf benutzerfreundliche digitale Erlebnisse, die Ästhetik und Funktionalität vereinen. Ich arbeite fließend in Arabisch, Türkisch, Englisch und Deutsch.",
    about_btn: "Lebenslauf laden",

    service_title: "Meine Dienstleistungen",
    serv_1_title: "Webdesign",
    serv_1_desc: "Wir erstellen benutzerfreundliche Schnittstellen, die Besucher ansprechen und Ihnen helfen, Ihre Ziele zu erreichen.",
    serv_2_title: "Logo-Design",
    serv_2_desc: "Gestaltung unverwechselbarer und zeitloser Logos, die Ihre Markenwerte widerspiegeln.",
    serv_3_title: "Mobile Entwicklung",
    serv_3_desc: "Von iOS bis Android erstellen wir Apps, die nahtlose Leistung bieten.",
    serv_4_title: "Social Media & Visuals",
    serv_4_desc: "Erstellung von Blogposts, Videos und Social-Media-Inhalten, die Traffic und Engagement fördern.",
    serv_5_title: "Markenidentität",
    serv_5_desc: "Aufbau kohärenter Markenidentitäten, einschließlich Farbsystemen und Typografie.",
    serv_6_title: "Digitales Marketing",
    serv_6_desc: "Von PPC-Werbung bis Social Media Marketing sorgen wir dafür, dass Ihre Marke auffällt.",

    portfolio_title: "Mein Portfolio",
    portfolio_desc: "Entdecken Sie eine Auswahl meiner Projekte, die meine Fähigkeiten in Webentwicklung und Design zeigen.",

    contact_title: "Kontaktieren Sie mich!",
    contact_desc: "Eine offene Einladung, um Verbindung aufzunehmen und Möglichkeiten der Zusammenarbeit zu erkunden.",
    footer_text: "jawid © 2026. Alle Rechte vorbehalten."
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

    about_title: "نبذة عني",
    about_desc: "أنا جاويد، مصمم واجهة وتجربة مستخدم (UI/UX) ومصمم علامات تجارية. أتخصص في تصميم المواقع والتطبيقات إلى جانب هويات بصرية متسقة. أركز على خلق تجارب رقمية تجمع بين الجمالية والوظيفية. أعمل بطلاقة باللغات العربية والتركية والإنجليزية والألمانية.",
    about_btn: "تحميل السيرة الذاتية",

    service_title: "أفضل خدماتي",
    serv_1_title: "تصميم المواقع",
    serv_1_desc: "نصمم واجهات سهلة الاستخدام تجذب الزوار وتساعدك على تحقيق أهدافك عبر الإنترنت بأقل جهد.",
    serv_2_title: "تصميم الشعارات",
    serv_2_desc: "تصميم شعارات مميزة وخالدة تعكس قيم علامتك التجارية بوضوح.",
    serv_3_title: "تطوير التطبيقات",
    serv_3_desc: "من iOS إلى Android، ننشئ تطبيقات تقدم أداءً سلسًا وتجعل المستخدمين يعودون للمزيد.",
    serv_4_title: "الوسائط الاجتماعية والمرئيات",
    serv_4_desc: "تشمل خدماتنا إنشاء محتوى وسائل التواصل الاجتماعي الذي يزيد من حركة المرور والتفاعل.",
    serv_5_title: "الهوية البصرية",
    serv_5_desc: "بناء هويات تجارية متماسكة، بما في ذلك أنظمة الألوان والخطوط والإرشادات البصرية.",
    serv_6_title: "التسويق الرقمي",
    serv_6_desc: "من الإعلانات المدفوعة إلى تسويق وسائل التواصل الاجتماعي، نضمن تميز علامتك التجارية.",

    portfolio_title: "معرض أعمالي",
    portfolio_desc: "استكشف مجموعة من مشاريعي المتنوعة التي تظهر مهاراتي في تطوير الويب والتصميم.",

    contact_title: "تواصل معي!",
    contact_desc: "دعوة مفتوحة للتواصل واستكشاف فرص التعاون عبر موقعي الشخصي.",
    footer_text: "jawid © 2026. جميع الحقوق محفوظة."
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