import * as yup from 'yup';

/**
 * Validation Schemas using Yup
 * Type-safe form validation for all forms
 */

// Register Form Validation
export const registerSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  username: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must not exceed 20 characters')
    .matches(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers and underscores'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must not exceed 50 characters'),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;

// Login Form Validation
export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;

// Chat Message Validation
export const messageSchema = yup.object({
  content: yup
    .string()
    .required('Message cannot be empty')
    .min(1, 'Message cannot be empty')
    .max(5000, 'Message must not exceed 5000 characters'),
});

export type MessageFormData = yup.InferType<typeof messageSchema>;
