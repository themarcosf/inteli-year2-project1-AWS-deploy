import React, { forwardRef, useRef } from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import styles from "./ReactSelect.module.scss";

const animatedComponents = makeAnimated();

const ReactSelect = forwardRef((props, ref) => {
  return (
    <>
      <Select
        ref={ref}
        closeMenuOnSelect={true}
        components={animatedComponents}
        isMulti={props.isMulti}
        options={props.options}
        className={styles.reactSelect}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: "var(--light-gray)!important",
            background: "var(--dark-gray)",
            width: "600px",
            boxShadow: "none !important",
          }),
          menu: (baseStyles, state) => ({
            ...baseStyles,
            background: "var(--dark-gray)",
            color: "var(--white)",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            background: state.isFocused
              ? "var(--light-gray)"
              : "var(--dark-gray)",
            color: "var(--white)",
            cursor: "pointer",
          }),
          placeholder: (baseStyles, state) => ({
            ...baseStyles,
            color: "var(--white)",
            fontSize: "1.3rem",
          }),
          input: (baseStyles, state) => ({
            ...baseStyles,
            color: "var(--white)",
            fontSize: "1.3rem",
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            outline: "none",
          }),
          multiValueRemove: (baseStyles, state) => ({
            ...baseStyles,
            color: "red",
            cursor: "pointer",
          }),
          singleValue: (baseStyles, state) => ({
            ...baseStyles,
            color: "white",
          }),
        }}
      />
    </>
  );
});

export default ReactSelect;
