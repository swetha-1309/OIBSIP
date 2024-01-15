<script>
    function validateOrder() {
        // Get the values from the form
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;

        // Simple validation, you can customize this based on your requirements
        if (name.trim() === "" || address.trim() === "") {
            alert("Please fill in all the required fields.");
        } else {
            // Proceed with the order logic, e.g., redirect to a confirmation page
            alert("Order placed successfully!");
        }
    }
</script>

