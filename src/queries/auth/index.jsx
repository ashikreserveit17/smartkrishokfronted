import instance from "../../services";



const signup = (data) => {
    return instance.post("/signup", { ...data, type: "User" });
};