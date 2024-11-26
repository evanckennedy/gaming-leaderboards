import { FormikHelpers } from "formik";
import { LeaderboardFormValues } from "@/types/types";

// In createLeaderboardHandler.ts
export const handleSubmit = async (
  values: LeaderboardFormValues,
  { setSubmitting, setErrors, resetForm }: FormikHelpers<LeaderboardFormValues>,
) => {
  try {
    // Convert score and place to numbers
    const playersWithNumbers = values.players.map((player) => ({
      ...player,
      score: Number(player.score),
      place: Number(player.place),
    }));
    console.log("submitting..."); // debugging

    const submissionValues = {
      title: values.title,
      genre: values.genre,
      players: playersWithNumbers,
    };

    // Proceed with submission using submissionValues

    // Simulate an API call using a Promise
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted: ", submissionValues);

    // Reset the form to its initial values
    resetForm();
  } catch (error) {
    // Handle error response
    setErrors({ title: "An error occurred. Please try again." });
  } finally {
    setSubmitting(false);
  }
};
