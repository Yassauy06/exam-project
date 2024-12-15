import React , {useState} from "react";
import { useTranslation } from 'react-i18next'; 
import { Link } from "react-router-dom";
function Weapons () {
  const { t } = useTranslation(); 
    const weaponJjk = [
      {
        "id": 1,
        "name": "Black Rope",
        "rank": "A-ранг",
        "view": "Верёвка, насыщенная проклятой энергией, способна нарушать техники противника.",
        "ability": "Нарушение проклятых техник при контакте.",
        "user": "Мигуми Фушигуро",
        "image":"https://preview.redd.it/will-these-2-make-a-return-v0-kar7ji0wgyvb1.png?auto=webp&s=bef24d8daa41eea06d2b7b9c13b095c53bd85795"
      },
      {
        "id": 2,
        "name": "Dragon-Bone",
        "rank": "S-ранг",
        "view": "Оружие, напоминающее кость дракона, созданное для массового урона.",
        "ability": "Усиление проклятой энергии при ударах.",
        "user": "Неизвестно",
        "image":"https://i.redd.it/ua0vapl6jj271.jpg"
      },
      {
        "id": 3,
        "name": "Executioner's Sword",
        "rank": "S-ранг",
        "view": "Меч палача, предназначенный для устранения сильных проклятых духов.",
        "ability": "Мгновенное нанесение критического урона.",
        "user": "Кашимо Хаджиме",
        "image":"https://preview.redd.it/can-someone-please-draw-my-holding-higurumas-executioners-v0-7bj99jsmdlld1.jpg?width=640&crop=smart&auto=webp&s=377bb18dc5e6d7d35805d74bd619b421aa90cf94"
      },
      {
        "id": 4,
        "name": "Soul Split Katana",
        "rank": "A-ранг",
        "view": "Катана, способная рассекать души проклятых существ.",
        "ability": "Разделение духовной и физической сущностей цели.",
        "user": "Маки Зенин",
        "image":"https://i.pinimg.com/originals/7d/e1/63/7de163f142d8d7b702e18d970b4849ea.png"
      },
      {
        "id": 5,
        "name": "Chain of a Thousand Miles",
        "rank": "A-ранг",
        "view": "Цепь, которая может удлиняться на большие расстояния.",
        "ability": "Контроль на дальних дистанциях и захват противников.",
        "user": "Тоджи Фусигура",
        "image":"https://preview.redd.it/ah-my-favorite-fight-gojo-vs-toji-v0-egluajel0g4b1.jpg?width=640&crop=smart&auto=webp&s=fcf7ebb3db6f99e98e49ff2fdd529c8772895d9d"
      },
      {
        "id": 6,
        "name": "Fester Life Blade",
        "rank": "A-ранг",
        "view": "Клинок, насыщенный жизненной энергией проклятий.",
        "ability": "Постепенное истощение жизненной силы противника.",
        "user": "Неизвестно" ,
        "image":"https://preview.redd.it/whos-winning-this-fight-the-cockroach-devil-from-csm-vs-v0-l42oouhy2d4b1.jpg?width=640&crop=smart&auto=webp&s=bb331e880bc008f64d84a649251d3573ccc7b7c6"
      },
      {
        "id": 7,
        "name": "Haruta's Sword",
        "rank": "B-ранг",
        "view": "Лёгкий меч, использованный Харутой для быстрых атак.",
        "ability": "Высокая скорость и маневренность в бою.",
        "user": "Харута Шигемо",
        "image":"https://i.pinimg.com/736x/a5/40/78/a54078c1b722e6caa2437aa0b80ed14a.jpg"
      },
      {
        "id": 8,
        "name": "Slaughter Demon",
        "rank": "B-ранг",
        "view": "Простой клинок, используемый для борьбы с мелкими проклятыми духами.",
        "ability": "Эффективен против духов низшего ранга.",
        "user": "Юдзи Итадори",
        "image":"https://pbs.twimg.com/media/F_h_x9dXkAEDuE8.jpg:large"
      },
      {
      "id": 9,
    "name": "Maki's Spear",
    "rank": "A-ранг",
    "view": "Копьё, используемое Маки для ближнего и дальнего боя.",
    "ability": "Комбинированные атаки на средней дистанции.",
    "user": "Маки Дзэнин",
    "image":"https://fbi.cults3d.com/uploaders/13537223/illustration-file/6c14ae50-18ae-4cb4-aaa0-7982d4a405be/dsfsdfdsfsfd.png"
  },
  {
    "id": 10,
    "name": "Inverted Spear of Heaven",
    "rank": "S-ранг",
    "view": "Копьё, способное отменять любые техники проклятой энергии.",
    "ability": "Аннулирование проклятых техник при контакте.",
    "user": "Фушигуро Тодзи",
    "image":"https://ae01.alicdn.com/kf/Seccdc238b5174f7d9f651628c9206722T.jpg?width=1000&height=972&hash=1972"
  },
      ]
      const [selectedWeaponId, setSelectedWeaponId] = useState(null);

      const handleCardClick = (id) => {
        setSelectedWeaponId(prevId => (prevId === id ? null : id)); 
      };
    return(
        <div className="weapon-container">
            <h1 style={{"marginBottom":"30px"}}>{t("weapons")}</h1>
            <div className="weapon-content">
                {weaponJjk.map((weapon) =>(
                    <div key={weapon.id} onClick={() => handleCardClick(weapon.id)} className="weapon-card">
                        <h3>{weapon.name}</h3>
                        <p className="rank">{weapon.rank}</p>
                        <div className={`weapon-info ${selectedWeaponId === weapon.id ? 'open' : ''}`}>
              <div className="weapon-title-info">
              <p className="weapon-card-text rank"><strong>Ранг:</strong> {weapon.rank}</p>
              <p className="weapon-card-text"><strong>Тип:</strong> {weapon.view}</p>
              <p className="weapon-card-text"><strong>Способность:</strong> {weapon.ability}</p>
              <p className="weapon-card-text"><strong>Пользователь:</strong> {weapon.user}</p>
               
              </div>
              <div className="weapon-image-flex">
              <img src={weapon.image} alt={weapon.name} className="weapon-image" />
              </div>
               </div>
               
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Weapons;