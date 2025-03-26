import { useCallback, useState } from "react";
import styles from "./Form.module.scss";
import LoaderIcon from "./LoaderIcon";

const colours = ["blue", "green", "red", "black", "brown"];
const animals = ["bear", "tiger", "snake", "donkey"];

export default function Form() {
  const [loadingState, setLoadingState] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    colour: "",
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.formTitle}>Your account information</h2>
      <div className={styles.formItem}>
        <label htmlFor="email">Email address*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          minLength="8"
          className={styles.inputField}
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="colour">Select your favorite color</label>

        <select
          id="colour"
          name="colour"
          value={formData.colour}
          onChange={handleChange}
          className={styles.select}
          aria-label="Choose a favorite colour"
        >
          {colours.map((colour) => (
            <option key={colour} value={colour} className={styles.option}>
              {colour}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.formItem + " " + styles.center}>
        <fieldset>
          <legend>Select animals you have seen in the wild</legend>
          {animals.map((animal) => (
            <div key={animal}>
              <input
                type="checkbox"
                id={animal}
                name="animals"
                value={animal}
                checked={formData.animals.includes(animal)}
                onChange={handleAnimalChange}
                aria-labelledby={`${animal}-label`}
              />
              <label
                id={`${animal}-label`}
                htmlFor={animal}
                className={styles.label}
              >
                {animal}
              </label>
            </div>
          ))}
        </fieldset>
      </div>
      {formData.animals.includes("tiger") && (
        <div className={styles.formItem + " " + styles.longAnswer}>
          <label id="tiger-sighting-label" htmlFor="tigerSighting">
            Please tell us where you saw a tiger.
          </label>
          <textarea
            id="tigerSighting"
            name="tigerSighting"
            value={formData.tigerSighting}
            onChange={handleChange}
            className={styles.textarea}
            aria-labelledby="tiger-sighting-label"
            placeholder="I saw a tiger in..."
          ></textarea>
        </div>
      )}

      <button type="submit" className={styles.button} disabled={loadingState}>
        {loadingState ? <LoaderIcon /> : "Submit"}
      </button>
    </form>
  );
}
