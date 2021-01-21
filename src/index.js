import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/responsive.css'
//import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import StoryPanel from './StoryPanel.js'
//import * as d3 from 'd3'
import YearSlider from './YearSlider.js'
//import MapFunctions from './MapFunctions';
import sectiondata from './playdata/sections.json'
import ScrollIntoView from 'react-scroll-into-view'
//import Stackedbarchart from './stacked-bar.js'
//import GlobeFunctions from './GlobeFunctions.js'
import * as helper from './Helper.js'
import * as d3 from 'd3'
import Globe from 'react-globe.gl'
import { isElementOfType } from 'react-dom/test-utils';
class ScrollyTeller extends Component {


    m_debug = true


    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight, panelHeight: window.innerHeight - 100 });

    };

    //  m_mapfilter = null;
    state = {
        sections: [],
        width: 0,
        height: 0,
        //the years should be read from a file with their corresponding html content
        // sorteddata: [],
        activeId: 0,
        panelHeight: 800,
        minYear: 1945,
        maxYear: 2020,
        pointOfView: null,
        autoRotate: true,
        highlightCountries: []

    }
    panelChanged = false
    // m_mapFunctions = null
    //"Facility Name", "Status", "Region", "Technology", "Generator Capacity (MW)", "Latitude", "Longitude"


    UNSAFE_componentWillMount = function () {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions()
        let i
        for (i = 0; i < sectiondata.sections.length; i++) {
            sectiondata.sections[i].renderparagraphs = this.createPanelContent(sectiondata.sections[i].year, sectiondata.sections[i].paragraphs)

        }
        //   console.log(sectiondata.sections[4].renderparagraphs)
        //read the content from file.
        this.setState({
            sections: sectiondata.sections
        })

        //  console.log(sectiondata.sections)

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    allPanels = []
    setActiveID = (id) => {

        this.setState({
            activeId: id
        })
    }

    createPanelContent(year, paragraphs) {

        //read the text from somewhere based on the given year
        let result = [];

        let key = ""
        for (let i = 0; i < paragraphs.length; i++) {
            key = year + "_" + i
            let highlightFilter = {
                "objects": []
            }
            let panToFilter = "";
            let animate = false
            //check for features like links, if its a link, replace the "text" with a hyperlinnk to the "url"
            if (paragraphs[i].features) {
                for (let j = 0; j < paragraphs[i].features.length; j++) {
                    let feature = paragraphs[i].features[j]
                    if (feature.type === "link") {
                        paragraphs[i].text = paragraphs[i].text.replace(feature.text, '<a href="' + feature.url + '" target="_blank">' + feature.text + '</a>')
                        //                console.log(paragraphs[i].text)
                    }
                }
            }
            //if actions aredefined, they are added to the element here.
            if (paragraphs[i].actions) {
                for (let j = 0; j < paragraphs[i].actions.length; j++) {
                    let action = paragraphs[i].actions[j]
                    if (action["highlight"] !== undefined) {


                        //highlight means highlight the words in the text with a class of the same name, and filter things on the map of this name
                        for (let k = 0; k < action.highlight.keywords.length; k++) {
                            //     console.log(action.highlight.keywords[k])
                            paragraphs[i].text = paragraphs[i].text.replace(action.highlight.keywords[k], "<span class='bold'>" + action.highlight.keywords[k] + "</span>")
                            highlightFilter.objects.push(this.cap(action.highlight.keywords[k]))

                            //capitalise first letter otherwise the filter breaks 
                        }
                    }
                    if (action["panTo"] !== undefined) {
                        panToFilter = {
                            "country": action.panTo
                        }
                    }

                    if (action["animation"] !== undefined) {
                        animate = true
                    }
                }

            }
            result.push(
                <div content={paragraphs[i]} id={key} animation={animate} panToFilter={panToFilter} highlightFilter={highlightFilter} />
            )
        }
        console.log(result)
        return result

    }


    panToCountry = (country) => {
        if (country !== undefined && country !== null) {
            console.log("should pan to country: " + country)

            this.setState({
                pointOfView: { "lat": helper.getLocation(country).lat, "lon": helper.getLocation(country).lon, "altitude": 1, "ms": 1000 },
                autoRotate: false,
                animation: false
            })
        } else {
            this.setState({
                pointOfView: null,
                autoRotate: true

            })
        }
    }
    highlightObjects(objects) {
        //highlight countries on the globe
        this.setState({
            highlightCountries: objects
        })
    }

    doChapterAnimation(objects) {
        console.log("chapterAnimation")
        this.setState({
            animation: true,
            highlightCountries: objects
        })
    }

    stopAnimation = () => {
        this.setState({
            animation: false
        })
    }
    updateYears(min, max) {
        //    console.log("update years: " + min + "   " + max)
        this.setState({
            minYear: min,
            maxYear: max
        })
    }
    //capitalise the first letter of  string
    cap(lower) {
        return lower.replace(/^\w/, c => c.toUpperCase());
    }

    render() {
        return (
            <div className="App">

                <div className="MainContainer">
                    <div className="navbar" id="yearNav">
                        {this.state.sections.map(
                            (section, i) =>
                                <NavMenuItem
                                    key={i}
                                    id={i}
                                    chapter={section.chapter}
                                    name={section.title}
                                    activeId={this.state.activeId}
                                />
                        )}
                    </div>
                    <div className="Panels topDistance" style={{ height: this.state.panelHeight }}>

                        {this.state.sections.map(
                            (section, i) =>

                                <StoryPanel
                                    key={i}
                                    id={i}
                                    app={this}
                                    activeID={this.state.activeId} //the Storypanels figure out if they are the active panel and display accordingly
                                    title={section.title}
                                    chapter={section.chapter}
                                    paragraphs={section.renderparagraphs}
                                    period={section.period}
                                />
                        )}
                    </div>

                    <GlobeFunctions animation={this.state.animation} animCallback={this.stopAnimation} highlightCountries={this.state.highlightCountries} autoRotate={this.state.autoRotate} pointOfView={this.state.pointOfView} width={parseInt(this.state.width / 2)} minYear={this.state.minYear} maxYear={this.state.maxYear} />

                </div>

            </div>
        );
    }
}



