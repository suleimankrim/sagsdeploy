import React from "react";
import Style from "./Cell.module.css";
import { useFormik } from "formik";
import data from "./MockData";
const filds = Object.keys(data[0]);
export const CellForm = ({ row, index }) => {
    console.log(row[filds[index]])
  const formik = useFormik({
    initialValues: {
        cellValue :row[filds[index]],
    },
  });
  console.log(formik.values.cellValue)
  console.log ("kkkkkkkkkkkkkkk");
  return (
    <input type="text" name="cellValue" id ="cellValue"
    value={formik.values.cellValue}
     onChange={formik.handleChange} className={Style.cell}
     
     ></input>
  );
};
