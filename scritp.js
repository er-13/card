const translations = {
    ru: {
        titles: ["Вилла", "Дуплекс", "Квадрохаус", "Коттедж", "Лейнхаус", "Мезонет", "Особняк", "Резиденция", "Таунхаус", "Усадьба", "Экодом"],
        dir: "ltr"
    },
    en: {
        titles: ["Villa", "Duplex", "Quadplex", "Cottage", "Lanehouse", "Maisonette", "Mansion", "Residence", "Townhouse", "Manor", "Eco-house"],
        dir: "ltr"
    },
    ar: {
        titles: ["فيلا", "دوبلكس", "منزل رباعي", "كوخ", "لين هاوس", "ميزونيت", "قصر", "مقر إقامة", "تاون هاوس", "عزبة", "بيت بيئي"],
        dir: "rtl"
    }
};

function setLanguage(lang) {
    // Меняем направление
    document.body.dir = translations[lang].dir;
    
    // Ищем все h3 внутри карточек
    const titleElements = document.querySelectorAll('.card h3');
    
    console.log("Найдено элементов для перевода:", titleElements.length);

    titleElements.forEach((el, index) => {
        if (translations[lang].titles[index]) {
            el.innerText = translations[lang].titles[index];
        }
    });
}

// По умолчанию
setLanguage('ru');
