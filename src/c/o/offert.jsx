import React, { useContext, useState } from "react";
import "./offert.scss";
import { AppContext } from "../../context";

const Offert = () => {
  const { errors, isCheck, setIsCheck } = useContext(AppContext);

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div id="offert">
      <div
        className={`offert-popup-shape ${isChecked ? "active" : ""}`}
        onClick={() => {
          setIsChecked(false);
        }}
      ></div>
      <div className={`offert-popup ${isChecked ? "active" : ""}`}>
        <div className="popup-inner">
          <h2>RAQAMLI AVLOD QIZLARI TANLOVI OFERTASI</h2>
          <p className="little-title">1. Umumiy qoidalar</p>
          <p>
            1.1. Ushbu oferta (keyingi o‘rinlarda "Oferta") "Raqamli Avlod
            Qizlari" tanlovida ishtirok etuvchi shaxslar (keyingi o‘rinlarda
            "Ishtirokchi") uchun majburiy hisoblanadi.
          </p>
          <p>
            1.2. Tanlovda ishtirok etish orqali, Ishtirokchi ushbu Oferta
            shartlariga to‘liq rozilik bildiradi.
          </p>
          <p className="little-title">2. Tanlov shartlari</p>
          <p>
            2.1. "Raqamli Avlod Qizlari" tanlovi raqamli texnologiyalar sohasida
            iqtidorli yoshlarni aniqlash va qo‘llab-quvvatlash maqsadida tashkil
            etiladi.
          </p>
          <p>
            2.2. Tanlov g‘oliblari maxsus ta'lim safari yoki boshqa
            rag‘batlantirish dasturlariga jalb etilishi mumkin.
          </p>
          <p className="little-title">3. Viza va safar bilan bog‘liq holatlar</p>
          <p>
            3.1. Agar tanlov g‘olibi chet elga safar qilish huquqini qo‘lga
            kiritsa, u tegishli davlatning viza talablari va tartib-qoidalariga
            rioya qilishi shart.
          </p>
          <p>
            3.2. Agar viza beruvchi davlat tomonidan Ishtirokchiga shaxsiy yoki
            oila a'zolariga bog‘liq sabablarga ko‘ra viza berish rad etilsa,
            Ishtirokchi ushbu ta'lim safarida qatnasha olmasligi mumkin.{" "}
          </p>
          <p>
            3.3. Ushbu holatda tashkilotchilar tanlov g‘olibiga muqobil
            rag‘batlantirish imkoniyatlarini taqdim etishga harakat qiladi,
            lekin boshqa muqobil mukofot yoki kompensatsiya kafolatlanmaydi.{" "}
          </p>
          <p className="little-title">4. Majburiyatlar va javobgarlik</p>
          <p>
            4.1. Tanlov tashkilotchilari viza olish jarayoniga aralashmaydi va
            viza rad etilishi yuzasidan javobgar emas.{" "}
          </p>
          <p>
            4.2. Ishtirokchi o‘zining shaxsiy hujjatlari va sayohat bilan
            bog‘liq barcha huquqiy talablarni mustaqil ravishda bajarishga
            mas'uldir.
          </p>
          <p className="little-title">5. Yakuniy qoidalar</p>
          <p>
            5.1. Ushbu Oferta tanlov tashkilotchilari tomonidan o‘zgartirilishi
            yoki to‘ldirilishi mumkin.{" "}
          </p>
          <p>
            5.2. Ishtirokchi tanlovda ishtirok etish orqali ushbu Oferta
            shartlariga rozilik bildiradi va unga rioya qilish majburiyatini
            oladi.
          </p>
        </div>

        <div className="tool">
          <div className="line"></div>
          <label
            for="checkbox-2"
            class="form-control"
            onClick={() => {
              setIsChecked(false);
              setIsCheck(!isCheck);
            }}
          >
            Ommaviy oferta shartlariga rozilik
            <input
              type="checkbox"
              name="checkbox-2"
              id="checkbox-2"
              value={isCheck}
              checked={isCheck}
              disabled
            />
            <span class="custom-checkbox"></span>
          </label>
        </div>
      </div>
      <div className="input-row">
        <label
          for="checkbox-1"
          class="form-control cont-1"
          onClick={() => setIsChecked(true)}
        >
          Ommaviy oferta shartlariga rozilik
          <input
            type="checkbox"
            name="checkbox-1"
            id="checkbox-1"
            value={isCheck}
            disabled={!isCheck}
            checked={isCheck}
          />
          <span class="custom-checkbox box-1"></span>
        </label>
        <span className="error" style={{ fontSize: "15px" }}>
          {errors.offert}
        </span>
      </div>
    </div>
  );
};

export default Offert;
