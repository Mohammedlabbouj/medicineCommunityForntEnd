export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  dob: string;
}

export interface SingUpProps {
  handlesignUp: () => void;
}
export interface CodeVerificationProps {
  handleVerification: () => void;
}
export interface RoleProps {
  onContinue: () => void;
}
