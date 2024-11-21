import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Usuário registrado com sucesso:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao registrar usuário:", error.message);
    throw error;
  }
};
