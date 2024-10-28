// เมื่อโหลดเนื้อหาในหน้าเว็บเสร็จแล้วให้เรียกใช้งานฟังก์ชัน init
document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("หน้าเว็บพร้อมใช้งานแล้ว!");
    // เรียกใช้ฟังก์ชันหรือเพิ่มการทำงานที่ต้องการเมื่อหน้าเว็บพร้อมแล้ว
    setupButtonClick();
}

