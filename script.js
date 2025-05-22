/*----Hamburgermeny----*/
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".navbar");
    const dropdown = document.querySelector(".dropdown");
  
    hamburger.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  
    // Dropdown-knapp funkar med klick på mobil
    const dropbtn = document.querySelector(".dropbtn");
    dropbtn.addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });

    /*---KATEGORIER---*/
  if (document.getElementById('matvaror-container')) {
  visaMatvaror();

  // Dropdown-funktionalitet
  const kategoriDropdown = document.querySelector('.kategori-dropdown');
  const kategoriBtn = document.getElementById('kategoriBtn');
  const kategoriList = document.getElementById('kategoriList');

  kategoriBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    kategoriDropdown.classList.toggle('open');
  });

  kategoriList.addEventListener('click', (e) => {
    if (e.target.dataset.kategori) {
      visaMatvaror(e.target.dataset.kategori);
      kategoriDropdown.classList.remove('open');
      kategoriBtn.innerHTML = `Kategorier &#9662; - ${e.target.innerText}`;
    }
  });

  // Stänger dropdown vid klick utanför
  document.addEventListener('click', (e) => {
    if (!kategoriDropdown.contains(e.target)) {
      kategoriDropdown.classList.remove('open');
    }
  });
}

  // Formulärvalidering
  const kontaktForm = document.getElementById('kontaktForm');
  if (kontaktForm) {
    kontaktForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('namn').value.trim();
      const message = document.getElementById('address').value.trim();
      const errorDiv = document.getElementById('formError');
      errorDiv.textContent = "";

      let valid = true;
      if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        errorDiv.textContent += "Ange en giltig e-postadress. ";
        valid = false;
      }
      if (subject.length === 0) {
        errorDiv.textContent += "Ange ett namn. ";
        valid = false;
      }
      if (message.length === 0) {
        errorDiv.textContent += "Ange din address.";
        valid = false;
      }
      if (valid) {
        errorDiv.style.color = "green";
        errorDiv.textContent = "Du är mu medlem!";
        kontaktForm.reset();
      } else {
        errorDiv.style.color = "red";
      }
    });
  }
  });
  
  /*----MATVAROR----*/
  const matvaror = [
    {
      namn: "Färsk mellanmjölk 1,5% 1L Arla Ko®",
      pris: "14,50 kr",
      bild: "Images/matvaror/Arla mellanmjölk.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Kungsörnen spagetti 1kg",
      pris: "21,90 kr",
      bild: "Images/matvaror/Spagetti.webp",
      kategori: "Skafferi, kakor och snacks"
    }, 
    {
      namn: "Krossade tomater 390g",
      pris: "11,90 kr",
      bild: "Images/matvaror/Krossade tomater.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Keso 250g",
      pris: "17,90 kr",
      bild: "Images/matvaror/Keso.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Oatly havremjölk 1L",
      pris: "19,90 kr",
      bild: "Images/matvaror/Havredryck.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Bregott 500g",
      pris: "58,90 kr",
      bild: "Images/matvaror/Smör.webp",
      kategori: "Mejeri och ost",
    },
    {
      namn: "Bryggkaffe Mellanrost 450g Gevalia",
      pris: "79,90 kr",
      bild: "Images/matvaror/Gevalia.webp",
      kategori: "Dryck"
    },
    {
      namn: "Kaffe bryggmalet 450g Löfbergs",
      pris: "69,90 kr",
      bild: "Images/matvaror/Löfbergs.webp",
      kategori: "Dryck"
    },
    {
      namn: "Oreo 154g",
      pris: "19,90 kr",
      bild: "Images/matvaror/Oreo.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Marabou mjölkchoklad 200g",
      pris: "35,90 kr",
      bild: "Images/matvaror/Mjölkchoklad.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Tuggummi spearmint 29g Extra",
      pris: "16,50 kr",
      bild: "Images/matvaror/Extra.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Kexchoklad 60g",
      pris: "8,90 kr",
      bild: "Images/matvaror/Kex.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Läkerol original 75g",
      pris: "22,90 kr",
      bild: "Images/matvaror/Läkerol.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Pringles sour cream 165g",
      pris: "33,90 kr",
      bild: "Images/matvaror/Pringles.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Ostbågar 225g",
      pris: "30,90 kr",
      bild: "Images/matvaror/Ostbågar.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Coca-Cola 1,5L",
      pris: "19,90 kr",
      bild: "Images/matvaror/Cola 1.5.webp",
      kategori: "Dryck"
    },
    {
      namn: "Tvättmedel parfymfri 1320ml Via",
      pris: "71,90 kr",
      bild: "Images/matvaror/Tvättmedel.webp",
      kategori: "Överigt"
    },
    {
      namn: "Läsk pepsi 50cl",
      pris: "12,90 kr",
      bild: "Images/matvaror/Pepsi.webp",
      kategori: "Dryck"
    },
    {
      namn: "Gourmetskinka rökta skivor 200g Pärsons",
      pris: "31,90 kr",
      bild: "Images/matvaror/Skinka.webp",
      kategori: "Kött"
    },
    {
      namn: "Ketchup 1kg Heinz",
      pris: "30,90 kr",
      bild: "Images/matvaror/Ketchup.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Avfallspåsar 30L 20p ICA",
      pris: "22,90 kr",
      bild: "Images/matvaror/Avfallspåsar.webp",
      kategori: "Överigt"
    },
    {
      namn: "Jordgubbar 250g ICA",
      pris: "20,00 kr",
      bild: "Images/matvaror/Jordgubbar.webp",
      kategori: "Frukt och grönt"
    },
  {
      namn: "Rosta rostbröd 450g Pågen",
      pris: "19,90 kr",
      bild: "Images/matvaror/Rosta.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Levain 750g Fazer bröd",
      pris: "39,00 kr",
      bild: "Images/matvaror/Levain.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Smör svenskt 500g Arla®",
      pris: "64,90 kr",
      bild: "Images/matvaror/Smör svenskt.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Potatis fast 4kg klass 2 ICA",
      pris: "54,90 kr",
      bild: "Images/matvaror/Potatis fast.webp",
      kategori: "Frukt och grönt"
    },
    {
      namn: "Druvor gröna kärnfira 500g ICA",
      pris: "37,90 kr",
      bild: "Images/matvaror/Druvor.webp",
      kategori: "Frukt och grönt"
    },
    {
      namn: "Ägg frigående M 15p ICA",
      pris: "40,90 kr",
      bild: "Images/matvaror/Ägg.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Banan eko 5-7p klass 1 ICA",
      pris: "ca 26,90 kr",
      bild: "Images/matvaror/Bananer.webp",
      kategori: "Frukt och grönt"
    },
    {
      namn: "Stekfläsk skivat 1kg ICA",
      pris: "110,00 kr",
      bild: "Images/matvaror/Fläsk.webp",
      kategori: "Kött"
    },
    {
      namn: "Smörkniv plast 1p ICA",
      pris: "9,90 kr",
      bild: "Images/matvaror/Smörkniv.webp",
      kategori: "Överigt"
    },
    {
      namn: "Briketter 2.5kg FSC",
      pris: "49,90 kr",
      bild: "Images/matvaror/Briketter.webp",
      kategori: "Överigt"
    },
    {
      namn: "Karré BBQ skivad benfri 300g ICA",
      pris: "59,90 kr",
      bild: "Images/matvaror/Karré.webp",
      kategori: "Kött"
    },
    {
      namn: "Grillkol 2.5kg FSC",
      pris: "49,90 kr",
      bild: "Images/matvaror/Grillkol.webp",
      kategori: "Överigt"
    },
    {
      namn: "Hamburgerbröd 4p 324g Korvbrödsbagarn",
      pris: "23,90 kr",
      bild: "Images/matvaror/Hamburgerbröd.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Gaständare 1p",
      pris: "19,90 kr",
      bild: "Images/matvaror/Gaständare.webp",
      kategori: "Överigt"
    },
    {
      namn: "Bearnaisesås Orginal 500ml Lohmanders",
      pris: "43,90 kr",
      bild: "Images/matvaror/Bearnaisesås.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "BBQ sås 510g sweet baby rays",
      pris: "53,90 kr",
      bild: "Images/matvaror/BBQ.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "Tortilla orginal medium 8p Santa Maria",
      pris: "16,90 kr",
      bild: "Images/matvaror/Tortilla.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Taco sauce hot 230g Santa Maria",
      pris: "15,90 kr",
      bild: "Images/matvaror/Taco sauce.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "Nötfärs färsk 12% 1kg ICA",
      pris: "138,00 kr",
      bild: "Images/matvaror/Nötfärs.webp",
      kategori: "Kött"
    },
    {
      namn: "Taco kryddmix original mild 28g Santa Maria",
      pris: "11,90 kr",
      bild: "Images/matvaror/Kryddmix.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "Köttbullar mamma scans 1kg Scan",
      pris: "74,90 kr",
      bild: "Images/matvaror/Köttbullar.webp",
      kategori: "Fryst"
    },
    {
      namn: "Buljong kött 6p Knorr",
      pris: "14,90 kr",
      bild: "Images/matvaror/Buljong.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "Pilsnerkorv 455g Bullens",
      pris: "24,90 kr",
      bild: "Images/matvaror/Pilsnerkorv.webp",
      kategori: "Kött"
    },
    {
      namn: "Risgröt 500g Felix",
      pris: "14,90 kr",
      bild: "Images/matvaror/Grött.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Pizzabröd pinsa 230g Zeta",
      pris: "37,90 kr",
      bild: "Images/matvaror/Pizzabröd.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Laxfilé fryst 4p 500g Pacific brand",
      pris: "99,90 kr",
      bild: "Images/matvaror/Fryst lax.webp",
      kategori: "Fryst"
    },
    {
      namn: "Kaviar original 300g Kalles",
      pris: "34,90 kr",
      bild: "Images/matvaror/Kaviar.webp",
      kategori: "Kryddor och såser"
    },
    {
      namn: "Rio Punch 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Rio Punch.webp",
      kategori: "Dryck"
    },
    {
      namn: "Ultra 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Ultra.webp",
      kategori: "Dryck"
    },
    {
      namn: "Pipeline-punch 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Pipeline punch.webp",
      kategori: "Dryck"
    },
    {
      namn: "Ultra Rosá 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Ultra rosá.webp",
      kategori: "Dryck"
    },
    {
      namn: "Absolutely zero 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Absolutely zero.webp",
      kategori: "Dryck"
    },
    {
      namn: "Godis lördagspatrullen 155g Malaco",
      pris: "29,90 kr",
      bild: "Images/matvaror/Lördagspatrullen.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Majskoner Choklad Smash 100g OLW",
      pris: "29,90 kr",
      bild: "Images/matvaror/Smash.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Smarties 38g Nestle",
      pris: "8,90 kr",
      bild: "Images/matvaror/Smarties.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Björnar klubbmix 200g Cloetta",
      pris: "25,90 kr",
      bild: "Images/matvaror/Klubbmix.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Müslibar BIG chocolate 50g Corny",
      pris: "9,90 kr",
      bild: "Images/matvaror/Corny big.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Kit Kat mini bag 200g Nestle",
      pris: "36,90 kr",
      bild: "Images/matvaror/Kit Kat.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Bad & Toalettpapper 16p ICA",
      pris: "59,90 kr",
      bild: "Images/matvaror/Toalettpapper.webp",
      kategori: "Överigt"
    },
    {
      namn: "Vispgrädde 36% 5dl ICA",
      pris: "29,90 kr",
      bild: "Images/matvaror/Vispgrädde.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Kycklingfilé fryst 1kg Kronfågel",
      pris: "99,90 kr",
      bild: "Images/matvaror/Kycklingfilé fryst.webp",
      kategori: "Fryst"
    },
    {
      namn: "Grillspett Bambu 100p",
      pris: "14,90 kr",
      bild: "Images/matvaror/Grillspett.webp",
      kategori: "Överigt"
    },
    {
      namn: "Babyplommontomater 500g ICA",
      pris: "34,90 kr",
      bild: "Images/matvaror/Babyplommontomater.webp",
      kategori: "Frukt och grönt"
    },
    {
      namn: "Ris långkornigt 1kg Ben's Orginal",
      pris: "35,90 kr",
      bild: "Images/matvaror/Ris Ben 1kg.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Yoghurt Turkisk naturell 10% 100g Salakis",
      pris: "35,90 kr",
      bild: "Images/matvaror/Turkisk yogurt.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Apelsinjuice Nypressad 850ml Brämhults",
      pris: "46,90 kr",
      bild: "Images/matvaror/Apelsinjuice.webp",
      kategori: "Dryck"
    },
    {
      namn: "Texmex ost riven 29% 150g Arla köket®",
      pris: "27,90 kr",
      bild: "Images/matvaror/Texmex ost.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Grillkorv bacon&ost 59% kötthalt 480g Scan",
      pris: "25,90 kr",
      bild: "Images/matvaror/Grillkorv scan.webp",
      kategori: "Kött"
    },
    {
      namn: "Knäckebröd sport 550g Wasa",
      pris: "22,90 kr",
      bild: "Images/matvaror/Knäckebröd sport.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "Vaniljyoghurt päron slät 2.1% 1kg Valio",
      pris: "26,90 kr",
      bild: "Images/matvaror/Vaniljyoghurt päron.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Guldsalami skivad 100g Grilstad",
      pris: "25,50 kr",
      bild: "Images/matvaror/Guldsalami.webp",
      kategori: "Kött"
    },
    {
      namn: "Knäckebröd rågi 550g Wasa",
      pris: "24,90 kr",
      bild: "Images/matvaror/Knäckebröd rågi.webp",
      kategori: "Skafferi, kakor och snacks"
    },
    {
      namn: "My pizza slice ham&cheese 170g Dr.Oetker",
      pris: "17,90 kr",
      bild: "Images/matvaror/Fryspizza Dr.Oetker.webp",
      kategori: "Fryst"
    },
    {
      namn: "Handtvål fläder rabarber 300ml Bliw",
      pris: "17,90 kr",
      bild: "Images/matvaror/Handtvål.webp",
      kategori: "Överigt"
    },
  {
      namn: "Glass salted caramel 460ml Häagen dazs",
      pris: "53,90 kr",
      bild: "Images/matvaror/Glass salted caramel.webp",
      kategori: "Fryst"
    },
    {
      namn: "Smoothie vitamin blåbär hallon 850ml Brämhults",
      pris: "48,90 kr",
      bild: "Images/matvaror/Smoothie blåbär.webp",
      kategori: "Dryck"
    },
    {
      namn: "Fruktdryck hallon&svartvinbär 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER hallon.webp",
      kategori: "Dryck"
    },
    {
      namn: "Fruktdryck päron 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER päron.webp",
      kategori: "Dryck"
    }, 
    {
      namn: "Stilldryck passionfrukt 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER passion.webp",
      kategori: "Dryck"
    },
    {
      namn: "Snabbkaffe refill lyx mörkrost 200g Nescafé",
      pris: "88,90 kr",
      bild: "Images/matvaror/Snabbkaffe.webp",
      kategori: "Dryck",
    },
    {
      namn: "Glass vanlij 460ml Häagen Dazs",
      pris: "53,90 kr",
      bild: "Images/matvaror/Glass vanilj.webp",
      kategori: "Fryst"
    },
    {
      namn: "Hårspray volume 250ml Taft Schawarzkopf",
      pris: "44,50 kr",
      bild: "Images/matvaror/Hårspray.webp",
      kategori: "Överigt"
    },
    {
      namn: "Hårmousse volume 150ml Taft Schawarzkopf",
      pris: "41,90 kr",
      bild: "Images/matvaror/Hårmousse.webp",
      kategori: "Överigt"
    },
    {
      namn: "Kassler ca 600g ICA",
      pris: "58,14 kr",
      bild: "Images/matvaror/Kassler.webp",
      kategori: "Kött"
    },
    {
      namn: "Pulled prok med BBQ glaze 550g ICA",
      pris: "64,90 kr",
      bild: "Images/matvaror/Pulled pork.webp",
      kategori: "Kött"
    },
    {
      namn: "Skinka strimlad rökt 180g ICA",
      pris: "21,90 kr",
      bild: "Images/matvaror/Skinka strimlad.webp",
      kategori: "Kött"
    },
    {
      namn: "Färsk standardmjölk 3% 1L Arla Ko®",
      pris: "14,90 kr",
      bild: "Images/matvaror/Arla standardmjölk.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Färsk lättmjölk 0,5% 1L Arla Ko®",
      pris: "13,90 kr",
      bild: "Images/matvaror/Arla lättmjölk.webp",
      kategori: "Mejeri och ost",
    },
    {
      namn: "Kvarg mild vanilj 0,2% laktosfri 1kg Arla®",
      pris: "42,90 kr",
      bild: "Images/matvaror/Arla kvarg.webp",
      kategori: "Mejeri och ost"
    },
    {
      namn: "Chips dill 275g Estrella",
      pris: "27,90 kr",
      bild: "Images/matvaror/Chips dill.webp",
      kategori: "Skafferi, kakor och snacks"
    },
  ];

