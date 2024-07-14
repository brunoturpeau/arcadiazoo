'use client'
import React, { useState, useEffect } from "react";
import api from "@/app/api";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        !isMounted &&

        api.getUsers().then((json) => {
            setUsers(json);
            console.log(json)
            console.log(users)
            setIsMounted(true);
        });
    }, [isMounted]);

    return (
        <ul>

            {

            }

        </ul>
    );
};

export default UserList;