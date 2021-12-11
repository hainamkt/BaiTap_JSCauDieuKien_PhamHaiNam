/** Bài tập 1
 * Khối 1: Input
 * a (num)
 * b (num)
 * c (num)
 * 
 * Khối 2:
 * b1: lấy giá trị từ form
 * b2: xác định điều kiện
 *     if (a != b && b != c && c != a)
 *        if (a > b)
 *           if (b > c) -> c < b < a  
 *           else if (a > c) -> b < c < a
 *           else -> b < a < c
 *        else if (b > c)
 *           if (a > c) -> c < a < b
 *           else -> a < c < b
 *        else -> a < b < c
 *     else
 *        -> Không xác định
 * 
 * Khối 3: Output
 * Xuất 3 số theo thứ tự tăng dần
 */

function phepSoSanh(){
    var a = parseInt(document.getElementById('inpNumber1').value);
    var b = parseInt(document.getElementById('inpNumber2').value);
    var c = parseInt(document.getElementById('inpNumber3').value);

    if (a != b && b != c && c != a){
        if (a > b){
            if (b > c){
                document.getElementById('txtSapXep').innerHTML = c + ' < ' + b + ' < ' + a;
            }
            else if (a > c){
                document.getElementById('txtSapXep').innerHTML = b + ' < ' + c + ' < ' + a;
            }
            else{
                document.getElementById('txtSapXep').innerHTML = b + ' < ' + a + ' < ' + c;
            }
        }
        else if (b > c){
            if (a > c){
                document.getElementById('txtSapXep').innerHTML = c + ' < ' + a + ' < ' + b;
            }
            else{
                document.getElementById('txtSapXep').innerHTML = a + ' < ' + c + ' < ' + b;
            }
        }
        else{
            document.getElementById('txtSapXep').innerHTML = a + ' < ' + b + ' < ' + c;
        }
    }
    else{
        alert('Nhập số không hợp lệ');
    }
}


/** Bài tập 2
 * Khối 1: Input
 * thanhVien (người được chọn)
 * bo (Bố)
 * me (Mẹ)
 * anhTrai (Anh Trai)
 * emGai (Em Gái)
 * 
 * Khối 2:
 * b1: lấy giá trị từ form
 * b2: xác định điều kiện
 *     if thanhVien == bo -> Xin chào Bố!
 *     else if thanhVien == me -> Xin chào Mẹ!
 *     else if thanhVien == anhTrai -> Xin chào Anh Trai!
 *     else if thanhVien == emGai -> Xin chào Em Gái!
 *     else -> Không xác định
 * 
 * Khối 3: Output
 * Xuất lời chào phù hợp cho từng thành viên
 */

function phepChaoHoi(){
    var thanhVien = document.getElementById('chonThanhVien').value;
    var bo = document.getElementById('inpBo').value;
    var me = document.getElementById('inpMe').value;
    var anhTrai = document.getElementById('inpAnhTrai').value;
    var emGai = document.getElementById('inpEmGai').value;

    if (thanhVien == bo){
        document.getElementById('txtLoiChao').innerHTML = 'Xin chào Bố!';
    }
    else if (thanhVien == me){
        document.getElementById('txtLoiChao').innerHTML = 'Xin chào Mẹ!';
    }
    else if (thanhVien == anhTrai){
        document.getElementById('txtLoiChao').innerHTML = 'Xin chào Anh Trai!';
    }
    else if (thanhVien == emGai){
        document.getElementById('txtLoiChao').innerHTML = 'Xin chào Em Gái!';
    }
    else{
        document.getElementById('txtLoiChao').innerHTML = 'Cho tôi biết bạn là ai nào?';
    }
}

/** Bài tập 3
 * Khối 1: Input
 * x (num)
 * y (num)
 * z (num)
 * soDuX (số dư x)
 * soDuY (số dư y)
 * soDuZ (số dư z)
 * soChan
 * soLe
 * 
 * Khối 2:
 * b1: lấy giá trị từ form
 * b2: xác định điều kiện
 *     soDuX = x%2
 *     nếu soDuX == 0 -> soChan++
 *     soDuY = y%2
 *     nếu soDuY == 0 -> soChan++
 *     soDuZ = z%2
 *     nếu soDuZ == 0 -> soChan++
 *     soLe = 3 - soChan
 * 
 * Khối 3: Output
 * Xuất số chẵn, số lẻ
 */
function timChanLe(){
    var x = parseInt(document.getElementById('inpNumberX').value);
    var y = parseInt(document.getElementById('inpNumberY').value);
    var z = parseInt(document.getElementById('inpNumberZ').value);
    var soChan = 0;
    var soLe = 0;

    var soDuX = x%2;
    if (soDuX == 0){
        soChan++;
    }
    var soDuY = y%2;
    if (soDuY == 0){
        soChan++;
    }
    var soDuZ = z%2;
    if (soDuZ == 0){
        soChan++;
    }

    soLe = 3 - soChan;
    console.log(soChan, soLe);
    document.getElementById('txtChiaSo').innerHTML = 'Có ' + soChan + ' số chẵn, ' + soLe + ' số lẻ';
}

