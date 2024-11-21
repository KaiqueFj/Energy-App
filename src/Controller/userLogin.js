import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Usuário logado com sucesso:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Erro ao logar usuário:", error.message);
    throw error;
  }
};
