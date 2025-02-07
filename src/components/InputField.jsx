import { useField } from "formik";

const InputField = ({ id, type, placeholder, label }) => {
  const [field, meta] = useField(id);

  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        {...field}
        id={id}
        type={type}
        placeholder={placeholder}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </div>
  );
};

export default InputField;
