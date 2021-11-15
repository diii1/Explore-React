export function validateEmail(email) {
  const regex = /(.+)@(.+){2,}\.(.+){2,}/;
  const isValid = regex.test(email);
  if (email.trim() === "") {
    return {
      status: false,
      message: "Email can't be empty",
    };
  }
  if (isValid) {
    return { status: true };
  } else {
    return {
      status: false,
      message: "Please enter a valid email address!",
    };
  }
}