function visaMatvaror(valdKategori = "alla") {
  const container = document.getElementById('matvaror-container');
  container.innerHTML = "";
  matvaror
    .filter(vara => valdKategori === "alla" || vara.kategori === valdKategori)
    .forEach(vara => {
      const div = document.createElement('div');
      div.className = 'produkt';
      div.innerHTML = `
        <img src="${vara.bild}" alt="${vara.namn}" loading="lazy">
        <h3>${vara.namn}</h3>
        <p class="pris">${vara.pris}</p>
      `;
      container.appendChild(div);
    });
}
  
/*----MAP----*/

  const stores = [
    { name: "Butik Östermalm", lat: 59.341934, lng: 18.097037},
    { name: "Butik Täby", lat: 59.44510, lng: 18.07121},
    { name:"Butik Danderyd", lat: 59.397675, lng: 18.036667},
    { name:"Butik Nacka", lat: 59.310252, lng: 18.163755},
    {name:"Butik Vaxholm", lat: 59.403442, lng: 18.351174},
  ];

  // Start kartan
  const map = L.map('map').setView([59.3293, 18.0686], 9);

  //OpenStreetMap-kartan
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  //Markerar butikerna på kartan
  stores.forEach(store => {
    L.marker([store.lat, store.lng]).addTo(map)
      .bindPopup(store.name);
  });