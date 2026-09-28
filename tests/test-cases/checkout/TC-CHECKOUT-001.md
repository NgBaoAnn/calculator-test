# TC-CHK-001: Thanh toán đơn hàng thành công qua thẻ tín dụng

## Requirement ID
FR-CHK-01

## Module / Test type / Technique
Checkout / Functional / End-to-End

## Preconditions
- User đã có tài khoản và đã đăng nhập
- Giỏ hàng có ít nhất 1 sản phẩm
- User đang ở trang Checkout

## Test data
| Shipping Address | 123 Nguyen Hue, Q1, TP.HCM |
| Phone | 0901234567 |
| Payment Method | Credit Card |
| Card Number | 4111222233334444 |
| Expiry Date | 12/28 |
| CVV | 123 |

## Test steps
1. Mở trang Checkout
2. Nhập thông tin giao hàng và chọn phương thức thanh toán bằng Credit Card
3. Nhập thông tin thẻ thanh toán hợp lệ
4. Bấm Place Order

## Expected result
Thanh toán thành công, hiển thị trang xác nhận đơn hàng kèm Order ID và làm trống giỏ hàng.

## Status / Related bugs
Not Run / None
