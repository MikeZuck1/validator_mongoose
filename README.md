# Exercices – Express + Mongoose + Validation

## Exercice 1 – Création et validation d’un chapitre

### Objectif :
Créer une route `POST /chapitres` qui permet d’ajouter un chapitre, en utilisant un **schéma Mongoose** avec des **validateurs**, y compris un **validateur personnalisé**.

---

### Énoncé :

1. Crée un **Schéma Mongoose** `Chapitre` avec les champs suivants :
   - `titre` : *string*, requis, minimum 3 caractères
   - `contenu` : *string*, requis
   - `numero` : *number*, requis, positif, **unique par livre** (via validateur personnalisé)
   - `livreId` : *ObjectId*, requis

2. Implémente un **validateur personnalisé** sur `numero` pour s’assurer qu’il n’existe pas déjà pour un même `bookId`.

3. Crée une **route `POST /chapitres`** dans Express pour créer un chapitre.

4. Utilise un **try/catch** pour gérer les erreurs de validation Mongoose et retourne un code **400** avec un message d’erreur lisible.

---

### Exemple de corps de requête :

```json
{
  "titre": "L'éveil",
  "contenu": "Le personnage principal se réveille...",
  "numero": 1,
  "livreId": "66a123456789abc123456789"
}