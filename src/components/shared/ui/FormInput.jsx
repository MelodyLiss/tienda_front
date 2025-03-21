export const FormInput = ({
    label,
    type = "text",
    name,
    id,
    placeholder,
    value,
    onChange,
    required = false,
    labelWidth = "w-30" // Ancho configurable del label
}) => {
    return (
        <div className="mb-2 flex items-center">
            <div className={labelWidth}>
                <label className="font-bold uppercase text-right" htmlFor={id}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            </div>
            <input
                className="flex-1 border border-gray-600 rounded-lg px-4 py-2 bg-white text-gray-700"
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

