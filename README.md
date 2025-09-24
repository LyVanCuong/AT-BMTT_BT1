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
1. Caesar
   - tên gọi: Caesar cipher (mã của Julius Caesar): dịch vòng các chữ cái theo một dịch chuyển k (shift)
   - Thuật toán:
      + Mã hóa: E(p) = (p + k) mod 26
      + Giải mã: D(c) = (c - k) mod 26
