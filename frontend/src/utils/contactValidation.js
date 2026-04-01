export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^\d{10}$/;

export function sanitizeContactForm(form) {
  return {
    ...form,
    name: form.name.trim(),
    url: form.url.trim(),
    mobileNo: form.mobileNo.trim(),
    email: form.email.trim(),
    companyName: form.companyName.trim(),
    title: form.title.trim(),
    group: form.group.trim(),
  };
}

export function validateContactForm(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Name is required.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!form.mobileNo.trim()) {
    errors.mobileNo = "Phone number is required.";
  } else if (!PHONE_REGEX.test(form.mobileNo.trim())) {
    errors.mobileNo = "Phone number must be exactly 10 digits.";
  }

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (form.url.trim()) {
    try {
      new URL(form.url.trim());
    } catch {
      errors.url = "Please enter a valid URL.";
    }
  }

  return errors;
}
