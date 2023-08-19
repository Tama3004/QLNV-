var dsnv = [];
var jsonData = localStorage.getItem("DSNV");
if(jsonData != null){
    var list = JSON.parse(jsonData);
    dsnv = list.map(function(item){
        return new NhanVien(item.user,item.name,item.email,item.pass,item.date,item.luong,item.chucVu,item.time);
    })
    render(dsnv);
}
function themNV(){
    var nvien = getInfo();
    dsnv.push(nvien);
    render(dsnv);
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData)
}

function xoaNv(user){
    var index = findIndex(user,dsnv);
    dsnv.splice(index,1);
    render(dsnv);
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData)
}

function SuaNv(user){
    $("#myModal").modal("show");
    var index = findIndex(user,dsnv);
    var nv = dsnv[index];
    showInfo(nv);
}

function updateNv(){
    var nv = getInfo();
    var index = findIndex(nv.user,dsnv);
    dsnv[index] = nv;
    render(dsnv);
    var jsonData = JSON.stringify(dsnv);
    localStorage.setItem("DSNV",jsonData)
}

function findRank(){
    var fRank = document.getElementById('searchName').value;
    if(fRank == "Xuất sắc"){
        var NhanVien = dsnv.filter(dsnv => dsnv.Rank() === "Xuất sắc");
        render(NhanVien);
    }
    else if(fRank == "Giỏi"){
        var NhanVien = dsnv.filter(dsnv => dsnv.Rank() === "Giỏi");
        render(NhanVien);
    }
    else if(fRank == "Khá"){
        var NhanVien = dsnv.filter(dsnv => dsnv.Rank() === "Khá");
        render(NhanVien);
    }
    else if(fRank == "Trung bình"){
        var NhanVien = dsnv.filter(dsnv => dsnv.Rank() === "Trung bình");
        render(NhanVien);
    }
}