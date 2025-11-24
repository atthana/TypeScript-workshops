export const asyncpromises = () => {
    // ตัวอย่างการสร้าง function ที่คืนค่าแบบ promise
    function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
        // Pending คือ ระหว่างรอ
        // เมื่อเราสร้าง Promise ขึ้นมา มันจะอยู่ในสถานะ Pending จนกว่าจะมีการ resolve หรือ reject
        console.log('เริ่มการทำงาน Promise - สถานะ Pending');

        return new Promise((resolve, reject) => {
            // จำลองการทำงานที่ต้องใช้เวลา 2 วินาที
            setTimeout(() => {
                if (shouldSuccess) {
                    // เมื่อเวลา 2 วินาทีผ่านไปแล้ว จะเข้าสู่สถานะ Resolved
                    console.log('การทำงานสำเร็จ - สถานะ Resolved');
                    resolve('Success');
                } else {
                    // เมื่อเวลา 2 วินาทีผ่านไปแล้ว จะเข้าสู่สถานะ Rejected
                    console.log('การทำงานไม่สำเร็จ - สถานะ Rejected');
                    reject(new Error('ไม่สามารถเชื่อมต่อ server ได้'));  // Return มาเป็น object Error() ก็ได้นะ
                }
            }, 2000);
        });
    }

    // ตัวอย่างการใช้งาน Promise แบบสถานะสำเร็จ (Resolved)
    // simulateNetworkRequest(true)

    // // ตัวอย่างการใช้งาน Promise แบบสถานะไม่สำเร็จ (Rejected)
    // simulateNetworkRequest(false)

    // ตัวอย่างการใช้งาน then catch finally
    simulateNetworkRequest(false)
        .then((result) => {
            console.log('ผลลัพธ์:', result);
        })
        .then(() => {
            console.log('ทำงานต่อจากการทำงานแรก');
        })
        .catch((error) => {
            console.error('Error:', error);
        })
        .finally(() => {  // อันนี้ทำงานเสมอนะ
            console.log('สิ้นสุดการทำงาน');
        });

}
