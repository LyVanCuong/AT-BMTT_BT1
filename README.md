**BÀI TẬP 1:**
**TÌM HIỂU CÁC PHƯƠNG PHÁP MÃ HOÁ CỔ ĐIỂN**
- Caesar
- Affine
- Hoán vị
- Vigenère
- Playfair
  
**  Với mỗi phương pháp, hãy tìm hiểu:**
- Tên gọi
- Thuật toán mã hoá, thuật toán giải mã
- Không gian khóa
- Cách phá mã (mà không cần khoá)
- Cài đặt thuật toán mã hoá và giải mã bằng code C++ và bằng html+css+javascript

-------------------------------------------------------------------------------------------------------------
**1. Caesar**
  - Tên gọi: Caesar cipher (mã của Julius Caesar): dịch vòng các chữ cái theo một dịch chuyển k (shift)
  - Thuật toán:
      + Mã hóa: E(p) = (p + k) mod 26
      + Giải mã: D(c) = (c - k) mod 26
  - Không gian khóa: 26 khả năng
  - Cách phá (không cần khóa)
      + Brute force: thử 26 giá trị k.
      + Phân tích tần suất: so sánh tần suất chữ cái -> khớp E -> suy k.
  - Kết quả mã hóa và giải mã ( hình ảnh):

**2. Afine**
  - Tên gọi: Affine cipher: biến đổi affine trên modular 26
  - Thuật toán:
      + Mã hóa: E(p) = (a*p + b) mod 26
      + Giải mã: D(c) = a^{-1} * (c - b) mod 26
  - Không gian mã hóa:
      + a có φ(26)=12 giá trị (1,3,5,7,9,11,15,17,19,21,23,25)
      + b có 26 giá trị → tổng 12*26 = 312 cặp (a,b).
  - Cách phá (không cần khóa):
      + Brute force dùng 312 cặp.
      + Phân tích tần suất: với số lượng lớn văn bản, suy a,b bằng cách so khớp tần suất.
  - Kết quả mã hóa và giải mã ( hình ảnh):
  - 
**3. Hoán Vị:**
  - Tên gọi: Permutation cipher (hoán vị chữ cái) — thường là monoalphabetic substitution defined by a permutation of alphabet
  - Thuật toán:
      + Chuẩn bị một bảng ánh xạ 26 chữ cái → khóa là một hoán vị của A..Z.
      + Mã hóa: thay mỗi chữ cái p bằng mapping[p].
      + Giải mã: dùng mapping ngược.
  - Không gian khóa: 26! (~4.03e26) — cực lớn.
  - Cách phá (không cần khóa):
      + Phân tích tần suất: đây là phương pháp mạnh nhất để phá substitution monoalphabetic: dùng tần suất chữ cái, bigram/trigram, phân tích mẫu từ, known plaintext.
      + Hill-climbing / simulated annealing: thuật toán tối ưu hóa trên không gian hoán vị với hàm mục tiêu là độ tương đồng tần suất n-gram.
  - Kết quả mã hóa và giải mã ( hình ảnh):

**4. Vigenère**
  - Tên gọi: Vigenère cipher — polyalphabetic substitution dùng khóa chữ.
  - Thuật toán:
      + Khóa: chuỗi chữ cái K = k0 k1 ... k(m-1).
      + Mã hóa: E(p_i) = (p_i + k_{i mod m}) mod 26
      + Giải mã: D(c_i) = (c_i - k_{i mod m}) mod 26
  - Không gian khóa: Nếu khóa dài m: 26^m. Nếu khóa có độ dài không biết, không gian lớn.
  - Cách phá (không cần khóa):
    + Kasiski test: tìm khoảng cách giữa các mẫu lặp lại để ước lượng độ dài khóa m.
    + Friedman test: dùng chỉ số tương đồng để ước lượng m.
    + Khi biết m → phân chia văn bản thành m dãy, mỗi dãy là Caesar cipher → phá bằng phân tích tần suất / xác suất.
  - Kết quả mã hóa và giải mã ( hình ảnh):
    
**5. PlayFair**
  - Tên gọi: Playfair cipher — mã hai chữ một (digraph cipher) dùng ma trận 5×5.
  - Quy ước riêng của thuật toán PlayFair:
      + Thông thường gộp J vào I (hoặc bỏ Q) để được 25 chữ cái.
      + Chia văn bản thành cặp (digraph). Nếu một cặp có hai chữ cái giống nhau thì chèn ký tự filler (thường là X) giữa chúng. Nếu chữ lẻ thì padding X
  - Thuật toán:
      + Xây ma trận 5×5 từ khóa (ghi các chữ khóa không lặp, rồi các chữ cái còn lại).
      + Với digraph (a,b):  
      . Nếu a và b cùng hàng → thay mỗi chữ bằng chữ bên phải tiếp theo (mã hóa) / trái (giải mã).
      . Nếu cùng cột → thay bằng chữ bên dưới (mã hóa) / trên (giải mã).
      . Nếu khác hàng/cột → thay bằng 2 chữ ở hàng tương ứng và cột giao nhau (hình chữ nhật): a -> (row_a, col_b), b -> (row_b, col_a).
  - Không gian khóa: Ma trận 5×5 với 25 chữ cái → số khóa ~ 25! / (số cấu hình tương đương...) rất lớn.
  - Cách phá (không cần khóa):
      + Phân tích digram (tần suất cặp chữ): Playfair làm thay đổi phân bố digram nên dùng phân tích digram + heuristics.
      + Hill-climbing: tối ưu ma trận khoá để tăng likelihood (cách tương tự substitution nhưng dùng digram).
      + Known plaintext attacks: nếu biết một phần plaintext, suy ma trận.
  - Kết quả mã hóa và giải mã ( hình ảnh):
