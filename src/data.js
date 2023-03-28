export const data = [
  {
    id: 1,
    name: "colchon floustar",
    price: 123.000,
    type: "colchon",
    size: "queen",
    estructure: "espuma alta densidad",
    high: "20cm",
    weight: "80kg",
    sensation: "suave",
    tamanio: "140x190",
    img: card1
  },
  {
    id: 2,
    name: " colchon extra",
    price: 150.000,
    type: "colchon",
    size: "1 plaza",
    estructure: "espuma media densidad",
    high: "18cm",
    weight: "65kg",
    sensation: "firme",
    tamanio: "80x190",
    img: card2
  },
  {
    id: 3,
    name: "lujo",
    price: 160.0,
    type: "sommier",
    size: "2 plazas",
    estructure: "espuma alta densidad",
    high: "26cm",
    weight: "80kg",
    sensation: "suave",
    tamanio: "160x200",
    img: card3
  },
  {
    id: 4,
    name: "rockstar",
    price: 170.0,
    type: "sommier",
    size: "King",
    estructure: "espuma alta densidad",
    high: "24/28cm",
    weight: "110kg",
    sensation: "firme",
    tamanio: "180x200",
    img: card4
  },
  {
    id: 5,
    name: "chenille rustic",
    price: 100.0,
    type: "sillon",
    size: "dos cuerpos",
    estructure: "tela anti desgarro",
    high: "80cm",
    weight: "90kg",
    sensation: "firme",
    img: card5
  },
  {
    id: 6,
    name: "almohada",
    price: 70000,
    type: "accesorio",
    estructure: "almohada con memoria",
    weight: "80kg",
    sensation: "suave",
    img: card6
  },
  {
    id: 7,
    name: "fitito",
    price: 300.0,
    type: "colchon",
    size: "1 plaza y media",
    estructure: "espuma alta densidad",
    high: "20cm",
    weight: "110kg",
    sensation: "suave",
    img: card7
  },
  {
    id: 8,
    name: "respaldo suavestar",
    price: 334000,
    type: "accesorios",
    estructure: "respaldo firme",
    high: "50cm",
    weight: "80kg",
    sensation: "firme",
    img: card8

  },
];
import card1 from "./assets/imagenes/colchon.png"
import card2 from "./assets/imagenes/colchon1.png"
import card3 from "./assets/imagenes/sommier.png"
import card4 from "./assets/imagenes/sommier2.png"
import card5 from "./assets/imagenes/sillon.png"
import card6 from "./assets/imagenes/almohadas.png"
import card7 from "./assets/imagenes/colchon2.png"
import card8 from "./assets/imagenes/respaldo.png"
import fotoSommier from "./assets/imagenes/cat-sommier-01-03.png";
import fotoColchones from "./assets/imagenes/categoria-colchones.png";
import fotoSillones from "./assets/imagenes/v2.png";
import fotoAlmohadas from "./assets/imagenes/categoria-almohadas2x1.png";

export const category = [
  {
    title: "Sommier",
    img: fotoSommier,
    link: "/sommier",
  },
  {
    title: "Colchones",
    img: fotoColchones,
    link: "/colchones",
  },
  {
    title: "Sillones",
    img: fotoSillones,
    link: "/sillones",
  },
  {
    title: "Almohadas",
    img: fotoAlmohadas,
    link: "/almohadas",
  },
];
