let name = prompt("Adınız nedir");
let age = Number(prompt("Yaşınız nedir?"));
let work = confirm("Çalışıyor musunuz?");
let role = prompt("Rolünüz nedir?");

let resultAge;
let resultRole;

if (age < 18) {
  resultAge = "Reşit değil";
}

else if ((age >= 18 && age <= 65) && work == true) {
  resultAge = "Çalışma çağında";
}

else if ((age >= 18 && age <= 65) && work == false) {
  resultAge = "Çalışma çağında ama çalışmıyor";
}

else if (age > 65) {
  resultAge = "Emekli";
}


switch (role) {

  case "admin":
    resultRole = "Tüm yetkilere sahipsiniz.";
    break;

  case "editor":
    resultRole = "İçerik düzenleyebilirsiniz.";
    break;

  case "user":
    resultRole = "Sadece görüntüleme yetkiniz var.";
    break;

  default:
    resultRole = "Geçersiz rol";
}

console.log(`
  Adınız : ${name}
  Yaşınız : ${age}
  Çalışma durumunuz : ${resultAge}
  Rol bilginiz : ${resultRole}`);

