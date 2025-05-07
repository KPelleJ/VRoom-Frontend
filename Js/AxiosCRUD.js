const API_URL = 'Indsæt api her tak' ;

// resource is like saying User, Booking, in the url etc.
export async function getAll(resource) {
    try {
        const response = await axios.get(`${API_URL}${resource}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${resource}:`, error);
        throw error;
    }
}

export async function getById(resource, id) {
    try {
        const response = await axios.get(`${API_URL}${resource}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${resource} with ID ${id}:`, error);
        throw error;
    }
}

export async function create(resource, data) {
    try {
        const response = await axios.post(`${API_URL}${resource}/`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        return response.data;
    } catch (error) {
        console.error(`Error creating ${resource}:`, error);
        throw error;
    }
}

export async function update(resource, id, data) {
    try {
        await axios.put(`${API_URL}${resource}/${id}`, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    } catch (error) {
        console.error(`Error updating ${resource} with ID ${id}:`, error);
        throw error;
    }
}

export async function remove(resource, id) {
    try {
        await axios.delete(`${API_URL}${resource}/${id}`);
    } catch (error) {
        console.error(`Error deleting ${resource} with ID ${id}:`, error);
        throw error;
    }
}