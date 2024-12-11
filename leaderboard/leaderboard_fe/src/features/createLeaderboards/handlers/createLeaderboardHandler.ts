import { FormikHelpers } from "formik";
import { LeaderboardFormValues } from "@/types/types";
import { createLeaderboard } from "@/services/leaderboardService";

// In createLeaderboardHandler.ts
export const handleSubmit = async (
  values: LeaderboardFormValues,
  { setSubmitting, setErrors, resetForm }: FormikHelpers<LeaderboardFormValues>,
) => {
  try {
    // Convert score and place to numbers
    const playersWithNumbers = values.players.map((player) => ({
      score: Number(player.score),
      place: Number(player.place),
      name: player.name.trim(),
    }));
    console.log("submitting..."); // debugging

    const submissionValues = {
      gameName: values.title.trim(),
      genreName: values.genre.trim(),
      players: playersWithNumbers,
    };

    // Use the service function to send the POST request
    await createLeaderboard(submissionValues);

    // Reset the form to its initial values
    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ title: "An error occurred. Please try again." });
  } finally {
    setSubmitting(false);
  }
};
