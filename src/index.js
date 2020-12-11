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

import * as d3 from 'd3'
import Globe from 'react-globe.gl'
import { isElementOfType } from 'react-dom/test-utils';
class ScrollyTeller extends Component {


    m_debug = true
    m_percentageCalcs = []
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
        maxYear:2020

    }
    panelChanged = false
    // m_mapFunctions = null
    //"Facility Name", "Status", "Region", "Technology", "Generator Capacity (MW)", "Latitude", "Longitude"


    UNSAFE_componentWillMount = function () {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions()
        var i
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
   //     console.log(id)
        this.setState({
            activeId: id

        })
    }

    createPanelContent(year, paragraphs) {

        //read the text from somewhere based on the given year
        var result = [];
        var filter = "";
        var key = ""
        for (var i = 0; i < paragraphs.length; i++) {
            key = year + "_" + i
            //check for features like links, if its a link, replace the "text" with a hyperlinnk to the "url"
            if (paragraphs[i].features) {
                for (var j = 0; j < paragraphs[i].features.length; j++) {
                    var feature = paragraphs[i].features[j]
                    if (feature.type === "link") {
                        paragraphs[i].text = paragraphs[i].text.replace(feature.text, '<a href="' + feature.url + '" target="_blank">' + feature.text + '</a>')
                        //                console.log(paragraphs[i].text)
                    }
                }
            }
            //if actions aredefined, they are added to the element here.
            if (paragraphs[i].actions) {
                for (j = 0; j < paragraphs[i].actions.length; j++) {
                    var action = paragraphs[i].actions[j]
                    if (action.highlight) {
                        if (action.highlight.type === "type") {
                            filter = {

                                "action": this.setActiveMulti,
                                "objects": []
                            }
                        } else if (action.highlight.type === "plant") {
                            filter = {

                                "action": this.setActiveName,
                                "objects": []
                            }
                        }
                        //highlight means highlight the words in the text with a class of the same name, and filter things on the map of this name
                        for (var k = 0; k < action.highlight.keywords.length; k++) {
                            paragraphs[i].text = paragraphs[i].text.replace(action.highlight.keywords[k], "<span class='" + action.highlight.keywords[k] + "'>" + action.highlight.keywords[k] + "</span>")
                            filter.objects.push(this.cap(action.highlight.keywords[k]))

                            //capitalise first letter otherwise the filter breaks 
                        }
                    }
                }
            }

            result.push(
                <div content={paragraphs[i]} id={key} actionFilter={filter} />
            )
        }

        return result

    }

    updateYears(min,max){
    //    console.log("update years: " + min + "   " + max)
        this.setState({
            minYear: min,
            maxYear:max
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
                                />
                        )}
                    </div>
                    {this.state.width}
                    <GlobeFunctions width={parseInt(this.state.width / 2)} minYear = {this.state.minYear} maxYear={this.state.maxYear} />

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
const { useState, useEffect, useMemo } = React;


const GlobeFunctions = ({ width, minYear, maxYear }) => {

    const [countries, setCountries] = useState({ features: [] });
    const [hoverD, setHoverD] = useState();

    useEffect(() => {
        // load data
        fetch(process.env.PUBLIC_URL + '/mergedMigrations.json').then(response => {
            console.log(response);
            return response.json();
        }).then(setCountries);
    }, []);

    const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
    const getVal = feat => feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);

    const maxVal = useMemo(
        () => Math.max(...countries.features.map(getVal)),
        [countries]
    );


    colorScale.domain([0, maxVal]);



    return <div className="globeContainer">

        <Globe
            width={width}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

            polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            polygonAltitude={d => d === hoverD ? 0.10 : 0.03}
            polygonCapColor={d => hasActivePolicyInYear(d.properties.migrationpolicies, minYear, maxYear) ? "pink" : "grey"}
            polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
            polygonStrokeColor={() => '#111'}
            polygonLabel={({ properties: d }) => `
        <div class="popup"><b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
        ${getPolicyText(d.migrationpolicies, minYear, maxYear)}
        </div>
      `}
            onPolygonHover={setHoverD}
            polygonsTransitionDuration={300}
        />
    </div>

}

/*Type of institution":"Ministry","Institution Overview"*/

 const getPolicyText = (policies, minYear, maxYear) => {
    if (policies) {
        for (let i = 0; i < policies.length; i++) {
            let start = policies[i]["Year of establishment"]
            let end = policies[i]["Year of disestablishment"]
            if (start !== "Nil" && start !== undefined && end !== undefined) {
                if ((parseInt(start.substr(0,4)) <= maxYear) && ( (end === "Nil") || (parseInt(end.substr(0, 4)) > minYear) ) ) {
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

const hasActivePolicyInYear = (policies, minYear, maxYear) => {
    //console.log("...")
    if (policies) {

        for (let i = 0; i < policies.length; i++) {
            let start = policies[i]["Year of establishment"]
            let end = policies[i]["Year of disestablishment"]
  
            if (start !== "Nil" && start !== undefined && end !== undefined) {

                if ((parseInt(start.substr(0,4)) <= maxYear) && ( (end === "Nil") || (parseInt(end.substr(0, 4)) > minYear) ) ) {
                    console.log("has active Policy")
                    return true
                }
            }
        }
    }
    return false
}

ReactDOM.render(<ScrollyTeller />, document.getElementById('root'));
