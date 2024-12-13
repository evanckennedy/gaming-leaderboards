import { FormikHelpers } from "formik";
import { LeaderboardFormValues } from "@/types/types";
import { createLeaderboard } from "@/services/leaderboardService";
import axios from "axios";

// In createLeaderboardHandler.ts
export const handleSubmit = async (
  values: LeaderboardFormValues,
  formikHelpers: FormikHelpers<LeaderboardFormValues>,
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

    // Clear any previous form status
    formikHelpers.setStatus(undefined);
    formikHelpers.resetForm();
  } catch (error) {
    // Extract error message from the server response
    let errorMessage = "An error occurred. Please try again.";
    if (axios.isAxiosError(error) && error.response) {
      errorMessage = error.response.data.error || errorMessage;
    }

    // Set the error message in Formik's status
    formikHelpers.setStatus(errorMessage);
  }
};
