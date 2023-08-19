function render(dsnv){
    var contentHTML = "";
    for(var i = 0; i < dsnv.length; i++){
        var data = dsnv[i];
        var contentTr = `<tr>
        <td>${data.user}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.date}</td>
        <td>${data.chucVu}</td>
        <td>${data.tongLuong()}</td>
        <td>${data.Rank()}</td>
        <td>
        <button class="btn btn-danger" onclick="xoaNv('${data.user}')">Xoa</button>
        <button class="btn btn-success" onclick="SuaNv('${data.user}')">Sua</button>
        </td>
        </tr>`
        contentHTML = contentHTML + contentTr;
    }
    document.getElementById('tableDanhSach').innerHTML = contentHTML;
}

function getInfo(){
    var _user = document.getElementById('tknv').value;
    var _name = document.getElementById('name').value;
    var _email = document.getElementById('email').value;
    var _pass = document.getElementById('password').value;
    var _date = document.getElementById('datepicker').value;
    var _luong = document.getElementById('luongCB').value*1;
    var _chucVu = document.getElementById('chucvu').value;
    var _time = document.getElementById('gioLam').value*1;
    return new NhanVien(_user,_name,_email,_pass,_date,_luong,_chucVu,_time);
}

function showInfo(nv){
    document.getElementById('tknv').value = nv.user;
    document.getElementById('name').value = nv.name;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.pass;
    document.getElementById('datepicker').value = nv.date;
    document.getElementById('luongCB').value = nv.luong;
    document.getElementById('chucvu').value = nv.chucVu;
    document.getElementById('gioLam').value = nv.time;
}

function findIndex(user,dsnv){
    return dsnv.findIndex(function(nv){
        return nv.user == user;
    })
}
