import {
  FieldArray,
  Field,
  FieldArrayRenderProps,
  getIn,
  useFormikContext,
} from "formik";
import IconTrash from "@/components/ui/icons/IconTrash";
import { LeaderboardFormPlayer } from "@/types/types";

export default function PlayerFields() {
  const { values, touched, errors } = useFormikContext<{
    players: LeaderboardFormPlayer[];
  }>();

  return (
    <>
      <div className="grid grid-cols-12 gap-6 3xl:gap-8 4xl:gap-16 mb-1 3xl:mb-1.5 4xl:mb-3 ">
        <h2 className="col-span-6 uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl">
          Players
        </h2>
        <h2 className="col-span-4 uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl">
          Score
        </h2>
        <h2 className="col-span-2 uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl text-right">
          Place
        </h2>
      </div>
      <FieldArray name="players">
        {({ push, remove }: FieldArrayRenderProps) => (
          <div className="flex flex-col gap-2 3xl:gap-3 4xl:gap-6">
            {values.players.map(
              (player: LeaderboardFormPlayer, index: number) => {
                const hasNameError =
                  getIn(touched, `players.${index}.name`) &&
                  getIn(errors, `players.${index}.name`);

                const hasScoreError =
                  getIn(touched, `players.${index}.score`) &&
                  getIn(errors, `players.${index}.score`);

                const hasPlaceError =
                  getIn(touched, `players.${index}.place`) &&
                  getIn(errors, `players.${index}.place`);

                return (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-6 3xl:gap-8 4xl:gap-16"
                  >
                    {/* Name Field */}
                    <Field
                      type="text"
                      name={`players.${index}.name`}
                      placeholder="Enter the player name"
                      className={`col-span-6 px-3 3xl:px-5 4xl:px-9 bg-primary-200 text-white-100
                    3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8
                    font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080
                    4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100
                    transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                      hasNameError ? "border-error-100" : ""
                    }`}
                    />

                    {/* Score Field */}
                    <Field
                      type="text"
                      name={`players.${index}.score`}
                      placeholder="0"
                      className={`col-span-4 px-3 3xl:px-5 4xl:px-9 bg-primary-200 text-white-100
                    3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8
                    font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080
                    4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100
                    transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 ${
                      hasScoreError ? "border-error-100" : ""
                    }`}
                    />

                    {/* Place Field */}
                    <div className="col-span-2 relative">
                      <Field
                        type="text"
                        name={`players.${index}.place`}
                        placeholder="0"
                        className={`w-full px-3 3xl:px-5 4xl:px-9 bg-primary-200 text-white-100
                      3xl:text-2xl 4xl:text-5xl border-2 3xl:border-4 4xl:border-8
                      font-medium shadow-inner-custom-base 3xl:shadow-inner-custom-1080
                      4xl:shadow-inner-custom-4k hover:bg-primary-100 focus:bg-primary-100
                      transition-colors duration-300 ease-out h-10 3xl:h-14 4xl:h-28 text-right ${
                        hasPlaceError ? "border-error-100" : ""
                      }`}
                      />

                      {/* Remove Player Button */}
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="absolute right-[-28px] 3xl:right-[-42px] 4xl:right-[-84px] top-1/2 -translate-y-1/2"
                      >
                        <IconTrash className="fill-current text-white-100 hover:text-error-100 transition-colors duration-300 ease-out w-auto h-5 3xl:h-7 4xl:h-14" />
                      </button>
                    </div>
                  </div>
                );
              },
            )}
            {/* Add Player Button */}
            <button
              type="button"
              onClick={() => push({ name: "", score: "", place: "" })}
              className="mt-2 3xl:mt-3 4xl:mt-6 self-start uppercase font-black text-white-100 text-xl 3xl:text-3xl 4xl:text-6xl hover:text-secondary transition-colors duration-300 ease-out cursor-pointer"
            >
              + Add Player
            </button>
          </div>
        )}
      </FieldArray>
    </>
  );
}
