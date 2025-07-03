export const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
  options = [],
}) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-medium">{label}</label>

    {type === "select" ? (
      <select
        defaultValue=""
        {...register(name)}
        className={`col-span-5 border dark:border-border-dark-grey border-input-bordergrey rounded-lg outline-none py-2.5 pl-2 text-xs font-light 
        ${errors[name] ? "border-red-500" : ""}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : type === "textarea" ? (
      <textarea
        placeholder={placeholder}
        {...register(name)}
        className={`col-span-5 border dark:border-border-dark-grey border-input-bordergrey rounded-lg outline-none py-2 px-2 placeholder:text-xs placeholder:font-light
        ${errors[name] ? "border-red-500" : ""}`}
        rows={4}
      />
    ) : type === "file" ? (
      <input
        type="file"
        placeholder={placeholder}
        {...register(name)}
        className={`col-span-5 border placeholder: border-input-bordergrey rounded-lg outline-none py-2 px-2 placeholder:text-xs placeholder:font-light
        ${errors[name] ? "border-red-500" : ""}`}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`col-span-5 border dark:border-border-dark-grey border-input-bordergrey rounded-lg outline-none py-2 px-2 placeholder:text-xs placeholder:font-light
        ${errors[name] ? "border-red-500" : ""}`}
      />
    )}

    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);