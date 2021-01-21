import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Observer from '@researchgate/react-intersection-observer';
import ReactHtmlParser from 'react-html-parser';

export default class StoryPanel extends Component {
  //a storypanel is visible whenit enters the viewport until another enters.
  m_actionFilter = null
  state = {
    visible: true,
    id: this.props.id,
    paragraphs: []
  };




  componentDidMount() {
    var res = [];
    for (var i = 0; i < this.props.paragraphs.length; i++) {
      res.push(
        { "text": this.props.paragraphs[i].props.content.text, "filter": this.props.paragraphs[i].props.actionFilter }
      )



      this.setState({
        paragraphs: res
      })
    }
  }

  componentDidUpdate() {
    //   console.log(this.props)
  }
  render() {

    return (
      <section id={"section_" + this.state.id} className={`storyPanelSection ${this.state.visible && this.state.id === this.props.activeID ? 'activePanel' : 'inactivePanel'}`} >
    

         {this.props.period[0]!==0 ?
          <div id={"chap_" + this.props.chapter} className={`sticky sectiontitle`}> {this.props.period[0]} - { this.props.period[1]}</div>

         :""}

        <div className="panelcontent">
          {this.props.paragraphs.map(
            (paragraph, i) =>

              <StoryParagraph
                key={"chap_" + this.props.chapter + "_id_p" + i}
                id={"chap_" + this.props.chapter + "_id_p" + i}
                paragraph={paragraph.props.content.text}
                panToFilter={paragraph.props.panToFilter}
                highlightFilter={paragraph.props.highlightFilter}
                animation = {paragraph.props.animation}
                yearStart={paragraph.props.content.minYear}
                yearEnd={paragraph.props.content.maxYear}
                updatePeriod = { this.props.period[0]===0}
                app={this.props.app}
                id = {this.props.id}

              />

          )}
        </div>

      </section>

    )
  }
}

class StoryParagraph extends Component {


  m_firedAction = false
  m_statusChanged = false


  m_filterArray = ["any", []]
  state = {
    id: this.props.id,
    visible: false
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };


  handleScroll = (event) => {
    //if the element is visible we check where it is on the screen, and highlight it when it enters a threshold, dehighlight when it exits.
    if (this.state.visible) {
      var topOffset = ReactDOM.findDOMNode(this).getBoundingClientRect().top

      if ((topOffset > 80 && topOffset < 400) ) {
        //if this paragraph has anactionFilter to it, apply it!
        if (!this.state.highlighted) {
          if(this.props.animation === true && !this.m_firedAction) {
            this.props.app.doChapterAnimation(this.props.highlightFilter.objects)
            this.m_firedAction = true
          }
         
          this.setState({
            highlighted: true
          })
          this.props.app.highlightObjects(this.props.highlightFilter.objects)
          this.props.app.setActiveID(this.props.id)
          //   console.log(this.props.yearStart)
          this.props.app.updateYears(this.props.yearStart, this.props.yearEnd)
          
          if(this.props.panToFilter)
            this.props.app.panToCountry(this.props.panToFilter.country)
          
        }


      } else {

        if (this.state.highlighted) {
          //visible should update...
          this.setState({
            highlighted: false
          })
          //deactivate filter if thereisonw
          this.m_firedAction = false
        }

      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    //construct the filter if there is one
    /*if (this.props.actionFilter) {
      this.m_filterArray = ["any"]
      //create the filter syntax fromthe actionFilter provided
      for (var i = 0; i < this.props.actionFilter.types.length; i++) {
        this.m_filterArray.push(["==", ["get", "type"], this.props.actionFilter.types[i]])
      }
      
     
    }*/
  }

  //gets called when the element intersects with Observer
  paragraphChange = event => {
    this.setState({
      visible: event.isIntersecting
    })

  }

  render() {
    return (
      <div>
      {this.props.updatePeriod ? 
          <div className={`sticky sectiontitle`}> {this.props.yearStart} - { this.props.yearEnd}</div>
      : 
      ""}
        <Observer
          onChange={this.paragraphChange}
        >

          <p
            className={`scrolltext ${this.state.highlighted ? "active" : ""}`}
            id={this.props.id}>
            {ReactHtmlParser(this.props.paragraph)}

          </p>
        </Observer>
        </div>
   
    )
  }
}