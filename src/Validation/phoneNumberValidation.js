export function validatePhoneNumber(number) {
  const regex = /^[-+]?[0-9]+$/;
  const isValid = regex.test(number);

  if (number.trim() === "") {
    return {
      status: false,
      message: "Phone Number can't be empty",
    };
  }

  if (!isValid) {
    return {
      status: false,
      message: "Please enter a valid phone number (can only contain numbers)",
    };
  }

  if (number.length < 9) {
    return {
      status: false,
      message:
        "Please enter a valid phone number (must be at least 9 characters length)",
    };
  } else if (number.length > 14) {
    return {
      status: false,
      message:
        "Please enter a valid phone number (must be at max 14 characters length)",
    };
  }

  return {
    status: true,
  };
}
