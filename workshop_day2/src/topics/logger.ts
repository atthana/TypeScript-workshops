// การสร้าง function + export แบบมี default มันจะได้แค่ function เดียวเท่านั้นนะใน file นี้

export default function logger(message: string) {
    console.log(message);
}

// การสร้าง function + export แบบไม่มี default

export function logger2(message: string) {
    console.log(message);
}
