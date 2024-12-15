import i18n from 'i18next'; 
import { initReactI18next } from 'react-i18next'; 

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "inspiration": "Inspiration from the classics ",
        "akutami_inspiration": "of the genre Gege Akutami drew ",
        "bleach": 'inspiration from iconic works such as "Bleach" ',
        "hunterxhunter": '"Hunter x Hunter" by Yoshihiro Togashi.',
        "combat_system": "by Tite Kubo and Especially noticeable is",
        "energy": " the influence of the combat ability system from ",
        "story_version": "'Hunter x Hunter' where the complex mechanics ",
        "prequel": "of cursed energy are similar to the concept of nen. ",
        "magic_battle": "The first version of the story Before the release ",
        "tokyo_metro": 'of the main story Gege Akutami released a short manga',
        "movie_adaptation": ' called "Tokyo Metropolitan Magic Technical School". ',
        "movie_hit": 'This prequel later became known as "Jujutsu Kaisen 0".  ',
        "popular":'Interestingly, the manga was so popular,"that it was adapted "',
        "full-length":"into a full-length animated film that became a box office hit.",
        "h1_manga":"Manga",
        "characters":"Characters",
        "add-character":"add new characters",
        "input-character_name":"Character name",
        "input-character_role":"Role",
        "input-character_grade":"Rank",
        "input-character_ability":"Ability",
        "input-character_link":"Image link",
        "add-new_character":"add character",
        "delete-btn":'Delete',
        "weapons":"Weapons",
        "navbar-h":"Header",
        "navbar-i":"Infinity",
        "navbar-s":"Slider",
        "navbar-c":"Character",
        "navbar-w":"Weapons",
        "navbar-f":"Footer",
        "Search":"Search"

        


    }
    },
    ru: {
      translation: {
        "inspiration": "Вдохновение от классики жанра",
        "akutami_inspiration": "Гэгэ Акутами черпал вдохновение от ",
        "bleach": 'таких культовых произведений как "Блич" Тайта Кубо и',
        "hunterxhunter": '"Охотник х Охотник" Ёсихиро Тогаси.',
        "combat_system": "Особенно заметно влияние системы боевых ",
        "energy": "способностей из 'Hunter x Hunter' где сложная ",
        "story_version": "механика проклятой энергии похожа на ",
        "prequel": "концепцию нен. Первая версия истории Перед ",
        "magic_battle": "выходом основного сюжета Гэгэ Акутами" ,
        "tokyo_metro": 'выпустил короткую мангу под названием ',
        "movie_adaptation": '"Tokyo Metropolitan Magic Technical School".Это привел,',
        "movie_hit": ' который позже стал известен как"Магическая битва 0".',
        "popular":" Интересно,  что манга была настолько популярна, что её  ",
        "full-length":"полнометражный анимационный фильм, ставший кассовым хитом.",
        "h1_manga":"Манга",
        "characters":"Персонажи",
        "add-character":"Добавить персонажа",
        "input-character_name":"Имя персонажа",
        "input-character_role":"Роль",
        "input-character_grade":"Ранг",
        "input-character_ability":"Способности",
        "input-character_link":"Ссылка на изображение",
        "add-new_character":"Добавить",
        "delete-btn":'Удалить',
        "weapons":"Оружие",
        "navbar-h":"Шапка",
        "navbar-i":"Бесконечность",
        "navbar-s":"Слайдер",
        "navbar-c":"Персонажи",
        "navbar-w":"Оружие",
        "navbar-f":"Подвал",
        "Search":"Поиск"
      }
    }
  },
  lng: "ru", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
