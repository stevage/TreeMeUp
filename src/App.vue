<template lang="pug">
    #app.flex.flex-column.vh-100.avenir
        #top.bb.b--gray.bg-light-green
            h1.f4.ph1.pv1.mv0.fl Tree Me Up!
            p.fl.ma2 Powered by 
                span.lancelot.dark-green opentrees.org
                img.w1.v-top.ml2(src="cubetree-logo.png")
        #middle.flex.flex-auto
            #sidebar.br.b--light-gray.overflow-auto.w-100
                .intro(v-if="!hideIntro") Want to know what that council-managed tree is? Stand next to it and push the button. 
                .cl.f7.link.dim.ph3.ma3.pv2.dib.white.bg-blue.pointer(@click="lookup") What tree am I next to?
                .pa2
                    TreeLookup
                Results
                FeatureInfo
                p <i>Tree Me Up</i> works in these local government areas:
                p
                    span.f7(v-for="council of councils") {{ council }},  
                    br
            //- #map-container.relative.flex-auto
            //-     Map
            //-     #overlay.absolute
        #bottom.bt.b--light-gray.flex-none
</template>

<script>
import Map from './components/Map.vue'
import FeatureInfo from './components/FeatureInfo.vue'
import TreeLookup from './components/TreeLookup.vue'
import { EventBus } from './EventBus';
import Results from '@/components/Results.vue';
import sources from './sources';
window.app = {
}
export default {
    name: 'app',
    components: {
      Map,
      FeatureInfo,
      TreeLookup,
      Results
    },
    data() {
        return {
            hideIntro: undefined
        }
    },
    created() {
        window.app.App = this;
        // EventBus.$on('results',
    },
    methods: {
        lookup() {
            EventBus.$emit('request-lookup');
        }
    },
    computed: {
        councils() {
            return sources.map(s => s.long);
        }
    },
}

require('tachyons/css/tachyons.min.css');
</script>

<style>
html, body {
  height: 100vh;
  width: 100%;
  margin:0;
  padding:0;
}
#sidebar {
    /* min-width:200px; */
}

.bg-green {
    background: hsl(98.6, 30.4%, 82%) !important;
}

.dark-green {
    color: hsl(100, 29.4%, 30%) !important;
}

.light-green {
    color: hsl(100, 29.4%, 50%) !important;
}

.bg-light-green {
    background: hsl(100, 29.4%, 90%) !important;
}

.lancelot {
    font-family:lancelot,sans-serif;
}


</style>
