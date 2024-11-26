import { Field, useFormikContext, FormikTouched, FormikErrors } from "formik";
import { LeaderboardFormValues } from "@/types/types";

function GameGenreFields() {
  const { touched, errors } = useFormikContext<{
    title: string;
    genre: string;
    touched: FormikTouched<LeaderboardFormValues>;
    errors: FormikErrors<LeaderboardFormValues>;
  }>();

  return (
    <>
      <div className="flex flex-col mb-3 3xl:mb-5 4xl:mb-9">
        <label
          htmlFor="leaderboard-title"
          className="mb-1 3xl:mb-1.5 4xl:mb-3 uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl"
        >
          Leaderboard Title
        </label>
        <Field
          type="text"
          name="title"
          id="leaderboard-title"
          placeholder="Enter the title"
          className={`px-3 3xl:px-5 4xl:px-9 bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
            touched.title && errors.title ? "border-error-100" : ""
          }`}
        />
        <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
          {touched.title && errors.title ? errors.title : ""}
        </p>
      </div>
      <div className="flex flex-col mb-3 3xl:mb-5 4xl:mb-9">
        <label
          htmlFor="game-genre"
          className="mb-1 3xl:mb-1.5 4xl:mb-3 uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl"
        >
          Genre
        </label>
        <Field
          type="text"
          name="genre"
          id="game-genre"
          placeholder="Enter the genre"
          className={`px-3 3xl:px-5 4xl:px-9 bg-primary-200 text-white-100 3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8 font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080 4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100 transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
            touched.genre && errors.genre ? "border-error-100" : ""
          }`}
        />
        <p className="text-right text-sm 3xl:text-xl 4xl:text-4xl text-error-100 h-4 3xl:h-6 4xl:h-12">
          {touched.genre && errors.genre ? errors.genre : ""}
        </p>
      </div>
    </>
  );
}

export default GameGenreFields;
