// DİL VERİLERİ (SÖZLÜK)
const languageContent = {
    tr: {
        pageTitle: "Barış Özben - Geliştirici Portfolyosu",
        navProjects: "Projeler",
        navContact: "İletişim",
        heroName: "Barış Özben",
        heroSubtitle: "Merhaba ben Barış. Web siteleri ve küçük ölçekli oyun projeleri geliştiriyorum. Çalışmalarımı bu portfolyoda bulabilirsiniz",
        heroButton: "CV'mi İncele",
        webTitle: "WEB",
        gameTitle: "OYUN",
        socialTitle: "Bana Ulaşın",
        modalProjectButton: "Projeyi Gör",
        cvPath: "Media/Barış-Özben-FlowCV-Tr.pdf"
    },
    en: {
        pageTitle: "Barış Özben - Developer Portfolio",
        navProjects: "Projects",
        navContact: "Contact",
        heroName: "Barış Özben",
        heroSubtitle: "Hello, I'm Barış. I develop websites and small-scale game projects. You can find my work in this portfolio.",
        heroButton: "View My CV",
        webTitle: "WEB",
        gameTitle: "GAME",
        socialTitle: "Contact Me",
        modalProjectButton: "View Project",
        cvPath: "Media/Barış-Özben-FlowCV-En.pdf",
    }
};

// ÇOK DİLLİ PROJE VERİLERİ
const webProjects = [
    {
        id: 'cinechroma',
        name_tr: 'CineChroma',
        name_en: 'CineChroma',
        description_tr: '<a href="https://bozben.github.io/CineChroma-Project/" target="_blank">CineChroma</a> , yüklenen herhangi bir görselin renk paletini analiz eden ve bu palete estetik olarak en uygun filmleri, projeye gömülü bir veritabanından öneren yenilikçi bir web uygulamasıdır. Bu proje, client-side (tarayıcı tabanlı) JavaScript\'in gücünü ve **ColorThief.js** kütüphanesini kullanarak anlık görüntü analizi yapmaktadır. Renkler arası mesafeyi hesaplayan bir algoritma ile en yakın eşleşmeleri bularak, kullanıcıya görsel bir keşif deneyimi sunar.',
        description_en: '<a href="https://bozben.github.io/CineChroma-Project/" target="_blank">CineChroma</a> is an innovative web application that analyzes the color palette of any uploaded image and suggests aesthetically matching movies from its embedded database. This project utilizes the power of client-side JavaScript and the **ColorThief.js** library to perform real-time image analysis. By finding the closest matches with an algorithm that calculates the distance between colors, it offers users a unique visual discovery experience.',
        media: ['https://i.postimg.cc/Twg3vvMH/cinechroma-1.png', 'https://i.postimg.cc/fRPz3RMr/cinechroma-2.png','https://i.postimg.cc/brPNzVqY/cinechroma-3.png'],
        video: 'https://www.youtube.com/embed/NnGIDyISvKo?si=bFNwjkXUurKlMtuN',
        link: 'https://github.com/bozben/CineChroma-Project'
    },
    {
        id: 'zamantakip',
        name_tr: 'Zaman Takip Uygulaması',
        name_en: 'Time Tracking App',
        description_tr: '<a href="https://bozben.github.io/TimeTrackingDemoApp/" target="_blank">Zaman Takip Uygulaması</a>, kullanıcıların görevlerini kategorilere ayırarak harcadıkları zamanı takip etmelerini sağlayan pratik bir araçtır. Günlük ve haftalık bazda toplam çalışma sürelerini göstererek verimlilik takibini kolaylaştırır. Tüm veriler, tarayıcının yerel depolama alanında (localStorage) saklandığı için sayfa kapatılsa dahi kaybolmaz. Bu basit ve kullanışlı proje, modern bir frontend uygulamasının temel veri saklama ve işleme yeteneklerini sergilemektedir.',
        description_en: '<a href="https://bozben.github.io/TimeTrackingDemoApp/" target="_blank">Time Tracking App</a> is a practical tool that allows users to track time spent on tasks, organized by category. By displaying total work durations on a daily and weekly basis, it makes productivity tracking simple and intuitive. All data is securely stored in the browser\'s localStorage, ensuring that no information is lost even when the page is closed. This simple and practical project showcases fundamental front-end skills in data persistence and manipulation.',
        media: ['https://i.postimg.cc/d39QDR02/ztu1.png','https://i.postimg.cc/44vx8G1Y/ztu2.png','https://i.postimg.cc/vZT8HVwn/ztu3.png','https://i.postimg.cc/FsDs4x8m/ztu4.png'],
        video: 'https://www.youtube.com/embed/qVVbhyRRSRY?si=CMKUxBQ004Xa-lfx',
        link: 'https://github.com/bozben/TimeTrackingApp'
    },
    {
        id: 'ludrary',
        name_tr: 'Ludrary Oyun Kütüphanesi',
        name_en: 'Ludrary Game Library',
        description_tr: '<a href="https://ludrary-games.onrender.com/" target="_blank">Ludrary Oyun Kütüphanesi</a>, detaylı filtreleme özellikleriyle istediğiniz oyunu rahatça bulabileceğiniz, modern bir web uygulamasıdır. RAWG API\'ın veritabanını kullanarak 500.000\'den fazla oyunu tarayan bu platform, sadece oyun bulmakla kalmaz; aynı zamanda her oyun için detaylı bilgiler, Metacritic ortalamaları ve aynı serideki diğer oyunları da listeler.',
        description_en: '<a href="https://ludrary-games.onrender.com/" target="_blank">Ludrary Game Library</a> Ludrary is a modern web application with detailed filtering features, allowing you to easily find the game you\'re looking for. Using the RAWG API database, this platform searches over 500,000 games and not only helps you find games but also provides detailed information for each one, including Metacritic scores and other games in the same series',
        media: [''],
        video: 'https://www.youtube.com/embed/D0ne3tAaegE?si=xuM6XneXSABVPEuh',
        link: 'https://github.com/bozben/LudraryApp'
    }
];

