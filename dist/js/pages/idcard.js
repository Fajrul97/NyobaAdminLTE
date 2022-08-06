function addInput(){

    const nama = document.getElementById("input-nama").value;
    const jabatan = document.getElementById("input-jabatan").value;
    const isiKartu = "<div class=\"col-sm-4\">\n" +
    "        <button class=\"kartu\">\n" +
    "            <div class=\"baris clearfix\">\n" +
    "              <div class=\"kiri gede\">0896 0374 4668</div>\n" +
    "              <div class=\"kanan\"><p><span class=\"gede\">P</span>rodemy Gen <span class=\"gede\">10</span><p><span class=\"sed tanpa-spasi\">P</span><span class=\"kecil tanpa-spasi\">ro </span><span class=\"sed tanpa-spasi\">S</span><span class=\"kecil tanpa-spasi\">igmaka </span><span class=\"sed tanpa-spasi\">M</span><span class=\"kecil tanpa-spasi\">andiri</span></p></div>\n" +
    "           </div>\n" +
    "           <div class=\"baris\">\n" +
    "              <p id=\"nama-kartu\"><span class=\"gede\">" + nama + " </span></p>\n" +
    "              <p id=\"nama-jabatan\"><span class=\"gede\">" + jabatan + " </span></p>\n" +
    "          </div>\n" +
    "          <div class=\"baris\">\n" +
    "              <p><span class=\"sed\">M</span><span class=\"kecil\">ampang </span><span class=\"sed\">P</span><span class=\"kecil\">rapatan, </span><span class=\"sed\">J</span><span class=\"kecil\">akarta </span><span class=\"sed\">S</span><span class=\"kecil\">elatan, </span><span class=\"sed\">I</span><span class=\"kecil\">bukota </span><span class=\"sed\">J</span><span class=\"kecil\">akarta </span><span class=\"sed\">12790</span>\n" +
    "              </p>\n" +
    "         </div>\n" +
    "        </button>\n" +
    "      </div>";

    // document.getElementById("nama-kartu").innerHTML = nama;
    // document.getElementById("nama-jabatan").innerHTML = jabatan;
    // mendapatkan element list input

    let listInput = document.getElementById("kartu")
    let input = listInput.innerHTML + isiKartu
    listInput.innerHTML =  input
  }

  function addInput2(){
    //var nama = document.getElementById("input-nama").value;
    //var jabatan = document.getElementById("input-jabatan").value;

    // document.getElementById("nama-kartu").innerHTML = nama;
    // document.getElementById("nama-jabatan").innerHTML = jabatan;
    // mendapatkan element list input

    let list = [
      {nama : "Fajrul" , jabatan : "IT Consultant" } , {nama : "kamil" , jabatan : "IT Consultant"}
    ]

    for (let i = 0; i<list.length; i++){

    const isiKartu2 = "<div class=\"col-sm-4\">\n" +
    "        <button class=\"kartu\">\n" +
    "            <div class=\"baris clearfix\">\n" +
    "              <div class=\"kiri gede\">0896 0374 4668</div>\n" +
    "              <div class=\"kanan\"><p><span class=\"gede\">P</span>rodemy Gen <span class=\"gede\">10</span><p><span class=\"sed tanpa-spasi\">P</span><span class=\"kecil tanpa-spasi\">ro </span><span class=\"sed tanpa-spasi\">S</span><span class=\"kecil tanpa-spasi\">igmaka </span><span class=\"sed tanpa-spasi\">M</span><span class=\"kecil tanpa-spasi\">andiri</span></p></div>\n" +
    "           </div>\n" +
    "           <div class=\"baris\">\n" +
    "              <p id=\"nama-kartu\"><span class=\"gede\">" + list[i].nama + " </span></p>\n" +
    "              <p id=\"nama-jabatan\"><span class=\"gede\">" + list[i].jabatan + " </span></p>\n" +
    "          </div>\n" +
    "          <div class=\"baris\">\n" +
    "              <p><span class=\"sed\">M</span><span class=\"kecil\">ampang </span><span class=\"sed\">P</span><span class=\"kecil\">rapatan, </span><span class=\"sed\">J</span><span class=\"kecil\">akarta </span><span class=\"sed\">S</span><span class=\"kecil\">elatan, </span><span class=\"sed\">I</span><span class=\"kecil\">bukota </span><span class=\"sed\">J</span><span class=\"kecil\">akarta </span><span class=\"sed\">12790</span>\n" +
    "              </p>\n" +
    "         </div>\n" +
    "        </button>\n" +
    "      </div>" 

    let listInput = document.getElementById("kartu2")
    let input = listInput.innerHTML + isiKartu2
    listInput.innerHTML =  input
    }

  }