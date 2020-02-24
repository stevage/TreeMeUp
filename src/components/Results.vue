<template lang="pug">
#Results
    .tree(v-for="p of trees.map(f => f.properties)")
        //- p {{ JSON.stringify(p) }}
        div.bg-green
            h2.i.lancelot.f3.pa2.mv0.bg-green {{ p.common || p.scientific }}
                |  ({{ Math.round(p.distance) }}<span class="f5">m</span>)
        div.cl(v-if="p.class").f7.pa2.i
            | {{ p.class }} 
            span.light-green > 
            | {{ p.subclass }} 
            span.light-green > 
            | {{ p.family }}
            
        table.bg-white.helvetica.ma1
            tr(v-if="p.scientific")
                th Scientific name
                td {{ p.scientific }}
            tr(v-if="p.common")
                th Common name
                td {{ p.common }}
            tr(v-if="p.variety")
                th Variety
                td {{ p.variety }}
            tr(v-if="p.dbh")
                th Diameter
                td {{ p.dbh }} 
                    span.detail cm.
            tr(v-if="p.height")
                th Height
                td {{ p.height }} 
                    span.detail m.
            tr(v-if="p.planted")
                th Planted
                td {{ p.planted }}
            tr(v-if="p.maturity")
                th Maturity
                td {{ p.maturity }}
            //- tr(v-if="p.")
            //-     th 
            //-     td {{ p }}
            tr(v-if="p.species_count")
                th Count
                td {{ p.species_count.toLocaleString() }} 
                    span.detail similar trees
            tr(v-if="p.ref")
                th ID
                td {{ `#${p.ref}` }}
                
            //- tr(v-for="(value, prop) in p")
            
            //-     template(v-if="ignoreProps.indexOf(prop) === -1")
            //-         th.f6.dark-green {{ prop }}
            //-         td.f6 {{ value }}
        //- p.f7.tr.gray.mh2.i Source: 
        //-     a(:href="sourceUrl(p.source)" target="_blank") {{ p.source }}
        //- Wikipedia(:searchTerm="p.scientific")
</template>

<script>
import { EventBus } from '../EventBus';

export default {
    name: "Results",
    data: () => ({
        trees: []
    }),
    created() {
        window.Results = this;
        EventBus.$on('results', trees => this.trees = trees);
    }
}
</script>

<style scoped>

</style>