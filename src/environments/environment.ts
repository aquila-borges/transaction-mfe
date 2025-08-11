const hostname = window?.location?.hostname || '';
export const environment = {
   production: hostname !== 'localhost' && hostname !== '127.0.0.1'
};