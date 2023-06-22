import React from "react";
import Style from "../body-cell/IdCell.module.css";
import { useFormik } from "formik";
export const HeadForm = ({ name }) => {
  
  const formik = useFormik({
    initialValues: {
        cellValue :name,
    },
  });
  return (
    <input type="text" name="cellValue" id ="cellValue"
    value={formik.values.cellValue}
     onChange={formik.handleChange} className={Style.IdCell}
     ></input>
  );
};
export default HeadForm;