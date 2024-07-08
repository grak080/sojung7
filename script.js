function generateLottoNumbers() {
  var numbers = [];

  // Generate 6 unique random numbers
  while (numbers.length < 6) {
    var randomNum = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }

  // Sort numbers in ascending order
  numbers.sort(function(a, b) {
    return a - b;
  });

  // Display the generated numbers
  var numbersContainer = document.getElementById("numbers");
  numbersContainer.textContent = "추첨된 번호: " + numbers.join(", ");

  // Show SweetAlert2 modal with the numbers
  Swal.fire({
    title: '청소 당번 추첨 결과',
    html: '<p class="text-xl">추첨된 번호: ' + numbers.join(", ") + '</p>',
    icon: 'success',
    confirmButtonText: '확인'
  });
}
