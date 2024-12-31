"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";
export default function ImagePricker({ label, name }) {
  const imageInputRef = useRef();
  function hanelClickPicker() {
    imageInputRef.current.click();
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
        />
        <button
          className={classes.button}
          type="button"
          onClick={hanelClickPicker}
        >
          PickImage
        </button>
      </div>
    </div>
  );
}
