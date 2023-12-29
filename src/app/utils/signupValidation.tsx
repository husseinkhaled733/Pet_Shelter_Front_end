'use client'
const validateUser = (user: any) => {
  let userValid = {
    name: true,
    email: true,
    password: true,
    phone: true
  };

  let errors = {
    name: '',
    email: '',
    password: '',
    phone: ''
  };

  if (!user.name) {
    userValid.name = false;
    errors.name = 'Name is required';
  }

  if (!user.email) {
    userValid.email = false;
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(user.email)) {
    userValid.email = false;
    errors.email = 'Email address is invalid';
  }

  if (!user.password) {
    userValid.password = false;
    errors.password = 'Password is required';
  } else if (user.password.length < 6) {
    userValid.password = false;
    errors.password = 'Password must be 6 or more characters';
  }

  if (!user.phone) {
    userValid.phone = false;
    errors.phone = 'Phone is required';
  } else if (!/^\d+$/.test(user.phone)) {
    userValid.phone = false;
    errors.phone = 'Phone number is invalid';
  }

  return { userValid, errors };
}

export default validateUser;