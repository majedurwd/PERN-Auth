import { User } from '@/models';
import { Request, Response, NextFunction } from 'express'

const registerController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Implement registration logic here
      console.log("Registering user:", req.body);
      const { fullName, email, password } = req.body;
      const user = await User.create({ fullName, email, password });
      if (!user) {
        return res.status(400).json({ message: "Registration failed" });
      }
      res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Error registering user:", error);
        next(error);
    }
};

export default registerController;