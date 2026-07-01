// ===== Student Result Calculator (Beginner Version) =====

// Step 1: Take student name
let name = prompt("Enter your name:");

// Step 2: Take marks of 5 subjects
let m1 = Number(prompt("Enter Math marks (0-100):"));
let m2 = Number(prompt("Enter Science marks (0-100):"));
let m3 = Number(prompt("Enter English marks (0-100):"));
let m4 = Number(prompt("Enter Hindi marks (0-100):"));
let m5 = Number(prompt("Enter Computer marks (0-100):"));

// Step 3: Calculate total
let total = m1 + m2 + m3 + m4 + m5;

// Step 4: Calculate average
let average = total / 5;

// Step 5: Calculate percentage
let percentage = (total / 500) * 100;

// Step 6: Find highest and lowest marks
let highest = Math.max(m1, m2, m3, m4, m5);
let lowest = Math.min(m1, m2, m3, m4, m5);

// Step 7: Grade using if/else
let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

// Step 8: Switch (Motivational message based on day)
let day = new Date().getDay();

switch (day) {
    case 1:
        console.log("Monday: Start strong!");
        break;
    case 2:
        console.log("Tuesday: Keep going!");
        break;
    case 3:
        console.log("Wednesday: Halfway there!");
        break;
    case 4:
        console.log("Thursday: Stay focused!");
        break;
    case 5:
        console.log("Friday: Finish strong!");
        break;
    case 6:
        console.log("Saturday: Learn & enjoy!");
        break;
    default:
        console.log("Sunday: Rest well!");
}

// Step 9: Display result
console.log("===== STUDENT RESULT =====");
console.log("Name:", name);
console.log("Math:", m1);
console.log("Science:", m2);
console.log("English:", m3);
console.log("Hindi:", m4);
console.log("Computer:", m5);

console.log("Total Marks:", total);
console.log("Average:", average);
console.log("Percentage:", percentage + "%");
console.log("Highest Marks:", highest);
console.log("Lowest Marks:", lowest);
console.log("Grade:", grade);