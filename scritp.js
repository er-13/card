const translations = {
    ru: {
        titles: ["Вила", "Дуплекс", "Квадрохаус", "Котедж", "Лейнхаус", "Мезонет", "Особняк", "Резиденция", "Таунхаус", "Усадьба", "Экодом"],
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
    document.body.dir = translations[lang].dir;
    const titleElements = document.querySelectorAll('.villa-title');

    titleElements.forEach((el, index) => {
        if (translations[lang].titles[index]) {
            el.innerText - translations[lang].titles[index];
        }
    })
}

setLanguage ('ru');