const NavMenuItem = ({ id, name, chapter, activeId }) => (

    <ScrollIntoView
        selector={`#chap_${chapter}`}
        alignToTop={false} >
        <div className={`navItem ${id === activeId ? "navItemActive" : ""} `}> {name} </div>
    </ScrollIntoView>
)
const { useState, useEffect, useRef } = React;

const NOPOLICY = "rgba(0,0,0,0.0)"
const HIGHLIGHT_WITH_POLICY = "rgba(222,235,247,0.9)"
const HIGHLIGHT_NO_POLICY = "rgba(222,235,247,0.7)"
const ACTIVE_POLICY_ESTABLISHED_IN_PERIOD = "rgba(158,202,225,0.3)"
const ACTIVE_HISTORICAL_POLICY = "rgba(49,130,189,0.5)"
const POLYGON_SIDE_COLOR = "rgba(0, 100, 0, 0.15)"
const POLYGON_SIDE_COLOR_HIGHLIGHT ="rgba(0, 100, 0, 0.7)"
const ANIMATION_HIGHLIGHT_COLOR = "rgb(70,102,255)"
let lastPoint = null
let once = true;
const GlobeFunctions = ({ width, minYear, maxYear, pointOfView, animation, animCallback, highlightCountries }) => {

    const [countries, setCountries] = useState({ features: [] });
    const [hoverD, setHoverD] = useState();
    const [animationHighlightCountry,setHighlightCountry] = useState("");
    const globeEl = useRef()
    

    useEffect(() => {
        // load data
        fetch(process.env.PUBLIC_URL + '/mergedMigrations.json').then(response => {
            console.log(response);
            return response.json();
        }).then(setCountries);


    }, []);

    const sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    useEffect(() => {

        if (animation && once) {
            console.log("animatino once")
            globeEl.current.controls().autoRotate = false
            once = false
            animateFunc()


        } else if(!animation) {

            console.log("other actions")
            if (pointOfView !== null) {
                if (lastPoint !== pointOfView) {
                    globeEl.current.pointOfView({ lat: pointOfView.lat, lng: pointOfView.lon, altitude: pointOfView.altitude }, pointOfView.ms)
                    globeEl.current.controls().autoRotate = false
                    lastPoint = pointOfView
                }

            } else {
                if (lastPoint !== null)
                    globeEl.current.pointOfView({ lat: lastPoint.lat, lng: lastPoint.lon, altitude: 2.5 }, lastPoint.ms)
                globeEl.current.controls().autoRotate = true
                globeEl.current.controls().autoRotateSpeed = 1.0
                lastPoint = null

            }
        }

        if (!animation) {
            once = true
        }
        //   console.log(pointOfView)

    })


    async function animateFunc() {
        console.log("Animationstart")
        console.log(highlightCountries)

        globeEl.current.controls().autoRotate = false

        for (let i = 0; i < highlightCountries.length; i++) {
            console.log(animationHighlightCountry)
            setHighlightCountry(highlightCountries[i])
           panToLocation(helper.getLocation(highlightCountries[i]).lat,helper.getLocation(highlightCountries[i]).lon)
            await sleep(1000)
        }
        animCallback()
        once = false
        setHighlightCountry("")

    }

    function panToLocation(lat,lon){
        globeEl.current.pointOfView({ lat: lat, lng: lon, "altitude": 1}, 1000)
    }
    return <div className="globeContainer">

        <Globe
            ref={globeEl}
            width={width}
            globeImageUrl="//unpkg.com/three-globe@2.11.1/example/img/earth-day.jpg"
            // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            backgroundColor="white"
            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={d => animationHighlightCountry === d.properties.ADMIN ? 0.1 : hasActivePolicyInPeriod(d.properties.migrationpolicies, minYear, maxYear) ? d === hoverD ? 0.06 : 0.01 : 0.004}
            polygonCapColor={d => animationHighlightCountry === d.properties.ADMIN ? ANIMATION_HIGHLIGHT_COLOR :
                highlightCountries.indexOf(d.properties.ADMIN) > -1 ?
                hasActivePolicyInPeriod(d.properties.migrationpolicies, minYear, maxYear) ?
                    HIGHLIGHT_WITH_POLICY : HIGHLIGHT_NO_POLICY : getColor(d.properties.migrationpolicies, minYear, maxYear)}
            polygonSideColor={d => animationHighlightCountry === d.properties.ADMIN ? POLYGON_SIDE_COLOR_HIGHLIGHT :  POLYGON_SIDE_COLOR}
            polygonStrokeColor={d => hasActivePolicyInPeriod(d.properties.migrationpolicies, minYear, maxYear) ? '#111' : 'lightgrey'}
            polygonLabel={({ properties: d }) => `
        <div class="popup"><b>${d.ADMIN} (${d.ISO_A2})</b> <br />
        ${getPolicyText(d.migrationpolicies, minYear, maxYear)}
        </div>
      `}
            onPolygonHover={setHoverD}
            polygonsTransitionDuration={300}




        />
    </div>

}

