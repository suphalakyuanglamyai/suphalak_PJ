 
// เมื่อโหลดเนื้อหาในหน้าเว็บเสร็จแล้วให้เรียกใช้งานฟังก์ชัน init
document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("หน้าเว็บพร้อมใช้งานแล้ว!");
    // เรียกใช้ฟังก์ชันหรือเพิ่มการทำงานที่ต้องการเมื่อหน้าเว็บพร้อมแล้ว
    setupButtonClick();
}

// ตัวอย่างฟังก์ชันที่เพิ่มการทำงานเมื่อคลิกปุ่ม
function setupButtonClick() {
    // ค้นหาปุ่มในหน้าเว็บที่มี id เป็น "myButton"
    const button = document.getElementById("myButton");
    
    // ตรวจสอบว่ามีปุ่มในหน้าเว็บหรือไม่
    if (button) {
        // กำหนดการทำงานเมื่อคลิกปุ่ม
        button.addEventListener("click", () => {
            alert("คุณคลิกปุ่มแล้ว!");
        });
    }
}
