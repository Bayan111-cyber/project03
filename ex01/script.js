// Calculate letter grade
function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Check access
function checkAccess(age, hasTicket) {
    if (age >= 18 && hasTicket === true) {
        return true;
    } else {
        return false;
    }
}

// Test calculateGrade()
console.log(calculateGrade(100));  // A
console.log(calculateGrade(90));   // A
console.log(calculateGrade(89));   // B
console.log(calculateGrade(0));    // F
console.log(calculateGrade(-1));   // Invalid
console.log(calculateGrade(101));  // Invalid

// Test checkAccess()
console.log(checkAccess(18, true));   // true
console.log(checkAccess(17, true));   // false
console.log(checkAccess(18, false));  // false
console.log(checkAccess(20, true));   // true