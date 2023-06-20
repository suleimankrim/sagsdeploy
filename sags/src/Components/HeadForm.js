import React from "react";
import Style from "./Cell.module.css";
import { useFormik } from "formik";
import data from "./MockData";
export const HeadForm = ({ name, index }) => {
  const formik = useFormik({
    initialValues: {
        cellValue :name,
    },
  });
  return (<div className={Style.outer}>
    <input type="text" name="cellValue" id ="cellValue"
    value={formik.values.cellValue}
     onChange={formik.handleChange} className={Style.cell}
     
     ></input>
     </div>
  );
};
