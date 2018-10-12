// Generated by https://pagedraw.io/pages/12763
import React from 'react';
import Navtabs from './navtabs';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
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
const Navigation = styled.div`
    display: flex;
    flex-grow: 1;
`

const Navigation_component_1 = styled.div`
    display: none;
    flex-direction: column;
    flex-grow: 1;
    padding-top: 18px;
    background: #FFFFFF;
    min-height: 100vh;
    @media (max-width: 1045px) {
        display: flex;
    }
`

const Navigation_0_0 = styled.div`
    display: flex;
    flex-shrink: 0;
    padding-left: 473px;
    padding-right: 37px;
`

const Navigation_ellipse_1 = styled.div`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 100%;
    background: #D8D8D8;
`

const Navigation_0_1 = styled.div`
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0px;
`

const Navigation_component_1_5 = styled.div`
    display: none;
    flex-direction: column;
    flex-grow: 1;
    background: #FFFFFF;
    min-height: 100vh;
    @media (min-width: 1046px) {
        display: flex;
    }
`

const Navigation_1_0 = styled.div`
    display: flex;
    flex-shrink: 0;
    padding-left: 64px;
    padding-right: 27px;
`

const Navigation_1_0_0 = styled.div`
    flex-grow: 1;
    flex-basis: 0px;
    display: flex;
    flex-direction: row;
`

const Navigation_rectangle_5 = styled.div`
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    background: #D8D8D8;
    flex-grow: 1;
`

const Navigation_1_0_0_0_0_0 = styled.div`
    display: flex;
    flex-shrink: 0;
`

const Navigation_navtabs_instance_0 = styled.div`
    flex-grow: 1;
    flex-basis: 0px;
    display: flex;
    flex-direction: column;
`

const Navigation_1_0_1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 763px;
    padding-top: 18px;
    padding-bottom: 14px;
`

const Navigation_1_0_1_0 = styled.div`
    display: flex;
    flex-shrink: 0;
`

const Navigation_ellipse_3 = styled.div`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 100%;
    background: #D8D8D8;
`

const Navigation_1_1 = styled.div`
    width: 0px;
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: 0px;
`

export default class Nav extends React.Component {
  render() {
    return (
      <Navigation>
          <Navigation_component_1>
              <Navigation_0_0><Navigation_ellipse_1 /> </Navigation_0_0>
              <Navigation_0_1 /> 
          </Navigation_component_1>
          <Navigation_component_1_5>
              <Navigation_1_0>
                  <Navigation_1_0_0>
                      { this.props.list.map((elem, i) => {
                          return <Navigation_rectangle_5 key={i}>
                              <Navigation_1_0_0_0_0_0>
                                  <Navigation_navtabs_instance_0>
                                      <Navtabs content={elem.content} state={(elem.active?'active':'default')} onClick={elem.onClick} /> 
                                  </Navigation_navtabs_instance_0>
                              </Navigation_1_0_0_0_0_0>
                          </Navigation_rectangle_5>;
                      }) }
                  </Navigation_1_0_0>
                  <Navigation_1_0_1>
                      <Navigation_1_0_1_0>
                          <Navigation_ellipse_3 /> 
                      </Navigation_1_0_1_0>
                  </Navigation_1_0_1>
              </Navigation_1_0>
              <Navigation_1_1 /> 
          </Navigation_component_1_5>
      </Navigation>
    );
  }
};
