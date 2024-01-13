
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const signUp = (data) =>{
        setUser(data);
    }

    const login = (email, password) => {


        if(user && email==user.email && password==user.password){
            return true;
        }
        else{
            return false;
        }

    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout ,signUp}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
