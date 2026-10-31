/* Les 15 ensembles fournis coûtent 27 500 FCFA. Les noms, tailles, disponibilités et sélections restent à confirmer.
   Chaussures et montres : exemples. id unique ; categorie : vetements, chaussures, montres ; sousCategorie : ensembles, chemises ou "".
   tailles vide pour les montres ; photos : chemins de vos images ; nouveau, meilleureVente, epuise : true ou false. */
const PRODUITS = [
  {
    "id": "modele-01",
    "nom": "Ensemble modèle 01",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Rose"
    ],
    "photos": [
      "assets/modele-01.webp"
    ],
    "nouveau": true,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-02",
    "nom": "Ensemble modèle 02",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Noir"
    ],
    "photos": [
      "assets/modele-02.webp"
    ],
    "nouveau": false,
    "meilleureVente": true,
    "epuise": false
  },
  {
    "id": "modele-03",
    "nom": "Ensemble modèle 03",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Noir"
    ],
    "photos": [
      "assets/modele-03.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-04",
    "nom": "Ensemble modèle 04",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Bleu clair"
    ],
    "photos": [
      "assets/modele-04.webp"
    ],
    "nouveau": true,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-05",
    "nom": "Ensemble modèle 05",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Bleu clair"
    ],
    "photos": [
      "assets/modele-05.webp"
    ],
    "nouveau": false,
    "meilleureVente": true,
    "epuise": false
  },
  {
    "id": "modele-06",
    "nom": "Ensemble modèle 06",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Marron"
    ],
    "photos": [
      "assets/modele-06.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-07",
    "nom": "Ensemble modèle 07",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Blanc"
    ],
    "photos": [
      "assets/modele-07.webp"
    ],
    "nouveau": false,
    "meilleureVente": true,
    "epuise": false
  },
  {
    "id": "modele-08",
    "nom": "Ensemble modèle 08",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Bleu"
    ],
    "photos": [
      "assets/modele-08.webp"
    ],
    "nouveau": true,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-09",
    "nom": "Ensemble modèle 09",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Blanc"
    ],
    "photos": [
      "assets/modele-09.webp"
    ],
    "nouveau": true,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-10",
    "nom": "Ensemble modèle 10",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Blanc"
    ],
    "photos": [
      "assets/modele-10.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-11",
    "nom": "Ensemble modèle 11",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Bleu clair"
    ],
    "photos": [
      "assets/modele-11.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-12",
    "nom": "Ensemble modèle 12",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Gris"
    ],
    "photos": [
      "assets/modele-12.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-13",
    "nom": "Ensemble modèle 13",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Bleu marine"
    ],
    "photos": [
      "assets/modele-13.webp"
    ],
    "nouveau": false,
    "meilleureVente": true,
    "epuise": false
  },
  {
    "id": "modele-14",
    "nom": "Ensemble modèle 14",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Blanc"
    ],
    "photos": [
      "assets/modele-14.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "modele-15",
    "nom": "Ensemble modèle 15",
    "prix": 27500,
    "categorie": "vetements",
    "sousCategorie": "ensembles",
    "description": "Ensemble tunique et pantalon. Nom du modèle, tissu, détails et tailles disponibles à confirmer auprès de la boutique.",
    "tailles": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "couleurs": [
      "Gris"
    ],
    "photos": [
      "assets/modele-15.webp"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "soulier-exemple",
    "nom": "Soulier Allure (exemple)",
    "prix": 35000,
    "categorie": "chaussures",
    "sousCategorie": "",
    "description": "Modèle et photo d’exemple, à remplacer. Matière et finitions à préciser.",
    "tailles": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46"
    ],
    "couleurs": [
      "Noir"
    ],
    "photos": [
      "assets/chaussure-exemple.svg"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  },
  {
    "id": "montre-exemple",
    "nom": "Montre Essentielle (exemple)",
    "prix": 30000,
    "categorie": "montres",
    "sousCategorie": "",
    "description": "Modèle et photo d’exemple, à remplacer. Détails à préciser.",
    "tailles": [],
    "couleurs": [
      "Noir"
    ],
    "photos": [
      "assets/montre-exemple.svg"
    ],
    "nouveau": false,
    "meilleureVente": false,
    "epuise": false
  }
];
