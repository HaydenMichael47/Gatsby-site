"use strict";(self.webpackChunkgatsby_site=self.webpackChunkgatsby_site||[]).push([[745],{9091:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(1597),i=n(1309),u=i.PKp(i.Cn1),s=i.WUZ(".2f"),l=function(e){var t=e.index,n=e.pieData,r=e.colors,u=e.innerRadius,s=e.outerRadius,l=i.Nb1().innerRadius(u).outerRadius(s).padRadius(s).cornerRadius(15);return a.createElement("g",{key:t,className:"arc"},a.createElement("path",{className:"arc",d:function(e){return l({startAngle:e.startAngle,endAngle:e.endAngle})}(n),fill:r(t),stroke:"white"}),a.createElement("text",{transform:"translate("+l.centroid(n)+")",textAnchor:"middle",alignmentBaseline:"middle",fill:"white",fontSize:"10"},n.data.label))},o=function(e){var t=i.ve8().value((function(e){return e.value})).sort(null),n=i.Nb1().innerRadius(e.innerRadius).outerRadius(e.outerRadius),r=t(e.data);return a.createElement("svg",{width:e.width,height:e.height},a.createElement("g",{transform:"translate("+e.outerRadius+" "+e.outerRadius+")"},r.map((function(t,r){return a.createElement(l,{innerRadius:e.innerRadius,outerRadius:e.outerRadius,key:r,index:r,pieData:t,createArc:n,colors:u,format:s,cornerRadius:15})}))))},d=n(8631),c=n(4464);var m=function(e){for(var t=e.pageContext.pokemon,n=(0,a.useState)(!1),u=(n[0],n[1]),s=[],l="Type: ",m=0;m<t.types.length;m++)s.push(t.types[m].type.name),l+=t.types[m].type.name+"  ";(0,d.I0)();var h=i.w6H(6).map((function(e,n){return{label:t.stats[n].stat.name+": "+t.stats[n].base_stat,value:t.stats[n].base_stat}}));c.b;return a.createElement("div",{id:"mainDiv"},a.createElement("header",{id:"PokeHeader"},a.createElement("h1",null,t.name)),a.createElement("div",{id:"secondDiv"},a.createElement("img",{id:"PokeImg",onMouseOver:function(){return u(!0)},onMouseOut:function(){return u(!1)},src:t.sprites.front_default,alt:t.name}),a.createElement("h2",{id:"weightHeight"},"Height: ",t.height/10," m"),a.createElement("h2",{id:"weightHeight"},"Weight: ",t.weight/10," kg"),a.createElement("h2",{id:"weightHeight"},l.toString()),a.createElement(a.Fragment,null,a.createElement(o,{data:h,width:400,height:400,innerRadius:100,outerRadius:200,cornerRadius:15}))),a.createElement(r.rU,{to:"/pokemon",id:"link"},"Return to all Pokémon"),a.createElement("footer",{id:"PokeFooter"},"Made by Hayden Michael using POKEAPI"))}}}]);
//# sourceMappingURL=component---src-templates-pokemon-js-19ea725005d5e42294dc.js.map