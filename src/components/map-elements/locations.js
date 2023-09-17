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
  warszawa: "warszawa",
  ciechanow: "ciechanów",
};

export const locations = [
  {
    type: types.biedronka,
    name: "Biedronka - Niemcewicza 26, Warszawa",
    icon: biedraLogo,
    position: [52.22195, 20.98016],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.221989,20.9805462,20.37z/data=!3m1!5s0x471ecc98b3a5bdeb:0x726ea4cb0ad828c2!4m15!1m8!3m7!1s0x471ecc9865ad972b:0xefdaeb5d6fb6453f!2sJuliana+Ursyna+Niemcewicza+26,+02-022+Warszawa!3b1!8m2!3d52.2221285!4d20.9802362!16s%2Fg%2F11c21xsn66!3m5!1s0x471ecc9858bfc351:0xe5b360dcfaaf6326!8m2!3d52.2220149!4d20.9803903!16s%2Fg%2F11b5wmbk1z?entry=ttu",
    igLink: "https://www.instagram.com/p/CuxCnuTt-VC/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Korytyńskiego 23, Warszawa",
    icon: biedraLogo,
    position: [52.203763, 20.964675],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2035639,20.9640768,19.65z/data=!4m15!1m8!3m7!1s0x471eccace4f23f3d:0x21c1aab988032e05!2sW%C5%82adys%C5%82awa+Koroty%C5%84skiego+23,+02-123+Warszawa!3b1!8m2!3d52.2038399!4d20.9647478!16s%2Fg%2F11cs7pbj_p!3m5!1s0x471eccace4f238d9:0x9ce2860878a4ae12!8m2!3d52.203761!4d20.9646522!16s%2Fg%2F11cfdpyg2?entry=ttu",
    igLink: "https://www.instagram.com/p/CuzAe-GNyTZ/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Dobosza 12, Warszawa",
    icon: biedraLogo,
    position: [52.211144454415845, 20.96641030491566],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2111457,20.9638173,17z/data=!3m2!4b1!5s0x471ecca8ca7ddf1f:0x16af639e2ed7ca25!4m6!3m5!1s0x471ecca8ca512b33:0xcef417f0f4dd0704!8m2!3d52.2111424!4d20.9663922!16s%2Fg%2F11g_0q65t?entry=ttu",
    igLink: "https://www.instagram.com/p/Cu6m-syN-AY/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Pruszkowska 4D, Warszawa",
    icon: biedraLogo,
    position: [52.201828398854644, 20.981643069551392],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2018331,20.9790676,17z/data=!4m14!1m7!3m6!1s0x471eccb5ac5e2f47:0x9d88d534bb187646!2sBiedronka!8m2!3d52.2018298!4d20.9816425!16s%2Fg%2F11cfh_yzb!3m5!1s0x471eccb5ac5e2f47:0x9d88d534bb187646!8m2!3d52.2018298!4d20.9816425!16s%2Fg%2F11cfh_yzb?entry=ttu",
    igLink: "https://www.instagram.com/p/CvCGdveID5r/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Jutrzenki 177, Warszawa",
    icon: biedraLogo,
    position: [52.20145300318825, 20.937493839591394],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2014522,20.934915,17z/data=!4m14!1m7!3m6!1s0x471934ae81e52bcf:0x8eb220488090ba50!2sBiedronka!8m2!3d52.2014489!4d20.9374899!16s%2Fg%2F1pp2vknzx!3m5!1s0x471934ae81e52bcf:0x8eb220488090ba50!8m2!3d52.2014489!4d20.9374899!16s%2Fg%2F1pp2vknzx?entry=ttu",
    igLink: "https://www.instagram.com/p/CvKlphZoTUo/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Aleja Krakowska 246, Warszawa",
    icon: biedraLogo,
    position: [52.18944673336071, 20.95857033243662],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.1894505,20.9559953,17z/data=!3m1!4b1!4m6!3m5!1s0x471933452ec0dce5:0x21bfd578bfef5acd!8m2!3d52.1894472!4d20.9585702!16s%2Fg%2F1jglw2_r4?entry=ttu",
    igLink: "https://www.instagram.com/p/CvUPGxjolDR/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Białobrzeska 6, Warszawa",
    icon: biedraLogo,
    position: [52.20871034655008, 20.969935906532847],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2087112,20.9673602,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecd34b658a539:0x3e98fd58a57b5f3c!8m2!3d52.2087079!4d20.9699351!16s%2Fg%2F11tnzyh4hh?entry=ttu",
    igLink: "https://www.instagram.com/p/CvcGVZTIUS0/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Grójecka 194, Warszawa",
    icon: biedraLogo,
    position: [52.20023118123725, 20.966428913298717],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.200231,20.9638362,17z/data=!3m2!4b1!5s0x4719334d7bad900d:0x711474423b42ad12!4m6!3m5!1s0x47193352b0955555:0x692763d813b72372!8m2!3d52.2002277!4d20.9664111!16s%2Fg%2F11g8g10x28?entry=ttu",
    igLink: "https://www.instagram.com/p/CvjxgFko5KP/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Kochanowskiego 45/47, Warszawa",
    icon: biedraLogo,
    position: [52.27009569428032, 20.938473308411936],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2700899,20.9359138,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecbb4fb695e19:0x95792c698f1b58cf!8m2!3d52.2700866!4d20.9384887!16s%2Fg%2F11b5wjn8gk?entry=ttu",
    igLink: "https://www.instagram.com/p/Cv2VyrLIhwQ/",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Dąbrowskiej 15, Warszawa",
    icon: biedraLogo,
    position: [52.273575007233056, 20.93082946890176],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2735484,20.9282661,17z/data=!3m1!4b1!4m6!3m5!1s0x471eca4a15800f69:0xcc88ed4847b06163!8m2!3d52.2735451!4d20.930841!16s%2Fg%2F12hptkp9y?entry=ttu",
    igLink: "https://www.instagram.com/p/Cv4n3zHIqP7/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Hala Kopińska - ppłk. Grzymały-Sokołowskiego 2, Warszawa",
    icon: shopIcon,
    position: [52.21832777306688, 20.97702296012556],
    googleMapsLink:
      "https://www.google.com/maps/place/Hala+Kopi%C5%84ska/@52.2183245,20.9744722,17z/data=!3m1!4b1!4m6!3m5!1s0x471eccf30d902861:0x702d014ac4db308b!8m2!3d52.2183212!4d20.9770471!16s%2Fg%2F1tlc6txq?entry=ttu",
    igLink: "https://www.instagram.com/p/CvxSKc7IQ_L/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Pabla Nerudy 1, Warszawa",
    icon: shopIcon,
    position: [52.2759938480657, 20.927240314333954],
    googleMapsLink:
      "https://www.google.com/maps/place/Pabla+Nerudy+1,+01-926+Warszawa/@52.2760028,20.9223803,17z/data=!3m1!4b1!4m10!1m2!2m1!1sPawilon+handlowy+-+Pabla+Nerudy+1,+Warszawa!3m6!1s0x471eca362f9d7f45:0xac24dc9d9dac20ed!8m2!3d52.2759996!4d20.9272512!15sCitQYXdpbG9uIGhhbmRsb3d5IC0gUGFibGEgTmVydWR5IDEsIFdhcnN6YXdhkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11bw42b4ym?entry=ttu",
    igLink: "https://www.instagram.com/p/CwFvsH2I9N9/?img_index=1",
  },
  {
    type: types.sklep,
    name: "E. Leclerc -  Aspekt 79, Warszawa",
    icon: shopIcon,
    position: [52.27801458405868, 20.931062512981473],
    googleMapsLink:
      "https://www.google.com/maps/place/E.LECLERC+Bielany/@52.2780085,20.9285292,17z/data=!3m1!4b1!4m6!3m5!1s0x471eca36857848d3:0x506a0611a45cfdc1!8m2!3d52.2780052!4d20.9311041!16s%2Fg%2F1hc4nvkjj?entry=ttu",
    igLink: "https://www.instagram.com/p/CwSYwcCOyLf/?img_index=1",
  },
  {
    type: types.sklep,
    name: "FRAC - Karolkowa 30, Warszawa",
    icon: shopIcon,
    position: [52.231668685271764, 20.977970641918205],
    googleMapsLink:
      "https://www.google.com/maps/place/FRAC/@52.2321244,20.9752507,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecc9d3192632f:0x438fba7592671f33!8m2!3d52.2321211!4d20.9778256!16s%2Fg%2F11ckx2jwtp?entry=ttu",
    igLink: "https://www.instagram.com/p/Cwcw9uWoZ89/?img_index=1",
  },
  {
    type: types.biedronka,
    name: "Biedronka - Powstańców Śląskich 9, Warszawa",
    icon: biedraLogo,
    position: [52.22485147922153, 20.91585404750283],
    googleMapsLink:
      "https://www.google.com/maps/place/Biedronka/@52.2248388,20.9132875,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecb24d671a487:0x1e2f28764a572021!8m2!3d52.2248355!4d20.9158624!16s%2Fg%2F1hm4gk6td?entry=ttu",
    igLink: "https://www.instagram.com/p/CwnF3o6Ir0_/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Bliska 12, Warszawa",
    icon: shopIcon,
    position: [52.24924410415787, 21.05708539092222],
    googleMapsLink:
      "https://www.google.com/maps/place/Bliska+12,+03-804+Warszawa/@52.2492517,21.0522161,17z/data=!3m1!4b1!4m10!1m2!2m1!1sPawilon+handlowy+-+Bliska+12,+Warszawa!3m6!1s0x471ecc4acf74c82d:0xf5c57d03622c500!8m2!3d52.2492485!4d21.057087!15sCiZQYXdpbG9uIGhhbmRsb3d5IC0gQmxpc2thIDEyLCBXYXJzemF3YZIBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F11crqq7npx?entry=ttu",
    igLink: "https://www.instagram.com/p/CwzU0NgorpG/?img_index=1",
  },
  {
    type: types.pawilon,
    name: "Pawilon handlowy - Kościuszki 14, Ciechanów",
    icon: shopIcon,
    position: [52.87632170227678, 20.617351118244553],
    googleMapsLink:
      "https://www.google.com/maps/place/Plac+Tadeusza+Ko%C5%9Bciuszki+14,+06-400+Ciechan%C3%B3w/@52.8763361,20.6123664,17z/data=!3m1!4b1!4m10!1m2!2m1!1sPawilon+handlowy+-+Ko%C5%9Bciuszki+14,+Ciechan%C3%B3w!3m6!1s0x471c2ebafc1dfbef:0x1b23e5a548506ca4!8m2!3d52.876333!4d20.6172373!15sCi1QYXdpbG9uIGhhbmRsb3d5IC0gS2_Fm2NpdXN6a2kgMTQsIENpZWNoYW7Ds3eSARBnZW9jb2RlZF9hZGRyZXNz4AEA!16s%2Fg%2F11h464647h?entry=ttu",
    igLink: "https://www.instagram.com/p/CxAcQzlIilA/?img_index=1",
  },
  {
    type: types.centrumHandlowe,
    name: "Centrum Handlowe Panorama - Wincentego Witosa 31, Warszawa",
    icon: shopIcon,
    position: [52.19707519093376, 21.049090797734717],
    googleMapsLink:
      "https://www.google.com/maps/place/Centrum+Handlowe+Panorama/@52.1972061,21.0443248,17z/data=!3m1!4b1!4m6!3m5!1s0x471ecd381fe7d0e1:0xa1ec3a2efb6ea095!8m2!3d52.1972029!4d21.0491957!16s%2Fg%2F1tgx5byl?entry=ttu",
    igLink: "https://www.instagram.com/p/CxN4uoBIUfK/?img_index=1",
  },
];
