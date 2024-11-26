import { Formik, Form } from "formik";
import { validationSchema } from "../schemas/createLeaderboardSchema";
import { handleSubmit } from "../handlers/createLeaderboardHandler";
import CreateLeaderboardPreview from "./CreateLeaderboardPreview";
import PlayerFields from "./PlayerFields";
import GameGenreFields from "./GameGenreFields";

function CreateLeaderboardForm() {
  return (
    <div className="h-full">
      <Formik
        initialValues={{
          title: "",
          genre: "",
          players: [{ name: "", score: "", place: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, values }) => (
          <div className="flex justify-between h-full">
            <Form className="w-7/12">
              <GameGenreFields />

              <PlayerFields />

              {/* Submit Button */}
              <div className="flex justify-end mt-3 3xl:mt-5 4xl:mt-9">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl hover:text-secondary transition-colors duration-300 ease-out ${isSubmitting ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  Submit Leaderboard
                </button>
              </div>
            </Form>
            <CreateLeaderboardPreview values={values} touched={touched} />
          </div>
        )}
      </Formik>
    </div>
  );
}

export default CreateLeaderboardForm;
