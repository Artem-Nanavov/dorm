import createAxiosShit from 'library/utils/fetch';

export const createPetitionApi = (title: string, text: string) => createAxiosShit().post('/petitions/create', {title, text});

export const getPetitionApi = () => createAxiosShit().get('/petitions');
