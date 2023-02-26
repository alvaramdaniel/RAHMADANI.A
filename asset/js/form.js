function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;

  if (name == "") {
    alert("Isi nama anda dengan benar");
  } else if (email == "") {
    alert("Isi email anda dengan benar");
  } else if (phone == "") {
    alert(" Isi nomor anda dengan benar ");
  } else if (subject == "") {
    alert(" silahkan masukan subject");
  } else if (description == "") {
    alert("anda harus memasukan description");
  }

  const defaultEmail = "hi.Danialvaro001@gmail.com";

  let mailTo = document.createElement("a");
  mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${description} tolong hubungin saya ${phone}`;
  mailTo.click();

  let audience = {
    name,
    email,
    phone,
    subject,
    description,
  };

  console.log(audience);
}
