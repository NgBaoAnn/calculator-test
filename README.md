# 🧮 ĐỒ ÁN KIỂM THỬ PHẦN MỀM: BASIC CALCULATOR (TESTSHEEPNZ)

> **Môn học**: Kiểm thử và Đảm bảo Chất lượng Phần mềm (KCPM)  
> **Ứng dụng mục tiêu**: [https://testsheepnz.github.io/BasicCalculator.html](https://testsheepnz.github.io/BasicCalculator.html)  
> **Quy mô thực hiện**: Nhóm 4 thành viên  

---

## 📖 GIỚI THIỆU DỰ ÁN

Dự án này tập trung vào việc thiết kế, xây dựng kịch bản kiểm thử (Test Design) và thực hiện kiểm thử chức năng (Functional Testing), kiểm thử biên (Boundary Value Analysis), kiểm thử giao diện & sự kiện (UI/Event Testing) và kiểm thử đối sánh bắt lỗi (Bug Hunting Matrix) trên trang web **Basic Calculator**.

Hệ thống cung cấp một bản **Prototype** (hoạt động chuẩn xác) và 9 phiên bản lỗi có chủ đích (**Builds 1 đến 9**), là môi trường lý tưởng để rèn luyện kỹ năng kiểm thử phần mềm chuyên nghiệp.

---

## 👥 PHÂN CHIA NHIỆM VỤ NHÓM 4 NGƯỜI

| Thành viên | Module phụ trách | Trọng tâm kiểm thử | Tài liệu chi tiết |
| :--- | :--- | :--- | :--- |
| **Thành viên 1** | **Module 1**: Phép tính Số học Cơ bản & Kiểm thử Biên | - Phép toán Cộng (`Add`), Trừ (`Subtract`), Nhân (`Multiply`).<br>- Phân tích giá trị biên (độ dài 10 ký tự, số âm, số 0, số thập phân). | [Xem Module 1](docs/02_thiet_ke_test_cases.md#-module-1-phép-tính-số-học-cơ-bản--kiểm-thử-biên) |
| **Thành viên 2** | **Module 2**: Phép Chia & Ngoại lệ Toán học | - Phép Chia (`Divide`) số nguyên, số thực, số tuần hoàn.<br>- Bắt lỗi chia cho 0 (`Divide by zero error!`).<br>- Thứ tự toán hạng. | [Xem Module 2](docs/02_thiet_ke_test_cases.md#-module-2-phép-chia--xử-lý-ngoại-lệ-toán-học) |
| **Thành viên 3** | **Module 3**: Ghép Chuỗi & Kiểm tra Hợp lệ Dữ liệu | - Phép Ghép chuỗi (`Concatenate`) chuỗi chữ, chuỗi số, ký tự đặc biệt.<br>- Bắt lỗi nhập liệu không phải số (`is not a number`).<br>- Trạng thái ẩn/hiện của checkbox Integers only. | [Xem Module 3](docs/02_thiet_ke_test_cases.md#-module-3-ghép-chuỗi--kiểm-tra-hợp-lệ-dữ-liệu-đầu-vào) |
| **Thành viên 4** | **Module 4**: Định dạng Kết quả, Điều khiển & Kiểm thử Đa phiên bản | - Tính năng làm tròn số nguyên (*Integers only*).<br>- Nút `Calculate` (loading effect), nút `Clear` (reset dữ liệu).<br>- Ma trận bắt lỗi trên 9 bản build lỗi (`Build 1` đến `Build 9`). | [Xem Module 4](docs/02_thiet_ke_test_cases.md#-module-4-định-dạng-kết-quả-điều-khiển--kiểm-thử-đa-phiên-bản-builds) |

---

## 📂 CẤU TRÚC THƯ MỤC TÀI LIỆU

```text
calculator-test/
├── README.md                          # Tổng quan dự án và phân công nhiệm vụ
└── docs/
    ├── 01_phan_chia_module.md         # Phân tích chức năng và phân bổ công việc
    └── 02_thiet_ke_test_cases.md      # Đặc tả chi tiết 40+ Test Cases chuẩn IEEE 829
```

---

## 🚀 DANH MỤC TÀI LIỆU CHI TIẾT
- 📑 [Tài liệu 01: Kế hoạch phân chia Module & Nhiệm vụ nhóm](docs/01_phan_chia_module.md)
- 🧪 [Tài liệu 02: Thiết kế Test Cases chi tiết (IEEE 829)](docs/02_thiet_ke_test_cases.md)
