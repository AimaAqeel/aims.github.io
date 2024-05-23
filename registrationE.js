function calculateTotal() {
    const courseSelect = document.getElementById('courses');
    const selectedCourses = courseSelect.selectedOptions;
    let totalAmount = 0;

    for (let option of selectedCourses) {
        const courseName = option.value;
        const courseFee = 1000; // AED 1000 per course
        totalAmount += courseFee;
    }

    const totalAmountDisplay = document.getElementById('totalAmount');
    totalAmountDisplay.textContent = `Total Amount: AED ${totalAmount}`;
}
