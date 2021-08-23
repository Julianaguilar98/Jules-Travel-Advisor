import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async ( sw, ne ) => {
    try {
        const { data: { data } } = await axios.get(url, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '92066643demsh78153fef2b39816p18ac98jsn0832aed0f5a2'
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }

};