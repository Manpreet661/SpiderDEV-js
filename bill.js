// ===== SIMPLE BILLING SYSTEM =====

// Step 1: Number of customers
let customers = Number(prompt("How many customers?"));

for (let c = 1; c <= customers; c++) {

    console.log("\n===== CUSTOMER " + c + " BILL =====");

    let customerName = prompt("Enter customer name:");

    // Step 2: Number of products
    let n = Number(prompt("How many products?"));

    let total = 0;
    let maxPrice = 0;
    let expensiveProduct = "";

    for (let i = 1; i <= n; i++) {

        let productName = prompt("Enter product " + i + " name:");
        let quantity = Number(prompt("Enter quantity:"));
        let price = Number(prompt("Enter price per item:"));

        let itemTotal = quantity * price;
        total = total + itemTotal;

        // Find most expensive product
        if (itemTotal > maxPrice) {
            maxPrice = itemTotal;
            expensiveProduct = productName;
        }

        console.log(productName + " = " + itemTotal);
    }

    // Step 3: Discount using if/else
    let discount = 0;

    if (total >= 5000) {
        discount = total * 0.20; // 20%
    } else if (total >= 3000) {
        discount = total * 0.10; // 10%
    } else if (total >= 1000) {
        discount = total * 0.05; // 5%
    } else {
        discount = 0;
    }

    let afterDiscount = total - discount;

    // Step 4: GST (18%)
    let gst = afterDiscount * 0.18;
    let finalBill = afterDiscount + gst;

    // Step 5: Payment method (switch)
    let payment = prompt("Enter payment method (Cash / UPI / Card):");

    switch (payment) {
        case "Cash":
            console.log("Payment: Cash - No extra charges");
            break;

        case "UPI":
            console.log("Payment: UPI - Fast and secure");
            break;

        case "Card":
            console.log("Payment: Card - 2% extra charge may apply");
            break;

        default:
            console.log("Invalid payment method");
    }

    // Step 6: Final Bill Output
    console.log("\n----- FINAL BILL -----");
    console.log("Customer Name:", customerName);
    console.log("Total Amount:", total);
    console.log("Discount:", discount);
    console.log("After Discount:", afterDiscount);
    console.log("GST (18%):", gst);
    console.log("FINAL BILL:", finalBill);

    console.log("Most Expensive Product:", expensiveProduct);
}