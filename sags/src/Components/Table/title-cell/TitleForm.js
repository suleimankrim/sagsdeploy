import React from "react";
import Style from "../body-cell/Cell.module.css";
import secondStyle from "../body-cell/IdCell.module.css";
import { useFormik } from "formik";
export const TitleForm = ({ name, index }) => {
  const formik = useFormik({
    initialValues: {
      cellValue: name,
    },
  });
  return (
    <div className={index === 0 ? secondStyle.outer : Style.outer}>
      <input
        type="text"
        name="cellValue"
        id="cellValue"
        value={formik.values.cellValue}
        onChange={formik.handleChange}
        className={index===0?secondStyle.IdCell :Style.cell}
      ></input>
    </div>
  );
};
export default TitleForm;
