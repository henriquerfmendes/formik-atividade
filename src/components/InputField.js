const InputField = ({ id, type, placeholder, label, formik }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={formik.errors[id] && formik.touched[id] ? "input-error" : ""}
      />
      {formik.errors[id] && formik.touched[id] && (
        <p className="error">{formik.errors[id]}</p>
      )}
    </>
  );
};

export default InputField;
