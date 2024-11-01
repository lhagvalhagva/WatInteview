function createCards() {
  const container = document.getElementById("qa-container");
  let questionNumber = 1;

  database.ref("qaData").on("value", (snapshot) => {
    container.innerHTML = ""; // Clear existing cards
    const data = snapshot.val();

    for (const [question, answers] of Object.entries(data)) {
      const card = document.createElement("div");
      card.className = "col-12 col-md-6 col-lg-4 mb-4";
      card.innerHTML = `
        <div class="card h-100">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <span class="badge bg-primary me-2">${questionNumber}</span>
              <div class="question mb-3">${question}</div>
            </div>
            <div class="answer en">
              ${boldBracketedText(answers.en)}
              <button class="btn btn-sm btn-outline-secondary mt-2" onclick="editAnswer('${question}', 'en')">
                <i class="fas fa-edit"></i> Edit
              </button>
            </div>
            <div class="answer mn">
              ${boldBracketedText(answers.mn)}
              <button class="btn btn-sm btn-outline-secondary mt-2" onclick="editAnswer('${question}', 'mn')">
                <i class="fas fa-edit"></i> Edit
              </button>
            </div>
            <button class="btn btn-sm btn-outline-primary mt-3" onclick="toggleAnswer(this)">
              Show Answer
            </button>
          </div>
        </div>
      `;
      container.appendChild(card);
      questionNumber++;
    }
  });
}

function editAnswer(question, language) {
  const newAnswer = prompt(
    `Edit ${language.toUpperCase()} answer:`,
    qaData[question][language]
  );
  if (newAnswer !== null) {
    // Update Firebase
    database
      .ref(`qaData/${question}/${language}`)
      .set(newAnswer)
      .then(() => console.log("Answer updated successfully"))
      .catch((error) => console.error("Error updating answer:", error));
  }
}

// Initial data upload to Firebase (run once)
function uploadInitialData() {
  database
    .ref("qaData")
    .set(qaData)
    .then(() => console.log("Initial data uploaded successfully"))
    .catch((error) => console.error("Error uploading initial data:", error));
}
