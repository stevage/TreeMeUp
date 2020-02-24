<template lang="pug">
#TreeLookup
    .status {{ status }}

</template>
<script>
import { EventBus } from '../EventBus';
import { geoLocationGetCurrentPositionPromise as getCurrentPosition} from 'geolocation-promise';
import axios from 'axios';
import cheapRuler from 'cheap-ruler';

export default {
    name: "TreeLookup",
    data: () => ({
        status: undefined,
    }),
    created() {
        window.TreeLookup = this;
        EventBus.$on('request-lookup', () => this.lookup());
    },
    methods: {
        async lookup() {
            this.trees = [];
            if (!navigator.geolocation) {
                this.status = 'You need to enable geolocation in your browser.';
                return
            }
            this.status = 'Getting location...'
            try {
                const pos  = (await getCurrentPosition()).coords;
                const coords = [pos.longitude, pos.latitude];
                // console.log(position);
                this.status = 'Finding your nearest tree';//`Position: ${coords}`
                this.ruler = cheapRuler(pos.latitude, 'meters');
                const trees = (await axios.get(`https://api.mapbox.com/v4/stevage.9slh6b3l/tilequery/${coords}.json`, { 
                    params: {
                        radius: 25,
                        access_token: 'pk.eyJ1Ijoic3RldmFnZSIsImEiOiJjazZzd3V2dXEwNGZlM2xtZzFnOXdkOTFtIn0.pKVxwqE61gNc7PKK5u1j6g'
                    }
                })).data.features.map(t => (t.properties.distance = this.ruler.distance(coords, t.geometry.coordinates),  t));
                this.status = ''
                EventBus.$emit('results', trees);
                
            } catch (e) {
                this.status = e;
                throw e;
            }
            
        }
    },
}
</script>

<style scoped>
.status {
}
</style>