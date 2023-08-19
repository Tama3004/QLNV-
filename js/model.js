function NhanVien(_user,_name,_email,_pass,_date,_luong,_chucVu,_time){
this.user = _user;
this.name = _name;
this.email = _email
this.pass = _pass;
this.date = _date;
this.luong = _luong;
this.chucVu = _chucVu;
this.time = _time;
this.tongLuong = function(){
    if(this.chucVu == 1){
        return this.luong * 3
    }
    else if(this.chucVu == 2){
        return this.luong * 2
    }
    else{
        return this.luong;
    }
}
this.Rank = function(){
    if(this.time >= 192){
        return "Xuất sắc"
    }
    else if(this.time >= 176){
        return "Giỏi";
    }
    else if(this.time >= 160){
        return "Khá";
    }
    else{
        return "Trung bình";
    }
}
}