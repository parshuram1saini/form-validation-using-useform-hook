import React from "react";
import Formconstant from "./Constant";
import { useForm } from "react-hook-form";
import "./style.css";

function Formview() {
  // accessing the some properties from useform ............
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    reset();
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label htmlFor="full-name"> {Formconstant.name}</label>
          <input
            type="text"
            style={
              errors.username ? { border: " 1px solid red" } : { border: "" }
            }
            // className={`${errors.username && "invalid"}`}
            // {`${errors.username} && style={{ border: " 1px solid red" }}`}
            id="full-name"
            placeholder="First Name"
            {...register("username", {
              required: "username is required",
              pattern: {
                value: /^[A-Za-z]*$/,
                message: "only alphabet are allowed ",
              },
            })}
            onKeyUp={() => {
              trigger("username");
            }}
          />
        </div>
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username.message}</p>
        )}
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="url">{Formconstant.url}</label>
          <input
            type="url"
            // type="text"
            style={errors.url ? { border: " 1px solid red" } : { border: "" }}
            id="url"
            placeholder="url"
            {...register("url", {
              required: "url is required",
              // pattern: {
              //   value:
              //     /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              //   message: "url is invalid",
              // },
            })}
            onKeyUp={() => {
              trigger("url");
            }}
          />
        </div>
        {errors.url && <p style={{ color: "red" }}>{errors.url.message}</p>}
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="email">{Formconstant.email}</label>
          <input
            type="text"
            // type="email"
            style={errors.email ? { border: " 1px solid red" } : { border: "" }}
            id="email"
            placeholder="email"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                message: "email is invalid",
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
        </div>
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="password">{Formconstant.password}</label>
          <input
            type="password"
            style={
              errors.password ? { border: " 1px solid red" } : { border: "" }
            }
            id="password"
            placeholder="password"
            {...register("password", {
              required: "password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 character",
              },
              maxLength: {
                value: 12,
                message: "Password must not more than  12 character",
              },
            })}
            onKeyUp={() => {
              trigger("password");
            }}
          />
        </div>
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="number">{Formconstant.number}</label>
          <input
            // type="number"
            style={errors.age ? { border: " 1px solid red" } : { border: "" }}
            type="text"
            id="number"
            placeholder="number"
            {...register("age", {
              required: "age is required",
              min: {
                value: 13,
                message: "Minimum required  age is 13",
              },
              max: {
                value: 65,
                message: "Maximum allowed  age is 65",
              },
              pattern: {
                value: /^[0-9]*$/,
                message: "only numbers are allowed",
              },
            })}
            onKeyUp={() => {
              trigger("age");
            }}
          />
        </div>
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="date">{Formconstant.date}</label>
          <input
            type="date"
            style={errors.date ? { border: " 1px solid red" } : { border: "" }}
            id="date"
            {...register("date", { required: "date is required" })}
          />
          {errors.date && <p style={{ color: "red" }}>{errors.date.message}</p>}
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <label htmlFor="color">{Formconstant.color}</label>
          <input
            type="color"
            id="color"
            value="#f6b73c"
            {...register("color", { required: "color is required" })}
          />
        </div>
        {errors.color && <p style={{ color: "red" }}>{errors.color.message}</p>}
        <div className="ui divider"></div>
        <div className="field">
          <div>
            <input
              type="radio"
              className="radio-button"
              name="button"
              id="office"
              {...register("home")}
            />
            <label htmlFor="office">{Formconstant.office}</label>
          </div>
          <div>
            <input
              type="radio"
              className="radio-button"
              name="button"
              id="home"
              {...register("home", { required: "home OR office is required" })}
            />

            <label htmlFor="home">{Formconstant.home}</label>
            {errors.home && (
              <p style={{ color: "red" }}>{errors.home.message}</p>
            )}
          </div>
        </div>
        <div className="ui divider"></div>
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              {...register("agree_terms", {
                required: "allow the Terms and Conditions ",
              })}
              onKeyUp={() => {
                trigger("agree_terms");
              }}
            />
            <label className="checkbox-terms">
              {Formconstant.term_condition}
            </label>
            {errors.agree_terms && (
              <p style={{ color: "red" }}>{errors.agree_terms.message}</p>
            )}
          </div>
        </div>
        <div className="ui divider"></div>
        <button className="ui button" type="reset">
          {Formconstant.reset}
        </button>
        <button className="ui button" type="submit">
          {Formconstant.submit}
        </button>
        {/* <input type='submit' /> */}
      </form>
    </>
  );
}

export default Formview;
