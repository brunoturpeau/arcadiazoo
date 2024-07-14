function api() {
    const getUsers = () => {
        return fetch('https://127.0.0.1:8000/api/services', {
            type: "GET",
        }).then((res) => res.json());
    };

    return {
        getUsers,
    };
}

export default api();