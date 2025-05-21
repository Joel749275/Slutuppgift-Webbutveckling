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
      bild: "Images/matvaror/Spagetti.webp"
    }, 
    {
      namn: "Krossade tomater 390g",
      pris: "11,90 kr",
      bild: "Images/matvaror/Krossade tomater.webp"
    },
    {
      namn: "Keso 250g",
      pris: "17,90 kr",
      bild: "Images/matvaror/Keso.webp"
    },
    {
      namn: "Oatly havremjölk 1L",
      pris: "19,90 kr",
      bild: "Images/matvaror/Havredryck.webp"
    },
    {
      namn: "Bregott 500g",
      pris: "58,90 kr",
      bild: "Images/matvaror/Smör.webp"
    },
    {
      namn: "Bryggkaffe Mellanrost 450g Gevalia",
      pris: "79,90 kr",
      bild: "Images/matvaror/Gevalia.webp"
    },
    {
      namn: "Kaffe bryggmalet 450g Löfbergs",
      pris: "69,90 kr",
      bild: "Images/matvaror/Löfbergs.webp"
    },
    {
      namn: "Oreo 154g",
      pris: "19,90 kr",
      bild: "Images/matvaror/Oreo.webp"
    },
    {
      namn: "Marabou mjölkchoklad 200g",
      pris: "35,90 kr",
      bild: "Images/matvaror/Mjölkchoklad.webp"
    },
    {
      namn: "Tuggummi spearmint 29g Extra",
      pris: "16,50 kr",
      bild: "Images/matvaror/Extra.webp"
    },
    {
      namn: "Kexchoklad 60g",
      pris: "8,90 kr",
      bild: "Images/matvaror/Kex.webp"
    },
    {
      namn: "Läkerol original 75g",
      pris: "22,90 kr",
      bild: "Images/matvaror/Läkerol.webp"
    },
    {
      namn: "Pringles sour cream 165g",
      pris: "33,90 kr",
      bild: "Images/matvaror/Pringles.webp"
    },
    {
      namn: "Ostbågar 225g",
      pris: "30,90 kr",
      bild: "Images/matvaror/Ostbågar.webp"
    },
    {
      namn: "Coca-Cola 1,5L",
      pris: "19,90 kr",
      bild: "Images/matvaror/Cola 1.5.webp"
    },
    {
      namn: "Tvättmedel parfymfri 1320ml Via",
      pris: "71,90 kr",
      bild: "Images/matvaror/Tvättmedel.webp"
    },
    {
      namn: "Läsk pepsi 50cl",
      pris: "12,90 kr",
      bild: "Images/matvaror/Pepsi.webp"
    },
    {
      namn: "Gourmetskinka rökta skivor 200g Pärsons",
      pris: "31,90 kr",
      bild: "Images/matvaror/Skinka.webp"
    },
    {
      namn: "Ketchup 1kg Heinz",
      pris: "30,90 kr",
      bild: "Images/matvaror/Ketchup.webp"
    },
    {
      namn: "Avfallspåsar 30L 20p ICA",
      pris: "22,90 kr",
      bild: "Images/matvaror/Avfallspåsar.webp"
    },
    {
      namn: "Jordgubbar 250g ICA",
      pris: "20,00 kr",
      bild: "Images/matvaror/Jordgubbar.webp"
    },
  {
      namn: "Rosta rostbröd 450g Pågen",
      pris: "19,90 kr",
      bild: "Images/matvaror/Rosta.webp"
    },
    {
      namn: "Levain 750g Fazer bröd",
      pris: "39,00 kr",
      bild: "Images/matvaror/Levain.webp"
    },
    {
      namn: "Smör svenskt 825 500g Arla®",
      pris: "64,90 kr",
      bild: "Images/matvaror/Smör svenskt.webp"
    },
    {
      namn: "Potatis fast 4kg klass 2 ICA",
      pris: "54,90 kr",
      bild: "Images/matvaror/Potatis fast.webp"
    },
    {
      namn: "Druvor gröna kärnfira 500g ICA",
      pris: "37,90 kr",
      bild: "Images/matvaror/Druvor.webp"
    },
    {
      namn: "Ägg frigående M 15p ICA",
      pris: "40,90 kr",
      bild: "Images/matvaror/Ägg.webp"
    },
    {
      namn: "Banan eko 5-7p klass 1 ICA",
      pris: "ca 26,90 kr",
      bild: "Images/matvaror/Bananer.webp"
    },
    {
      namn: "Stekfläsk skivat 1kg ICA",
      pris: "110,00 kr",
      bild: "Images/matvaror/Fläsk.webp"
    },
    {
      namn: "Smörkniv plast 1p ICA",
      pris: "9,90 kr",
      bild: "Images/matvaror/Smörkniv.webp"
    },
    {
      namn: "Briketter 2.5kg FSC",
      pris: "49,90 kr",
      bild: "Images/matvaror/Briketter.webp"
    },
    {
      namn: "Karré BBQ skivad benfri 300g ICA",
      pris: "59,90 kr",
      bild: "Images/matvaror/Karré.webp"
    },
    {
      namn: "Grillkol 2.5kg FSC",
      pris: "49,90 kr",
      bild: "Images/matvaror/Grillkol.webp"
    },
    {
      namn: "Hamburgerbröd 4p 324g Korvbrödsbagarn",
      pris: "23,90 kr",
      bild: "Images/matvaror/Hamburgerbröd.webp"
    },
    {
      namn: "Gaständare 1p",
      pris: "19,90 kr",
      bild: "Images/matvaror/Gaständare.webp"
    },
    {
      namn: "Bearnaisesås Orginal 500ml Lohmanders",
      pris: "43,90 kr",
      bild: "Images/matvaror/Bearnaisesås.webp"
    },
    {
      namn: "BBQ sås 510g sweet baby rays",
      pris: "53,90 kr",
      bild: "Images/matvaror/BBQ.webp"
    },
    {
      namn: "Tortilla orginal medium 8p Santa Maria",
      pris: "16,90 kr",
      bild: "Images/matvaror/Tortilla.webp"
    },
    {
      namn: "Taco sauce hot 230g Santa Maria",
      pris: "15,90 kr",
      bild: "Images/matvaror/Taco sauce.webp"
    },
    {
      namn: "Nötfärs färsk 12% 1kg ICA",
      pris: "138,00 kr",
      bild: "Images/matvaror/Nötfärs.webp"
    },
    {
      namn: "Taco kryddmix original mild 28g Santa Maria",
      pris: "11,90 kr",
      bild: "Images/matvaror/Kryddmix.webp"
    },
    {
      namn: "Köttbullar mamma scans 1kg Scan",
      pris: "74,90 kr",
      bild: "Images/matvaror/Köttbullar.webp"
    },
    {
      namn: "Buljong kött 6p Knorr",
      pris: "14,90 kr",
      bild: "Images/matvaror/Buljong.webp"
    },
    {
      namn: "Pilsnerkorv 455g Bullens",
      pris: "24,90 kr",
      bild: "Images/matvaror/Pilsnerkorv.webp"
    },
    {
      namn: "Risgröt 500g Felix",
      pris: "14,90 kr",
      bild: "Images/matvaror/Grött.webp"
    },
    {
      namn: "Pizzabröd pinsa 230g Zeta",
      pris: "37,90 kr",
      bild: "Images/matvaror/Pizzabröd.webp"
    },
    {
      namn: "Laxfilé fryst 4p 500g Pacific brand",
      pris: "99,90 kr",
      bild: "Images/matvaror/Fryst lax.webp"
    },
    {
      namn: "Kaviar original 300g Kalles",
      pris: "34,90 kr",
      bild: "Images/matvaror/Kaviar.webp"
    },
    {
      namn: "Rio Punch 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Rio Punch.webp"
    },
    {
      namn: "Ultra 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Ultra.webp"
    },
    {
      namn: "Pipeline-punch 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Pipeline punch.webp"
    },
    {
      namn: "Ultra Rosá 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Ultra rosá.webp"
    },
    {
      namn: "Absolutely zero 50cl Monster Energy",
      pris: "16,90 kr",
      bild: "Images/matvaror/Absolutely zero.webp"
    },
    {
      namn: "Godis lördagspatrullen 155g Malaco",
      pris: "29,90 kr",
      bild: "Images/matvaror/Lördagspatrullen.webp"
    },
    {
      namn: "Majskoner Choklad Smash 100g OLW",
      pris: "29,90 kr",
      bild: "Images/matvaror/Smash.webp"
    },
    {
      namn: "Smarties 38g Nestle",
      pris: "8,90 kr",
      bild: "Images/matvaror/Smarties.webp"
    },
    {
      namn: "Björnar klubbmix 200g Cloetta",
      pris: "25,90 kr",
      bild: "Images/matvaror/Klubbmix.webp"
    },
    {
      namn: "Müslibar BIG chocolate 50g Corny",
      pris: "9,90 kr",
      bild: "Images/matvaror/Corny big.webp"
    },
    {
      namn: "Kit Kat mini bag 200g Nestle",
      pris: "36,90 kr",
      bild: "Images/matvaror/Kit Kat.webp"
    },
    {
      namn: "Bad & Toalettpapper 16p ICA",
      pris: "59,90 kr",
      bild: "Images/matvaror/Toalettpapper.webp"
    },
    {
      namn: "Vispgrädde 36% 5dl ICA",
      pris: "29,90 kr",
      bild: "Images/matvaror/Vispgrädde.webp"
    },
    {
      namn: "Kycklingfilé fryst 1kg Kronfågel",
      pris: "99,90 kr",
      bild: "Images/matvaror/Kycklingfilé fryst.webp"
    },
    {
      namn: "Grillspett Bambu 100p",
      pris: "14,90 kr",
      bild: "Images/matvaror/Grillspett.webp"
    },
    {
      namn: "Babyplommontomater 500g ICA",
      pris: "34,90 kr",
      bild: "Images/matvaror/Babyplommontomater.webp"
    },
    {
      namn: "Ris långkornigt 1kg Ben's Orginal",
      pris: "35,90 kr",
      bild: "Images/matvaror/Ris Ben 1kg.webp"
    },
    {
      namn: "Yoghurt Turkisk naturell 10% 100g Salakis",
      pris: "35,90 kr",
      bild: "Images/matvaror/Turkisk yogurt.webp"
    },
    {
      namn: "Apelsinjuice Nypressad 850ml Brämhults",
      pris: "46,90 kr",
      bild: "Images/matvaror/Apelsinjuice.webp"
    },
    {
      namn: "Texmex ost riven 29% 150g Arla köket®",
      pris: "27,90 kr",
      bild: "Images/matvaror/Texmex ost.webp"
    },
    {
      namn: "Grillkorv bacon&ost 59% kötthalt 480g Scan",
      pris: "25,90 kr",
      bild: "Images/matvaror/Grillkorv scan.webp"
    },
    {
      namn: "Knäckebröd sport 550g Wasa",
      pris: "22,90 kr",
      bild: "Images/matvaror/Knäckebröd sport.webp"
    },
    {
      namn: "Vaniljyoghurt päron slät 2.1% 1kg Valio",
      pris: "26,90 kr",
      bild: "Images/matvaror/Vaniljyoghurt päron.webp"
    },
    {
      namn: "Guldsalami skivad 100g Grilstad",
      pris: "25,50 kr",
      bild: "Images/matvaror/Guldsalami.webp"
    },
    {
      namn: "Knäckebröd rågi 550g Wasa",
      pris: "24,90 kr",
      bild: "Images/matvaror/Knäckebröd rågi.webp"
    },
    {
      namn: "My pizza slice ham&cheese 170g Dr.Oetker",
      pris: "17,90 kr",
      bild: "Images/matvaror/Fryspizza Dr.Oetker.webp"
    },
    {
      namn: "Handtvål fläder rabarber 300ml Bliw",
      pris: "17,90 kr",
      bild: "Images/matvaror/Handtvål.webp"
    },
  {
      namn: "Glass salted caramel 460ml Häagen dazs",
      pris: "53,90 kr",
      bild: "Images/matvaror/Glass salted caramel.webp"
    },
    {
      namn: "Smoothie vitamin blåbär hallon 850ml Brämhults",
      pris: "48,90 kr",
      bild: "Images/matvaror/Smoothie blåbär.webp"
    },
    {
      namn: "Fruktdryck hallon&svartvinbär 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER hallon.webp"
    },
    {
      namn: "Fruktdryck päron 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER päron.webp"
    }, 
    {
      namn: "Stilldryck passionfrukt 50cl MER",
      pris: "12,90 kr",
      bild: "Images/matvaror/MER passion.webp"
    },
    {
      namn: "Snabbkaffe refill lyx mörkrost 200g Nescafé",
      pris: "88,90 kr",
      bild: "Images/matvaror/Snabbkaffe.webp"
    },
    {
      namn: "Glass vanlij 460ml Häagen Dazs",
      pris: "53,90 kr",
      bild: "Images/matvaror/Glass vanilj.webp"
    },
    {
      namn: "Hårspray volume 250ml Taft Schawarzkopf",
      pris: "44,50 kr",
      bild: "Images/matvaror/Hårspray.webp"
    },
    {
      namn: "Hårmousse volume 150ml Taft Schawarzkopf",
      pris: "41,90 kr",
      bild: "Images/matvaror/Hårmousse.webp"
    },
    {
      namn: "Kassler ca 600g ICA",
      pris: "58,14 kr",
      bild: "Images/matvaror/Kassler.webp"
    },
    {
      namn: "Pulled prok med BBQ glaze 550g ICA",
      pris: "64,90 kr",
      bild: "Images/matvaror/Pulled pork.webp"
    },
    {
      namn: "Skinka strimlad rökt 180g ICA",
      pris: "21,90 kr",
      bild: "Images/matvaror/Skinka strimlad.webp"
    },
    {
      namn: "Färsk standardmjölk 3% 1L Arla Ko®",
      pris: "14,90 kr",
      bild: "Images/matvaror/Arla standardmjölk.webp"
    },
    {
      namn: "Färsk lättmjölk 0,5% 1L Arla Ko®",
      pris: "13,90 kr",
      bild: "Images/matvaror/Arla lättmjölk.webp"
    },
    {
      namn: "Kvarg mild vanilj 0,2% laktosfri 1kg Arla®",
      pris: "42,90 kr",
      bild: "Images/matvaror/Arla kvarg.webp"
    },
    {
      namn: "Chips dill 275g Estrella",
      pris: "27,90 kr",
      bild: "Images/matvaror/Chips dill.webp"
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