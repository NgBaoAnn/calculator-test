---
name: Bug Report
about: Báo cáo lỗi phần mềm được phát hiện trong quá trình kiểm thử
title: "[BUG][<Module>] <Mô tả ngắn gọn về lỗi>"
labels: ["type: bug", "status: new"]
assignees: ""
---

## Thông tin lỗi

| Trường | Nội dung |
| :--- | :--- |
| Bug ID | `BUG-XXX` *(GitHub sẽ tự cấp số Issue)* |
| Found by Test Case | `TC-XXX-XXX` |
| Requirement liên quan | `FR-XXX-XX` |
| Module / chức năng | `<Module và chức năng bị ảnh hưởng>` |
| Build / commit | `<Prototype, Build 1...9> / <commit SHA>` |
| Severity | `<Trivial / Minor / Major / Critical / Blocker>` |
| Priority | `<P3 / P2 / P1 / P0>` |

---

## Mô tả lỗi

<Mô tả ngắn gọn lỗi gì xảy ra và chức năng nào bị ảnh hưởng.>

## Môi trường

- URL: `<URL>`
- Browser / version: `<Chrome 123, Firefox...>`
- OS / device: `<Windows 11, macOS...>`
- Tài khoản test (nếu có): `<tài khoản hoặc vai trò>`
- Tần suất: `<Luôn xảy ra / X trên Y lần>`

---

## Steps to reproduce

1. Truy cập vào trang `...`
2. Nhập dữ liệu `...` vào trường `...`
3. Nhấn vào nút `...`
4. Quan sát kết quả hiển thị trên màn hình.

Ghi rõ dữ liệu đầu vào và trạng thái ban đầu cần thiết để tái hiện.

---

## Actual result

<Hành vi thực tế, thông báo lỗi, giá trị hoặc trạng thái giao diện sai.>

---

## Expected result

<Hành vi đúng theo requirement, test case hoặc Prototype.>

---

## Evidence

<Kéo thả screenshot/video hoặc dán console/network log tại đây.>

## Tiêu chí xác nhận lỗi

- [ ] Đã chạy lại test case trên đúng Build / commit.
- [ ] Đã đối chiếu với requirement hoặc expected result.
- [ ] Đã đính kèm evidence hoặc ghi rõ lý do không có.

## Ghi chú xử lý

<Để trống nếu chưa có phân tích nguyên nhân hoặc workaround.>
