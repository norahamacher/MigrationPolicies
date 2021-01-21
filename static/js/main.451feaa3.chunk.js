(this.webpackJsonpMigrationPolicies=this.webpackJsonpMigrationPolicies||[]).push([[0],{105:function(e,t,i){e.exports=i(174)},110:function(e,t,i){},111:function(e,t,i){},138:function(e,t){},174:function(e,t,i){"use strict";i.r(t);var a=i(9),n=i.n(a),o=i(74),r=i(21),u=i(2),l=i(3),s=i(4),c=i(5),p=i(1),m=i.n(p),d=i(19),h=i.n(d),g=(i(110),i(111),i(18)),y=i(7),f=i(84),b=i(76),v=i.n(b),x=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(u.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).m_actionFilter=null,e.state={visible:!0,id:e.props.id,paragraphs:[]},e}return Object(l.a)(i,[{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.props.paragraphs.length;t++)e.push({text:this.props.paragraphs[t].props.content.text,filter:this.props.paragraphs[t].props.actionFilter}),this.setState({paragraphs:e})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return m.a.createElement("section",{id:"section_"+this.state.id,className:"storyPanelSection ".concat(this.state.visible&&this.state.id===this.props.activeID?"activePanel":"inactivePanel")},0!==this.props.period[0]?m.a.createElement("div",{id:"chap_"+this.props.chapter,className:"sticky sectiontitle"}," ",this.props.period[0]," - ",this.props.period[1]):"",m.a.createElement("div",{className:"panelcontent"},this.props.paragraphs.map((function(t,i){return m.a.createElement(q,Object(y.a)({key:"chap_"+e.props.chapter+"_id_p"+i,id:"chap_"+e.props.chapter+"_id_p"+i,paragraph:t.props.content.text,panToFilter:t.props.panToFilter,highlightFilter:t.props.highlightFilter,animation:t.props.animation,yearStart:t.props.content.minYear,yearEnd:t.props.content.maxYear,updatePeriod:0===e.props.period[0],app:e.props.app},"id",e.props.id))}))))}}]),i}(p.Component),q=function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(u.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).m_firedAction=!1,e.m_statusChanged=!1,e.m_filterArray=["any",[]],e.state={id:e.props.id,visible:!1},e.handleScroll=function(t){if(e.state.visible){var i=h.a.findDOMNode(Object(g.a)(e)).getBoundingClientRect().top;i>80&&i<400?e.state.highlighted||(!0!==e.props.animation||e.m_firedAction?e.props.app.stopAnimation():(e.props.app.doChapterAnimation(e.props.highlightFilter.objects),e.m_firedAction=!0),e.setState({highlighted:!0}),e.props.app.highlightObjects(e.props.highlightFilter.objects),e.props.app.setActiveID(e.props.id),e.props.app.updateYears(e.props.yearStart,e.props.yearEnd),e.props.panToFilter&&e.props.app.panToCountry(e.props.panToFilter.country)):e.state.highlighted&&(e.setState({highlighted:!1}),e.m_firedAction=!1)}},e.paragraphChange=function(t){e.setState({visible:t.isIntersecting})},e}return Object(l.a)(i,[{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return m.a.createElement("div",null,this.props.updatePeriod?m.a.createElement("div",{className:"sticky sectiontitle"}," ",this.props.yearStart," - ",this.props.yearEnd):"",m.a.createElement(f.a,{onChange:this.paragraphChange},m.a.createElement("p",{className:"scrolltext ".concat(this.state.highlighted?"active":""),id:this.props.id},v()(this.props.paragraph))))}}]),i}(p.Component),k=i(39),E=i(190),Y=(p.Component,Object(k.a)({root:{color:"#52af77",height:12},thumb:{height:24,width:48,backgroundColor:"#fff",border:"1px solid currentColor",borderRadius:0,marginTop:-8,marginLeft:-12,"&:focus, &:hover, &$active":{boxShadow:"inherit"}},active:{},valueLabel:{top:5,left:7,fontSize:14,"& *":{background:"transparent",color:"#000"}},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(E.a)),w=i(28),I=i(78),C=i.n(I),A=Object(y.a)({Israel:{lat:31.0461,lon:34.8516},Europe:{lat:54.526,lon:15.2551},"China-Japan":{lat:35.8617,lon:114.1954},India:{lat:20.5937,lon:78.9629},Eritrea:{lat:15.1794,lon:39.7823},Mexico:{lat:23.6345,lon:-102.5528},Germany:{lat:51.1657,lon:10.4515},France:{lat:46.2276,lon:2.2137},Italy:{lat:41.8719,lon:12.5674},China:{lat:35.8617,lon:114.1954},Japan:{lat:36.2048,lon:138.2529},Philippines:{lat:12.8797,lon:121.774},Nepal:{lat:28.3949,lon:84.124},Bangladesh:{lat:23.685,lon:90.3563},Pakistan:{lat:30.3753,lon:69.3451},Kazakhstan:{lat:48.0196,lon:66.9237},Kyrgyzstan:{lat:41.2044,lon:74.7661},Tajikistan:{lat:38.861,lon:71.2761},Turkmenistan:{lat:38.9697,lon:59.5563},Uzbekistan:{lat:41.3775,lon:64.5853},Hungary:{lat:51.1657,lon:10.4515},"Czech Republic":{lat:51.1657,lon:10.4515},Estonia:{lat:56.8796,lon:24.6032},Latvia:{lat:56.8796,lon:24.6032},Lithuania:{lat:56.8796,lon:24.6032},Poland:{lat:51.1657,lon:10.4515},Slovakia:{lat:51.1657,lon:10.4515},Slovenia:{lat:51.1657,lon:10.4515},Ireland:{lat:53.1424,lon:-7.6921},Portugal:{lat:39.3999,lon:-8.2245},"Central African Republic":{lat:6.6111,lon:20.9394},Brazil:{lat:-15.628,lon:-52.7226},Cuba:{lat:21.5218,lon:-77.7812},Africa:{lat:6.6111,lon:20.9394},"South America":{lat:-15.628,lon:-52.7226}},"Europe",{lat:51.1657,lon:10.4515});function P(e){return A[e]}i(173);var D,S=i(83),T=(i(170),function(e){Object(s.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(u.a)(this,i);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).m_debug=!0,e.updateDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight,panelHeight:window.innerHeight-100})},e.state={sections:[],width:0,height:0,activeId:0,panelHeight:800,minYear:1945,maxYear:2020,pointOfView:null,autoRotate:!0,highlightCountries:[]},e.panelChanged=!1,e.UNSAFE_componentWillMount=function(){var e;for(window.addEventListener("resize",this.updateDimensions),this.updateDimensions(),e=0;e<w.sections.length;e++)w.sections[e].renderparagraphs=this.createPanelContent(w.sections[e].year,w.sections[e].paragraphs);this.setState({sections:w.sections})},e.allPanels=[],e.setActiveID=function(t){e.setState({activeId:t})},e.panToCountry=function(t){void 0!==t&&null!==t?(console.log("should pan to country: "+t),e.setState({pointOfView:{lat:P(t).lat,lon:P(t).lon,altitude:1,ms:1e3},autoRotate:!1,animation:!1})):e.setState({pointOfView:null,autoRotate:!0})},e.stopAnimation=function(){e.setState({animation:!1})},e}return Object(l.a)(i,[{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"createPanelContent",value:function(e,t){for(var i=[],a="",n=0;n<t.length;n++){a=e+"_"+n;var o={objects:[]},r="",u=!1;if(t[n].features)for(var l=0;l<t[n].features.length;l++){var s=t[n].features[l];"link"===s.type&&(t[n].text=t[n].text.replace(s.text,'<a href="'+s.url+'" target="_blank">'+s.text+"</a>"))}if(t[n].actions)for(var c=0;c<t[n].actions.length;c++){var p=t[n].actions[c];if(void 0!==p.highlight)for(var d=0;d<p.highlight.keywords.length;d++)t[n].text=t[n].text.replace(p.highlight.keywords[d].name,"<span class='bold'>"+p.highlight.keywords[d].name+"</span>"),o.objects.push(p.highlight.keywords[d]);void 0!==p.panTo&&(r={country:p.panTo}),void 0!==p.animation&&(u=!0)}i.push(m.a.createElement("div",{content:t[n],id:a,animation:u,panToFilter:r,highlightFilter:o}))}return i}},{key:"highlightObjects",value:function(e){this.setState({highlightCountries:e})}},{key:"doChapterAnimation",value:function(e){console.log("chapterAnimation"),this.setState({animation:!0,highlightCountries:e})}},{key:"updateYears",value:function(e,t){this.setState({minYear:e,maxYear:t})}},{key:"cap",value:function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"App"},m.a.createElement("div",{className:"MainContainer"},m.a.createElement("div",{className:"navbar",id:"yearNav"},this.state.sections.map((function(t,i){return m.a.createElement(L,{key:i,id:i,chapter:t.chapter,name:t.title,activeId:e.state.activeId})}))),m.a.createElement("div",{className:"Panels topDistance",style:{height:this.state.panelHeight}},this.state.sections.map((function(t,i){return m.a.createElement(x,{key:i,id:i,app:e,activeID:e.state.activeId,title:t.title,chapter:t.chapter,paragraphs:t.renderparagraphs,period:t.period})}))),m.a.createElement(M,{height:this.state.height,animation:this.state.animation,animCallback:this.stopAnimation,highlightCountries:this.state.highlightCountries,autoRotate:this.state.autoRotate,pointOfView:this.state.pointOfView,width:parseInt(this.state.width/2),minYear:this.state.minYear,maxYear:this.state.maxYear})))}}]),i}(p.Component)),L=function(e){var t=e.id,i=e.name,a=e.chapter,n=e.activeId;return m.a.createElement(C.a,{selector:"#chap_".concat(a),alignToTop:!1},m.a.createElement("div",{className:"navItem ".concat(t===n?"navItemActive":""," ")}," ",i," "))},U=m.a.useState,N=m.a.useEffect,O=m.a.useRef,j=null,z=!0,M=function(e){var t=e.width,i=e.height,a=e.minYear,u=e.maxYear,l=e.pointOfView,s=e.animation,c=e.animCallback,p=e.highlightCountries,d=U({features:[]}),h=Object(r.a)(d,2),g=h[0],y=h[1],f=U(),b=Object(r.a)(f,2),v=b[0],x=b[1],q=U(""),k=Object(r.a)(q,2),E=k[0],Y=k[1],w=O();N((function(){fetch("/MigrationPolicies/mergedMigrations.json").then((function(e){return console.log(e),e.json()})).then(y)}),[]);var I=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function C(){return(C=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Animationstart"),console.log(p),w.current.controls().autoRotate=!1,D=0;case 4:if(!(D<p.length)){e.next=18;break}if(console.log(D),!s){e.next=13;break}return Y(p[D]),A(P(p[D].name).lat,P(p[D].name).lon),e.next=11,I(1300);case 11:e.next=15;break;case 13:return console.log("interrupted animation"),e.abrupt("break",18);case 15:D++,e.next=4;break;case 18:c(),z=!1,Y("");case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){w.current.pointOfView({lat:e,lng:t,altitude:1},1e3)}return N((function(){s&&z?(console.log("animatino once"),w.current.controls().autoRotate=!1,z=!1,function(){C.apply(this,arguments)}()):s||(D=5e3,null!==l?j!==l&&(w.current.pointOfView({lat:l.lat,lng:l.lon,altitude:l.altitude},l.ms),w.current.controls().autoRotate=!1,j=l):(null!==j&&w.current.pointOfView({lat:j.lat,lng:j.lon,altitude:2.5},j.ms),w.current.controls().autoRotate=!0,w.current.controls().autoRotateSpeed=.4,j=null)),s||(D=5e3,z=!0)})),m.a.createElement("div",{className:"globeContainer"},m.a.createElement(S.a,{ref:w,width:t,height:i,globeImageUrl:"//unpkg.com/three-globe@2.11.1/example/img/earth-day.jpg",backgroundColor:"white",polygonsData:g.features.filter((function(e){return"AQ"!==e.properties.ISO_A2})),polygonAltitude:function(e){return E.name===R(e,E.type)?.1:F(e.properties.migrationpolicies,a,u)?e===v?.06:.01:.004},polygonCapColor:function(e){return E.name===R(e,E.type)?"rgb(70,102,255)":p.indexOf(R(e,E.type))>-1?F(e.properties.migrationpolicies,a,u)?"rgba(222,235,247,0.9)":"rgba(222,235,247,0.7)":_(e.properties.migrationpolicies,a,u)},polygonSideColor:function(e){return E===e.properties.ADMIN?"rgba(0, 100, 0, 0.7)":"rgba(0, 100, 0, 0.15)"},polygonStrokeColor:function(e){return F(e.properties.migrationpolicies,a,u)?"#111":"lightgrey"},polygonLabel:function(e){var t=e.properties;return'\n        <div class="popup"><b>'.concat(t.ADMIN," (").concat(t.ISO_A2,")</b> <br />\n        ").concat(B(t.migrationpolicies,a,u),"\n        </div>\n      ")},onPolygonHover:x,polygonsTransitionDuration:300}))},R=function(e,t){return"country"===t?(console.log(e.properties.ADMIN),e.properties.ADMIN):e.properties.CONTINENT},_=function(e,t,i,a){if(e)for(var n=0;n<e.length;n++){var o=e[n]["Year of establishment"],r=e[n]["Year of disestablishment"];if("Nil"!==o&&void 0!==o&&void 0!==r)return parseInt(o.substr(0,4))<=i&&("Nil"===r||parseInt(r.substr(0,4))>t)?parseInt(o.substr(0,4))<t?"rgba(49,130,189,0.6)":"rgba(158,202,225,0.8)":"rgba(0,0,0,0.0)"}return"rgba(0,0,0,0.0)"},B=function(e,t,i){if(e)for(var a=0;a<e.length;a++){var n=e[a]["Year of establishment"],o=e[a]["Year of disestablishment"];if("Nil"!==n&&void 0!==n&&void 0!==o&&parseInt(n.substr(0,4))<=i&&("Nil"===o||parseInt(o.substr(0,4))>t)){var r="<b>Institution Name:</b> "+e[a]["Institution name"]+"<br />";return r+="<b>Institution Overview:</b> "+e[a]["Institution Overview"]+"<br />",r+="<b> Year of establishment: </b> "+e[a]["Year of establishment"]+"<br />",r+="<b> Year of disestablishment: </b> "+e[a]["Year of disestablishment"]+"<br />"}}return""},F=function(e,t,i){if(e)for(var a=0;a<e.length;a++){var n=e[a]["Year of establishment"],o=e[a]["Year of disestablishment"];if("Nil"!==n&&void 0!==n&&void 0!==o&&parseInt(n.substr(0,4))<=i&&("Nil"===o||parseInt(o.substr(0,4))>t))return!0}return!1};h.a.render(m.a.createElement(T,null),document.getElementById("root"))},28:function(e){e.exports=JSON.parse('{"sections":[{"chapter":1,"title":"Chapter 1","period":[1980,2020],"paragraphs":[{"minYear":1980,"maxYear":2020,"text":"        "},{"minYear":1980,"maxYear":2020,"text":"Whole world, overview of data, years 1980 - 2020. Todo: animate through time while scrolling, or make an animation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":2,"title":"Chapter 2","period":[0,0],"paragraphs":[{"minYear":1945,"maxYear":1970,"text":"Zoom into key world regions.  1945 - 1970 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"minYear":1971,"maxYear":1994,"text":"Zoom into key world regions.   1971 - 1994, 1994 - 2004, 2004 - 2020  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"minYear":1994,"maxYear":2004,"text":"Zoom into key world regions. 1994 - 2004 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},{"minYear":2004,"maxYear":2020,"text":"Zoom into key world regions.2004 - 2020 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":3,"title":"Chapter 3","period":[1945,1955],"paragraphs":[{"minYear":1945,"maxYear":1955,"text":"Animation Paragraph, Israel, Europe, China, Japan 1945-1955 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Israel","type":"country"},{"name":"Europe","type":"continent"},{"name":"China","type":"country"},{"name":"Japan","type":"country"}]}},{"animation":true}]},{"minYear":1945,"maxYear":1955,"text":"Israel,  1945-1955 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Israel","type":"country"},{"name":"Europe","type":"continent"},{"name":"China","type":"country"},{"name":"Japan","type":"country"}]}},{"panTo":"Israel"}]},{"minYear":1945,"maxYear":1955,"text":" Europe,1945-1955 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"type":"continent","keywords":[{"name":"Israel","type":"country"},{"name":"Europe","type":"continent"},{"name":"China","type":"country"},{"name":"Japan","type":"country"}]}},{"panTo":"Europe"}]},{"minYear":1945,"maxYear":1955,"text":" Japan & China, 1945-1955 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Israel","type":"country"},{"name":"Europe","type":"continent"},{"name":"China","type":"country"},{"name":"Japan","type":"country"}]}},{"panTo":"China-Japan"}]}]},{"chapter":4,"title":"Chapter 4","period":[1970,1994],"paragraphs":[{"minYear":1970,"maxYear":1994,"text":"Animation Paragraph, India, Eritrea, Mexico 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"type":"country","keywords":[{"name":"India","type":"country"},{"name":"Eritrea","type":"country"},{"name":"Mexico","type":"country"}]}},{"animation":true}]},{"minYear":1970,"maxYear":1994,"text":"India, 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"type":"country","keywords":[{"name":"India","type":"country"},{"name":"Eritrea","type":"country"},{"name":"Mexico","type":"country"}]}},{"panTo":"India"}]},{"minYear":1970,"maxYear":1994,"text":" Eritrea,  1970-2994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"type":"country","keywords":[{"name":"India","type":"country"},{"name":"Eritrea","type":"country"},{"name":"Mexico","type":"country"}]}},{"panTo":"Eritrea"}]},{"minYear":1970,"maxYear":1994,"text":" Mexico, 1970-2994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"type":"country","keywords":[{"name":"India","type":"country"},{"name":"Eritrea","type":"country"},{"name":"Mexico","type":"country"}]}},{"panTo":"Mexico"}]}]},{"chapter":5,"title":"Chapter 5","period":[1970,1994],"paragraphs":[{"minYear":1970,"maxYear":1994,"text":"Animation Paragraph, Philippines, South Asia (India, Nepal, Bangladesh, Pakistan), Central Asia 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Philippines","type":"country"},{"name":"India","type":"country"},{"name":"Nepal","type":"country"},{"name":"Bangladesh","type":"country"},{"name":"Pakistan","type":"country"},{"name":"Kazakhstan","type":"country"},{"name":"Kyrgyzstan","type":"country"},{"name":"Tajikistan","type":"country"},{"name":"Turkmenistan","type":"country"},{"name":"Uzbekistan","type":"country"}]}},{"animation":true}]},{"minYear":1970,"maxYear":1994,"text":"Philippines, South Asia (India, Nepal, Bangladesh, Pakistan), Central Asia 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Philippines","type":"country"},{"name":"India","type":"country"},{"name":"Nepal","type":"country"},{"name":"Bangladesh","type":"country"},{"name":"Pakistan","type":"country"},{"name":"Kazakhstan","type":"country"},{"name":"Kyrgyzstan","type":"country"},{"name":"Tajikistan","type":"country"},{"name":"Turkmenistan","type":"country"},{"name":"Uzbekistan","type":"country"}]}},{"panTo":"Philippines"}]},{"minYear":1970,"maxYear":1994,"text":"Philippines, South Asia (India, Nepal, Bangladesh, Pakistan), Central Asia 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Philippines","type":"country"},{"name":"India","type":"country"},{"name":"Nepal","type":"country"},{"name":"Bangladesh","type":"country"},{"name":"Pakistan","type":"country"},{"name":"Kazakhstan","type":"country"},{"name":"Kyrgyzstan","type":"country"},{"name":"Tajikistan","type":"country"},{"name":"Turkmenistan","type":"country"},{"name":"Uzbekistan","type":"country"}]}},{"panTo":"India"}]},{"minYear":1970,"maxYear":1994,"text":"Philippines, South Asia (India, Nepal, Bangladesh, Pakistan), Central Asia 1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Philippines","type":"country"},{"name":"India","type":"country"},{"name":"Nepal","type":"country"},{"name":"Bangladesh","type":"country"},{"name":"Pakistan","type":"country"},{"name":"Kazakhstan","type":"country"},{"name":"Kyrgyzstan","type":"country"},{"name":"Tajikistan","type":"country"},{"name":"Turkmenistan","type":"country"},{"name":"Uzbekistan","type":"country"}]}},{"panTo":"Kazakhstan"}]}]},{"chapter":6,"title":"Chapter 6","period":[0,0],"paragraphs":[{"minYear":1994,"maxYear":2004,"text":"Animation Paragraph,Europe, Hungary, A8 and the Balkans,Ireland, Portugal, France,   1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Hungary","type":"country"},{"name":"Czech Republic","type":"country"},{"name":"Estonia","type":"country"},{"name":"Latvia","type":"country"},{"name":"Lithuania","type":"country"},{"name":"Poland","type":"country"},{"name":"Slovakia","type":"country"},{"name":"Slovenia","type":"country"},{"name":"Ireland","type":"country"},{"name":"Portugal","type":"country"},{"name":"France","type":"country"}]}},{"animation":true}]},{"minYear":1994,"maxYear":2004,"text":"Europe, Hungary, A8 and the Balkans,Ireland, Portugal, France, 1994-2004 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Hungary","type":"country"},{"name":"Czech Republic","type":"country"},{"name":"Estonia","type":"country"},{"name":"Latvia","type":"country"},{"name":"Lithuania","type":"country"},{"name":"Poland","type":"country"},{"name":"Slovakia","type":"country"},{"name":"Slovenia","type":"country"},{"name":"Ireland","type":"country"},{"name":"Portugal","type":"country"},{"name":"France","type":"country"}]}},{"panTo":"France"}]},{"minYear":2002,"maxYear":2007,"text":"Animation Paragraph,  1970-1994 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Africa","type":"continent"}]}},{"animation":true}]},{"minYear":2002,"maxYear":2007,"text":"Africa (whole continent) 2002-2007 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Africa","type":"continent"}]}},{"panTo":"Central African Republic"}]},{"minYear":2001,"maxYear":2005,"text":"South America 2001-2005 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"South America","type":"continent"}]}},{"panTo":"Brazil"}]},{"minYear":2006,"maxYear":2009,"text":"Caribbean 2006-2009 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.","actions":[{"highlight":{"keywords":[{"name":"Cuba","type":"country"},{"name":"Haiti","type":"country"},{"name":"Dominican Republic","type":"country"},{"name":"Puerto Rico","type":"country"},{"name":"Jamaica","type":"country"},{"name":"Trinidad and Tobago","type":"country"},{"name":"Suriname","type":"country"},{"name":"Bahamas","type":"country"},{"name":"Belize","type":"country"},{"name":"Barbados","type":"country"},{"name":"Guyana","type":"country"},{"name":"Saint Lucia","type":"country"},{"name":"Grenada","type":"country"},{"name":"Antigua and Barbuda","type":"country"},{"name":"Dominica","type":"country"},{"name":"Angola","type":"country"}]}},{"panTo":"Cuba"}]}]},{"chapter":7,"title":"Chapter 7","period":[0,0],"paragraphs":[{"minYear":1989,"maxYear":2020,"text":"Black Sea region (see map on p163 of book), Russia, Moldova, Georgia, Azerbaijan, Armenia, Turkey 1989-2020 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":8,"title":"Chapter 8","period":[2004,2020],"paragraphs":[{"minYear":2004,"maxYear":2020,"text":"Global institutions - spinning globe?,Geneva - United Nations, New York - United nations,Europe - 2015 migration crisis 2004-2020 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":9,"title":"Chapter 9","period":[2004,2020],"paragraphs":[{"minYear":2004,"maxYear":2020,"text":"International organizations around the world,  The world bank, Global migration group, International organization for migration, Diaspora engagement industry 2004-2020 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":10,"title":"Chapter 10","period":[2004,2020],"paragraphs":[{"minYear":2004,"maxYear":2020,"text":"Following policies - see diagram on p234 of book, Mexico-Israel-Phillipines (sequence), Israel-Ireland-Philippines-Isreal (3-coutnry loop),  Israel-Mexico-Ireland-Philipines-Israel (4 country loop), India-Philippines-Ireland-Mexico-Isreal (see diagram on p234) 2004-2020 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]},{"chapter":11,"title":"Conclusion","period":[2004,2020],"paragraphs":[{"minYear":2004,"maxYear":2020,"text":"Zoom out to level of whole world, whole time frame, like intro chapter / chapter 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}]}]}')}},[[105,1,2]]]);
//# sourceMappingURL=main.451feaa3.chunk.js.map