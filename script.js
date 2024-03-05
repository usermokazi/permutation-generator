// Function to generate permutations 
function generatePermutations(input) {
    let results = [];

    function permute(arr, memo = []) {
        if (arr.length === 0) {
            results.push([...memo]); // Copy the array before pushing
        } else {
            for (let i = 0; i < arr.length; i++) {
                let current = arr.slice();
                let next = current.splice(i, 1)[0]; // Extract the element
                permute(current.slice(), memo.concat(next));
            }
        }
    }

    permute(input);
    return results;
}

// Function to handle form submission 
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let userInput = document.getElementById("userInput").value.trim();

    // Check if user input exceeds the character limit
    if (userInput.length > 11) {
        alert("Please limit your input to 7 characters or fewer.");
        return false; // Stop further execution
    }
    else {
        let inputArray = userInput.split(/\s+/).filter(Boolean);

        let permutations = generatePermutations(inputArray);
        let resultDiv = document.getElementById("permutationsResult");
        resultDiv.innerHTML = "<h3>Permutations:</h3>";

        permutations.forEach(perm => {
            resultDiv.innerHTML += "<p>" + perm.join(" ") + "</p>";
        });

        let numPermutationsDiv = document.getElementById("numPermutations");
        numPermutationsDiv.textContent = "Number of permutations generated: " + permutations.length;

        //remove the instructions page when generating permutations
        /*let rem = document.getElementById("instructions");
        rem.remove();
        return false;*/
    }
}
// Scroll to the top function 
window.addEventListener('scroll', function () {
    let scroll = document.querySelector(".scroll");
    scroll.classList.toggle("active", window.scrollY > 600);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

