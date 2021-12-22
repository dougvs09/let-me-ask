import { firebase, auth } from "../services/firebase"
import { createContext, ReactNode, useEffect, useState } from "react"

type AuthContextType = {
  user: User | undefined;
  loginWithGoogle: () => Promise<void>;
}

type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children } : AuthContextProviderProps) => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        const { displayName, photoURL, uid } = user

        if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Acconut.')
        }

        setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
        })
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result  = await auth.signInWithPopup(provider);

    if(result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Acconut.')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}