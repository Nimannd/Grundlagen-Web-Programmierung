const API_BASE_URL = 'http://localhost:80/api/todo';

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorData = await response.json();
        const error = new Error('An error occurred');
        error.data = errorData;
        throw error;
    }

    if (response.status === 204) {
        return null;
    }
    return response.json();
};

const todoService = {
    get: async () => {
        const response = await fetch(API_BASE_URL);
        return handleResponse(response);
    },

    post: async (data) => {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    put: async (data) => {
        const response = await fetch(API_BASE_URL, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    },

    delete: async (data) => {
        const response = await fetch(API_BASE_URL, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return handleResponse(response);
    }
};

export default todoService;
