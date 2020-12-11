import React, { Component } from 'react';
import Globe from 'react-globe.gl'

import d3 from 'd3'

export default class GlobeFunctions  extends Component {


  state= {
    hoverD: false
  }


  setHoverD = () => {
    this.setState(prevState =>({
      hoverD: !prevState.hoverD
    }))
  }
  setCountries = (countries) => {

     this.setState({
       countries: countries
     })
  }

  componentDidMount(){
    console.log("blubb")
    fetch(process.env.PUBLIC_URL + '/mergedMigrations.json').then(response => {
        console.log(response);
        return response.json();
    }).then(this.setCountries);
  }

  componentDidUpdate(){

  }

  render() {

    return ( 
    <div className="globeContainer">
      {
      this.state.countries ? 
      <Globe
          width={this.props.width}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

          polygonsData={this.state.countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
          polygonAltitude={d => d === this.state.hoverD ? 0.10 : 0.03}
          polygonCapColor={d => this.hasActivePolicyInYear(d.properties.migrationpolicies, this.props.minYear, this.props.maxYear) ? "pink" : "grey"}
          polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
          polygonStrokeColor={() => '#111'}
          polygonLabel={({ properties: d }) => `
      <div class="popup"><b>${d.ADMIN} (${d.ISO_A2}):</b> <br />
      ${this.getPolicyText(d.migrationpolicies,this.props.minYear, this.props.maxYear)}
      </div>
    `}
          onPolygonHover={this.setHoverD}
          polygonsTransitionDuration={300}
      />
      : ""}
   
  </div>
  )
  }


/*Type of institution":"Ministry","Institution Overview"*/

getPolicyText(policies, minYear, maxYear) {
  if (policies) {
      for (let i = 0; i < policies.length; i++) {
          let start = policies[i]["Year of establishment"]
          let end = policies[i]["Year of disestablishment"]
          if (start !== "Nil" && start !== undefined && end !== undefined) {
              if (parseInt(start.substr(0,4) <= maxYear && (end === "Nil" || parseInt(end.substr(0, 4)) > minYear))) {
                  let str = "<b>Institution Name:</b> " + policies[i]["Institution name"] + "<br />"
                  str += "<b>Institution Overview:</b> " + policies[i]["Institution Overview"]
                  str += "<b> Year of establishment: </b> " + policies[i]["Year of establishment"]
                  str += "<b> Year of disestablishment: </b> " + policies[i]["Year of disestablishment"]
                  return str
              }
          }
      }
  }

  return ""
}
/*"Year of establishment":"1992","Year of disestablishment":"1996"*/

hasActivePolicyInYear(policies, minYear, maxYear) {
 // console.log(policies)
 // console.log(minYear)
  if (policies) {
      for (let i = 0; i < policies.length; i++) {
          let start = policies[i]["Year of establishment"]
          let end = policies[i]["Year of disestablishment"]
          if (start !== "Nil" && start !== undefined && end !== undefined) {
              if (parseInt(start.substr(0,4) < maxYear && (end === "Nil" || parseInt(end.substr(0, 4)) > minYear))) {
                console.log("yay")
                  return true
              }
          }
      }
  }
  return false
    
}
}