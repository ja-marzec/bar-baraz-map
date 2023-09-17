import L from "leaflet";

const biedraLogo = L.icon({
  iconSize: [10, 30],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "/biedra-small-neo.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});
const shopIcon = L.icon({
  iconSize: [10, 30],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "/shop-small-neo.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

export const types = {
  biedronka: "biedronka",
  pawilon: "pawilon",
  sklep: "sklep",
  centrumHandlowe: "centrumHandlowe",
};

export const cities = {
    warszawa: 'warszawa',
    ciechanow: 'ciechanów',
};

export const locations = [
  {
    type: types.biedronka,
    name: "Biedronka - Niemcewicza 26, Warszawa",
    icon: biedraLogo,
    position: [52.22195, 20.98016],
    igLink: "https://www.instagram.com/p/CuxCnuTt-VC/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Korytyńskiego 23, Warszawa",
    icon: biedraLogo,
    position: [52.203763, 20.964675],
    igLink: "https://www.instagram.com/p/CuzAe-GNyTZ/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Dobosza 12, Warszawa",
    icon: biedraLogo,
    position: [52.211144454415845, 20.96641030491566],
    igLink: "https://www.instagram.com/p/Cu6m-syN-AY/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Pruszkowska 4D, Warszawa ",
    icon: biedraLogo,
    position: [52.201828398854644, 20.981643069551392],
    igLink: "https://www.instagram.com/p/CvCGdveID5r/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Jutrzenki 177, Warszawa",
    icon: biedraLogo,
    position: [52.20145300318825, 20.937493839591394],
    igLink: "https://www.instagram.com/p/CvKlphZoTUo/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Aleja Krakowska 246, Warszawa ",
    icon: biedraLogo,
    position: [52.18944673336071, 20.95857033243662],
    igLink: "https://www.instagram.com/p/CvUPGxjolDR/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka -  Białobrzeska 6, Warszawa",
    icon: biedraLogo,
    position: [52.20871034655008, 20.969935906532847],
    igLink: "https://www.instagram.com/p/CvcGVZTIUS0/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Grójecka 194, Warszawa",
    icon: biedraLogo,
    position: [52.20023118123725, 20.966428913298717],
    igLink: "https://www.instagram.com/p/CvjxgFko5KP/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Kochanowskiego 45/47, Warszawa",
    icon: biedraLogo,
    position: [52.27009569428032, 20.938473308411936],
    igLink: "https://www.instagram.com/p/Cv2VyrLIhwQ/",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Dąbrowskiej 15, Warszawa",
    icon: biedraLogo,
    position: [52.273575007233056, 20.93082946890176],
    igLink: "https://www.instagram.com/p/Cv4n3zHIqP7/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Hala Kopińska - ppłk. Grzymały-Sokołowskiego 2, Warszawa",
    icon: shopIcon,
    position: [52.21832777306688, 20.97702296012556],
    igLink: "https://www.instagram.com/p/CvxSKc7IQ_L/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Pabla Nerudy 1, Warszawa",
    icon: shopIcon,
    position: [52.2759938480657, 20.927240314333954],
    igLink: "https://www.instagram.com/p/CwFvsH2I9N9/?img_index=1",
  },
  {
    type: types.sklep,
    name: "E. Leclerc -  Aspekt 79, Warszawa",
    icon: shopIcon,
    position: [52.27801458405868, 20.931062512981473],
    igLink: "https://www.instagram.com/p/CwSYwcCOyLf/?img_index=1",
  },
  {
    type: types.sklep,
    name: "FRAC - Karolkowa 30, Warszawa",
    icon: shopIcon,
    position: [52.231668685271764, 20.977970641918205],
    igLink: "https://www.instagram.com/p/Cwcw9uWoZ89/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Powstańców Śląskich 9, Warszawa",
    icon: shopIcon,
    position: [52.22485147922153, 20.91585404750283],
    igLink: "https://www.instagram.com/p/CwnF3o6Ir0_/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Bliska 12, Warszawa",
    icon: shopIcon,
    position: [52.24924410415787, 21.05708539092222],
    igLink: "https://www.instagram.com/p/CwzU0NgorpG/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Kościuszki 14, Ciechanów",
    icon: shopIcon,
    position: [52.87632170227678, 20.617351118244553],
    igLink: "https://www.instagram.com/p/CxAcQzlIilA/?img_index=1",
  },
  {
    type: types.centrumHandlowe,
    name: "Centrum Handlowe Panorama - Wincentego Witosa 31, Warszawa",
    icon: shopIcon,
    position: [52.19707519093376, 21.049090797734717],
    igLink: "https://www.instagram.com/p/CxN4uoBIUfK/?img_index=1",
  },
];