const gameProjects = [
    {
        id: 'hikikomori',
        name_tr: 'Hikikomori',
        name_en: 'Hikikomori',
        description_tr: 'Hikikomori projesinde, ileri derecede sosyal anksiyete yaşayan ve toplumdan izole olan kişileri anlatan bir oyun geliştirdik. Bu üç kişilik ekipte ben, oyunun voxel grafiklerinin tasarımını ve yapımını üstlendim. Bu süreçte oyunun sanatsal yönünü oluşturan karakter modellemelerini, çevre tasarımlarını ve nesne modellemelerini oluşturdum. Kullandığım voxel stili, projenin temasına uygun olarak minimalist ve sembolik bir estetik sağladı. Bu projenin hikaye ve kodlama kısmını üstlenen arkadaşlarımın özverili çalışmalarıyla birlikte, projeyi başarıyla tamamladık.',
        description_en: 'I was part of a three-person team that developed the Hikikomori project, a game about individuals who experience severe social anxiety and isolate themselves from society. In this project, I was responsible for designing and creating the game\'s voxel graphics. I handled the entire artistic direction of the game, including character modeling, environment design, and asset creation. The voxel art style I used provided a minimalist and symbolic aesthetic that perfectly complemented the game\'s theme. I successfully completed this project alongside my two teammates who handled the story and coding.',
        media: ['https://i.postimg.cc/RCJrfM9w/hiki1.png',
                'https://i.postimg.cc/dQbbjztp/hiki2.png',
                'https://i.postimg.cc/y8P2BxXC/hiki3.png',
                'https://i.postimg.cc/MpxghVBY/hiki4.png',
                'https://i.postimg.cc/JnyFbqwR/hiki5.png',
                'https://i.postimg.cc/zDgMv0Sj/hiki6.png',
                'https://i.postimg.cc/tgvfZcMr/hiki7.png',
                'https://i.postimg.cc/Fz3n6Hsq/hiki8.png',
                'https://i.postimg.cc/m235Nkn1/hiki9.png'],
        video: 'https://www.youtube.com/embed/AJFtSVutpZU?si=V4KZjZwlA8Mb2e6b',
        link: 'https://bozben94.itch.io/hikikomori'
    },
    {
        id: 'cylindershooter',
        name_tr: 'Cylinder Shooter',
        name_en: 'Cylinder Shooter',
        description_tr: 'Cylinder Shooter, toplamda 5 seviyeden oluşan bir top-down shooter oyunudur. Bu oyunda oyuncular, dalgalar halinde üzerlerine gelen düşmanları alt etmeye çalışır. Her seviye, farklı bir silahla oyuna tazelik katarak stratejik bir derinlik sunar. Son seviye tamamlandığında ise oyun, oyunculara yüksek skorlar yapma imkanı tanıyan sonsuz moda geçer.',
        description_en: 'Cylinder Shooter is a top-down shooter game with 5 unique levels. Players face off against waves of enemies, with each level introducing a new weapon to keep the gameplay fresh and strategic. After completing the final level, the game transitions into an endless mode, offering players a chance to achieve higher scores and continue the action.',
        media: ['https://i.postimg.cc/438CvymQ/cylindershooter2.png',
            'https://i.postimg.cc/k4D0TCS3/cylindershooter3.png',
            'https://i.postimg.cc/tTfLfcd1/cylindershooter4.png'],
        video: 'https://www.youtube.com/embed/mQNMTVIfkTk?si=nr3eCqsQq1FI5itk',
        link: 'https://bozben94.itch.io/cylindershooter'
    },
    {
        id: 'hillball',
        name_tr: 'Hill Ball',
        name_en: 'Hill Ball',
        description_tr: 'Hillball, düz bir arena üzerinde üzerinize gelen topları platformdan aşağı itmeye çalıştığınız basit ve yenilikçi bir oyundur. Oyundaki en belirgin özellik, topun sadece ileri-geri hareket edebilmesi, ancak kamerayı çevirerek bu yönü değiştirebilmenizdir. Bu benzersiz kontrol sistemi, oyuna sıradanlıktan uzak, stratejik bir derinlik katmaktadır.',
        description_en: 'Hillball is a simple and innovative game where you push incoming balls off a flat arena. The game\'s unique control system is its most notable feature: you can only move the ball forward and backward, but you can change its direction by rotating the camera. This unconventional mechanic adds a strategic layer, making the gameplay unique and engaging.',
        media: ['https://i.postimg.cc/9QhjCs6Z/hillball1.png',
                'https://i.postimg.cc/13r1tJST/hillball2.png',
                'https://i.postimg.cc/bvYc2kNv/hillball3.png'],
        video: 'https://www.youtube.com/embed/wEEokhPVMjU?si=XCQZqWK-fXqa89qM',
        link: 'https://bozben94.itch.io/hill-ball'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('projeler');
    const leftSection = document.querySelector('.split-section.left');
    const rightSection = document.querySelector('.split-section.right');
    const webProjectsList = document.getElementById('web-projects-list');
    const gameProjectsList = document.getElementById('game-projects-list');
    const modal = document.getElementById('modal-container'); // DÜZELTME: project-modal -> modal-container
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.querySelector('.modal-close-btn');
    const langButtons = document.querySelectorAll('.lang-btn');

    let currentLanguage = 'tr';

    const changeLanguage = (lang) => {
        currentLanguage = lang;

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (languageContent[currentLanguage][key]) {
                element.textContent = languageContent[currentLanguage][key];
            }
        });
        const cvButton = document.querySelector('[data-lang-key="heroButton"]');
        if (cvButton) {
            cvButton.href = languageContent[currentLanguage].cvPath;
        }
        populateList(webProjects, webProjectsList);
        populateList(gameProjects, gameProjectsList);

        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLanguage);
        });

        document.documentElement.lang = currentLanguage;
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = button.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });

    leftSection.addEventListener('mouseenter', () => {
        container.classList.add('hover-left');
        container.classList.remove('hover-right');
    });

    rightSection.addEventListener('mouseenter', () => {
        container.classList.add('hover-right');
        container.classList.remove('hover-left');
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('hover-left', 'hover-right');
    });

    function populateList(projects, listElement) {
        listElement.innerHTML = '';
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'project-item';
            item.textContent = project[`name_${currentLanguage}`];
            item.addEventListener('click', () => showProjectDetails(project));
            listElement.appendChild(item);
        });
    }

    function showProjectDetails(project) {
        let currentImageIndex = 0;
        const imageCount = project.media.length;
        const hasVideo = project.video ? true : false;
        const hasSlider = imageCount > 0;

        const buttonText = languageContent[currentLanguage].modalProjectButton;

        const imagesHTML = project.media.map(url => `
            <img src="${url}" class="slider-image" alt="${project[`name_${currentLanguage}`]} görseli">
        `).join('');

        const sliderHTML = `
            <div class="slider-container">
                <div class="slider-wrapper">
                    ${imagesHTML}
                </div>
                ${imageCount > 1 ? `
                    <button class="slider-arrow" id="prev-btn">&lt;</button>
                    <button class="slider-arrow" id="next-btn">&gt;</button>
                ` : ''}
            </div>
        `;

        const videoPlayerHTML = project.video ? `
            <div class="modal-video-wrapper">
                <iframe src="${project.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        ` : '';

        const projectLinkHTML = project.link && project.link !== '#' ? `
            <a href="${project.link}" class="hero-button" target="_blank">${buttonText}</a>
        ` : '';

        const mediaWrapperClass = hasVideo && hasSlider ? "modal-media-wrapper side-by-side" : "modal-media-wrapper";

        modalBody.innerHTML = `
            <div class="${mediaWrapperClass}">
                ${videoPlayerHTML}
                ${sliderHTML}
            </div>
            <h2>${project[`name_${currentLanguage}`]}</h2>
            <p>${project[`description_${currentLanguage}`]}</p>
            ${projectLinkHTML}
        `;

        modal.style.display = 'flex';

        if (imageCount > 1) {
            const sliderContainer = modal.querySelector('.slider-container');
            const sliderWrapper = modal.querySelector('.slider-wrapper');
            const prevBtn = modal.querySelector('#prev-btn');
            const nextBtn = modal.querySelector('#next-btn');

            function updateSlider() {
                const slideWidth = sliderContainer.offsetWidth;
                sliderWrapper.style.transform = `translateX(-${currentImageIndex * slideWidth}px)`;
                prevBtn.classList.toggle('disabled', currentImageIndex === 0);
                nextBtn.classList.toggle('disabled', currentImageIndex === imageCount - 1);
            }

            nextBtn.addEventListener('click', () => {
                if (currentImageIndex < imageCount - 1) {
                    currentImageIndex++;
                    updateSlider();
                }
            });

            prevBtn.addEventListener('click', () => {
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    updateSlider();
                }
            });

            updateSlider();
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    changeLanguage(currentLanguage);
});