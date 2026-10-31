# AFROVIBE COUTURE | Site statique

Le site fonctionne sans serveur, compte client ni paiement intégré. Le panier est enregistré localement sur l'appareil et la commande s'ouvre dans WhatsApp, où le client peut vérifier son message avant l'envoi.

## Avant de publier

- Les quinze photos fournies présentent des ensembles, au prix de **27 500 FCFA chacun**. Les noms, tailles, disponibilités, descriptions et sélections sont **provisoires** : vérifiez-les et remplacez-les dans `produits.js`. Les chaussures et la montre sont encore des exemples, avec des prix et illustrations provisoires.
- Ton logo fourni est intégré dans l’en-tête, la section d’accueil et le pied de page. Les fichiers `assets/logo-afrovibe.webp`, `assets/logo-transparent.webp` et `assets/logo-monogramme.webp` en sont des versions optimisées.
- Dans `index.html`, renseignez votre compte Instagram, votre zone de livraison et vos horaires. Ajoutez le lien réel de votre compte si vous le souhaitez.
- Vérifiez les moyens de paiement et les modalités de livraison avec vos clients. Le guide des tailles invite à vous demander conseil, sans tableau de mensurations inventé.
- Une fois le contenu corrigé, supprimez dans `index.html` la ligne contenant `<div class="demo">…</div>` et les mentions « Sélection provisoire à confirmer », qui signale le catalogue d'exemple.

## Ajouter un produit

1. Placez les photos optimisées dans `assets/`, par exemple `assets/ensemble-bleu.webp`.
2. Ouvrez `produits.js`. Ajoutez un objet dans le tableau `PRODUITS`, séparé du précédent par une virgule. Exemple :

```js
{id:'ensemble-bleu', nom:'Ensemble Bleu', prix:48000,
 categorie:'vetements', sousCategorie:'ensembles',
 description:'Tunique et pantalon, coton, coupe droite.',
 tailles:['M','L','XL'], couleurs:['Bleu'],
 photos:['assets/ensemble-bleu.webp','assets/ensemble-bleu-dos.webp'],
 nouveau:true, meilleureVente:false, epuise:false}
```

3. Choisissez un `id` différent pour chaque article. Les catégories possibles sont `vetements`, `chaussures` et `montres`. Pour les vêtements, utilisez `ensembles` ou `chemises` comme `sousCategorie` ; sinon utilisez `''`. Indiquez les pointures dans `tailles` pour les chaussures, et `tailles:[]` pour les montres. Indiquez au moins une couleur et une photo. `prix` est un nombre entier en FCFA, sans espaces. `true` signifie oui et `false` signifie non.
4. Enregistrez et actualisez la page. Utilisez de préférence des fichiers WebP légers, aux noms simples sans espaces. Les images des produits se chargent progressivement.

Modifier un produit existant fonctionne de la même façon : changez directement ses champs. Une fiche en rupture doit avoir `epuise:true`. Les étiquettes et les sélections d'accueil dépendent des indicateurs `nouveau` et `meilleureVente` ; les quatre premiers produits correspondants sont affichés.

## Tester

Ouvrez `index.html` dans un navigateur récent. Pour une vérification plus fiable, utilisez un petit serveur local depuis le dossier du site, par exemple `python -m http.server 8000`, puis ouvrez `http://localhost:8000`. Testez sur téléphone : sélection de taille/couleur, panier, fermeture et réouverture, commande WhatsApp, sur-mesure et images. Le panier est propre au navigateur et à l'appareil ; effacer les données du navigateur le supprime. Les prix ne sont pas garantis ni réservés et doivent être confirmés avec le client sur WhatsApp.

## Publier gratuitement sur Cloudflare Pages

1. Décompressez l'archive. Vérifiez que `index.html`, `style.css`, `app.js`, `produits.js` et le dossier `assets` sont ensemble à la racine du dossier.
2. Dans votre tableau de bord Cloudflare, ouvrez **Workers & Pages**, créez un projet **Pages**, puis choisissez l'import direct des ressources (Direct Upload).
3. Envoyez le contenu du dossier du site ou une archive ZIP dont `index.html` se trouve bien à la racine. Aucun framework ni compilation ne sont nécessaires.
4. Publiez, ouvrez l'adresse fournie et refaites le parcours de commande sur votre téléphone. Pour une mise à jour, chargez une nouvelle version dans le même projet. L'interface Cloudflare peut évoluer.

Structure :

```
index.html        contenu et coordonnées
style.css         apparence et adaptation mobile
app.js            filtres, fiches, panier et WhatsApp
produits.js       catalogue à modifier
assets/           logo, photos et illustrations
```
