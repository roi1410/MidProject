import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { SingUp_degreeContext } from "../Context";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Payment() {
  const { CerentUser } = useContext(SingUp_degreeContext);
  const nav = useNavigate();
  if (!CerentUser) {
    return (
      <>
        {useEffect(() => {
          nav("/LogIn");
        })}
      </>
    );
  } else {
    const [Users_Degree, setUser_Degree] = useState(CerentUser.Degree);

    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm({
      defaultValues: { Card_Name: "", Card_Number: "" },
    });

    function removedegree(degree) {
      setUser_Degree(Users_Degree.filter((element) => element !== degree));
    }
    const price = () => {
      return Users_Degree.length * 1000 + "$";
    };
    function validateCreditCardExpiration(expirationDate) {
      // Ensure the expirationDate is a valid date object
      const parsedExpirationDate = new Date(expirationDate);

      if (isNaN(parsedExpirationDate)) {
        return false; // Invalid date format
      }

      const currentDate = new Date();

      if (parsedExpirationDate < currentDate) {
        return false;
      }

      return true;
    }
    function validateCreditCardCVC(cvc) {
      // Check if the CVC is a numeric string
      if (!/^\d+$/.test(cvc)) {
        return false; // CVC contains non-numeric characters
      }

      // Check if the CVC is either 3 or 4 digits (common for most cards)
      if (cvc.length !== 3 && cvc.length !== 4) {
        return false; // Invalid CVC length
      }

      return true; // CVC is valid
    }

    return (
      <>
        <div className="flex flex-col">
          <div className=" bg-blue-500">
            <NavLink
              className={
                "text-lg font-bold text-white transition-colors duration-300 hover:text-blue-900"
              }
              to={"/payment"}
            >
              Calendar
            </NavLink>
          </div>

          <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100 p-8 text-gray-800">
            <section className="min-h-screen bg-gray-100 p-4 text-gray-600 antialiased">
              <div className="h-full">
                {/* Pay component */}

                {/* Card background */}
                <div className="relative mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
                  <img
                    className="animate-bounce  rounded-t shadow-lg"
                    src="data:image/jpeg;base64,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7ln8dvaPxjln8dvaPxkjzMPLLT3r/pxzMPLLT3r9iBHcs/jt7R+Mcs/jt7R+MkeZh5Zae9fsRzMPLLT3r9iBGMxJyTk9Z3mfJKczDyy096/6cczDyy096/6cCLn3Wes+syT5mHllp71/045mHllp71+xJ2jSM1nrPrMaz1n1mSfMw8stPev+nHMw8stPev8Apxs1CM1nrPrMaz1n1mSfMw8stPev2I5mHllp71/042ahGaz1n1z5JTmYeWWnvX7EczDyy096/wCnISi59RyOBI9BI/tJPmYeWWnvX/TjmYeWWnvX7ECO5Z/Hb2j8Z5LseLH1mSfMw8stPev2I5mHllp71+xAjeUPWfWY5Q9Z9ZklzMPLLT3r9iOZh5Zae9fsSvLCeaUbyh6z6zPhYniTJPmYeWWnvX/TjmYeWWnvX/Tjlg5pRcSU5mHllp71/wBOOZh5Zae9fsSyC/8Aodr9q6/PTn2fNrVEWlQt6dRahpCoXdAdBeoytpQsAWACjfgZz5p9gRUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/2Q=="
                    width="460"
                    height="180"
                    alt="Pay background"
                  />
                </div>
                {/* Card body */}
                <div className="relative mx-auto max-w-lg px-4 pb-8 sm:px-6 lg:px-8">
                  <div className="rounded-b bg-white px-8 pb-6 shadow-lg">
                    {/* Card header */}
                    <div className="mb-6 text-center">
                      <h1 className="mb-2 text-xl font-semibold leading-snug text-gray-800">
                        Enter your Credit Card
                      </h1>{" "}
                      click to remove title
                      <div className="text-sm">
                        {Users_Degree.map((element, index) => {
                          return (
                            <button
                              onClick={() => removedegree(element)}
                              key={index}
                              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                            >
                              {element}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Card form */}
                    <div>
                      <form
                        onSubmit={handleSubmit((data) => console.log(data))}
                      >
                        <div className="space-y-4">
                          {/* Card Number */}
                          <div>
                            {errors.Card_Number?.message && (
                              <span className="text-red-500">
                                {errors.Card_Number.message}
                              </span>
                            )}
                            <label
                              className="mb-1 block text-sm font-medium"
                              htmlFor="card-nr"
                            >
                              Card Number{" "}
                            </label>
                            <input
                              {...register("Card_Number", {
                                required: "card number is required",
                                validate: {
                                  valid: (v) =>
                                    v.length === 16 ||
                                    "the credit card number is not valid",
                                },
                              })}
                              id="card-nr"
                              className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                              type="text"
                              maxLength={16}
                              placeholder="1234 1234 1234 1234"
                            />
                          </div>
                          {/* Expiry and CVC */}
                          <div className="flex space-x-4">
                            <div className="flex-1">
                              {errors.Expiry_Date?.message && (
                                <span className="text-red-500">
                                  {errors.Expiry_Date.message}
                                </span>
                              )}
                              <label
                                className="mb-1 block text-sm font-medium"
                                htmlFor="card-expiry"
                              >
                                Expiry Date{" "}
                              </label>
                              <input
                                {...register("Expiry_Date", {
                                  required: "ExpiryDate is required",
                                  validate: {
                                    isexpirad: (v) =>
                                      validateCreditCardExpiration(v) ||
                                      "the date is expiriad",
                                  },
                                })}
                                id="card-expiry"
                                className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                type="date"
                                placeholder="MM/YY"
                              />
                            </div>
                            <div className="flex-1">
                              {errors.CVC?.message && (
                                <span className="text-red-500">
                                  {errors.CVC.message}
                                </span>
                              )}
                              <label
                                className="mb-1 block text-sm font-medium"
                                htmlFor="card-cvc"
                              >
                                CVC
                              </label>
                              <input
                                {...register("CVC", {
                                  required: "CvC is required",
                                  validate: {
                                    numric: (v) =>
                                      validateCreditCardCVC(v) ||
                                      "CVC isnt valid",
                                  },
                                })}
                                id="card-cvc"
                                className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                                type="text"
                                maxLength={3}
                                placeholder="CVC"
                              />
                            </div>
                          </div>
                          {/* Name on Card */}
                          <div>
                            {errors.Card_Name?.message && (
                              <span className="text-red-500">
                                {errors.Card_Name.message}
                              </span>
                            )}

                            <label
                              className="mb-1 block text-sm font-medium"
                              htmlFor="card-name"
                            >
                              Name on Card{" "}
                            </label>
                            <input
                              id="card-name"
                              {...register("Card_Name", {
                                required: "card name is required",
                              })}
                              className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                              type="text"
                              placeholder="Card_Name"
                            />
                          </div>
                          {/* Email */}
                          <div>
                            <label
                              className="mb-1 block text-sm font-medium"
                              htmlFor="card-email"
                            >
                              Email
                            </label>
                            <input
                              {...register("mail")}
                              id="card-email"
                              className="w-full rounded border border-gray-200 bg-white px-3 py-2 text-sm leading-5 text-gray-800 placeholder-gray-400 shadow-sm hover:border-gray-300 focus:border-indigo-300 focus:ring-0"
                              type="email"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="mb-4">
                            <button
                              type="submit"
                              className="inline-flex w-full items-center justify-center rounded border border-transparent bg-indigo-500 px-3 py-2 text-sm font-medium leading-5 text-white shadow-sm transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus-visible:ring-2"
                            >
                              {price()}
                            </button>
                          </div>
                          <div className="text-center text-xs italic text-gray-500">
                            you cannot put a price on education
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
