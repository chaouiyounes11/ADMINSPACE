// /*=================
// ===================
// ====EXERCICE 1=====
// ========POO========
// ===================*/
//
//
// var user = {
//
//   nom: "Chaoui",
//   prenom: "Younes",
//   paysDeResidence: "finlande",
//   age: 18,
//   moyenPaiement: "VISA",
//
//   getName: function() {
//     alert(this.nom + " " + this.prenom);
//   },
//   getYear: function() {
//     alert(2017 - this.age)
//   }
// };
//
// //user.getName();
// //user.getYear();
//
//
//
// var checking = {
//   countryOk: ["FRANCE", "BELGIQUE", "UK"],
//   paymentOk: ["VISA", " MASTERCARD", " AMEX"],
//   ageMin: 18,
//
//   getConfirmAge: function(qqn) {
//     if (qqn.age >= this.ageMin) {
//       alert("IT IS OK");
//     } else {
//       alert("TOO YOUNG");
//     }
//   },
//
//   getCountryConfirm: function(paysChecked) {
//     for (i = 0; i < this.countryOk.length; i++) {
//       if (paysChecked.paysDeResidence.toUpperCase() === this.countryOk[i]) {
//         alert("PAYS AUTORISÉ");
//       } else {
//         alert("PAYS SUSPECT");
//       }
//     }
//   },
//
//   getPaidConfirm: function(paidChecked) {
//     for (j = 0; j < this.paymentOk.length; j++) {
//       if (paidChecked.moyenPaiement.toUpperCase() === this.paymentOk[j]) {
//         alert("CARTE BANCAIRE OK. Voici la liste des CB autorisés " + this.paymentOk);
//       }
//     }
//   }
// };
//
// checking.getConfirmAge(user);
// checking.getCountryConfirm(user);
// checking.getPaidConfirm(user);
//
// /*=================
// ===================
// ====EXERCICE 2=====
// ========POO========
// ===================*/
//
// function warrior (name, attack, defence, life) {
//
//   this.name = name;
//   this.attack = attack;
//   this.defence = defence;
//   this.life = life;
//
//      this.getAttack = function(guerrier) {
//         guerrier.life -= this.attack;
//         guerrier.life += guerrier.defence;
//        console.log(guerrier.name + "'s life is " + guerrier.life);
//        if (guerrier.life <= 0) {
//          console.log(guerrier.name + " is dead");
//        }
//      };
// }
//
// function magician (name, attack, defence, life, mana) {
//   this.name = name;
//   this.attack = attack;
//   this.defence = defence;
//   this.life = life;
//   this.mana = mana;
//
//        this.getAttack = function(guerrier) {
//         guerrier.life -= this.attack;
//         guerrier.life += guerrier.defence;
//        console.log(guerrier.name + "'s life is " + guerrier.life);
//        if (guerrier.life <= 0) {
//          console.log(guerrier.name + " is dead");
//        }
//      };
//
//     this.getTreated = function (treating) {
//         treating.life += 10;
//         treating.mana -= 10;
//       console.log(treating.name + " has been treated, +10 !");
//       if (treating.mana === 30) {
//         console.log (treating.name +" has only "+ treating.mana +" mana remaining !");
//       } else if (treating.mana === 20) {
//         console.log ("Watch out !" + treating.name + " has only " + treating.mana +" mana remaining !")
//       }
//     };
// }
//
//
//
//
// var buddah = new warrior ("Buddah", 25, 10, 100);
// var fiotte = new warrior ("Fiotty", 15, 5, 100);
// var magicien = new magician ("Merlin", 25, 5, 100, 40)
// var i = 0;
//
//
//
// while (magicien.life > 0 && buddah.life > 0 && fiotte.life > 0) {
//   if (i%2 === 0) {
//     buddah.getAttack(magicien);
//     magicien.getAttack(buddah);
//     magicien.getAttack(fiotte);
//     fiotte.getAttack(magicien);
//   } if (magicien.life === 70 || magicien.life === 50 )  {
//     magicien.getTreated(magicien);
//   } i++;
// }
//
// /*while (buddah.life > 0 && fiotte.life >0) {
//   if (i%2 === 0) {
//     buddah.getAttack(fiotte);
//   } else {
//     fiotte.getAttack(buddah);
//   } i++;
// }*/
//




// /*=================
// ===================
// ====EXERCICE 3=====
// ======ESPACE=======
//===ADMINISTRATION===
// ===================
// ===================
// ===================*/

 function product (title, sentence, description) {

  this.title = title;
  this.sentence = sentence;
  this.description = description;

 }

function admin () {

  this.getValue = function () {
  var title = $("#title").val();
  var sentence = $("#sentence").val();
  var description = $("#description").val();
  var test = '<article><h2 id="cardTitle">' + title + '</h2><h4 id="cardSentence">' +
  sentence + '</h4><p id="cardDescription">' + description + '</p></article>';
  $(".affichage").append(test);
  this.getEmpty();
   };

   this.getEmpty = function () {
     $('#title').val('');
     $('#sentence').val('');
     $('#description').val('');

   };
}

var theClick = new admin ();
