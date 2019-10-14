import musicService from '@/services/music.service';

const trackService = {};

trackService.search = async (q) => {

    const type = 'track'

    try {
        const response = await musicService.get('/search', {
            params: { q, type }
        });
        return response.data;

    } catch (error) {
        throw trackService.handleError(error);
    }
}

trackService.searchById = async (id) => {

    try {
        const response = await musicService.get(`/tracks/${id}`);
        return response.data;
    }
    catch (error) {
        throw trackService.handleError(error);
    }
}

trackService.handleError = (error) => {
    throw Error(error);
}

export default trackService;
