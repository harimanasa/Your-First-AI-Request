/**
 * Checks that the required environment variables for the AI request are set.
 * Throws an error and exits if any are missing.
 */
export function checkEnvironment() {
  const required = ["AI_KEY", "AI_URL", "AI_MODEL"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(
      `Missing required environment variable(s): ${missing.join(", ")}`
    );
    process.exit(1);
  }
}
