import React, { useState } from "react";
import Button from "./Button";
import "./FeedbackForm.css";

function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      const fdData = { key: Date.now(), ...data };

      const response = await fetch(
        "https://to-do-list-c24eb-default-rtdb.firebaseio.com/feedbacks.json",
        {
          method: "POST",
          body: JSON.stringify({ fdData }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending feedback data failed.");
      }

      setSubmitMessage("Feedback submitted successfully!");
      form.reset();
    } catch (error) {
      console.error("Error during form submission:", error.message);
      setSubmitMessage("Error submitting feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="feedback-form-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>Feedback Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" required minLength={5} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" required minLength={6} />
        </div>
        <div className="form-group">
          <label htmlFor="query">Your Feedback/Query</label>
          <textarea name="query" id="query" required rows="4"></textarea>
        </div>
        <div className="form-group checkbox">
          <label htmlFor="terms-and-conditions">
            <input
              type="checkbox"
              id="terms-and-conditions"
              required
              name="terms"
            />
            I agree to the terms and conditions
          </label>
        </div>
        <div className="form-actions">
          <Button type="reset" disabled={isSubmitting}>
            Reset
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Feedback"}
          </Button>
        </div>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}
      </form>
    </div>
  );
}

export default FeedbackForm;
