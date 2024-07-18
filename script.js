const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;

  const feedback = document.querySelector("#feedback").value;

  const rateService = document.querySelector(
    "input[name='rateService']:checked"
  ).value;

  const interest = document.querySelectorAll("input[name='interest']:checked");

  const selectedInterest = [];
  for (let i = 0; i < interest.length; i++) {
    selectedInterest.push(interest[i].value);
  }

  const selectedExperience = document.querySelector("#selectExperience").value;

  const displayFeedbackData = document.querySelector("#feedbackData");

  const feedbackData = `
        <h2>Feedback Submitted:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
        <p><strong>Service Rating:</strong> ${rateService}</p>
        <p><strong>Topics of Interest:</strong> ${selectedInterest.join(
          ", "
        )}</p>
        <p><strong>Experience:</strong> ${selectedExperience}</p>
    `;

  displayFeedbackData.innerHTML = feedbackData;
});
