import { useState } from "react";
import { JOIN_ROLES } from "../data";

interface FormState {
  name: string;
  location: string;
  email: string;
}

interface FormErrors {
  name?: string;
  location?: string;
  email?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.location.trim()) errors.location = "Location is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "Enter a valid email.";
  return errors;
}

function RoleForm({ role }: { role: string }) {
  const [form, setForm] = useState<FormState>({ name: "", location: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = () => {
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5 flex flex-col items-center justify-center min-h-[200px] gap-2">
        <span className="text-2xl">✅</span>
        <p className="text-green-400 text-xs font-bold tracking-wide text-center">
          You're in! We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-5">
      <p className="text-xs font-black uppercase tracking-widest mb-4">{role}</p>

      {(["name", "location", "email"] as (keyof FormState)[]).map((field) => (
        <div key={field} className="mb-3">
          <input
            type={field === "email" ? "email" : "text"}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange(field)}
            className={`w-full bg-zinc-700 border rounded-sm px-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 outline-none transition-colors ${
              errors[field] ? "border-red-500" : "border-zinc-600 focus:border-red-500"
            }`}
          />
          {errors[field] && (
            <p className="text-red-400 text-[10px] mt-1">{errors[field]}</p>
          )}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        className="w-full bg-red-600 hover:bg-red-700 text-white text-[10px] font-bold tracking-widest uppercase py-2 rounded-sm transition-colors mt-1"
      >
        SIGN UP
      </button>
    </div>
  );
}

export default function JoinEcosystem() {
  return (
    <section className="bg-zinc-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-black uppercase tracking-wide mb-6">JOIN THE ECOSYSTEM</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {JOIN_ROLES.map((role) => (
            <RoleForm key={role} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}
