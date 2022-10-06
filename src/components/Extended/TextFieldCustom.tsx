/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useMemo } from "react";
import { TextField, FormHelperText, TextFieldProps } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

type Props = TextFieldProps & {
  name: string;
  required?: boolean;
  label?: string;
  formik: any;
  errors?: any;
  size?: "small" | "medium";
  maxLength?: number;
  type?: string;
  bgColor?: string;
};

const TextFieldCustom = ({
  name,
  required,
  label,
  formik,
  errors,
  size,
  maxLength,
  type,
  bgColor,
  ...props
}: Props) => {
  const textFieldCustom = useMemo(
    () => (
      <>
        <TextField
          {...props}
          sx={{
            "& input": {
              background: bgColor || "#fff",
            },
          }}
          label={
            required ? (
              <span className="input-label">
                {`${label}`}
                <span> *</span>
              </span>
            ) : (
              label
            )
          }
          type={type || "text"}
          fullWidth
          id={name}
          name={name}
          size={size || "small"}
          value={formik?.values?.[name]}
          onChange={(e) => {
            if (maxLength) {
              if (e.target.value.length > maxLength) {
                e.target.value = e.target.value.slice(0, maxLength);
              }
            }
            formik?.setFieldTouched(name, true);
            formik?.handleChange(e);
          }}
          error={
            (formik?.touched?.[name] && Boolean(formik?.errors?.[name])) ||
            Boolean(errors?.[name])
          }
        />
        {((formik?.touched?.[name] && formik?.errors?.[name]) ||
          errors?.[name]) && (
          <FormHelperText error className="error-custom">
            <ErrorIcon
              fontSize="small"
              sx={{ mr: 0.5, width: "18px", height: "18px" }}
            />
            {formik?.errors?.[name] || errors?.[name]}
          </FormHelperText>
        )}
      </>
    ),
    [
      formik?.values?.[name],
      formik?.touched?.[name],
      formik?.errors?.[name],
      errors?.[name],
      required,
      label,
      type,
    ]
  );

  return <>{textFieldCustom}</>;
};

export default TextFieldCustom;
