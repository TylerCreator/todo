// Generated by https://pagedraw.io/pages/12763
import React from 'react';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:');
    
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
    }
    
    button:hover {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    .pd-onhover-parent >.pd-onhover {
        display: none;
    }
    
    .pd-onhover-parent:hover > * {
        display: none;
    }
    
    .pd-onhover-parent:hover > .pd-onhover {
        display: flex;
    }
    
    .pd-onactive-parent > .pd-onactive {
        display: none;
    }
    
    .pd-onactive-parent:active > * {
        display: none;
    }
    
    .pd-onactive-parent:active > .pd-onactive {
        display: flex;
    }
    
    .pd-onactive-parent.pd-onhover-parent:active > .pd-onhover {
        display: none;
    }
`
const Navtabs = styled.div`
    display: flex;
    flex-grow: 1;
`

const Navtabs_active_0 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 23px;
    background: #FFFFFF;
    flex-grow: 1;
`

const Navtabs_0_0_0 = styled.div`
    display: flex;
    flex-shrink: 0;
`

const Navtabs___8 = styled.div`
    width: 160px;
    flex-shrink: 0;
    font-family: "Open Sans", sans-serif;
    color: rgba(255,217,80,1);
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0px;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    text-align: CENTER;
    word-wrap: break-word;
`

const Navtabs_0_0_1 = styled.div`
    display: flex;
    flex-shrink: 0;
    margin-top: 15px;
`

const Navtabs_rectangle_8 = styled.div`
    width: 160px;
    height: 8px;
    flex-shrink: 0;
    background: rgba(255,217,80,1);
`

const Navtabs_default_4 = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 23px;
    padding-bottom: 23px;
    background: #FFFFFF;
    flex-grow: 1;
`

const Navtabs_1_0_0 = styled.div`
    display: flex;
    flex-shrink: 0;
`

const Navtabs___5 = styled.div`
    width: 160px;
    flex-shrink: 0;
    font-family: "Open Sans", sans-serif;
    color: rgba(151,151,151,1);
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0px;
    font-weight: bold;
    font-style: normal;
    text-decoration: none;
    text-align: CENTER;
    word-wrap: break-word;
`

export default class N extends React.Component {
  render() {
    return (
      <Navtabs>
          { (this.props.state === "active") ?
              <Navtabs_active_0 onClick={this.props.onClick}>
                  <Navtabs_0_0_0>
                      <Navtabs___8>{ this.props.content }</Navtabs___8>
                  </Navtabs_0_0_0>
                  <Navtabs_0_0_1><Navtabs_rectangle_8 /> </Navtabs_0_0_1>
              </Navtabs_active_0>
          : null}
          { (this.props.state === "default") ?
              <Navtabs_default_4 onClick={this.props.onClick}>
                  <Navtabs_1_0_0>
                      <Navtabs___5>{ this.props.content }</Navtabs___5>
                  </Navtabs_1_0_0>
              </Navtabs_default_4>
          : null}
      </Navtabs>
    );
  }
};
