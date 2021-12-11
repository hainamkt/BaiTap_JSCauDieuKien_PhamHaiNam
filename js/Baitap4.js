/** Bài tập 4
 * Khối 1: Input
 * 3 cạnh của tam giác
 * a (num)
 * b (num)
 * c (num)
 * 
 * Khối 2:
 * b1: lấy giá trị từ form
 * b2: xác định điều kiện
 *     if a == b && b == c && c == a -> tam giác đều
 *     else if a == b || b == c || c == a -> tam giác cân
 *     else if == b^2 + c^2 || b^2 == a^2 + c^2 || c^2 == b^2 + a^2 -> tam giác vuông
 *     else -> Loại tam giác khác
 *      
 * Khối 3: Output
 * Xuất ra loại tam giác (cân, đều, vuông, khác)
 * 
 */

function timTamGiac(){
    var a = parseInt(document.getElementById('inpCanhA').value);
    var b = parseInt(document.getElementById('inpCanhB').value);
    var c = parseInt(document.getElementById('inpCanhC').value);

    if (a == b && b == c && c == a ){
        document.getElementById('txtTamGiac').innerHTML = 'Đây là tam giác đều';
    }
    else if (a == b || b == c || c == a){
        document.getElementById('txtTamGiac').innerHTML = 'Đây là  tam giác cân';
    }
    else if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == b*b + a*a){
        document.getElementById('txtTamGiac').innerHTML = 'Đây là tam giác vuông';
    }
    else{
        document.getElementById('txtTamGiac').innerHTML = 'Một loại tam giác nào đó';
    }
}