export class LoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LoginError';
  }
}

export class SignupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SignupError';
  }
}

export class LogoutError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LogoutError';
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
