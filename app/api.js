function api() {
    const getServices = () => {
        return fetch('https://127.0.0.1:8000/api/services', {
            type: "GET",
        }).then((res) => res.json());
    };

    return {
        getServices,
    };
}

export default api();