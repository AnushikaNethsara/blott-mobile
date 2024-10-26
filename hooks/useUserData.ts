import { useState, useEffect } from "react";
import { getData, storeData, removeData } from "../utils/utils";

interface UserDataProps {
    firstName: string;
    lastName: string;
}

export const useUserData = () => {
    const [userData, setUserData] = useState<UserDataProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedValues = await getData<UserDataProps>("userData");
                if (storedValues) {
                    setUserData(storedValues);
                    return storedValues;
                }
            } catch (err) {
                setError("Failed to fetch user data");
            } finally {
                setLoading(false);
            }            
        };

        fetchUserData();
    }, []);

    const saveUserData = async (newData: UserDataProps) => {
        try {
            await removeData("userData")
            await storeData<UserDataProps>("userData", newData);
            setUserData(newData);
        } catch (err) {
            setError("Failed to save user data");
        }
    };

    return { userData, saveUserData, loading, error };
};
