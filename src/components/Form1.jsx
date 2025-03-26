import { useCallback, useState } from "react";
import "./Form1.scss";
import LoaderIcon from "./LoaderIcon1";

const colours = ["blue", "green", "red", "black", "brown"];
const animals = ["bear", "tiger", "snake", "donkey"];

export default function Form() {
  const [loadingState, setLoadingState] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    colour: "blue",
    animals: [],
    tigerSighting: "",
  });

  const handleChange = useCallback((e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleAnimalChange = useCallback((e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      animals: checked
        ? [...prevData.animals, value]
        : prevData.animals.filter((animal) => animal !== value),
    }));
  }, []);

  const triggerLoading = useCallback(() => {
    setLoadingState(true);
    setTimeout(() => {
      setLoadingState(false);
    }, 2000);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      triggerLoading();
      console.log("Form Data Submitted:", formData);
    },
    [formData, triggerLoading]
  );

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2 className="form-title">Your account information</h2>
      <div className="form-item">
        <label htmlFor="email" className="">
          Email address*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>

      <div className="form-item">
        <label htmlFor="password" className="">
          Password*
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minlength="8"
          className="input-field"
        />
      </div>
      <div className="form-item">
        <label htmlFor="colour" className="">
          Select your favorite color
        </label>

        <select
          id="colour"
          name="colour"
          value={formData.colour}
          onChange={handleChange}
          className="select"
          aria-label="Choose a favorite colour"
        >
          {colours.map((colour) => (
            <option key={colour} value={colour} className="option">
              {colour}
            </option>
          ))}
        </select>
      </div>
      <div className="form-item center">
        <fieldset>
          <legend className="">Select animals you have seen in the wild</legend>
          {animals.map((animal) => (
            <div key={animal} className="">
              <input
                type="checkbox"
                id={animal}
                name="animals"
                value={animal}
                checked={formData.animals.includes(animal)}
                onChange={handleAnimalChange}
                className=""
                aria-labelledby={`${animal}-label`}
              />
              <label id={`${animal}-label`} htmlFor={animal} className="label">
                {animal}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
      {formData.animals.includes("tiger") && (
        <div className="form-item long-answer">
          <label id="tiger-sighting-label" htmlFor="tigerSighting" className="">
            Please tell us where you saw a tiger.
          </label>
          <textarea
            id="tigerSighting"
            name="tigerSighting"
            value={formData.tigerSighting}
            onChange={handleChange}
            className="textarea"
            aria-labelledby="tiger-sighting-label"
            placeholder="I saw a tiger in..."
          ></textarea>
        </div>
      )}

      <button type="submit" className="button" disabled={loadingState}>
        {loadingState ? <LoaderIcon /> : "Submit"}
      </button>
    </form>
  );
}
