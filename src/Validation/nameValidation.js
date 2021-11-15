export function validateName(name) {
  const regex = /^[A-Za-z ]*$/;
  const isValid = regex.test(name);
  if (name.trim() === "") {
    return {
      status: false,
      message: "Name can't be empty",
    };
  }
  if (isValid) {
    return { status: true };
  } else {
    return {
      message: "Name can only contain lowercase and uppercase characters!",
      status: false,
    };
  }
}
