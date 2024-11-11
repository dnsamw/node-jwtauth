import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export const generateToken = (userId: number): string => {
  return jwt.sign({ id: userId }, config.jwtSecret, {
    expiresIn: '24h',
  });
};

export const verifyToken = (token: string): jwt.JwtPayload | null => {
  try {
    return jwt.verify(token, config.jwtSecret) as jwt.JwtPayload;
  } catch (error) {
    return null;
  }
};