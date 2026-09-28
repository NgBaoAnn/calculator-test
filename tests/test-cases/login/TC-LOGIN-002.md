# TC-LOGIN-002: Đăng nhập thất bại khi nhập sai mật khẩu

## Requirement ID
FR-LOGIN-01

## Module / Test type / Technique
Login / Functional / Error Guessing

## Preconditions
- User đã có tài khoản hợp lệ
- User đang ở trang Login

## Test data
| Email | user01@gmail.com |
| Password | WrongPass@123 |

## Test steps
1. Mở trang Login
2. Nhập email đúng và password sai
3. Bấm Login

## Expected result
Hiển thị thông báo lỗi "Email hoặc mật khẩu không chính xác" và vẫn ở lại trang Login.

## Status / Related bugs
Not Run / None