const getColor = (policies, minYear, maxYear, year) => {

    if (policies) {

        for (let i = 0; i < policies.length; i++) {
            let startPolicy = policies[i]["Year of establishment"]
            let endPolicy = policies[i]["Year of disestablishment"]

            if (startPolicy !== "Nil" && startPolicy !== undefined && endPolicy !== undefined) {

                if ((parseInt(startPolicy.substr(0, 4)) <= maxYear) && ((endPolicy === "Nil") || (parseInt(endPolicy.substr(0, 4)) > minYear))) {
                    //             console.log("has active Policy")
                    if (parseInt(startPolicy.substr(0, 4)) < minYear) {
                        return ACTIVE_HISTORICAL_POLICY  //active policy established before the period
                    } else {
                        return ACTIVE_POLICY_ESTABLISHED_IN_PERIOD
                    }
                } else {
                    //no active policy
                    return NOPOLICY
                }
            }
        }
    }
    return NOPOLICY
    //if we want to highlight this country as "being talked about in this period"  "rgba(34,139,34,0.7)"


    // if a country has an active policy in this period, established BEFORE: "rgba(219,112,147,0.7)"

    //if a country established a policy within this period: "blue"


    //no active policy: transparent
}

/*Type of institution":"Ministry","Institution Overview"*/

const getPolicyText = (policies, minYear, maxYear) => {
    if (policies) {
        for (let i = 0; i < policies.length; i++) {
            let start = policies[i]["Year of establishment"]
            let end = policies[i]["Year of disestablishment"]
            if (start !== "Nil" && start !== undefined && end !== undefined) {
                if ((parseInt(start.substr(0, 4)) <= maxYear) && ((end === "Nil") || (parseInt(end.substr(0, 4)) > minYear))) {
                    let str = "<b>Institution Name:</b> " + policies[i]["Institution name"] + "<br />"
                    str += "<b>Institution Overview:</b> " + policies[i]["Institution Overview"] + "<br />"
                    str += "<b> Year of establishment: </b> " + policies[i]["Year of establishment"] + "<br />"
                    str += "<b> Year of disestablishment: </b> " + policies[i]["Year of disestablishment"] + "<br />"
                    return str
                }
            }
        }
    }

    return ""
}


/*"Year of establishment":"1992","Year of disestablishment":"1996"*/

const hasActivePolicyInPeriod = (policies, minYear, maxYear) => {
    //console.log("...")
    if (policies) {

        for (let i = 0; i < policies.length; i++) {
            let start = policies[i]["Year of establishment"]
            let end = policies[i]["Year of disestablishment"]

            if (start !== "Nil" && start !== undefined && end !== undefined) {

                if ((parseInt(start.substr(0, 4)) <= maxYear) && ((end === "Nil") || (parseInt(end.substr(0, 4)) > minYear))) {
                    //             console.log("has active Policy")
                    return true
                }
            }
        }
    }
    return false
}

ReactDOM.render(<ScrollyTeller />, document.getElementById('root'));
