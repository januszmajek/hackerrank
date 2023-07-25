function angryProfessor(k: number, a: number[]): string {
    let goodStudents: number = 0;

    a.forEach(e => e > 0 ? false : goodStudents++);
    return goodStudents >= k ? "NO" : "YES";
}