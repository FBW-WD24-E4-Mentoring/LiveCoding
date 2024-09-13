function blockingCountdown(seconds) {
  const endTime = Date.now() + seconds * 1000; // Calculate when the timer should end

  while (Date.now() < endTime) {
    const remainingTime = Math.round((endTime - Date.now()) / 1000); // Calculate remaining seconds
    process.stdout.write(`Time left: ${remainingTime} s` + "\r"); // Display remaining time

    // This prevents the loop from running too fast, reducing CPU usage
    const wait = Date.now() + 100; // Pause for 100ms between updates
    while (Date.now() < wait); // Busy-wait loop for 100ms
  }

  console.log("\nTime's up!");
}

// Start a 10-second countdown
blockingCountdown(10);
