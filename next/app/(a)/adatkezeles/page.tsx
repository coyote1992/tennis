import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adatkezelés",
  description: "Adatkezelési tájékoztató: mit kezdünk a jelentkezési űrlapon megadott adatokkal.",
};

export default function PrivacyPage() {
  return (
    <section className="band band--paper" style={{ paddingTop: "clamp(64px, 8vw, 110px)" }} aria-labelledby="privacy-title">
      <div className="container container--narrow prose">
        <p className="eyebrow">Adatkezelés</p>
        <h1 className="h1" id="privacy-title">
          Adatkezelési <em>tájékoztató</em>
        </h1>
        <p className="lead" style={{ marginTop: 22 }}>
          Ez a tájékoztató arról szól, mit kezdünk azokkal az adatokkal, amelyeket a weboldal jelentkezési űrlapján megadsz.
        </p>
        <h2>Az adatkezelő</h2>
        <p>
          {SITE.name}, {SITE.address.line}. E-mail:{" "}
          <a className="inline-link" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
          , telefon: {SITE.phone.display}.
        </p>
        <h2>Milyen adatokat kérünk, és miért</h2>
        <p>
          A jelentkezéshez a neved, az e-mail-címed, a telefonszámod, gyerek jelentkezése esetén a gyerek nevét és korát, valamint a választott
          programot, az alkalmas időpontokat és az általad megírt megjegyzést kérjük. Ezeket kizárólag arra használjuk, hogy felvegyük veled a
          kapcsolatot, és egyeztessük az edzést vagy a kezelést. Az adatkezelés jogalapja a hozzájárulásod, amelyet az űrlap elküldésekor adsz
          meg.
        </p>
        <h2>Meddig őrizzük</h2>
        <p>
          A jelentkezést addig őrizzük, amíg az edzés egyeztetéséhez és a részvételhez szükséges, de legfeljebb a jelentkezés évét követő év
          végéig, hacsak jogszabály hosszabb megőrzést nem ír elő.
        </p>
        <h2>Kik férnek hozzá</h2>
        <p>
          Az adataidat az akadémia edzői és munkatársai látják. A jelentkezést e-mailben továbbítjuk, ehhez e-mail-küldő szolgáltatót veszünk
          igénybe. Harmadik félnek marketingcélra nem adjuk át.
        </p>
        <h2>Sütik</h2>
        <p>
          A weboldal nem használ követő- vagy reklámsütiket, és nem futtat látogatottságmérést. A pályafoglalási rendszer (Hella) és az online
          helyfoglalás külön szolgáltatások, saját adatkezelési feltételekkel.
        </p>
        <h2>A jogaid</h2>
        <p>
          Bármikor kérhetsz tájékoztatást az adataidról, kérheted azok helyesbítését vagy törlését, és visszavonhatod a hozzájárulásodat a fenti
          elérhetőségeken. Panasszal a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH, naih.hu) fordulhatsz.
        </p>
        <p className="small muted">Hatályos: 2026. október 1-től.</p>
      </div>
    </section>
  );
}
