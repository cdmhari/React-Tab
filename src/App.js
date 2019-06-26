import React from "react";
import PivotTab from "./core/components/tab/pivot-tab";
import {
  CustomPivotTab,
  TabNav,
  CustomTabHeader
} from "./core/components/tab2/custom-pivot-tab";
import {
  Normal,
  Degraded,
  NotConnected
} from "./features/physical-domain/domain-status";
import TabItem from "./core/components/tab/tab-item";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadFrame: false,
      custom: false
    };
    this.helpFunc = this.helpFunc.bind(this);
  }

  helpFunc() {
    return <Normal />;
    this.setState({
      isLoadFrame: true
    });
    // return <Normal />;
    // return <iframe title="1" width="100%" height="300" id="frame" src='https://www.w3schools.com' />
  }
  onAction = () => {
    this.state.custom && alert("action trigerred");
  };
  onTabChange = index => {
    alert("selected tab index is: " + index);
  };
  handleCustomClick = () => {
    this.setState({
      custom: true
    });
  };

  render() {
    /*  This Object represents the properties of Tab component 
        Tab Content can be a HTML element / react class or function component
        If needed, Tab navs can also be made generic.
    */
    const tabObj = [
      {
        tabName: "Assigned",
        statusCount: 141,
        tabContent: <Normal />
      },
      {
        tabName: "Unassigned",
        statusCount: 38,
        tabContent: <Degraded onAction={this.onAction} />
      },
      {
        tabName: "N5 Node",
        statusCount: 1,
        tabContent: <NotConnected />
      }
    ];

    return (
      <React.Fragment>
        {/* <button onClick={this.handleCustomClick}>Check for state</button>
        {this.state.custom && <div>show me!!! {new Date().toString()}</div>} */}
        <h3>Pivot Tab</h3>
        <PivotTab tabData={tabObj} />

        <h3>Pivot Tab 2</h3>
        <CustomPivotTab activeTabIndex={1}>
          <TabNav>
            <CustomTabHeader onChange={this.onTabChange}>
              <a>Assigned</a>
              <div>141</div>
            </CustomTabHeader>
            <Normal />
          </TabNav>

          <TabNav>
            <CustomTabHeader onChange={this.onTabChange}>
              <CustomTabHeaderComponent />
            </CustomTabHeader>
            <Degraded onAction={this.onAction} />
          </TabNav>

          <TabNav>
            <TabItem
              tabName="N5 Node"
              statusCount={1}
              onChange={this.onTabChange}
            />
            <NotConnected />
          </TabNav>
        </CustomPivotTab>

        {/* <button onClick={this.helpFunc}>Help</button>
        {this.state.isLoadFrame ? (
          <iframe
            title="1"
            width="400"
            height="300"
            id="frame"
            src="https://github.com/pradel/react-responsive-modal/blob/master/docs/src/examples/multiple.js"
          />
        ) : null} */}
      </React.Fragment>
    );
  }
}

function CustomTabHeaderComponent() {
  return (
    <React.Fragment>
      <a>Unassigned</a>
      <div>38</div>
      <h4>Custom item</h4>
    </React.Fragment>
  );
}



// const initialContext = { foo: 'bar' }
// const AppContext = React.createContext(initialContext);

// function contextConsumerWrapper(WrappedComponent, Context) {
//   return class extends React.Component {
//     render() {
//       return (
//         <Context.Consumer>
//           {context => <WrappedComponent context={context} />}
//         </Context.Consumer>
//       )
//     }
//   }
// }

// function contextProviderWrapper(WrappedComponent, Context, initialContext) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props)

//       this.state = { ...initialContext }
//     }

//     // define any state changers
//     changeContext = () => {
//       this.setState({ foo: 'baz' })
//     }

//     render() {
//       return (
//         <Context.Provider value={{
//           ...this.state,
//           changeContext: this.changeContext
//         }} >
//           <WrappedComponent />
//         </Context.Provider>
//       )
//     }
//   }
// }


// class Child extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.context.changeContext}>Click</button>
//         {this.props.context.foo}
//       </div>
//     )
//   }
// }

// const ChildWithContext = contextConsumerWrapper(Child, AppContext)
// const ChildWithProvide = contextProviderWrapper(ChildWithContext, AppContext, initialContext)




// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       renderMenu: true
//     }
//   }

//   handleClick = () => {
//     this.setState((state) => {
//      return { renderMenu: !state.renderMenu }
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Link</a>
//             </li>
//             <li className="nav-item dropdown pull-md-right">
//               <a className="nav-link dropdown-toggle" data-toggle="dropdown">
//                 Dropdown
//               </a>
//               {this.state.renderMenu ?
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//                 :
//                 null}
//             </li>
//             <li className="nav-item">
//               <a className="nav-link disabled" href="#">Disabled</a>
//             </li>
//           </ul>
//           <form className="form-inline my-2 my-lg-0">
//             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//           </form>
//         </div>
//       </nav>

//       <button type='button' onClick={this.handleClick}>Test</button>
// </React.Fragment>
//     );
//   }
// }

export default App;
